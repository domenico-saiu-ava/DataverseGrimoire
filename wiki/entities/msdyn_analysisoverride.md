---
logical: "msdyn_analysisoverride"
display: "Analysis Override"
entitySetName: "msdyn_analysisoverrides"
primaryId: "msdyn_analysisoverrideid"
primaryName: "msdyn_rule"
tableType: "Standard"
ownership: "UserOwned"
---

# Analysis Override

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_analysisoverride` |
| Display name | Analysis Override |
| Display (plural) | Analysis Overrides |
| Schema name | `msdyn_analysisoverride` |
| Entity set (Web API) | `msdyn_analysisoverrides` |
| Primary id attribute | `msdyn_analysisoverrideid` |
| Primary name attribute | `msdyn_rule` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_analysisoverrides?$select=msdyn_rule&$top=10
GET /api/data/v9.2/msdyn_analysisoverrides(<guid>)
POST /api/data/v9.2/msdyn_analysisoverrides
PATCH /api/data/v9.2/msdyn_analysisoverrides(<guid>)
DELETE /api/data/v9.2/msdyn_analysisoverrides(<guid>)
```

## Attributes

Writable: **12** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_analysisoverrideId`, `msdyn_File`, `msdyn_Rule`, `msdyn_Severity`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_analysisoverride` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_analysisoverride_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_analysisoverride_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_analysisoverride_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_analysisoverride_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_analysisoverride` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_analysisoverride` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_analysisoverride` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_analysisoverride_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_analysisoverride_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_analysisoverride_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_analysisoverride_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_analysisoverride_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_analysisoverride_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_analysisoverride_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_analysisoverride_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_analysisoverride.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_analysisoverride.md) on 2026-05-06.