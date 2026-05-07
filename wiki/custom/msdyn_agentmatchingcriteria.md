---
logical: "msdyn_agentmatchingcriteria"
display: "Criteri di corrispondenza agente"
entitySetName: "msdyn_agentmatchingcriterias"
primaryId: "msdyn_agentmatchingcriteriaid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Criteri di corrispondenza agente

Contiene criteri di corrispondenza per gli agenti

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_agentmatchingcriteria` |
| Display name | Criteri di corrispondenza agente |
| Display (plural) | Criteri di corrispondenza agente |
| Schema name | `msdyn_agentmatchingcriteria` |
| Entity set (Web API) | `msdyn_agentmatchingcriterias` |
| Primary id attribute | `msdyn_agentmatchingcriteriaid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_agentmatchingcriterias?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_agentmatchingcriterias(<guid>)
POST /api/data/v9.2/msdyn_agentmatchingcriterias
PATCH /api/data/v9.2/msdyn_agentmatchingcriterias(<guid>)
DELETE /api/data/v9.2/msdyn_agentmatchingcriterias(<guid>)
```

## Attributes

Writable: **12** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_agentmatchingcriteriaid`, `msdyn_matchingcriteriaid`, `msdyn_name`, `msdyn_systemuserid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_agentmatchingcriteria_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_agentmatchingcriteria_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_agentmatchingcriteria_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_agentmatchingcriteria_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_agentmatchingcriteria` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_agentmatchingcriteria` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_agentmatchingcriteria` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_agentmatchingcriteria` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_agentmatchingcriteria_matchingcriteriaid_msdyn_matchingcriteria` | [msdyn_matchingcriteria](msdyn_matchingcriteria.md) | `msdyn_matchingcriteriaid` | `msdyn_matchingcriteriaid` |
| `msdyn_agentmatchingcriteria_systemuserid_systemuser` | [systemuser](systemuser.md) | `msdyn_systemuserid` | `msdyn_systemuserid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_agentmatchingcriteria_SyncErrors` | [msdyn_agentmatchingcriteria](msdyn_agentmatchingcriteria.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentmatchingcriteria` |
| `msdyn_agentmatchingcriteria_DuplicateMatchingRecord` | [msdyn_agentmatchingcriteria](msdyn_agentmatchingcriteria.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_agentmatchingcriteria` |
| `msdyn_agentmatchingcriteria_DuplicateBaseRecord` | [msdyn_agentmatchingcriteria](msdyn_agentmatchingcriteria.md) | `baserecordid` | `baserecordid_msdyn_agentmatchingcriteria` |
| `msdyn_agentmatchingcriteria_AsyncOperations` | [msdyn_agentmatchingcriteria](msdyn_agentmatchingcriteria.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentmatchingcriteria` |
| `msdyn_agentmatchingcriteria_MailboxTrackingFolders` | [msdyn_agentmatchingcriteria](msdyn_agentmatchingcriteria.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentmatchingcriteria` |
| `msdyn_agentmatchingcriteria_UserEntityInstanceDatas` | [msdyn_agentmatchingcriteria](msdyn_agentmatchingcriteria.md) | `objectid` | `objectid_msdyn_agentmatchingcriteria` |
| `msdyn_agentmatchingcriteria_ProcessSession` | [msdyn_agentmatchingcriteria](msdyn_agentmatchingcriteria.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentmatchingcriteria` |
| `msdyn_agentmatchingcriteria_BulkDeleteFailures` | [msdyn_agentmatchingcriteria](msdyn_agentmatchingcriteria.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentmatchingcriteria` |
| `msdyn_agentmatchingcriteria_PrincipalObjectAttributeAccesses` | [msdyn_agentmatchingcriteria](msdyn_agentmatchingcriteria.md) | `objectid` | `objectid_msdyn_agentmatchingcriteria` |


## Source

Generated from [msdyn_agentmatchingcriteria (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_agentmatchingcriteria')) on 2026-05-07.