package it.dataverse.skills.sintaura.tests.apistub.appointment;

import it.dataverse.skills.sintaura.tests.apistub.appointment.core.Logger;
import it.dataverse.skills.sintaura.tests.apistub.appointment.core.Publisher;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.contains;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class AppointmentPublisherTest {

    @Mock Publisher<AccountOutput> accountPublisher;
    @Mock Logger logger;

    @Test
    void shouldLogRootPublishViaAbstractLogging() throws Exception {
        var sut = new AppointmentPublisher(logger, accountPublisher);
        AppointmentOutput out = new AppointmentOutput();

        sut.publish(out);

        verify(logger).info(contains("publish:"));
    }

    @Test
    void shouldNotCascadePublishToChildPublisherByDefault() throws Exception {
        var sut = new AppointmentPublisher(logger, accountPublisher);
        AppointmentOutput out = new AppointmentOutput();
        out.setAccountOutput(new AccountOutput());

        sut.publish(out);

        // cascade is opt-in: doPublish() body has the call commented out
        verify(accountPublisher, never()).publish(any());
    }
}
