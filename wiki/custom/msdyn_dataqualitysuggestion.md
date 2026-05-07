---
logical: "msdyn_dataqualitysuggestion"
display: "Suggerimento qualità dati"
entitySetName: "msdyn_dataqualitysuggestions"
primaryId: "msdyn_dataqualitysuggestionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Suggerimento qualità dati

Suggerimento generato dall'Agente di qualità dati di vendita

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dataqualitysuggestion` |
| Display name | Suggerimento qualità dati |
| Display (plural) | Suggerimenti qualità dati |
| Schema name | `msdyn_dataqualitysuggestion` |
| Entity set (Web API) | `msdyn_dataqualitysuggestions` |
| Primary id attribute | `msdyn_dataqualitysuggestionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dataqualitysuggestions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_dataqualitysuggestions(<guid>)
POST /api/data/v9.2/msdyn_dataqualitysuggestions
PATCH /api/data/v9.2/msdyn_dataqualitysuggestions(<guid>)
DELETE /api/data/v9.2/msdyn_dataqualitysuggestions(<guid>)
```

## Attributes

Writable: **21** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_agentmode`, `msdyn_confidence`, `msdyn_dataqualitysuggestionid`, `msdyn_name`, `msdyn_reason`, `msdyn_regardingid`, `msdyn_regardingtype`, `msdyn_relatedid`, `msdyn_relatedrelationship`, `msdyn_relatedtype`, `msdyn_sourceid`, `msdyn_suggestionvalue`, `msdyn_target`, `msdyn_type`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dataqualitysuggestion_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dataqualitysuggestion_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dataqualitysuggestion_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dataqualitysuggestion_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_dataqualitysuggestion` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_dataqualitysuggestion` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_dataqualitysuggestion` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_dataqualitysuggestion` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_dataqualitysuggestion_sourceid_msdyn_dataqualitysource` | [msdyn_dataqualitysource](msdyn_dataqualitysource.md) | `msdyn_sourceid` | `msdyn_sourceid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dataqualitysuggestion_SyncErrors` | [msdyn_dataqualitysuggestion](msdyn_dataqualitysuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataqualitysuggestion` |
| `msdyn_dataqualitysuggestion_DuplicateMatchingRecord` | [msdyn_dataqualitysuggestion](msdyn_dataqualitysuggestion.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_dataqualitysuggestion` |
| `msdyn_dataqualitysuggestion_DuplicateBaseRecord` | [msdyn_dataqualitysuggestion](msdyn_dataqualitysuggestion.md) | `baserecordid` | `baserecordid_msdyn_dataqualitysuggestion` |
| `msdyn_dataqualitysuggestion_AsyncOperations` | [msdyn_dataqualitysuggestion](msdyn_dataqualitysuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataqualitysuggestion` |
| `msdyn_dataqualitysuggestion_MailboxTrackingFolders` | [msdyn_dataqualitysuggestion](msdyn_dataqualitysuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataqualitysuggestion` |
| `msdyn_dataqualitysuggestion_UserEntityInstanceDatas` | [msdyn_dataqualitysuggestion](msdyn_dataqualitysuggestion.md) | `objectid` | `objectid_msdyn_dataqualitysuggestion` |
| `msdyn_dataqualitysuggestion_ProcessSession` | [msdyn_dataqualitysuggestion](msdyn_dataqualitysuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataqualitysuggestion` |
| `msdyn_dataqualitysuggestion_BulkDeleteFailures` | [msdyn_dataqualitysuggestion](msdyn_dataqualitysuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataqualitysuggestion` |
| `msdyn_dataqualitysuggestion_PrincipalObjectAttributeAccesses` | [msdyn_dataqualitysuggestion](msdyn_dataqualitysuggestion.md) | `objectid` | `objectid_msdyn_dataqualitysuggestion` |
| `msdyn_dataqualitylog_suggestionid_msdyn_dataqualitysuggestion` | [msdyn_dataqualitysuggestion](msdyn_dataqualitysuggestion.md) | `msdyn_suggestionid` | `msdyn_suggestionid` |


## Source

Generated from [msdyn_dataqualitysuggestion (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_dataqualitysuggestion')) on 2026-05-07.