package it.dataverse.skills.sintaura.tests.apistub.appointment.core;

public interface Converter<TIn, TOut> {
    TOut convert(TIn input);
}
