---
logical: "aicopilot"
display: "AICopilot"
entitySetName: "aicopilots"
primaryId: "aicopilotid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
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

`AICopilotId`, `Description`, `DisplayName`, `ImportSequenceNumber`, `IsCustomizable`, `Name`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_aicopilot_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_aicopilot_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_aicopilot_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_aicopilot_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_aicopilot` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `aicopilot_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aicopilot_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aicopilot_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `aicopilot_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `aicopilot_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aicopilot_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `aicopilot_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aicopilot_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aiplugingovernance_aicopilot` | _n/a_ | `aicopilot` | _n/a_ |
| `aiplugingovernanceext_aicopilot` | _n/a_ | `aicopilot` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `AICoPilot_AIPlugin_AIPlugin` | [aicopilotid](aicopilotid.md) | _n/a_ | _n/a_ |

## Source

Generated from [aicopilot.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/aicopilot.md) on 2026-05-06.