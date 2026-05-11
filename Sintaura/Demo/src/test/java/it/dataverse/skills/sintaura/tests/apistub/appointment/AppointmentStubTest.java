package it.dataverse.skills.sintaura.tests.apistub.appointment;

import com.github.tomakehurst.wiremock.junit5.WireMockRuntimeInfo;
import com.github.tomakehurst.wiremock.junit5.WireMockTest;
import it.dataverse.skills.sintaura.tests.apistub.appointment.models.Account;
import it.dataverse.skills.sintaura.tests.apistub.appointment.models.Appointment;
import it.dataverse.skills.sintaura.tests.apistub.appointment.providers.AppointmentProvider;
import it.dataverse.skills.sintaura.tests.apistub.appointment.stubs.AppointmentStub;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.net.URI;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.fail;

@WireMockTest
class AppointmentStubTest {

    @Test
    @DisplayName("AppointmentProvider.findAll() against the WireMock stub returns populated DTOs with expanded Account")
    void shouldReturnPopulatedAppointmentList(WireMockRuntimeInfo wm) throws Exception {

        AppointmentStub.stubGetList(wm.getWireMock(), 5);

        var provider = new AppointmentProvider(URI.create(wm.getHttpBaseUrl()));
        List<Appointment> results = provider.findAll();

        assertEquals(5, results.size(), "stub must return exactly 5 records");
        Appointment first = results.get(0);
        assertNotNull(first, "first record must be non-null");
        assertNotNull(first.getActivityId(),     "activityid must be populated");
        assertNotNull(first.getSubject(),        "subject must be populated");
        assertNotNull(first.getScheduledStart(), "scheduledstart must be populated");
        assertNotNull(first.getScheduledEnd(),   "scheduledend must be populated");
        assertNotNull(first.getLocation(),       "location must be populated");
        assertNotNull(first.getStateCode(),      "statecode must be populated");
        assertTrue(first.getScheduledEnd().isAfter(first.getScheduledStart()),
            "paired-date preamble must guarantee scheduledend > scheduledstart");

        Account account = first.getRegardingObjectIdAccountAppointment();
        assertNotNull(account,                       "expanded Account must be present");
        assertNotNull(account.getAccountId(),        "Account.accountid must be populated");
        assertNotNull(account.getName(),             "Account.name must be populated");
        assertNotNull(account.getEmailAddress1(),    "Account.emailaddress1 must be populated");
        assertNotNull(account.getTelephone1(),       "Account.telephone1 must be populated");
        assertNotNull(account.getWebsiteUrl(),       "Account.websiteurl must be populated");
        
    }
}
