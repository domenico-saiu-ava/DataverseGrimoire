---
logical: "msdyn_inboxpersonalizedconfiguration"
display: "Configurazione personalizzata posta in arrivo"
entitySetName: "msdyn_inboxpersonalizedconfigurations"
primaryId: "msdyn_inboxpersonalizedconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione personalizzata posta in arrivo

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_inboxpersonalizedconfiguration` |
| Display name | Configurazione personalizzata posta in arrivo |
| Display (plural) | Configurazioni personalizzate posta in arrivo |
| Schema name | `msdyn_inboxpersonalizedconfiguration` |
| Entity set (Web API) | `msdyn_inboxpersonalizedconfigurations` |
| Primary id attribute | `msdyn_inboxpersonalizedconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_inboxpersonalizedconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_inboxpersonalizedconfigurations(<guid>)
POST /api/data/v9.2/msdyn_inboxpersonalizedconfigurations
PATCH /api/data/v9.2/msdyn_inboxpersonalizedconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_inboxpersonalizedconfigurations(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_configuration`, `msdyn_defaultsort`, `msdyn_inboxpersonalizedconfigurationid`, `msdyn_isdefault`, `msdyn_isvisible`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_inboxpersonalizedconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_inboxpersonalizedconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_inboxpersonalizedconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_inboxpersonalizedconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_inboxpersonalizedconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_inboxpersonalizedconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_inboxpersonalizedconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_inboxpersonalizedconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_inboxpersonalizedconfiguration_SyncErrors` | [msdyn_inboxpersonalizedconfiguration](msdyn_inboxpersonalizedconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_inboxpersonalizedconfiguration` |
| `msdyn_inboxpersonalizedconfiguration_DuplicateMatchingRecord` | [msdyn_inboxpersonalizedconfiguration](msdyn_inboxpersonalizedconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_inboxpersonalizedconfiguration` |
| `msdyn_inboxpersonalizedconfiguration_DuplicateBaseRecord` | [msdyn_inboxpersonalizedconfiguration](msdyn_inboxpersonalizedconfiguration.md) | `baserecordid` | `baserecordid_msdyn_inboxpersonalizedconfiguration` |
| `msdyn_inboxpersonalizedconfiguration_AsyncOperations` | [msdyn_inboxpersonalizedconfiguration](msdyn_inboxpersonalizedconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_inboxpersonalizedconfiguration` |
| `msdyn_inboxpersonalizedconfiguration_MailboxTrackingFolders` | [msdyn_inboxpersonalizedconfiguration](msdyn_inboxpersonalizedconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_inboxpersonalizedconfiguration` |
| `msdyn_inboxpersonalizedconfiguration_UserEntityInstanceDatas` | [msdyn_inboxpersonalizedconfiguration](msdyn_inboxpersonalizedconfiguration.md) | `objectid` | `objectid_msdyn_inboxpersonalizedconfiguration` |
| `msdyn_inboxpersonalizedconfiguration_ProcessSession` | [msdyn_inboxpersonalizedconfiguration](msdyn_inboxpersonalizedconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_inboxpersonalizedconfiguration` |
| `msdyn_inboxpersonalizedconfiguration_BulkDeleteFailures` | [msdyn_inboxpersonalizedconfiguration](msdyn_inboxpersonalizedconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_inboxpersonalizedconfiguration` |
| `msdyn_inboxpersonalizedconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_inboxpersonalizedconfiguration](msdyn_inboxpersonalizedconfiguration.md) | `objectid` | `objectid_msdyn_inboxpersonalizedconfiguration` |


## Source

Generated from [msdyn_inboxpersonalizedconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_inboxpersonalizedconfiguration')) on 2026-05-07.