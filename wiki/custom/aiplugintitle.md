---
logical: "aiplugintitle"
display: "AIPluginTitle"
entitySetName: "aiplugintitles"
primaryId: "aiplugintitleid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **21** · Read-only: **16**

### Writable

`accentcolor`, `aiplugintitleid`, `baseartifactid`, `description`, `developername`, `displayname`, `icon`, `importsequencenumber`, `iscustom`, `iscustomizable`, `name`, `overriddencreatedon`, `plugintitleversion`, `privacyurl`, `shortdescription`, `statecode`, `statuscode`, `termsofuseurl`, `timezoneruleversionnumber`, `utcconversiontimezonecode`, `websiteurl`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `iconscolorimageid`, `iconsoutlineimageid`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_aiplugintitle_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_aiplugintitle_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_aiplugintitle_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_aiplugintitle_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_aiplugintitle` | [organization](organization.md) | `organizationid` | `organizationid` |
| `ImageDescriptor_AIPluginTitle_IconsColorImage` | [imagedescriptor](imagedescriptor.md) | `iconscolorimageid` | `iconscolorimageid_imagedescriptor` |
| `ImageDescriptor_AIPluginTitle_IconsOutlineImage` | [imagedescriptor](imagedescriptor.md) | `iconsoutlineimageid` | `iconsoutlineimageid_imagedescriptor` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `aiplugintitle_SyncErrors` | [aiplugintitle](aiplugintitle.md) | `regardingobjectid` | `regardingobjectid_aiplugintitle` |
| `aiplugintitle_DuplicateMatchingRecord` | [aiplugintitle](aiplugintitle.md) | `duplicaterecordid` | `duplicaterecordid_aiplugintitle` |
| `aiplugintitle_DuplicateBaseRecord` | [aiplugintitle](aiplugintitle.md) | `baserecordid` | `baserecordid_aiplugintitle` |
| `aiplugintitle_AsyncOperations` | [aiplugintitle](aiplugintitle.md) | `regardingobjectid` | `regardingobjectid_aiplugintitle` |
| `aiplugintitle_MailboxTrackingFolders` | [aiplugintitle](aiplugintitle.md) | `regardingobjectid` | `regardingobjectid_aiplugintitle` |
| `aiplugintitle_UserEntityInstanceDatas` | [aiplugintitle](aiplugintitle.md) | `objectid` | `objectid_aiplugintitle` |
| `aiplugintitle_ProcessSession` | [aiplugintitle](aiplugintitle.md) | `regardingobjectid` | `regardingobjectid_aiplugintitle` |
| `aiplugintitle_BulkDeleteFailures` | [aiplugintitle](aiplugintitle.md) | `regardingobjectid` | `regardingobjectid_aiplugintitle` |
| `aiplugintitle_PrincipalObjectAttributeAccesses` | [aiplugintitle](aiplugintitle.md) | `objectid` | `objectid_aiplugintitle` |
| `aiplugin_AIPluginTitle_aiplugintitle` | [aiplugintitle](aiplugintitle.md) | `aiplugintitle` | `AIPluginTitle` |


## Source

Generated from [aiplugintitle (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='aiplugintitle')) on 2026-05-07.