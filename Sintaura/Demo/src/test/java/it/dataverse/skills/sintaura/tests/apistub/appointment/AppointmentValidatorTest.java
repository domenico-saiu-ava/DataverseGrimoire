package it.dataverse.skills.sintaura.tests.apistub.appointment;

import it.dataverse.skills.sintaura.tests.apistub.appointment.core.Logger;
import it.dataverse.skills.sintaura.tests.apistub.appointment.core.ValidationResult;
import it.dataverse.skills.sintaura.tests.apistub.appointment.core.Validator;
import it.dataverse.skills.sintaura.tests.apistub.appointment.models.Account;
import it.dataverse.skills.sintaura.tests.apistub.appointment.models.Appointment;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.same;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class AppointmentValidatorTest {

    @Mock Validator<Account> accountValidator;
    @Mock Logger logger;

    @Test
    void shouldDelegateToAccountValidatorWhenExpandedEntityPresent() {
        var sut = new AppointmentValidator(logger, accountValidator);
        Account account = new Account();
        Appointment input = new Appointment();
        input.setRegardingObjectIdAccountAppointment(account);
        when(accountValidator.validate(any())).thenReturn(ValidationResult.ok());

        ValidationResult r = sut.validate(input);

        assertTrue(r.isValid());
        verify(accountValidator).validate(same(account));
    }

    @Test
    void shouldPrefixChildErrorsWithNavigationProperty() {
        var sut = new AppointmentValidator(logger, accountValidator);
        Appointment input = new Appointment();
        input.setRegardingObjectIdAccountAppointment(new Account());
        when(accountValidator.validate(any()))
            .thenReturn(ValidationResult.fail("emailaddress1 is invalid"));

        ValidationResult r = sut.validate(input);

        assertFalse(r.isValid());
        assertTrue(
            r.errors().get(0).startsWith("regardingobjectid_account_appointment."),
            "child error must be prefixed with the navigation property name");
    }

    @Test
    void shouldSkipAccountValidatorWhenExpandedEntityIsNull() {
        var sut = new AppointmentValidator(logger, accountValidator);
        Appointment input = new Appointment(); // no regarding account

        ValidationResult r = sut.validate(input);

        assertTrue(r.isValid());
        verify(accountValidator, never()).validate(any());
    }
}
