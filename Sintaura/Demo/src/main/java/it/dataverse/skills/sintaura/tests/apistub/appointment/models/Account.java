package it.dataverse.skills.sintaura.tests.apistub.appointment.models;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class Account {

    @JsonProperty("accountid")
    private String accountId;
    public String getAccountId() { return accountId; }
    public void setAccountId(String v) { this.accountId = v; }

    @JsonProperty("name")
    private String name;
    public String getName() { return name; }
    public void setName(String v) { this.name = v; }

    @JsonProperty("accountnumber")
    private String accountNumber;
    public String getAccountNumber() { return accountNumber; }
    public void setAccountNumber(String v) { this.accountNumber = v; }

    @JsonProperty("emailaddress1")
    private String emailAddress1;
    public String getEmailAddress1() { return emailAddress1; }
    public void setEmailAddress1(String v) { this.emailAddress1 = v; }

    @JsonProperty("telephone1")
    private String telephone1;
    public String getTelephone1() { return telephone1; }
    public void setTelephone1(String v) { this.telephone1 = v; }

    @JsonProperty("websiteurl")
    private String websiteUrl;
    public String getWebsiteUrl() { return websiteUrl; }
    public void setWebsiteUrl(String v) { this.websiteUrl = v; }
}
