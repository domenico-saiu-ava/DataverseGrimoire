---
logical: "skillresource"
display: "Business Skill Resource"
entitySetName: "skillresources"
primaryId: "skillresourceid"
primaryName: "filename"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Business Skill Resource

## Identity

| Property | Value |
| --- | --- |
| Logical name | `skillresource` |
| Display name | Business Skill Resource |
| Display (plural) | Business Skill Resources |
| Schema name | `SkillResource` |
| Entity set (Web API) | `skillresources` |
| Primary id attribute | `skillresourceid` |
| Primary name attribute | `filename` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/skillresources?$select=filename&$top=10
GET /api/data/v9.2/skillresources(<guid>)
POST /api/data/v9.2/skillresources
PATCH /api/data/v9.2/skillresources(<guid>)
DELETE /api/data/v9.2/skillresources(<guid>)
```

## Attributes

Writable: **11** · Read-only: **19**

### Writable

`filename`, `importsequencenumber`, `iscustomizable`, `overriddencreatedon`, `skillid`, `skillresourceid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `uniquename`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `filecontent`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `ownerid`, `owneridtype`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_skillresource_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_skillresource_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_skillresource_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_skillresource_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `FileAttachment_SkillResource_FileContent` | [fileattachment](fileattachment.md) | `filecontent` | `filecontent` |
| `skill_skillresource` | [skill](skill.md) | `skillid` | `skillid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `skillresource_SyncErrors` | [skillresource](skillresource.md) | `regardingobjectid` | `regardingobjectid_skillresource` |
| `skillresource_AsyncOperations` | [skillresource](skillresource.md) | `regardingobjectid` | `regardingobjectid_skillresource` |
| `skillresource_MailboxTrackingFolders` | [skillresource](skillresource.md) | `regardingobjectid` | `regardingobjectid_skillresource` |
| `skillresource_UserEntityInstanceDatas` | [skillresource](skillresource.md) | `objectid` | `objectid_skillresource` |
| `skillresource_ProcessSession` | [skillresource](skillresource.md) | `regardingobjectid` | `regardingobjectid_skillresource` |
| `skillresource_BulkDeleteFailures` | [skillresource](skillresource.md) | `regardingobjectid` | `regardingobjectid_skillresource` |
| `skillresource_PrincipalObjectAttributeAccesses` | [skillresource](skillresource.md) | `objectid` | `objectid_skillresource` |
| `skillresource_FileAttachments` | [skillresource](skillresource.md) | `objectid` | `objectid_skillresource` |


## Source

Generated from [skillresource (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='skillresource')) on 2026-05-07.