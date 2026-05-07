---
logical: "msdyn_meetingprepinsight"
display: "Meeting Prep Insights"
entitySetName: "msdyn_meetingprepinsights"
primaryId: "msdyn_meetingprepinsightid"
primaryName: "msdyn_name"
tableType: "Elastic"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Meeting Prep Insights

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_meetingprepinsight` |
| Display name | Meeting Prep Insights |
| Display (plural) | Meeting Prep Insights |
| Schema name | `msdyn_meetingprepinsight` |
| Entity set (Web API) | `msdyn_meetingprepinsights` |
| Primary id attribute | `msdyn_meetingprepinsightid` |
| Primary name attribute | `msdyn_name` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_meetingprepinsights?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_meetingprepinsights(<guid>)
POST /api/data/v9.2/msdyn_meetingprepinsights
PATCH /api/data/v9.2/msdyn_meetingprepinsights(<guid>)
DELETE /api/data/v9.2/msdyn_meetingprepinsights(<guid>)
```

## Attributes

Writable: **17** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_calendareventid`, `msdyn_dataformatversion`, `msdyn_eventendttime`, `msdyn_eventstarttime`, `msdyn_externalcrmorgid`, `msdyn_icaluid`, `msdyn_insightlocale`, `msdyn_insightsdata`, `msdyn_insightspreview`, `msdyn_meetingprepinsightid`, `msdyn_metadata`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `partitionid`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_meetingprepinsight_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_meetingprepinsight_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_meetingprepinsight_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_meetingprepinsight_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_meetingprepinsight` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_meetingprepinsight` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_meetingprepinsight` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_meetingprepinsight` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |



## Source

Generated from [msdyn_meetingprepinsight (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_meetingprepinsight')) on 2026-05-07.