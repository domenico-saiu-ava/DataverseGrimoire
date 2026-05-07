---
logical: "msdyn_kbkeywordsdescsuggestionsetting"
display: "Impostazione suggerimenti descrizione parole chiave"
entitySetName: "msdyn_kbkeywordsdescsuggestionsettings"
primaryId: "msdyn_kbkeywordsdescsuggestionsettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impostazione suggerimenti descrizione parole chiave

Entità impostazioni suggerimenti descrizione parole chiave

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_kbkeywordsdescsuggestionsetting` |
| Display name | Impostazione suggerimenti descrizione parole chiave |
| Display (plural) | Impostazioni suggerimenti descrizione parole chiave |
| Schema name | `msdyn_kbkeywordsdescsuggestionsetting` |
| Entity set (Web API) | `msdyn_kbkeywordsdescsuggestionsettings` |
| Primary id attribute | `msdyn_kbkeywordsdescsuggestionsettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_kbkeywordsdescsuggestionsettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_kbkeywordsdescsuggestionsettings(<guid>)
POST /api/data/v9.2/msdyn_kbkeywordsdescsuggestionsettings
PATCH /api/data/v9.2/msdyn_kbkeywordsdescsuggestionsettings(<guid>)
DELETE /api/data/v9.2/msdyn_kbkeywordsdescsuggestionsettings(<guid>)
```

## Attributes

Writable: **13** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_isenabled`, `msdyn_isoverridden`, `msdyn_kbcontentmapping`, `msdyn_kbkeywordsdescsuggestionsettingid`, `msdyn_kbtitlemapping`, `msdyn_name`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_kbkeywordsdescsuggestionsetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_kbkeywordsdescsuggestionsetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_kbkeywordsdescsuggestionsetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_kbkeywordsdescsuggestionsetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_kbkeywordsdescsuggestionsetting` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_kbkeywordsdescsuggestionsetting_SyncErrors` | [msdyn_kbkeywordsdescsuggestionsetting](msdyn_kbkeywordsdescsuggestionsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_kbkeywordsdescsuggestionsetting` |
| `msdyn_kbkeywordsdescsuggestionsetting_AsyncOperations` | [msdyn_kbkeywordsdescsuggestionsetting](msdyn_kbkeywordsdescsuggestionsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_kbkeywordsdescsuggestionsetting` |
| `msdyn_kbkeywordsdescsuggestionsetting_MailboxTrackingFolders` | [msdyn_kbkeywordsdescsuggestionsetting](msdyn_kbkeywordsdescsuggestionsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_kbkeywordsdescsuggestionsetting` |
| `msdyn_kbkeywordsdescsuggestionsetting_UserEntityInstanceDatas` | [msdyn_kbkeywordsdescsuggestionsetting](msdyn_kbkeywordsdescsuggestionsetting.md) | `objectid` | `objectid_msdyn_kbkeywordsdescsuggestionsetting` |
| `msdyn_kbkeywordsdescsuggestionsetting_ProcessSession` | [msdyn_kbkeywordsdescsuggestionsetting](msdyn_kbkeywordsdescsuggestionsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_kbkeywordsdescsuggestionsetting` |
| `msdyn_kbkeywordsdescsuggestionsetting_BulkDeleteFailures` | [msdyn_kbkeywordsdescsuggestionsetting](msdyn_kbkeywordsdescsuggestionsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_kbkeywordsdescsuggestionsetting` |
| `msdyn_kbkeywordsdescsuggestionsetting_PrincipalObjectAttributeAccesses` | [msdyn_kbkeywordsdescsuggestionsetting](msdyn_kbkeywordsdescsuggestionsetting.md) | `objectid` | `objectid_msdyn_kbkeywordsdescsuggestionsetting` |


## Source

Generated from [msdyn_kbkeywordsdescsuggestionsetting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_kbkeywordsdescsuggestionsetting')) on 2026-05-07.