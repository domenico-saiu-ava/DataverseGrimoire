---
logical: "aiplugingovernance"
display: "AI Plugin Governance"
entitySetName: "aiplugingovernances"
primaryId: "aiplugingovernanceid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
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

Writable: **14** · Read-only: **12**

### Writable

`AICopilot`, `AIPlugin`, `AIPluginGovernanceId`, `Enable`, `ExternalKey`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `aiplugingovernance_aicopilot` | [aicopilot](aicopilot.md) | `aicopilot` | `AICopilot` |
| `aiplugingovernance_aiplugin` | [aiplugin](aiplugin.md) | `aiplugin` | `AIPlugin` |
| `business_unit_aiplugingovernance` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_aiplugingovernance_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_aiplugingovernance_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_aiplugingovernance_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_aiplugingovernance_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_aiplugingovernance` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_aiplugingovernance` | [team](team.md) | `owningteam` | `owningteam` |
| `user_aiplugingovernance` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `aiplugingovernance_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aiplugingovernance_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aiplugingovernance_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aiplugingovernance_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `aiplugingovernance_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aiplugingovernance_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [aiplugingovernance.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/aiplugingovernance.md) on 2026-05-06.