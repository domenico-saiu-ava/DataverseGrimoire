---
logical: "aiplugingovernance"
display: "AI Plugin Governance"
entitySetName: "aiplugingovernances"
primaryId: "aiplugingovernanceid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# AI Plugin Governance

## Identity

| Property | Value |
| --- | --- |
| Logical name | `aiplugingovernance` |
| Display name | AI Plugin Governance |
| Display (plural) | AI Plugin Governance Entries |
| Schema name | `AIPluginGovernance` |
| Entity set (Web API) | `aiplugingovernances` |
| Primary id attribute | `aiplugingovernanceid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/aiplugingovernances?$select=name&$top=10
GET /api/data/v9.2/aiplugingovernances(<guid>)
POST /api/data/v9.2/aiplugingovernances
PATCH /api/data/v9.2/aiplugingovernances(<guid>)
DELETE /api/data/v9.2/aiplugingovernances(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`aicopilot`, `aiplugin`, `aiplugingovernanceid`, `enable`, `externalkey`, `importsequencenumber`, `name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_aiplugingovernance_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_aiplugingovernance_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_aiplugingovernance_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_aiplugingovernance_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_aiplugingovernance` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_aiplugingovernance` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_aiplugingovernance` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_aiplugingovernance` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `aiplugingovernance_aicopilot` | [aicopilot](aicopilot.md) | `aicopilot` | `AICopilot` |
| `aiplugingovernance_aiplugin` | [aiplugin](aiplugin.md) | `aiplugin` | `AIPlugin` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `aiplugingovernance_SyncErrors` | [aiplugingovernance](aiplugingovernance.md) | `regardingobjectid` | `regardingobjectid_aiplugingovernance` |
| `aiplugingovernance_AsyncOperations` | [aiplugingovernance](aiplugingovernance.md) | `regardingobjectid` | `regardingobjectid_aiplugingovernance` |
| `aiplugingovernance_MailboxTrackingFolders` | [aiplugingovernance](aiplugingovernance.md) | `regardingobjectid` | `regardingobjectid_aiplugingovernance` |
| `aiplugingovernance_UserEntityInstanceDatas` | [aiplugingovernance](aiplugingovernance.md) | `objectid` | `objectid_aiplugingovernance` |
| `aiplugingovernance_ProcessSession` | [aiplugingovernance](aiplugingovernance.md) | `regardingobjectid` | `regardingobjectid_aiplugingovernance` |
| `aiplugingovernance_BulkDeleteFailures` | [aiplugingovernance](aiplugingovernance.md) | `regardingobjectid` | `regardingobjectid_aiplugingovernance` |
| `aiplugingovernance_PrincipalObjectAttributeAccesses` | [aiplugingovernance](aiplugingovernance.md) | `objectid` | `objectid_aiplugingovernance` |


## Source

Generated from [aiplugingovernance (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='aiplugingovernance')) on 2026-05-07.