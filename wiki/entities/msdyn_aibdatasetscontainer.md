---
logical: "msdyn_aibdatasetscontainer"
display: "AI Builder Datasets Container"
entitySetName: "msdyn_aibdatasetscontainers"
primaryId: "msdyn_aibdatasetscontainerid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# AI Builder Datasets Container

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aibdatasetscontainer` |
| Display name | AI Builder Datasets Container |
| Display (plural) | AI Builder Datasets Containers |
| Schema name | `msdyn_AIBDatasetsContainer` |
| Entity set (Web API) | `msdyn_aibdatasetscontainers` |
| Primary id attribute | `msdyn_aibdatasetscontainerid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aibdatasetscontainers?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_aibdatasetscontainers(<guid>)
POST /api/data/v9.2/msdyn_aibdatasetscontainers
PATCH /api/data/v9.2/msdyn_aibdatasetscontainers(<guid>)
DELETE /api/data/v9.2/msdyn_aibdatasetscontainers(<guid>)
```

## Attributes

Writable: **11** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_AIBDatasetsContainerId`, `msdyn_AIModelId`, `msdyn_Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_aibdatasetscontainer` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_aibdatasetscontainer_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aibdatasetscontainer_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aibdatasetscontainer_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aibdatasetscontainer_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_AIBDatasetsContainer_msdyn_AIModelI` | [msdyn_aimodel](msdyn_aimodel.md) | `msdyn_aimodelid` | `msdyn_AIModelId` |
| `owner_msdyn_aibdatasetscontainer` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_aibdatasetscontainer` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_aibdatasetscontainer` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_AIBDataset_msdyn_AIBDatasetsContain` | _n/a_ | `msdyn_aibdatasetscontainerid` | _n/a_ |
| `msdyn_aibdatasetscontainer_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aibdatasetscontainer_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aibdatasetscontainer_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_aibdatasetscontainer_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_aibdatasetscontainer_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aibdatasetscontainer_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_aibdatasetscontainer_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aibdatasetscontainer_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_AIBFile_msdyn_AIBDatasetsCont` | _n/a_ | `msdyn_aibdatasetscontainerid` | _n/a_ |


## Source

Generated from [msdyn_aibdatasetscontainer.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_aibdatasetscontainer.md) on 2026-05-06.