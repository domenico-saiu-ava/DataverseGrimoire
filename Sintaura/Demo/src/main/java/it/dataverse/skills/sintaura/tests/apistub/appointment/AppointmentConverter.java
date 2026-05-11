package it.dataverse.skills.sintaura.tests.apistub.appointment;

import it.dataverse.skills.sintaura.tests.apistub.appointment.core.AbstractLoggingConverter;
import it.dataverse.skills.sintaura.tests.apistub.appointment.core.Converter;
import it.dataverse.skills.sintaura.tests.apistub.appointment.core.Logger;
import it.dataverse.skills.sintaura.tests.apistub.appointment.models.Account;
import it.dataverse.skills.sintaura.tests.apistub.appointment.models.Appointment;

public class AppointmentConverter extends AbstractLoggingConverter<Appointment, AppointmentOutput> {

    private final Converter<Account, AccountOutput> accountConverter;

    public AppointmentConverter(Logger logger, Converter<Account, AccountOutput> accountConverter) {
        super(logger);
        this.accountConverter = accountConverter;
    }

    @Override
    protected AppointmentOutput doConvert(Appointment input) {
        AppointmentOutput out = new AppointmentOutput();

        // TODO: map Appointment own fields to AppointmentOutput

        Account regarding = input.getRegardingObjectIdAccountAppointment();
        if (regarding != null) {
            out.setAccountOutput(accountConverter.convert(regarding));
        }

        return out;
    }
}
