---
logical: "msdyn_knowledgeinteractioninsight"
display: "Informazioni dettagliate sull'interazione della Knowledge base"
entitySetName: "msdyn_knowledgeinteractioninsights"
primaryId: "msdyn_knowledgeinteractioninsightid"
primaryName: "msdyn_interactiontype"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Informazioni dettagliate sull'interazione della Knowledge base

Informazioni dettagliate sull'interazione della Knowledge base

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_knowledgeinteractioninsight` |
| Display name | Informazioni dettagliate sull'interazione della Knowledge base |
| Display (plural) | Informazioni dettagliate sull'interazione della Knowledge Base |
| Schema name | `msdyn_knowledgeinteractioninsight` |
| Entity set (Web API) | `msdyn_knowledgeinteractioninsights` |
| Primary id attribute | `msdyn_knowledgeinteractioninsightid` |
| Primary name attribute | `msdyn_interactiontype` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_knowledgeinteractioninsights?$select=msdyn_interactiontype&$top=10
GET /api/data/v9.2/msdyn_knowledgeinteractioninsights(<guid>)
POST /api/data/v9.2/msdyn_knowledgeinteractioninsights
PATCH /api/data/v9.2/msdyn_knowledgeinteractioninsights(<guid>)
DELETE /api/data/v9.2/msdyn_knowledgeinteractioninsights(<guid>)
```

## Attributes

Writable: **16** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_articlerank`, `msdyn_articlerecordid`, `msdyn_articlerelevance`, `msdyn_interactioncontext`, `msdyn_interactiontype`, `msdyn_knowledgeinteractioninsightid`, `msdyn_knowledgeoperationid`, `msdyn_knowledgeoperationtype`, `msdyn_timestamp`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_knowledgeinteractioninsight_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_knowledgeinteractioninsight_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_knowledgeinteractioninsight_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_knowledgeinteractioninsight_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_knowledgeinteractioninsight` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_knowledgeinteractioninsight` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_knowledgeinteractioninsight` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_knowledgeinteractioninsight` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_knowledgeinteractioninsight_SyncErrors` | [msdyn_knowledgeinteractioninsight](msdyn_knowledgeinteractioninsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgeinteractioninsight` |
| `msdyn_knowledgeinteractioninsight_DuplicateMatchingRecord` | [msdyn_knowledgeinteractioninsight](msdyn_knowledgeinteractioninsight.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_knowledgeinteractioninsight` |
| `msdyn_knowledgeinteractioninsight_DuplicateBaseRecord` | [msdyn_knowledgeinteractioninsight](msdyn_knowledgeinteractioninsight.md) | `baserecordid` | `baserecordid_msdyn_knowledgeinteractioninsight` |
| `msdyn_knowledgeinteractioninsight_AsyncOperations` | [msdyn_knowledgeinteractioninsight](msdyn_knowledgeinteractioninsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgeinteractioninsight` |
| `msdyn_knowledgeinteractioninsight_MailboxTrackingFolders` | [msdyn_knowledgeinteractioninsight](msdyn_knowledgeinteractioninsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgeinteractioninsight` |
| `msdyn_knowledgeinteractioninsight_UserEntityInstanceDatas` | [msdyn_knowledgeinteractioninsight](msdyn_knowledgeinteractioninsight.md) | `objectid` | `objectid_msdyn_knowledgeinteractioninsight` |
| `msdyn_knowledgeinteractioninsight_ProcessSession` | [msdyn_knowledgeinteractioninsight](msdyn_knowledgeinteractioninsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgeinteractioninsight` |
| `msdyn_knowledgeinteractioninsight_BulkDeleteFailures` | [msdyn_knowledgeinteractioninsight](msdyn_knowledgeinteractioninsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgeinteractioninsight` |
| `msdyn_knowledgeinteractioninsight_PrincipalObjectAttributeAccesses` | [msdyn_knowledgeinteractioninsight](msdyn_knowledgeinteractioninsight.md) | `objectid` | `objectid_msdyn_knowledgeinteractioninsight` |


## Source

Generated from [msdyn_knowledgeinteractioninsight (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_knowledgeinteractioninsight')) on 2026-05-07.