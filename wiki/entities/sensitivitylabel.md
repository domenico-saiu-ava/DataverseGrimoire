---
logical: "sensitivitylabel"
display: "Sensitivity Label"
entitySetName: "sensitivitylabels"
primaryId: "sensitivitylabelid"
primaryName: "name"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Sensitivity Label

Virtual entity that represents Sensitivity Labels

## Identity

| Property | Value |
| --- | --- |
| Logical name | `sensitivitylabel` |
| Display name | Sensitivity Label |
| Display (plural) | Sensitivity Labels |
| Schema name | `sensitivitylabel` |
| Entity set (Web API) | `sensitivitylabels` |
| Primary id attribute | `sensitivitylabelid` |
| Primary name attribute | `name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/sensitivitylabels?$select=name&$top=10
GET /api/data/v9.2/sensitivitylabels(<guid>)
POST /api/data/v9.2/sensitivitylabels
PATCH /api/data/v9.2/sensitivitylabels(<guid>)
DELETE /api/data/v9.2/sensitivitylabels(<guid>)
```

## Attributes

Writable: **0** · Read-only: **12**

### Read-only

`ApplicableTo`, `Color`, `Description`, `DisplayName`, `IsDefault`, `IsEnabled`, `LabelActions`, `Name`, `ParentSensitivityLabelId`, `Priority`, `sensitivitylabelId`, `Tooltip`

## Relationships


### One-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `sensitivitylabel_email_SensitivityLabelId` | _n/a_ | `sensitivitylabelid` | _n/a_ |
| `sensitivitylabelattributemapping_sensitivitylabel` | _n/a_ | `labelid` | _n/a_ |


## Source

Generated from [sensitivitylabel.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/sensitivitylabel.md) on 2026-05-06.