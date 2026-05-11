package it.dataverse.skills.sintaura.tests.apistub.appointment.core;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.concurrent.atomic.AtomicReference;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.contains;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class AbstractLoggingPublisherTest {

    @Mock Logger logger;

    @Test
    void shouldLogPublishAndCallDoPublish() throws Exception {
        AtomicReference<String> received = new AtomicReference<>();
        AbstractLoggingPublisher<String> sut = new AbstractLoggingPublisher<>(logger) {
            @Override protected void doPublish(String item) { received.set(item); }
        };

        sut.publish("payload");

        assertEquals("payload", received.get());
        verify(logger).info(contains("publish:"));
    }
}
