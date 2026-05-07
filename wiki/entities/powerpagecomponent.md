---
logical: "powerpagecomponent"
display: "Site Component"
entitySetName: "powerpagecomponents"
primaryId: "powerpagecomponentid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Site Component

## Identity

| Property | Value |
| --- | --- |
| Logical name | `powerpagecomponent` |
| Display name | Site Component |
| Display (plural) | Site Components |
| Schema name | `powerpagecomponent` |
| Entity set (Web API) | `powerpagecomponents` |
| Primary id attribute | `powerpagecomponentid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/powerpagecomponents?$select=name&$top=10
GET /api/data/v9.2/powerpagecomponents(<guid>)
POST /api/data/v9.2/powerpagecomponents
PATCH /api/data/v9.2/powerpagecomponents(<guid>)
DELETE /api/data/v9.2/powerpagecomponents(<guid>)
```

## Attributes

Writable: **16** · Read-only: **20**

### Writable

`content`, `ImportSequenceNumber`, `IsCustomizable`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `powerpagecomponentId`, `powerpagecomponenttype`, `powerpagesiteid`, `powerpagesitelanguageid`, `searchcontent`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `filecontent`, `filecontent_Name`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_powerpagecomponent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_powerpagecomponent_filecontent` | [fileattachment](fileattachment.md) | `filecontent` | `filecontent` |
| `lk_powerpagecomponent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_powerpagecomponent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_powerpagecomponent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_powerpagecomponent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_powerpagecomponent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `powerpagesite_powerpagecomponent_powerpagesiteid` | [powerpagesite](powerpagesite.md) | `powerpagesiteid` | `powerpagesiteid` |
| `powerpagesitelanguage_powerpagecomponent_powerpagesitelanguageid` | [powerpagesitelanguage](powerpagesitelanguage.md) | `powerpagesitelanguageid` | `powerpagesitelanguageid` |
| `team_powerpagecomponent` | [team](team.md) | `owningteam` | `owningteam` |
| `user_powerpagecomponent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `powerpagecomponent_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerpagecomponent_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerpagecomponent_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `powerpagecomponent_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerpagecomponent_mspp_webformid_adx_webformsession` | _n/a_ | `mspp_webformid` | _n/a_ |
| `powerpagecomponent_mspp_webformstepid_adx_webformsession` | _n/a_ | `mspp_webformstepid` | _n/a_ |
| `powerpagecomponent_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `powerpagecomponent_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerpagecomponent_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `adx_invitation_mspp_webrole_powerpagecomponent` | [powerpagecomponentid](powerpagecomponentid.md) | _n/a_ | _n/a_ |
| `powerpagecomponent_mspp_webrole_account` | [powerpagecomponentid](powerpagecomponentid.md) | _n/a_ | _n/a_ |
| `powerpagecomponent_mspp_webrole_contact` | [powerpagecomponentid](powerpagecomponentid.md) | _n/a_ | _n/a_ |
| `powerpagecomponent_powerpagecomponent` | _n/a_ | _n/a_ | _n/a_ |
| `powerpagecomponent_webrole_systemuser` | [powerpagecomponentid](powerpagecomponentid.md) | _n/a_ | _n/a_ |

## Source

Generated from [powerpagecomponent.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/powerpagecomponent.md) on 2026-05-06.