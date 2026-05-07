---
logical: "msdyn_hierarchyconfiguration"
display: "Hierarchy Configuration"
entitySetName: "msdyn_hierarchyconfigurations"
primaryId: "msdyn_hierarchyconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Hierarchy Configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_hierarchyconfiguration` |
| Display name | Hierarchy Configuration |
| Display (plural) | Hierarchy Configurations |
| Schema name | `msdyn_hierarchyconfiguration` |
| Entity set (Web API) | `msdyn_hierarchyconfigurations` |
| Primary id attribute | `msdyn_hierarchyconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_hierarchyconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_hierarchyconfigurations(<guid>)
POST /api/data/v9.2/msdyn_hierarchyconfigurations
PATCH /api/data/v9.2/msdyn_hierarchyconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_hierarchyconfigurations(<guid>)
```

## Attributes

Writable: **12** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_Configuration`, `msdyn_hierarchyconfigurationId`, `msdyn_Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_hierarchyconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_hierarchyconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_hierarchyconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_hierarchyconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_hierarchyconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_hierarchyconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_hierarchyconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_hierarchyconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_hierarchyconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_hierarchyconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_hierarchyconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_hierarchyconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_hierarchyconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_hierarchyconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_hierarchyconfiguration.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_hierarchyconfiguration.md) on 2026-05-06.