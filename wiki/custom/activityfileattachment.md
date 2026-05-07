---
logical: "activityfileattachment"
display: "Allegato file impegno"
entitySetName: "activityfileattachments"
primaryId: "activityfileattachmentid"
primaryName: "filename"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Allegato file impegno

Entità allegato con dati archiviati nell'attributo del tipo di file

## Identity

| Property | Value |
| --- | --- |
| Logical name | `activityfileattachment` |
| Display name | Allegato file impegno |
| Display (plural) | Allegati file impegno |
| Schema name | `activityfileattachment` |
| Entity set (Web API) | `activityfileattachments` |
| Primary id attribute | `activityfileattachmentid` |
| Primary name attribute | `filename` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/activityfileattachments?$select=filename&$top=10
GET /api/data/v9.2/activityfileattachments(<guid>)
POST /api/data/v9.2/activityfileattachments
PATCH /api/data/v9.2/activityfileattachments(<guid>)
DELETE /api/data/v9.2/activityfileattachments(<guid>)
```

## Attributes

Writable: **12** · Read-only: **17**

### Writable

`activityfileattachmentid`, `filename`, `importsequencenumber`, `iscustomizable`, `objecttypecode`, `overriddencreatedon`, `ownerid`, `parentid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `filecontent`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `FileAttachment_activityfileattachment_FileContent` | [fileattachment](fileattachment.md) | `filecontent` | `filecontent` |
| `post_activity_file_attachment` | [post](post.md) | `parentid` | `parentid_post` |
| `post_comment_activity_file_attachment` | [postcomment](postcomment.md) | `parentid` | `parentid_postcomment` |
| `lk_activityfileattachment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_activityfileattachment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_activityfileattachment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_activityfileattachment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_activityfileattachment` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_activityfileattachment` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_activityfileattachment` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_activityfileattachment` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `activityfileattachment_SyncErrors` | [activityfileattachment](activityfileattachment.md) | `regardingobjectid` | `regardingobjectid_activityfileattachment` |
| `activityfileattachment_DuplicateMatchingRecord` | [activityfileattachment](activityfileattachment.md) | `duplicaterecordid` | `duplicaterecordid_activityfileattachment` |
| `activityfileattachment_DuplicateBaseRecord` | [activityfileattachment](activityfileattachment.md) | `baserecordid` | `baserecordid_activityfileattachment` |
| `activityfileattachment_AsyncOperations` | [activityfileattachment](activityfileattachment.md) | `regardingobjectid` | `regardingobjectid_activityfileattachment` |
| `activityfileattachment_MailboxTrackingFolders` | [activityfileattachment](activityfileattachment.md) | `regardingobjectid` | `regardingobjectid_activityfileattachment` |
| `activityfileattachment_UserEntityInstanceDatas` | [activityfileattachment](activityfileattachment.md) | `objectid` | `objectid_activityfileattachment` |
| `activityfileattachment_ProcessSession` | [activityfileattachment](activityfileattachment.md) | `regardingobjectid` | `regardingobjectid_activityfileattachment` |
| `activityfileattachment_BulkDeleteFailures` | [activityfileattachment](activityfileattachment.md) | `regardingobjectid` | `regardingobjectid_activityfileattachment` |
| `activityfileattachment_PrincipalObjectAttributeAccesses` | [activityfileattachment](activityfileattachment.md) | `objectid` | `objectid_activityfileattachment` |
| `activityfileattachment_FileAttachments` | [activityfileattachment](activityfileattachment.md) | `objectid` | `objectid_activityfileattachment` |


## Source

Generated from [activityfileattachment (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='activityfileattachment')) on 2026-05-07.