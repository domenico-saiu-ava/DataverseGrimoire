---
logical: "msfp_localizedemailtemplate"
display: "Modello di messaggio e-mail del sondaggio localizzato di Customer Voice"
entitySetName: "msfp_localizedemailtemplates"
primaryId: "msfp_localizedemailtemplateid"
primaryName: "msfp_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Modello di messaggio e-mail del sondaggio localizzato di Customer Voice

Archivia i dati localizzati per i modelli di messaggio e-mail.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msfp_localizedemailtemplate` |
| Display name | Modello di messaggio e-mail del sondaggio localizzato di Customer Voice |
| Display (plural) | Modelli di messaggio e-mail del sondaggio localizzato di Customer Voice |
| Schema name | `msfp_localizedemailtemplate` |
| Entity set (Web API) | `msfp_localizedemailtemplates` |
| Primary id attribute | `msfp_localizedemailtemplateid` |
| Primary name attribute | `msfp_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msfp_localizedemailtemplates?$select=msfp_name&$top=10
GET /api/data/v9.2/msfp_localizedemailtemplates(<guid>)
POST /api/data/v9.2/msfp_localizedemailtemplates
PATCH /api/data/v9.2/msfp_localizedemailtemplates(<guid>)
DELETE /api/data/v9.2/msfp_localizedemailtemplates(<guid>)
```

## Attributes

Writable: **14** · Read-only: **10**

### Writable

`importsequencenumber`, `msfp_emailtemplatebody`, `msfp_emailtemplateid`, `msfp_emailtemplatesubject`, `msfp_language`, `msfp_localizedemailtemplateid`, `msfp_name`, `msfp_version`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msfp_localizedemailtemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msfp_localizedemailtemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msfp_localizedemailtemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msfp_localizedemailtemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msfp_localizedemailtemplate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msfp_localizedemailtemplate` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msfp_localizedemailtemplate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msfp_localizedemailtemplate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msfp_msfp_emailtemplate_msfp_localizedemailtem` | [msfp_emailtemplate](msfp_emailtemplate.md) | `msfp_emailtemplateid` | `msfp_emailtemplateid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msfp_localizedemailtemplate_SyncErrors` | [msfp_localizedemailtemplate](msfp_localizedemailtemplate.md) | `regardingobjectid` | `regardingobjectid_msfp_localizedemailtemplate` |
| `msfp_localizedemailtemplate_AsyncOperations` | [msfp_localizedemailtemplate](msfp_localizedemailtemplate.md) | `regardingobjectid` | `regardingobjectid_msfp_localizedemailtemplate` |
| `msfp_localizedemailtemplate_MailboxTrackingFolders` | [msfp_localizedemailtemplate](msfp_localizedemailtemplate.md) | `regardingobjectid` | `regardingobjectid_msfp_localizedemailtemplate` |
| `msfp_localizedemailtemplate_UserEntityInstanceDatas` | [msfp_localizedemailtemplate](msfp_localizedemailtemplate.md) | `objectid` | `objectid_msfp_localizedemailtemplate` |
| `msfp_localizedemailtemplate_ProcessSession` | [msfp_localizedemailtemplate](msfp_localizedemailtemplate.md) | `regardingobjectid` | `regardingobjectid_msfp_localizedemailtemplate` |
| `msfp_localizedemailtemplate_BulkDeleteFailures` | [msfp_localizedemailtemplate](msfp_localizedemailtemplate.md) | `regardingobjectid` | `regardingobjectid_msfp_localizedemailtemplate` |
| `msfp_localizedemailtemplate_PrincipalObjectAttributeAccesses` | [msfp_localizedemailtemplate](msfp_localizedemailtemplate.md) | `objectid` | `objectid_msfp_localizedemailtemplate` |


## Source

Generated from [msfp_localizedemailtemplate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msfp_localizedemailtemplate')) on 2026-05-07.