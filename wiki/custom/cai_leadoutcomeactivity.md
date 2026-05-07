---
logical: "cai_leadoutcomeactivity"
display: "Esitazione"
entitySetName: "cai_leadoutcomeactivities"
primaryId: "cai_leadoutcomeactivityid"
primaryName: "cai_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Esitazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cai_leadoutcomeactivity` |
| Display name | Esitazione |
| Display (plural) | Esitazione |
| Schema name | `cai_leadoutcomeactivity` |
| Entity set (Web API) | `cai_leadoutcomeactivities` |
| Primary id attribute | `cai_leadoutcomeactivityid` |
| Primary name attribute | `cai_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/cai_leadoutcomeactivities?$select=cai_name&$top=10
GET /api/data/v9.2/cai_leadoutcomeactivities(<guid>)
POST /api/data/v9.2/cai_leadoutcomeactivities
PATCH /api/data/v9.2/cai_leadoutcomeactivities(<guid>)
DELETE /api/data/v9.2/cai_leadoutcomeactivities(<guid>)
```

## Attributes

Writable: **20** · Read-only: **10**

### Writable

`cai_appointmentid`, `cai_code`, `cai_contactdate`, `cai_genericcontactid`, `cai_invalidcontactmethods`, `cai_leadid`, `cai_leadoutcomeactivityid`, `cai_leadoutcomeid`, `cai_leadoutcomereason`, `cai_managerid`, `cai_name`, `cai_notes`, `cai_phonecallid`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_cai_leadoutcome_cai_leadoutcomeactivity_leadoutcomeid` | [cai_leadoutcome](cai_leadoutcome.md) | `cai_leadoutcomeid` | `cai_leadoutcomeid` |
| `cai_lead_cai_leadoutcomeactivity_leadid` | [lead](lead.md) | `cai_leadid` | `cai_leadid` |
| `cai_systemuser_cai_leadoutcomeactivity_managerid` | [systemuser](systemuser.md) | `cai_managerid` | `cai_managerid` |
| `lk_cai_leadoutcomeactivity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_cai_leadoutcomeactivity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_cai_leadoutcomeactivity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_cai_leadoutcomeactivity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_cai_leadoutcomeactivity` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_cai_leadoutcomeactivity` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_cai_leadoutcomeactivity` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_cai_leadoutcomeactivity` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `cai_appointment_cai_leadoutcomeactivity_appointmentid` | [appointment](appointment.md) | `cai_appointmentid` | `cai_appointmentid` |
| `cai_phonecall_cai_leadoutcomeactivity_phonecallid` | [phonecall](phonecall.md) | `cai_phonecallid` | `cai_phonecallid` |
| `cai_cai_genericcontact_cai_leadoutcomeactivity_genericcontactid` | [cai_genericcontact](cai_genericcontact.md) | `cai_genericcontactid` | `cai_genericcontactid` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_leadoutcomeactivitycssessionlead_leadoutcomeactivityid_cai_leadoutcomeactivity` | [cai_leadoutcomeactivity](cai_leadoutcomeactivity.md) | `cai_leadoutcomeactivityid` | `cai_leadoutcomeactivityid` |
| `cai_leadoutcomeactivity_SyncErrors` | [cai_leadoutcomeactivity](cai_leadoutcomeactivity.md) | `regardingobjectid` | `regardingobjectid_cai_leadoutcomeactivity` |
| `cai_leadoutcomeactivity_DuplicateMatchingRecord` | [cai_leadoutcomeactivity](cai_leadoutcomeactivity.md) | `duplicaterecordid` | `duplicaterecordid_cai_leadoutcomeactivity` |
| `cai_leadoutcomeactivity_DuplicateBaseRecord` | [cai_leadoutcomeactivity](cai_leadoutcomeactivity.md) | `baserecordid` | `baserecordid_cai_leadoutcomeactivity` |
| `cai_leadoutcomeactivity_AsyncOperations` | [cai_leadoutcomeactivity](cai_leadoutcomeactivity.md) | `regardingobjectid` | `regardingobjectid_cai_leadoutcomeactivity` |
| `cai_leadoutcomeactivity_MailboxTrackingFolders` | [cai_leadoutcomeactivity](cai_leadoutcomeactivity.md) | `regardingobjectid` | `regardingobjectid_cai_leadoutcomeactivity` |
| `cai_leadoutcomeactivity_UserEntityInstanceDatas` | [cai_leadoutcomeactivity](cai_leadoutcomeactivity.md) | `objectid` | `objectid_cai_leadoutcomeactivity` |
| `cai_leadoutcomeactivity_ProcessSession` | [cai_leadoutcomeactivity](cai_leadoutcomeactivity.md) | `regardingobjectid` | `regardingobjectid_cai_leadoutcomeactivity` |
| `cai_leadoutcomeactivity_BulkDeleteFailures` | [cai_leadoutcomeactivity](cai_leadoutcomeactivity.md) | `regardingobjectid` | `regardingobjectid_cai_leadoutcomeactivity` |
| `cai_leadoutcomeactivity_PrincipalObjectAttributeAccesses` | [cai_leadoutcomeactivity](cai_leadoutcomeactivity.md) | `objectid` | `objectid_cai_leadoutcomeactivity` |
| `cai_lead_lastleadoutcomeactivityid_cai_leadoutcomeactivity` | [cai_leadoutcomeactivity](cai_leadoutcomeactivity.md) | `cai_lastleadoutcomeactivityid` | `cai_lastleadoutcomeactivityid` |


## Source

Generated from [cai_leadoutcomeactivity (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cai_leadoutcomeactivity')) on 2026-05-07.