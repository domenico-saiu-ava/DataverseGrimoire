---
logical: "msdyncrm_contentblockstyle"
display: "Blocco di contenuto"
entitySetName: "msdyncrm_contentblockstyles"
primaryId: "msdyncrm_contentblockstyleid"
primaryName: "msdyncrm_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Blocco di contenuto

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyncrm_contentblockstyle` |
| Display name | Blocco di contenuto |
| Display (plural) | Blocco di contenuto |
| Schema name | `msdyncrm_contentblockstyle` |
| Entity set (Web API) | `msdyncrm_contentblockstyles` |
| Primary id attribute | `msdyncrm_contentblockstyleid` |
| Primary name attribute | `msdyncrm_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyncrm_contentblockstyles?$select=msdyncrm_name&$top=10
GET /api/data/v9.2/msdyncrm_contentblockstyles(<guid>)
POST /api/data/v9.2/msdyncrm_contentblockstyles
PATCH /api/data/v9.2/msdyncrm_contentblockstyles(<guid>)
DELETE /api/data/v9.2/msdyncrm_contentblockstyles(<guid>)
```

## Attributes

Writable: **10** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyncrm_basestyle`, `msdyncrm_contentblockstyleid`, `msdyncrm_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyncrm_contentblockstyle_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyncrm_contentblockstyle_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyncrm_contentblockstyle_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyncrm_contentblockstyle_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyncrm_contentblockstyle` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyncrm_contentblockstyle` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyncrm_contentblockstyle` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyncrm_contentblockstyle` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyncrm_contentblockstyle_SyncErrors` | [msdyncrm_contentblockstyle](msdyncrm_contentblockstyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_contentblockstyle` |
| `msdyncrm_contentblockstyle_DuplicateMatchingRecord` | [msdyncrm_contentblockstyle](msdyncrm_contentblockstyle.md) | `duplicaterecordid` | `duplicaterecordid_msdyncrm_contentblockstyle` |
| `msdyncrm_contentblockstyle_DuplicateBaseRecord` | [msdyncrm_contentblockstyle](msdyncrm_contentblockstyle.md) | `baserecordid` | `baserecordid_msdyncrm_contentblockstyle` |
| `msdyncrm_contentblockstyle_AsyncOperations` | [msdyncrm_contentblockstyle](msdyncrm_contentblockstyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_contentblockstyle` |
| `msdyncrm_contentblockstyle_MailboxTrackingFolders` | [msdyncrm_contentblockstyle](msdyncrm_contentblockstyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_contentblockstyle` |
| `msdyncrm_contentblockstyle_UserEntityInstanceDatas` | [msdyncrm_contentblockstyle](msdyncrm_contentblockstyle.md) | `objectid` | `objectid_msdyncrm_contentblockstyle` |
| `msdyncrm_contentblockstyle_ProcessSession` | [msdyncrm_contentblockstyle](msdyncrm_contentblockstyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_contentblockstyle` |
| `msdyncrm_contentblockstyle_BulkDeleteFailures` | [msdyncrm_contentblockstyle](msdyncrm_contentblockstyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_contentblockstyle` |
| `msdyncrm_contentblockstyle_PrincipalObjectAttributeAccesses` | [msdyncrm_contentblockstyle](msdyncrm_contentblockstyle.md) | `objectid` | `objectid_msdyncrm_contentblockstyle` |


## Source

Generated from [msdyncrm_contentblockstyle (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyncrm_contentblockstyle')) on 2026-05-07.