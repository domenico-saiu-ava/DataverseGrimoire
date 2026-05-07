---
logical: "msdyn_targetcustomerprofileprefillagenttrigger"
display: "TargetCustomerProfilePrefillAgentTrigger"
entitySetName: "msdyn_targetcustomerprofileprefillagenttriggers"
primaryId: "msdyn_targetcustomerprofileprefillagenttriggerid"
primaryName: "msdyn_input"
tableType: "Standard"
ownership: "UserOwned"
---

# TargetCustomerProfilePrefillAgentTrigger

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_targetcustomerprofileprefillagenttrigger` |
| Display name | TargetCustomerProfilePrefillAgentTrigger |
| Display (plural) | TargetCustomerProfilePrefillAgentTriggers |
| Schema name | `msdyn_targetcustomerprofileprefillagenttrigger` |
| Entity set (Web API) | `msdyn_targetcustomerprofileprefillagenttriggers` |
| Primary id attribute | `msdyn_targetcustomerprofileprefillagenttriggerid` |
| Primary name attribute | `msdyn_input` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_targetcustomerprofileprefillagenttriggers?$select=msdyn_input&$top=10
GET /api/data/v9.2/msdyn_targetcustomerprofileprefillagenttriggers(<guid>)
POST /api/data/v9.2/msdyn_targetcustomerprofileprefillagenttriggers
PATCH /api/data/v9.2/msdyn_targetcustomerprofileprefillagenttriggers(<guid>)
DELETE /api/data/v9.2/msdyn_targetcustomerprofileprefillagenttriggers(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_Input`, `msdyn_Input_v2`, `msdyn_Name`, `msdyn_RetryCount`, `msdyn_targetcustomerprofileprefillagenttriggerId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_targetcustomerprofileprefillagenttrigger` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_targetcustomerprofileprefillagenttrigger_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_targetcustomerprofileprefillagenttrigger_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_targetcustomerprofileprefillagenttrigger_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_targetcustomerprofileprefillagenttrigger_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_targetcustomerprofileprefillagenttrigger` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_targetcustomerprofileprefillagenttrigger` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_targetcustomerprofileprefillagenttrigger` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_targetcustomerprofileprefillagenttrigger_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_targetcustomerprofileprefillagenttrigger_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_targetcustomerprofileprefillagenttrigger_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_targetcustomerprofileprefillagenttrigger_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_targetcustomerprofileprefillagenttrigger_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_targetcustomerprofileprefillagenttrigger_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_targetcustomerprofileprefillagenttrigger.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_targetcustomerprofileprefillagenttrigger.md) on 2026-05-06.