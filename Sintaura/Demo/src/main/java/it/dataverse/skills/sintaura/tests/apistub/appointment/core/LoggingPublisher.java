package it.dataverse.skills.sintaura.tests.apistub.appointment.core;

public final class LoggingPublisher<T> extends AbstractLoggingPublisher<T> {

    public LoggingPublisher(Logger logger) {
        super(logger);
    }

    @Override
    protected void doPublish(T item) {
        // log-only: la pubblicazione effettiva è già stata loggata da AbstractLoggingPublisher
    }
}
