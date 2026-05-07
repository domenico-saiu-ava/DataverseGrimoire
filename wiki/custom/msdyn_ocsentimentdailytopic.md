---
logical: "msdyn_ocsentimentdailytopic"
display: "Argomento giornaliero valutazione"
entitySetName: "msdyn_ocsentimentdailytopics"
primaryId: "msdyn_ocsentimentdailytopicid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Argomento giornaliero valutazione

1. Archivia le proprietà relative a ogni cluster di argomenti
2. Utilizzato per la visualizzazione della dashboard (come esempio dell'argomento) e il calcolo per il mapping di argomenti

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocsentimentdailytopic` |
| Display name | Argomento giornaliero valutazione |
| Display (plural) | Argomento giornaliero valutazione |
| Schema name | `msdyn_ocsentimentdailytopic` |
| Entity set (Web API) | `msdyn_ocsentimentdailytopics` |
| Primary id attribute | `msdyn_ocsentimentdailytopicid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocsentimentdailytopics?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocsentimentdailytopics(<guid>)
POST /api/data/v9.2/msdyn_ocsentimentdailytopics
PATCH /api/data/v9.2/msdyn_ocsentimentdailytopics(<guid>)
DELETE /api/data/v9.2/msdyn_ocsentimentdailytopics(<guid>)
```

## Attributes

Writable: **20** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_conversationcount`, `msdyn_conversationexample`, `msdyn_name`, `msdyn_ocsentimentdailytopicid`, `msdyn_sentimentdriverintradayweightimpact`, `msdyn_sentimentscore`, `msdyn_topiccountpercentage`, `msdyn_topicdate`, `msdyn_topicindex`, `msdyn_topicname`, `msdyn_weeklyid`, `msdyn_weeklytopicid`, `msdyn_weeklytopicname`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_ocsentimentdailytopic_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocsentimentdailytopic_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocsentimentdailytopic_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocsentimentdailytopic_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_ocsentimentdailytopic` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_ocsentimentdailytopic` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_ocsentimentdailytopic` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_ocsentimentdailytopic` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocsentimentdailytopic_SyncErrors` | [msdyn_ocsentimentdailytopic](msdyn_ocsentimentdailytopic.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsentimentdailytopic` |
| `msdyn_ocsentimentdailytopic_DuplicateMatchingRecord` | [msdyn_ocsentimentdailytopic](msdyn_ocsentimentdailytopic.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_ocsentimentdailytopic` |
| `msdyn_ocsentimentdailytopic_DuplicateBaseRecord` | [msdyn_ocsentimentdailytopic](msdyn_ocsentimentdailytopic.md) | `baserecordid` | `baserecordid_msdyn_ocsentimentdailytopic` |
| `msdyn_ocsentimentdailytopic_AsyncOperations` | [msdyn_ocsentimentdailytopic](msdyn_ocsentimentdailytopic.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsentimentdailytopic` |
| `msdyn_ocsentimentdailytopic_MailboxTrackingFolders` | [msdyn_ocsentimentdailytopic](msdyn_ocsentimentdailytopic.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsentimentdailytopic` |
| `msdyn_ocsentimentdailytopic_UserEntityInstanceDatas` | [msdyn_ocsentimentdailytopic](msdyn_ocsentimentdailytopic.md) | `objectid` | `objectid_msdyn_ocsentimentdailytopic` |
| `msdyn_ocsentimentdailytopic_ProcessSession` | [msdyn_ocsentimentdailytopic](msdyn_ocsentimentdailytopic.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsentimentdailytopic` |
| `msdyn_ocsentimentdailytopic_BulkDeleteFailures` | [msdyn_ocsentimentdailytopic](msdyn_ocsentimentdailytopic.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsentimentdailytopic` |
| `msdyn_ocsentimentdailytopic_PrincipalObjectAttributeAccesses` | [msdyn_ocsentimentdailytopic](msdyn_ocsentimentdailytopic.md) | `objectid` | `objectid_msdyn_ocsentimentdailytopic` |
| `msdyn_msdyn_ocsentimentdailytopic_msdyn_ocliveworkitem_dailytopicid` | [msdyn_ocsentimentdailytopic](msdyn_ocsentimentdailytopic.md) | `msdyn_dailytopicid` | `msdyn_dailytopicid_msdyn_ocliveworkitem` |
| `msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopickeyword_dailytopicid` | [msdyn_ocsentimentdailytopic](msdyn_ocsentimentdailytopic.md) | `msdyn_dailytopicid` | `msdyn_dailytopicid` |
| `msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopictrending_basetopicid` | [msdyn_ocsentimentdailytopic](msdyn_ocsentimentdailytopic.md) | `msdyn_basetopicid` | `msdyn_basetopicid` |
| `msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopictrending_dailytopicid` | [msdyn_ocsentimentdailytopic](msdyn_ocsentimentdailytopic.md) | `msdyn_dailytopicid` | `msdyn_dailytopicid` |


## Source

Generated from [msdyn_ocsentimentdailytopic (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ocsentimentdailytopic')) on 2026-05-07.