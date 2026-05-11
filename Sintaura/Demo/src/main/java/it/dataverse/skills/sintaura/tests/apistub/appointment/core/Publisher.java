package it.dataverse.skills.sintaura.tests.apistub.appointment.core;

public interface Publisher<T> {
    void publish(T item) throws Exception;
}
