---
logical: "sdkmessagefilter"
display: "Sdk Message Filter"
entitySetName: "sdkmessagefilters"
primaryId: "sdkmessagefilterid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Sdk Message Filter

Filter that defines which SDK messages are valid for each type of entity.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `sdkmessagefilter` |
| Display name | Sdk Message Filter |
| Display (plural) | Sdk Message Filters |
| Schema name | `SdkMessageFilter` |
| Entity set (Web API) | `sdkmessagefilters` |
| Primary id attribute | `sdkmessagefilterid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/sdkmessagefilters?$select=name&$top=10
GET /api/data/v9.2/sdkmessagefilters(<guid>)
POST /api/data/v9.2/sdkmessagefilters
PATCH /api/data/v9.2/sdkmessagefilters(<guid>)
DELETE /api/data/v9.2/sdkmessagefilters(<guid>)
```

## Attributes

Writable: **7** · Read-only: **19**

### Writable

`Availability`, `IntroducedVersion`, `IsCustomProcessingStepAllowed`, `Name`, `RestrictionLevel`, `SdkMessageFilterId`, `SdkMessageId`

### Read-only

`ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `CustomizationLevel`, `IsManaged`, `IsVisible`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `PrimaryObjectTypeCode`, `SdkMessageFilterIdUnique`, `SecondaryObjectTypeCode`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`, `WorkflowSdkStepEnabled`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `createdby_sdkmessagefilter` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_sdkmessagefilter_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_sdkmessagefilter_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `modifiedby_sdkmessagefilter` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `organization_sdkmessagefilter` | [organization](organization.md) | `organizationid` | `organizationid` |
| `sdkmessageid_sdkmessagefilter` | [sdkmessage](sdkmessage.md) | `sdkmessageid` | `sdkmessageid` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `sdkmessagefilterid_sdkmessageprocessingstep` | _n/a_ | `sdkmessagefilterid` | _n/a_ |


## Source

Generated from [sdkmessagefilter.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/sdkmessagefilter.md) on 2026-05-06.