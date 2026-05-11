package it.dataverse.skills.sintaura.tests.apistub.appointment;

import it.dataverse.skills.sintaura.tests.apistub.appointment.core.Logger;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.ArgumentMatchers.contains;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class AccountPublisherTest {

    @Mock Logger logger;

    @Test
    void shouldLogPublishViaAbstractLogging() throws Exception {
        var sut = new AccountPublisher(logger);

        sut.publish(new AccountOutput());

        verify(logger).info(contains("publish:"));
    }
}
