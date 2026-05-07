---
logical: "msdyn_leadintelligenceinsight"
display: "Lead Intelligence Insight"
entitySetName: "msdyn_leadintelligenceinsights"
primaryId: "msdyn_leadintelligenceinsightid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Lead Intelligence Insight

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_leadintelligenceinsight` |
| Display name | Lead Intelligence Insight |
| Display (plural) | Lead Intelligence Insights |
| Schema name | `msdyn_leadintelligenceinsight` |
| Entity set (Web API) | `msdyn_leadintelligenceinsights` |
| Primary id attribute | `msdyn_leadintelligenceinsightid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_leadintelligenceinsights?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_leadintelligenceinsights(<guid>)
POST /api/data/v9.2/msdyn_leadintelligenceinsights
PATCH /api/data/v9.2/msdyn_leadintelligenceinsights(<guid>)
DELETE /api/data/v9.2/msdyn_leadintelligenceinsights(<guid>)
```

## Attributes

Writable: **14** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_externalcrmorgid`, `msdyn_insightdata`, `msdyn_insighttype`, `msdyn_leadid`, `msdyn_leadintelligenceinsightid`, `msdyn_name`, `msdyn_schemaversion`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_leadintelligenceinsight_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_leadintelligenceinsight_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_leadintelligenceinsight_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_leadintelligenceinsight_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_leadintelligenceinsight` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_leadintelligenceinsight` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_leadintelligenceinsight` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_leadintelligenceinsight` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_leadintelligenceinsight_SyncErrors` | [msdyn_leadintelligenceinsight](msdyn_leadintelligenceinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_leadintelligenceinsight` |
| `msdyn_leadintelligenceinsight_DuplicateMatchingRecord` | [msdyn_leadintelligenceinsight](msdyn_leadintelligenceinsight.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_leadintelligenceinsight` |
| `msdyn_leadintelligenceinsight_DuplicateBaseRecord` | [msdyn_leadintelligenceinsight](msdyn_leadintelligenceinsight.md) | `baserecordid` | `baserecordid_msdyn_leadintelligenceinsight` |
| `msdyn_leadintelligenceinsight_AsyncOperations` | [msdyn_leadintelligenceinsight](msdyn_leadintelligenceinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_leadintelligenceinsight` |
| `msdyn_leadintelligenceinsight_MailboxTrackingFolders` | [msdyn_leadintelligenceinsight](msdyn_leadintelligenceinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_leadintelligenceinsight` |
| `msdyn_leadintelligenceinsight_UserEntityInstanceDatas` | [msdyn_leadintelligenceinsight](msdyn_leadintelligenceinsight.md) | `objectid` | `objectid_msdyn_leadintelligenceinsight` |
| `msdyn_leadintelligenceinsight_ProcessSession` | [msdyn_leadintelligenceinsight](msdyn_leadintelligenceinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_leadintelligenceinsight` |
| `msdyn_leadintelligenceinsight_BulkDeleteFailures` | [msdyn_leadintelligenceinsight](msdyn_leadintelligenceinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_leadintelligenceinsight` |
| `msdyn_leadintelligenceinsight_PrincipalObjectAttributeAccesses` | [msdyn_leadintelligenceinsight](msdyn_leadintelligenceinsight.md) | `objectid` | `objectid_msdyn_leadintelligenceinsight` |
| `msdyn_leadintelligenceinsightentitylink_leadintelligenceinsightId_msdyn_leadintelligenceinsight` | [msdyn_leadintelligenceinsight](msdyn_leadintelligenceinsight.md) | `msdyn_leadintelligenceinsightid` | `msdyn_leadintelligenceinsightId` |


## Source

Generated from [msdyn_leadintelligenceinsight (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_leadintelligenceinsight')) on 2026-05-07.