package it.dataverse.skills.sintaura.tests.apistub.appointment.core;

public abstract class AbstractLoggingPublisher<T> implements Publisher<T> {

    protected final Logger logger;

    protected AbstractLoggingPublisher(Logger logger) {
        this.logger = logger;
    }

    @Override
    public final void publish(T item) throws Exception {
        logger.info("publish: " + item);
        doPublish(item);
    }

    protected abstract void doPublish(T item) throws Exception;
}
