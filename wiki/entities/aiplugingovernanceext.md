---
logical: "aiplugingovernanceext"
display: "AI Plugin Governance Extended"
entitySetName: "aiplugingovernancesext"
primaryId: "aiplugingovernanceextid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
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

Writable: **16** · Read-only: **12**

### Writable

`AICopilot`, `AIPluginGovernanceExtId`, `Enable`, `ExternalKey`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TargetId`, `TargetSubType`, `TargetType`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `aiplugingovernanceext_aicopilot` | [aicopilot](aicopilot.md) | `aicopilot` | `AICopilot` |
| `business_unit_aiplugingovernanceext` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_aiplugingovernanceext_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_aiplugingovernanceext_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_aiplugingovernanceext_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_aiplugingovernanceext_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_aiplugingovernanceext` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_aiplugingovernanceext` | [team](team.md) | `owningteam` | `owningteam` |
| `user_aiplugingovernanceext` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `aiplugingovernanceext_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aiplugingovernanceext_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aiplugingovernanceext_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aiplugingovernanceext_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `aiplugingovernanceext_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aiplugingovernanceext_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [aiplugingovernanceext.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/aiplugingovernanceext.md) on 2026-05-06.