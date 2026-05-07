---
logical: "msdyn_pmbusinessruleautomationconfig"
display: "PM Business Rule Automation Config"
entitySetName: "msdyn_pmbusinessruleautomationconfigs"
primaryId: "msdyn_pmbusinessruleautomationconfigid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# PM Business Rule Automation Config

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_pmbusinessruleautomationconfig` |
| Display name | PM Business Rule Automation Config |
| Display (plural) | PM Business Rule Automation Configs |
| Schema name | `msdyn_pmbusinessruleautomationconfig` |
| Entity set (Web API) | `msdyn_pmbusinessruleautomationconfigs` |
| Primary id attribute | `msdyn_pmbusinessruleautomationconfigid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_pmbusinessruleautomationconfigs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_pmbusinessruleautomationconfigs(<guid>)
POST /api/data/v9.2/msdyn_pmbusinessruleautomationconfigs
PATCH /api/data/v9.2/msdyn_pmbusinessruleautomationconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_pmbusinessruleautomationconfigs(<guid>)
```

## Attributes

Writable: **18** · Read-only: **18**

### Writable

`CustomApiId`, `ImportSequenceNumber`, `IsCustomizable`, `msdyn_BusinessRuleId`, `msdyn_IsEnabled`, `msdyn_name`, `msdyn_pmbusinessruleautomationconfigId`, `msdyn_PmInferredTaskId`, `msdyn_SelectedCustomAttributes`, `msdyn_shouldincludeallemitsinnextrun`, `msdyn_UniqueName`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_pmbusinessruleautomationconfig` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_pmbusinessruleautomationconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_pmbusinessruleautomationconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_pmbusinessruleautomationconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_pmbusinessruleautomationconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_customapi_msdyn_pmbusinessruleautomationconfig_CustomApiId` | [customapi](customapi.md) | `customapiid` | `CustomApiId` |
| `msdyn_msdyn_pminferredtask_msdyn_pmbusinessruleautomationconfig_PMInferredTaskId` | [msdyn_pminferredtask](msdyn_pminferredtask.md) | `msdyn_pminferredtaskid` | `msdyn_PMInferredTaskId` |
| `owner_msdyn_pmbusinessruleautomationconfig` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_pmbusinessruleautomationconfig` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_pmbusinessruleautomationconfig` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_pmbusinessruleautomationconfig_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmbusinessruleautomationconfig_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmbusinessruleautomationconfig_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_pmbusinessruleautomationconfig_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_pmbusinessruleautomationconfig_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmbusinessruleautomationconfig_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_pmbusinessruleautomationconfig_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmbusinessruleautomationconfig_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_pmbusinessruleautomationconfig.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_pmbusinessruleautomationconfig.md) on 2026-05-06.