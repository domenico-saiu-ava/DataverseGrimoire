package it.dataverse.skills.sintaura.tests.apistub.appointment;

import it.dataverse.skills.sintaura.tests.apistub.appointment.core.AbstractLoggingConverter;
import it.dataverse.skills.sintaura.tests.apistub.appointment.core.Logger;
import it.dataverse.skills.sintaura.tests.apistub.appointment.models.Account;

public class AccountConverter extends AbstractLoggingConverter<Account, AccountOutput> {

    public AccountConverter(Logger logger) {
        super(logger);
    }

    @Override
    protected AccountOutput doConvert(Account input) {
        AccountOutput out = new AccountOutput();
        // TODO: map fields from input to out
        return out;
    }
}
