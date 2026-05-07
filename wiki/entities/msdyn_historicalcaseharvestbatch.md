---
logical: "msdyn_historicalcaseharvestbatch"
display: "msdyn_historicalcaseharvestbatch"
entitySetName: "msdyn_historicalcaseharvestbatches"
primaryId: "msdyn_historicalcaseharvestbatchid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# msdyn_historicalcaseharvestbatch

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_historicalcaseharvestbatch` |
| Display name | msdyn_historicalcaseharvestbatch |
| Display (plural) | msdyn_historicalcaseharvestbatches |
| Schema name | `msdyn_historicalcaseharvestbatch` |
| Entity set (Web API) | `msdyn_historicalcaseharvestbatches` |
| Primary id attribute | `msdyn_historicalcaseharvestbatchid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_historicalcaseharvestbatches?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_historicalcaseharvestbatches(<guid>)
POST /api/data/v9.2/msdyn_historicalcaseharvestbatches
PATCH /api/data/v9.2/msdyn_historicalcaseharvestbatches(<guid>)
DELETE /api/data/v9.2/msdyn_historicalcaseharvestbatches(<guid>)
```

## Attributes

Writable: **17** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `ModuleRunId`, `msdyn_articlescreated`, `msdyn_batchprocessingcompletedon`, `msdyn_batchsize`, `msdyn_casesskipped`, `msdyn_historicalcaseharvestbatchId`, `msdyn_historicalcaseharvestrunid`, `msdyn_incidentids`, `msdyn_name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_historicalcaseharvestbatch` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_historicalcaseharvestbatch_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_historicalcaseharvestbatch_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_historicalcaseharvestbatch_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_historicalcaseharvestbatch_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_historicalcaseharvestbatch_historicalcaseharvestrun` | [msdyn_historicalcaseharvestrun](msdyn_historicalcaseharvestrun.md) | `msdyn_historicalcaseharvestrunid` | `msdyn_historicalcaseharvestrunid` |
| `owner_msdyn_historicalcaseharvestbatch` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_historicalcaseharvestbatch` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_historicalcaseharvestbatch` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_historicalcaseharvestbatch_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_historicalcaseharvestbatch_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_historicalcaseharvestbatch_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_historicalcaseharvestbatch_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_historicalcaseharvestbatch_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_historicalcaseharvestbatch_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_historicalcaseharvestbatch.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_historicalcaseharvestbatch.md) on 2026-05-06.