---
logical: "msdyn_adminappstate"
display: "AdminAppState"
entitySetName: "msdyn_adminappstates"
primaryId: "msdyn_adminappstateid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# AdminAppState

State for each user in Admin App

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_adminappstate` |
| Display name | AdminAppState |
| Display (plural) | AdminAppStates |
| Schema name | `msdyn_adminappstate` |
| Entity set (Web API) | `msdyn_adminappstates` |
| Primary id attribute | `msdyn_adminappstateid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_adminappstates?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_adminappstates(<guid>)
POST /api/data/v9.2/msdyn_adminappstates
PATCH /api/data/v9.2/msdyn_adminappstates(<guid>)
DELETE /api/data/v9.2/msdyn_adminappstates(<guid>)
```

## Attributes

Writable: **11** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_adminappstateId`, `msdyn_frestate`, `msdyn_name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_adminappstate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_adminappstate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_adminappstate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_adminappstate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_adminappstate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_adminappstate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_adminappstate` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_adminappstate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_adminappstate_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_adminappstate_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_adminappstate_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_adminappstate_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_adminappstate_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_adminappstate_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_adminappstate.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_adminappstate.md) on 2026-05-06.