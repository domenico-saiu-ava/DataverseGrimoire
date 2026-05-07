---
logical: "aiplugintitle"
display: "AIPluginTitle"
entitySetName: "aiplugintitles"
primaryId: "aiplugintitleid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# AIPluginTitle

AIPlugin Title

## Identity

| Property | Value |
| --- | --- |
| Logical name | `aiplugintitle` |
| Display name | AIPluginTitle |
| Display (plural) | AIPluginTitles |
| Schema name | `AIPluginTitle` |
| Entity set (Web API) | `aiplugintitles` |
| Primary id attribute | `aiplugintitleid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/aiplugintitles?$select=name&$top=10
GET /api/data/v9.2/aiplugintitles(<guid>)
POST /api/data/v9.2/aiplugintitles
PATCH /api/data/v9.2/aiplugintitles(<guid>)
DELETE /api/data/v9.2/aiplugintitles(<guid>)
```

## Attributes

Writable: **23** · Read-only: **20**

### Writable

`AccentColor`, `AIPluginTitleId`, `BaseArtifactId`, `Description`, `DeveloperName`, `DisplayName`, `Icon`, `IconsColorImage`, `IconsOutlineImage`, `ImportSequenceNumber`, `IsCustom`, `IsCustomizable`, `Name`, `OverriddenCreatedOn`, `PluginTitleVersion`, `PrivacyURL`, `ShortDescription`, `statecode`, `statuscode`, `TermsOfUseUrl`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`, `WebsiteUrl`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IconsColorImage_Timestamp`, `IconsColorImage_URL`, `IconsColorImageId`, `IconsOutlineImage_Timestamp`, `IconsOutlineImage_URL`, `IconsOutlineImageId`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_aiplugintitle_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_aiplugintitle_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_aiplugintitle_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_aiplugintitle_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_aiplugintitle` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `aiplugin_AIPluginTitle_aiplugintitle` | _n/a_ | `aiplugintitle` | _n/a_ |
| `aiplugintitle_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aiplugintitle_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aiplugintitle_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `aiplugintitle_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `aiplugintitle_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aiplugintitle_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `aiplugintitle_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aiplugintitle_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [aiplugintitle.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/aiplugintitle.md) on 2026-05-06.