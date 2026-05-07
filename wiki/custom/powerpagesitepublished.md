---
logical: "powerpagesitepublished"
display: "Sito di Power Pages pubblicato"
entitySetName: "powerpagesitepublisheds"
primaryId: "powerpagesitepublishedid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Sito di Power Pages pubblicato

## Identity

| Property | Value |
| --- | --- |
| Logical name | `powerpagesitepublished` |
| Display name | Sito di Power Pages pubblicato |
| Display (plural) | Sito di Power Pages pubblicato |
| Schema name | `powerpagesitepublished` |
| Entity set (Web API) | `powerpagesitepublisheds` |
| Primary id attribute | `powerpagesitepublishedid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/powerpagesitepublisheds?$select=name&$top=10
GET /api/data/v9.2/powerpagesitepublisheds(<guid>)
POST /api/data/v9.2/powerpagesitepublisheds
PATCH /api/data/v9.2/powerpagesitepublisheds(<guid>)
DELETE /api/data/v9.2/powerpagesitepublisheds(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`importsequencenumber`, `name`, `overriddencreatedon`, `ownerid`, `powerpagesiteid`, `powerpagesitepublishedid`, `publishedrecords`, `state`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`, `version`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `publishedmetadata`, `publishedsource`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_powerpagesitepublished_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_powerpagesitepublished_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_powerpagesitepublished_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_powerpagesitepublished_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_powerpagesitepublished` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_powerpagesitepublished` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_powerpagesitepublished` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_powerpagesitepublished` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_powerpagesitepublished_publishedmetadata` | [fileattachment](fileattachment.md) | `publishedmetadata` | `publishedmetadata` |
| `FileAttachment_powerpagesitepublished_publishedsource` | [fileattachment](fileattachment.md) | `publishedsource` | `publishedsource` |
| `powerpagesite_powerpagesitepublished_powerpagesiteid` | [powerpagesite](powerpagesite.md) | `powerpagesiteid` | `PowerPageSiteId` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `powerpagesitepublished_SyncErrors` | [powerpagesitepublished](powerpagesitepublished.md) | `regardingobjectid` | `regardingobjectid_powerpagesitepublished` |
| `powerpagesitepublished_AsyncOperations` | [powerpagesitepublished](powerpagesitepublished.md) | `regardingobjectid` | `regardingobjectid_powerpagesitepublished` |
| `powerpagesitepublished_MailboxTrackingFolders` | [powerpagesitepublished](powerpagesitepublished.md) | `regardingobjectid` | `regardingobjectid_powerpagesitepublished` |
| `powerpagesitepublished_UserEntityInstanceDatas` | [powerpagesitepublished](powerpagesitepublished.md) | `objectid` | `objectid_powerpagesitepublished` |
| `powerpagesitepublished_ProcessSession` | [powerpagesitepublished](powerpagesitepublished.md) | `regardingobjectid` | `regardingobjectid_powerpagesitepublished` |
| `powerpagesitepublished_BulkDeleteFailures` | [powerpagesitepublished](powerpagesitepublished.md) | `regardingobjectid` | `regardingobjectid_powerpagesitepublished` |
| `powerpagesitepublished_PrincipalObjectAttributeAccesses` | [powerpagesitepublished](powerpagesitepublished.md) | `objectid` | `objectid_powerpagesitepublished` |
| `powerpagesitepublished_FileAttachments` | [powerpagesitepublished](powerpagesitepublished.md) | `objectid` | `objectid_powerpagesitepublished` |


## Source

Generated from [powerpagesitepublished (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='powerpagesitepublished')) on 2026-05-07.