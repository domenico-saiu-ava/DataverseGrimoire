---
logical: "msdyn_actioncardactionstat"
display: "Action Card Usage"
entitySetName: "msdyn_actioncardactionstats"
primaryId: "msdyn_actioncardactionstatid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Action Card Usage

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_actioncardactionstat` |
| Display name | Action Card Usage |
| Display (plural) | Action Card Usages |
| Schema name | `msdyn_actioncardactionstat` |
| Entity set (Web API) | `msdyn_actioncardactionstats` |
| Primary id attribute | `msdyn_actioncardactionstatid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_actioncardactionstats?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_actioncardactionstats(<guid>)
POST /api/data/v9.2/msdyn_actioncardactionstats
PATCH /api/data/v9.2/msdyn_actioncardactionstats(<guid>)
DELETE /api/data/v9.2/msdyn_actioncardactionstats(<guid>)
```

## Attributes

Writable: **18** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_actioncardactionstatid`, `msdyn_actioncardid`, `msdyn_cardtype`, `msdyn_cardtypeid`, `msdyn_datapoint`, `msdyn_name`, `msdyn_regardingobjectid`, `msdyn_regardingobjectlogicalname`, `msdyn_regardingobjecttypecode`, `msdyn_userid`, `msdyn_value`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_actioncardactionstat_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_actioncardactionstat_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_actioncardactionstat_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_actioncardactionstat_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_actioncardactionstat` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_actioncardactionstat` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_actioncardactionstat` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_actioncardactionstat` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_cardtype_actioncardactionstat_cardtypeid` | [cardtype](cardtype.md) | `msdyn_cardtypeid` | `msdyn_cardtypeid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_actioncardactionstat_SyncErrors` | [msdyn_actioncardactionstat](msdyn_actioncardactionstat.md) | `regardingobjectid` | `regardingobjectid_msdyn_actioncardactionstat` |
| `msdyn_actioncardactionstat_DuplicateMatchingRecord` | [msdyn_actioncardactionstat](msdyn_actioncardactionstat.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_actioncardactionstat` |
| `msdyn_actioncardactionstat_DuplicateBaseRecord` | [msdyn_actioncardactionstat](msdyn_actioncardactionstat.md) | `baserecordid` | `baserecordid_msdyn_actioncardactionstat` |
| `msdyn_actioncardactionstat_AsyncOperations` | [msdyn_actioncardactionstat](msdyn_actioncardactionstat.md) | `regardingobjectid` | `regardingobjectid_msdyn_actioncardactionstat` |
| `msdyn_actioncardactionstat_MailboxTrackingFolders` | [msdyn_actioncardactionstat](msdyn_actioncardactionstat.md) | `regardingobjectid` | `regardingobjectid_msdyn_actioncardactionstat` |
| `msdyn_actioncardactionstat_UserEntityInstanceDatas` | [msdyn_actioncardactionstat](msdyn_actioncardactionstat.md) | `objectid` | `objectid_msdyn_actioncardactionstat` |
| `msdyn_actioncardactionstat_ProcessSession` | [msdyn_actioncardactionstat](msdyn_actioncardactionstat.md) | `regardingobjectid` | `regardingobjectid_msdyn_actioncardactionstat` |
| `msdyn_actioncardactionstat_BulkDeleteFailures` | [msdyn_actioncardactionstat](msdyn_actioncardactionstat.md) | `regardingobjectid` | `regardingobjectid_msdyn_actioncardactionstat` |
| `msdyn_actioncardactionstat_PrincipalObjectAttributeAccesses` | [msdyn_actioncardactionstat](msdyn_actioncardactionstat.md) | `objectid` | `objectid_msdyn_actioncardactionstat` |


## Source

Generated from [msdyn_actioncardactionstat (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_actioncardactionstat')) on 2026-05-07.