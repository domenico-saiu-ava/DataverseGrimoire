---
logical: "msdyn_qualificationagenttrigger"
display: "Qualification Agent Trigger"
entitySetName: "msdyn_qualificationagenttriggers"
primaryId: "msdyn_qualificationagenttriggerid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Qualification Agent Trigger

Qualification Agent Trigger Entity

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_qualificationagenttrigger` |
| Display name | Qualification Agent Trigger |
| Display (plural) | Qualification Agent Triggers |
| Schema name | `msdyn_qualificationagenttrigger` |
| Entity set (Web API) | `msdyn_qualificationagenttriggers` |
| Primary id attribute | `msdyn_qualificationagenttriggerid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_qualificationagenttriggers?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_qualificationagenttriggers(<guid>)
POST /api/data/v9.2/msdyn_qualificationagenttriggers
PATCH /api/data/v9.2/msdyn_qualificationagenttriggers(<guid>)
DELETE /api/data/v9.2/msdyn_qualificationagenttriggers(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_Input`, `msdyn_leadid`, `msdyn_name`, `msdyn_qualificationagenttriggerId`, `msdyn_retrycount`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_qualificationagenttrigger` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_qualificationagenttrigger_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_qualificationagenttrigger_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_qualificationagenttrigger_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_qualificationagenttrigger_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_qualificationagenttrigger` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_qualificationagenttrigger` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_qualificationagenttrigger` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_qualificationagenttrigger_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_qualificationagenttrigger_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_qualificationagenttrigger_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_qualificationagenttrigger_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_qualificationagenttrigger_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_qualificationagenttrigger_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_qualificationagenttrigger_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_qualificationagenttrigger_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_qualificationagenttrigger.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_qualificationagenttrigger.md) on 2026-05-06.