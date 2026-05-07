---
logical: "aicopilot"
display: "AICopilot"
entitySetName: "aicopilots"
primaryId: "aicopilotid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# AICopilot

AI Copilot

## Identity

| Property | Value |
| --- | --- |
| Logical name | `aicopilot` |
| Display name | AICopilot |
| Display (plural) | AICopilots |
| Schema name | `AICopilot` |
| Entity set (Web API) | `aicopilots` |
| Primary id attribute | `aicopilotid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/aicopilots?$select=name&$top=10
GET /api/data/v9.2/aicopilots(<guid>)
POST /api/data/v9.2/aicopilots
PATCH /api/data/v9.2/aicopilots(<guid>)
DELETE /api/data/v9.2/aicopilots(<guid>)
```

## Attributes

Writable: **11** · Read-only: **14**

### Writable

`aicopilotid`, `description`, `displayname`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_aicopilot_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_aicopilot_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_aicopilot_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_aicopilot_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_aicopilot` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `aicopilot_SyncErrors` | [aicopilot](aicopilot.md) | `regardingobjectid` | `regardingobjectid_aicopilot` |
| `aicopilot_DuplicateMatchingRecord` | [aicopilot](aicopilot.md) | `duplicaterecordid` | `duplicaterecordid_aicopilot` |
| `aicopilot_DuplicateBaseRecord` | [aicopilot](aicopilot.md) | `baserecordid` | `baserecordid_aicopilot` |
| `aicopilot_AsyncOperations` | [aicopilot](aicopilot.md) | `regardingobjectid` | `regardingobjectid_aicopilot` |
| `aicopilot_MailboxTrackingFolders` | [aicopilot](aicopilot.md) | `regardingobjectid` | `regardingobjectid_aicopilot` |
| `aicopilot_UserEntityInstanceDatas` | [aicopilot](aicopilot.md) | `objectid` | `objectid_aicopilot` |
| `aicopilot_ProcessSession` | [aicopilot](aicopilot.md) | `regardingobjectid` | `regardingobjectid_aicopilot` |
| `aicopilot_BulkDeleteFailures` | [aicopilot](aicopilot.md) | `regardingobjectid` | `regardingobjectid_aicopilot` |
| `aicopilot_PrincipalObjectAttributeAccesses` | [aicopilot](aicopilot.md) | `objectid` | `objectid_aicopilot` |
| `aiplugingovernanceext_aicopilot` | [aicopilot](aicopilot.md) | `aicopilot` | `AICopilot` |
| `aiplugingovernance_aicopilot` | [aicopilot](aicopilot.md) | `aicopilot` | `AICopilot` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `AICoPilot_AIPlugin_AIPlugin` | [aiplugin](aiplugin.md) | _n/a_ | `AICopilot_AIPlugin_AIPlugin` |

## Source

Generated from [aicopilot (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='aicopilot')) on 2026-05-07.