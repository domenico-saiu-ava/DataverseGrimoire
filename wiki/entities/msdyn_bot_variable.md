---
logical: "msdyn_bot_variable"
display: "Bot Variable"
entitySetName: "msdyn_bot_variables"
primaryId: "msdyn_bot_variableid"
primaryName: "msdyn_label"
tableType: "Standard"
ownership: "UserOwned"
---

# Bot Variable

This is used to store mcs bot variables.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_bot_variable` |
| Display name | Bot Variable |
| Display (plural) | Bot Variables |
| Schema name | `msdyn_bot_variable` |
| Entity set (Web API) | `msdyn_bot_variables` |
| Primary id attribute | `msdyn_bot_variableid` |
| Primary name attribute | `msdyn_label` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_bot_variables?$select=msdyn_label&$top=10
GET /api/data/v9.2/msdyn_bot_variables(<guid>)
POST /api/data/v9.2/msdyn_bot_variables
PATCH /api/data/v9.2/msdyn_bot_variables(<guid>)
DELETE /api/data/v9.2/msdyn_bot_variables(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_bot_variableId`, `msdyn_description`, `msdyn_label`, `msdyn_name`, `msdyn_variable`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_bot_variable` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_bot_variable_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_bot_variable_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_bot_variable_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_bot_variable_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_bot_variable` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_bot_variable` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_bot_variable` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_bot_variable_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_bot_variable_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_bot_variable_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_bot_variable_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_bot_variable_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_bot_variable_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_bot_variable_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_bot_variable_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_bot_variable.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_bot_variable.md) on 2026-05-06.