---
logical: "msdyn_rawinsight"
display: "msdyn_rawinsight"
entitySetName: "msdyn_rawinsights"
primaryId: "msdyn_rawinsightid"
primaryName: "msdyn_name"
tableType: "Elastic"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_rawinsight

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_rawinsight` |
| Display name | msdyn_rawinsight |
| Display (plural) | msdyn_rawinsights |
| Schema name | `msdyn_rawinsight` |
| Entity set (Web API) | `msdyn_rawinsights` |
| Primary id attribute | `msdyn_rawinsightid` |
| Primary name attribute | `msdyn_name` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_rawinsights?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_rawinsights(<guid>)
POST /api/data/v9.2/msdyn_rawinsights
PATCH /api/data/v9.2/msdyn_rawinsights(<guid>)
DELETE /api/data/v9.2/msdyn_rawinsights(<guid>)
```

## Attributes

Writable: **21** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_audienceaccess`, `msdyn_dataformatversion`, `msdyn_externalcrmorgid`, `msdyn_insightlocale`, `msdyn_insightsdata`, `msdyn_isInsightInOriginalLocale`, `msdyn_metadata`, `msdyn_name`, `msdyn_rawinsightid`, `msdyn_rowsize`, `msdyn_sourceeventgroup`, `msdyn_sourceeventtype`, `msdyn_sourcegroupid`, `msdyn_sourceid`, `msdyn_sourcetimestamp`, `msdyn_targets`, `overriddencreatedon`, `ownerid`, `partitionid`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_rawinsight_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_rawinsight_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_rawinsight_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_rawinsight_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_rawinsight` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_rawinsight` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_rawinsight` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_rawinsight` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |



## Source

Generated from [msdyn_rawinsight (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_rawinsight')) on 2026-05-07.