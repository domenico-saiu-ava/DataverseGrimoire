---
logical: "msdyn_ocsitrainingdata"
display: "Record di training"
entitySetName: "msdyn_ocsitrainingdatas"
primaryId: "msdyn_ocsitrainingdataid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Record di training

Indica il singolo record di training da utilizzare per il training del modello

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocsitrainingdata` |
| Display name | Record di training |
| Display (plural) | Record di training |
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

Writable: **17** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_approvedby`, `msdyn_approvedon`, `msdyn_name`, `msdyn_ocsitdimportconfigid`, `msdyn_ocsitrainingdataid`, `msdyn_ocsitrainingdatastatus`, `msdyn_ocskillidentmlmodelid`, `msdyn_phrase`, `msdyn_skillidscsv`, `msdyn_skillscsv`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_ocsitrainingdata_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocsitrainingdata_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocsitrainingdata_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocsitrainingdata_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_ocsitrainingdata` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_ocsitrainingdata` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_ocsitrainingdata` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_ocsitrainingdata` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_systemuser_msdyn_ocsitrainingdata_approvedby` | [systemuser](systemuser.md) | `msdyn_approvedby` | `msdyn_approvedby` |
| `msdyn_ocsitrainingdata_ocsitdimportconfig` | [msdyn_ocsitdimportconfig](msdyn_ocsitdimportconfig.md) | `msdyn_ocsitdimportconfigid` | `msdyn_ocsitdimportconfigid` |
| `msdyn_ocsitrainingdata_ocskillidentmlmode` | [msdyn_ocskillidentmlmodel](msdyn_ocskillidentmlmodel.md) | `msdyn_ocskillidentmlmodelid` | `msdyn_ocskillidentmlmodelid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocsitrainingdata_SyncErrors` | [msdyn_ocsitrainingdata](msdyn_ocsitrainingdata.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsitrainingdata` |
| `msdyn_ocsitrainingdata_DuplicateMatchingRecord` | [msdyn_ocsitrainingdata](msdyn_ocsitrainingdata.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_ocsitrainingdata` |
| `msdyn_ocsitrainingdata_DuplicateBaseRecord` | [msdyn_ocsitrainingdata](msdyn_ocsitrainingdata.md) | `baserecordid` | `baserecordid_msdyn_ocsitrainingdata` |
| `msdyn_ocsitrainingdata_AsyncOperations` | [msdyn_ocsitrainingdata](msdyn_ocsitrainingdata.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsitrainingdata` |
| `msdyn_ocsitrainingdata_MailboxTrackingFolders` | [msdyn_ocsitrainingdata](msdyn_ocsitrainingdata.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsitrainingdata` |
| `msdyn_ocsitrainingdata_UserEntityInstanceDatas` | [msdyn_ocsitrainingdata](msdyn_ocsitrainingdata.md) | `objectid` | `objectid_msdyn_ocsitrainingdata` |
| `msdyn_ocsitrainingdata_ProcessSession` | [msdyn_ocsitrainingdata](msdyn_ocsitrainingdata.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsitrainingdata` |
| `msdyn_ocsitrainingdata_BulkDeleteFailures` | [msdyn_ocsitrainingdata](msdyn_ocsitrainingdata.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsitrainingdata` |
| `msdyn_ocsitrainingdata_PrincipalObjectAttributeAccesses` | [msdyn_ocsitrainingdata](msdyn_ocsitrainingdata.md) | `objectid` | `objectid_msdyn_ocsitrainingdata` |
| `msdyn_ocsitdskill_ocsitrainingdataid` | [msdyn_ocsitrainingdata](msdyn_ocsitrainingdata.md) | `msdyn_ocsitrainingdataid` | `msdyn_ocsitrainingdataid` |


## Source

Generated from [msdyn_ocsitrainingdata (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ocsitrainingdata')) on 2026-05-07.