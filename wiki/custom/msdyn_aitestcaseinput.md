---
logical: "msdyn_aitestcaseinput"
display: "AI Test Case Input"
entitySetName: "msdyn_aitestcaseinputs"
primaryId: "msdyn_aitestcaseinputid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# AI Test Case Input

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aitestcaseinput` |
| Display name | AI Test Case Input |
| Display (plural) | AI Test Case Input |
| Schema name | `msdyn_AITestCaseInput` |
| Entity set (Web API) | `msdyn_aitestcaseinputs` |
| Primary id attribute | `msdyn_aitestcaseinputid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aitestcaseinputs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_aitestcaseinputs(<guid>)
POST /api/data/v9.2/msdyn_aitestcaseinputs
PATCH /api/data/v9.2/msdyn_aitestcaseinputs(<guid>)
DELETE /api/data/v9.2/msdyn_aitestcaseinputs(<guid>)
```

## Attributes

Writable: **13** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_aitestcaseid`, `msdyn_aitestcaseinputid`, `msdyn_description`, `msdyn_inputdata`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_aitestcaseinput_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aitestcaseinput_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aitestcaseinput_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aitestcaseinput_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_aitestcaseinput` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_aitestcaseinput` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_aitestcaseinput` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_aitestcaseinput` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_aitestcase_msdyn_aitestcaseinput` | [msdyn_aitestcase](msdyn_aitestcase.md) | `msdyn_aitestcaseid` | `msdyn_AITestCaseId` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aitestcaseinput_SyncErrors` | [msdyn_aitestcaseinput](msdyn_aitestcaseinput.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestcaseinput` |
| `msdyn_aitestcaseinput_AsyncOperations` | [msdyn_aitestcaseinput](msdyn_aitestcaseinput.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestcaseinput` |
| `msdyn_aitestcaseinput_MailboxTrackingFolders` | [msdyn_aitestcaseinput](msdyn_aitestcaseinput.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestcaseinput` |
| `msdyn_aitestcaseinput_UserEntityInstanceDatas` | [msdyn_aitestcaseinput](msdyn_aitestcaseinput.md) | `objectid` | `objectid_msdyn_aitestcaseinput` |
| `msdyn_aitestcaseinput_ProcessSession` | [msdyn_aitestcaseinput](msdyn_aitestcaseinput.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestcaseinput` |
| `msdyn_aitestcaseinput_BulkDeleteFailures` | [msdyn_aitestcaseinput](msdyn_aitestcaseinput.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestcaseinput` |
| `msdyn_aitestcaseinput_PrincipalObjectAttributeAccesses` | [msdyn_aitestcaseinput](msdyn_aitestcaseinput.md) | `objectid` | `objectid_msdyn_aitestcaseinput` |
| `msdyn_aitestcaseinput_msdyn_aitestcasedocument` | [msdyn_aitestcaseinput](msdyn_aitestcaseinput.md) | `msdyn_aitestcaseinputid` | `msdyn_AITestCaseInputId` |


## Source

Generated from [msdyn_aitestcaseinput (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_aitestcaseinput')) on 2026-05-07.