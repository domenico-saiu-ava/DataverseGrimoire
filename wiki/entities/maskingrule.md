---
logical: "maskingrule"
display: "Secured Masking Rule"
entitySetName: "maskingrules"
primaryId: "maskingruleid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Secured Masking Rule

Secured Masking Rules to apply to fields.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `maskingrule` |
| Display name | Secured Masking Rule |
| Display (plural) | Secured Masking Rules |
| Schema name | `MaskingRule` |
| Entity set (Web API) | `maskingrules` |
| Primary id attribute | `maskingruleid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/maskingrules?$select=name&$top=10
GET /api/data/v9.2/maskingrules(<guid>)
POST /api/data/v9.2/maskingrules
PATCH /api/data/v9.2/maskingrules(<guid>)
DELETE /api/data/v9.2/maskingrules(<guid>)
```

## Attributes

Writable: **13** · Read-only: **13**

### Writable

`Description`, `DisplayName`, `IsCustomizable`, `MaskedCharacter`, `MaskedRichTestData`, `MaskedTestData`, `MaskingRuleId`, `Name`, `RegularExpression`, `RichTestData`, `TestData`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`

## Relationships

### Many-to-One (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `organization_maskingrule` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `maskingrule_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `maskingrule_attributemaskingrule` | _n/a_ | `maskingruleid` | _n/a_ |
| `maskingrule_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `maskingrule_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `maskingrule_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `maskingrule_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `maskingrule_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `maskingrule_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `maskingrule_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [maskingrule.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/maskingrule.md) on 2026-05-06.