---
logical: "msdyn_recommendedactionsourceagentconfig"
display: "msdyn_recommendedactionsourceagentconfig"
entitySetName: "msdyn_recommendedactionsourceagentconfigs"
primaryId: "msdyn_recommendedactionsourceagentconfigid"
primaryName: "msdyn_agentname"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_recommendedactionsourceagentconfig

This table contains records of msdyn_recommendedactionsourceagentconfig details

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_recommendedactionsourceagentconfig` |
| Display name | msdyn_recommendedactionsourceagentconfig |
| Display (plural) | msdyn_recommendedactionsourceagentconfigs |
| Schema name | `msdyn_recommendedactionsourceagentconfig` |
| Entity set (Web API) | `msdyn_recommendedactionsourceagentconfigs` |
| Primary id attribute | `msdyn_recommendedactionsourceagentconfigid` |
| Primary name attribute | `msdyn_agentname` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_recommendedactionsourceagentconfigs?$select=msdyn_agentname&$top=10
GET /api/data/v9.2/msdyn_recommendedactionsourceagentconfigs(<guid>)
POST /api/data/v9.2/msdyn_recommendedactionsourceagentconfigs
PATCH /api/data/v9.2/msdyn_recommendedactionsourceagentconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_recommendedactionsourceagentconfigs(<guid>)
```

## Attributes

Writable: **13** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_agentimpactmapping`, `msdyn_agentname`, `msdyn_internalprioritizationinstruction`, `msdyn_isrecommendedactionagentenabled`, `msdyn_recommendedactionsourceagentconfigid`, `msdyn_sourceagentuniqueid`, `msdyn_syncactionexecutionstateapiconfig`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_recommendedactionsourceagentconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_recommendedactionsourceagentconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_recommendedactionsourceagentconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_recommendedactionsourceagentconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_recommendedactionsourceagentconfig` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_recommendedactionsourceagentconfig_SyncErrors` | [msdyn_recommendedactionsourceagentconfig](msdyn_recommendedactionsourceagentconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_recommendedactionsourceagentconfig` |
| `msdyn_recommendedactionsourceagentconfig_DuplicateMatchingRecord` | [msdyn_recommendedactionsourceagentconfig](msdyn_recommendedactionsourceagentconfig.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_recommendedactionsourceagentconfig` |
| `msdyn_recommendedactionsourceagentconfig_DuplicateBaseRecord` | [msdyn_recommendedactionsourceagentconfig](msdyn_recommendedactionsourceagentconfig.md) | `baserecordid` | `baserecordid_msdyn_recommendedactionsourceagentconfig` |
| `msdyn_recommendedactionsourceagentconfig_AsyncOperations` | [msdyn_recommendedactionsourceagentconfig](msdyn_recommendedactionsourceagentconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_recommendedactionsourceagentconfig` |
| `msdyn_recommendedactionsourceagentconfig_MailboxTrackingFolders` | [msdyn_recommendedactionsourceagentconfig](msdyn_recommendedactionsourceagentconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_recommendedactionsourceagentconfig` |
| `msdyn_recommendedactionsourceagentconfig_UserEntityInstanceDatas` | [msdyn_recommendedactionsourceagentconfig](msdyn_recommendedactionsourceagentconfig.md) | `objectid` | `objectid_msdyn_recommendedactionsourceagentconfig` |
| `msdyn_recommendedactionsourceagentconfig_ProcessSession` | [msdyn_recommendedactionsourceagentconfig](msdyn_recommendedactionsourceagentconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_recommendedactionsourceagentconfig` |
| `msdyn_recommendedactionsourceagentconfig_BulkDeleteFailures` | [msdyn_recommendedactionsourceagentconfig](msdyn_recommendedactionsourceagentconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_recommendedactionsourceagentconfig` |
| `msdyn_recommendedactionsourceagentconfig_PrincipalObjectAttributeAccesses` | [msdyn_recommendedactionsourceagentconfig](msdyn_recommendedactionsourceagentconfig.md) | `objectid` | `objectid_msdyn_recommendedactionsourceagentconfig` |
| `msdyn_rawactioncatalogue_msdyn_recommendedactionsourceagentconfig` | [msdyn_recommendedactionsourceagentconfig](msdyn_recommendedactionsourceagentconfig.md) | `msdyn_sourceagentconfig` | `msdyn_sourceagentconfig` |
| `msdyn_prioritizedactioncatalogue_msdyn_recommendedactionsourceagentconfig` | [msdyn_recommendedactionsourceagentconfig](msdyn_recommendedactionsourceagentconfig.md) | `msdyn_sourceagentconfig` | `msdyn_sourceagentconfig` |


## Source

Generated from [msdyn_recommendedactionsourceagentconfig (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_recommendedactionsourceagentconfig')) on 2026-05-07.