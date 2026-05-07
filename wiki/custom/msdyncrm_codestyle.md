---
logical: "msdyncrm_codestyle"
display: "Stile codice"
entitySetName: "msdyncrm_codestyles"
primaryId: "msdyncrm_codestyleid"
primaryName: "msdyncrm_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Stile codice

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyncrm_codestyle` |
| Display name | Stile codice |
| Display (plural) | Stili codice |
| Schema name | `msdyncrm_codestyle` |
| Entity set (Web API) | `msdyncrm_codestyles` |
| Primary id attribute | `msdyncrm_codestyleid` |
| Primary name attribute | `msdyncrm_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyncrm_codestyles?$select=msdyncrm_name&$top=10
GET /api/data/v9.2/msdyncrm_codestyles(<guid>)
POST /api/data/v9.2/msdyncrm_codestyles
PATCH /api/data/v9.2/msdyncrm_codestyles(<guid>)
DELETE /api/data/v9.2/msdyncrm_codestyles(<guid>)
```

## Attributes

Writable: **10** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyncrm_code`, `msdyncrm_codestyleid`, `msdyncrm_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyncrm_codestyle_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyncrm_codestyle_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyncrm_codestyle_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyncrm_codestyle_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyncrm_codestyle` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyncrm_codestyle` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyncrm_codestyle` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyncrm_codestyle` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyncrm_codestyle_SyncErrors` | [msdyncrm_codestyle](msdyncrm_codestyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_codestyle` |
| `msdyncrm_codestyle_DuplicateMatchingRecord` | [msdyncrm_codestyle](msdyncrm_codestyle.md) | `duplicaterecordid` | `duplicaterecordid_msdyncrm_codestyle` |
| `msdyncrm_codestyle_DuplicateBaseRecord` | [msdyncrm_codestyle](msdyncrm_codestyle.md) | `baserecordid` | `baserecordid_msdyncrm_codestyle` |
| `msdyncrm_codestyle_AsyncOperations` | [msdyncrm_codestyle](msdyncrm_codestyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_codestyle` |
| `msdyncrm_codestyle_MailboxTrackingFolders` | [msdyncrm_codestyle](msdyncrm_codestyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_codestyle` |
| `msdyncrm_codestyle_UserEntityInstanceDatas` | [msdyncrm_codestyle](msdyncrm_codestyle.md) | `objectid` | `objectid_msdyncrm_codestyle` |
| `msdyncrm_codestyle_ProcessSession` | [msdyncrm_codestyle](msdyncrm_codestyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_codestyle` |
| `msdyncrm_codestyle_BulkDeleteFailures` | [msdyncrm_codestyle](msdyncrm_codestyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_codestyle` |
| `msdyncrm_codestyle_PrincipalObjectAttributeAccesses` | [msdyncrm_codestyle](msdyncrm_codestyle.md) | `objectid` | `objectid_msdyncrm_codestyle` |


## Source

Generated from [msdyncrm_codestyle (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyncrm_codestyle')) on 2026-05-07.