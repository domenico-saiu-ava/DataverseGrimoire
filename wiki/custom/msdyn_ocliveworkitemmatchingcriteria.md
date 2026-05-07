---
logical: "msdyn_ocliveworkitemmatchingcriteria"
display: "Criteri di corrispondenza conversazione"
entitySetName: "msdyn_ocliveworkitemmatchingcriterias"
primaryId: "msdyn_ocliveworkitemmatchingcriteriaid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Criteri di corrispondenza conversazione

Contiene criteri di corrispondenza per le conversazioni

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocliveworkitemmatchingcriteria` |
| Display name | Criteri di corrispondenza conversazione |
| Display (plural) | Criteri di corrispondenza conversazione |
| Schema name | `msdyn_ocliveworkitemmatchingcriteria` |
| Entity set (Web API) | `msdyn_ocliveworkitemmatchingcriterias` |
| Primary id attribute | `msdyn_ocliveworkitemmatchingcriteriaid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocliveworkitemmatchingcriterias?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocliveworkitemmatchingcriterias(<guid>)
POST /api/data/v9.2/msdyn_ocliveworkitemmatchingcriterias
PATCH /api/data/v9.2/msdyn_ocliveworkitemmatchingcriterias(<guid>)
DELETE /api/data/v9.2/msdyn_ocliveworkitemmatchingcriterias(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_matchingcriteriaid`, `msdyn_name`, `msdyn_ocliveworkitemid`, `msdyn_ocliveworkitemmatchingcriteriaid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_ocliveworkitemmatchingcriteria_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocliveworkitemmatchingcriteria_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocliveworkitemmatchingcriteria_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocliveworkitemmatchingcriteria_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_ocliveworkitemmatchingcriteria` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_ocliveworkitemmatchingcriteria` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_ocliveworkitemmatchingcriteria` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_ocliveworkitemmatchingcriteria` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_ocliveworkitemmatchingcriteria_matchingcriteriaid_msdyn_matchingcriteria` | [msdyn_matchingcriteria](msdyn_matchingcriteria.md) | `msdyn_matchingcriteriaid` | `msdyn_matchingcriteriaid` |
| `msdyn_ocliveworkitemmatchingcriteria_ocliveworkitemid_msdyn_ocliveworkitem` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_ocliveworkitemid` | `msdyn_ocliveworkitemid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocliveworkitemmatchingcriteria_SyncErrors` | [msdyn_ocliveworkitemmatchingcriteria](msdyn_ocliveworkitemmatchingcriteria.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkitemmatchingcriteria` |
| `msdyn_ocliveworkitemmatchingcriteria_DuplicateMatchingRecord` | [msdyn_ocliveworkitemmatchingcriteria](msdyn_ocliveworkitemmatchingcriteria.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_ocliveworkitemmatchingcriteria` |
| `msdyn_ocliveworkitemmatchingcriteria_DuplicateBaseRecord` | [msdyn_ocliveworkitemmatchingcriteria](msdyn_ocliveworkitemmatchingcriteria.md) | `baserecordid` | `baserecordid_msdyn_ocliveworkitemmatchingcriteria` |
| `msdyn_ocliveworkitemmatchingcriteria_AsyncOperations` | [msdyn_ocliveworkitemmatchingcriteria](msdyn_ocliveworkitemmatchingcriteria.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkitemmatchingcriteria` |
| `msdyn_ocliveworkitemmatchingcriteria_MailboxTrackingFolders` | [msdyn_ocliveworkitemmatchingcriteria](msdyn_ocliveworkitemmatchingcriteria.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkitemmatchingcriteria` |
| `msdyn_ocliveworkitemmatchingcriteria_UserEntityInstanceDatas` | [msdyn_ocliveworkitemmatchingcriteria](msdyn_ocliveworkitemmatchingcriteria.md) | `objectid` | `objectid_msdyn_ocliveworkitemmatchingcriteria` |
| `msdyn_ocliveworkitemmatchingcriteria_ProcessSession` | [msdyn_ocliveworkitemmatchingcriteria](msdyn_ocliveworkitemmatchingcriteria.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkitemmatchingcriteria` |
| `msdyn_ocliveworkitemmatchingcriteria_BulkDeleteFailures` | [msdyn_ocliveworkitemmatchingcriteria](msdyn_ocliveworkitemmatchingcriteria.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkitemmatchingcriteria` |
| `msdyn_ocliveworkitemmatchingcriteria_PrincipalObjectAttributeAccesses` | [msdyn_ocliveworkitemmatchingcriteria](msdyn_ocliveworkitemmatchingcriteria.md) | `objectid` | `objectid_msdyn_ocliveworkitemmatchingcriteria` |


## Source

Generated from [msdyn_ocliveworkitemmatchingcriteria (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ocliveworkitemmatchingcriteria')) on 2026-05-07.