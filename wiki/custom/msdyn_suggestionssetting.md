---
logical: "msdyn_suggestionssetting"
display: "Impostazione suggerimenti"
entitySetName: "msdyn_suggestionssettings"
primaryId: "msdyn_suggestionssettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impostazione suggerimenti

Entità impostazioni suggerimenti

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_suggestionssetting` |
| Display name | Impostazione suggerimenti |
| Display (plural) | Impostazioni suggerimenti |
| Schema name | `msdyn_suggestionssetting` |
| Entity set (Web API) | `msdyn_suggestionssettings` |
| Primary id attribute | `msdyn_suggestionssettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_suggestionssettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_suggestionssettings(<guid>)
POST /api/data/v9.2/msdyn_suggestionssettings
PATCH /api/data/v9.2/msdyn_suggestionssettings(<guid>)
DELETE /api/data/v9.2/msdyn_suggestionssettings(<guid>)
```

## Attributes

Writable: **28** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_casecustommapping`, `msdyn_casecustommodelmapping`, `msdyn_casedetailmapping`, `msdyn_casedetailmodelmapping`, `msdyn_caseisenabled`, `msdyn_casepreprocessingrule`, `msdyn_casepreprocessingruleenabled`, `msdyn_casetitlemapping`, `msdyn_casetitlemodelmapping`, `msdyn_kbcontentmapping`, `msdyn_kbcontentmodelmapping`, `msdyn_kbcustommapping`, `msdyn_kbcustommodelmapping`, `msdyn_kbisenabled`, `msdyn_kbpreprocessingrule`, `msdyn_kbpreprocessingruleenabled`, `msdyn_kbtitlemapping`, `msdyn_kbtitlemodelmapping`, `msdyn_name`, `msdyn_refreshonsaveevent`, `msdyn_suggestionssettingid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_suggestionssetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_suggestionssetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_suggestionssetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_suggestionssetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_suggestionssetting` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_suggestionssetting_SyncErrors` | [msdyn_suggestionssetting](msdyn_suggestionssetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_suggestionssetting` |
| `msdyn_suggestionssetting_AsyncOperations` | [msdyn_suggestionssetting](msdyn_suggestionssetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_suggestionssetting` |
| `msdyn_suggestionssetting_MailboxTrackingFolders` | [msdyn_suggestionssetting](msdyn_suggestionssetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_suggestionssetting` |
| `msdyn_suggestionssetting_UserEntityInstanceDatas` | [msdyn_suggestionssetting](msdyn_suggestionssetting.md) | `objectid` | `objectid_msdyn_suggestionssetting` |
| `msdyn_suggestionssetting_ProcessSession` | [msdyn_suggestionssetting](msdyn_suggestionssetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_suggestionssetting` |
| `msdyn_suggestionssetting_BulkDeleteFailures` | [msdyn_suggestionssetting](msdyn_suggestionssetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_suggestionssetting` |
| `msdyn_suggestionssetting_PrincipalObjectAttributeAccesses` | [msdyn_suggestionssetting](msdyn_suggestionssetting.md) | `objectid` | `objectid_msdyn_suggestionssetting` |


## Source

Generated from [msdyn_suggestionssetting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_suggestionssetting')) on 2026-05-07.