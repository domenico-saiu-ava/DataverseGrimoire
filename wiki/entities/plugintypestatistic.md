---
logical: "plugintypestatistic"
display: "Plug-in Type Statistic"
entitySetName: "plugintypestatistics"
primaryId: "plugintypestatisticid"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Plug-in Type Statistic

Plug-in type statistic.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `plugintypestatistic` |
| Display name | Plug-in Type Statistic |
| Display (plural) | Plug-in Type Statistics |
| Schema name | `PluginTypeStatistic` |
| Entity set (Web API) | `plugintypestatistics` |
| Primary id attribute | `plugintypestatisticid` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/plugintypestatistics?$select=&$top=10
GET /api/data/v9.2/plugintypestatistics(<guid>)
POST /api/data/v9.2/plugintypestatistics
PATCH /api/data/v9.2/plugintypestatistics(<guid>)
DELETE /api/data/v9.2/plugintypestatistics(<guid>)
```

## Attributes

Writable: **0** · Read-only: **20**

### Read-only

`AverageExecuteTimeInMilliseconds`, `CrashContributionPercent`, `CrashCount`, `CrashPercent`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExecuteCount`, `FailureCount`, `FailurePercent`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `PluginTypeId`, `PluginTypeStatisticId`, `TerminateCpuContributionPercent`, `TerminateHandlesContributionPercent`, `TerminateMemoryContributionPercent`, `TerminateOtherContributionPercent`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `createdby_plugintypestatistic` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_plugintypestatisticbase_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_plugintypestatisticbase_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `modifiedby_plugintypestatistic` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `organization_plugintypestatistic` | [organization](organization.md) | `organizationid` | `organizationid` |
| `plugintype_plugintypestatistic` | [plugintype](plugintype.md) | `plugintypeid` | `plugintypeid` |



## Source

Generated from [plugintypestatistic.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/plugintypestatistic.md) on 2026-05-06.