---
logical: "knowledgesourceprofile"
display: "Knowledge Source Profile"
entitySetName: "knowledgesourceprofiles"
primaryId: "knowledgesourceprofileid"
primaryName: "displayname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Knowledge Source Profile

## Identity

| Property | Value |
| --- | --- |
| Logical name | `knowledgesourceprofile` |
| Display name | Knowledge Source Profile |
| Display (plural) | Knowledge Source Profiles |
| Schema name | `KnowledgeSourceProfile` |
| Entity set (Web API) | `knowledgesourceprofiles` |
| Primary id attribute | `knowledgesourceprofileid` |
| Primary name attribute | `displayname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/knowledgesourceprofiles?$select=displayname&$top=10
GET /api/data/v9.2/knowledgesourceprofiles(<guid>)
POST /api/data/v9.2/knowledgesourceprofiles
PATCH /api/data/v9.2/knowledgesourceprofiles(<guid>)
DELETE /api/data/v9.2/knowledgesourceprofiles(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`description`, `displayname`, `hints`, `importsequencenumber`, `knowledgesourceprofileid`, `overriddencreatedon`, `ownerid`, `sourcetype`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_knowledgesourceprofile_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_knowledgesourceprofile_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_knowledgesourceprofile_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_knowledgesourceprofile_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_knowledgesourceprofile` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_knowledgesourceprofile` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_knowledgesourceprofile` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_knowledgesourceprofile` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `knowledgesourceprofile_dvtablesearch_knowledgesourceprofileid` | [knowledgesourceprofile](knowledgesourceprofile.md) | `knowledgesourceprofileid` | `knowledgesourceprofileid` |
| `knowledgesourceprofile_SyncErrors` | [knowledgesourceprofile](knowledgesourceprofile.md) | `regardingobjectid` | `regardingobjectid_knowledgesourceprofile` |
| `knowledgesourceprofile_DuplicateMatchingRecord` | [knowledgesourceprofile](knowledgesourceprofile.md) | `duplicaterecordid` | `duplicaterecordid_knowledgesourceprofile` |
| `knowledgesourceprofile_DuplicateBaseRecord` | [knowledgesourceprofile](knowledgesourceprofile.md) | `baserecordid` | `baserecordid_knowledgesourceprofile` |
| `knowledgesourceprofile_AsyncOperations` | [knowledgesourceprofile](knowledgesourceprofile.md) | `regardingobjectid` | `regardingobjectid_knowledgesourceprofile` |
| `knowledgesourceprofile_MailboxTrackingFolders` | [knowledgesourceprofile](knowledgesourceprofile.md) | `regardingobjectid` | `regardingobjectid_knowledgesourceprofile` |
| `knowledgesourceprofile_UserEntityInstanceDatas` | [knowledgesourceprofile](knowledgesourceprofile.md) | `objectid` | `objectid_knowledgesourceprofile` |
| `knowledgesourceprofile_ProcessSession` | [knowledgesourceprofile](knowledgesourceprofile.md) | `regardingobjectid` | `regardingobjectid_knowledgesourceprofile` |
| `knowledgesourceprofile_BulkDeleteFailures` | [knowledgesourceprofile](knowledgesourceprofile.md) | `regardingobjectid` | `regardingobjectid_knowledgesourceprofile` |
| `knowledgesourceprofile_PrincipalObjectAttributeAccesses` | [knowledgesourceprofile](knowledgesourceprofile.md) | `objectid` | `objectid_knowledgesourceprofile` |


## Source

Generated from [knowledgesourceprofile (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='knowledgesourceprofile')) on 2026-05-07.