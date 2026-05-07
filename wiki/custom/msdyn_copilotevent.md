---
logical: "msdyn_copilotevent"
display: "Evento Copilot"
entitySetName: "msdyn_copilotevents"
primaryId: "msdyn_copiloteventid"
primaryName: "msdyn_name"
tableType: "Elastic"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Evento Copilot

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_copilotevent` |
| Display name | Evento Copilot |
| Display (plural) | Eventi Copilot |
| Schema name | `msdyn_copilotevent` |
| Entity set (Web API) | `msdyn_copilotevents` |
| Primary id attribute | `msdyn_copiloteventid` |
| Primary name attribute | `msdyn_name` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_copilotevents?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_copilotevents(<guid>)
POST /api/data/v9.2/msdyn_copilotevents
PATCH /api/data/v9.2/msdyn_copilotevents(<guid>)
DELETE /api/data/v9.2/msdyn_copilotevents(<guid>)
```

## Attributes

Writable: **16** · Read-only: **11**

### Writable

`importsequencenumber`, `msdyn_aiagent`, `msdyn_clienttimestamp`, `msdyn_copiloteventid`, `msdyn_interactioncontext`, `msdyn_interactionforid`, `msdyn_interactionforlogicalname`, `msdyn_interactiontype`, `msdyn_name`, `msdyn_scenariorequestid`, `msdyn_scenariotype`, `msdyn_verbatim`, `overriddencreatedon`, `ownerid`, `partitionid`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_interactiondata`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_copilotevent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_copilotevent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_copilotevent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_copilotevent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_copilotevent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_copilotevent` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_copilotevent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_copilotevent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `ElasticFileAttachment_msdyn_copilotevent_msdyn_interactiondata` | [elasticfileattachment](elasticfileattachment.md) | `msdyn_interactiondata` | `msdyn_interactiondata` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_copilotevent_ElasticFileAttachments` | [msdyn_copilotevent](msdyn_copilotevent.md) | `objectid` | `objectid_msdyn_copilotevent` |


## Source

Generated from [msdyn_copilotevent (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_copilotevent')) on 2026-05-07.