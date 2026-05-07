---
logical: "powerpagecomponent"
display: "Componente del sito"
entitySetName: "powerpagecomponents"
primaryId: "powerpagecomponentid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Componente del sito

## Identity

| Property | Value |
| --- | --- |
| Logical name | `powerpagecomponent` |
| Display name | Componente del sito |
| Display (plural) | Componenti sito |
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

Writable: **15** · Read-only: **17**

### Writable

`content`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `ownerid`, `powerpagecomponentid`, `powerpagecomponenttype`, `powerpagesiteid`, `powerpagesitelanguageid`, `searchcontent`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `filecontent`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `FileAttachment_powerpagecomponent_filecontent` | [fileattachment](fileattachment.md) | `filecontent` | `filecontent` |
| `lk_powerpagecomponent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_powerpagecomponent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_powerpagecomponent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_powerpagecomponent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_powerpagecomponent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_powerpagecomponent` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_powerpagecomponent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_powerpagecomponent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `powerpagesite_powerpagecomponent_powerpagesiteid` | [powerpagesite](powerpagesite.md) | `powerpagesiteid` | `powerpagesiteid` |
| `powerpagesitelanguage_powerpagecomponent_powerpagesitelanguageid` | [powerpagesitelanguage](powerpagesitelanguage.md) | `powerpagesitelanguageid` | `powerpagesitelanguageid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `powerpagecomponent_FileAttachments` | [powerpagecomponent](powerpagecomponent.md) | `objectid` | `objectid_powerpagecomponent` |
| `powerpagecomponent_mspp_webformid_adx_webformsession` | [powerpagecomponent](powerpagecomponent.md) | `mspp_webformid` | `mspp_webformid` |
| `powerpagecomponent_mspp_webformstepid_adx_webformsession` | [powerpagecomponent](powerpagecomponent.md) | `mspp_webformstepid` | `mspp_webformstepid` |
| `powerpagecomponent_SyncErrors` | [powerpagecomponent](powerpagecomponent.md) | `regardingobjectid` | `regardingobjectid_powerpagecomponent` |
| `powerpagecomponent_AsyncOperations` | [powerpagecomponent](powerpagecomponent.md) | `regardingobjectid` | `regardingobjectid_powerpagecomponent` |
| `powerpagecomponent_MailboxTrackingFolders` | [powerpagecomponent](powerpagecomponent.md) | `regardingobjectid` | `regardingobjectid_powerpagecomponent` |
| `powerpagecomponent_UserEntityInstanceDatas` | [powerpagecomponent](powerpagecomponent.md) | `objectid` | `objectid_powerpagecomponent` |
| `powerpagecomponent_ProcessSession` | [powerpagecomponent](powerpagecomponent.md) | `regardingobjectid` | `regardingobjectid_powerpagecomponent` |
| `powerpagecomponent_BulkDeleteFailures` | [powerpagecomponent](powerpagecomponent.md) | `regardingobjectid` | `regardingobjectid_powerpagecomponent` |
| `powerpagecomponent_PrincipalObjectAttributeAccesses` | [powerpagecomponent](powerpagecomponent.md) | `objectid` | `objectid_powerpagecomponent` |

### Many-to-Many (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `powerpagecomponent_powerpagecomponent` | [powerpagecomponent](powerpagecomponent.md) | _n/a_ | `powerpagecomponent_powerpagecomponent` |
| `powerpagecomponent_webrole_systemuser` | [systemuser](systemuser.md) | _n/a_ | `powerpagecomponent_webrole_systemuser` |
| `adx_invitation_mspp_webrole_powerpagecomponent` | [adx_invitation](adx_invitation.md) | _n/a_ | `adx_invitation_mspp_webrole_powerpagecomponent` |
| `powerpagecomponent_mspp_webrole_account` | [account](account.md) | _n/a_ | `powerpagecomponent_mspp_webrole_account` |
| `powerpagecomponent_mspp_webrole_contact` | [contact](contact.md) | _n/a_ | `powerpagecomponent_mspp_webrole_contact` |

## Source

Generated from [powerpagecomponent (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='powerpagecomponent')) on 2026-05-07.