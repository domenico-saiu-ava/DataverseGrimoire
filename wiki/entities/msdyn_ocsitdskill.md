---
logical: "msdyn_ocsitdskill"
display: "Characteristic mapping"
entitySetName: "msdyn_ocsitdskills"
primaryId: "msdyn_ocsitdskillid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Characteristic mapping

Indicates the mapping of skills from training data to characteristics

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocsitdskill` |
| Display name | Characteristic mapping |
| Display (plural) | Characteristics mapping |
| Schema name | `msdyn_ocsitdskill` |
| Entity set (Web API) | `msdyn_ocsitdskills` |
| Primary id attribute | `msdyn_ocsitdskillid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocsitdskills?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocsitdskills(<guid>)
POST /api/data/v9.2/msdyn_ocsitdskills
PATCH /api/data/v9.2/msdyn_ocsitdskills(<guid>)
DELETE /api/data/v9.2/msdyn_ocsitdskills(<guid>)
```

## Attributes

Writable: **12** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_name`, `msdyn_ocsitdskillId`, `msdyn_ocsitrainingdataid`, `msdyn_skillid`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_ocsitdskill` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_ocsitdskill_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocsitdskill_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocsitdskill_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocsitdskill_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_ocsitdskill_ocsitrainingdataid` | [msdyn_ocsitrainingdata](msdyn_ocsitrainingdata.md) | `msdyn_ocsitrainingdataid` | `msdyn_ocsitrainingdataid` |
| `msdyn_ocsitdskill_skillid_Characteristic` | [characteristic](characteristic.md) | `msdyn_skillid` | `msdyn_skillid` |
| `owner_msdyn_ocsitdskill` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_ocsitdskill` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_ocsitdskill` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocsitdskill_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsitdskill_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsitdskill_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_ocsitdskill_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_ocsitdskill_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsitdskill_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocsitdskill_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsitdskill_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_ocsitdskill.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_ocsitdskill.md) on 2026-05-06.