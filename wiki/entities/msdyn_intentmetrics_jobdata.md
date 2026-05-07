---
logical: "msdyn_intentmetrics_jobdata"
display: "msdyn_intentmetrics_jobdata"
entitySetName: "msdyn_intentmetrics_jobdatas"
primaryId: "msdyn_intentmetrics_jobdataid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# msdyn_intentmetrics_jobdata

Table used in Intent Metrics Update Job to temporary store intent metrics data for processing

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_intentmetrics_jobdata` |
| Display name | msdyn_intentmetrics_jobdata |
| Display (plural) | msdyn_intentmetrics_jobdatas |
| Schema name | `msdyn_intentmetrics_jobdata` |
| Entity set (Web API) | `msdyn_intentmetrics_jobdatas` |
| Primary id attribute | `msdyn_intentmetrics_jobdataid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_intentmetrics_jobdatas?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_intentmetrics_jobdatas(<guid>)
POST /api/data/v9.2/msdyn_intentmetrics_jobdatas
PATCH /api/data/v9.2/msdyn_intentmetrics_jobdatas(<guid>)
DELETE /api/data/v9.2/msdyn_intentmetrics_jobdatas(<guid>)
```

## Attributes

Writable: **14** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_intentdata`, `msdyn_intentmetrics_jobdataId`, `msdyn_name`, `msdyn_shouldupdateintents`, `msdyn_trackingdate`, `msdyn_trackingid`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_intentmetrics_jobdata` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_intentmetrics_jobdata_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_intentmetrics_jobdata_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_intentmetrics_jobdata_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_intentmetrics_jobdata_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_intentmetrics_jobdata` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_intentmetrics_jobdata` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_intentmetrics_jobdata` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_intentmetrics_jobdata_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentmetrics_jobdata_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentmetrics_jobdata_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_intentmetrics_jobdata_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_intentmetrics_jobdata_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentmetrics_jobdata_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_intentmetrics_jobdata_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentmetrics_jobdata_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_intentmetrics_jobdata.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_intentmetrics_jobdata.md) on 2026-05-06.