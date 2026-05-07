---
logical: "msdyn_agentcopilotterm"
display: "Agent Copilot Term"
entitySetName: "msdyn_agentcopilotterms"
primaryId: "msdyn_agentcopilottermid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Agent Copilot Term

Agent Copilot Term for synonyms and glossaries

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_agentcopilotterm` |
| Display name | Agent Copilot Term |
| Display (plural) | Agent Copilot Terms |
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

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_AgentCopilotTermId`, `msdyn_CopilotTermType`, `msdyn_Description`, `msdyn_Name`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_agentcopilotterm_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_agentcopilotterm_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_agentcopilotterm_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_agentcopilotterm_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_agentcopilotterm` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_agentcopilotterm_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_agentcopilotterm_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentcopilotterm_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentcopilotterm_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_agentcopilotterm_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_agentcopilotterm_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentcopilotterm_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_agentcopilotterm_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentcopilotterm_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_agentcopilotterm_knowledgebaserecord` | [msdyn_agentcopilottermid](msdyn_agentcopilottermid.md) | _n/a_ | _n/a_ |
| `msdyn_msdyn_agentcopilotterm_knowledgearticle` | [msdyn_agentcopilottermid](msdyn_agentcopilottermid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_agentcopilotterm.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_agentcopilotterm.md) on 2026-05-06.