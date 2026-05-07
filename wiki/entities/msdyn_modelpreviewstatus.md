---
logical: "msdyn_modelpreviewstatus"
display: "ModelPreviewStatus"
entitySetName: "msdyn_modelpreviewstatuses"
primaryId: "msdyn_modelpreviewstatusid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# ModelPreviewStatus

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_modelpreviewstatus` |
| Display name | ModelPreviewStatus |
| Display (plural) | ModelPreviewStatuses |
| Schema name | `msdyn_ModelPreviewStatus` |
| Entity set (Web API) | `msdyn_modelpreviewstatuses` |
| Primary id attribute | `msdyn_modelpreviewstatusid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_modelpreviewstatuses?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_modelpreviewstatuses(<guid>)
POST /api/data/v9.2/msdyn_modelpreviewstatuses
PATCH /api/data/v9.2/msdyn_modelpreviewstatuses(<guid>)
DELETE /api/data/v9.2/msdyn_modelpreviewstatuses(<guid>)
```

## Attributes

Writable: **12** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_LeadPredictionModelEnabled`, `msdyn_ModelPreviewStatusId`, `msdyn_Name`, `msdyn_OpportunityPredictionModelEnabled`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_modelpreviewstatus` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_modelpreviewstatus_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_modelpreviewstatus_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_modelpreviewstatus_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_modelpreviewstatus_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_modelpreviewstatus` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_modelpreviewstatus` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_modelpreviewstatus` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_modelpreviewstatus_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_modelpreviewstatus_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_modelpreviewstatus_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_modelpreviewstatus_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_modelpreviewstatus_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_modelpreviewstatus_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_modelpreviewstatus_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_modelpreviewstatus_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_modelpreviewstatus.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_modelpreviewstatus.md) on 2026-05-06.