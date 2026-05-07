---
logical: "msdyn_historicalcaseharvestrun"
display: "msdyn_historicalcaseharvestrun"
entitySetName: "msdyn_historicalcaseharvestruns"
primaryId: "msdyn_historicalcaseharvestrunid"
primaryName: "msdyn_paginationmarker"
tableType: "Standard"
ownership: "UserOwned"
---

# msdyn_historicalcaseharvestrun

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_historicalcaseharvestrun` |
| Display name | msdyn_historicalcaseharvestrun |
| Display (plural) | msdyn_historicalcaseharvestruns |
| Schema name | `msdyn_historicalcaseharvestrun` |
| Entity set (Web API) | `msdyn_historicalcaseharvestruns` |
| Primary id attribute | `msdyn_historicalcaseharvestrunid` |
| Primary name attribute | `msdyn_paginationmarker` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_historicalcaseharvestruns?$select=msdyn_paginationmarker&$top=10
GET /api/data/v9.2/msdyn_historicalcaseharvestruns(<guid>)
POST /api/data/v9.2/msdyn_historicalcaseharvestruns
PATCH /api/data/v9.2/msdyn_historicalcaseharvestruns(<guid>)
DELETE /api/data/v9.2/msdyn_historicalcaseharvestruns(<guid>)
```

## Attributes

Writable: **21** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_additionaldetails`, `msdyn_caseidentificationcompletedon`, `msdyn_conditions`, `msdyn_fieldmapping`, `msdyn_harvestingdatatype`, `msdyn_harvestsourceentity`, `msdyn_historicalcaseharvestrunId`, `msdyn_pageIndex`, `msdyn_paginationmarker`, `msdyn_totalarticlescreated`, `msdyn_totalcasesdiscovered`, `msdyn_totalcasesprocessed`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `ProcessStartedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_historicalcaseharvestrun` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_historicalcaseharvestrun_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_historicalcaseharvestrun_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_historicalcaseharvestrun_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_historicalcaseharvestrun_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_historicalcaseharvestrun` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_historicalcaseharvestrun` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_historicalcaseharvestrun` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_historicalcaseharvestbatch_historicalcaseharvestrun` | _n/a_ | `msdyn_historicalcaseharvestrunid` | _n/a_ |
| `msdyn_historicalcaseharvestrun_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_historicalcaseharvestrun_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_historicalcaseharvestrun_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_historicalcaseharvestrun_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_historicalcaseharvestrun_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_historicalcaseharvestrun_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_historicalcaseharvestrun.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_historicalcaseharvestrun.md) on 2026-05-06.