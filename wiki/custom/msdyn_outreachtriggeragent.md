---
logical: "msdyn_outreachtriggeragent"
display: "Agente trigger di outreach"
entitySetName: "msdyn_outreachtriggeragents"
primaryId: "msdyn_outreachtriggeragentid"
primaryName: "msdyn_conversationid"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Agente trigger di outreach

Entità per salvare l'agente di outreach

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_outreachtriggeragent` |
| Display name | Agente trigger di outreach |
| Display (plural) | Agenti trigger di outreach |
| Schema name | `msdyn_outreachtriggeragent` |
| Entity set (Web API) | `msdyn_outreachtriggeragents` |
| Primary id attribute | `msdyn_outreachtriggeragentid` |
| Primary name attribute | `msdyn_conversationid` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_outreachtriggeragents?$select=msdyn_conversationid&$top=10
GET /api/data/v9.2/msdyn_outreachtriggeragents(<guid>)
POST /api/data/v9.2/msdyn_outreachtriggeragents
PATCH /api/data/v9.2/msdyn_outreachtriggeragents(<guid>)
DELETE /api/data/v9.2/msdyn_outreachtriggeragents(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_conversationid`, `msdyn_emailpayload`, `msdyn_outreachtriggeragentid`, `msdyn_retrycount`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_outreachtriggeragent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_outreachtriggeragent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_outreachtriggeragent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_outreachtriggeragent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_outreachtriggeragent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_outreachtriggeragent` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_outreachtriggeragent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_outreachtriggeragent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_outreachtriggeragent_SyncErrors` | [msdyn_outreachtriggeragent](msdyn_outreachtriggeragent.md) | `regardingobjectid` | `regardingobjectid_msdyn_outreachtriggeragent` |
| `msdyn_outreachtriggeragent_DuplicateMatchingRecord` | [msdyn_outreachtriggeragent](msdyn_outreachtriggeragent.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_outreachtriggeragent` |
| `msdyn_outreachtriggeragent_DuplicateBaseRecord` | [msdyn_outreachtriggeragent](msdyn_outreachtriggeragent.md) | `baserecordid` | `baserecordid_msdyn_outreachtriggeragent` |
| `msdyn_outreachtriggeragent_AsyncOperations` | [msdyn_outreachtriggeragent](msdyn_outreachtriggeragent.md) | `regardingobjectid` | `regardingobjectid_msdyn_outreachtriggeragent` |
| `msdyn_outreachtriggeragent_MailboxTrackingFolders` | [msdyn_outreachtriggeragent](msdyn_outreachtriggeragent.md) | `regardingobjectid` | `regardingobjectid_msdyn_outreachtriggeragent` |
| `msdyn_outreachtriggeragent_UserEntityInstanceDatas` | [msdyn_outreachtriggeragent](msdyn_outreachtriggeragent.md) | `objectid` | `objectid_msdyn_outreachtriggeragent` |
| `msdyn_outreachtriggeragent_ProcessSession` | [msdyn_outreachtriggeragent](msdyn_outreachtriggeragent.md) | `regardingobjectid` | `regardingobjectid_msdyn_outreachtriggeragent` |
| `msdyn_outreachtriggeragent_BulkDeleteFailures` | [msdyn_outreachtriggeragent](msdyn_outreachtriggeragent.md) | `regardingobjectid` | `regardingobjectid_msdyn_outreachtriggeragent` |
| `msdyn_outreachtriggeragent_PrincipalObjectAttributeAccesses` | [msdyn_outreachtriggeragent](msdyn_outreachtriggeragent.md) | `objectid` | `objectid_msdyn_outreachtriggeragent` |


## Source

Generated from [msdyn_outreachtriggeragent (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_outreachtriggeragent')) on 2026-05-07.