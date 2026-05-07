---
logical: "msdyn_salesagentexecutionconfig"
display: "SalesAgentExecutionConfig"
entitySetName: "msdyn_salesagentexecutionconfigs"
primaryId: "msdyn_salesagentexecutionconfigid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# SalesAgentExecutionConfig

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salesagentexecutionconfig` |
| Display name | SalesAgentExecutionConfig |
| Display (plural) | SalesAgentExecutionConfigs |
| Schema name | `msdyn_salesagentexecutionconfig` |
| Entity set (Web API) | `msdyn_salesagentexecutionconfigs` |
| Primary id attribute | `msdyn_salesagentexecutionconfigid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salesagentexecutionconfigs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_salesagentexecutionconfigs(<guid>)
POST /api/data/v9.2/msdyn_salesagentexecutionconfigs
PATCH /api/data/v9.2/msdyn_salesagentexecutionconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_salesagentexecutionconfigs(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_config_key`, `msdyn_config_value`, `msdyn_name`, `msdyn_salesagentexecutionconfigId`, `msdyn_salesagentprofileid`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_salesagentexecutionconfig` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_salesagentexecutionconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salesagentexecutionconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salesagentexecutionconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salesagentexecutionconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_salesagentexecutionconfig_msdyn_salesagentprofileid_msdyn_salesagentprofile` | [msdyn_salesagentprofile](msdyn_salesagentprofile.md) | `msdyn_salesagentprofileid` | `msdyn_salesagentprofileid` |
| `owner_msdyn_salesagentexecutionconfig` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_salesagentexecutionconfig` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_salesagentexecutionconfig` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salesagentexecutionconfig_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesagentexecutionconfig_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesagentexecutionconfig_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_salesagentexecutionconfig_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_salesagentexecutionconfig_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesagentexecutionconfig_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_salesagentexecutionconfig_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesagentexecutionconfig_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_salesagentexecutionconfig.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_salesagentexecutionconfig.md) on 2026-05-06.