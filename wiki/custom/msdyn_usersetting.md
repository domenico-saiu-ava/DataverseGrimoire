---
logical: "msdyn_usersetting"
display: "Impostazioni utente"
entitySetName: "msdyn_usersettings"
primaryId: "msdyn_usersettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impostazioni utente

Entità padre per le personalizzazioni di Multicanale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_usersetting` |
| Display name | Impostazioni utente |
| Display (plural) | Impostazioni utente |
| Schema name | `msdyn_usersetting` |
| Entity set (Web API) | `msdyn_usersettings` |
| Primary id attribute | `msdyn_usersettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_usersettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_usersettings(<guid>)
POST /api/data/v9.2/msdyn_usersettings
PATCH /api/data/v9.2/msdyn_usersettings(<guid>)
DELETE /api/data/v9.2/msdyn_usersettings(<guid>)
```

## Attributes

Writable: **14** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_callconnectedpingpreference`, `msdyn_defaultcountrycode`, `msdyn_hidetranscript`, `msdyn_name`, `msdyn_noisesuppressionpreference`, `msdyn_personalsoundenabled`, `msdyn_soundformcontrol`, `msdyn_usersettingid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_usersetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_usersetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_usersetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_usersetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_usersetting` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_usersetting_SyncErrors` | [msdyn_usersetting](msdyn_usersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_usersetting` |
| `msdyn_usersetting_AsyncOperations` | [msdyn_usersetting](msdyn_usersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_usersetting` |
| `msdyn_usersetting_MailboxTrackingFolders` | [msdyn_usersetting](msdyn_usersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_usersetting` |
| `msdyn_usersetting_UserEntityInstanceDatas` | [msdyn_usersetting](msdyn_usersetting.md) | `objectid` | `objectid_msdyn_usersetting` |
| `msdyn_usersetting_ProcessSession` | [msdyn_usersetting](msdyn_usersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_usersetting` |
| `msdyn_usersetting_BulkDeleteFailures` | [msdyn_usersetting](msdyn_usersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_usersetting` |
| `msdyn_usersetting_PrincipalObjectAttributeAccesses` | [msdyn_usersetting](msdyn_usersetting.md) | `objectid` | `objectid_msdyn_usersetting` |


## Source

Generated from [msdyn_usersetting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_usersetting')) on 2026-05-07.