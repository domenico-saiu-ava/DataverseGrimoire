package it.dataverse.skills.sintaura.tests.apistub.appointment;

import it.dataverse.skills.sintaura.tests.apistub.appointment.core.AbstractLoggingValidator;
import it.dataverse.skills.sintaura.tests.apistub.appointment.core.Logger;
import it.dataverse.skills.sintaura.tests.apistub.appointment.core.ValidationResult;
import it.dataverse.skills.sintaura.tests.apistub.appointment.core.Validator;
import it.dataverse.skills.sintaura.tests.apistub.appointment.models.Account;
import it.dataverse.skills.sintaura.tests.apistub.appointment.models.Appointment;

import java.util.ArrayList;
import java.util.List;

public class AppointmentValidator extends AbstractLoggingValidator<Appointment> {

    private static final String NAV_REGARDINGOBJECTID_ACCOUNT_APPOINTMENT =
        "regardingobjectid_account_appointment";

    private final Validator<Account> accountValidator;

    public AppointmentValidator(Logger logger, Validator<Account> accountValidator) {
        super(logger);
        this.accountValidator = accountValidator;
    }

    @Override
    protected ValidationResult doValidate(Appointment input) {
        List<String> errors = new ArrayList<>();

        // TODO: validation rules on Appointment own fields

        Account regarding = input.getRegardingObjectIdAccountAppointment();
        if (regarding != null) {
            ValidationResult childResult = accountValidator.validate(regarding);
            if (!childResult.isValid()) {
                for (String err : childResult.errors()) {
                    errors.add(NAV_REGARDINGOBJECTID_ACCOUNT_APPOINTMENT + "." + err);
                }
            }
        }

        return errors.isEmpty() ? ValidationResult.ok() : ValidationResult.fail(errors);
    }
}
