package it.dataverse.skills.sintaura.tests.apistub.appointment;

import it.dataverse.skills.sintaura.tests.apistub.appointment.core.AbstractLoggingPublisher;
import it.dataverse.skills.sintaura.tests.apistub.appointment.core.Logger;
import it.dataverse.skills.sintaura.tests.apistub.appointment.core.Publisher;

public class AppointmentPublisher extends AbstractLoggingPublisher<AppointmentOutput> {

    @SuppressWarnings("unused") // kept for opt-in cascade publish; see doPublish()
    private final Publisher<AccountOutput> accountPublisher;

    public AppointmentPublisher(Logger logger, Publisher<AccountOutput> accountPublisher) {
        super(logger);
        this.accountPublisher = accountPublisher;
    }

    @Override
    protected void doPublish(AppointmentOutput item) throws Exception {
        // TODO: publish the root AppointmentOutput
        //
        // To cascade-publish the expanded child, uncomment:
        // if (item.getAccountOutput() != null) {
        //     accountPublisher.publish(item.getAccountOutput());
        // }
    }
}
