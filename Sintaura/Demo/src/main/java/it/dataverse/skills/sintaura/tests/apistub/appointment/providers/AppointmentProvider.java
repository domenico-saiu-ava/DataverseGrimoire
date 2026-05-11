package it.dataverse.skills.sintaura.tests.apistub.appointment.providers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.CollectionType;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import it.dataverse.skills.sintaura.tests.apistub.appointment.core.Provider;
import it.dataverse.skills.sintaura.tests.apistub.appointment.models.Appointment;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.List;

public final class AppointmentProvider implements Provider<Appointment> {

    public static final String URL_PATH = "/api/data/v9.2/appointments";
    public static final String DEFAULT_QUERY =
        "$select=subject,scheduledstart,scheduledend,location,statecode"
        + "&$expand=regardingobjectid_account_appointment($select=name,accountnumber,emailaddress1,telephone1,websiteurl)"
        + "&$filter=regardingobjecttypecode eq 'account'"
        + "&$orderby=scheduledstart desc"
        + "&$top=50";

    private static final ObjectMapper MAPPER = new ObjectMapper().registerModule(new JavaTimeModule());

    private final URI baseUri;
    private final String accessToken;
    private final HttpClient client;

    public AppointmentProvider(URI baseUri) {
        this(baseUri, null);
    }

    public AppointmentProvider(URI baseUri, String accessToken) {
        this.baseUri = baseUri;
        this.accessToken = accessToken;
        this.client = HttpClient.newHttpClient();
    }

    public List<Appointment> findAll() throws IOException, InterruptedException {
        return find(DEFAULT_QUERY);
    }

    @Override
    public List<Appointment> fetch() throws Exception {
        return findAll();
    }

    public List<Appointment> find(String odataQuery) throws IOException, InterruptedException {
        URI target;
        try {
            target = new URI(baseUri.getScheme(), null, baseUri.getHost(), baseUri.getPort(),
                URL_PATH, (odataQuery == null || odataQuery.isEmpty()) ? null : odataQuery, null);
        } catch (URISyntaxException e) {
            throw new IOException("Invalid URI components", e);
        }
        HttpRequest.Builder builder = HttpRequest.newBuilder(target)
            .header("Accept", "application/json");
        if (accessToken != null && !accessToken.isBlank()) {
            builder.header("Authorization", "Bearer " + accessToken);
        }
        HttpRequest request = builder.GET().build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        if (response.statusCode() != 200) {
            throw new IOException("Unexpected status " + response.statusCode() + " from " + target);
        }
        var node = MAPPER.readTree(response.body()).get("value");
        if (node == null || !node.isArray()) {
            throw new IOException("Response missing 'value' array envelope");
        }
        CollectionType type = MAPPER.getTypeFactory().constructCollectionType(List.class, Appointment.class);
        return MAPPER.readValue(node.traverse(MAPPER), type);
    }
}
