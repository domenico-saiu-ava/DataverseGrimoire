---
logical: "msdyncrm_dividerstyle"
display: "Stile divisore"
entitySetName: "msdyncrm_dividerstyles"
primaryId: "msdyncrm_dividerstyleid"
primaryName: "msdyncrm_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Stile divisore

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyncrm_dividerstyle` |
| Display name | Stile divisore |
| Display (plural) | Stile divisori |
| Schema name | `msdyncrm_dividerstyle` |
| Entity set (Web API) | `msdyncrm_dividerstyles` |
| Primary id attribute | `msdyncrm_dividerstyleid` |
| Primary name attribute | `msdyncrm_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyncrm_dividerstyles?$select=msdyncrm_name&$top=10
GET /api/data/v9.2/msdyncrm_dividerstyles(<guid>)
POST /api/data/v9.2/msdyncrm_dividerstyles
PATCH /api/data/v9.2/msdyncrm_dividerstyles(<guid>)
DELETE /api/data/v9.2/msdyncrm_dividerstyles(<guid>)
```

## Attributes

Writable: **23** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyncrm_alignment`, `msdyncrm_dividerstyleid`, `msdyncrm_emailcolorpalette`, `msdyncrm_linecolor`, `msdyncrm_linesize`, `msdyncrm_linestyle`, `msdyncrm_marginbottom`, `msdyncrm_marginleft`, `msdyncrm_marginright`, `msdyncrm_margintop`, `msdyncrm_name`, `msdyncrm_paddingbottom`, `msdyncrm_paddingleft`, `msdyncrm_paddingright`, `msdyncrm_paddingtop`, `msdyncrm_width`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyncrm_dividerstyle_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyncrm_dividerstyle_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyncrm_dividerstyle_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyncrm_dividerstyle_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyncrm_dividerstyle` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyncrm_dividerstyle` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyncrm_dividerstyle` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyncrm_dividerstyle` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyncrm_dividerstyle_SyncErrors` | [msdyncrm_dividerstyle](msdyncrm_dividerstyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_dividerstyle` |
| `msdyncrm_dividerstyle_DuplicateMatchingRecord` | [msdyncrm_dividerstyle](msdyncrm_dividerstyle.md) | `duplicaterecordid` | `duplicaterecordid_msdyncrm_dividerstyle` |
| `msdyncrm_dividerstyle_DuplicateBaseRecord` | [msdyncrm_dividerstyle](msdyncrm_dividerstyle.md) | `baserecordid` | `baserecordid_msdyncrm_dividerstyle` |
| `msdyncrm_dividerstyle_AsyncOperations` | [msdyncrm_dividerstyle](msdyncrm_dividerstyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_dividerstyle` |
| `msdyncrm_dividerstyle_MailboxTrackingFolders` | [msdyncrm_dividerstyle](msdyncrm_dividerstyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_dividerstyle` |
| `msdyncrm_dividerstyle_UserEntityInstanceDatas` | [msdyncrm_dividerstyle](msdyncrm_dividerstyle.md) | `objectid` | `objectid_msdyncrm_dividerstyle` |
| `msdyncrm_dividerstyle_ProcessSession` | [msdyncrm_dividerstyle](msdyncrm_dividerstyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_dividerstyle` |
| `msdyncrm_dividerstyle_BulkDeleteFailures` | [msdyncrm_dividerstyle](msdyncrm_dividerstyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_dividerstyle` |
| `msdyncrm_dividerstyle_PrincipalObjectAttributeAccesses` | [msdyncrm_dividerstyle](msdyncrm_dividerstyle.md) | `objectid` | `objectid_msdyncrm_dividerstyle` |


## Source

Generated from [msdyncrm_dividerstyle (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyncrm_dividerstyle')) on 2026-05-07.