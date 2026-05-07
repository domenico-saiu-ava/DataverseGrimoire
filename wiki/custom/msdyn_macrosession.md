---
logical: "msdyn_macrosession"
display: "Cronologia esecuzione macro"
entitySetName: "msdyn_macrosessions"
primaryId: "msdyn_macrosessionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Cronologia esecuzione macro

Archivia la cronologia delle esecuzioni della macro

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_macrosession` |
| Display name | Cronologia esecuzione macro |
| Display (plural) | Cronologie di esecuzione macro |
| Schema name | `msdyn_macrosession` |
| Entity set (Web API) | `msdyn_macrosessions` |
| Primary id attribute | `msdyn_macrosessionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_macrosessions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_macrosessions(<guid>)
POST /api/data/v9.2/msdyn_macrosessions
PATCH /api/data/v9.2/msdyn_macrosessions(<guid>)
DELETE /api/data/v9.2/msdyn_macrosessions(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_executioncontext`, `msdyn_macroname`, `msdyn_macrosessionid`, `msdyn_name`, `msdyn_status`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_macrosession_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_macrosession_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_macrosession_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_macrosession_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_macrosession` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_macrosession` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_macrosession` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_macrosession` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_workflow_msdyn_macrosession_macroname` | [workflow](workflow.md) | `msdyn_macroname` | `msdyn_macroname` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_macrosession_SyncErrors` | [msdyn_macrosession](msdyn_macrosession.md) | `regardingobjectid` | `regardingobjectid_msdyn_macrosession` |
| `msdyn_macrosession_DuplicateMatchingRecord` | [msdyn_macrosession](msdyn_macrosession.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_macrosession` |
| `msdyn_macrosession_DuplicateBaseRecord` | [msdyn_macrosession](msdyn_macrosession.md) | `baserecordid` | `baserecordid_msdyn_macrosession` |
| `msdyn_macrosession_AsyncOperations` | [msdyn_macrosession](msdyn_macrosession.md) | `regardingobjectid` | `regardingobjectid_msdyn_macrosession` |
| `msdyn_macrosession_MailboxTrackingFolders` | [msdyn_macrosession](msdyn_macrosession.md) | `regardingobjectid` | `regardingobjectid_msdyn_macrosession` |
| `msdyn_macrosession_UserEntityInstanceDatas` | [msdyn_macrosession](msdyn_macrosession.md) | `objectid` | `objectid_msdyn_macrosession` |
| `msdyn_macrosession_ProcessSession` | [msdyn_macrosession](msdyn_macrosession.md) | `regardingobjectid` | `regardingobjectid_msdyn_macrosession` |
| `msdyn_macrosession_BulkDeleteFailures` | [msdyn_macrosession](msdyn_macrosession.md) | `regardingobjectid` | `regardingobjectid_msdyn_macrosession` |
| `msdyn_macrosession_PrincipalObjectAttributeAccesses` | [msdyn_macrosession](msdyn_macrosession.md) | `objectid` | `objectid_msdyn_macrosession` |


## Source

Generated from [msdyn_macrosession (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_macrosession')) on 2026-05-07.