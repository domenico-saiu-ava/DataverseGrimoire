---
logical: "msdyn_collabgraphresource"
display: "Microsoft Teams Graph resource Entity"
entitySetName: "msdyn_collabgraphresource"
primaryId: "msdyn_collabgraphresourceid"
primaryName: "msdyn_graphresourcename"
tableType: "Standard"
ownership: "None"
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

`ImportSequenceNumber`, `msdyn_CollabGraphResourceId`, `msdyn_GraphResourceId`, `msdyn_GraphResourceName`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `VersionNumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_collabgraphresource_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_collabgraphresource_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_collabgraphresource_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_collabgraphresource_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_collabgraphresource_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_collabgraphresource_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_collabgraphresource_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_collabgraphresource_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_collabgraphresource_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_collabgraphresource_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_collabgraphresource.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_collabgraphresource.md) on 2026-05-06.