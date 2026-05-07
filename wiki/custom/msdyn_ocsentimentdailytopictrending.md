---
logical: "msdyn_ocsentimentdailytopictrending"
display: "Tendenza argomento giornaliero valutazione"
entitySetName: "msdyn_ocsentimentdailytopictrendings"
primaryId: "msdyn_ocsentimentdailytopictrendingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Tendenza argomento giornaliero valutazione

1. Archivia le informazioni sul mapping dell'argomento giornaliero
2. Utilizzato per la visualizzazione della dashboard

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocsentimentdailytopictrending` |
| Display name | Tendenza argomento giornaliero valutazione |
| Display (plural) | Tendenza argomento giornaliero valutazione |
| Schema name | `msdyn_ocsentimentdailytopictrending` |
| Entity set (Web API) | `msdyn_ocsentimentdailytopictrendings` |
| Primary id attribute | `msdyn_ocsentimentdailytopictrendingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocsentimentdailytopictrendings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocsentimentdailytopictrendings(<guid>)
POST /api/data/v9.2/msdyn_ocsentimentdailytopictrendings
PATCH /api/data/v9.2/msdyn_ocsentimentdailytopictrendings(<guid>)
DELETE /api/data/v9.2/msdyn_ocsentimentdailytopictrendings(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_basetopicid`, `msdyn_dailytopicid`, `msdyn_name`, `msdyn_ocsentimentdailytopictrendingid`, `msdyn_similarityscore`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_ocsentimentdailytopictrending_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocsentimentdailytopictrending_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocsentimentdailytopictrending_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocsentimentdailytopictrending_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_ocsentimentdailytopictrending` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_ocsentimentdailytopictrending` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_ocsentimentdailytopictrending` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_ocsentimentdailytopictrending` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopictrending_basetopicid` | [msdyn_ocsentimentdailytopic](msdyn_ocsentimentdailytopic.md) | `msdyn_basetopicid` | `msdyn_basetopicid` |
| `msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopictrending_dailytopicid` | [msdyn_ocsentimentdailytopic](msdyn_ocsentimentdailytopic.md) | `msdyn_dailytopicid` | `msdyn_dailytopicid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocsentimentdailytopictrending_SyncErrors` | [msdyn_ocsentimentdailytopictrending](msdyn_ocsentimentdailytopictrending.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsentimentdailytopictrending` |
| `msdyn_ocsentimentdailytopictrending_DuplicateMatchingRecord` | [msdyn_ocsentimentdailytopictrending](msdyn_ocsentimentdailytopictrending.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_ocsentimentdailytopictrending` |
| `msdyn_ocsentimentdailytopictrending_DuplicateBaseRecord` | [msdyn_ocsentimentdailytopictrending](msdyn_ocsentimentdailytopictrending.md) | `baserecordid` | `baserecordid_msdyn_ocsentimentdailytopictrending` |
| `msdyn_ocsentimentdailytopictrending_AsyncOperations` | [msdyn_ocsentimentdailytopictrending](msdyn_ocsentimentdailytopictrending.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsentimentdailytopictrending` |
| `msdyn_ocsentimentdailytopictrending_MailboxTrackingFolders` | [msdyn_ocsentimentdailytopictrending](msdyn_ocsentimentdailytopictrending.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsentimentdailytopictrending` |
| `msdyn_ocsentimentdailytopictrending_UserEntityInstanceDatas` | [msdyn_ocsentimentdailytopictrending](msdyn_ocsentimentdailytopictrending.md) | `objectid` | `objectid_msdyn_ocsentimentdailytopictrending` |
| `msdyn_ocsentimentdailytopictrending_ProcessSession` | [msdyn_ocsentimentdailytopictrending](msdyn_ocsentimentdailytopictrending.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsentimentdailytopictrending` |
| `msdyn_ocsentimentdailytopictrending_BulkDeleteFailures` | [msdyn_ocsentimentdailytopictrending](msdyn_ocsentimentdailytopictrending.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsentimentdailytopictrending` |
| `msdyn_ocsentimentdailytopictrending_PrincipalObjectAttributeAccesses` | [msdyn_ocsentimentdailytopictrending](msdyn_ocsentimentdailytopictrending.md) | `objectid` | `objectid_msdyn_ocsentimentdailytopictrending` |


## Source

Generated from [msdyn_ocsentimentdailytopictrending (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ocsentimentdailytopictrending')) on 2026-05-07.