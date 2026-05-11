package it.dataverse.skills.sintaura.tests.apistub.appointment;

/**
 * Output model for the Appointment root entity. Holds an optional nested
 * {@link AccountOutput} populated by {@link AppointmentConverter} from the
 * `regardingobjectid_account_appointment` $expand.
 */
public class AppointmentOutput {

    // TODO: add output fields for Appointment

    private AccountOutput accountOutput;
    public AccountOutput getAccountOutput()              { return accountOutput; }
    public void setAccountOutput(AccountOutput v)        { this.accountOutput = v; }
}
