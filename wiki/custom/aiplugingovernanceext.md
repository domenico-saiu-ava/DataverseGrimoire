---
logical: "aiplugingovernanceext"
display: "AI Plugin Governance Extended"
entitySetName: "aiplugingovernancesext"
primaryId: "aiplugingovernanceextid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# AI Plugin Governance Extended

## Identity

| Property | Value |
| --- | --- |
| Logical name | `aiplugingovernanceext` |
| Display name | AI Plugin Governance Extended |
| Display (plural) | AI Plugin Governance Entries Extended |
| Schema name | `AIPluginGovernanceExt` |
| Entity set (Web API) | `aiplugingovernancesext` |
| Primary id attribute | `aiplugingovernanceextid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/aiplugingovernancesext?$select=name&$top=10
GET /api/data/v9.2/aiplugingovernancesext(<guid>)
POST /api/data/v9.2/aiplugingovernancesext
PATCH /api/data/v9.2/aiplugingovernancesext(<guid>)
DELETE /api/data/v9.2/aiplugingovernancesext(<guid>)
```

## Attributes

Writable: **15** · Read-only: **10**

### Writable

`aicopilot`, `aiplugingovernanceextid`, `enable`, `externalkey`, `importsequencenumber`, `name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `targetid`, `targetsubtype`, `targettype`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_aiplugingovernanceext_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_aiplugingovernanceext_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_aiplugingovernanceext_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_aiplugingovernanceext_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_aiplugingovernanceext` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_aiplugingovernanceext` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_aiplugingovernanceext` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_aiplugingovernanceext` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `aiplugingovernanceext_aicopilot` | [aicopilot](aicopilot.md) | `aicopilot` | `AICopilot` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `aiplugingovernanceext_SyncErrors` | [aiplugingovernanceext](aiplugingovernanceext.md) | `regardingobjectid` | `regardingobjectid_aiplugingovernanceext` |
| `aiplugingovernanceext_AsyncOperations` | [aiplugingovernanceext](aiplugingovernanceext.md) | `regardingobjectid` | `regardingobjectid_aiplugingovernanceext` |
| `aiplugingovernanceext_MailboxTrackingFolders` | [aiplugingovernanceext](aiplugingovernanceext.md) | `regardingobjectid` | `regardingobjectid_aiplugingovernanceext` |
| `aiplugingovernanceext_UserEntityInstanceDatas` | [aiplugingovernanceext](aiplugingovernanceext.md) | `objectid` | `objectid_aiplugingovernanceext` |
| `aiplugingovernanceext_ProcessSession` | [aiplugingovernanceext](aiplugingovernanceext.md) | `regardingobjectid` | `regardingobjectid_aiplugingovernanceext` |
| `aiplugingovernanceext_BulkDeleteFailures` | [aiplugingovernanceext](aiplugingovernanceext.md) | `regardingobjectid` | `regardingobjectid_aiplugingovernanceext` |
| `aiplugingovernanceext_PrincipalObjectAttributeAccesses` | [aiplugingovernanceext](aiplugingovernanceext.md) | `objectid` | `objectid_aiplugingovernanceext` |


## Source

Generated from [aiplugingovernanceext (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='aiplugingovernanceext')) on 2026-05-07.