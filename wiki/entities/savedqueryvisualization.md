---
logical: "savedqueryvisualization"
display: "System Chart"
entitySetName: "savedqueryvisualizations"
primaryId: "savedqueryvisualizationid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# System Chart

System chart attached to an entity.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `savedqueryvisualization` |
| Display name | System Chart |
| Display (plural) | System Charts |
| Schema name | `SavedQueryVisualization` |
| Entity set (Web API) | `savedqueryvisualizations` |
| Primary id attribute | `savedqueryvisualizationid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/savedqueryvisualizations?$select=name&$top=10
GET /api/data/v9.2/savedqueryvisualizations(<guid>)
POST /api/data/v9.2/savedqueryvisualizations
PATCH /api/data/v9.2/savedqueryvisualizations(<guid>)
DELETE /api/data/v9.2/savedqueryvisualizations(<guid>)
```

## Attributes

Writable: **14** · Read-only: **14**

### Writable

`CanBeDeleted`, `ChartType`, `DataDescription`, `Description`, `EnableCrossPartition`, `IntroducedVersion`, `IsCustomizable`, `IsDefault`, `Name`, `PresentationDescription`, `PrimaryEntityTypeCode`, `SavedQueryVisualizationId`, `Type`, `WebResourceId`

### Read-only

`ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SavedQueryVisualizationIdUnique`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_savedqueryvisualizationbase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_savedqueryvisualizationbase_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_savedqueryvisualizationbase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_savedqueryvisualizationbase_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_saved_query_visualizations` | [organization](organization.md) | `organizationid` | `organizationid` |
| `webresource_savedqueryvisualizations` | [webresource](webresource.md) | `webresourceid` | `webresourceid` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `SavedQueryVisualization_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [savedqueryvisualization.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/savedqueryvisualization.md) on 2026-05-06.