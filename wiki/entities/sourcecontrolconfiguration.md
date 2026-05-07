---
logical: "sourcecontrolconfiguration"
display: "Source Control Configuration"
entitySetName: "sourcecontrolconfigurations"
primaryId: "sourcecontrolconfigurationid"
primaryName: "name"
tableType: "Elastic"
ownership: "OrganizationOwned"
---

# Source Control Configuration

Stores the git configuration associated with the environment

## Identity

| Property | Value |
| --- | --- |
| Logical name | `sourcecontrolconfiguration` |
| Display name | Source Control Configuration |
| Display (plural) | Source Control Configurations |
| Schema name | `SourceControlConfiguration` |
| Entity set (Web API) | `sourcecontrolconfigurations` |
| Primary id attribute | `sourcecontrolconfigurationid` |
| Primary name attribute | `name` |
| Table type | Elastic |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/sourcecontrolconfigurations?$select=name&$top=10
GET /api/data/v9.2/sourcecontrolconfigurations(<guid>)
POST /api/data/v9.2/sourcecontrolconfigurations
PATCH /api/data/v9.2/sourcecontrolconfigurations(<guid>)
DELETE /api/data/v9.2/sourcecontrolconfigurations(<guid>)
```

## Attributes

Writable: **10** · Read-only: **7**

### Writable

`GitProvider`, `ImportSequenceNumber`, `Name`, `OrganizationName`, `OverriddenCreatedOn`, `PartitionId`, `ProjectName`, `RepositoryName`, `SourceControlConfigurationId`, `TTLInSeconds`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `VersionNumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_sourcecontrolconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_sourcecontrolconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_sourcecontrolconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_sourcecontrolconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `sourcecontrolconfiguration_sourcecontrolbranchconfiguration` | _n/a_ | `sourcecontrolconfigurationid` | _n/a_ |


## Source

Generated from [sourcecontrolconfiguration.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/sourcecontrolconfiguration.md) on 2026-05-06.