package it.dataverse.skills.sintaura.tests.apistub.appointment.core;

public final class NullLogger implements Logger {
    @Override public void debug(String message) { }
    @Override public void info(String message)  { }
    @Override public void warn(String message)  { }
    @Override public void error(String message) { }
}
