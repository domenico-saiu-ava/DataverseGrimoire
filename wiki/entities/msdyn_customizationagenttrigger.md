---
logical: "msdyn_customizationagenttrigger"
display: "Customization Agent Trigger"
entitySetName: "msdyn_customizationagenttriggers"
primaryId: "msdyn_customizationagenttriggerid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Customization Agent Trigger

Customization Agent Trigger Entity.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_customizationagenttrigger` |
| Display name | Customization Agent Trigger |
| Display (plural) | Customization Agent Triggers |
| Schema name | `msdyn_customizationagenttrigger` |
| Entity set (Web API) | `msdyn_customizationagenttriggers` |
| Primary id attribute | `msdyn_customizationagenttriggerid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_customizationagenttriggers?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_customizationagenttriggers(<guid>)
POST /api/data/v9.2/msdyn_customizationagenttriggers
PATCH /api/data/v9.2/msdyn_customizationagenttriggers(<guid>)
DELETE /api/data/v9.2/msdyn_customizationagenttriggers(<guid>)
```

## Attributes

Writable: **14** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_companyidentifier`, `msdyn_customaccountinsightsconfigid`, `msdyn_customizationagenttriggerId`, `msdyn_Input`, `msdyn_name`, `msdyn_retrycount`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_customizationagenttrigger` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_customizationagenttrigger_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_customizationagenttrigger_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_customizationagenttrigger_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_customizationagenttrigger_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_customizationagenttrigger` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_customizationagenttrigger` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_customizationagenttrigger` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_customizationagenttrigger_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customizationagenttrigger_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customizationagenttrigger_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_customizationagenttrigger_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_customizationagenttrigger_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customizationagenttrigger_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_customizationagenttrigger_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customizationagenttrigger_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_customizationagenttrigger.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_customizationagenttrigger.md) on 2026-05-06.