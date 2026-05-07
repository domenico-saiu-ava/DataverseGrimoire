---
logical: "msdynmkt_predefinedplaceholder"
display: "Segnaposto predefinito"
entitySetName: "msdynmkt_predefinedplaceholders"
primaryId: "msdynmkt_predefinedplaceholderid"
primaryName: "msdynmkt_description"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Segnaposto predefinito

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_predefinedplaceholder` |
| Display name | Segnaposto predefinito |
| Display (plural) | Segnaposto predefiniti |
| Schema name | `msdynmkt_predefinedplaceholder` |
| Entity set (Web API) | `msdynmkt_predefinedplaceholders` |
| Primary id attribute | `msdynmkt_predefinedplaceholderid` |
| Primary name attribute | `msdynmkt_description` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_predefinedplaceholders?$select=msdynmkt_description&$top=10
GET /api/data/v9.2/msdynmkt_predefinedplaceholders(<guid>)
POST /api/data/v9.2/msdynmkt_predefinedplaceholders
PATCH /api/data/v9.2/msdynmkt_predefinedplaceholders(<guid>)
DELETE /api/data/v9.2/msdynmkt_predefinedplaceholders(<guid>)
```

## Attributes

Writable: **17** · Read-only: **10**

### Writable

`importsequencenumber`, `msdynmkt_description`, `msdynmkt_isbuiltin`, `msdynmkt_language`, `msdynmkt_namespace`, `msdynmkt_placeholderdescriptors`, `msdynmkt_placeholderlabel`, `msdynmkt_placeholdertype`, `msdynmkt_predefinedplaceholderid`, `msdynmkt_usecount`, `msdynmkt_usedon`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_predefinedplaceholder_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_predefinedplaceholder_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_predefinedplaceholder_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_predefinedplaceholder_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdynmkt_predefinedplaceholder` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdynmkt_predefinedplaceholder` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdynmkt_predefinedplaceholder` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdynmkt_predefinedplaceholder` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_predefinedplaceholder_SyncErrors` | [msdynmkt_predefinedplaceholder](msdynmkt_predefinedplaceholder.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_predefinedplaceholder` |
| `msdynmkt_predefinedplaceholder_DuplicateMatchingRecord` | [msdynmkt_predefinedplaceholder](msdynmkt_predefinedplaceholder.md) | `duplicaterecordid` | `duplicaterecordid_msdynmkt_predefinedplaceholder` |
| `msdynmkt_predefinedplaceholder_DuplicateBaseRecord` | [msdynmkt_predefinedplaceholder](msdynmkt_predefinedplaceholder.md) | `baserecordid` | `baserecordid_msdynmkt_predefinedplaceholder` |
| `msdynmkt_predefinedplaceholder_AsyncOperations` | [msdynmkt_predefinedplaceholder](msdynmkt_predefinedplaceholder.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_predefinedplaceholder` |
| `msdynmkt_predefinedplaceholder_MailboxTrackingFolders` | [msdynmkt_predefinedplaceholder](msdynmkt_predefinedplaceholder.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_predefinedplaceholder` |
| `msdynmkt_predefinedplaceholder_UserEntityInstanceDatas` | [msdynmkt_predefinedplaceholder](msdynmkt_predefinedplaceholder.md) | `objectid` | `objectid_msdynmkt_predefinedplaceholder` |
| `msdynmkt_predefinedplaceholder_ProcessSession` | [msdynmkt_predefinedplaceholder](msdynmkt_predefinedplaceholder.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_predefinedplaceholder` |
| `msdynmkt_predefinedplaceholder_BulkDeleteFailures` | [msdynmkt_predefinedplaceholder](msdynmkt_predefinedplaceholder.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_predefinedplaceholder` |
| `msdynmkt_predefinedplaceholder_PrincipalObjectAttributeAccesses` | [msdynmkt_predefinedplaceholder](msdynmkt_predefinedplaceholder.md) | `objectid` | `objectid_msdynmkt_predefinedplaceholder` |


## Source

Generated from [msdynmkt_predefinedplaceholder (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_predefinedplaceholder')) on 2026-05-07.