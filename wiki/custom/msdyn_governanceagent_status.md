---
logical: "msdyn_governanceagent_status"
display: "msdyn_governanceagent_status"
entitySetName: "msdyn_governanceagent_statuses"
primaryId: "msdyn_governanceagent_statusid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_governanceagent_status

Governance Agent Status Table

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_governanceagent_status` |
| Display name | msdyn_governanceagent_status |
| Display (plural) | msdyn_governanceagent_statuses |
| Schema name | `msdyn_governanceagent_status` |
| Entity set (Web API) | `msdyn_governanceagent_statuses` |
| Primary id attribute | `msdyn_governanceagent_statusid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_governanceagent_statuses?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_governanceagent_statuses(<guid>)
POST /api/data/v9.2/msdyn_governanceagent_statuses
PATCH /api/data/v9.2/msdyn_governanceagent_statuses(<guid>)
DELETE /api/data/v9.2/msdyn_governanceagent_statuses(<guid>)
```

## Attributes

Writable: **11** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_governanceagent_statusid`, `msdyn_isenabled`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_governanceagent_status_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_governanceagent_status_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_governanceagent_status_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_governanceagent_status_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_governanceagent_status` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_governanceagent_status` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_governanceagent_status` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_governanceagent_status` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_governanceagent_status_SyncErrors` | [msdyn_governanceagent_status](msdyn_governanceagent_status.md) | `regardingobjectid` | `regardingobjectid_msdyn_governanceagent_status` |
| `msdyn_governanceagent_status_AsyncOperations` | [msdyn_governanceagent_status](msdyn_governanceagent_status.md) | `regardingobjectid` | `regardingobjectid_msdyn_governanceagent_status` |
| `msdyn_governanceagent_status_MailboxTrackingFolders` | [msdyn_governanceagent_status](msdyn_governanceagent_status.md) | `regardingobjectid` | `regardingobjectid_msdyn_governanceagent_status` |
| `msdyn_governanceagent_status_UserEntityInstanceDatas` | [msdyn_governanceagent_status](msdyn_governanceagent_status.md) | `objectid` | `objectid_msdyn_governanceagent_status` |
| `msdyn_governanceagent_status_ProcessSession` | [msdyn_governanceagent_status](msdyn_governanceagent_status.md) | `regardingobjectid` | `regardingobjectid_msdyn_governanceagent_status` |
| `msdyn_governanceagent_status_BulkDeleteFailures` | [msdyn_governanceagent_status](msdyn_governanceagent_status.md) | `regardingobjectid` | `regardingobjectid_msdyn_governanceagent_status` |
| `msdyn_governanceagent_status_PrincipalObjectAttributeAccesses` | [msdyn_governanceagent_status](msdyn_governanceagent_status.md) | `objectid` | `objectid_msdyn_governanceagent_status` |


## Source

Generated from [msdyn_governanceagent_status (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_governanceagent_status')) on 2026-05-07.