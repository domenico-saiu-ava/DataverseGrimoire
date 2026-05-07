---
logical: "msdyncrm_qrcodestyle"
display: "Stile codice a matrice"
entitySetName: "msdyncrm_qrcodestyles"
primaryId: "msdyncrm_qrcodestyleid"
primaryName: "msdyncrm_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Stile codice a matrice

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyncrm_qrcodestyle` |
| Display name | Stile codice a matrice |
| Display (plural) | Stili codice a matrice |
| Schema name | `msdyncrm_qrcodestyle` |
| Entity set (Web API) | `msdyncrm_qrcodestyles` |
| Primary id attribute | `msdyncrm_qrcodestyleid` |
| Primary name attribute | `msdyncrm_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyncrm_qrcodestyles?$select=msdyncrm_name&$top=10
GET /api/data/v9.2/msdyncrm_qrcodestyles(<guid>)
POST /api/data/v9.2/msdyncrm_qrcodestyles
PATCH /api/data/v9.2/msdyncrm_qrcodestyles(<guid>)
DELETE /api/data/v9.2/msdyncrm_qrcodestyles(<guid>)
```

## Attributes

Writable: **9** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyncrm_name`, `msdyncrm_qrcodestyleid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyncrm_qrcodestyle_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyncrm_qrcodestyle_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyncrm_qrcodestyle_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyncrm_qrcodestyle_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyncrm_qrcodestyle` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyncrm_qrcodestyle` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyncrm_qrcodestyle` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyncrm_qrcodestyle` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyncrm_qrcodestyle_SyncErrors` | [msdyncrm_qrcodestyle](msdyncrm_qrcodestyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_qrcodestyle` |
| `msdyncrm_qrcodestyle_DuplicateMatchingRecord` | [msdyncrm_qrcodestyle](msdyncrm_qrcodestyle.md) | `duplicaterecordid` | `duplicaterecordid_msdyncrm_qrcodestyle` |
| `msdyncrm_qrcodestyle_DuplicateBaseRecord` | [msdyncrm_qrcodestyle](msdyncrm_qrcodestyle.md) | `baserecordid` | `baserecordid_msdyncrm_qrcodestyle` |
| `msdyncrm_qrcodestyle_AsyncOperations` | [msdyncrm_qrcodestyle](msdyncrm_qrcodestyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_qrcodestyle` |
| `msdyncrm_qrcodestyle_MailboxTrackingFolders` | [msdyncrm_qrcodestyle](msdyncrm_qrcodestyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_qrcodestyle` |
| `msdyncrm_qrcodestyle_UserEntityInstanceDatas` | [msdyncrm_qrcodestyle](msdyncrm_qrcodestyle.md) | `objectid` | `objectid_msdyncrm_qrcodestyle` |
| `msdyncrm_qrcodestyle_ProcessSession` | [msdyncrm_qrcodestyle](msdyncrm_qrcodestyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_qrcodestyle` |
| `msdyncrm_qrcodestyle_BulkDeleteFailures` | [msdyncrm_qrcodestyle](msdyncrm_qrcodestyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_qrcodestyle` |
| `msdyncrm_qrcodestyle_PrincipalObjectAttributeAccesses` | [msdyncrm_qrcodestyle](msdyncrm_qrcodestyle.md) | `objectid` | `objectid_msdyncrm_qrcodestyle` |


## Source

Generated from [msdyncrm_qrcodestyle (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyncrm_qrcodestyle')) on 2026-05-07.