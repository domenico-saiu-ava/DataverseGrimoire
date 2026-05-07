---
logical: "teamtemplate"
display: "Team template"
entitySetName: "teamtemplates"
primaryId: "teamtemplateid"
primaryName: "teamtemplatename"
tableType: "Standard"
ownership: "None"
---

# Team template

Team template for an entity enabled for automatically created access teams.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `teamtemplate` |
| Display name | Team template |
| Display (plural) | Team templates |
| Schema name | `TeamTemplate` |
| Entity set (Web API) | `teamtemplates` |
| Primary id attribute | `teamtemplateid` |
| Primary name attribute | `teamtemplatename` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/teamtemplates?$select=teamtemplatename&$top=10
GET /api/data/v9.2/teamtemplates(<guid>)
POST /api/data/v9.2/teamtemplates
PATCH /api/data/v9.2/teamtemplates(<guid>)
DELETE /api/data/v9.2/teamtemplates(<guid>)
```

## Attributes

Writable: **6** · Read-only: **14**

### Writable

`DefaultAccessRightsMask`, `Description`, `IsCustomizable`, `ObjectTypeCode`, `TeamTemplateId`, `TeamTemplateName`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `IsSystem`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `versionnumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_teamtemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_teamtemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_teamtemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_teamtemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `TeamTemplate_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `teamtemplate_Teams` | _n/a_ | `teamtemplateid` | _n/a_ |


## Source

Generated from [teamtemplate.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/teamtemplate.md) on 2026-05-06.