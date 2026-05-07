---
logical: "msdyn_salescopilotjobstatus"
display: "Stato del processo Sales Copilot"
entitySetName: "msdyn_salescopilotjobstatuses"
primaryId: "msdyn_salescopilotjobstatusid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Stato del processo Sales Copilot

Stato del processo Sales Copilot

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salescopilotjobstatus` |
| Display name | Stato del processo Sales Copilot |
| Display (plural) | Stati del processo Sales Copilot |
| Schema name | `msdyn_salescopilotjobstatus` |
| Entity set (Web API) | `msdyn_salescopilotjobstatuses` |
| Primary id attribute | `msdyn_salescopilotjobstatusid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salescopilotjobstatuses?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_salescopilotjobstatuses(<guid>)
POST /api/data/v9.2/msdyn_salescopilotjobstatuses
PATCH /api/data/v9.2/msdyn_salescopilotjobstatuses(<guid>)
DELETE /api/data/v9.2/msdyn_salescopilotjobstatuses(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_jobtype`, `msdyn_lastruntime`, `msdyn_name`, `msdyn_salescopilotjobstatusid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_salescopilotjobstatus_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salescopilotjobstatus_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salescopilotjobstatus_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salescopilotjobstatus_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_salescopilotjobstatus` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_salescopilotjobstatus` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_salescopilotjobstatus` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_salescopilotjobstatus` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salescopilotjobstatus_SyncErrors` | [msdyn_salescopilotjobstatus](msdyn_salescopilotjobstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_salescopilotjobstatus` |
| `msdyn_salescopilotjobstatus_DuplicateMatchingRecord` | [msdyn_salescopilotjobstatus](msdyn_salescopilotjobstatus.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_salescopilotjobstatus` |
| `msdyn_salescopilotjobstatus_DuplicateBaseRecord` | [msdyn_salescopilotjobstatus](msdyn_salescopilotjobstatus.md) | `baserecordid` | `baserecordid_msdyn_salescopilotjobstatus` |
| `msdyn_salescopilotjobstatus_AsyncOperations` | [msdyn_salescopilotjobstatus](msdyn_salescopilotjobstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_salescopilotjobstatus` |
| `msdyn_salescopilotjobstatus_MailboxTrackingFolders` | [msdyn_salescopilotjobstatus](msdyn_salescopilotjobstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_salescopilotjobstatus` |
| `msdyn_salescopilotjobstatus_UserEntityInstanceDatas` | [msdyn_salescopilotjobstatus](msdyn_salescopilotjobstatus.md) | `objectid` | `objectid_msdyn_salescopilotjobstatus` |
| `msdyn_salescopilotjobstatus_ProcessSession` | [msdyn_salescopilotjobstatus](msdyn_salescopilotjobstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_salescopilotjobstatus` |
| `msdyn_salescopilotjobstatus_BulkDeleteFailures` | [msdyn_salescopilotjobstatus](msdyn_salescopilotjobstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_salescopilotjobstatus` |
| `msdyn_salescopilotjobstatus_PrincipalObjectAttributeAccesses` | [msdyn_salescopilotjobstatus](msdyn_salescopilotjobstatus.md) | `objectid` | `objectid_msdyn_salescopilotjobstatus` |


## Source

Generated from [msdyn_salescopilotjobstatus (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_salescopilotjobstatus')) on 2026-05-07.