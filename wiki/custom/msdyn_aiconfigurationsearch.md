---
logical: "msdyn_aiconfigurationsearch"
display: "AI Configuration Search"
entitySetName: "msdyn_aiconfigurationsearchs"
primaryId: "msdyn_aiconfigurationsearchid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# AI Configuration Search

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aiconfigurationsearch` |
| Display name | AI Configuration Search |
| Display (plural) | aiconfigurationsearchs |
| Schema name | `msdyn_aiconfigurationsearch` |
| Entity set (Web API) | `msdyn_aiconfigurationsearchs` |
| Primary id attribute | `msdyn_aiconfigurationsearchid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aiconfigurationsearchs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_aiconfigurationsearchs(<guid>)
POST /api/data/v9.2/msdyn_aiconfigurationsearchs
PATCH /api/data/v9.2/msdyn_aiconfigurationsearchs(<guid>)
DELETE /api/data/v9.2/msdyn_aiconfigurationsearchs(<guid>)
```

## Attributes

Writable: **13** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_aiconfiguration`, `msdyn_aiconfigurationsearchid`, `msdyn_dvtablesearch`, `msdyn_name`, `msdyn_uniquename`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_aiconfigurationsearch_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aiconfigurationsearch_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aiconfigurationsearch_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aiconfigurationsearch_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_aiconfigurationsearch` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_aiconfigurationsearch` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_aiconfigurationsearch` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_aiconfigurationsearch` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_aiconfiguration_msdyn_aiconfigurationsearch` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | `msdyn_aiconfiguration` | `msdyn_aiconfiguration` |
| `msdyn_dvtablesearch_msdyn_aiconfigurationsearch` | [dvtablesearch](dvtablesearch.md) | `msdyn_dvtablesearch` | `msdyn_dvtablesearch` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aiconfigurationsearch_SyncErrors` | [msdyn_aiconfigurationsearch](msdyn_aiconfigurationsearch.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiconfigurationsearch` |
| `msdyn_aiconfigurationsearch_DuplicateMatchingRecord` | [msdyn_aiconfigurationsearch](msdyn_aiconfigurationsearch.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_aiconfigurationsearch` |
| `msdyn_aiconfigurationsearch_DuplicateBaseRecord` | [msdyn_aiconfigurationsearch](msdyn_aiconfigurationsearch.md) | `baserecordid` | `baserecordid_msdyn_aiconfigurationsearch` |
| `msdyn_aiconfigurationsearch_AsyncOperations` | [msdyn_aiconfigurationsearch](msdyn_aiconfigurationsearch.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiconfigurationsearch` |
| `msdyn_aiconfigurationsearch_MailboxTrackingFolders` | [msdyn_aiconfigurationsearch](msdyn_aiconfigurationsearch.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiconfigurationsearch` |
| `msdyn_aiconfigurationsearch_UserEntityInstanceDatas` | [msdyn_aiconfigurationsearch](msdyn_aiconfigurationsearch.md) | `objectid` | `objectid_msdyn_aiconfigurationsearch` |
| `msdyn_aiconfigurationsearch_ProcessSession` | [msdyn_aiconfigurationsearch](msdyn_aiconfigurationsearch.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiconfigurationsearch` |
| `msdyn_aiconfigurationsearch_BulkDeleteFailures` | [msdyn_aiconfigurationsearch](msdyn_aiconfigurationsearch.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiconfigurationsearch` |
| `msdyn_aiconfigurationsearch_PrincipalObjectAttributeAccesses` | [msdyn_aiconfigurationsearch](msdyn_aiconfigurationsearch.md) | `objectid` | `objectid_msdyn_aiconfigurationsearch` |


## Source

Generated from [msdyn_aiconfigurationsearch (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_aiconfigurationsearch')) on 2026-05-07.