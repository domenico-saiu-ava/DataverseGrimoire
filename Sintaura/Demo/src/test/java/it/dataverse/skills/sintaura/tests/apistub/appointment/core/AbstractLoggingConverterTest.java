package it.dataverse.skills.sintaura.tests.apistub.appointment.core;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InOrder;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.inOrder;

@ExtendWith(MockitoExtension.class)
class AbstractLoggingConverterTest {

    @Mock Logger logger;

    @Test
    void shouldLogBeginAndEndAroundDoConvert() {
        AbstractLoggingConverter<String, Integer> sut = new AbstractLoggingConverter<>(logger) {
            @Override protected Integer doConvert(String input) { return input.length(); }
        };

        Integer result = sut.convert("hello");

        assertEquals(5, result);
        InOrder o = inOrder(logger);
        o.verify(logger).debug(eq("convert: begin"));
        o.verify(logger).debug(eq("convert: end"));
    }
}
