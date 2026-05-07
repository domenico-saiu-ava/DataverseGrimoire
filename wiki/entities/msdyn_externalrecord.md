---
logical: "msdyn_externalrecord"
display: "External Record"
entitySetName: "msdyn_externalrecords"
primaryId: "msdyn_externalrecordid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# External Record

External Record - M365 Copilot Sales

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_externalrecord` |
| Display name | External Record |
| Display (plural) | External Records |
| Schema name | `msdyn_externalrecord` |
| Entity set (Web API) | `msdyn_externalrecords` |
| Primary id attribute | `msdyn_externalrecordid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_externalrecords?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_externalrecords(<guid>)
POST /api/data/v9.2/msdyn_externalrecords
PATCH /api/data/v9.2/msdyn_externalrecords(<guid>)
DELETE /api/data/v9.2/msdyn_externalrecords(<guid>)
```

## Attributes

Writable: **14** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_crmrecordid`, `msdyn_crmrecordtype`, `msdyn_externalcrm`, `msdyn_externalrecordId`, `msdyn_name`, `msdyn_referencerecord`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_externalrecord` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_externalrecord_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_externalrecord_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_externalrecord_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_externalrecord_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_appointment_msdyn_externalrecord` | [appointment](appointment.md) | `msdyn_referencerecord` | `msdyn_referencerecord` |
| `msdyn_msdyn_externalcrm_msdyn_externalrecord` | [msdyn_externalcrm](msdyn_externalcrm.md) | `msdyn_externalcrm` | `msdyn_externalcrm` |
| `owner_msdyn_externalrecord` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_externalrecord` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_externalrecord` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_externalrecord_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_externalrecord_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_externalrecord_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_externalrecord_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_externalrecord_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_externalrecord_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_externalrecord_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_externalrecord_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_externalrecord.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_externalrecord.md) on 2026-05-06.