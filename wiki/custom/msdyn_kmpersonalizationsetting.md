---
logical: "msdyn_kmpersonalizationsetting"
display: "Personalizzazione della Knowledge Base"
entitySetName: "msdyn_kmpersonalizationsettings"
primaryId: "msdyn_kmpersonalizationsettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Personalizzazione della Knowledge Base

Consente agli utenti di personalizzare i filtri di ricerca nella Knowledge Base e la lingua di modifica della Knowledge Base.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_kmpersonalizationsetting` |
| Display name | Personalizzazione della Knowledge Base |
| Display (plural) | Personalizzazioni della Knowledge Base |
| Schema name | `msdyn_kmpersonalizationsetting` |
| Entity set (Web API) | `msdyn_kmpersonalizationsettings` |
| Primary id attribute | `msdyn_kmpersonalizationsettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_kmpersonalizationsettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_kmpersonalizationsettings(<guid>)
POST /api/data/v9.2/msdyn_kmpersonalizationsettings
PATCH /api/data/v9.2/msdyn_kmpersonalizationsettings(<guid>)
DELETE /api/data/v9.2/msdyn_kmpersonalizationsettings(<guid>)
```

## Attributes

Writable: **10** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_filtercontroldata`, `msdyn_kmpersonalizationsettingid`, `msdyn_languagecontrol`, `msdyn_name`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_kmpersonalizationsetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_kmpersonalizationsetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_kmpersonalizationsetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_kmpersonalizationsetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_kmpersonalizationsetting` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_kmpersonalizationsetting_SyncErrors` | [msdyn_kmpersonalizationsetting](msdyn_kmpersonalizationsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_kmpersonalizationsetting` |
| `msdyn_kmpersonalizationsetting_AsyncOperations` | [msdyn_kmpersonalizationsetting](msdyn_kmpersonalizationsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_kmpersonalizationsetting` |
| `msdyn_kmpersonalizationsetting_MailboxTrackingFolders` | [msdyn_kmpersonalizationsetting](msdyn_kmpersonalizationsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_kmpersonalizationsetting` |
| `msdyn_kmpersonalizationsetting_UserEntityInstanceDatas` | [msdyn_kmpersonalizationsetting](msdyn_kmpersonalizationsetting.md) | `objectid` | `objectid_msdyn_kmpersonalizationsetting` |
| `msdyn_kmpersonalizationsetting_ProcessSession` | [msdyn_kmpersonalizationsetting](msdyn_kmpersonalizationsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_kmpersonalizationsetting` |
| `msdyn_kmpersonalizationsetting_BulkDeleteFailures` | [msdyn_kmpersonalizationsetting](msdyn_kmpersonalizationsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_kmpersonalizationsetting` |
| `msdyn_kmpersonalizationsetting_PrincipalObjectAttributeAccesses` | [msdyn_kmpersonalizationsetting](msdyn_kmpersonalizationsetting.md) | `objectid` | `objectid_msdyn_kmpersonalizationsetting` |


## Source

Generated from [msdyn_kmpersonalizationsetting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_kmpersonalizationsetting')) on 2026-05-07.