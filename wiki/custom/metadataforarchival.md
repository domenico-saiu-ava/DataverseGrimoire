---
logical: "metadataforarchival"
display: "MetadataForArchival"
entitySetName: "metadataforarchivals"
primaryId: "metadataforarchivalid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# MetadataForArchival

Holds  metadata values of tables for retention

## Identity

| Property | Value |
| --- | --- |
| Logical name | `metadataforarchival` |
| Display name | MetadataForArchival |
| Display (plural) | MetadataForArchival |
| Schema name | `MetadataForArchival` |
| Entity set (Web API) | `metadataforarchivals` |
| Primary id attribute | `metadataforarchivalid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/metadataforarchivals?$select=name&$top=10
GET /api/data/v9.2/metadataforarchivals(<guid>)
POST /api/data/v9.2/metadataforarchivals
PATCH /api/data/v9.2/metadataforarchivals(<guid>)
DELETE /api/data/v9.2/metadataforarchivals(<guid>)
```

## Attributes

Writable: **12** · Read-only: **14**

### Writable

`extensionofrecordid`, `importsequencenumber`, `isavailableforarchival`, `iscustomizable`, `isreadyforarchival`, `metadataforarchivalid`, `name`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_metadataforarchival_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_metadataforarchival_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_metadataforarchival_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_metadataforarchival_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_metadataforarchival` | [organization](organization.md) | `organizationid` | `organizationid` |
| `metadataforarchival_extensionofrecordid` | [entity](entity.md) | `extensionofrecordid` | `extensionofrecordid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `metadataforarchival_SyncErrors` | [metadataforarchival](metadataforarchival.md) | `regardingobjectid` | `regardingobjectid_metadataforarchival` |
| `metadataforarchival_AsyncOperations` | [metadataforarchival](metadataforarchival.md) | `regardingobjectid` | `regardingobjectid_metadataforarchival` |
| `metadataforarchival_MailboxTrackingFolders` | [metadataforarchival](metadataforarchival.md) | `regardingobjectid` | `regardingobjectid_metadataforarchival` |
| `metadataforarchival_UserEntityInstanceDatas` | [metadataforarchival](metadataforarchival.md) | `objectid` | `objectid_metadataforarchival` |
| `metadataforarchival_ProcessSession` | [metadataforarchival](metadataforarchival.md) | `regardingobjectid` | `regardingobjectid_metadataforarchival` |
| `metadataforarchival_BulkDeleteFailures` | [metadataforarchival](metadataforarchival.md) | `regardingobjectid` | `regardingobjectid_metadataforarchival` |
| `metadataforarchival_PrincipalObjectAttributeAccesses` | [metadataforarchival](metadataforarchival.md) | `objectid` | `objectid_metadataforarchival` |


## Source

Generated from [metadataforarchival (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='metadataforarchival')) on 2026-05-07.