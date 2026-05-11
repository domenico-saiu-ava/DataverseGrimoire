package it.dataverse.skills.sintaura.tests.apistub.appointment.models;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.time.OffsetDateTime;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class Appointment {

    @JsonProperty("activityid")
    private String activityId;
    public String getActivityId() { return activityId; }
    public void setActivityId(String v) { this.activityId = v; }

    @JsonProperty("subject")
    private String subject;
    public String getSubject() { return subject; }
    public void setSubject(String v) { this.subject = v; }

    @JsonProperty("scheduledstart")
    private OffsetDateTime scheduledStart;
    public OffsetDateTime getScheduledStart() { return scheduledStart; }
    public void setScheduledStart(OffsetDateTime v) { this.scheduledStart = v; }

    @JsonProperty("scheduledend")
    private OffsetDateTime scheduledEnd;
    public OffsetDateTime getScheduledEnd() { return scheduledEnd; }
    public void setScheduledEnd(OffsetDateTime v) { this.scheduledEnd = v; }

    @JsonProperty("location")
    private String location;
    public String getLocation() { return location; }
    public void setLocation(String v) { this.location = v; }

    @JsonProperty("statecode")
    private String stateCode;
    public String getStateCode() { return stateCode; }
    public void setStateCode(String v) { this.stateCode = v; }

    @JsonProperty("regardingobjectid_account_appointment")
    private Account regardingObjectIdAccountAppointment;
    public Account getRegardingObjectIdAccountAppointment() { return regardingObjectIdAccountAppointment; }
    public void setRegardingObjectIdAccountAppointment(Account v) { this.regardingObjectIdAccountAppointment = v; }
}
