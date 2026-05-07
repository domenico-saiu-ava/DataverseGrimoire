---
logical: "msdyn_entitylinkchatconfiguration"
display: "Entity link chat configuration"
entitySetName: "msdyn_entitylinkchatconfigurations"
primaryId: "msdyn_entitylinkchatconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Entity link chat configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_entitylinkchatconfiguration` |
| Display name | Entity link chat configuration |
| Display (plural) | Entity link chat configurations |
| Schema name | `msdyn_entitylinkchatconfiguration` |
| Entity set (Web API) | `msdyn_entitylinkchatconfigurations` |
| Primary id attribute | `msdyn_entitylinkchatconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_entitylinkchatconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_entitylinkchatconfigurations(<guid>)
POST /api/data/v9.2/msdyn_entitylinkchatconfigurations
PATCH /api/data/v9.2/msdyn_entitylinkchatconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_entitylinkchatconfigurations(<guid>)
```

## Attributes

Writable: **24** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_ContextViewId`, `msdyn_EnableAiIntroductionMessage`, `msdyn_EnableAiSuggestion`, `msdyn_EnableAutoNameChats`, `msdyn_EnableKickoffMessage`, `msdyn_EnableLogicBasedSuggestion`, `msdyn_entitylinkchatconfigurationId`, `msdyn_EntityType`, `msdyn_filteringAttributes`, `msdyn_isEnabledForBot`, `msdyn_Name`, `msdyn_RecentChatLinkerCanUnlink`, `msdyn_RecordOwnerCanUnlink`, `msdyn_UniqueName`, `msdyn_UserCanJoinChat`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_entitylinkchatconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_entitylinkchatconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_entitylinkchatconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_entitylinkchatconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_entitylinkchatconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_entity_msdyn_entitylinkchatconfiguration` | [entity](entity.md) | `msdyn_entitytype` | `msdyn_entitytype` |
| `owner_msdyn_entitylinkchatconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_entitylinkchatconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_entitylinkchatconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_entitylinkchatconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_entitylinkchatconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_entitylinkchatconfiguration_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_entitylinkchatconfiguration_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_entitylinkchatconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_entitylinkchatconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_entitylinkchatconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_entitylinkchatconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_entitylinkchatconfiguration.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_entitylinkchatconfiguration.md) on 2026-05-06.