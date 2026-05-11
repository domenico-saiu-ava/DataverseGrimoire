package it.dataverse.skills.sintaura.tests.apistub.appointment.core;

public final class NullValidator<T> implements Validator<T> {
    @Override
    public ValidationResult validate(T input) {
        return ValidationResult.ok();
    }
}
