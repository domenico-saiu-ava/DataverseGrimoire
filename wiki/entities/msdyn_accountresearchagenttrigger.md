---
logical: "msdyn_accountresearchagenttrigger"
display: "Account Research Agent Trigger"
entitySetName: "msdyn_accountresearchagenttriggers"
primaryId: "msdyn_accountresearchagenttriggerid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Account Research Agent Trigger

Account Research Agent Trigger Entity.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_accountresearchagenttrigger` |
| Display name | Account Research Agent Trigger |
| Display (plural) | Account Research Agent Triggers |
| Schema name | `msdyn_accountresearchagenttrigger` |
| Entity set (Web API) | `msdyn_accountresearchagenttriggers` |
| Primary id attribute | `msdyn_accountresearchagenttriggerid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_accountresearchagenttriggers?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_accountresearchagenttriggers(<guid>)
POST /api/data/v9.2/msdyn_accountresearchagenttriggers
PATCH /api/data/v9.2/msdyn_accountresearchagenttriggers(<guid>)
DELETE /api/data/v9.2/msdyn_accountresearchagenttriggers(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_accountresearchagenttriggerId`, `msdyn_companyidentifier`, `msdyn_Input`, `msdyn_name`, `msdyn_retrycount`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_accountresearchagenttrigger` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_accountresearchagenttrigger_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_accountresearchagenttrigger_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_accountresearchagenttrigger_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_accountresearchagenttrigger_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_accountresearchagenttrigger` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_accountresearchagenttrigger` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_accountresearchagenttrigger` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_accountresearchagenttrigger_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_accountresearchagenttrigger_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_accountresearchagenttrigger_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_accountresearchagenttrigger_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_accountresearchagenttrigger_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_accountresearchagenttrigger_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_accountresearchagenttrigger_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_accountresearchagenttrigger_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_accountresearchagenttrigger.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_accountresearchagenttrigger.md) on 2026-05-06.