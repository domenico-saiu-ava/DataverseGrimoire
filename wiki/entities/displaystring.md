---
logical: "displaystring"
display: "Display String"
entitySetName: "displaystrings"
primaryId: "displaystringid"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Display String

Customized messages for an entity that has been renamed.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `displaystring` |
| Display name | Display String |
| Display (plural) | Display Strings |
| Schema name | `DisplayString` |
| Entity set (Web API) | `displaystrings` |
| Primary id attribute | `displaystringid` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/displaystrings?$select=&$top=10
GET /api/data/v9.2/displaystrings(<guid>)
POST /api/data/v9.2/displaystrings
PATCH /api/data/v9.2/displaystrings(<guid>)
DELETE /api/data/v9.2/displaystrings(<guid>)
```

## Attributes

Writable: **4** · Read-only: **17**

### Writable

`CustomComment`, `CustomDisplayString`, `DisplayStringId`, `LanguageCode`

### Read-only

`ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `DisplayStringIdUnique`, `DisplayStringKey`, `FormatParameters`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `PublishedDisplayString`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_DisplayStringbase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_DisplayStringbase_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_DisplayStringbase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_DisplayStringbase_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_custom_displaystrings` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `DisplayString_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `DisplayString_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [displaystring.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/displaystring.md) on 2026-05-06.