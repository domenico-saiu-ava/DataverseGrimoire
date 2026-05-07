---
logical: "msdyn_ocsitrainingdata"
display: "Training record"
entitySetName: "msdyn_ocsitrainingdatas"
primaryId: "msdyn_ocsitrainingdataid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Training record

Indicates individual training record to be used for model training

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocsitrainingdata` |
| Display name | Training record |
| Display (plural) | Training records |
| Schema name | `msdyn_ocsitrainingdata` |
| Entity set (Web API) | `msdyn_ocsitrainingdatas` |
| Primary id attribute | `msdyn_ocsitrainingdataid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocsitrainingdatas?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocsitrainingdatas(<guid>)
POST /api/data/v9.2/msdyn_ocsitrainingdatas
PATCH /api/data/v9.2/msdyn_ocsitrainingdatas(<guid>)
DELETE /api/data/v9.2/msdyn_ocsitrainingdatas(<guid>)
```

## Attributes

Writable: **18** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_approvedby`, `msdyn_approvedon`, `msdyn_name`, `msdyn_ocsitdimportconfigid`, `msdyn_ocsitrainingdataId`, `msdyn_ocsitrainingdatastatus`, `msdyn_ocskillidentmlmodelid`, `msdyn_phrase`, `msdyn_skillidscsv`, `msdyn_skillscsv`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_ocsitrainingdata` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_ocsitrainingdata_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocsitrainingdata_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocsitrainingdata_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocsitrainingdata_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_ocsitrainingdata_ocsitdimportconfig` | [msdyn_ocsitdimportconfig](msdyn_ocsitdimportconfig.md) | `msdyn_ocsitdimportconfigid` | `msdyn_ocsitdimportconfigid` |
| `msdyn_ocsitrainingdata_ocskillidentmlmode` | [msdyn_ocskillidentmlmodel](msdyn_ocskillidentmlmodel.md) | `msdyn_ocskillidentmlmodelid` | `msdyn_ocskillidentmlmodelid` |
| `msdyn_systemuser_msdyn_ocsitrainingdata_approvedby` | [systemuser](systemuser.md) | `msdyn_approvedby` | `msdyn_approvedby` |
| `owner_msdyn_ocsitrainingdata` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_ocsitrainingdata` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_ocsitrainingdata` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocsitdskill_ocsitrainingdataid` | _n/a_ | `msdyn_ocsitrainingdataid` | _n/a_ |
| `msdyn_ocsitrainingdata_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsitrainingdata_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsitrainingdata_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_ocsitrainingdata_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_ocsitrainingdata_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsitrainingdata_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocsitrainingdata_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsitrainingdata_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_ocsitrainingdata.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_ocsitrainingdata.md) on 2026-05-06.