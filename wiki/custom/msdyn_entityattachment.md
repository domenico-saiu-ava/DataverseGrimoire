---
logical: "msdyn_entityattachment"
display: "Allegato entità"
entitySetName: "msdyn_entityattachments"
primaryId: "msdyn_entityattachmentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Allegato entità

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_entityattachment` |
| Display name | Allegato entità |
| Display (plural) | Allegati entità |
| Schema name | `msdyn_entityattachment` |
| Entity set (Web API) | `msdyn_entityattachments` |
| Primary id attribute | `msdyn_entityattachmentid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_entityattachments?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_entityattachments(<guid>)
POST /api/data/v9.2/msdyn_entityattachments
PATCH /api/data/v9.2/msdyn_entityattachments(<guid>)
DELETE /api/data/v9.2/msdyn_entityattachments(<guid>)
```

## Attributes

Writable: **10** · Read-only: **11**

### Writable

`importsequencenumber`, `msdyn_entityattachmentid`, `msdyn_name`, `msdyn_relatedentity`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_fileblob`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_entityattachment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_entityattachment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_entityattachment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_entityattachment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_entityattachment` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_entityattachment` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_entityattachment` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_entityattachment` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_entityattachment_msdyn_FileBlob` | [fileattachment](fileattachment.md) | `msdyn_fileblob` | `msdyn_fileblob` |
| `msdyn_relatedentity_msdyn_entityattachment` | [incident](incident.md) | `msdyn_relatedentity` | `msdyn_relatedentity` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_entityattachment_SyncErrors` | [msdyn_entityattachment](msdyn_entityattachment.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityattachment` |
| `msdyn_entityattachment_DuplicateMatchingRecord` | [msdyn_entityattachment](msdyn_entityattachment.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_entityattachment` |
| `msdyn_entityattachment_DuplicateBaseRecord` | [msdyn_entityattachment](msdyn_entityattachment.md) | `baserecordid` | `baserecordid_msdyn_entityattachment` |
| `msdyn_entityattachment_AsyncOperations` | [msdyn_entityattachment](msdyn_entityattachment.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityattachment` |
| `msdyn_entityattachment_MailboxTrackingFolders` | [msdyn_entityattachment](msdyn_entityattachment.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityattachment` |
| `msdyn_entityattachment_UserEntityInstanceDatas` | [msdyn_entityattachment](msdyn_entityattachment.md) | `objectid` | `objectid_msdyn_entityattachment` |
| `msdyn_entityattachment_ProcessSession` | [msdyn_entityattachment](msdyn_entityattachment.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityattachment` |
| `msdyn_entityattachment_BulkDeleteFailures` | [msdyn_entityattachment](msdyn_entityattachment.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityattachment` |
| `msdyn_entityattachment_PrincipalObjectAttributeAccesses` | [msdyn_entityattachment](msdyn_entityattachment.md) | `objectid` | `objectid_msdyn_entityattachment` |
| `msdyn_entityattachment_FileAttachments` | [msdyn_entityattachment](msdyn_entityattachment.md) | `objectid` | `objectid_msdyn_entityattachment` |


## Source

Generated from [msdyn_entityattachment (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_entityattachment')) on 2026-05-07.