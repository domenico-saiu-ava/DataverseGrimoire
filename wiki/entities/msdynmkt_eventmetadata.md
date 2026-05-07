---
logical: "msdynmkt_eventmetadata"
display: "Trigger"
entitySetName: "msdynmkt_eventmetadataset"
primaryId: "msdynmkt_eventmetadataid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Trigger

Metadata for Cxp Events

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_eventmetadata` |
| Display name | Trigger |
| Display (plural) | Triggers |
| Schema name | `msdynmkt_eventmetadata` |
| Entity set (Web API) | `msdynmkt_eventmetadataset` |
| Primary id attribute | `msdynmkt_eventmetadataid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_eventmetadataset?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_eventmetadataset(<guid>)
POST /api/data/v9.2/msdynmkt_eventmetadataset
PATCH /api/data/v9.2/msdynmkt_eventmetadataset(<guid>)
DELETE /api/data/v9.2/msdynmkt_eventmetadataset(<guid>)
```

## Attributes

Writable: **22** · Read-only: **20**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdynmkt_cdpaexportlocation`, `msdynmkt_customapiid`, `msdynmkt_cxpversioningjson`, `msdynmkt_eventjson`, `msdynmkt_eventmetadataId`, `msdynmkt_eventmetadatastatus`, `msdynmkt_integrationstatus`, `msdynmkt_integrationstatuscomputedon`, `msdynmkt_name`, `msdynmkt_sourceentity`, `msdynmkt_state`, `msdynmkt_supportedtargetentities`, `msdynmkt_uniquename`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdynmkt_cataloguniquename`, `msdynmkt_iconpath`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdynmkt_eventmetadata` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdynmkt_eventmetadata_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_eventmetadata_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_eventmetadata_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_eventmetadata_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdynmkt_customapi_eventmetadata` | [customapi](customapi.md) | `msdynmkt_customapiid` | `msdynmkt_customapiid` |
| `owner_msdynmkt_eventmetadata` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdynmkt_eventmetadata` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdynmkt_eventmetadata` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_eventmetadata_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_eventmetadata_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_eventmetadata_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdynmkt_eventmetadata_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdynmkt_eventmetadata_eventmetadata_sdkmessagepro` | _n/a_ | `msdynmkt_eventmetadataid` | _n/a_ |
| `msdynmkt_eventmetadata_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_eventmetadata_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdynmkt_eventmetadata_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_eventmetadata_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdynmkt_eventmetadata.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdynmkt_eventmetadata.md) on 2026-05-06.