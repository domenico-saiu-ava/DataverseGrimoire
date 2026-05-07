---
logical: "ava_filiale"
display: "Filiale"
entitySetName: "ava_filiales"
primaryId: "ava_filialeid"
primaryName: "ava_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Filiale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `ava_filiale` |
| Display name | Filiale |
| Display (plural) | Filiali |
| Schema name | `ava_Filiale` |
| Entity set (Web API) | `ava_filiales` |
| Primary id attribute | `ava_filialeid` |
| Primary name attribute | `ava_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/ava_filiales?$select=ava_name&$top=10
GET /api/data/v9.2/ava_filiales(<guid>)
POST /api/data/v9.2/ava_filiales
PATCH /api/data/v9.2/ava_filiales(<guid>)
DELETE /api/data/v9.2/ava_filiales(<guid>)
```

## Attributes

Writable: **10** · Read-only: **10**

### Writable

`ava_codice`, `ava_filialeid`, `ava_name`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_ava_filiale_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_ava_filiale_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_ava_filiale_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_ava_filiale_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_ava_filiale` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_ava_filiale` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_ava_filiale` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_ava_filiale` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ava_esclusionefilialidadistribuzionelead_Filialedaescludere_ava_filiale` | [ava_filiale](ava_filiale.md) | `ava_filialedaescludere` | `ava_Filialedaescludere` |
| `ava_filiale_SyncErrors` | [ava_filiale](ava_filiale.md) | `regardingobjectid` | `regardingobjectid_ava_filiale` |
| `ava_filiale_DuplicateMatchingRecord` | [ava_filiale](ava_filiale.md) | `duplicaterecordid` | `duplicaterecordid_ava_filiale` |
| `ava_filiale_DuplicateBaseRecord` | [ava_filiale](ava_filiale.md) | `baserecordid` | `baserecordid_ava_filiale` |
| `ava_filiale_AsyncOperations` | [ava_filiale](ava_filiale.md) | `regardingobjectid` | `regardingobjectid_ava_filiale` |
| `ava_filiale_MailboxTrackingFolders` | [ava_filiale](ava_filiale.md) | `regardingobjectid` | `regardingobjectid_ava_filiale` |
| `ava_filiale_UserEntityInstanceDatas` | [ava_filiale](ava_filiale.md) | `objectid` | `objectid_ava_filiale` |
| `ava_filiale_ProcessSession` | [ava_filiale](ava_filiale.md) | `regardingobjectid` | `regardingobjectid_ava_filiale` |
| `ava_filiale_BulkDeleteFailures` | [ava_filiale](ava_filiale.md) | `regardingobjectid` | `regardingobjectid_ava_filiale` |
| `ava_filiale_PrincipalObjectAttributeAccesses` | [ava_filiale](ava_filiale.md) | `objectid` | `objectid_ava_filiale` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ava_EsclusioneFilialidaDistribuzioneLead_ava_Filiale_ava_Filiale` | [ava_esclusionefilialidadistribuzionelead](ava_esclusionefilialidadistribuzionelead.md) | _n/a_ | `ava_EsclusioneFilialidaDistribuzioneLead_ava_Filiale_ava_Filiale` |

## Source

Generated from [ava_filiale (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='ava_filiale')) on 2026-05-07.