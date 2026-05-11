package it.dataverse.skills.sintaura.tests.apistub.appointment;

import it.dataverse.skills.sintaura.tests.apistub.appointment.models.Appointment;
import it.dataverse.skills.sintaura.tests.apistub.appointment.providers.AppointmentProvider;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.io.IOException;
import java.io.InputStream;
import java.net.URI;
import java.util.List;
import java.util.Properties;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assumptions.assumeTrue;

class AppointmentProviderIntegrationTest {

    private static final String PROP_BASE_URL = "dataverse.baseUrl";
    private static final String PROP_TOKEN    = "dataverse.accessToken";
    private static final String ENV_BASE_URL  = "DATAVERSE_BASE_URL";
    private static final String ENV_TOKEN     = "DATAVERSE_ACCESS_TOKEN";

    @Test
    @DisplayName("AppointmentProvider.findAll() against a real Dataverse returns a parseable response")
    void shouldReturnParseableAppointmentListFromRealDataverse() throws IOException, InterruptedException {
        Properties fileProps = loadFileProperties();

        String baseUrl = resolve(PROP_BASE_URL, ENV_BASE_URL, fileProps);
        String token   = resolve(PROP_TOKEN,    ENV_TOKEN,    fileProps);

        assumeTrue(baseUrl != null && !baseUrl.isBlank(),
            "dataverse.baseUrl not configured (system prop, env DATAVERSE_BASE_URL, or application.properties) — skipping integration test");
        assumeTrue(token != null && !token.isBlank(),
            "dataverse.accessToken not configured (system prop, env DATAVERSE_ACCESS_TOKEN, or application.properties) — skipping integration test");

        var provider = new AppointmentProvider(URI.create(baseUrl), token);

        // Provider throws IOException on HTTP != 200 or on a body without the
        // OData "value" array envelope (e.g. {"error": {...}}). A clean return
        // implicitly asserts: HTTP 200 + no Dataverse error envelope.
        List<Appointment> results = provider.findAll();

        assertNotNull(results, "results list must be non-null");
    }

    private static String resolve(String sysPropKey, String envKey, Properties fileProps) {
        String v = System.getProperty(sysPropKey);
        if (v != null && !v.isBlank()) return v;
        v = System.getenv(envKey);
        if (v != null && !v.isBlank()) return v;
        v = fileProps.getProperty(sysPropKey);
        if (v != null && !v.isBlank()) return v;
        return null;
    }

    private static Properties loadFileProperties() {
        Properties p = new Properties();
        try (InputStream in = AppointmentProviderIntegrationTest.class
                .getClassLoader().getResourceAsStream("application.properties")) {
            if (in != null) {
                p.load(in);
            }
        } catch (IOException ignored) {
            // file is optional; fall back to env / sysprops
        }
        return p;
    }
}
