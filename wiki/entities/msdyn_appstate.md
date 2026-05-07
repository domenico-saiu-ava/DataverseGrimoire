---
logical: "msdyn_appstate"
display: "App state"
entitySetName: "msdyn_appstates"
primaryId: "msdyn_appstateid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# App state

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_appstate` |
| Display name | App state |
| Display (plural) | App state |
| Schema name | `msdyn_appstate` |
| Entity set (Web API) | `msdyn_appstates` |
| Primary id attribute | `msdyn_appstateid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_appstates?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_appstates(<guid>)
POST /api/data/v9.2/msdyn_appstates
PATCH /api/data/v9.2/msdyn_appstates(<guid>)
DELETE /api/data/v9.2/msdyn_appstates(<guid>)
```

## Attributes

Writable: **11** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_appstateId`, `msdyn_contactcenterstate`, `msdyn_name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_appstate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_appstate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_appstate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_appstate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_appstate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_appstate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_appstate` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_appstate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_appstate_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_appstate_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_appstate_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_appstate_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_appstate_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_appstate_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_appstate_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_appstate_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_appstate.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_appstate.md) on 2026-05-06.