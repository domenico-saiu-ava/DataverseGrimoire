---
logical: "msdyn_consoleapplicationnotificationtemplate"
display: "Modello di notifica (deprecato)"
entitySetName: "msdyn_consoleapplicationnotificationtemplates"
primaryId: "msdyn_consoleapplicationnotificationtemplateid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Modello di notifica (deprecato)

Modello per una notifica

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_consoleapplicationnotificationtemplate` |
| Display name | Modello di notifica (deprecato) |
| Display (plural) | Modelli di notifica (deprecato) |
| Schema name | `msdyn_consoleapplicationnotificationtemplate` |
| Entity set (Web API) | `msdyn_consoleapplicationnotificationtemplates` |
| Primary id attribute | `msdyn_consoleapplicationnotificationtemplateid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_consoleapplicationnotificationtemplates?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_consoleapplicationnotificationtemplates(<guid>)
POST /api/data/v9.2/msdyn_consoleapplicationnotificationtemplates
PATCH /api/data/v9.2/msdyn_consoleapplicationnotificationtemplates(<guid>)
DELETE /api/data/v9.2/msdyn_consoleapplicationnotificationtemplates(<guid>)
```

## Attributes

Writable: **23** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_acceptbuttontext`, `msdyn_actionbuttons`, `msdyn_autoacceptnotification`, `msdyn_consoleapplicationnotificationtemplateid`, `msdyn_desktopnotificationsettings`, `msdyn_icon`, `msdyn_name`, `msdyn_notificationbuttons`, `msdyn_notificationfieldsplaceholder`, `msdyn_rejectbuttonautoaccept`, `msdyn_rejectbuttontext`, `msdyn_renderingorder`, `msdyn_showtimeout`, `msdyn_theme`, `msdyn_timeout`, `msdyn_title`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_consoleapplicationnotificationtemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_consoleapplicationnotificationtemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_consoleapplicationnotificationtemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_consoleapplicationnotificationtemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_consoleapplicationnotificationtemplate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_consoleapplicationnotificationtemplate` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_consoleapplicationnotificationtemplate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_consoleapplicationnotificationtemplate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_consoleapplicationnotificationtemplate_SyncErrors` | [msdyn_consoleapplicationnotificationtemplate](msdyn_consoleapplicationnotificationtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_consoleapplicationnotificationtemplate` |
| `msdyn_consoleapplicationnotificationtemplate_DuplicateMatchingRecord` | [msdyn_consoleapplicationnotificationtemplate](msdyn_consoleapplicationnotificationtemplate.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_consoleapplicationnotificationtemplate` |
| `msdyn_consoleapplicationnotificationtemplate_DuplicateBaseRecord` | [msdyn_consoleapplicationnotificationtemplate](msdyn_consoleapplicationnotificationtemplate.md) | `baserecordid` | `baserecordid_msdyn_consoleapplicationnotificationtemplate` |
| `msdyn_consoleapplicationnotificationtemplate_AsyncOperations` | [msdyn_consoleapplicationnotificationtemplate](msdyn_consoleapplicationnotificationtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_consoleapplicationnotificationtemplate` |
| `msdyn_consoleapplicationnotificationtemplate_MailboxTrackingFolders` | [msdyn_consoleapplicationnotificationtemplate](msdyn_consoleapplicationnotificationtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_consoleapplicationnotificationtemplate` |
| `msdyn_consoleapplicationnotificationtemplate_UserEntityInstanceDatas` | [msdyn_consoleapplicationnotificationtemplate](msdyn_consoleapplicationnotificationtemplate.md) | `objectid` | `objectid_msdyn_consoleapplicationnotificationtemplate` |
| `msdyn_consoleapplicationnotificationtemplate_ProcessSession` | [msdyn_consoleapplicationnotificationtemplate](msdyn_consoleapplicationnotificationtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_consoleapplicationnotificationtemplate` |
| `msdyn_consoleapplicationnotificationtemplate_BulkDeleteFailures` | [msdyn_consoleapplicationnotificationtemplate](msdyn_consoleapplicationnotificationtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_consoleapplicationnotificationtemplate` |
| `msdyn_consoleapplicationnotificationtemplate_PrincipalObjectAttributeAccesses` | [msdyn_consoleapplicationnotificationtemplate](msdyn_consoleapplicationnotificationtemplate.md) | `objectid` | `objectid_msdyn_consoleapplicationnotificationtemplate` |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_consoleapplicationnotificationtempl` | [msdyn_consoleapplicationnotificationfield](msdyn_consoleapplicationnotificationfield.md) | _n/a_ | `msdyn_msdyn_consoleapplicationnotificationtempl` |
| `msdyn_msdyn_consoleapplicationnotificationtag` | [msdyn_templatetags](msdyn_templatetags.md) | _n/a_ | `msdyn_msdyn_consoleapplicationnotificationtag` |

## Source

Generated from [msdyn_consoleapplicationnotificationtemplate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_consoleapplicationnotificationtemplate')) on 2026-05-07.