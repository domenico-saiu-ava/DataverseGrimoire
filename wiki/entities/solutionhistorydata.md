---
logical: "solutionhistorydata"
display: "SolutionHistoryData"
entitySetName: "solutionhistories"
primaryId: "solutionhistorydataid"
tableType: "Standard"
ownership: "None"
---

# SolutionHistoryData

solution history data

## Identity

| Property | Value |
| --- | --- |
| Logical name | `solutionhistorydata` |
| Display name | SolutionHistoryData |
| Display (plural) | SolutionHistoryDatas |
| Schema name | `SolutionHistoryData` |
| Entity set (Web API) | `solutionhistories` |
| Primary id attribute | `solutionhistorydataid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/solutionhistories?$select=&$top=10
GET /api/data/v9.2/solutionhistories(<guid>)
POST /api/data/v9.2/solutionhistories
PATCH /api/data/v9.2/solutionhistories(<guid>)
DELETE /api/data/v9.2/solutionhistories(<guid>)
```

## Attributes

Writable: **23** · Read-only: **0**

### Writable

`ActivityId`, `CorrelationId`, `Description`, `EndTime`, `ErrorCode`, `ExceptionMessage`, `ExceptionStack`, `IsManaged`, `IsMicrosoftPublisher`, `IsOverwriteCustomizations`, `IsPatch`, `Operation`, `PackageName`, `PackageVersion`, `PublisherName`, `Result`, `SolutionHistoryDataId`, `SolutionId`, `SolutionName`, `SolutionVersion`, `StartTime`, `Status`, `SubOperation`

## Relationships




## Source

Generated from [solutionhistorydata.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/solutionhistorydata.md) on 2026-05-06.