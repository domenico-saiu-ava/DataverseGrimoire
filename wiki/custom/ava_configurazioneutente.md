---
logical: "ava_configurazioneutente"
display: "Configurazione Ruolo"
entitySetName: "ava_configurazioneutentes"
primaryId: "ava_configurazioneutenteid"
primaryName: "ava_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione Ruolo

## Identity

| Property | Value |
| --- | --- |
| Logical name | `ava_configurazioneutente` |
| Display name | Configurazione Ruolo |
| Display (plural) | Configurazione Ruoli |
| Schema name | `ava_ConfigurazioneUtente` |
| Entity set (Web API) | `ava_configurazioneutentes` |
| Primary id attribute | `ava_configurazioneutenteid` |
| Primary name attribute | `ava_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/ava_configurazioneutentes?$select=ava_name&$top=10
GET /api/data/v9.2/ava_configurazioneutentes(<guid>)
POST /api/data/v9.2/ava_configurazioneutentes
PATCH /api/data/v9.2/ava_configurazioneutentes(<guid>)
DELETE /api/data/v9.2/ava_configurazioneutentes(<guid>)
```

## Attributes

Writable: **16** · Read-only: **10**

### Writable

`ava_codice`, `ava_configurazioneutenteid`, `ava_minimooredisponibilita`, `ava_name`, `ava_numeroclientidacontattare`, `ava_numerocontattidaeseguire`, `ava_numeroincontridapianificare`, `ava_numeroincontritarget`, `ava_utente`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_ava_configurazioneutente_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_ava_configurazioneutente_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_ava_configurazioneutente_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_ava_configurazioneutente_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_ava_configurazioneutente` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_ava_configurazioneutente` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_ava_configurazioneutente` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_ava_configurazioneutente` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ava_configurazioneutente_SyncErrors` | [ava_configurazioneutente](ava_configurazioneutente.md) | `regardingobjectid` | `regardingobjectid_ava_configurazioneutente` |
| `ava_configurazioneutente_DuplicateMatchingRecord` | [ava_configurazioneutente](ava_configurazioneutente.md) | `duplicaterecordid` | `duplicaterecordid_ava_configurazioneutente` |
| `ava_configurazioneutente_DuplicateBaseRecord` | [ava_configurazioneutente](ava_configurazioneutente.md) | `baserecordid` | `baserecordid_ava_configurazioneutente` |
| `ava_configurazioneutente_AsyncOperations` | [ava_configurazioneutente](ava_configurazioneutente.md) | `regardingobjectid` | `regardingobjectid_ava_configurazioneutente` |
| `ava_configurazioneutente_MailboxTrackingFolders` | [ava_configurazioneutente](ava_configurazioneutente.md) | `regardingobjectid` | `regardingobjectid_ava_configurazioneutente` |
| `ava_configurazioneutente_UserEntityInstanceDatas` | [ava_configurazioneutente](ava_configurazioneutente.md) | `objectid` | `objectid_ava_configurazioneutente` |
| `ava_configurazioneutente_ProcessSession` | [ava_configurazioneutente](ava_configurazioneutente.md) | `regardingobjectid` | `regardingobjectid_ava_configurazioneutente` |
| `ava_configurazioneutente_BulkDeleteFailures` | [ava_configurazioneutente](ava_configurazioneutente.md) | `regardingobjectid` | `regardingobjectid_ava_configurazioneutente` |
| `ava_configurazioneutente_PrincipalObjectAttributeAccesses` | [ava_configurazioneutente](ava_configurazioneutente.md) | `objectid` | `objectid_ava_configurazioneutente` |


## Source

Generated from [ava_configurazioneutente (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='ava_configurazioneutente')) on 2026-05-07.