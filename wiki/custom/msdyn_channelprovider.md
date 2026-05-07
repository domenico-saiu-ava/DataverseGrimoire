---
logical: "msdyn_channelprovider"
display: "Provider di Framework di integrazione del canale v2.0"
entitySetName: "msdyn_channelproviders"
primaryId: "msdyn_channelproviderid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Provider di Framework di integrazione del canale v2.0

Entità che contiene i dati di configurazione per un provider di canale vocale di terze parti in base a Framework di integrazione del canale v2.0

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_channelprovider` |
| Display name | Provider di Framework di integrazione del canale v2.0 |
| Display (plural) | Provider di Framework di integrazione del canale v2.0 |
| Schema name | `msdyn_channelprovider` |
| Entity set (Web API) | `msdyn_channelproviders` |
| Primary id attribute | `msdyn_channelproviderid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_channelproviders?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_channelproviders(<guid>)
POST /api/data/v9.2/msdyn_channelproviders
PATCH /api/data/v9.2/msdyn_channelproviders(<guid>)
DELETE /api/data/v9.2/msdyn_channelproviders(<guid>)
```

## Attributes

Writable: **20** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_apiversion`, `msdyn_channelproviderid`, `msdyn_channelurl`, `msdyn_customparams`, `msdyn_enableanalytics`, `msdyn_enableoutbound`, `msdyn_label`, `msdyn_name`, `msdyn_sandboxconfiguration`, `msdyn_sortorder`, `msdyn_trusteddomain`, `msdyn_uniquename`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_channelprovider_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_channelprovider_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_channelprovider_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_channelprovider_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_channelprovider` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_channelprovider` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_channelprovider` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_channelprovider` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_channelprovider_SyncErrors` | [msdyn_channelprovider](msdyn_channelprovider.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelprovider` |
| `msdyn_channelprovider_DuplicateMatchingRecord` | [msdyn_channelprovider](msdyn_channelprovider.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_channelprovider` |
| `msdyn_channelprovider_DuplicateBaseRecord` | [msdyn_channelprovider](msdyn_channelprovider.md) | `baserecordid` | `baserecordid_msdyn_channelprovider` |
| `msdyn_channelprovider_AsyncOperations` | [msdyn_channelprovider](msdyn_channelprovider.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelprovider` |
| `msdyn_channelprovider_MailboxTrackingFolders` | [msdyn_channelprovider](msdyn_channelprovider.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelprovider` |
| `msdyn_channelprovider_UserEntityInstanceDatas` | [msdyn_channelprovider](msdyn_channelprovider.md) | `objectid` | `objectid_msdyn_channelprovider` |
| `msdyn_channelprovider_ProcessSession` | [msdyn_channelprovider](msdyn_channelprovider.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelprovider` |
| `msdyn_channelprovider_BulkDeleteFailures` | [msdyn_channelprovider](msdyn_channelprovider.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelprovider` |
| `msdyn_channelprovider_PrincipalObjectAttributeAccesses` | [msdyn_channelprovider](msdyn_channelprovider.md) | `objectid` | `objectid_msdyn_channelprovider` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_appconfig_msdyn_channelprovider` | [msdyn_appconfiguration](msdyn_appconfiguration.md) | _n/a_ | `msdyn_appconfig_msdyn_channelprovider` |

## Source

Generated from [msdyn_channelprovider (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_channelprovider')) on 2026-05-07.