---
logical: "cai_leadoutcomeactivitycssession"
display: "Sessione di Esitazione"
entitySetName: "cai_leadoutcomeactivitycssessions"
primaryId: "cai_leadoutcomeactivitycssessionid"
primaryName: "cai_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Sessione di Esitazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cai_leadoutcomeactivitycssession` |
| Display name | Sessione di Esitazione |
| Display (plural) | Sessioni di Esitazione |
| Schema name | `cai_leadoutcomeactivitycssession` |
| Entity set (Web API) | `cai_leadoutcomeactivitycssessions` |
| Primary id attribute | `cai_leadoutcomeactivitycssessionid` |
| Primary name attribute | `cai_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/cai_leadoutcomeactivitycssessions?$select=cai_name&$top=10
GET /api/data/v9.2/cai_leadoutcomeactivitycssessions(<guid>)
POST /api/data/v9.2/cai_leadoutcomeactivitycssessions
PATCH /api/data/v9.2/cai_leadoutcomeactivitycssessions(<guid>)
DELETE /api/data/v9.2/cai_leadoutcomeactivitycssessions(<guid>)
```

## Attributes

Writable: **28** · Read-only: **10**

### Writable

`cai_appointmentenddate`, `cai_appointmentid`, `cai_appointmentinteractionchannelid`, `cai_appointmentisallday`, `cai_appointmentrequired`, `cai_appointmentstartdate`, `cai_appointmentsubject`, `cai_customerid`, `cai_genericcontactid`, `cai_interactionchannelid`, `cai_leadoutcomeactivitycssessionid`, `cai_name`, `cai_nextappointmentenddate`, `cai_nextappointmentid`, `cai_nextappointmentinteractionchannelid`, `cai_nextappointmentisallday`, `cai_nextappointmentrequired`, `cai_nextappointmentstartdate`, `cai_nextappointmentsubject`, `cai_phonecallid`, `cai_userid`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (18)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_leadoutcomeactivitycssession_nextappointmentid_appointment` | [appointment](appointment.md) | `cai_nextappointmentid` | `cai_nextappointmentid` |
| `cai_leadoutcomeactivitycssession_phonecallid_phonecall` | [phonecall](phonecall.md) | `cai_phonecallid` | `cai_phonecallid` |
| `cai_leadoutcomeactivitycssession_genericcontactid_cai_genericcontact` | [cai_genericcontact](cai_genericcontact.md) | `cai_genericcontactid` | `cai_genericcontactid` |
| `cai_leadoutcomeactivitycssession_appointmentinteractionchannelid_cai_contactchannel` | [cai_contactchannel](cai_contactchannel.md) | `cai_appointmentinteractionchannelid` | `cai_appointmentinteractionchannelid` |
| `cai_leadoutcomeactivitycssession_userid_systemuser` | [systemuser](systemuser.md) | `cai_userid` | `cai_userid` |
| `cai_leadoutcomeactivitycssession_interactionchannelid_cai_contactchannel` | [cai_contactchannel](cai_contactchannel.md) | `cai_interactionchannelid` | `cai_interactionchannelid` |
| `cai_leadoutcomeactivitycssession_nextappointmentinteractionchannelid_cai_contactchannel` | [cai_contactchannel](cai_contactchannel.md) | `cai_nextappointmentinteractionchannelid` | `cai_nextappointmentinteractionchannelid` |
| `cai_account_cai_leadoutcomeactivitycssession_371` | [account](account.md) | `cai_customerid` | `cai_customerid_account` |
| `cai_contact_cai_leadoutcomeactivitycssession_371` | [contact](contact.md) | `cai_customerid` | `cai_customerid_contact` |
| `lk_cai_leadoutcomeactivitycssession_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_cai_leadoutcomeactivitycssession_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_cai_leadoutcomeactivitycssession_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_cai_leadoutcomeactivitycssession_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_cai_leadoutcomeactivitycssession` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_cai_leadoutcomeactivitycssession` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_cai_leadoutcomeactivitycssession` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_cai_leadoutcomeactivitycssession` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `cai_leadoutcomeactivitycssession_appointmentid_appointment` | [appointment](appointment.md) | `cai_appointmentid` | `cai_appointmentid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_leadoutcomeactivitycssessionlead_leadoutcomeactivitycssessionid_cai_leadoutcomeactivitycssessi` | [cai_leadoutcomeactivitycssession](cai_leadoutcomeactivitycssession.md) | `cai_leadoutcomeactivitycssessionid` | `cai_leadoutcomeactivitycssessionid` |
| `cai_appointment_leadoutcomeactivitycssessionid_cai_leadoutcomeactivitycssession` | [cai_leadoutcomeactivitycssession](cai_leadoutcomeactivitycssession.md) | `cai_leadoutcomeactivitycssessionid` | `cai_leadoutcomeactivitycssessionid_Appointment` |
| `cai_leadoutcomeactivitycssession_SyncErrors` | [cai_leadoutcomeactivitycssession](cai_leadoutcomeactivitycssession.md) | `regardingobjectid` | `regardingobjectid_cai_leadoutcomeactivitycssession` |
| `cai_leadoutcomeactivitycssession_AsyncOperations` | [cai_leadoutcomeactivitycssession](cai_leadoutcomeactivitycssession.md) | `regardingobjectid` | `regardingobjectid_cai_leadoutcomeactivitycssession` |
| `cai_leadoutcomeactivitycssession_MailboxTrackingFolders` | [cai_leadoutcomeactivitycssession](cai_leadoutcomeactivitycssession.md) | `regardingobjectid` | `regardingobjectid_cai_leadoutcomeactivitycssession` |
| `cai_leadoutcomeactivitycssession_UserEntityInstanceDatas` | [cai_leadoutcomeactivitycssession](cai_leadoutcomeactivitycssession.md) | `objectid` | `objectid_cai_leadoutcomeactivitycssession` |
| `cai_leadoutcomeactivitycssession_ProcessSession` | [cai_leadoutcomeactivitycssession](cai_leadoutcomeactivitycssession.md) | `regardingobjectid` | `regardingobjectid_cai_leadoutcomeactivitycssession` |
| `cai_leadoutcomeactivitycssession_BulkDeleteFailures` | [cai_leadoutcomeactivitycssession](cai_leadoutcomeactivitycssession.md) | `regardingobjectid` | `regardingobjectid_cai_leadoutcomeactivitycssession` |
| `cai_leadoutcomeactivitycssession_PrincipalObjectAttributeAccesses` | [cai_leadoutcomeactivitycssession](cai_leadoutcomeactivitycssession.md) | `objectid` | `objectid_cai_leadoutcomeactivitycssession` |
| `cai_lead_bpf_leadoutcomeactivitycssessionid_cai_leadoutcomeactivitycssession` | [cai_leadoutcomeactivitycssession](cai_leadoutcomeactivitycssession.md) | `cai_bpf_leadoutcomeactivitycssessionid` | `cai_bpf_leadoutcomeactivitycssessionid` |


## Source

Generated from [cai_leadoutcomeactivitycssession (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cai_leadoutcomeactivitycssession')) on 2026-05-07.