package it.dataverse.skills.sintaura.tests.apistub.appointment.core;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InOrder;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.contains;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.inOrder;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class AbstractLoggingValidatorTest {

    @Mock Logger logger;

    private AbstractLoggingValidator<String> validatorWithResult(ValidationResult result) {
        return new AbstractLoggingValidator<>(logger) {
            @Override protected ValidationResult doValidate(String input) { return result; }
        };
    }

    @Test
    void shouldLogBeginThenOkOnValidInput() {
        var sut = validatorWithResult(ValidationResult.ok());

        ValidationResult r = sut.validate("anything");

        assertTrue(r.isValid());
        InOrder o = inOrder(logger);
        o.verify(logger).debug(eq("validate: begin"));
        o.verify(logger).debug(eq("validate: ok"));
    }

    @Test
    void shouldLogWarnOnInvalidInput() {
        var sut = validatorWithResult(ValidationResult.fail("missing-field"));

        ValidationResult r = sut.validate("anything");

        assertFalse(r.isValid());
        verify(logger).debug(eq("validate: begin"));
        verify(logger).warn(contains("missing-field"));
    }
}
