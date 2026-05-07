---
logical: "msdyn_analysisoverride"
display: "Override analisi"
entitySetName: "msdyn_analysisoverrides"
primaryId: "msdyn_analysisoverrideid"
primaryName: "msdyn_rule"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Override analisi

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_analysisoverride` |
| Display name | Override analisi |
| Display (plural) | Override analisi |
| Schema name | `msdyn_analysisoverride` |
| Entity set (Web API) | `msdyn_analysisoverrides` |
| Primary id attribute | `msdyn_analysisoverrideid` |
| Primary name attribute | `msdyn_rule` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_analysisoverrides?$select=msdyn_rule&$top=10
GET /api/data/v9.2/msdyn_analysisoverrides(<guid>)
POST /api/data/v9.2/msdyn_analysisoverrides
PATCH /api/data/v9.2/msdyn_analysisoverrides(<guid>)
DELETE /api/data/v9.2/msdyn_analysisoverrides(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_analysisoverrideid`, `msdyn_file`, `msdyn_rule`, `msdyn_severity`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_analysisoverride_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_analysisoverride_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_analysisoverride_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_analysisoverride_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_analysisoverride` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_analysisoverride` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_analysisoverride` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_analysisoverride` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_analysisoverride_SyncErrors` | [msdyn_analysisoverride](msdyn_analysisoverride.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysisoverride` |
| `msdyn_analysisoverride_DuplicateMatchingRecord` | [msdyn_analysisoverride](msdyn_analysisoverride.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_analysisoverride` |
| `msdyn_analysisoverride_DuplicateBaseRecord` | [msdyn_analysisoverride](msdyn_analysisoverride.md) | `baserecordid` | `baserecordid_msdyn_analysisoverride` |
| `msdyn_analysisoverride_AsyncOperations` | [msdyn_analysisoverride](msdyn_analysisoverride.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysisoverride` |
| `msdyn_analysisoverride_MailboxTrackingFolders` | [msdyn_analysisoverride](msdyn_analysisoverride.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysisoverride` |
| `msdyn_analysisoverride_UserEntityInstanceDatas` | [msdyn_analysisoverride](msdyn_analysisoverride.md) | `objectid` | `objectid_msdyn_analysisoverride` |
| `msdyn_analysisoverride_ProcessSession` | [msdyn_analysisoverride](msdyn_analysisoverride.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysisoverride` |
| `msdyn_analysisoverride_BulkDeleteFailures` | [msdyn_analysisoverride](msdyn_analysisoverride.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysisoverride` |
| `msdyn_analysisoverride_PrincipalObjectAttributeAccesses` | [msdyn_analysisoverride](msdyn_analysisoverride.md) | `objectid` | `objectid_msdyn_analysisoverride` |


## Source

Generated from [msdyn_analysisoverride (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_analysisoverride')) on 2026-05-07.