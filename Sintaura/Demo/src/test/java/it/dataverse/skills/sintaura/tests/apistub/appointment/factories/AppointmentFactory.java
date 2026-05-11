package it.dataverse.skills.sintaura.tests.apistub.appointment.factories;

import it.dataverse.skills.sintaura.tests.apistub.appointment.models.Appointment;
import net.datafaker.Faker;
import org.instancio.Instancio;

import java.time.OffsetDateTime;
import java.time.ZoneOffset;
import java.util.concurrent.TimeUnit;

import static org.instancio.Select.field;

public final class AppointmentFactory {

    private static final Faker FAKER = new Faker();

    private AppointmentFactory() {}

    public static Appointment create() {
        OffsetDateTime scheduledStart = FAKER.date().future(60, TimeUnit.DAYS).toInstant().atOffset(ZoneOffset.UTC);
        OffsetDateTime scheduledEnd   = scheduledStart.plusMinutes(FAKER.number().numberBetween(15L, 240L));

        return Instancio.of(Appointment.class)
            .supply(field(Appointment::getActivityId),                          () -> FAKER.internet().uuid())
            .supply(field(Appointment::getSubject),                             () -> FAKER.lorem().sentence())
            .supply(field(Appointment::getScheduledStart),                      () -> scheduledStart)
            .supply(field(Appointment::getScheduledEnd),                        () -> scheduledEnd)
            .supply(field(Appointment::getLocation),                            () -> FAKER.address().fullAddress())
            .supply(field(Appointment::getStateCode),                           () -> FAKER.options().option("Open", "Completed", "Canceled", "Active", "Inactive", "Scheduled"))
            .supply(field(Appointment::getRegardingObjectIdAccountAppointment), AccountFactory::create)
            .create();
    }

    public static java.util.List<Appointment> createMany(int count) {
        var list = new java.util.ArrayList<Appointment>(count);
        for (int i = 0; i < count; i++) list.add(create());
        return list;
    }
}
