package it.dataverse.skills.sintaura.tests.apistub.appointment.core;

import java.util.List;

public interface Provider<T> {
    List<T> fetch() throws Exception;
}
