package it.dataverse.skills.sintaura.tests.apistub.appointment;

import it.dataverse.skills.sintaura.tests.apistub.appointment.core.AbstractLoggingPublisher;
import it.dataverse.skills.sintaura.tests.apistub.appointment.core.Logger;

public class AccountPublisher extends AbstractLoggingPublisher<AccountOutput> {

    public AccountPublisher(Logger logger) {
        super(logger);
    }

    @Override
    protected void doPublish(AccountOutput item) throws Exception {
        // TODO: implement actual publish (HTTP POST, file write, message queue, ...)
    }
}
