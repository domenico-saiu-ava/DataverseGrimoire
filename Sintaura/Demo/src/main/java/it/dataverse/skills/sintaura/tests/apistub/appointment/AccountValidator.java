package it.dataverse.skills.sintaura.tests.apistub.appointment;

import it.dataverse.skills.sintaura.tests.apistub.appointment.core.AbstractLoggingValidator;
import it.dataverse.skills.sintaura.tests.apistub.appointment.core.Logger;
import it.dataverse.skills.sintaura.tests.apistub.appointment.core.ValidationResult;
import it.dataverse.skills.sintaura.tests.apistub.appointment.models.Account;

public class AccountValidator extends AbstractLoggingValidator<Account> {

    public AccountValidator(Logger logger) {
        super(logger);
    }

    @Override
    protected ValidationResult doValidate(Account input) {
        // TODO: add validation rules. Default implementation accepts everything.
        return ValidationResult.ok();
    }
}
