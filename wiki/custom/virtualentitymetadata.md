---
logical: "virtualentitymetadata"
display: "Metadati entità virtuale"
entitySetName: "virtualentitymetadatas"
primaryId: "virtualentitymetadataid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Metadati entità virtuale

Contiene i valori dei metadati per le entità virtuali

## Identity

| Property | Value |
| --- | --- |
| Logical name | `virtualentitymetadata` |
| Display name | Metadati entità virtuale |
| Display (plural) | Metadati entità virtuale |
| Schema name | `VirtualEntityMetadata` |
| Entity set (Web API) | `virtualentitymetadatas` |
| Primary id attribute | `virtualentitymetadataid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/virtualentitymetadatas?$select=name&$top=10
GET /api/data/v9.2/virtualentitymetadatas(<guid>)
POST /api/data/v9.2/virtualentitymetadatas
PATCH /api/data/v9.2/virtualentitymetadatas(<guid>)
DELETE /api/data/v9.2/virtualentitymetadatas(<guid>)
```

## Attributes

Writable: **15** · Read-only: **14**

### Writable

`extensionofrecordid`, `importsequencenumber`, `isattachmentssupported`, `ischangedfieldsenabledforupdateevent`, `iscustomizable`, `isonexternalcreatedenabled`, `isonexternaldeletedenabled`, `isonexternalupdatedenabled`, `name`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`, `virtualentitymetadataid`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_virtualentitymetadata_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_virtualentitymetadata_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_virtualentitymetadata_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_virtualentitymetadata_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_virtualentitymetadata` | [organization](organization.md) | `organizationid` | `organizationid` |
| `virtualentitymetadata_extensionofrecordid` | [entity](entity.md) | `extensionofrecordid` | `extensionofrecordid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `virtualentitymetadata_SyncErrors` | [virtualentitymetadata](virtualentitymetadata.md) | `regardingobjectid` | `regardingobjectid_virtualentitymetadata` |
| `virtualentitymetadata_AsyncOperations` | [virtualentitymetadata](virtualentitymetadata.md) | `regardingobjectid` | `regardingobjectid_virtualentitymetadata` |
| `virtualentitymetadata_MailboxTrackingFolders` | [virtualentitymetadata](virtualentitymetadata.md) | `regardingobjectid` | `regardingobjectid_virtualentitymetadata` |
| `virtualentitymetadata_UserEntityInstanceDatas` | [virtualentitymetadata](virtualentitymetadata.md) | `objectid` | `objectid_virtualentitymetadata` |
| `virtualentitymetadata_ProcessSession` | [virtualentitymetadata](virtualentitymetadata.md) | `regardingobjectid` | `regardingobjectid_virtualentitymetadata` |
| `virtualentitymetadata_BulkDeleteFailures` | [virtualentitymetadata](virtualentitymetadata.md) | `regardingobjectid` | `regardingobjectid_virtualentitymetadata` |
| `virtualentitymetadata_PrincipalObjectAttributeAccesses` | [virtualentitymetadata](virtualentitymetadata.md) | `objectid` | `objectid_virtualentitymetadata` |


## Source

Generated from [virtualentitymetadata (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='virtualentitymetadata')) on 2026-05-07.