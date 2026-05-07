---
logical: "sdkmessageprocessingstepimage"
display: "Sdk Message Processing Step Image"
entitySetName: "sdkmessageprocessingstepimages"
primaryId: "sdkmessageprocessingstepimageid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Sdk Message Processing Step Image

Copy of an entity's attributes before or after the core system operation.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `sdkmessageprocessingstepimage` |
| Display name | Sdk Message Processing Step Image |
| Display (plural) | Sdk Message Processing Step Images |
| Schema name | `SdkMessageProcessingStepImage` |
| Entity set (Web API) | `sdkmessageprocessingstepimages` |
| Primary id attribute | `sdkmessageprocessingstepimageid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/sdkmessageprocessingstepimages?$select=name&$top=10
GET /api/data/v9.2/sdkmessageprocessingstepimages(<guid>)
POST /api/data/v9.2/sdkmessageprocessingstepimages
PATCH /api/data/v9.2/sdkmessageprocessingstepimages(<guid>)
DELETE /api/data/v9.2/sdkmessageprocessingstepimages(<guid>)
```

## Attributes

Writable: **11** · Read-only: **15**

### Writable

`Attributes`, `Description`, `EntityAlias`, `ImageType`, `IntroducedVersion`, `IsCustomizable`, `MessagePropertyName`, `Name`, `RelatedAttributeName`, `SdkMessageProcessingStepId`, `SdkMessageProcessingStepImageId`

### Read-only

`ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `CustomizationLevel`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SdkMessageProcessingStepImageIdUnique`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `createdby_sdkmessageprocessingstepimage` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_sdkmessageprocessingstepimage_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_sdkmessageprocessingstepimage_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `modifiedby_sdkmessageprocessingstepimage` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `organization_sdkmessageprocessingstepimage` | [organization](organization.md) | `organizationid` | `organizationid` |
| `sdkmessageprocessingstepid_sdkmessageprocessingstepimage` | [sdkmessageprocessingstep](sdkmessageprocessingstep.md) | `sdkmessageprocessingstepid` | `sdkmessageprocessingstepid` |



## Source

Generated from [sdkmessageprocessingstepimage.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/sdkmessageprocessingstepimage.md) on 2026-05-06.