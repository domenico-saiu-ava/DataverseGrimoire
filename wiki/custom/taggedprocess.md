---
logical: "taggedprocess"
display: "Processo con tag"
entitySetName: "taggedprocesses"
primaryId: "taggedprocessid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Processo con tag

## Identity

| Property | Value |
| --- | --- |
| Logical name | `taggedprocess` |
| Display name | Processo con tag |
| Display (plural) | Processi con tag |
| Schema name | `taggedprocess` |
| Entity set (Web API) | `taggedprocesses` |
| Primary id attribute | `taggedprocessid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/taggedprocesses?$select=name&$top=10
GET /api/data/v9.2/taggedprocesses(<guid>)
POST /api/data/v9.2/taggedprocesses
PATCH /api/data/v9.2/taggedprocesses(<guid>)
DELETE /api/data/v9.2/taggedprocesses(<guid>)
```

## Attributes

Writable: **12** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `ownerid`, `process`, `statecode`, `statuscode`, `tag`, `taggedprocessid`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_taggedprocess_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_taggedprocess_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_taggedprocess_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_taggedprocess_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_taggedprocess` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_taggedprocess` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_taggedprocess` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_taggedprocess` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `taggedprocess_Process_workflow` | [workflow](workflow.md) | `process` | `Process` |
| `taggedprocess_tag_tag` | [tag](tag.md) | `tag` | `tag` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `taggedprocess_SyncErrors` | [taggedprocess](taggedprocess.md) | `regardingobjectid` | `regardingobjectid_taggedprocess` |
| `taggedprocess_AsyncOperations` | [taggedprocess](taggedprocess.md) | `regardingobjectid` | `regardingobjectid_taggedprocess` |
| `taggedprocess_MailboxTrackingFolders` | [taggedprocess](taggedprocess.md) | `regardingobjectid` | `regardingobjectid_taggedprocess` |
| `taggedprocess_UserEntityInstanceDatas` | [taggedprocess](taggedprocess.md) | `objectid` | `objectid_taggedprocess` |
| `taggedprocess_ProcessSession` | [taggedprocess](taggedprocess.md) | `regardingobjectid` | `regardingobjectid_taggedprocess` |
| `taggedprocess_BulkDeleteFailures` | [taggedprocess](taggedprocess.md) | `regardingobjectid` | `regardingobjectid_taggedprocess` |
| `taggedprocess_PrincipalObjectAttributeAccesses` | [taggedprocess](taggedprocess.md) | `objectid` | `objectid_taggedprocess` |


## Source

Generated from [taggedprocess (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='taggedprocess')) on 2026-05-07.