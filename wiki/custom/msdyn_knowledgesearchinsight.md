---
logical: "msdyn_knowledgesearchinsight"
display: "Informazioni dettagliate ricerca nella Knowledge Base"
entitySetName: "msdyn_knowledgesearchinsights"
primaryId: "msdyn_knowledgesearchinsightid"
primaryName: "msdyn_searchterm"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Informazioni dettagliate ricerca nella Knowledge Base

Informazioni dettagliate ricerca nella Knowledge Base

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_knowledgesearchinsight` |
| Display name | Informazioni dettagliate ricerca nella Knowledge Base |
| Display (plural) | Informazioni dettagliate ricerca nella Knowledge Base |
| Schema name | `msdyn_knowledgesearchinsight` |
| Entity set (Web API) | `msdyn_knowledgesearchinsights` |
| Primary id attribute | `msdyn_knowledgesearchinsightid` |
| Primary name attribute | `msdyn_searchterm` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_knowledgesearchinsights?$select=msdyn_searchterm&$top=10
GET /api/data/v9.2/msdyn_knowledgesearchinsights(<guid>)
POST /api/data/v9.2/msdyn_knowledgesearchinsights
PATCH /api/data/v9.2/msdyn_knowledgesearchinsights(<guid>)
DELETE /api/data/v9.2/msdyn_knowledgesearchinsights(<guid>)
```

## Attributes

Writable: **23** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_applicationname`, `msdyn_correlationid`, `msdyn_customcontrolid`, `msdyn_entityrecordid`, `msdyn_entitytype`, `msdyn_filters`, `msdyn_initiatedby`, `msdyn_knowledgesearchinsightid`, `msdyn_responsetime`, `msdyn_resultcount`, `msdyn_searchproviderid`, `msdyn_searchprovidername`, `msdyn_searchterm`, `msdyn_searchtype`, `msdyn_sortby`, `msdyn_timestamp`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_knowledgesearchinsight_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_knowledgesearchinsight_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_knowledgesearchinsight_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_knowledgesearchinsight_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_knowledgesearchinsight` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_knowledgesearchinsight` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_knowledgesearchinsight` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_knowledgesearchinsight` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_knowledgesearchinsight_SyncErrors` | [msdyn_knowledgesearchinsight](msdyn_knowledgesearchinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgesearchinsight` |
| `msdyn_knowledgesearchinsight_DuplicateMatchingRecord` | [msdyn_knowledgesearchinsight](msdyn_knowledgesearchinsight.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_knowledgesearchinsight` |
| `msdyn_knowledgesearchinsight_DuplicateBaseRecord` | [msdyn_knowledgesearchinsight](msdyn_knowledgesearchinsight.md) | `baserecordid` | `baserecordid_msdyn_knowledgesearchinsight` |
| `msdyn_knowledgesearchinsight_AsyncOperations` | [msdyn_knowledgesearchinsight](msdyn_knowledgesearchinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgesearchinsight` |
| `msdyn_knowledgesearchinsight_MailboxTrackingFolders` | [msdyn_knowledgesearchinsight](msdyn_knowledgesearchinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgesearchinsight` |
| `msdyn_knowledgesearchinsight_UserEntityInstanceDatas` | [msdyn_knowledgesearchinsight](msdyn_knowledgesearchinsight.md) | `objectid` | `objectid_msdyn_knowledgesearchinsight` |
| `msdyn_knowledgesearchinsight_ProcessSession` | [msdyn_knowledgesearchinsight](msdyn_knowledgesearchinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgesearchinsight` |
| `msdyn_knowledgesearchinsight_BulkDeleteFailures` | [msdyn_knowledgesearchinsight](msdyn_knowledgesearchinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgesearchinsight` |
| `msdyn_knowledgesearchinsight_PrincipalObjectAttributeAccesses` | [msdyn_knowledgesearchinsight](msdyn_knowledgesearchinsight.md) | `objectid` | `objectid_msdyn_knowledgesearchinsight` |


## Source

Generated from [msdyn_knowledgesearchinsight (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_knowledgesearchinsight')) on 2026-05-07.