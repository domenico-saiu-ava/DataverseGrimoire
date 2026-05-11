package it.dataverse.skills.sintaura.tests.apistub.appointment;

import it.dataverse.skills.sintaura.tests.apistub.appointment.core.ConsoleLogger;
import it.dataverse.skills.sintaura.tests.apistub.appointment.core.IntegrationPipeline;
import it.dataverse.skills.sintaura.tests.apistub.appointment.core.Logger;
import it.dataverse.skills.sintaura.tests.apistub.appointment.core.NullProvider;
import it.dataverse.skills.sintaura.tests.apistub.appointment.core.PipelineResult;
import it.dataverse.skills.sintaura.tests.apistub.appointment.core.Provider;
import it.dataverse.skills.sintaura.tests.apistub.appointment.models.Appointment;
import it.dataverse.skills.sintaura.tests.apistub.appointment.providers.AppointmentProvider;

import java.net.URI;

public final class AppointmentIntegration {

    private AppointmentIntegration() { }

    /**
     * Wire the dependency tree bottom-up (children first, parent last) and
     * return a pipeline ready to run. Extracted from main() so it's testable
     * with a mocked Provider.
     */
    public static IntegrationPipeline<Appointment, AppointmentOutput> buildPipeline(
            Provider<Appointment> provider, Logger logger) {

        AccountValidator   accountValidator   = new AccountValidator(logger);
        AccountConverter   accountConverter   = new AccountConverter(logger);
        AccountPublisher   accountPublisher   = new AccountPublisher(logger);

        AppointmentValidator validator =
            new AppointmentValidator(logger, accountValidator);
        AppointmentConverter converter =
            new AppointmentConverter(logger, accountConverter);
        AppointmentPublisher publisher =
            new AppointmentPublisher(logger, accountPublisher);

        return new IntegrationPipeline<>(provider, validator, converter, publisher, logger);
    }

    public static void main(String[] args) throws Exception {
        Logger logger = new ConsoleLogger();

        String baseUrl = System.getenv("DATAVERSE_BASE_URL");
        String token   = System.getenv("DATAVERSE_ACCESS_TOKEN");

        Provider<Appointment> provider;
        if (baseUrl != null && !baseUrl.isBlank() && token != null && !token.isBlank()) {
            provider = new AppointmentProvider(URI.create(baseUrl), token);
        } else {
            logger.warn("DATAVERSE_BASE_URL or DATAVERSE_ACCESS_TOKEN not set — using NullProvider (empty list)");
            provider = new NullProvider<>();
        }

        IntegrationPipeline<Appointment, AppointmentOutput> pipeline = buildPipeline(provider, logger);
        PipelineResult result = pipeline.run();
        logger.info("done: " + result);
    }
}
