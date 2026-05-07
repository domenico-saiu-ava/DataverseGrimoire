---
logical: "msdyn_searchconfiguration"
display: "Search Configuration"
entitySetName: "msdyn_searchconfigurations"
primaryId: "msdyn_searchconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Search Configuration

Configuration entity for agent search screen

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_searchconfiguration` |
| Display name | Search Configuration |
| Display (plural) | Search Configurations |
| Schema name | `msdyn_searchconfiguration` |
| Entity set (Web API) | `msdyn_searchconfigurations` |
| Primary id attribute | `msdyn_searchconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_searchconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_searchconfigurations(<guid>)
POST /api/data/v9.2/msdyn_searchconfigurations
PATCH /api/data/v9.2/msdyn_searchconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_searchconfigurations(<guid>)
```

## Attributes

Writable: **12** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_ConfigBlob`, `msdyn_name`, `msdyn_searchconfigurationId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_searchconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_searchconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_searchconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_searchconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_searchconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_searchconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_searchconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_searchconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_searchconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_searchconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_searchconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_searchconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_searchconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_searchconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_searchconfiguration.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_searchconfiguration.md) on 2026-05-06.