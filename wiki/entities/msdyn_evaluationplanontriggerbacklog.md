---
logical: "msdyn_evaluationplanontriggerbacklog"
display: "Evaluation Plan Ontrigger Backlog"
entitySetName: "msdyn_evaluationplanontriggerbacklogs"
primaryId: "msdyn_evaluationplanontriggerbacklogid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Evaluation Plan Ontrigger Backlog

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_evaluationplanontriggerbacklog` |
| Display name | Evaluation Plan Ontrigger Backlog |
| Display (plural) | Evaluation Plan Ontrigger Backlogs |
| Schema name | `msdyn_evaluationplanontriggerbacklog` |
| Entity set (Web API) | `msdyn_evaluationplanontriggerbacklogs` |
| Primary id attribute | `msdyn_evaluationplanontriggerbacklogid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_evaluationplanontriggerbacklogs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_evaluationplanontriggerbacklogs(<guid>)
POST /api/data/v9.2/msdyn_evaluationplanontriggerbacklogs
PATCH /api/data/v9.2/msdyn_evaluationplanontriggerbacklogs(<guid>)
DELETE /api/data/v9.2/msdyn_evaluationplanontriggerbacklogs(<guid>)
```

## Attributes

Writable: **14** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_evaluationIds`, `msdyn_evaluationplanontriggerbacklogId`, `msdyn_Name`, `msdyn_ObjectId`, `msdyn_ObjectIdType`, `msdyn_Status`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_evaluationplanontriggerbacklog` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_evaluationplanontriggerbacklog_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_evaluationplanontriggerbacklog_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_evaluationplanontriggerbacklog_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_evaluationplanontriggerbacklog_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_evaluationplanontriggerbacklog_ObjectId_msdyn_ocliveworkitem` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_objectid` | `msdyn_ObjectId` |
| `msdyn_evaluationplanontriggerbacklog_ObjectId_systemuser` | [systemuser](systemuser.md) | `msdyn_objectid` | `msdyn_ObjectId` |
| `owner_msdyn_evaluationplanontriggerbacklog` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_evaluationplanontriggerbacklog` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_evaluationplanontriggerbacklog` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_evaluationplanontriggerbacklog_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationplanontriggerbacklog_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationplanontriggerbacklog_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationplanontriggerbacklog_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_evaluationplanontriggerbacklog_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationplanontriggerbacklog_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_evaluationplanontriggerbacklog.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_evaluationplanontriggerbacklog.md) on 2026-05-06.