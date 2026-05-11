package it.dataverse.skills.sintaura.tests.apistub.appointment.core;

import java.util.List;

public abstract class AbstractLoggingProvider<T> implements Provider<T> {

    protected final Logger logger;

    protected AbstractLoggingProvider(Logger logger) {
        this.logger = logger;
    }

    @Override
    public final List<T> fetch() throws Exception {
        logger.debug("fetch: begin");
        try {
            List<T> result = doFetch();
            logger.info("fetch: end count=" + (result == null ? 0 : result.size()));
            return result;
        } catch (Exception e) {
            logger.error("fetch: failed " + e.getMessage());
            throw e;
        }
    }

    protected abstract List<T> doFetch() throws Exception;
}
