package it.dataverse.skills.sintaura.tests.apistub.appointment.factories;

import it.dataverse.skills.sintaura.tests.apistub.appointment.models.Account;
import net.datafaker.Faker;
import org.instancio.Instancio;

import static org.instancio.Select.field;

public final class AccountFactory {

    private static final Faker FAKER = new Faker();

    private AccountFactory() {}

    public static Account create() {
        return Instancio.of(Account.class)
            .supply(field(Account::getAccountId),     () -> FAKER.internet().uuid())
            .supply(field(Account::getName),          () -> FAKER.company().name())
            .supply(field(Account::getEmailAddress1), () -> FAKER.internet().emailAddress())
            .supply(field(Account::getTelephone1),    () -> FAKER.phoneNumber().phoneNumber())
            .supply(field(Account::getWebsiteUrl),    () -> FAKER.internet().url())
            .create();
    }

    public static java.util.List<Account> createMany(int count) {
        var list = new java.util.ArrayList<Account>(count);
        for (int i = 0; i < count; i++) list.add(create());
        return list;
    }
}
