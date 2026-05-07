---
logical: "ava_esclusionefilialidadistribuzionelead"
display: "Esclusione Filiali da Distribuzione Lead"
entitySetName: "ava_esclusionefilialidadistribuzioneleads"
primaryId: "ava_esclusionefilialidadistribuzioneleadid"
primaryName: "ava_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Esclusione Filiali da Distribuzione Lead

## Identity

| Property | Value |
| --- | --- |
| Logical name | `ava_esclusionefilialidadistribuzionelead` |
| Display name | Esclusione Filiali da Distribuzione Lead |
| Display (plural) | Esclusione Filiali da Distribuzione Leads |
| Schema name | `ava_EsclusioneFilialidaDistribuzioneLead` |
| Entity set (Web API) | `ava_esclusionefilialidadistribuzioneleads` |
| Primary id attribute | `ava_esclusionefilialidadistribuzioneleadid` |
| Primary name attribute | `ava_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/ava_esclusionefilialidadistribuzioneleads?$select=ava_name&$top=10
GET /api/data/v9.2/ava_esclusionefilialidadistribuzioneleads(<guid>)
POST /api/data/v9.2/ava_esclusionefilialidadistribuzioneleads
PATCH /api/data/v9.2/ava_esclusionefilialidadistribuzioneleads(<guid>)
DELETE /api/data/v9.2/ava_esclusionefilialidadistribuzioneleads(<guid>)
```

## Attributes

Writable: **16** · Read-only: **10**

### Writable

`ava_codice`, `ava_datafinevalidita`, `ava_datainiziovalidita`, `ava_esclusionefilialidadistribuzioneleadid`, `ava_filialedaescludere`, `ava_filiali`, `ava_filialiinsostituzione`, `ava_name`, `ava_tipologialead`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ava_esclusionefilialidadistribuzionelead_Filialedaescludere_ava_filiale` | [ava_filiale](ava_filiale.md) | `ava_filialedaescludere` | `ava_Filialedaescludere` |
| `lk_ava_esclusionefilialidadistribuzionelead_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_ava_esclusionefilialidadistribuzionelead_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_ava_esclusionefilialidadistribuzionelead_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_ava_esclusionefilialidadistribuzionelead_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_ava_esclusionefilialidadistribuzionelead` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_ava_esclusionefilialidadistribuzionelead` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_ava_esclusionefilialidadistribuzionelead` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_ava_esclusionefilialidadistribuzionelead` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ava_esclusionefilialidadistribuzionelead_SyncErrors` | [ava_esclusionefilialidadistribuzionelead](ava_esclusionefilialidadistribuzionelead.md) | `regardingobjectid` | `regardingobjectid_ava_esclusionefilialidadistribuzionelead` |
| `ava_esclusionefilialidadistribuzionelead_DuplicateMatchingRecord` | [ava_esclusionefilialidadistribuzionelead](ava_esclusionefilialidadistribuzionelead.md) | `duplicaterecordid` | `duplicaterecordid_ava_esclusionefilialidadistribuzionelead` |
| `ava_esclusionefilialidadistribuzionelead_DuplicateBaseRecord` | [ava_esclusionefilialidadistribuzionelead](ava_esclusionefilialidadistribuzionelead.md) | `baserecordid` | `baserecordid_ava_esclusionefilialidadistribuzionelead` |
| `ava_esclusionefilialidadistribuzionelead_AsyncOperations` | [ava_esclusionefilialidadistribuzionelead](ava_esclusionefilialidadistribuzionelead.md) | `regardingobjectid` | `regardingobjectid_ava_esclusionefilialidadistribuzionelead` |
| `ava_esclusionefilialidadistribuzionelead_MailboxTrackingFolders` | [ava_esclusionefilialidadistribuzionelead](ava_esclusionefilialidadistribuzionelead.md) | `regardingobjectid` | `regardingobjectid_ava_esclusionefilialidadistribuzionelead` |
| `ava_esclusionefilialidadistribuzionelead_UserEntityInstanceDatas` | [ava_esclusionefilialidadistribuzionelead](ava_esclusionefilialidadistribuzionelead.md) | `objectid` | `objectid_ava_esclusionefilialidadistribuzionelead` |
| `ava_esclusionefilialidadistribuzionelead_ProcessSession` | [ava_esclusionefilialidadistribuzionelead](ava_esclusionefilialidadistribuzionelead.md) | `regardingobjectid` | `regardingobjectid_ava_esclusionefilialidadistribuzionelead` |
| `ava_esclusionefilialidadistribuzionelead_BulkDeleteFailures` | [ava_esclusionefilialidadistribuzionelead](ava_esclusionefilialidadistribuzionelead.md) | `regardingobjectid` | `regardingobjectid_ava_esclusionefilialidadistribuzionelead` |
| `ava_esclusionefilialidadistribuzionelead_PrincipalObjectAttributeAccesses` | [ava_esclusionefilialidadistribuzionelead](ava_esclusionefilialidadistribuzionelead.md) | `objectid` | `objectid_ava_esclusionefilialidadistribuzionelead` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ava_EsclusioneFilialidaDistribuzioneLead_ava_Filiale_ava_Filiale` | [ava_filiale](ava_filiale.md) | _n/a_ | `ava_EsclusioneFilialidaDistribuzioneLead_ava_Filiale_ava_Filiale` |

## Source

Generated from [ava_esclusionefilialidadistribuzionelead (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='ava_esclusionefilialidadistribuzionelead')) on 2026-05-07.