package it.dataverse.skills.sintaura.tests.apistub.appointment.core;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InOrder;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.inOrder;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class IntegrationPipelineTest {

    @Mock Provider<String> provider;
    @Mock Validator<String> validator;
    @Mock Converter<String, Integer> converter;
    @Mock Publisher<Integer> publisher;
    @Mock Logger logger;

    @Test
    void shouldRunFullPipelineForAllValidRecords() throws Exception {
        when(provider.fetch()).thenReturn(List.of("a", "b", "c"));
        when(validator.validate(any())).thenReturn(ValidationResult.ok());
        when(converter.convert(any())).thenReturn(42);

        var sut = new IntegrationPipeline<>(provider, validator, converter, publisher, logger);
        PipelineResult r = sut.run();

        assertEquals(3, r.processed());
        assertEquals(0, r.skipped());
        assertEquals(0, r.failed());

        InOrder order = inOrder(provider, validator, converter, publisher);
        order.verify(provider).fetch();
        order.verify(validator).validate("a");
        order.verify(converter).convert("a");
        order.verify(publisher).publish(42);
    }

    @Test
    void shouldSkipInvalidRecordsAndProcessTheRest() throws Exception {
        when(provider.fetch()).thenReturn(List.of("ok1", "bad", "ok2"));
        when(validator.validate("ok1")).thenReturn(ValidationResult.ok());
        when(validator.validate("bad")).thenReturn(ValidationResult.fail("nope"));
        when(validator.validate("ok2")).thenReturn(ValidationResult.ok());
        when(converter.convert(any())).thenReturn(1);

        var sut = new IntegrationPipeline<>(provider, validator, converter, publisher, logger);
        PipelineResult r = sut.run();

        assertEquals(2, r.processed());
        assertEquals(1, r.skipped());
        assertEquals(0, r.failed());
        verify(converter, never()).convert("bad");
        verify(publisher, times(2)).publish(any());
    }

    @Test
    void shouldCountFailureWhenConverterThrowsAndContinue() throws Exception {
        when(provider.fetch()).thenReturn(List.of("a", "b"));
        when(validator.validate(any())).thenReturn(ValidationResult.ok());
        when(converter.convert("a")).thenThrow(new RuntimeException("boom"));
        when(converter.convert("b")).thenReturn(7);

        var sut = new IntegrationPipeline<>(provider, validator, converter, publisher, logger);
        PipelineResult r = sut.run();

        assertEquals(1, r.processed());
        assertEquals(0, r.skipped());
        assertEquals(1, r.failed());
        verify(publisher, times(1)).publish(7);
    }

    @Test
    void shouldCountFailureWhenPublisherThrows() throws Exception {
        when(provider.fetch()).thenReturn(List.of("a"));
        when(validator.validate(any())).thenReturn(ValidationResult.ok());
        when(converter.convert(any())).thenReturn(1);
        org.mockito.Mockito.doThrow(new RuntimeException("publish failed")).when(publisher).publish(any());

        var sut = new IntegrationPipeline<>(provider, validator, converter, publisher, logger);
        PipelineResult r = sut.run();

        assertEquals(0, r.processed());
        assertEquals(0, r.skipped());
        assertEquals(1, r.failed());
    }

    @Test
    void shouldHandleEmptyInputList() throws Exception {
        when(provider.fetch()).thenReturn(List.of());

        var sut = new IntegrationPipeline<>(provider, validator, converter, publisher, logger);
        PipelineResult r = sut.run();

        assertEquals(0, r.processed());
        assertEquals(0, r.skipped());
        assertEquals(0, r.failed());
        verify(validator, never()).validate(any());
    }
}
