---
logical: "msdyn_customaccountinsightsresult"
display: "Risultato informazioni dettagliate account personalizzato"
entitySetName: "msdyn_customaccountinsightsresults"
primaryId: "msdyn_customaccountinsightsresultid"
primaryName: "msdyn_customaccountinsightsname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Risultato informazioni dettagliate account personalizzato

Risultati delle informazioni dettagliate account personalizzato per l'account associato

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_customaccountinsightsresult` |
| Display name | Risultato informazioni dettagliate account personalizzato |
| Display (plural) | Risultati informazioni dettagliate account personalizzato |
| Schema name | `msdyn_customaccountinsightsresult` |
| Entity set (Web API) | `msdyn_customaccountinsightsresults` |
| Primary id attribute | `msdyn_customaccountinsightsresultid` |
| Primary name attribute | `msdyn_customaccountinsightsname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_customaccountinsightsresults?$select=msdyn_customaccountinsightsname&$top=10
GET /api/data/v9.2/msdyn_customaccountinsightsresults(<guid>)
POST /api/data/v9.2/msdyn_customaccountinsightsresults
PATCH /api/data/v9.2/msdyn_customaccountinsightsresults(<guid>)
DELETE /api/data/v9.2/msdyn_customaccountinsightsresults(<guid>)
```

## Attributes

Writable: **15** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_customaccountinsightsagentlastrun`, `msdyn_customaccountinsightsagentresult`, `msdyn_customaccountinsightsconfigid`, `msdyn_customaccountinsightsdomainname`, `msdyn_customaccountinsightsname`, `msdyn_customaccountinsightsresultid`, `msdyn_leadid`, `msdyn_salesagentprofileid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_customaccountinsightsresult_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_customaccountinsightsresult_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_customaccountinsightsresult_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_customaccountinsightsresult_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_customaccountinsightsresult` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_customaccountinsightsresult` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_customaccountinsightsresult` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_customaccountinsightsresult` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_customaccountinsightsresult_SyncErrors` | [msdyn_customaccountinsightsresult](msdyn_customaccountinsightsresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_customaccountinsightsresult` |
| `msdyn_customaccountinsightsresult_DuplicateMatchingRecord` | [msdyn_customaccountinsightsresult](msdyn_customaccountinsightsresult.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_customaccountinsightsresult` |
| `msdyn_customaccountinsightsresult_DuplicateBaseRecord` | [msdyn_customaccountinsightsresult](msdyn_customaccountinsightsresult.md) | `baserecordid` | `baserecordid_msdyn_customaccountinsightsresult` |
| `msdyn_customaccountinsightsresult_AsyncOperations` | [msdyn_customaccountinsightsresult](msdyn_customaccountinsightsresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_customaccountinsightsresult` |
| `msdyn_customaccountinsightsresult_MailboxTrackingFolders` | [msdyn_customaccountinsightsresult](msdyn_customaccountinsightsresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_customaccountinsightsresult` |
| `msdyn_customaccountinsightsresult_UserEntityInstanceDatas` | [msdyn_customaccountinsightsresult](msdyn_customaccountinsightsresult.md) | `objectid` | `objectid_msdyn_customaccountinsightsresult` |
| `msdyn_customaccountinsightsresult_ProcessSession` | [msdyn_customaccountinsightsresult](msdyn_customaccountinsightsresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_customaccountinsightsresult` |
| `msdyn_customaccountinsightsresult_BulkDeleteFailures` | [msdyn_customaccountinsightsresult](msdyn_customaccountinsightsresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_customaccountinsightsresult` |
| `msdyn_customaccountinsightsresult_PrincipalObjectAttributeAccesses` | [msdyn_customaccountinsightsresult](msdyn_customaccountinsightsresult.md) | `objectid` | `objectid_msdyn_customaccountinsightsresult` |


## Source

Generated from [msdyn_customaccountinsightsresult (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_customaccountinsightsresult')) on 2026-05-07.