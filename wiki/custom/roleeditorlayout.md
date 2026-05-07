---
logical: "roleeditorlayout"
display: "RoleEditorLayout"
entitySetName: "roleeditorlayouts"
primaryId: "roleeditorlayoutid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

`displayname`, `entitylogicalname`, `iscustomizable`, `isprivacyrelated`, `itemtype`, `name`, `overriddencreatedon`, `privilegename`, `roleeditorlayouthierarchyid`, `roleeditorlayoutid`, `taborder`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`

## Relationships

### Many-to-One (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `roleeditorlayout_roleeditorlayout` | [roleeditorlayout](roleeditorlayout.md) | `roleeditorlayouthierarchyid` | `RoleEditorLayoutHierarchyId` |
| `organization_roleeditorlayout` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `roleeditorlayout_SyncErrors` | [roleeditorlayout](roleeditorlayout.md) | `regardingobjectid` | `regardingobjectid_roleeditorlayout` |
| `roleeditorlayout_DuplicateMatchingRecord` | [roleeditorlayout](roleeditorlayout.md) | `duplicaterecordid` | `duplicaterecordid_roleeditorlayout` |
| `roleeditorlayout_DuplicateBaseRecord` | [roleeditorlayout](roleeditorlayout.md) | `baserecordid` | `baserecordid_roleeditorlayout` |
| `roleeditorlayout_AsyncOperations` | [roleeditorlayout](roleeditorlayout.md) | `regardingobjectid` | `regardingobjectid_roleeditorlayout` |
| `roleeditorlayout_MailboxTrackingFolders` | [roleeditorlayout](roleeditorlayout.md) | `regardingobjectid` | `regardingobjectid_roleeditorlayout` |
| `roleeditorlayout_UserEntityInstanceDatas` | [roleeditorlayout](roleeditorlayout.md) | `objectid` | `objectid_roleeditorlayout` |
| `roleeditorlayout_ProcessSession` | [roleeditorlayout](roleeditorlayout.md) | `regardingobjectid` | `regardingobjectid_roleeditorlayout` |
| `roleeditorlayout_BulkDeleteFailures` | [roleeditorlayout](roleeditorlayout.md) | `regardingobjectid` | `regardingobjectid_roleeditorlayout` |
| `roleeditorlayout_PrincipalObjectAttributeAccesses` | [roleeditorlayout](roleeditorlayout.md) | `objectid` | `objectid_roleeditorlayout` |
| `roleeditorlayout_roleeditorlayout` | [roleeditorlayout](roleeditorlayout.md) | `roleeditorlayouthierarchyid` | `RoleEditorLayoutHierarchyId` |


## Source

Generated from [roleeditorlayout (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='roleeditorlayout')) on 2026-05-07.