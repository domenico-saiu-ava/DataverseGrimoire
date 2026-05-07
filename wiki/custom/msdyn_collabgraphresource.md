---
logical: "msdyn_collabgraphresource"
display: "Microsoft Teams Graph resource Entity"
entitySetName: "msdyn_collabgraphresource"
primaryId: "msdyn_collabgraphresourceid"
primaryName: "msdyn_graphresourcename"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Microsoft Teams Graph resource Entity

Entity which stores collaboration data of Dynamics 365 with Microsoft Teams

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_collabgraphresource` |
| Display name | Microsoft Teams Graph resource Entity |
| Display (plural) | Microsoft Teams Graph resource Entities |
| Schema name | `msdyn_CollabGraphResource` |
| Entity set (Web API) | `msdyn_collabgraphresource` |
| Primary id attribute | `msdyn_collabgraphresourceid` |
| Primary name attribute | `msdyn_graphresourcename` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_collabgraphresource?$select=msdyn_graphresourcename&$top=10
GET /api/data/v9.2/msdyn_collabgraphresource(<guid>)
POST /api/data/v9.2/msdyn_collabgraphresource
PATCH /api/data/v9.2/msdyn_collabgraphresource(<guid>)
DELETE /api/data/v9.2/msdyn_collabgraphresource(<guid>)
```

## Attributes

Writable: **9** · Read-only: **7**

### Writable

`importsequencenumber`, `msdyn_collabgraphresourceid`, `msdyn_graphresourceid`, `msdyn_graphresourcename`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_collabgraphresource_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_collabgraphresource_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_collabgraphresource_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_collabgraphresource_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_collabgraphresource_SyncErrors` | [msdyn_collabgraphresource](msdyn_collabgraphresource.md) | `regardingobjectid` | `regardingobjectid_msdyn_collabgraphresource` |
| `msdyn_collabgraphresource_AsyncOperations` | [msdyn_collabgraphresource](msdyn_collabgraphresource.md) | `regardingobjectid` | `regardingobjectid_msdyn_collabgraphresource` |
| `msdyn_collabgraphresource_MailboxTrackingFolders` | [msdyn_collabgraphresource](msdyn_collabgraphresource.md) | `regardingobjectid` | `regardingobjectid_msdyn_collabgraphresource` |
| `msdyn_collabgraphresource_UserEntityInstanceDatas` | [msdyn_collabgraphresource](msdyn_collabgraphresource.md) | `objectid` | `objectid_msdyn_collabgraphresource` |
| `msdyn_collabgraphresource_ProcessSession` | [msdyn_collabgraphresource](msdyn_collabgraphresource.md) | `regardingobjectid` | `regardingobjectid_msdyn_collabgraphresource` |
| `msdyn_collabgraphresource_BulkDeleteFailures` | [msdyn_collabgraphresource](msdyn_collabgraphresource.md) | `regardingobjectid` | `regardingobjectid_msdyn_collabgraphresource` |
| `msdyn_collabgraphresource_PrincipalObjectAttributeAccesses` | [msdyn_collabgraphresource](msdyn_collabgraphresource.md) | `objectid` | `objectid_msdyn_collabgraphresource` |


## Source

Generated from [msdyn_collabgraphresource (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_collabgraphresource')) on 2026-05-07.