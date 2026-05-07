---
logical: "ava_documentoreclamo"
display: "Documento Reclamo"
entitySetName: "ava_documentoreclamos"
primaryId: "ava_documentoreclamoid"
primaryName: "ava_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Documento Reclamo

## Identity

| Property | Value |
| --- | --- |
| Logical name | `ava_documentoreclamo` |
| Display name | Documento Reclamo |
| Display (plural) | Documenti Reclamo |
| Schema name | `ava_DocumentoReclamo` |
| Entity set (Web API) | `ava_documentoreclamos` |
| Primary id attribute | `ava_documentoreclamoid` |
| Primary name attribute | `ava_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/ava_documentoreclamos?$select=ava_name&$top=10
GET /api/data/v9.2/ava_documentoreclamos(<guid>)
POST /api/data/v9.2/ava_documentoreclamos
PATCH /api/data/v9.2/ava_documentoreclamos(<guid>)
DELETE /api/data/v9.2/ava_documentoreclamos(<guid>)
```

## Attributes

Writable: **10** · Read-only: **11**

### Writable

`ava_documentoreclamoid`, `ava_name`, `ava_reclamo`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`ava_file`, `createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `FileAttachment_ava_DocumentoReclamo_ava_File` | [fileattachment](fileattachment.md) | `ava_file` | `ava_file` |
| `ava_documentoreclamo_Reclamo_ava_reclamo` | [ava_reclamo](ava_reclamo.md) | `ava_reclamo` | `ava_Reclamo` |
| `lk_ava_documentoreclamo_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_ava_documentoreclamo_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_ava_documentoreclamo_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_ava_documentoreclamo_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_ava_documentoreclamo` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_ava_documentoreclamo` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_ava_documentoreclamo` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_ava_documentoreclamo` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ava_documentoreclamo_FileAttachments` | [ava_documentoreclamo](ava_documentoreclamo.md) | `objectid` | `objectid_ava_documentoreclamo` |
| `ava_documentoreclamo_SyncErrors` | [ava_documentoreclamo](ava_documentoreclamo.md) | `regardingobjectid` | `regardingobjectid_ava_documentoreclamo` |
| `ava_documentoreclamo_AsyncOperations` | [ava_documentoreclamo](ava_documentoreclamo.md) | `regardingobjectid` | `regardingobjectid_ava_documentoreclamo` |
| `ava_documentoreclamo_MailboxTrackingFolders` | [ava_documentoreclamo](ava_documentoreclamo.md) | `regardingobjectid` | `regardingobjectid_ava_documentoreclamo` |
| `ava_documentoreclamo_UserEntityInstanceDatas` | [ava_documentoreclamo](ava_documentoreclamo.md) | `objectid` | `objectid_ava_documentoreclamo` |
| `ava_documentoreclamo_ProcessSession` | [ava_documentoreclamo](ava_documentoreclamo.md) | `regardingobjectid` | `regardingobjectid_ava_documentoreclamo` |
| `ava_documentoreclamo_BulkDeleteFailures` | [ava_documentoreclamo](ava_documentoreclamo.md) | `regardingobjectid` | `regardingobjectid_ava_documentoreclamo` |
| `ava_documentoreclamo_PrincipalObjectAttributeAccesses` | [ava_documentoreclamo](ava_documentoreclamo.md) | `objectid` | `objectid_ava_documentoreclamo` |


## Source

Generated from [ava_documentoreclamo (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='ava_documentoreclamo')) on 2026-05-07.