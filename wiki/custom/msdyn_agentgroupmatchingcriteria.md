---
logical: "msdyn_agentgroupmatchingcriteria"
display: "Criteri di corrispondenza gruppo di agenti"
entitySetName: "msdyn_agentgroupmatchingcriterias"
primaryId: "msdyn_agentgroupmatchingcriteriaid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Criteri di corrispondenza gruppo di agenti

Contiene criteri di corrispondenza dei gruppi di agenti

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_agentgroupmatchingcriteria` |
| Display name | Criteri di corrispondenza gruppo di agenti |
| Display (plural) | Criteri di corrispondenza gruppo di agenti |
| Schema name | `msdyn_agentgroupmatchingcriteria` |
| Entity set (Web API) | `msdyn_agentgroupmatchingcriterias` |
| Primary id attribute | `msdyn_agentgroupmatchingcriteriaid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_agentgroupmatchingcriterias?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_agentgroupmatchingcriterias(<guid>)
POST /api/data/v9.2/msdyn_agentgroupmatchingcriterias
PATCH /api/data/v9.2/msdyn_agentgroupmatchingcriterias(<guid>)
DELETE /api/data/v9.2/msdyn_agentgroupmatchingcriterias(<guid>)
```

## Attributes

Writable: **12** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_agentgroupid`, `msdyn_agentgroupmatchingcriteriaid`, `msdyn_matchingcriteriaid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_agentgroupmatchingcriteria_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_agentgroupmatchingcriteria_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_agentgroupmatchingcriteria_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_agentgroupmatchingcriteria_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_agentgroupmatchingcriteria` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_agentgroupmatchingcriteria` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_agentgroupmatchingcriteria` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_agentgroupmatchingcriteria` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_agentgroupmatchingcriteria_agentgroupid_msdyn_agentgroup` | [msdyn_agentgroup](msdyn_agentgroup.md) | `msdyn_agentgroupid` | `msdyn_agentgroupid` |
| `msdyn_agentgroupmatchingcriteria_matchingcriteriaid_msdyn_matchingcriteria` | [msdyn_matchingcriteria](msdyn_matchingcriteria.md) | `msdyn_matchingcriteriaid` | `msdyn_matchingcriteriaid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_agentgroupmatchingcriteria_SyncErrors` | [msdyn_agentgroupmatchingcriteria](msdyn_agentgroupmatchingcriteria.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentgroupmatchingcriteria` |
| `msdyn_agentgroupmatchingcriteria_DuplicateMatchingRecord` | [msdyn_agentgroupmatchingcriteria](msdyn_agentgroupmatchingcriteria.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_agentgroupmatchingcriteria` |
| `msdyn_agentgroupmatchingcriteria_DuplicateBaseRecord` | [msdyn_agentgroupmatchingcriteria](msdyn_agentgroupmatchingcriteria.md) | `baserecordid` | `baserecordid_msdyn_agentgroupmatchingcriteria` |
| `msdyn_agentgroupmatchingcriteria_AsyncOperations` | [msdyn_agentgroupmatchingcriteria](msdyn_agentgroupmatchingcriteria.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentgroupmatchingcriteria` |
| `msdyn_agentgroupmatchingcriteria_MailboxTrackingFolders` | [msdyn_agentgroupmatchingcriteria](msdyn_agentgroupmatchingcriteria.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentgroupmatchingcriteria` |
| `msdyn_agentgroupmatchingcriteria_UserEntityInstanceDatas` | [msdyn_agentgroupmatchingcriteria](msdyn_agentgroupmatchingcriteria.md) | `objectid` | `objectid_msdyn_agentgroupmatchingcriteria` |
| `msdyn_agentgroupmatchingcriteria_ProcessSession` | [msdyn_agentgroupmatchingcriteria](msdyn_agentgroupmatchingcriteria.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentgroupmatchingcriteria` |
| `msdyn_agentgroupmatchingcriteria_BulkDeleteFailures` | [msdyn_agentgroupmatchingcriteria](msdyn_agentgroupmatchingcriteria.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentgroupmatchingcriteria` |
| `msdyn_agentgroupmatchingcriteria_PrincipalObjectAttributeAccesses` | [msdyn_agentgroupmatchingcriteria](msdyn_agentgroupmatchingcriteria.md) | `objectid` | `objectid_msdyn_agentgroupmatchingcriteria` |


## Source

Generated from [msdyn_agentgroupmatchingcriteria (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_agentgroupmatchingcriteria')) on 2026-05-07.