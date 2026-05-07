---
logical: "ribbonmetadatatoprocess"
display: "Ribbon Metadata To Process"
entitySetName: "RibbonMetadataSetToProcess"
primaryId: "ribbonmetadatarowid"
tableType: "Standard"
ownership: "None"
---

# Ribbon Metadata To Process

Container for Ribbon Metadata To Process

## Identity

| Property | Value |
| --- | --- |
| Logical name | `ribbonmetadatatoprocess` |
| Display name | Ribbon Metadata To Process |
| Display (plural) | Ribbon Metadata Set To Process |
| Schema name | `RibbonMetadataToProcess` |
| Entity set (Web API) | `RibbonMetadataSetToProcess` |
| Primary id attribute | `ribbonmetadatarowid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/RibbonMetadataSetToProcess?$select=&$top=10
GET /api/data/v9.2/RibbonMetadataSetToProcess(<guid>)
POST /api/data/v9.2/RibbonMetadataSetToProcess
PATCH /api/data/v9.2/RibbonMetadataSetToProcess(<guid>)
DELETE /api/data/v9.2/RibbonMetadataSetToProcess(<guid>)
```

## Attributes

Writable: **8** · Read-only: **3**

### Writable

`EntityName`, `ExceptionMessage`, `IsDbUpdate`, `RetryCount`, `RibbonMetadataRowId`, `SolutionId`, `SolutionName`, `Status`

### Read-only

`CompletedOn`, `CreatedOn`, `ProcessedOn`

## Relationships




## Source

Generated from [ribbonmetadatatoprocess.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/ribbonmetadatatoprocess.md) on 2026-05-06.