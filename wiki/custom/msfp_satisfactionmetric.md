---
logical: "msfp_satisfactionmetric"
display: "Metrica di soddisfazione di Customer Voice"
entitySetName: "msfp_satisfactionmetrics"
primaryId: "msfp_satisfactionmetricid"
primaryName: "msfp_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Metrica di soddisfazione di Customer Voice

Metrica di soddisfazione di Customer Voice definita per un progetto.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msfp_satisfactionmetric` |
| Display name | Metrica di soddisfazione di Customer Voice |
| Display (plural) | Metrica di soddisfazione di Customer Voice |
| Schema name | `msfp_satisfactionmetric` |
| Entity set (Web API) | `msfp_satisfactionmetrics` |
| Primary id attribute | `msfp_satisfactionmetricid` |
| Primary name attribute | `msfp_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msfp_satisfactionmetrics?$select=msfp_name&$top=10
GET /api/data/v9.2/msfp_satisfactionmetrics(<guid>)
POST /api/data/v9.2/msfp_satisfactionmetrics
PATCH /api/data/v9.2/msfp_satisfactionmetrics(<guid>)
DELETE /api/data/v9.2/msfp_satisfactionmetrics(<guid>)
```

## Attributes

Writable: **22** · Read-only: **10**

### Writable

`importsequencenumber`, `msfp_description`, `msfp_historicalcomputedvalue`, `msfp_issystemkpi`, `msfp_lastcomputedon`, `msfp_lastcomputedvalue`, `msfp_maximumvalue`, `msfp_minimumvalue`, `msfp_name`, `msfp_project`, `msfp_questions`, `msfp_satisfactionmetricid`, `msfp_status`, `msfp_threshold`, `msfp_type`, `msfp_versionnumber`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msfp_satisfactionmetric_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msfp_satisfactionmetric_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msfp_satisfactionmetric_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msfp_satisfactionmetric_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msfp_satisfactionmetric` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msfp_satisfactionmetric` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msfp_satisfactionmetric` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msfp_satisfactionmetric` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msfp_msfp_project_msfp_satisfactionmetric_project` | [msfp_project](msfp_project.md) | `msfp_project` | `msfp_project` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msfp_satisfactionmetricsurveymapping_satisfactionmetricid_msfp_satisfactionmetric` | [msfp_satisfactionmetric](msfp_satisfactionmetric.md) | `msfp_satisfactionmetricid` | `msfp_satisfactionmetricid` |
| `msfp_satisfactionmetric_SyncErrors` | [msfp_satisfactionmetric](msfp_satisfactionmetric.md) | `regardingobjectid` | `regardingobjectid_msfp_satisfactionmetric` |
| `msfp_satisfactionmetric_AsyncOperations` | [msfp_satisfactionmetric](msfp_satisfactionmetric.md) | `regardingobjectid` | `regardingobjectid_msfp_satisfactionmetric` |
| `msfp_satisfactionmetric_MailboxTrackingFolders` | [msfp_satisfactionmetric](msfp_satisfactionmetric.md) | `regardingobjectid` | `regardingobjectid_msfp_satisfactionmetric` |
| `msfp_satisfactionmetric_UserEntityInstanceDatas` | [msfp_satisfactionmetric](msfp_satisfactionmetric.md) | `objectid` | `objectid_msfp_satisfactionmetric` |
| `msfp_satisfactionmetric_ProcessSession` | [msfp_satisfactionmetric](msfp_satisfactionmetric.md) | `regardingobjectid` | `regardingobjectid_msfp_satisfactionmetric` |
| `msfp_satisfactionmetric_BulkDeleteFailures` | [msfp_satisfactionmetric](msfp_satisfactionmetric.md) | `regardingobjectid` | `regardingobjectid_msfp_satisfactionmetric` |
| `msfp_satisfactionmetric_PrincipalObjectAttributeAccesses` | [msfp_satisfactionmetric](msfp_satisfactionmetric.md) | `objectid` | `objectid_msfp_satisfactionmetric` |
| `msfp_msfp_satisfactionmetric_msfp_alertrule` | [msfp_satisfactionmetric](msfp_satisfactionmetric.md) | `msfp_satisfactionmetric` | `msfp_satisfactionmetric` |
| `msfp_msfp_satisfactionmetric_msfp_alert` | [msfp_satisfactionmetric](msfp_satisfactionmetric.md) | `msfp_satisfactionmetric` | `msfp_satisfactionmetric` |


## Source

Generated from [msfp_satisfactionmetric (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msfp_satisfactionmetric')) on 2026-05-07.