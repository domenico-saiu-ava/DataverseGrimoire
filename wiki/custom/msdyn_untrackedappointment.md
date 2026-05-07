---
logical: "msdyn_untrackedappointment"
display: "UntrackedAppointment"
entitySetName: "msdyn_untrackedappointments"
primaryId: "msdyn_untrackedappointmentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# UntrackedAppointment

UntrackedAppointments

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_untrackedappointment` |
| Display name | UntrackedAppointment |
| Display (plural) | UntrackedAppointments |
| Schema name | `msdyn_untrackedappointment` |
| Entity set (Web API) | `msdyn_untrackedappointments` |
| Primary id attribute | `msdyn_untrackedappointmentid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_untrackedappointments?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_untrackedappointments(<guid>)
POST /api/data/v9.2/msdyn_untrackedappointments
PATCH /api/data/v9.2/msdyn_untrackedappointments(<guid>)
DELETE /api/data/v9.2/msdyn_untrackedappointments(<guid>)
```

## Attributes

Writable: **9** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_name`, `msdyn_untrackedappointmentid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_untrackedappointment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_untrackedappointment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_untrackedappointment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_untrackedappointment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_untrackedappointment` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_untrackedappointment` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_untrackedappointment` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_untrackedappointment` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_untrackedappointment_SyncErrors` | [msdyn_untrackedappointment](msdyn_untrackedappointment.md) | `regardingobjectid` | `regardingobjectid_msdyn_untrackedappointment` |
| `msdyn_untrackedappointment_DuplicateMatchingRecord` | [msdyn_untrackedappointment](msdyn_untrackedappointment.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_untrackedappointment` |
| `msdyn_untrackedappointment_DuplicateBaseRecord` | [msdyn_untrackedappointment](msdyn_untrackedappointment.md) | `baserecordid` | `baserecordid_msdyn_untrackedappointment` |
| `msdyn_untrackedappointment_AsyncOperations` | [msdyn_untrackedappointment](msdyn_untrackedappointment.md) | `regardingobjectid` | `regardingobjectid_msdyn_untrackedappointment` |
| `msdyn_untrackedappointment_MailboxTrackingFolders` | [msdyn_untrackedappointment](msdyn_untrackedappointment.md) | `regardingobjectid` | `regardingobjectid_msdyn_untrackedappointment` |
| `msdyn_untrackedappointment_UserEntityInstanceDatas` | [msdyn_untrackedappointment](msdyn_untrackedappointment.md) | `objectid` | `objectid_msdyn_untrackedappointment` |
| `msdyn_untrackedappointment_ProcessSession` | [msdyn_untrackedappointment](msdyn_untrackedappointment.md) | `regardingobjectid` | `regardingobjectid_msdyn_untrackedappointment` |
| `msdyn_untrackedappointment_BulkDeleteFailures` | [msdyn_untrackedappointment](msdyn_untrackedappointment.md) | `regardingobjectid` | `regardingobjectid_msdyn_untrackedappointment` |
| `msdyn_untrackedappointment_PrincipalObjectAttributeAccesses` | [msdyn_untrackedappointment](msdyn_untrackedappointment.md) | `objectid` | `objectid_msdyn_untrackedappointment` |


## Source

Generated from [msdyn_untrackedappointment (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_untrackedappointment')) on 2026-05-07.