---
logical: "msdyn_intentharvesting_proposedintent"
display: "Finalità proposta raccolta finalità"
entitySetName: "msdyn_intentharvesting_proposedintents"
primaryId: "msdyn_intentharvesting_proposedintentid"
primaryName: "msdyn_name"
tableType: "Elastic"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Finalità proposta raccolta finalità

Acquisisce la finalità del linguaggio naturale univoco proposta

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_intentharvesting_proposedintent` |
| Display name | Finalità proposta raccolta finalità |
| Display (plural) | Finalità proposte raccolta finalità |
| Schema name | `msdyn_intentharvesting_proposedintent` |
| Entity set (Web API) | `msdyn_intentharvesting_proposedintents` |
| Primary id attribute | `msdyn_intentharvesting_proposedintentid` |
| Primary name attribute | `msdyn_name` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_intentharvesting_proposedintents?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_intentharvesting_proposedintents(<guid>)
POST /api/data/v9.2/msdyn_intentharvesting_proposedintents
PATCH /api/data/v9.2/msdyn_intentharvesting_proposedintents(<guid>)
DELETE /api/data/v9.2/msdyn_intentharvesting_proposedintents(<guid>)
```

## Attributes

Writable: **22** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_description`, `msdyn_harvestingsource`, `msdyn_intentattributes`, `msdyn_intententities`, `msdyn_intentfamilyid`, `msdyn_intentharvesting_batchjobstatusid`, `msdyn_intentharvesting_proposedintentid`, `msdyn_intentid`, `msdyn_intentstring`, `msdyn_isgroup`, `msdyn_name`, `msdyn_occurrencecount`, `msdyn_occurrencecount_last12months`, `msdyn_occurrencecount_last30days`, `msdyn_parentgroupintentid`, `msdyn_reviewstate`, `msdyn_statecode`, `overriddencreatedon`, `ownerid`, `partitionid`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_intentharvesting_proposedintent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_intentharvesting_proposedintent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_intentharvesting_proposedintent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_intentharvesting_proposedintent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_intentharvesting_proposedintent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_intentharvesting_proposedintent` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_intentharvesting_proposedintent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_intentharvesting_proposedintent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_intentharvesting_proposedintent_batchjobstatusid` | [msdyn_intentharvesting_batchjobstatus](msdyn_intentharvesting_batchjobstatus.md) | `msdyn_intentharvesting_batchjobstatusid` | `msdyn_intentharvesting_batchjobstatusid` |
| `msdyn_intentharvesting_proposedintent_intentfamilyid` | [msdyn_intentfamily](msdyn_intentfamily.md) | `msdyn_intentfamilyid` | `msdyn_intentfamilyid` |



## Source

Generated from [msdyn_intentharvesting_proposedintent (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_intentharvesting_proposedintent')) on 2026-05-07.