---
logical: "copilotsynonyms"
display: "CopilotSynonyms"
entitySetName: "copilotsynonyms"
primaryId: "copilotsynonymsid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# CopilotSynonyms

Componente CopilotSynonyms

## Identity

| Property | Value |
| --- | --- |
| Logical name | `copilotsynonyms` |
| Display name | CopilotSynonyms |
| Display (plural) | CopilotSynonyms |
| Schema name | `CopilotSynonyms` |
| Entity set (Web API) | `copilotsynonyms` |
| Primary id attribute | `copilotsynonymsid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/copilotsynonyms?$select=name&$top=10
GET /api/data/v9.2/copilotsynonyms(<guid>)
POST /api/data/v9.2/copilotsynonyms
PATCH /api/data/v9.2/copilotsynonyms(<guid>)
DELETE /api/data/v9.2/copilotsynonyms(<guid>)
```

## Attributes

Writable: **14** · Read-only: **16**

### Writable

`columnlogicalname`, `copilotsynonymsid`, `description`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `ownerid`, `skillentity`, `statecode`, `statuscode`, `synonyms`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_copilotsynonyms_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_copilotsynonyms_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_copilotsynonyms_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_copilotsynonyms_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_copilotsynonyms` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_copilotsynonyms` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_copilotsynonyms` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_copilotsynonyms` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `CopilotSynonyms_DVTableSearchEntity` | [dvtablesearchentity](dvtablesearchentity.md) | `skillentity` | `skillentity` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `copilotsynonyms_SyncErrors` | [copilotsynonyms](copilotsynonyms.md) | `regardingobjectid` | `regardingobjectid_copilotsynonyms` |
| `copilotsynonyms_AsyncOperations` | [copilotsynonyms](copilotsynonyms.md) | `regardingobjectid` | `regardingobjectid_copilotsynonyms` |
| `copilotsynonyms_MailboxTrackingFolders` | [copilotsynonyms](copilotsynonyms.md) | `regardingobjectid` | `regardingobjectid_copilotsynonyms` |
| `copilotsynonyms_UserEntityInstanceDatas` | [copilotsynonyms](copilotsynonyms.md) | `objectid` | `objectid_copilotsynonyms` |
| `copilotsynonyms_ProcessSession` | [copilotsynonyms](copilotsynonyms.md) | `regardingobjectid` | `regardingobjectid_copilotsynonyms` |
| `copilotsynonyms_BulkDeleteFailures` | [copilotsynonyms](copilotsynonyms.md) | `regardingobjectid` | `regardingobjectid_copilotsynonyms` |
| `copilotsynonyms_PrincipalObjectAttributeAccesses` | [copilotsynonyms](copilotsynonyms.md) | `objectid` | `objectid_copilotsynonyms` |


## Source

Generated from [copilotsynonyms (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='copilotsynonyms')) on 2026-05-07.