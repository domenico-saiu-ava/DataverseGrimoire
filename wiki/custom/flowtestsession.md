---
logical: "flowtestsession"
display: "Flow Test Session"
entitySetName: "flowtestsessions"
primaryId: "flowtestsessionid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Flow Test Session

This table provides a comprehensive overview of the results for all selected test cases. Each row in the table represents a list of test cases execution, capturing key details such as the start time, execution status (e.g., Succeeded, Failed), execution duration.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `flowtestsession` |
| Display name | Flow Test Session |
| Display (plural) | Flow Test Sessions |
| Schema name | `flowtestsession` |
| Entity set (Web API) | `flowtestsessions` |
| Primary id attribute | `flowtestsessionid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/flowtestsessions?$select=name&$top=10
GET /api/data/v9.2/flowtestsessions(<guid>)
POST /api/data/v9.2/flowtestsessions
PATCH /api/data/v9.2/flowtestsessions(<guid>)
DELETE /api/data/v9.2/flowtestsessions(<guid>)
```

## Attributes

Writable: **14** · Read-only: **10**

### Writable

`completedon`, `correlationid`, `durationinseconds`, `flowtestsessionid`, `importsequencenumber`, `name`, `overriddencreatedon`, `ownerid`, `runmode`, `startedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_flowtestsession_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_flowtestsession_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_flowtestsession_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_flowtestsession_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_flowtestsession` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_flowtestsession` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_flowtestsession` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_flowtestsession` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `flowtestsession_SyncErrors` | [flowtestsession](flowtestsession.md) | `regardingobjectid` | `regardingobjectid_flowtestsession` |
| `flowtestsession_AsyncOperations` | [flowtestsession](flowtestsession.md) | `regardingobjectid` | `regardingobjectid_flowtestsession` |
| `flowtestsession_MailboxTrackingFolders` | [flowtestsession](flowtestsession.md) | `regardingobjectid` | `regardingobjectid_flowtestsession` |
| `flowtestsession_UserEntityInstanceDatas` | [flowtestsession](flowtestsession.md) | `objectid` | `objectid_flowtestsession` |
| `flowtestsession_ProcessSession` | [flowtestsession](flowtestsession.md) | `regardingobjectid` | `regardingobjectid_flowtestsession` |
| `flowtestsession_BulkDeleteFailures` | [flowtestsession](flowtestsession.md) | `regardingobjectid` | `regardingobjectid_flowtestsession` |
| `flowtestsession_PrincipalObjectAttributeAccesses` | [flowtestsession](flowtestsession.md) | `objectid` | `objectid_flowtestsession` |
| `flowtestsession_flowsession` | [flowtestsession](flowtestsession.md) | `flowtestsessionid` | `flowtestsessionid` |


## Source

Generated from [flowtestsession (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='flowtestsession')) on 2026-05-07.