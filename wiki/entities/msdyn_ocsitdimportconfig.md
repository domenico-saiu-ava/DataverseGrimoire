---
logical: "msdyn_ocsitdimportconfig"
display: "Training data import configuration"
entitySetName: "msdyn_ocsitdimportconfigs"
primaryId: "msdyn_ocsitdimportconfigid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Training data import configuration

Indicates the training data import configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocsitdimportconfig` |
| Display name | Training data import configuration |
| Display (plural) | Training data import configurations |
| Schema name | `msdyn_ocsitdimportconfig` |
| Entity set (Web API) | `msdyn_ocsitdimportconfigs` |
| Primary id attribute | `msdyn_ocsitdimportconfigid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocsitdimportconfigs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocsitdimportconfigs(<guid>)
POST /api/data/v9.2/msdyn_ocsitdimportconfigs
PATCH /api/data/v9.2/msdyn_ocsitdimportconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_ocsitdimportconfigs(<guid>)
```

## Attributes

Writable: **17** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_cdsdataloadconfig`, `msdyn_importconfigtype`, `msdyn_loadstatus`, `msdyn_name`, `msdyn_ocsitdimportconfigId`, `msdyn_ocskillidentmlmodelid`, `msdyn_recordsimported`, `msdyn_recordsskipped`, `msdyn_totalrecordstoimport`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_ocsitdimportconfig` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_ocsitdimportconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocsitdimportconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocsitdimportconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocsitdimportconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_ocsitdimportconfig_ocskillidentmlmo` | [msdyn_ocskillidentmlmodel](msdyn_ocskillidentmlmodel.md) | `msdyn_ocskillidentmlmodelid` | `msdyn_ocskillidentmlmodelid` |
| `owner_msdyn_ocsitdimportconfig` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_ocsitdimportconfig` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_ocsitdimportconfig` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocsitdimportconfig_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsitdimportconfig_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsitdimportconfig_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_ocsitdimportconfig_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_ocsitdimportconfig_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsitdimportconfig_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocsitdimportconfig_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsitdimportconfig_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsitrainingdata_ocsitdimportconfig` | _n/a_ | `msdyn_ocsitdimportconfigid` | _n/a_ |


## Source

Generated from [msdyn_ocsitdimportconfig.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_ocsitdimportconfig.md) on 2026-05-06.