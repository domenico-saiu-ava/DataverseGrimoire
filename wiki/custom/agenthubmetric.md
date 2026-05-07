---
logical: "agenthubmetric"
display: "Metrica hub agenti"
entitySetName: "agenthubmetrics"
primaryId: "agenthubmetricid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Metrica hub agenti

## Identity

| Property | Value |
| --- | --- |
| Logical name | `agenthubmetric` |
| Display name | Metrica hub agenti |
| Display (plural) | Metriche hub agenti |
| Schema name | `agenthubmetric` |
| Entity set (Web API) | `agenthubmetrics` |
| Primary id attribute | `agenthubmetricid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/agenthubmetrics?$select=name&$top=10
GET /api/data/v9.2/agenthubmetrics(<guid>)
POST /api/data/v9.2/agenthubmetrics
PATCH /api/data/v9.2/agenthubmetrics(<guid>)
DELETE /api/data/v9.2/agenthubmetrics(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`agenthubmetricid`, `aggregationmethod`, `aggregationquery`, `datasourceconfig`, `description`, `importsequencenumber`, `name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_agenthubmetric_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_agenthubmetric_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_agenthubmetric_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_agenthubmetric_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_agenthubmetric` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_agenthubmetric` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_agenthubmetric` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_agenthubmetric` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `agenthubmetric_SyncErrors` | [agenthubmetric](agenthubmetric.md) | `regardingobjectid` | `regardingobjectid_agenthubmetric` |
| `agenthubmetric_DuplicateMatchingRecord` | [agenthubmetric](agenthubmetric.md) | `duplicaterecordid` | `duplicaterecordid_agenthubmetric` |
| `agenthubmetric_DuplicateBaseRecord` | [agenthubmetric](agenthubmetric.md) | `baserecordid` | `baserecordid_agenthubmetric` |
| `agenthubmetric_AsyncOperations` | [agenthubmetric](agenthubmetric.md) | `regardingobjectid` | `regardingobjectid_agenthubmetric` |
| `agenthubmetric_MailboxTrackingFolders` | [agenthubmetric](agenthubmetric.md) | `regardingobjectid` | `regardingobjectid_agenthubmetric` |
| `agenthubmetric_UserEntityInstanceDatas` | [agenthubmetric](agenthubmetric.md) | `objectid` | `objectid_agenthubmetric` |
| `agenthubmetric_ProcessSession` | [agenthubmetric](agenthubmetric.md) | `regardingobjectid` | `regardingobjectid_agenthubmetric` |
| `agenthubmetric_BulkDeleteFailures` | [agenthubmetric](agenthubmetric.md) | `regardingobjectid` | `regardingobjectid_agenthubmetric` |
| `agenthubmetric_PrincipalObjectAttributeAccesses` | [agenthubmetric](agenthubmetric.md) | `objectid` | `objectid_agenthubmetric` |
| `agenthubgoal_metricid_agenthubmetric` | [agenthubmetric](agenthubmetric.md) | `metricid` | `metricid` |


## Source

Generated from [agenthubmetric (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='agenthubmetric')) on 2026-05-07.