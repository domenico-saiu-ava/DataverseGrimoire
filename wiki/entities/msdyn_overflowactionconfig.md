---
logical: "msdyn_overflowactionconfig"
display: "Overflow Action Config"
entitySetName: "msdyn_overflowactionconfigs"
primaryId: "msdyn_overflowactionconfigid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Overflow Action Config

Overflow action configurations.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_overflowactionconfig` |
| Display name | Overflow Action Config |
| Display (plural) | Overflow Action Configs |
| Schema name | `msdyn_overflowactionconfig` |
| Entity set (Web API) | `msdyn_overflowactionconfigs` |
| Primary id attribute | `msdyn_overflowactionconfigid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_overflowactionconfigs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_overflowactionconfigs(<guid>)
POST /api/data/v9.2/msdyn_overflowactionconfigs
PATCH /api/data/v9.2/msdyn_overflowactionconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_overflowactionconfigs(<guid>)
```

## Attributes

Writable: **18** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_botfailureactiontype`, `msdyn_directcallbackaction`, `msdyn_directcallbackdedupsetting`, `msdyn_directcallbackqueuesetting`, `msdyn_name`, `msdyn_overflowactionconfigId`, `msdyn_overflowactiondata`, `msdyn_overflowactiontype`, `msdyn_stoptranscriptionandrecordingaftercalltransfer`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_overflowactionconfig` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_overflowactionconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_overflowactionconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_overflowactionconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_overflowactionconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_overflowactionconfig` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_overflowactionconfig` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_overflowactionconfig` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_liveworkstream_BotFailureActionConfig_msdyn_overflowactionconfig` | _n/a_ | `msdyn_botfailureactionconfig` | _n/a_ |
| `msdyn_overflowactionconfig_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_overflowactionconfig_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_overflowactionconfig_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_overflowactionconfig_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_overflowactionconfig_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_overflowactionconfig_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_overflowactionconfig_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_overflowactionconfig_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_overflowactionconfig_QueueItems` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_overflowactionconfig_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_overflowactionconfig.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_overflowactionconfig.md) on 2026-05-06.