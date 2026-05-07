---
logical: "ava_regoladistribuzioneleadteamsc"
display: "Regola distribuzione Lead Team SC"
entitySetName: "ava_regoladistribuzioneleadteamscs"
primaryId: "ava_regoladistribuzioneleadteamscid"
primaryName: "ava_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Regola distribuzione Lead Team SC

## Identity

| Property | Value |
| --- | --- |
| Logical name | `ava_regoladistribuzioneleadteamsc` |
| Display name | Regola distribuzione Lead Team SC |
| Display (plural) | Regole distribuzione Lead Team SC |
| Schema name | `ava_RegoladistribuzioneLeadTeamSC` |
| Entity set (Web API) | `ava_regoladistribuzioneleadteamscs` |
| Primary id attribute | `ava_regoladistribuzioneleadteamscid` |
| Primary name attribute | `ava_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/ava_regoladistribuzioneleadteamscs?$select=ava_name&$top=10
GET /api/data/v9.2/ava_regoladistribuzioneleadteamscs(<guid>)
POST /api/data/v9.2/ava_regoladistribuzioneleadteamscs
PATCH /api/data/v9.2/ava_regoladistribuzioneleadteamscs(<guid>)
DELETE /api/data/v9.2/ava_regoladistribuzioneleadteamscs(<guid>)
```

## Attributes

Writable: **30** · Read-only: **10**

### Writable

`ava_categoriaprodotto`, `ava_codice`, `ava_datacreazionelead`, `ava_datadiscadenzalead`, `ava_filtro1`, `ava_filtro2`, `ava_filtro3`, `ava_filtro4`, `ava_filtro5`, `ava_filtro6`, `ava_filtro7`, `ava_filtro8`, `ava_fonte`, `ava_interesse`, `ava_name`, `ava_regoladistribuzioneleadteamscid`, `ava_score`, `ava_segmento`, `ava_sequenza`, `ava_team`, `ava_tipodianagrafica`, `ava_tipologialead`, `ava_vista`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_ava_regoladistribuzioneleadteamsc_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_ava_regoladistribuzioneleadteamsc_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_ava_regoladistribuzioneleadteamsc_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_ava_regoladistribuzioneleadteamsc_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_ava_regoladistribuzioneleadteamsc` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_ava_regoladistribuzioneleadteamsc` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_ava_regoladistribuzioneleadteamsc` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_ava_regoladistribuzioneleadteamsc` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ava_regoladistribuzioneleadteamsc_SyncErrors` | [ava_regoladistribuzioneleadteamsc](ava_regoladistribuzioneleadteamsc.md) | `regardingobjectid` | `regardingobjectid_ava_regoladistribuzioneleadteamsc` |
| `ava_regoladistribuzioneleadteamsc_DuplicateMatchingRecord` | [ava_regoladistribuzioneleadteamsc](ava_regoladistribuzioneleadteamsc.md) | `duplicaterecordid` | `duplicaterecordid_ava_regoladistribuzioneleadteamsc` |
| `ava_regoladistribuzioneleadteamsc_DuplicateBaseRecord` | [ava_regoladistribuzioneleadteamsc](ava_regoladistribuzioneleadteamsc.md) | `baserecordid` | `baserecordid_ava_regoladistribuzioneleadteamsc` |
| `ava_regoladistribuzioneleadteamsc_AsyncOperations` | [ava_regoladistribuzioneleadteamsc](ava_regoladistribuzioneleadteamsc.md) | `regardingobjectid` | `regardingobjectid_ava_regoladistribuzioneleadteamsc` |
| `ava_regoladistribuzioneleadteamsc_MailboxTrackingFolders` | [ava_regoladistribuzioneleadteamsc](ava_regoladistribuzioneleadteamsc.md) | `regardingobjectid` | `regardingobjectid_ava_regoladistribuzioneleadteamsc` |
| `ava_regoladistribuzioneleadteamsc_UserEntityInstanceDatas` | [ava_regoladistribuzioneleadteamsc](ava_regoladistribuzioneleadteamsc.md) | `objectid` | `objectid_ava_regoladistribuzioneleadteamsc` |
| `ava_regoladistribuzioneleadteamsc_ProcessSession` | [ava_regoladistribuzioneleadteamsc](ava_regoladistribuzioneleadteamsc.md) | `regardingobjectid` | `regardingobjectid_ava_regoladistribuzioneleadteamsc` |
| `ava_regoladistribuzioneleadteamsc_BulkDeleteFailures` | [ava_regoladistribuzioneleadteamsc](ava_regoladistribuzioneleadteamsc.md) | `regardingobjectid` | `regardingobjectid_ava_regoladistribuzioneleadteamsc` |
| `ava_regoladistribuzioneleadteamsc_PrincipalObjectAttributeAccesses` | [ava_regoladistribuzioneleadteamsc](ava_regoladistribuzioneleadteamsc.md) | `objectid` | `objectid_ava_regoladistribuzioneleadteamsc` |


## Source

Generated from [ava_regoladistribuzioneleadteamsc (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='ava_regoladistribuzioneleadteamsc')) on 2026-05-07.