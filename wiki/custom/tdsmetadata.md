---
logical: "tdsmetadata"
display: "TdsMetadata"
entitySetName: "tdsmetadatas"
primaryId: "tdsmetadataid"
primaryName: "tdsmetadataname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# TdsMetadata

## Identity

| Property | Value |
| --- | --- |
| Logical name | `tdsmetadata` |
| Display name | TdsMetadata |
| Display (plural) | TdsMetadata |
| Schema name | `tdsmetadata` |
| Entity set (Web API) | `tdsmetadatas` |
| Primary id attribute | `tdsmetadataid` |
| Primary name attribute | `tdsmetadataname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/tdsmetadatas?$select=tdsmetadataname&$top=10
GET /api/data/v9.2/tdsmetadatas(<guid>)
POST /api/data/v9.2/tdsmetadatas
PATCH /api/data/v9.2/tdsmetadatas(<guid>)
DELETE /api/data/v9.2/tdsmetadatas(<guid>)
```

## Attributes

Writable: **14** · Read-only: **10**

### Writable

`entityupatetimestamp`, `importsequencenumber`, `inittimestamp`, `lastsynctimestamp`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `tdsmetadataid`, `tdsmetadataname`, `tdsorginitializedtimestamp`, `timezoneruleversionnumber`, `utcconversiontimezonecode`, `viewgeneratedtimestamp`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_tdsmetadata_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_tdsmetadata_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_tdsmetadata_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_tdsmetadata_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_tdsmetadata` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_tdsmetadata` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_tdsmetadata` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_tdsmetadata` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `tdsmetadata_SyncErrors` | [tdsmetadata](tdsmetadata.md) | `regardingobjectid` | `regardingobjectid_tdsmetadata` |
| `tdsmetadata_DuplicateMatchingRecord` | [tdsmetadata](tdsmetadata.md) | `duplicaterecordid` | `duplicaterecordid_tdsmetadata` |
| `tdsmetadata_DuplicateBaseRecord` | [tdsmetadata](tdsmetadata.md) | `baserecordid` | `baserecordid_tdsmetadata` |
| `tdsmetadata_AsyncOperations` | [tdsmetadata](tdsmetadata.md) | `regardingobjectid` | `regardingobjectid_tdsmetadata` |
| `tdsmetadata_MailboxTrackingFolders` | [tdsmetadata](tdsmetadata.md) | `regardingobjectid` | `regardingobjectid_tdsmetadata` |
| `tdsmetadata_UserEntityInstanceDatas` | [tdsmetadata](tdsmetadata.md) | `objectid` | `objectid_tdsmetadata` |
| `tdsmetadata_ProcessSession` | [tdsmetadata](tdsmetadata.md) | `regardingobjectid` | `regardingobjectid_tdsmetadata` |
| `tdsmetadata_BulkDeleteFailures` | [tdsmetadata](tdsmetadata.md) | `regardingobjectid` | `regardingobjectid_tdsmetadata` |
| `tdsmetadata_PrincipalObjectAttributeAccesses` | [tdsmetadata](tdsmetadata.md) | `objectid` | `objectid_tdsmetadata` |


## Source

Generated from [tdsmetadata (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='tdsmetadata')) on 2026-05-07.