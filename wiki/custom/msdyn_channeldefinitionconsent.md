---
logical: "msdyn_channeldefinitionconsent"
display: "Consenso definizione canale"
entitySetName: "msdyn_channeldefinitionconsents"
primaryId: "msdyn_channeldefinitionconsentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Consenso definizione canale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_channeldefinitionconsent` |
| Display name | Consenso definizione canale |
| Display (plural) | Consensi definizione canale |
| Schema name | `msdyn_channeldefinitionconsent` |
| Entity set (Web API) | `msdyn_channeldefinitionconsents` |
| Primary id attribute | `msdyn_channeldefinitionconsentid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_channeldefinitionconsents?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_channeldefinitionconsents(<guid>)
POST /api/data/v9.2/msdyn_channeldefinitionconsents
PATCH /api/data/v9.2/msdyn_channeldefinitionconsents(<guid>)
DELETE /api/data/v9.2/msdyn_channeldefinitionconsents(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_channeldefinitionconsentid`, `msdyn_channeldefinitionid`, `msdyn_genericconsentgiven`, `msdyn_name`, `msdyn_specialconsentgiven`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_channeldefinitionconsent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_channeldefinitionconsent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_channeldefinitionconsent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_channeldefinitionconsent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_channeldefinitionconsent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_channeldefinitionconsent` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_channeldefinitionconsent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_channeldefinitionconsent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_channeldefinitionconsent_ChannelDefinitionId` | [msdyn_channeldefinition](msdyn_channeldefinition.md) | `msdyn_channeldefinitionid` | `msdyn_channeldefinitionid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_channeldefinitionconsent_SyncErrors` | [msdyn_channeldefinitionconsent](msdyn_channeldefinitionconsent.md) | `regardingobjectid` | `regardingobjectid_msdyn_channeldefinitionconsent` |
| `msdyn_channeldefinitionconsent_DuplicateMatchingRecord` | [msdyn_channeldefinitionconsent](msdyn_channeldefinitionconsent.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_channeldefinitionconsent` |
| `msdyn_channeldefinitionconsent_DuplicateBaseRecord` | [msdyn_channeldefinitionconsent](msdyn_channeldefinitionconsent.md) | `baserecordid` | `baserecordid_msdyn_channeldefinitionconsent` |
| `msdyn_channeldefinitionconsent_AsyncOperations` | [msdyn_channeldefinitionconsent](msdyn_channeldefinitionconsent.md) | `regardingobjectid` | `regardingobjectid_msdyn_channeldefinitionconsent` |
| `msdyn_channeldefinitionconsent_MailboxTrackingFolders` | [msdyn_channeldefinitionconsent](msdyn_channeldefinitionconsent.md) | `regardingobjectid` | `regardingobjectid_msdyn_channeldefinitionconsent` |
| `msdyn_channeldefinitionconsent_UserEntityInstanceDatas` | [msdyn_channeldefinitionconsent](msdyn_channeldefinitionconsent.md) | `objectid` | `objectid_msdyn_channeldefinitionconsent` |
| `msdyn_channeldefinitionconsent_ProcessSession` | [msdyn_channeldefinitionconsent](msdyn_channeldefinitionconsent.md) | `regardingobjectid` | `regardingobjectid_msdyn_channeldefinitionconsent` |
| `msdyn_channeldefinitionconsent_BulkDeleteFailures` | [msdyn_channeldefinitionconsent](msdyn_channeldefinitionconsent.md) | `regardingobjectid` | `regardingobjectid_msdyn_channeldefinitionconsent` |
| `msdyn_channeldefinitionconsent_PrincipalObjectAttributeAccesses` | [msdyn_channeldefinitionconsent](msdyn_channeldefinitionconsent.md) | `objectid` | `objectid_msdyn_channeldefinitionconsent` |


## Source

Generated from [msdyn_channeldefinitionconsent (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_channeldefinitionconsent')) on 2026-05-07.