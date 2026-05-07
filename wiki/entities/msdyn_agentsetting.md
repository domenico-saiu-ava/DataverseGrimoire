---
logical: "msdyn_agentsetting"
display: "msdyn_agentsetting"
entitySetName: "msdyn_agentsettings"
primaryId: "msdyn_agentsettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# msdyn_agentsetting

This table contains settings for the agent configuration.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_agentsetting` |
| Display name | msdyn_agentsetting |
| Display (plural) | msdyn_agentsettings |
| Schema name | `msdyn_agentsetting` |
| Entity set (Web API) | `msdyn_agentsettings` |
| Primary id attribute | `msdyn_agentsettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_agentsettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_agentsettings(<guid>)
POST /api/data/v9.2/msdyn_agentsettings
PATCH /api/data/v9.2/msdyn_agentsettings(<guid>)
DELETE /api/data/v9.2/msdyn_agentsettings(<guid>)
```

## Attributes

Writable: **15** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_agentsettingId`, `msdyn_iscopilotstudioknowledgeenabled`, `msdyn_isd365knowledgesourceenabled`, `msdyn_kbfilter`, `msdyn_name`, `msdyn_scenario`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_agentsetting` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_agentsetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_agentsetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_agentsetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_agentsetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_agentsetting` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_agentsetting` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_agentsetting` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_agentsetting_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentsetting_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentsetting_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_agentsetting_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_agentsetting_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentsetting_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_agentsetting_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentsetting_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_agentsetting.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_agentsetting.md) on 2026-05-06.