package it.dataverse.skills.sintaura.tests.apistub.appointment.stubs;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.github.tomakehurst.wiremock.client.WireMock;
import it.dataverse.skills.sintaura.tests.apistub.appointment.factories.AppointmentFactory;
import it.dataverse.skills.sintaura.tests.apistub.appointment.models.Appointment;
import it.dataverse.skills.sintaura.tests.apistub.appointment.providers.AppointmentProvider;

import java.util.Map;

import static com.github.tomakehurst.wiremock.client.WireMock.get;
import static com.github.tomakehurst.wiremock.client.WireMock.okJson;
import static com.github.tomakehurst.wiremock.client.WireMock.urlPathEqualTo;

public final class AppointmentStub {

    private static final ObjectMapper MAPPER = new ObjectMapper().registerModule(new JavaTimeModule());

    private AppointmentStub() {}

    public static void stubGetList(WireMock client, int count) throws Exception {
        var values = AppointmentFactory.createMany(count);
        var body = MAPPER.writeValueAsString(Map.of("value", values));
        client.register(get(urlPathEqualTo(AppointmentProvider.URL_PATH))
            .willReturn(okJson(body)));
    }

    public static Appointment stubGetSingle(WireMock client) throws Exception {
        var single = AppointmentFactory.create();
        var body = MAPPER.writeValueAsString(single);
        client.register(get(urlPathEqualTo(AppointmentProvider.URL_PATH))
            .willReturn(okJson(body)));
        return single;
    }
}
