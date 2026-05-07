---
logical: "msdyn_ocsentimentdailytopickeyword"
display: "Parola chiave argomento giornaliero valutazione"
entitySetName: "msdyn_ocsentimentdailytopickeywords"
primaryId: "msdyn_ocsentimentdailytopickeywordid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Parola chiave argomento giornaliero valutazione

1. Archivia la parola chiave e la frequenza per i cluster di argomenti
2. Utilizzato per il cloud di parole nella dashboard

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocsentimentdailytopickeyword` |
| Display name | Parola chiave argomento giornaliero valutazione |
| Display (plural) | Parola chiave argomento giornaliero valutazione |
| Schema name | `msdyn_ocsentimentdailytopickeyword` |
| Entity set (Web API) | `msdyn_ocsentimentdailytopickeywords` |
| Primary id attribute | `msdyn_ocsentimentdailytopickeywordid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocsentimentdailytopickeywords?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocsentimentdailytopickeywords(<guid>)
POST /api/data/v9.2/msdyn_ocsentimentdailytopickeywords
PATCH /api/data/v9.2/msdyn_ocsentimentdailytopickeywords(<guid>)
DELETE /api/data/v9.2/msdyn_ocsentimentdailytopickeywords(<guid>)
```

## Attributes

Writable: **15** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_dailytopicid`, `msdyn_keywords`, `msdyn_name`, `msdyn_ocsentimentdailytopickeywordid`, `msdyn_weeklyid`, `msdyn_weeklytopicid`, `msdyn_weeklytopicname`, `msdyn_wordfrequency`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_ocsentimentdailytopickeyword_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocsentimentdailytopickeyword_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocsentimentdailytopickeyword_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocsentimentdailytopickeyword_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_ocsentimentdailytopickeyword` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_ocsentimentdailytopickeyword` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_ocsentimentdailytopickeyword` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_ocsentimentdailytopickeyword` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopickeyword_dailytopicid` | [msdyn_ocsentimentdailytopic](msdyn_ocsentimentdailytopic.md) | `msdyn_dailytopicid` | `msdyn_dailytopicid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocsentimentdailytopickeyword_SyncErrors` | [msdyn_ocsentimentdailytopickeyword](msdyn_ocsentimentdailytopickeyword.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsentimentdailytopickeyword` |
| `msdyn_ocsentimentdailytopickeyword_DuplicateMatchingRecord` | [msdyn_ocsentimentdailytopickeyword](msdyn_ocsentimentdailytopickeyword.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_ocsentimentdailytopickeyword` |
| `msdyn_ocsentimentdailytopickeyword_DuplicateBaseRecord` | [msdyn_ocsentimentdailytopickeyword](msdyn_ocsentimentdailytopickeyword.md) | `baserecordid` | `baserecordid_msdyn_ocsentimentdailytopickeyword` |
| `msdyn_ocsentimentdailytopickeyword_AsyncOperations` | [msdyn_ocsentimentdailytopickeyword](msdyn_ocsentimentdailytopickeyword.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsentimentdailytopickeyword` |
| `msdyn_ocsentimentdailytopickeyword_MailboxTrackingFolders` | [msdyn_ocsentimentdailytopickeyword](msdyn_ocsentimentdailytopickeyword.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsentimentdailytopickeyword` |
| `msdyn_ocsentimentdailytopickeyword_UserEntityInstanceDatas` | [msdyn_ocsentimentdailytopickeyword](msdyn_ocsentimentdailytopickeyword.md) | `objectid` | `objectid_msdyn_ocsentimentdailytopickeyword` |
| `msdyn_ocsentimentdailytopickeyword_ProcessSession` | [msdyn_ocsentimentdailytopickeyword](msdyn_ocsentimentdailytopickeyword.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsentimentdailytopickeyword` |
| `msdyn_ocsentimentdailytopickeyword_BulkDeleteFailures` | [msdyn_ocsentimentdailytopickeyword](msdyn_ocsentimentdailytopickeyword.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsentimentdailytopickeyword` |
| `msdyn_ocsentimentdailytopickeyword_PrincipalObjectAttributeAccesses` | [msdyn_ocsentimentdailytopickeyword](msdyn_ocsentimentdailytopickeyword.md) | `objectid` | `objectid_msdyn_ocsentimentdailytopickeyword` |


## Source

Generated from [msdyn_ocsentimentdailytopickeyword (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ocsentimentdailytopickeyword')) on 2026-05-07.