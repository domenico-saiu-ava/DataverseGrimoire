---
logical: "msdynmkt_consentproviderdefaultconfiguration"
display: "Configurazione predefinita provider consenso"
entitySetName: "msdynmkt_consentproviderdefaultconfigurations"
primaryId: "msdynmkt_consentproviderdefaultconfigurationid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione predefinita provider consenso

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_consentproviderdefaultconfiguration` |
| Display name | Configurazione predefinita provider consenso |
| Display (plural) | Configurazioni predefinite provider consenso |
| Schema name | `msdynmkt_consentproviderdefaultconfiguration` |
| Entity set (Web API) | `msdynmkt_consentproviderdefaultconfigurations` |
| Primary id attribute | `msdynmkt_consentproviderdefaultconfigurationid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_consentproviderdefaultconfigurations?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_consentproviderdefaultconfigurations(<guid>)
POST /api/data/v9.2/msdynmkt_consentproviderdefaultconfigurations
PATCH /api/data/v9.2/msdynmkt_consentproviderdefaultconfigurations(<guid>)
DELETE /api/data/v9.2/msdynmkt_consentproviderdefaultconfigurations(<guid>)
```

## Attributes

Writable: **9** · Read-only: **10**

### Writable

`importsequencenumber`, `msdynmkt_consentproviderdefaultconfigurationid`, `msdynmkt_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_consentproviderdefaultconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_consentproviderdefaultconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_consentproviderdefaultconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_consentproviderdefaultconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdynmkt_consentproviderdefaultconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdynmkt_consentproviderdefaultconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdynmkt_consentproviderdefaultconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdynmkt_consentproviderdefaultconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_consentproviderdefaultconfiguration_SyncErrors` | [msdynmkt_consentproviderdefaultconfiguration](msdynmkt_consentproviderdefaultconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_consentproviderdefaultconfiguration` |
| `msdynmkt_consentproviderdefaultconfiguration_DuplicateMatchingRecord` | [msdynmkt_consentproviderdefaultconfiguration](msdynmkt_consentproviderdefaultconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_msdynmkt_consentproviderdefaultconfiguration` |
| `msdynmkt_consentproviderdefaultconfiguration_DuplicateBaseRecord` | [msdynmkt_consentproviderdefaultconfiguration](msdynmkt_consentproviderdefaultconfiguration.md) | `baserecordid` | `baserecordid_msdynmkt_consentproviderdefaultconfiguration` |
| `msdynmkt_consentproviderdefaultconfiguration_AsyncOperations` | [msdynmkt_consentproviderdefaultconfiguration](msdynmkt_consentproviderdefaultconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_consentproviderdefaultconfiguration` |
| `msdynmkt_consentproviderdefaultconfiguration_MailboxTrackingFolders` | [msdynmkt_consentproviderdefaultconfiguration](msdynmkt_consentproviderdefaultconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_consentproviderdefaultconfiguration` |
| `msdynmkt_consentproviderdefaultconfiguration_UserEntityInstanceDatas` | [msdynmkt_consentproviderdefaultconfiguration](msdynmkt_consentproviderdefaultconfiguration.md) | `objectid` | `objectid_msdynmkt_consentproviderdefaultconfiguration` |
| `msdynmkt_consentproviderdefaultconfiguration_ProcessSession` | [msdynmkt_consentproviderdefaultconfiguration](msdynmkt_consentproviderdefaultconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_consentproviderdefaultconfiguration` |
| `msdynmkt_consentproviderdefaultconfiguration_BulkDeleteFailures` | [msdynmkt_consentproviderdefaultconfiguration](msdynmkt_consentproviderdefaultconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_consentproviderdefaultconfiguration` |
| `msdynmkt_consentproviderdefaultconfiguration_PrincipalObjectAttributeAccesses` | [msdynmkt_consentproviderdefaultconfiguration](msdynmkt_consentproviderdefaultconfiguration.md) | `objectid` | `objectid_msdynmkt_consentproviderdefaultconfiguration` |
| `msdynmkt_compliancesettings4_msdynmkt_consentproviderdefaultconfiguration` | [msdynmkt_consentproviderdefaultconfiguration](msdynmkt_consentproviderdefaultconfiguration.md) | `msdynmkt_extendedentityid` | `msdynmkt_extendedentityId_msdynmkt_consentproviderdefaultconfiguration` |


## Source

Generated from [msdynmkt_consentproviderdefaultconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_consentproviderdefaultconfiguration')) on 2026-05-07.