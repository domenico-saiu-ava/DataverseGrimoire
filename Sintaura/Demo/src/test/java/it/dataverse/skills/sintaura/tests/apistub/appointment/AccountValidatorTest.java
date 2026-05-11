package it.dataverse.skills.sintaura.tests.apistub.appointment;

import it.dataverse.skills.sintaura.tests.apistub.appointment.core.Logger;
import it.dataverse.skills.sintaura.tests.apistub.appointment.core.ValidationResult;
import it.dataverse.skills.sintaura.tests.apistub.appointment.models.Account;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertTrue;

@ExtendWith(MockitoExtension.class)
class AccountValidatorTest {

    @Mock Logger logger;

    @Test
    void shouldReturnOkByDefaultScaffold() {
        var sut = new AccountValidator(logger);

        ValidationResult r = sut.validate(new Account());

        assertTrue(r.isValid());
    }
}
