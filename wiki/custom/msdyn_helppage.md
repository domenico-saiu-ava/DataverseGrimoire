---
logical: "msdyn_helppage"
display: "Pagina della Guida"
entitySetName: "msdyn_helppages"
primaryId: "msdyn_helppageid"
primaryName: "msdyn_displayname"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Pagina della Guida

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_helppage` |
| Display name | Pagina della Guida |
| Display (plural) | Pagine della Guida |
| Schema name | `msdyn_helppage` |
| Entity set (Web API) | `msdyn_helppages` |
| Primary id attribute | `msdyn_helppageid` |
| Primary name attribute | `msdyn_displayname` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_helppages?$select=msdyn_displayname&$top=10
GET /api/data/v9.2/msdyn_helppages(<guid>)
POST /api/data/v9.2/msdyn_helppages
PATCH /api/data/v9.2/msdyn_helppages(<guid>)
DELETE /api/data/v9.2/msdyn_helppages(<guid>)
```

## Attributes

Writable: **13** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_content`, `msdyn_contenttype`, `msdyn_displayname`, `msdyn_helppageid`, `msdyn_locale`, `msdyn_path`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_helppage_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_helppage_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_helppage_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_helppage_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_helppage` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_helppage_SyncErrors` | [msdyn_helppage](msdyn_helppage.md) | `regardingobjectid` | `regardingobjectid_msdyn_helppage` |
| `msdyn_helppage_AsyncOperations` | [msdyn_helppage](msdyn_helppage.md) | `regardingobjectid` | `regardingobjectid_msdyn_helppage` |
| `msdyn_helppage_MailboxTrackingFolders` | [msdyn_helppage](msdyn_helppage.md) | `regardingobjectid` | `regardingobjectid_msdyn_helppage` |
| `msdyn_helppage_UserEntityInstanceDatas` | [msdyn_helppage](msdyn_helppage.md) | `objectid` | `objectid_msdyn_helppage` |
| `msdyn_helppage_ProcessSession` | [msdyn_helppage](msdyn_helppage.md) | `regardingobjectid` | `regardingobjectid_msdyn_helppage` |
| `msdyn_helppage_BulkDeleteFailures` | [msdyn_helppage](msdyn_helppage.md) | `regardingobjectid` | `regardingobjectid_msdyn_helppage` |
| `msdyn_helppage_PrincipalObjectAttributeAccesses` | [msdyn_helppage](msdyn_helppage.md) | `objectid` | `objectid_msdyn_helppage` |


## Source

Generated from [msdyn_helppage (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_helppage')) on 2026-05-07.