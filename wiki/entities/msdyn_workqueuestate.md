---
logical: "msdyn_workqueuestate"
display: "Work Queue Record State"
entitySetName: "msdyn_workqueuestates"
primaryId: "msdyn_workqueuestateid"
primaryName: "msdyn_primaryname"
tableType: "Standard"
ownership: "UserOwned"
---

# Work Queue Record State

Entity created to store WorkQueue Records state

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_workqueuestate` |
| Display name | Work Queue Record State |
| Display (plural) | workqueuestate |
| Schema name | `msdyn_workqueuestate` |
| Entity set (Web API) | `msdyn_workqueuestates` |
| Primary id attribute | `msdyn_workqueuestateid` |
| Primary name attribute | `msdyn_primaryname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_workqueuestates?$select=msdyn_primaryname&$top=10
GET /api/data/v9.2/msdyn_workqueuestates(<guid>)
POST /api/data/v9.2/msdyn_workqueuestates
PATCH /api/data/v9.2/msdyn_workqueuestates(<guid>)
DELETE /api/data/v9.2/msdyn_workqueuestates(<guid>)
```

## Attributes

Writable: **14** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_isread`, `msdyn_nextactionid`, `msdyn_nextactionsource`, `msdyn_primaryname`, `msdyn_workqueuestateId`, `msdyn_wqstateuniquekey`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_workqueuestate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_workqueuestate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_workqueuestate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_workqueuestate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_workqueuestate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_workqueuestate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_workqueuestate` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_workqueuestate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_workqueuestate_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_workqueuestate_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_workqueuestate_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_workqueuestate_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_workqueuestate_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_workqueuestate_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_workqueuestate_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_workqueuestate_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_workqueuestate.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_workqueuestate.md) on 2026-05-06.