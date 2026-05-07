---
logical: "msdyn_salesagentconfigurationv2"
display: "SalesAgentConfigurationV2"
entitySetName: "msdyn_salesagentconfigurationsv2"
primaryId: "msdyn_salesagentconfigurationv2id"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# SalesAgentConfigurationV2

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salesagentconfigurationv2` |
| Display name | SalesAgentConfigurationV2 |
| Display (plural) | salesagentconfigurationsv2 |
| Schema name | `msdyn_salesagentconfigurationv2` |
| Entity set (Web API) | `msdyn_salesagentconfigurationsv2` |
| Primary id attribute | `msdyn_salesagentconfigurationv2id` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salesagentconfigurationsv2?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_salesagentconfigurationsv2(<guid>)
POST /api/data/v9.2/msdyn_salesagentconfigurationsv2
PATCH /api/data/v9.2/msdyn_salesagentconfigurationsv2(<guid>)
DELETE /api/data/v9.2/msdyn_salesagentconfigurationsv2(<guid>)
```

## Attributes

Writable: **12** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_MicroAgentConfiguration`, `msdyn_MicroAgentType`, `msdyn_name`, `msdyn_salesagentconfigurationv2Id`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_salesagentconfigurationv2` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_salesagentconfigurationv2_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salesagentconfigurationv2_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salesagentconfigurationv2_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salesagentconfigurationv2_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_salesagentconfigurationv2` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_salesagentconfigurationv2` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_salesagentconfigurationv2` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salesagentconfigurationv2_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesagentconfigurationv2_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesagentconfigurationv2_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_salesagentconfigurationv2_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_salesagentconfigurationv2_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesagentconfigurationv2_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_salesagentconfigurationv2_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesagentconfigurationv2_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_salesagentconfigurationv2.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_salesagentconfigurationv2.md) on 2026-05-06.