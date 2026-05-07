---
logical: "msdyn_dmssyncstatus"
display: "DMS Sync Status"
entitySetName: "msdyn_dmssyncstatuses"
primaryId: "msdyn_dmssyncstatusid"
primaryName: "msdyn_statusuniquename"
tableType: "Standard"
ownership: "UserOwned"
---

# DMS Sync Status

An entity to save DMS sync statuses.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dmssyncstatus` |
| Display name | DMS Sync Status |
| Display (plural) | DMS Sync Status |
| Schema name | `msdyn_dmssyncstatus` |
| Entity set (Web API) | `msdyn_dmssyncstatuses` |
| Primary id attribute | `msdyn_dmssyncstatusid` |
| Primary name attribute | `msdyn_statusuniquename` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dmssyncstatuses?$select=msdyn_statusuniquename&$top=10
GET /api/data/v9.2/msdyn_dmssyncstatuses(<guid>)
POST /api/data/v9.2/msdyn_dmssyncstatuses
PATCH /api/data/v9.2/msdyn_dmssyncstatuses(<guid>)
DELETE /api/data/v9.2/msdyn_dmssyncstatuses(<guid>)
```

## Attributes

Writable: **16** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_dmssyncstatusId`, `msdyn_EndTime`, `msdyn_ErrorDetails`, `msdyn_lookupfield_dmssyncrequest`, `msdyn_StartTime`, `msdyn_StatusUniqueName`, `msdyn_SyncDetails`, `msdyn_SyncStatus`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_dmssyncstatus` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_dmssyncstatus_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dmssyncstatus_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dmssyncstatus_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dmssyncstatus_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_lookupfield_dmssyncrequest` | [msdyn_dmssyncrequest](msdyn_dmssyncrequest.md) | `msdyn_lookupfield_dmssyncrequest` | `msdyn_lookupfield_dmssyncrequest` |
| `owner_msdyn_dmssyncstatus` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_dmssyncstatus` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_dmssyncstatus` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dmssyncstatus_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dmssyncstatus_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dmssyncstatus_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dmssyncstatus_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_dmssyncstatus_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dmssyncstatus_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_dmssyncstatus.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_dmssyncstatus.md) on 2026-05-06.