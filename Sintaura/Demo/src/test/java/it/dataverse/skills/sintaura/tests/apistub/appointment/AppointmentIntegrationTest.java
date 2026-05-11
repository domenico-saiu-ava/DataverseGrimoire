package it.dataverse.skills.sintaura.tests.apistub.appointment;

import it.dataverse.skills.sintaura.tests.apistub.appointment.core.IntegrationPipeline;
import it.dataverse.skills.sintaura.tests.apistub.appointment.core.NullLogger;
import it.dataverse.skills.sintaura.tests.apistub.appointment.core.PipelineResult;
import it.dataverse.skills.sintaura.tests.apistub.appointment.core.Provider;
import it.dataverse.skills.sintaura.tests.apistub.appointment.models.Account;
import it.dataverse.skills.sintaura.tests.apistub.appointment.models.Appointment;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class AppointmentIntegrationTest {

    @Mock Provider<Appointment> provider;

    @Test
    void shouldRunWiredPipelineEndToEndWithStubProvider() throws Exception {
        Appointment record = new Appointment();
        record.setRegardingObjectIdAccountAppointment(new Account());
        when(provider.fetch()).thenReturn(List.of(record));

        IntegrationPipeline<Appointment, AppointmentOutput> pipeline =
            AppointmentIntegration.buildPipeline(provider, new NullLogger());

        PipelineResult r = pipeline.run();

        assertEquals(1, r.processed());
        assertEquals(0, r.skipped());
        assertEquals(0, r.failed());
    }
}
