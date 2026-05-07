---
logical: "sourcecontrolcomponent"
display: "Source Control Component"
entitySetName: "sourcecontrolcomponents"
primaryId: "sourcecontrolcomponentid"
primaryName: "name"
tableType: "Elastic"
ownership: "OrganizationOwned"
---

# Source Control Component

Stores the Source Control Components associated with the organization or solution

## Identity

| Property | Value |
| --- | --- |
| Logical name | `sourcecontrolcomponent` |
| Display name | Source Control Component |
| Display (plural) | Source Control Components |
| Schema name | `SourceControlComponent` |
| Entity set (Web API) | `sourcecontrolcomponents` |
| Primary id attribute | `sourcecontrolcomponentid` |
| Primary name attribute | `name` |
| Table type | Elastic |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/sourcecontrolcomponents?$select=name&$top=10
GET /api/data/v9.2/sourcecontrolcomponents(<guid>)
POST /api/data/v9.2/sourcecontrolcomponents
PATCH /api/data/v9.2/sourcecontrolcomponents(<guid>)
DELETE /api/data/v9.2/sourcecontrolcomponents(<guid>)
```

## Attributes

Writable: **17** · Read-only: **7**

### Writable

`Action`, `ComponentDisplayName`, `ComponentId`, `ComponentPath`, `ComponentType`, `ComponentTypeName`, `ImportSequenceNumber`, `IsCommitted`, `Name`, `OverriddenCreatedOn`, `PartitionId`, `SolutionComponentState`, `SourceControlComponentId`, `SourceControlComponentPayloadId`, `SourceControlComponentPayloadIdPId`, `TTLInSeconds`, `UserAction`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_sourcecontrolcomponent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_sourcecontrolcomponent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_sourcecontrolcomponent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_sourcecontrolcomponent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `sourcecontrolcomponentpayload_sourcecontrolcomponent` | [sourcecontrolcomponentpayload](sourcecontrolcomponentpayload.md) | `sourcecontrolcomponentpayloadid` | `sourcecontrolcomponentpayloadid` |



## Source

Generated from [sourcecontrolcomponent.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/sourcecontrolcomponent.md) on 2026-05-06.