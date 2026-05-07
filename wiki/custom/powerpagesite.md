---
logical: "powerpagesite"
display: "Sito"
entitySetName: "powerpagesites"
primaryId: "powerpagesiteid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Sito

## Identity

| Property | Value |
| --- | --- |
| Logical name | `powerpagesite` |
| Display name | Sito |
| Display (plural) | Siti |
| Schema name | `powerpagesite` |
| Entity set (Web API) | `powerpagesites` |
| Primary id attribute | `powerpagesiteid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/powerpagesites?$select=name&$top=10
GET /api/data/v9.2/powerpagesites(<guid>)
POST /api/data/v9.2/powerpagesites
PATCH /api/data/v9.2/powerpagesites(<guid>)
DELETE /api/data/v9.2/powerpagesites(<guid>)
```

## Attributes

Writable: **14** · Read-only: **16**

### Writable

`content`, `datamodelversion`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `ownerid`, `powerpagesiteid`, `powerpagesitetype`, `primarydomainname`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_powerpagesite_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_powerpagesite_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_powerpagesite_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_powerpagesite_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_powerpagesite` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_powerpagesite` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_powerpagesite` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_powerpagesite` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `powerpagesite_mspp_websiteid_adx_invitation` | [powerpagesite](powerpagesite.md) | `mspp_websiteid` | `mspp_websiteid` |
| `powerpagesite_SyncErrors` | [powerpagesite](powerpagesite.md) | `regardingobjectid` | `regardingobjectid_powerpagesite` |
| `powerpagesite_AsyncOperations` | [powerpagesite](powerpagesite.md) | `regardingobjectid` | `regardingobjectid_powerpagesite` |
| `powerpagesite_MailboxTrackingFolders` | [powerpagesite](powerpagesite.md) | `regardingobjectid` | `regardingobjectid_powerpagesite` |
| `powerpagesite_UserEntityInstanceDatas` | [powerpagesite](powerpagesite.md) | `objectid` | `objectid_powerpagesite` |
| `powerpagesite_ProcessSession` | [powerpagesite](powerpagesite.md) | `regardingobjectid` | `regardingobjectid_powerpagesite` |
| `powerpagesite_BulkDeleteFailures` | [powerpagesite](powerpagesite.md) | `regardingobjectid` | `regardingobjectid_powerpagesite` |
| `powerpagesite_PrincipalObjectAttributeAccesses` | [powerpagesite](powerpagesite.md) | `objectid` | `objectid_powerpagesite` |
| `Comment_Artifact_PowerPageSite` | [powerpagesite](powerpagesite.md) | `parent` | `PowerPageSite` |
| `powerpagesite_powerpagecomponent_powerpagesiteid` | [powerpagesite](powerpagesite.md) | `powerpagesiteid` | `powerpagesiteid` |
| `powerpagesite_powerpagessourcefile_powerpagesiteid` | [powerpagesite](powerpagesite.md) | `powerpagesiteid` | `powerpagesiteid` |
| `powerpagesite_powerpagesitelanguage_powerpagesiteid` | [powerpagesite](powerpagesite.md) | `powerpagesiteid` | `powerpagesiteid` |
| `powerpagesite_powerpagesitepublished_powerpagesiteid` | [powerpagesite](powerpagesite.md) | `powerpagesiteid` | `PowerPageSiteId` |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `powerpagesite_dvfilesearch` | [dvfilesearch](dvfilesearch.md) | _n/a_ | `powerpagesite_dvfilesearch` |
| `powerpagesite_dvtablesearch` | [dvtablesearch](dvtablesearch.md) | _n/a_ | `powerpagesite_dvtablesearch` |

## Source

Generated from [powerpagesite (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='powerpagesite')) on 2026-05-07.