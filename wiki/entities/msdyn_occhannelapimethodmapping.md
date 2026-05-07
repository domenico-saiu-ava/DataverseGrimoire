---
logical: "msdyn_occhannelapimethodmapping"
display: "Channel api method mapping"
entitySetName: "msdyn_occhannelapimethodmappings"
primaryId: "msdyn_occhannelapimethodmappingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Channel api method mapping

OC channel api method mapping entity.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_occhannelapimethodmapping` |
| Display name | Channel api method mapping |
| Display (plural) | Channel api method mappings |
| Schema name | `msdyn_occhannelapimethodmapping` |
| Entity set (Web API) | `msdyn_occhannelapimethodmappings` |
| Primary id attribute | `msdyn_occhannelapimethodmappingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_occhannelapimethodmappings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_occhannelapimethodmappings(<guid>)
POST /api/data/v9.2/msdyn_occhannelapimethodmappings
PATCH /api/data/v9.2/msdyn_occhannelapimethodmappings(<guid>)
DELETE /api/data/v9.2/msdyn_occhannelapimethodmappings(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_channel`, `msdyn_mappedtoentityname`, `msdyn_methodname`, `msdyn_name`, `msdyn_occhannelapimethodmappingId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_occhannelapimethodmapping` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_occhannelapimethodmapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_occhannelapimethodmapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_occhannelapimethodmapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_occhannelapimethodmapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_occhannelapimethodmapping` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_occhannelapimethodmapping` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_occhannelapimethodmapping` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_occhannelapimethodmapping_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_occhannelapimethodmapping_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_occhannelapimethodmapping_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_occhannelapimethodmapping_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_occhannelapimethodmapping_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_occhannelapimethodmapping_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_occhannelapimethodmapping_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_occhannelapimethodmapping_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_occhannelapimethodmapping.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_occhannelapimethodmapping.md) on 2026-05-06.