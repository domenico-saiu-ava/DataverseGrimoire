---
logical: "msdyncrm_textstyle"
display: "Stile testo"
entitySetName: "msdyncrm_textstyles"
primaryId: "msdyncrm_textstyleid"
primaryName: "msdyncrm_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Stile testo

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyncrm_textstyle` |
| Display name | Stile testo |
| Display (plural) | Stile testo |
| Schema name | `msdyncrm_textstyle` |
| Entity set (Web API) | `msdyncrm_textstyles` |
| Primary id attribute | `msdyncrm_textstyleid` |
| Primary name attribute | `msdyncrm_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyncrm_textstyles?$select=msdyncrm_name&$top=10
GET /api/data/v9.2/msdyncrm_textstyles(<guid>)
POST /api/data/v9.2/msdyncrm_textstyles
PATCH /api/data/v9.2/msdyncrm_textstyles(<guid>)
DELETE /api/data/v9.2/msdyncrm_textstyles(<guid>)
```

## Attributes

Writable: **17** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyncrm_marginbottom`, `msdyncrm_marginleft`, `msdyncrm_marginright`, `msdyncrm_margintop`, `msdyncrm_name`, `msdyncrm_paddingbottom`, `msdyncrm_paddingleft`, `msdyncrm_paddingright`, `msdyncrm_paddingtop`, `msdyncrm_textstyleid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyncrm_textstyle_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyncrm_textstyle_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyncrm_textstyle_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyncrm_textstyle_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyncrm_textstyle` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyncrm_textstyle` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyncrm_textstyle` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyncrm_textstyle` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyncrm_textstyle_SyncErrors` | [msdyncrm_textstyle](msdyncrm_textstyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_textstyle` |
| `msdyncrm_textstyle_DuplicateMatchingRecord` | [msdyncrm_textstyle](msdyncrm_textstyle.md) | `duplicaterecordid` | `duplicaterecordid_msdyncrm_textstyle` |
| `msdyncrm_textstyle_DuplicateBaseRecord` | [msdyncrm_textstyle](msdyncrm_textstyle.md) | `baserecordid` | `baserecordid_msdyncrm_textstyle` |
| `msdyncrm_textstyle_AsyncOperations` | [msdyncrm_textstyle](msdyncrm_textstyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_textstyle` |
| `msdyncrm_textstyle_MailboxTrackingFolders` | [msdyncrm_textstyle](msdyncrm_textstyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_textstyle` |
| `msdyncrm_textstyle_UserEntityInstanceDatas` | [msdyncrm_textstyle](msdyncrm_textstyle.md) | `objectid` | `objectid_msdyncrm_textstyle` |
| `msdyncrm_textstyle_ProcessSession` | [msdyncrm_textstyle](msdyncrm_textstyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_textstyle` |
| `msdyncrm_textstyle_BulkDeleteFailures` | [msdyncrm_textstyle](msdyncrm_textstyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_textstyle` |
| `msdyncrm_textstyle_PrincipalObjectAttributeAccesses` | [msdyncrm_textstyle](msdyncrm_textstyle.md) | `objectid` | `objectid_msdyncrm_textstyle` |


## Source

Generated from [msdyncrm_textstyle (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyncrm_textstyle')) on 2026-05-07.