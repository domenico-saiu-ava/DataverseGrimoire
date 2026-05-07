---
logical: "attributemaskingrule"
display: "Secured Masking Column"
entitySetName: "attributemaskingrules"
primaryId: "attributemaskingruleid"
primaryName: "uniquename"
tableType: "Standard"
ownership: "None"
---

# Secured Masking Column

Defines secured masking rule for column

## Identity

| Property | Value |
| --- | --- |
| Logical name | `attributemaskingrule` |
| Display name | Secured Masking Column |
| Display (plural) | Secured Masking Columns |
| Schema name | `AttributeMaskingRule` |
| Entity set (Web API) | `attributemaskingrules` |
| Primary id attribute | `attributemaskingruleid` |
| Primary name attribute | `uniquename` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/attributemaskingrules?$select=uniquename&$top=10
GET /api/data/v9.2/attributemaskingrules(<guid>)
POST /api/data/v9.2/attributemaskingrules
PATCH /api/data/v9.2/attributemaskingrules(<guid>)
DELETE /api/data/v9.2/attributemaskingrules(<guid>)
```

## Attributes

Writable: **8** · Read-only: **13**

### Writable

`AttributeLogicalName`, `AttributeMaskingRuleId`, `EntityName`, `IsCustomizable`, `MaskingRuleId`, `TimeZoneRuleVersionNumber`, `UniqueName`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`

## Relationships

### Many-to-One (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `maskingrule_attributemaskingrule` | [maskingrule](maskingrule.md) | `maskingruleid` | `MaskingRuleId` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `attributemaskingrule_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `attributemaskingrule_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `attributemaskingrule_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `attributemaskingrule_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `attributemaskingrule_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `attributemaskingrule_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [attributemaskingrule.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/attributemaskingrule.md) on 2026-05-06.