---
logical: "bulkarchivefailuredetail"
display: "BulkArchiveFailureDetail"
entitySetName: "bulkarchivefailuredetails"
primaryId: "bulkarchivefailuredetailid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# BulkArchiveFailureDetail

This is Deprecated Entity.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `bulkarchivefailuredetail` |
| Display name | BulkArchiveFailureDetail |
| Display (plural) | BulkArchiveFailureDetail |
| Schema name | `BulkArchiveFailureDetail` |
| Entity set (Web API) | `bulkarchivefailuredetails` |
| Primary id attribute | `bulkarchivefailuredetailid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/bulkarchivefailuredetails?$select=name&$top=10
GET /api/data/v9.2/bulkarchivefailuredetails(<guid>)
POST /api/data/v9.2/bulkarchivefailuredetails
PATCH /api/data/v9.2/bulkarchivefailuredetails(<guid>)
DELETE /api/data/v9.2/bulkarchivefailuredetails(<guid>)
```

## Attributes

Writable: **14** · Read-only: **10**

### Writable

`bulkarchivefailuredetailid`, `entitylogicalname`, `importsequencenumber`, `message`, `name`, `operation`, `operationid`, `overriddencreatedon`, `ownerid`, `recordid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_bulkarchivefailuredetail_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_bulkarchivefailuredetail_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_bulkarchivefailuredetail_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_bulkarchivefailuredetail_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_bulkarchivefailuredetail` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_bulkarchivefailuredetail` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_bulkarchivefailuredetail` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_bulkarchivefailuredetail` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `bulkarchivefailuredetail_SyncErrors` | [bulkarchivefailuredetail](bulkarchivefailuredetail.md) | `regardingobjectid` | `regardingobjectid_bulkarchivefailuredetail` |
| `bulkarchivefailuredetail_DuplicateMatchingRecord` | [bulkarchivefailuredetail](bulkarchivefailuredetail.md) | `duplicaterecordid` | `duplicaterecordid_bulkarchivefailuredetail` |
| `bulkarchivefailuredetail_DuplicateBaseRecord` | [bulkarchivefailuredetail](bulkarchivefailuredetail.md) | `baserecordid` | `baserecordid_bulkarchivefailuredetail` |
| `bulkarchivefailuredetail_AsyncOperations` | [bulkarchivefailuredetail](bulkarchivefailuredetail.md) | `regardingobjectid` | `regardingobjectid_bulkarchivefailuredetail` |
| `bulkarchivefailuredetail_MailboxTrackingFolders` | [bulkarchivefailuredetail](bulkarchivefailuredetail.md) | `regardingobjectid` | `regardingobjectid_bulkarchivefailuredetail` |
| `bulkarchivefailuredetail_UserEntityInstanceDatas` | [bulkarchivefailuredetail](bulkarchivefailuredetail.md) | `objectid` | `objectid_bulkarchivefailuredetail` |
| `bulkarchivefailuredetail_ProcessSession` | [bulkarchivefailuredetail](bulkarchivefailuredetail.md) | `regardingobjectid` | `regardingobjectid_bulkarchivefailuredetail` |
| `bulkarchivefailuredetail_BulkDeleteFailures` | [bulkarchivefailuredetail](bulkarchivefailuredetail.md) | `regardingobjectid` | `regardingobjectid_bulkarchivefailuredetail` |
| `bulkarchivefailuredetail_PrincipalObjectAttributeAccesses` | [bulkarchivefailuredetail](bulkarchivefailuredetail.md) | `objectid` | `objectid_bulkarchivefailuredetail` |


## Source

Generated from [bulkarchivefailuredetail (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='bulkarchivefailuredetail')) on 2026-05-07.