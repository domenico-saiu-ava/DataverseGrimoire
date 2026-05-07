---
logical: "ava_regoladidistribuzione"
display: "Regola di distribuzione"
entitySetName: "ava_regoladidistribuziones"
primaryId: "ava_regoladidistribuzioneid"
primaryName: "ava_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Regola di distribuzione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `ava_regoladidistribuzione` |
| Display name | Regola di distribuzione |
| Display (plural) | Regole di distribuzione |
| Schema name | `ava_Regoladidistribuzione` |
| Entity set (Web API) | `ava_regoladidistribuziones` |
| Primary id attribute | `ava_regoladidistribuzioneid` |
| Primary name attribute | `ava_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/ava_regoladidistribuziones?$select=ava_name&$top=10
GET /api/data/v9.2/ava_regoladidistribuziones(<guid>)
POST /api/data/v9.2/ava_regoladidistribuziones
PATCH /api/data/v9.2/ava_regoladidistribuziones(<guid>)
DELETE /api/data/v9.2/ava_regoladidistribuziones(<guid>)
```

## Attributes

Writable: **16** · Read-only: **10**

### Writable

`ava_codiceregola`, `ava_destinazionelead`, `ava_name`, `ava_prodotto`, `ava_regoladidistribuzioneid`, `ava_tempodiconcorrenza`, `ava_tempodiscadenzapresaincarico`, `ava_tentativiprimadelpassaggioaservizioclienti`, `ava_tipologialead`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_ava_regoladidistribuzione_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_ava_regoladidistribuzione_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_ava_regoladidistribuzione_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_ava_regoladidistribuzione_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_ava_regoladidistribuzione` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_ava_regoladidistribuzione` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_ava_regoladidistribuzione` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_ava_regoladidistribuzione` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ava_plugin_RegolavariabileSegmento_ava_regoladidistribuzione` | [ava_regoladidistribuzione](ava_regoladidistribuzione.md) | `ava_regolavariabilesegmento` | `ava_RegolavariabileSegmento` |
| `ava_plugin_Regoladefault_ava_regoladidistribuzione` | [ava_regoladidistribuzione](ava_regoladidistribuzione.md) | `ava_regoladefault` | `ava_Regoladefault` |
| `ava_plugin_Regoladidistribuzioneid_ava_regoladidistribuzione` | [ava_regoladidistribuzione](ava_regoladidistribuzione.md) | `ava_regoladidistribuzioneid` | `ava_Regoladidistribuzioneid` |
| `ava_plugin_RegolavariabileProspect_ava_regoladidistribuzione` | [ava_regoladidistribuzione](ava_regoladidistribuzione.md) | `ava_regolavariabileprospect` | `ava_RegolavariabileProspect` |
| `ava_regoladidistribuzione_SyncErrors` | [ava_regoladidistribuzione](ava_regoladidistribuzione.md) | `regardingobjectid` | `regardingobjectid_ava_regoladidistribuzione` |
| `ava_regoladidistribuzione_AsyncOperations` | [ava_regoladidistribuzione](ava_regoladidistribuzione.md) | `regardingobjectid` | `regardingobjectid_ava_regoladidistribuzione` |
| `ava_regoladidistribuzione_MailboxTrackingFolders` | [ava_regoladidistribuzione](ava_regoladidistribuzione.md) | `regardingobjectid` | `regardingobjectid_ava_regoladidistribuzione` |
| `ava_regoladidistribuzione_UserEntityInstanceDatas` | [ava_regoladidistribuzione](ava_regoladidistribuzione.md) | `objectid` | `objectid_ava_regoladidistribuzione` |
| `ava_regoladidistribuzione_ProcessSession` | [ava_regoladidistribuzione](ava_regoladidistribuzione.md) | `regardingobjectid` | `regardingobjectid_ava_regoladidistribuzione` |
| `ava_regoladidistribuzione_BulkDeleteFailures` | [ava_regoladidistribuzione](ava_regoladidistribuzione.md) | `regardingobjectid` | `regardingobjectid_ava_regoladidistribuzione` |
| `ava_regoladidistribuzione_PrincipalObjectAttributeAccesses` | [ava_regoladidistribuzione](ava_regoladidistribuzione.md) | `objectid` | `objectid_ava_regoladidistribuzione` |


## Source

Generated from [ava_regoladidistribuzione (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='ava_regoladidistribuzione')) on 2026-05-07.