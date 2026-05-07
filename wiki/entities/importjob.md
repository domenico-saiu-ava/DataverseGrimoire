---
logical: "importjob"
display: "Import Job"
entitySetName: "importjobs"
primaryId: "importjobid"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Import Job

For internal use only.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `importjob` |
| Display name | Import Job |
| Display (plural) | Import Jobs |
| Schema name | `ImportJob` |
| Entity set (Web API) | `importjobs` |
| Primary id attribute | `importjobid` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/importjobs?$select=&$top=10
GET /api/data/v9.2/importjobs(<guid>)
POST /api/data/v9.2/importjobs
PATCH /api/data/v9.2/importjobs(<guid>)
DELETE /api/data/v9.2/importjobs(<guid>)
```

## Attributes

Writable: **9** · Read-only: **10**

### Writable

`Data`, `ImportContext`, `ImportJobId`, `Name`, `OperationContext`, `Progress`, `SolutionName`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CompletedOn`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `SolutionId`, `StartedOn`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_importjobbase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_importjobbase_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_importjobbase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_importjobbase_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_importjob` | [organization](organization.md) | `organizationid` | `organizationid` |



## Source

Generated from [importjob.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/importjob.md) on 2026-05-06.