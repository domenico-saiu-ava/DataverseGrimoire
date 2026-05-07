---
logical: "msdyn_submodeldefinition"
display: "Submodel Definition"
entitySetName: "msdyn_submodeldefinitions"
primaryId: "msdyn_submodeldefinitionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Submodel Definition

Stores metadata about submodels

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_submodeldefinition` |
| Display name | Submodel Definition |
| Display (plural) | Submodel Definitions |
| Schema name | `msdyn_submodeldefinition` |
| Entity set (Web API) | `msdyn_submodeldefinitions` |
| Primary id attribute | `msdyn_submodeldefinitionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_submodeldefinitions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_submodeldefinitions(<guid>)
POST /api/data/v9.2/msdyn_submodeldefinitions
PATCH /api/data/v9.2/msdyn_submodeldefinitions(<guid>)
DELETE /api/data/v9.2/msdyn_submodeldefinitions(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_ModelId`, `msdyn_name`, `msdyn_submodeldefinitionId`, `msdyn_Type`, `msdyn_Value`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_submodeldefinition` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_submodeldefinition_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_submodeldefinition_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_submodeldefinition_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_submodeldefinition_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_submodeldefinition` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_submodeldefinition` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_submodeldefinition` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_submodeldefinition_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_submodeldefinition_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_submodeldefinition_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_submodeldefinition_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_submodeldefinition_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_submodeldefinition_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_submodeldefinition_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_submodeldefinition_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_submodeldefinition.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_submodeldefinition.md) on 2026-05-06.