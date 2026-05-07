---
logical: "msdyn_wallsavedquery"
display: "Visualizzazione bacheca"
entitySetName: "msdyn_wallsavedqueries"
primaryId: "msdyn_wallsavedqueryid"
primaryName: "msdyn_entityname"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Visualizzazione bacheca

Contiene informazioni relative alle visualizzazioni disponibili da mostrare nelle bacheche personali degli utenti. Solo un amministratore può specificare le visualizzazioni che gli utenti possono scegliere per la bacheca personale.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_wallsavedquery` |
| Display name | Visualizzazione bacheca |
| Display (plural) | Visualizzazioni bacheca |
| Schema name | `msdyn_wallsavedquery` |
| Entity set (Web API) | `msdyn_wallsavedqueries` |
| Primary id attribute | `msdyn_wallsavedqueryid` |
| Primary name attribute | `msdyn_entityname` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_wallsavedqueries?$select=msdyn_entityname&$top=10
GET /api/data/v9.2/msdyn_wallsavedqueries(<guid>)
POST /api/data/v9.2/msdyn_wallsavedqueries
PATCH /api/data/v9.2/msdyn_wallsavedqueries(<guid>)
DELETE /api/data/v9.2/msdyn_wallsavedqueries(<guid>)
```

## Attributes

Writable: **16** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_entitydisplayname`, `msdyn_entityname`, `msdyn_isvirtual`, `msdyn_isvisible`, `msdyn_isvisiblebit`, `msdyn_otc`, `msdyn_postconfigurationid`, `msdyn_savedqueryid`, `msdyn_savedqueryname`, `msdyn_wallsavedqueryid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_wallsavedquery_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_wallsavedquery_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_wallsavedquery_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_wallsavedquery_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_wallsavedquery` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_postconfig_wallsavedquery` | [msdyn_postconfig](msdyn_postconfig.md) | `msdyn_postconfigurationid` | `msdyn_postconfigurationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_wallsavedquery_SyncErrors` | [msdyn_wallsavedquery](msdyn_wallsavedquery.md) | `regardingobjectid` | `regardingobjectid_msdyn_wallsavedquery` |
| `msdyn_wallsavedquery_AsyncOperations` | [msdyn_wallsavedquery](msdyn_wallsavedquery.md) | `regardingobjectid` | `regardingobjectid_msdyn_wallsavedquery` |
| `msdyn_wallsavedquery_MailboxTrackingFolders` | [msdyn_wallsavedquery](msdyn_wallsavedquery.md) | `regardingobjectid` | `regardingobjectid_msdyn_wallsavedquery` |
| `msdyn_wallsavedquery_UserEntityInstanceDatas` | [msdyn_wallsavedquery](msdyn_wallsavedquery.md) | `objectid` | `objectid_msdyn_wallsavedquery` |
| `msdyn_wallsavedquery_ProcessSession` | [msdyn_wallsavedquery](msdyn_wallsavedquery.md) | `regardingobjectid` | `regardingobjectid_msdyn_wallsavedquery` |
| `msdyn_wallsavedquery_BulkDeleteFailures` | [msdyn_wallsavedquery](msdyn_wallsavedquery.md) | `regardingobjectid` | `regardingobjectid_msdyn_wallsavedquery` |
| `msdyn_wallsavedquery_PrincipalObjectAttributeAccesses` | [msdyn_wallsavedquery](msdyn_wallsavedquery.md) | `objectid` | `objectid_msdyn_wallsavedquery` |
| `msdyn_wallsavedquery_wallsavedqueryusersettings` | [msdyn_wallsavedquery](msdyn_wallsavedquery.md) | `msdyn_wallsavedqueryid` | `msdyn_wallsavedqueryid` |


## Source

Generated from [msdyn_wallsavedquery (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_wallsavedquery')) on 2026-05-07.