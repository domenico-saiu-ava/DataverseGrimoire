---
logical: "sensitivitylabel"
display: "Sensitivity Label"
entitySetName: "sensitivitylabels"
primaryId: "sensitivitylabelid"
primaryName: "name"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

`applicableto`, `color`, `description`, `displayname`, `isdefault`, `isenabled`, `labelactions`, `name`, `parentsensitivitylabelid`, `priority`, `sensitivitylabelid`, `tooltip`

## Relationships


### One-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `sensitivitylabelattributemapping_sensitivitylabel` | [sensitivitylabel](sensitivitylabel.md) | `labelid` | `LabelId` |
| `sensitivitylabel_email_SensitivityLabelId` | [sensitivitylabel](sensitivitylabel.md) | `sensitivitylabelid` | `SensitivityLabelId_Email` |


## Source

Generated from [sensitivitylabel (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='sensitivitylabel')) on 2026-05-07.