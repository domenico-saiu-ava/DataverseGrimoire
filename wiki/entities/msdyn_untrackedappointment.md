---
logical: "msdyn_untrackedappointment"
display: "UntrackedAppointment"
entitySetName: "msdyn_untrackedappointments"
primaryId: "msdyn_untrackedappointmentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
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

Writable: **10** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_name`, `msdyn_untrackedappointmentId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_untrackedappointment` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_untrackedappointment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_untrackedappointment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_untrackedappointment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_untrackedappointment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_untrackedappointment` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_untrackedappointment` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_untrackedappointment` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_untrackedappointment_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_untrackedappointment_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_untrackedappointment_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_untrackedappointment_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_untrackedappointment_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_untrackedappointment_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_untrackedappointment_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_untrackedappointment_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_untrackedappointment.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_untrackedappointment.md) on 2026-05-06.