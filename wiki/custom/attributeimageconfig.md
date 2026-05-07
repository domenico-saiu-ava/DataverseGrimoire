---
logical: "attributeimageconfig"
display: "Configurazione attributo immagine"
entitySetName: "attributeimageconfigs"
primaryId: "attributeimageconfigid"
primaryName: "attributelogicalname"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione attributo immagine

Archivia configurazione per ogni attributo immagine

## Identity

| Property | Value |
| --- | --- |
| Logical name | `attributeimageconfig` |
| Display name | Configurazione attributo immagine |
| Display (plural) | Configurazioni attributo immagine |
| Schema name | `AttributeImageConfig` |
| Entity set (Web API) | `attributeimageconfigs` |
| Primary id attribute | `attributeimageconfigid` |
| Primary name attribute | `attributelogicalname` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/attributeimageconfigs?$select=attributelogicalname&$top=10
GET /api/data/v9.2/attributeimageconfigs(<guid>)
POST /api/data/v9.2/attributeimageconfigs
PATCH /api/data/v9.2/attributeimageconfigs(<guid>)
DELETE /api/data/v9.2/attributeimageconfigs(<guid>)
```

## Attributes

Writable: **4** · Read-only: **7**

### Writable

`attributeimageconfigid`, `attributelogicalname`, `canstorefullimage`, `parententitylogicalname`

### Read-only

`componentidunique`, `componentstate`, `ismanaged`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships


### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `attributeimageconfig_SyncErrors` | [attributeimageconfig](attributeimageconfig.md) | `regardingobjectid` | `regardingobjectid_attributeimageconfig` |
| `attributeimageconfig_AsyncOperations` | [attributeimageconfig](attributeimageconfig.md) | `regardingobjectid` | `regardingobjectid_attributeimageconfig` |
| `attributeimageconfig_MailboxTrackingFolders` | [attributeimageconfig](attributeimageconfig.md) | `regardingobjectid` | `regardingobjectid_attributeimageconfig` |
| `attributeimageconfig_UserEntityInstanceDatas` | [attributeimageconfig](attributeimageconfig.md) | `objectid` | `objectid_attributeimageconfig` |
| `attributeimageconfig_BulkDeleteFailures` | [attributeimageconfig](attributeimageconfig.md) | `regardingobjectid` | `regardingobjectid_attributeimageconfig` |
| `attributeimageconfig_PrincipalObjectAttributeAccesses` | [attributeimageconfig](attributeimageconfig.md) | `objectid` | `objectid_attributeimageconfig` |


## Source

Generated from [attributeimageconfig (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='attributeimageconfig')) on 2026-05-07.