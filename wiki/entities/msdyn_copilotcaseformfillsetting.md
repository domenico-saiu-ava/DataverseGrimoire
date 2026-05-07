---
logical: "msdyn_copilotcaseformfillsetting"
display: "Copilot assisted case form fill settings"
entitySetName: "msdyn_copilotcaseformfillsettings"
primaryId: "msdyn_copilotcaseformfillsettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Copilot assisted case form fill settings

Copilot assisted case form fill settings

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_copilotcaseformfillsetting` |
| Display name | Copilot assisted case form fill settings |
| Display (plural) | Copilot assisted case form fill settings |
| Schema name | `msdyn_copilotcaseformfillsetting` |
| Entity set (Web API) | `msdyn_copilotcaseformfillsettings` |
| Primary id attribute | `msdyn_copilotcaseformfillsettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_copilotcaseformfillsettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_copilotcaseformfillsettings(<guid>)
POST /api/data/v9.2/msdyn_copilotcaseformfillsettings
PATCH /api/data/v9.2/msdyn_copilotcaseformfillsettings(<guid>)
DELETE /api/data/v9.2/msdyn_copilotcaseformfillsettings(<guid>)
```

## Attributes

Writable: **12** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_caseresolutionconfiguration`, `msdyn_copilotcaseformfillsettingId`, `msdyn_name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_copilotcaseformfillsetting` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_copilotcaseformfillsetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_copilotcaseformfillsetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_copilotcaseformfillsetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_copilotcaseformfillsetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_copilotcaseformfillsetting` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_copilotcaseformfillsetting` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_copilotcaseformfillsetting` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_copilotcaseformfillsetting_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilotcaseformfillsetting_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilotcaseformfillsetting_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_copilotcaseformfillsetting_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_copilotcaseformfillsetting_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilotcaseformfillsetting_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_copilotcaseformfillsetting_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilotcaseformfillsetting_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_copilotcaseformfillsetting.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_copilotcaseformfillsetting.md) on 2026-05-06.