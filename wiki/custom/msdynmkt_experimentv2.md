---
logical: "msdynmkt_experimentv2"
display: "msdynmkt_experimentv2"
entitySetName: "msdynmkt_experimentv2s"
primaryId: "msdynmkt_experimentv2id"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdynmkt_experimentv2

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_experimentv2` |
| Display name | msdynmkt_experimentv2 |
| Display (plural) | msdynmkt_experimentv2 |
| Schema name | `msdynmkt_experimentv2` |
| Entity set (Web API) | `msdynmkt_experimentv2s` |
| Primary id attribute | `msdynmkt_experimentv2id` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_experimentv2s?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_experimentv2s(<guid>)
POST /api/data/v9.2/msdynmkt_experimentv2s
PATCH /api/data/v9.2/msdynmkt_experimentv2s(<guid>)
DELETE /api/data/v9.2/msdynmkt_experimentv2s(<guid>)
```

## Attributes

Writable: **22** · Read-only: **10**

### Writable

`importsequencenumber`, `msdynmkt_associatejobid`, `msdynmkt_callbackaction`, `msdynmkt_endtime`, `msdynmkt_experimentactionid`, `msdynmkt_experimentrecordid`, `msdynmkt_experimentv2id`, `msdynmkt_experimentversionnumber`, `msdynmkt_experimentversionrecordid`, `msdynmkt_expirytime`, `msdynmkt_name`, `msdynmkt_productname`, `msdynmkt_starttime`, `msdynmkt_status`, `msdynmkt_testdetails`, `msdynmkt_winnerordefault`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_experimentv2_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_experimentv2_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_experimentv2_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_experimentv2_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdynmkt_experimentv2` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdynmkt_experimentv2` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdynmkt_experimentv2` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdynmkt_experimentv2` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_experimentv2_SyncErrors` | [msdynmkt_experimentv2](msdynmkt_experimentv2.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_experimentv2` |
| `msdynmkt_experimentv2_DuplicateMatchingRecord` | [msdynmkt_experimentv2](msdynmkt_experimentv2.md) | `duplicaterecordid` | `duplicaterecordid_msdynmkt_experimentv2` |
| `msdynmkt_experimentv2_DuplicateBaseRecord` | [msdynmkt_experimentv2](msdynmkt_experimentv2.md) | `baserecordid` | `baserecordid_msdynmkt_experimentv2` |
| `msdynmkt_experimentv2_AsyncOperations` | [msdynmkt_experimentv2](msdynmkt_experimentv2.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_experimentv2` |
| `msdynmkt_experimentv2_MailboxTrackingFolders` | [msdynmkt_experimentv2](msdynmkt_experimentv2.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_experimentv2` |
| `msdynmkt_experimentv2_UserEntityInstanceDatas` | [msdynmkt_experimentv2](msdynmkt_experimentv2.md) | `objectid` | `objectid_msdynmkt_experimentv2` |
| `msdynmkt_experimentv2_ProcessSession` | [msdynmkt_experimentv2](msdynmkt_experimentv2.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_experimentv2` |
| `msdynmkt_experimentv2_BulkDeleteFailures` | [msdynmkt_experimentv2](msdynmkt_experimentv2.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_experimentv2` |
| `msdynmkt_experimentv2_PrincipalObjectAttributeAccesses` | [msdynmkt_experimentv2](msdynmkt_experimentv2.md) | `objectid` | `objectid_msdynmkt_experimentv2` |


## Source

Generated from [msdynmkt_experimentv2 (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_experimentv2')) on 2026-05-07.