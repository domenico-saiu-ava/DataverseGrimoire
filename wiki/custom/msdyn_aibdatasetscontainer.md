---
logical: "msdyn_aibdatasetscontainer"
display: "AI Builder Datasets Container"
entitySetName: "msdyn_aibdatasetscontainers"
primaryId: "msdyn_aibdatasetscontainerid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **10** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_aibdatasetscontainerid`, `msdyn_aimodelid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_aibdatasetscontainer_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aibdatasetscontainer_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aibdatasetscontainer_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aibdatasetscontainer_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_aibdatasetscontainer` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_aibdatasetscontainer` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_aibdatasetscontainer` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_aibdatasetscontainer` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_AIBDatasetsContainer_msdyn_AIModelI` | [msdyn_aimodel](msdyn_aimodel.md) | `msdyn_aimodelid` | `msdyn_AIModelId` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aibdatasetscontainer_SyncErrors` | [msdyn_aibdatasetscontainer](msdyn_aibdatasetscontainer.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibdatasetscontainer` |
| `msdyn_aibdatasetscontainer_DuplicateMatchingRecord` | [msdyn_aibdatasetscontainer](msdyn_aibdatasetscontainer.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_aibdatasetscontainer` |
| `msdyn_aibdatasetscontainer_DuplicateBaseRecord` | [msdyn_aibdatasetscontainer](msdyn_aibdatasetscontainer.md) | `baserecordid` | `baserecordid_msdyn_aibdatasetscontainer` |
| `msdyn_aibdatasetscontainer_AsyncOperations` | [msdyn_aibdatasetscontainer](msdyn_aibdatasetscontainer.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibdatasetscontainer` |
| `msdyn_aibdatasetscontainer_MailboxTrackingFolders` | [msdyn_aibdatasetscontainer](msdyn_aibdatasetscontainer.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibdatasetscontainer` |
| `msdyn_aibdatasetscontainer_UserEntityInstanceDatas` | [msdyn_aibdatasetscontainer](msdyn_aibdatasetscontainer.md) | `objectid` | `objectid_msdyn_aibdatasetscontainer` |
| `msdyn_aibdatasetscontainer_ProcessSession` | [msdyn_aibdatasetscontainer](msdyn_aibdatasetscontainer.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibdatasetscontainer` |
| `msdyn_aibdatasetscontainer_BulkDeleteFailures` | [msdyn_aibdatasetscontainer](msdyn_aibdatasetscontainer.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibdatasetscontainer` |
| `msdyn_aibdatasetscontainer_PrincipalObjectAttributeAccesses` | [msdyn_aibdatasetscontainer](msdyn_aibdatasetscontainer.md) | `objectid` | `objectid_msdyn_aibdatasetscontainer` |
| `msdyn_AIBDataset_msdyn_AIBDatasetsContain` | [msdyn_aibdatasetscontainer](msdyn_aibdatasetscontainer.md) | `msdyn_aibdatasetscontainerid` | `msdyn_AIBDatasetsContainerId` |
| `msdyn_AIBFile_msdyn_AIBDatasetsCont` | [msdyn_aibdatasetscontainer](msdyn_aibdatasetscontainer.md) | `msdyn_aibdatasetscontainerid` | `msdyn_AIBDatasetsContainerId` |


## Source

Generated from [msdyn_aibdatasetscontainer (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_aibdatasetscontainer')) on 2026-05-07.