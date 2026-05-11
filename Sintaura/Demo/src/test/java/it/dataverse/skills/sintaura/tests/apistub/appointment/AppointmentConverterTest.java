package it.dataverse.skills.sintaura.tests.apistub.appointment;

import it.dataverse.skills.sintaura.tests.apistub.appointment.core.Converter;
import it.dataverse.skills.sintaura.tests.apistub.appointment.core.Logger;
import it.dataverse.skills.sintaura.tests.apistub.appointment.models.Account;
import it.dataverse.skills.sintaura.tests.apistub.appointment.models.Appointment;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertSame;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.same;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class AppointmentConverterTest {

    @Mock Converter<Account, AccountOutput> accountConverter;
    @Mock Logger logger;

    @Test
    void shouldDelegateToAccountConverterAndStoreResultOnOutput() {
        var sut = new AppointmentConverter(logger, accountConverter);
        Account account = new Account();
        Appointment input = new Appointment();
        input.setRegardingObjectIdAccountAppointment(account);
        AccountOutput convertedAccount = new AccountOutput();
        when(accountConverter.convert(any())).thenReturn(convertedAccount);

        AppointmentOutput out = sut.convert(input);

        assertNotNull(out);
        verify(accountConverter).convert(same(account));
        assertSame(convertedAccount, out.getAccountOutput());
    }

    @Test
    void shouldNotInvokeAccountConverterWhenExpandedEntityIsNull() {
        var sut = new AppointmentConverter(logger, accountConverter);
        Appointment input = new Appointment(); // no regarding account

        AppointmentOutput out = sut.convert(input);

        assertNotNull(out);
        assertNull(out.getAccountOutput());
        verify(accountConverter, never()).convert(any());
    }
}
