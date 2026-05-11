package it.dataverse.skills.sintaura.tests.apistub.appointment.core;

public interface Validator<T> {
    ValidationResult validate(T input);
}
