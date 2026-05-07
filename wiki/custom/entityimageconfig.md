---
logical: "entityimageconfig"
display: "Configurazione immagine entità"
entitySetName: "entityimageconfigs"
primaryId: "entityimageconfigid"
primaryName: "parententitylogicalname"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione immagine entità

Archivia configurazione immagine per ogni entità

## Identity

| Property | Value |
| --- | --- |
| Logical name | `entityimageconfig` |
| Display name | Configurazione immagine entità |
| Display (plural) | Configurazioni immagine entità |
| Schema name | `EntityImageConfig` |
| Entity set (Web API) | `entityimageconfigs` |
| Primary id attribute | `entityimageconfigid` |
| Primary name attribute | `parententitylogicalname` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/entityimageconfigs?$select=parententitylogicalname&$top=10
GET /api/data/v9.2/entityimageconfigs(<guid>)
POST /api/data/v9.2/entityimageconfigs
PATCH /api/data/v9.2/entityimageconfigs(<guid>)
DELETE /api/data/v9.2/entityimageconfigs(<guid>)
```

## Attributes

Writable: **3** · Read-only: **7**

### Writable

`entityimageconfigid`, `parententitylogicalname`, `primaryimageattribute`

### Read-only

`componentidunique`, `componentstate`, `ismanaged`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships


### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `entityimageconfig_SyncErrors` | [entityimageconfig](entityimageconfig.md) | `regardingobjectid` | `regardingobjectid_entityimageconfig` |
| `entityimageconfig_AsyncOperations` | [entityimageconfig](entityimageconfig.md) | `regardingobjectid` | `regardingobjectid_entityimageconfig` |
| `entityimageconfig_MailboxTrackingFolders` | [entityimageconfig](entityimageconfig.md) | `regardingobjectid` | `regardingobjectid_entityimageconfig` |
| `entityimageconfig_UserEntityInstanceDatas` | [entityimageconfig](entityimageconfig.md) | `objectid` | `objectid_entityimageconfig` |
| `entityimageconfig_BulkDeleteFailures` | [entityimageconfig](entityimageconfig.md) | `regardingobjectid` | `regardingobjectid_entityimageconfig` |
| `entityimageconfig_PrincipalObjectAttributeAccesses` | [entityimageconfig](entityimageconfig.md) | `objectid` | `objectid_entityimageconfig` |


## Source

Generated from [entityimageconfig (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='entityimageconfig')) on 2026-05-07.