---
logical: "ava_documentolamentela"
display: "Documento Lamentela"
entitySetName: "ava_documentolamentelas"
primaryId: "ava_documentolamentelaid"
primaryName: "ava_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Documento Lamentela

## Identity

| Property | Value |
| --- | --- |
| Logical name | `ava_documentolamentela` |
| Display name | Documento Lamentela |
| Display (plural) | Documento Lamentele |
| Schema name | `ava_DocumentoLamentela` |
| Entity set (Web API) | `ava_documentolamentelas` |
| Primary id attribute | `ava_documentolamentelaid` |
| Primary name attribute | `ava_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/ava_documentolamentelas?$select=ava_name&$top=10
GET /api/data/v9.2/ava_documentolamentelas(<guid>)
POST /api/data/v9.2/ava_documentolamentelas
PATCH /api/data/v9.2/ava_documentolamentelas(<guid>)
DELETE /api/data/v9.2/ava_documentolamentelas(<guid>)
```

## Attributes

Writable: **10** · Read-only: **11**

### Writable

`ava_documentolamentelaid`, `ava_lamentela`, `ava_name`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`ava_file`, `createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `FileAttachment_ava_DocumentoLamentela_ava_File` | [fileattachment](fileattachment.md) | `ava_file` | `ava_file` |
| `lk_ava_documentolamentela_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_ava_documentolamentela_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_ava_documentolamentela_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_ava_documentolamentela_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_ava_documentolamentela` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_ava_documentolamentela` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_ava_documentolamentela` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_ava_documentolamentela` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `ava_documentolamentela_Lamentela_ava_lamentela` | [ava_lamentela](ava_lamentela.md) | `ava_lamentela` | `ava_Lamentela` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ava_documentolamentela_FileAttachments` | [ava_documentolamentela](ava_documentolamentela.md) | `objectid` | `objectid_ava_documentolamentela` |
| `ava_documentolamentela_SyncErrors` | [ava_documentolamentela](ava_documentolamentela.md) | `regardingobjectid` | `regardingobjectid_ava_documentolamentela` |
| `ava_documentolamentela_AsyncOperations` | [ava_documentolamentela](ava_documentolamentela.md) | `regardingobjectid` | `regardingobjectid_ava_documentolamentela` |
| `ava_documentolamentela_MailboxTrackingFolders` | [ava_documentolamentela](ava_documentolamentela.md) | `regardingobjectid` | `regardingobjectid_ava_documentolamentela` |
| `ava_documentolamentela_UserEntityInstanceDatas` | [ava_documentolamentela](ava_documentolamentela.md) | `objectid` | `objectid_ava_documentolamentela` |
| `ava_documentolamentela_ProcessSession` | [ava_documentolamentela](ava_documentolamentela.md) | `regardingobjectid` | `regardingobjectid_ava_documentolamentela` |
| `ava_documentolamentela_BulkDeleteFailures` | [ava_documentolamentela](ava_documentolamentela.md) | `regardingobjectid` | `regardingobjectid_ava_documentolamentela` |
| `ava_documentolamentela_PrincipalObjectAttributeAccesses` | [ava_documentolamentela](ava_documentolamentela.md) | `objectid` | `objectid_ava_documentolamentela` |


## Source

Generated from [ava_documentolamentela (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='ava_documentolamentela')) on 2026-05-07.