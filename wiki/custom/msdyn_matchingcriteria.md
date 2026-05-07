---
logical: "msdyn_matchingcriteria"
display: "Criteri di corrispondenza"
entitySetName: "msdyn_matchingcriterias"
primaryId: "msdyn_matchingcriteriaid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Criteri di corrispondenza

In questa entità vengono archiviati i valori master dei criteri di corrispondenza personalizzati

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_matchingcriteria` |
| Display name | Criteri di corrispondenza |
| Display (plural) | Criteri di corrispondenza |
| Schema name | `msdyn_matchingcriteria` |
| Entity set (Web API) | `msdyn_matchingcriterias` |
| Primary id attribute | `msdyn_matchingcriteriaid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_matchingcriterias?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_matchingcriterias(<guid>)
POST /api/data/v9.2/msdyn_matchingcriterias
PATCH /api/data/v9.2/msdyn_matchingcriterias(<guid>)
DELETE /api/data/v9.2/msdyn_matchingcriterias(<guid>)
```

## Attributes

Writable: **12** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_criteriatype`, `msdyn_matchingcriteriaid`, `msdyn_name`, `msdyn_parentcriteriaid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_matchingcriteria_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_matchingcriteria_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_matchingcriteria_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_matchingcriteria_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_matchingcriteria` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_matchingcriteria` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_matchingcriteria` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_matchingcriteria` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_matchingcriteria_parentcriteriaid_msdyn_matchingcriteria` | [msdyn_matchingcriteria](msdyn_matchingcriteria.md) | `msdyn_parentcriteriaid` | `msdyn_parentcriteriaid` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_matchingcriteria_SyncErrors` | [msdyn_matchingcriteria](msdyn_matchingcriteria.md) | `regardingobjectid` | `regardingobjectid_msdyn_matchingcriteria` |
| `msdyn_matchingcriteria_AsyncOperations` | [msdyn_matchingcriteria](msdyn_matchingcriteria.md) | `regardingobjectid` | `regardingobjectid_msdyn_matchingcriteria` |
| `msdyn_matchingcriteria_MailboxTrackingFolders` | [msdyn_matchingcriteria](msdyn_matchingcriteria.md) | `regardingobjectid` | `regardingobjectid_msdyn_matchingcriteria` |
| `msdyn_matchingcriteria_UserEntityInstanceDatas` | [msdyn_matchingcriteria](msdyn_matchingcriteria.md) | `objectid` | `objectid_msdyn_matchingcriteria` |
| `msdyn_matchingcriteria_ProcessSession` | [msdyn_matchingcriteria](msdyn_matchingcriteria.md) | `regardingobjectid` | `regardingobjectid_msdyn_matchingcriteria` |
| `msdyn_matchingcriteria_BulkDeleteFailures` | [msdyn_matchingcriteria](msdyn_matchingcriteria.md) | `regardingobjectid` | `regardingobjectid_msdyn_matchingcriteria` |
| `msdyn_matchingcriteria_PrincipalObjectAttributeAccesses` | [msdyn_matchingcriteria](msdyn_matchingcriteria.md) | `objectid` | `objectid_msdyn_matchingcriteria` |
| `msdyn_agentgroupmatchingcriteria_matchingcriteriaid_msdyn_matchingcriteria` | [msdyn_matchingcriteria](msdyn_matchingcriteria.md) | `msdyn_matchingcriteriaid` | `msdyn_matchingcriteriaid` |
| `msdyn_agentmatchingcriteria_matchingcriteriaid_msdyn_matchingcriteria` | [msdyn_matchingcriteria](msdyn_matchingcriteria.md) | `msdyn_matchingcriteriaid` | `msdyn_matchingcriteriaid` |
| `msdyn_matchingcriteria_parentcriteriaid_msdyn_matchingcriteria` | [msdyn_matchingcriteria](msdyn_matchingcriteria.md) | `msdyn_parentcriteriaid` | `msdyn_parentcriteriaid` |
| `msdyn_ocliveworkitemmatchingcriteria_matchingcriteriaid_msdyn_matchingcriteria` | [msdyn_matchingcriteria](msdyn_matchingcriteria.md) | `msdyn_matchingcriteriaid` | `msdyn_matchingcriteriaid` |


## Source

Generated from [msdyn_matchingcriteria (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_matchingcriteria')) on 2026-05-07.