---
logical: "retentionfailuredetail"
display: "RetentionFailureDetail"
entitySetName: "retentionfailuredetails"
primaryId: "retentionfailuredetailid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# RetentionFailureDetail

Retention failure details.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `retentionfailuredetail` |
| Display name | RetentionFailureDetail |
| Display (plural) | RetentionFailureDetail |
| Schema name | `retentionfailuredetail` |
| Entity set (Web API) | `retentionfailuredetails` |
| Primary id attribute | `retentionfailuredetailid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/retentionfailuredetails?$select=name&$top=10
GET /api/data/v9.2/retentionfailuredetails(<guid>)
POST /api/data/v9.2/retentionfailuredetails
PATCH /api/data/v9.2/retentionfailuredetails(<guid>)
DELETE /api/data/v9.2/retentionfailuredetails(<guid>)
```

## Attributes

Writable: **14** · Read-only: **10**

### Writable

`entitylogicalname`, `importsequencenumber`, `message`, `name`, `operation`, `operationid`, `overriddencreatedon`, `ownerid`, `recordid`, `retentionfailuredetailid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_retentionfailuredetail_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_retentionfailuredetail_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_retentionfailuredetail_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_retentionfailuredetail_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_retentionfailuredetail` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_retentionfailuredetail` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_retentionfailuredetail` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_retentionfailuredetail` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `retentionfailuredetail_SyncErrors` | [retentionfailuredetail](retentionfailuredetail.md) | `regardingobjectid` | `regardingobjectid_retentionfailuredetail` |
| `retentionfailuredetail_DuplicateMatchingRecord` | [retentionfailuredetail](retentionfailuredetail.md) | `duplicaterecordid` | `duplicaterecordid_retentionfailuredetail` |
| `retentionfailuredetail_DuplicateBaseRecord` | [retentionfailuredetail](retentionfailuredetail.md) | `baserecordid` | `baserecordid_retentionfailuredetail` |
| `retentionfailuredetail_AsyncOperations` | [retentionfailuredetail](retentionfailuredetail.md) | `regardingobjectid` | `regardingobjectid_retentionfailuredetail` |
| `retentionfailuredetail_MailboxTrackingFolders` | [retentionfailuredetail](retentionfailuredetail.md) | `regardingobjectid` | `regardingobjectid_retentionfailuredetail` |
| `retentionfailuredetail_UserEntityInstanceDatas` | [retentionfailuredetail](retentionfailuredetail.md) | `objectid` | `objectid_retentionfailuredetail` |
| `retentionfailuredetail_ProcessSession` | [retentionfailuredetail](retentionfailuredetail.md) | `regardingobjectid` | `regardingobjectid_retentionfailuredetail` |
| `retentionfailuredetail_BulkDeleteFailures` | [retentionfailuredetail](retentionfailuredetail.md) | `regardingobjectid` | `regardingobjectid_retentionfailuredetail` |
| `retentionfailuredetail_PrincipalObjectAttributeAccesses` | [retentionfailuredetail](retentionfailuredetail.md) | `objectid` | `objectid_retentionfailuredetail` |


## Source

Generated from [retentionfailuredetail (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='retentionfailuredetail')) on 2026-05-07.