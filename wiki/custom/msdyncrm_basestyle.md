---
logical: "msdyncrm_basestyle"
display: "basestyle"
entitySetName: "msdyncrm_basestyles"
primaryId: "msdyncrm_basestyleid"
primaryName: "msdyncrm_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# basestyle

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyncrm_basestyle` |
| Display name | basestyle |
| Display (plural) | basestyle |
| Schema name | `msdyncrm_basestyle` |
| Entity set (Web API) | `msdyncrm_basestyles` |
| Primary id attribute | `msdyncrm_basestyleid` |
| Primary name attribute | `msdyncrm_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyncrm_basestyles?$select=msdyncrm_name&$top=10
GET /api/data/v9.2/msdyncrm_basestyles(<guid>)
POST /api/data/v9.2/msdyncrm_basestyles
PATCH /api/data/v9.2/msdyncrm_basestyles(<guid>)
DELETE /api/data/v9.2/msdyncrm_basestyles(<guid>)
```

## Attributes

Writable: **26** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyncrm_align`, `msdyncrm_backgroundcolor`, `msdyncrm_backgroundimage`, `msdyncrm_basestyleid`, `msdyncrm_bordercolor`, `msdyncrm_borderradius`, `msdyncrm_borderstyle`, `msdyncrm_borderwidth`, `msdyncrm_emailcolorpalette`, `msdyncrm_marginbottom`, `msdyncrm_marginleft`, `msdyncrm_marginright`, `msdyncrm_margintop`, `msdyncrm_minheight`, `msdyncrm_name`, `msdyncrm_paddingbottom`, `msdyncrm_paddingleft`, `msdyncrm_paddingright`, `msdyncrm_paddingtop`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyncrm_basestyle_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyncrm_basestyle_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyncrm_basestyle_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyncrm_basestyle_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyncrm_basestyle` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyncrm_basestyle` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyncrm_basestyle` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyncrm_basestyle` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyncrm_basestyle_SyncErrors` | [msdyncrm_basestyle](msdyncrm_basestyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_basestyle` |
| `msdyncrm_basestyle_DuplicateMatchingRecord` | [msdyncrm_basestyle](msdyncrm_basestyle.md) | `duplicaterecordid` | `duplicaterecordid_msdyncrm_basestyle` |
| `msdyncrm_basestyle_DuplicateBaseRecord` | [msdyncrm_basestyle](msdyncrm_basestyle.md) | `baserecordid` | `baserecordid_msdyncrm_basestyle` |
| `msdyncrm_basestyle_AsyncOperations` | [msdyncrm_basestyle](msdyncrm_basestyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_basestyle` |
| `msdyncrm_basestyle_MailboxTrackingFolders` | [msdyncrm_basestyle](msdyncrm_basestyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_basestyle` |
| `msdyncrm_basestyle_UserEntityInstanceDatas` | [msdyncrm_basestyle](msdyncrm_basestyle.md) | `objectid` | `objectid_msdyncrm_basestyle` |
| `msdyncrm_basestyle_ProcessSession` | [msdyncrm_basestyle](msdyncrm_basestyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_basestyle` |
| `msdyncrm_basestyle_BulkDeleteFailures` | [msdyncrm_basestyle](msdyncrm_basestyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_basestyle` |
| `msdyncrm_basestyle_PrincipalObjectAttributeAccesses` | [msdyncrm_basestyle](msdyncrm_basestyle.md) | `objectid` | `objectid_msdyncrm_basestyle` |


## Source

Generated from [msdyncrm_basestyle (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyncrm_basestyle')) on 2026-05-07.