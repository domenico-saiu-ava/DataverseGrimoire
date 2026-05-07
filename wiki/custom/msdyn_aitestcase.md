---
logical: "msdyn_aitestcase"
display: "AI Test Case"
entitySetName: "msdyn_aitestcases"
primaryId: "msdyn_aitestcaseid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# AI Test Case

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aitestcase` |
| Display name | AI Test Case |
| Display (plural) | AI Test Case |
| Schema name | `msdyn_AITestCase` |
| Entity set (Web API) | `msdyn_aitestcases` |
| Primary id attribute | `msdyn_aitestcaseid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aitestcases?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_aitestcases(<guid>)
POST /api/data/v9.2/msdyn_aitestcases
PATCH /api/data/v9.2/msdyn_aitestcases(<guid>)
DELETE /api/data/v9.2/msdyn_aitestcases(<guid>)
```

## Attributes

Writable: **16** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_aiobjectid`, `msdyn_aiobjecttype`, `msdyn_aitestcaseid`, `msdyn_description`, `msdyn_expectedoutput`, `msdyn_name`, `msdyn_source`, `msdyn_testcasestate`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_aitestcase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aitestcase_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aitestcase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aitestcase_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_aitestcase` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_aitestcase` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_aitestcase` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_aitestcase` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aitestcase_SyncErrors` | [msdyn_aitestcase](msdyn_aitestcase.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestcase` |
| `msdyn_aitestcase_AsyncOperations` | [msdyn_aitestcase](msdyn_aitestcase.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestcase` |
| `msdyn_aitestcase_MailboxTrackingFolders` | [msdyn_aitestcase](msdyn_aitestcase.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestcase` |
| `msdyn_aitestcase_UserEntityInstanceDatas` | [msdyn_aitestcase](msdyn_aitestcase.md) | `objectid` | `objectid_msdyn_aitestcase` |
| `msdyn_aitestcase_ProcessSession` | [msdyn_aitestcase](msdyn_aitestcase.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestcase` |
| `msdyn_aitestcase_BulkDeleteFailures` | [msdyn_aitestcase](msdyn_aitestcase.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestcase` |
| `msdyn_aitestcase_PrincipalObjectAttributeAccesses` | [msdyn_aitestcase](msdyn_aitestcase.md) | `objectid` | `objectid_msdyn_aitestcase` |
| `msdyn_aitestcase_msdyn_aitestcaseinput` | [msdyn_aitestcase](msdyn_aitestcase.md) | `msdyn_aitestcaseid` | `msdyn_AITestCaseId` |
| `msdyn_aitestcase_msdyn_aitestrun` | [msdyn_aitestcase](msdyn_aitestcase.md) | `msdyn_aitestcaseid` | `msdyn_AITestCaseId` |


## Source

Generated from [msdyn_aitestcase (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_aitestcase')) on 2026-05-07.