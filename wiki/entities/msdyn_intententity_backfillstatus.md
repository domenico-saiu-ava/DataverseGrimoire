---
logical: "msdyn_intententity_backfillstatus"
display: "LOB Backfill Status"
entitySetName: "msdyn_intententity_backfillstatuses"
primaryId: "msdyn_intententity_backfillstatusid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# LOB Backfill Status

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_intententity_backfillstatus` |
| Display name | LOB Backfill Status |
| Display (plural) | Backfill Status of LOB and Entity |
| Schema name | `msdyn_intententity_backfillstatus` |
| Entity set (Web API) | `msdyn_intententity_backfillstatuses` |
| Primary id attribute | `msdyn_intententity_backfillstatusid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_intententity_backfillstatuses?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_intententity_backfillstatuses(<guid>)
POST /api/data/v9.2/msdyn_intententity_backfillstatuses
PATCH /api/data/v9.2/msdyn_intententity_backfillstatuses(<guid>)
DELETE /api/data/v9.2/msdyn_intententity_backfillstatuses(<guid>)
```

## Attributes

Writable: **14** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_intententity_backfillstatusId`, `msdyn_intentfamilyid`, `msdyn_jobstatus`, `msdyn_lastjob_completedon`, `msdyn_name`, `msdyn_target_entity_name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_intententity_backfillstatus` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_intententity_backfillstatus_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_intententity_backfillstatus_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_intententity_backfillstatus_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_intententity_backfillstatus_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_intententity_backfillstatus` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_intententity_backfillstatus` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_intententity_backfillstatus` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_intententity_backfillstatus_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intententity_backfillstatus_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intententity_backfillstatus_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_intententity_backfillstatus_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_intententity_backfillstatus_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intententity_backfillstatus_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_intententity_backfillstatus_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intententity_backfillstatus_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_intententity_backfillstatus.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_intententity_backfillstatus.md) on 2026-05-06.