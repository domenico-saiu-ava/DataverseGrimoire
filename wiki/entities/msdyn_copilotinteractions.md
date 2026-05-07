---
logical: "msdyn_copilotinteractions"
display: "Copilot Interactions"
entitySetName: "msdyn_copilotinteractionses"
primaryId: "msdyn_copilotinteractionsid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Copilot Interactions

Data table of previous copilot interactions.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_copilotinteractions` |
| Display name | Copilot Interactions |
| Display (plural) | Copilot Interactions |
| Schema name | `msdyn_CopilotInteractions` |
| Entity set (Web API) | `msdyn_copilotinteractionses` |
| Primary id attribute | `msdyn_copilotinteractionsid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_copilotinteractionses?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_copilotinteractionses(<guid>)
POST /api/data/v9.2/msdyn_copilotinteractionses
PATCH /api/data/v9.2/msdyn_copilotinteractionses(<guid>)
DELETE /api/data/v9.2/msdyn_copilotinteractionses(<guid>)
```

## Attributes

Writable: **16** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_Context`, `msdyn_CopilotInteractionsId`, `msdyn_CopilotName`, `msdyn_CustomerId`, `msdyn_EngineVersion`, `msdyn_Name`, `msdyn_Outcome`, `msdyn_Result`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_copilotinteractions` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_copilotinteractions_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_copilotinteractions_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_copilotinteractions_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_copilotinteractions_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_copilotinteractions` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_copilotinteractions` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_copilotinteractions` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_copilotinteractions_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilotinteractions_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilotinteractions_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_copilotinteractions_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_copilotinteractions_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilotinteractions_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_copilotinteractions_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilotinteractions_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_copilotinteractions.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_copilotinteractions.md) on 2026-05-06.