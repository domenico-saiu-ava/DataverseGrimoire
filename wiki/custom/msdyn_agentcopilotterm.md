---
logical: "msdyn_agentcopilotterm"
display: "Termine Agent Copilot"
entitySetName: "msdyn_agentcopilotterms"
primaryId: "msdyn_agentcopilottermid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Termine Agent Copilot

Termine Agent Copilot per sinonimi e glossari

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_agentcopilotterm` |
| Display name | Termine Agent Copilot |
| Display (plural) | Termini Agent Copilot |
| Schema name | `msdyn_AgentCopilotTerm` |
| Entity set (Web API) | `msdyn_agentcopilotterms` |
| Primary id attribute | `msdyn_agentcopilottermid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_agentcopilotterms?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_agentcopilotterms(<guid>)
POST /api/data/v9.2/msdyn_agentcopilotterms
PATCH /api/data/v9.2/msdyn_agentcopilotterms(<guid>)
DELETE /api/data/v9.2/msdyn_agentcopilotterms(<guid>)
```

## Attributes

Writable: **11** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_agentcopilottermid`, `msdyn_copilottermtype`, `msdyn_description`, `msdyn_name`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_agentcopilotterm_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_agentcopilotterm_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_agentcopilotterm_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_agentcopilotterm_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_agentcopilotterm` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_agentcopilotterm_SyncErrors` | [msdyn_agentcopilotterm](msdyn_agentcopilotterm.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentcopilotterm` |
| `msdyn_agentcopilotterm_DuplicateMatchingRecord` | [msdyn_agentcopilotterm](msdyn_agentcopilotterm.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_agentcopilotterm` |
| `msdyn_agentcopilotterm_DuplicateBaseRecord` | [msdyn_agentcopilotterm](msdyn_agentcopilotterm.md) | `baserecordid` | `baserecordid_msdyn_agentcopilotterm` |
| `msdyn_agentcopilotterm_AsyncOperations` | [msdyn_agentcopilotterm](msdyn_agentcopilotterm.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentcopilotterm` |
| `msdyn_agentcopilotterm_MailboxTrackingFolders` | [msdyn_agentcopilotterm](msdyn_agentcopilotterm.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentcopilotterm` |
| `msdyn_agentcopilotterm_UserEntityInstanceDatas` | [msdyn_agentcopilotterm](msdyn_agentcopilotterm.md) | `objectid` | `objectid_msdyn_agentcopilotterm` |
| `msdyn_agentcopilotterm_ProcessSession` | [msdyn_agentcopilotterm](msdyn_agentcopilotterm.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentcopilotterm` |
| `msdyn_agentcopilotterm_BulkDeleteFailures` | [msdyn_agentcopilotterm](msdyn_agentcopilotterm.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentcopilotterm` |
| `msdyn_agentcopilotterm_PrincipalObjectAttributeAccesses` | [msdyn_agentcopilotterm](msdyn_agentcopilotterm.md) | `objectid` | `objectid_msdyn_agentcopilotterm` |
| `msdyn_agentcopilotterm_Annotations` | [msdyn_agentcopilotterm](msdyn_agentcopilotterm.md) | `objectid` | `objectid_msdyn_agentcopilotterm` |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_agentcopilotterm_knowledgebaserecord` | [knowledgebaserecord](knowledgebaserecord.md) | _n/a_ | _n/a_ |
| `msdyn_msdyn_agentcopilotterm_knowledgearticle` | [knowledgearticle](knowledgearticle.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_agentcopilotterm (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_agentcopilotterm')) on 2026-05-07.