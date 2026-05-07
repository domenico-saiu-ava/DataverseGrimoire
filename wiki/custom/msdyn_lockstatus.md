---
logical: "msdyn_lockstatus"
display: "Stato blocco"
entitySetName: "msdyn_lockstatuses"
primaryId: "msdyn_lockstatusid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Stato blocco

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_lockstatus` |
| Display name | Stato blocco |
| Display (plural) | msdyn_lockstatuses |
| Schema name | `msdyn_lockstatus` |
| Entity set (Web API) | `msdyn_lockstatuses` |
| Primary id attribute | `msdyn_lockstatusid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_lockstatuses?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_lockstatuses(<guid>)
POST /api/data/v9.2/msdyn_lockstatuses
PATCH /api/data/v9.2/msdyn_lockstatuses(<guid>)
DELETE /api/data/v9.2/msdyn_lockstatuses(<guid>)
```

## Attributes

Writable: **10** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_lockstatus`, `msdyn_lockstatusid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_lockstatus_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_lockstatus_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_lockstatus_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_lockstatus_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_lockstatus` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_lockstatus` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_lockstatus` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_lockstatus` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_lockstatus_SyncErrors` | [msdyn_lockstatus](msdyn_lockstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_lockstatus` |
| `msdyn_lockstatus_DuplicateMatchingRecord` | [msdyn_lockstatus](msdyn_lockstatus.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_lockstatus` |
| `msdyn_lockstatus_DuplicateBaseRecord` | [msdyn_lockstatus](msdyn_lockstatus.md) | `baserecordid` | `baserecordid_msdyn_lockstatus` |
| `msdyn_lockstatus_AsyncOperations` | [msdyn_lockstatus](msdyn_lockstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_lockstatus` |
| `msdyn_lockstatus_MailboxTrackingFolders` | [msdyn_lockstatus](msdyn_lockstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_lockstatus` |
| `msdyn_lockstatus_UserEntityInstanceDatas` | [msdyn_lockstatus](msdyn_lockstatus.md) | `objectid` | `objectid_msdyn_lockstatus` |
| `msdyn_lockstatus_ProcessSession` | [msdyn_lockstatus](msdyn_lockstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_lockstatus` |
| `msdyn_lockstatus_BulkDeleteFailures` | [msdyn_lockstatus](msdyn_lockstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_lockstatus` |
| `msdyn_lockstatus_PrincipalObjectAttributeAccesses` | [msdyn_lockstatus](msdyn_lockstatus.md) | `objectid` | `objectid_msdyn_lockstatus` |


## Source

Generated from [msdyn_lockstatus (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_lockstatus')) on 2026-05-07.