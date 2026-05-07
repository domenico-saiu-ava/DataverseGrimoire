---
logical: "retentionsuccessdetail"
display: "RetentionSuccessDetail"
entitySetName: "retentionsuccessdetails"
primaryId: "retentionsuccessdetailid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# RetentionSuccessDetail

Retention Success details.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `retentionsuccessdetail` |
| Display name | RetentionSuccessDetail |
| Display (plural) | RetentionSuccessDetail |
| Schema name | `retentionsuccessdetail` |
| Entity set (Web API) | `retentionsuccessdetails` |
| Primary id attribute | `retentionsuccessdetailid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/retentionsuccessdetails?$select=name&$top=10
GET /api/data/v9.2/retentionsuccessdetails(<guid>)
POST /api/data/v9.2/retentionsuccessdetails
PATCH /api/data/v9.2/retentionsuccessdetails(<guid>)
DELETE /api/data/v9.2/retentionsuccessdetails(<guid>)
```

## Attributes

Writable: **12** · Read-only: **11**

### Writable

`entitylogicalname`, `importsequencenumber`, `name`, `operationid`, `overriddencreatedon`, `ownerid`, `recordid`, `retentionsuccessdetailid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msft_datastate`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_retentionsuccessdetail_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_retentionsuccessdetail_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_retentionsuccessdetail_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_retentionsuccessdetail_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_retentionsuccessdetail` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_retentionsuccessdetail` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_retentionsuccessdetail` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_retentionsuccessdetail` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `retentionsuccessdetail_SyncErrors` | [retentionsuccessdetail](retentionsuccessdetail.md) | `regardingobjectid` | `regardingobjectid_retentionsuccessdetail` |
| `retentionsuccessdetail_DuplicateMatchingRecord` | [retentionsuccessdetail](retentionsuccessdetail.md) | `duplicaterecordid` | `duplicaterecordid_retentionsuccessdetail` |
| `retentionsuccessdetail_DuplicateBaseRecord` | [retentionsuccessdetail](retentionsuccessdetail.md) | `baserecordid` | `baserecordid_retentionsuccessdetail` |
| `retentionsuccessdetail_AsyncOperations` | [retentionsuccessdetail](retentionsuccessdetail.md) | `regardingobjectid` | `regardingobjectid_retentionsuccessdetail` |
| `retentionsuccessdetail_MailboxTrackingFolders` | [retentionsuccessdetail](retentionsuccessdetail.md) | `regardingobjectid` | `regardingobjectid_retentionsuccessdetail` |
| `retentionsuccessdetail_UserEntityInstanceDatas` | [retentionsuccessdetail](retentionsuccessdetail.md) | `objectid` | `objectid_retentionsuccessdetail` |
| `retentionsuccessdetail_ProcessSession` | [retentionsuccessdetail](retentionsuccessdetail.md) | `regardingobjectid` | `regardingobjectid_retentionsuccessdetail` |
| `retentionsuccessdetail_BulkDeleteFailures` | [retentionsuccessdetail](retentionsuccessdetail.md) | `regardingobjectid` | `regardingobjectid_retentionsuccessdetail` |
| `retentionsuccessdetail_PrincipalObjectAttributeAccesses` | [retentionsuccessdetail](retentionsuccessdetail.md) | `objectid` | `objectid_retentionsuccessdetail` |


## Source

Generated from [retentionsuccessdetail (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='retentionsuccessdetail')) on 2026-05-07.