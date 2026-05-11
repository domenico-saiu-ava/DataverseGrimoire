package it.dataverse.skills.sintaura.tests.apistub.appointment;

import it.dataverse.skills.sintaura.tests.apistub.appointment.core.Logger;
import it.dataverse.skills.sintaura.tests.apistub.appointment.models.Account;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@ExtendWith(MockitoExtension.class)
class AccountConverterTest {

    @Mock Logger logger;

    @Test
    void shouldReturnNonNullAccountOutputFromScaffold() {
        var sut = new AccountConverter(logger);

        AccountOutput out = sut.convert(new Account());

        assertNotNull(out);
    }
}
