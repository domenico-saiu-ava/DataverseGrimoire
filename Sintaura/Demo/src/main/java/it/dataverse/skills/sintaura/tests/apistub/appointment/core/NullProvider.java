package it.dataverse.skills.sintaura.tests.apistub.appointment.core;

import java.util.List;

public final class NullProvider<T> implements Provider<T> {
    @Override public List<T> fetch() { return List.of(); }
}
