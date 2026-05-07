---
logical: "purviewlabelinfo"
display: "Purview Label Info"
entitySetName: "purviewlabelinfos"
primaryId: "purviewlabelinfoid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Purview Label Info

## Identity

| Property | Value |
| --- | --- |
| Logical name | `purviewlabelinfo` |
| Display name | Purview Label Info |
| Display (plural) | PurviewLabelInfo |
| Schema name | `purviewlabelinfo` |
| Entity set (Web API) | `purviewlabelinfos` |
| Primary id attribute | `purviewlabelinfoid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/purviewlabelinfos?$select=name&$top=10
GET /api/data/v9.2/purviewlabelinfos(<guid>)
POST /api/data/v9.2/purviewlabelinfos
PATCH /api/data/v9.2/purviewlabelinfos(<guid>)
DELETE /api/data/v9.2/purviewlabelinfos(<guid>)
```

## Attributes

Writable: **27** · Read-only: **8**

### Writable

`ApplicableTo`, `ApplicationMode`, `Color`, `ContentFormats`, `DefaultSubLabelId`, `Description`, `HasProtection`, `ImportSequenceNumber`, `IsActive`, `IsApplicable`, `IsDataverseProtected`, `IsDefault`, `IsEnabled`, `IsEndpointProtectionEnabled`, `IsParent`, `IsSmimeEncryptEnabled`, `IsSmimeSignEnabled`, `Name`, `OverriddenCreatedOn`, `ParentLabelId`, `Priority`, `purviewlabelinfoId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `Tooltip`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_purviewlabelinfo_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_purviewlabelinfo_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_purviewlabelinfo_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_purviewlabelinfo_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_purviewlabelinfo` | [organization](organization.md) | `organizationid` | `organizationid` |
| `purviewlabelinfo_purviewlabelinfo` | [purviewlabelinfo](purviewlabelinfo.md) | `parentlabelid` | `ParentLabelId` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `purviewlabelinfo_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `purviewlabelinfo_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `purviewlabelinfo_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `purviewlabelinfo_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `purviewlabelinfo_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `purviewlabelinfo_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `purviewlabelinfo_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `purviewlabelinfo_purviewlabelinfo` | _n/a_ | `parentlabelid` | _n/a_ |
| `purviewlabelinfo_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [purviewlabelinfo.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/purviewlabelinfo.md) on 2026-05-06.