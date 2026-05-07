---
logical: "roleeditorlayout"
display: "RoleEditorLayout"
entitySetName: "roleeditorlayouts"
primaryId: "roleeditorlayoutid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# RoleEditorLayout

## Identity

| Property | Value |
| --- | --- |
| Logical name | `roleeditorlayout` |
| Display name | RoleEditorLayout |
| Display (plural) | RoleEditorLayouts |
| Schema name | `RoleEditorLayout` |
| Entity set (Web API) | `roleeditorlayouts` |
| Primary id attribute | `roleeditorlayoutid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/roleeditorlayouts?$select=name&$top=10
GET /api/data/v9.2/roleeditorlayouts(<guid>)
POST /api/data/v9.2/roleeditorlayouts
PATCH /api/data/v9.2/roleeditorlayouts(<guid>)
DELETE /api/data/v9.2/roleeditorlayouts(<guid>)
```

## Attributes

Writable: **13** · Read-only: **13**

### Writable

`DisplayName`, `EntityLogicalName`, `IsCustomizable`, `IsPrivacyRelated`, `ItemType`, `Name`, `OverriddenCreatedOn`, `PrivilegeName`, `RoleEditorLayoutHierarchyId`, `RoleEditorLayoutId`, `TabOrder`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`

## Relationships

### Many-to-One (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `organization_roleeditorlayout` | [organization](organization.md) | `organizationid` | `organizationid` |
| `roleeditorlayout_roleeditorlayout` | [roleeditorlayout](roleeditorlayout.md) | `roleeditorlayouthierarchyid` | `RoleEditorLayoutHierarchyId` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `roleeditorlayout_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `roleeditorlayout_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `roleeditorlayout_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `roleeditorlayout_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `roleeditorlayout_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `roleeditorlayout_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `roleeditorlayout_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `roleeditorlayout_roleeditorlayout` | _n/a_ | `roleeditorlayouthierarchyid` | _n/a_ |
| `roleeditorlayout_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [roleeditorlayout.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/roleeditorlayout.md) on 2026-05-06.