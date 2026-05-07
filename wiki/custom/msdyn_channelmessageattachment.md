---
logical: "msdyn_channelmessageattachment"
display: "Allegato del messaggio di canale"
entitySetName: "msdyn_channelmessageattachments"
primaryId: "msdyn_channelmessageattachmentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Allegato del messaggio di canale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_channelmessageattachment` |
| Display name | Allegato del messaggio di canale |
| Display (plural) | Allegati del messaggio di canale |
| Schema name | `msdyn_ChannelMessageAttachment` |
| Entity set (Web API) | `msdyn_channelmessageattachments` |
| Primary id attribute | `msdyn_channelmessageattachmentid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_channelmessageattachments?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_channelmessageattachments(<guid>)
POST /api/data/v9.2/msdyn_channelmessageattachments
PATCH /api/data/v9.2/msdyn_channelmessageattachments(<guid>)
DELETE /api/data/v9.2/msdyn_channelmessageattachments(<guid>)
```

## Attributes

Writable: **9** · Read-only: **11**

### Writable

`importsequencenumber`, `msdyn_channelmessageattachmentid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_fileattachment`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_channelmessageattachment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_channelmessageattachment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_channelmessageattachment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_channelmessageattachment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_channelmessageattachment` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_channelmessageattachment` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_channelmessageattachment` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_channelmessageattachment` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_ChannelMessageAttachment_msdyn_FileAttachment` | [fileattachment](fileattachment.md) | `msdyn_fileattachment` | `msdyn_fileattachment` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_channelmessageattachment_SyncErrors` | [msdyn_channelmessageattachment](msdyn_channelmessageattachment.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelmessageattachment` |
| `msdyn_channelmessageattachment_DuplicateMatchingRecord` | [msdyn_channelmessageattachment](msdyn_channelmessageattachment.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_channelmessageattachment` |
| `msdyn_channelmessageattachment_DuplicateBaseRecord` | [msdyn_channelmessageattachment](msdyn_channelmessageattachment.md) | `baserecordid` | `baserecordid_msdyn_channelmessageattachment` |
| `msdyn_channelmessageattachment_AsyncOperations` | [msdyn_channelmessageattachment](msdyn_channelmessageattachment.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelmessageattachment` |
| `msdyn_channelmessageattachment_MailboxTrackingFolders` | [msdyn_channelmessageattachment](msdyn_channelmessageattachment.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelmessageattachment` |
| `msdyn_channelmessageattachment_UserEntityInstanceDatas` | [msdyn_channelmessageattachment](msdyn_channelmessageattachment.md) | `objectid` | `objectid_msdyn_channelmessageattachment` |
| `msdyn_channelmessageattachment_ProcessSession` | [msdyn_channelmessageattachment](msdyn_channelmessageattachment.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelmessageattachment` |
| `msdyn_channelmessageattachment_BulkDeleteFailures` | [msdyn_channelmessageattachment](msdyn_channelmessageattachment.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelmessageattachment` |
| `msdyn_channelmessageattachment_PrincipalObjectAttributeAccesses` | [msdyn_channelmessageattachment](msdyn_channelmessageattachment.md) | `objectid` | `objectid_msdyn_channelmessageattachment` |
| `msdyn_channelmessageattachment_FileAttachments` | [msdyn_channelmessageattachment](msdyn_channelmessageattachment.md) | `objectid` | `objectid_msdyn_channelmessageattachment` |


## Source

Generated from [msdyn_channelmessageattachment (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_channelmessageattachment')) on 2026-05-07.