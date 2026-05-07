---
logical: "cai_usersettings"
display: "Configurazione Utente"
entitySetName: "cai_usersettingses"
primaryId: "cai_usersettingsid"
primaryName: "cai_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione Utente

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cai_usersettings` |
| Display name | Configurazione Utente |
| Display (plural) | Configurazioni Utente |
| Schema name | `cai_usersettings` |
| Entity set (Web API) | `cai_usersettingses` |
| Primary id attribute | `cai_usersettingsid` |
| Primary name attribute | `cai_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/cai_usersettingses?$select=cai_name&$top=10
GET /api/data/v9.2/cai_usersettingses(<guid>)
POST /api/data/v9.2/cai_usersettingses
PATCH /api/data/v9.2/cai_usersettingses(<guid>)
DELETE /api/data/v9.2/cai_usersettingses(<guid>)
```

## Attributes

Writable: **11** · Read-only: **11**

### Writable

`cai_code`, `cai_name`, `cai_userid`, `cai_usersettingsid`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`cai_userphotoid`, `createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_usersettings_userid_systemuser` | [systemuser](systemuser.md) | `cai_userid` | `cai_userid` |
| `lk_cai_usersettings_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_cai_usersettings_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_cai_usersettings_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_cai_usersettings_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_cai_usersettings` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_cai_usersettings` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_cai_usersettings` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_cai_usersettings` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `ImageDescriptor_cai_usersettings_cai_userphoto` | [imagedescriptor](imagedescriptor.md) | `cai_userphotoid` | `cai_userphotoid_imagedescriptor` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_usersettings_SyncErrors` | [cai_usersettings](cai_usersettings.md) | `regardingobjectid` | `regardingobjectid_cai_usersettings` |
| `cai_usersettings_AsyncOperations` | [cai_usersettings](cai_usersettings.md) | `regardingobjectid` | `regardingobjectid_cai_usersettings` |
| `cai_usersettings_MailboxTrackingFolders` | [cai_usersettings](cai_usersettings.md) | `regardingobjectid` | `regardingobjectid_cai_usersettings` |
| `cai_usersettings_UserEntityInstanceDatas` | [cai_usersettings](cai_usersettings.md) | `objectid` | `objectid_cai_usersettings` |
| `cai_usersettings_ProcessSession` | [cai_usersettings](cai_usersettings.md) | `regardingobjectid` | `regardingobjectid_cai_usersettings` |
| `cai_usersettings_BulkDeleteFailures` | [cai_usersettings](cai_usersettings.md) | `regardingobjectid` | `regardingobjectid_cai_usersettings` |
| `cai_usersettings_PrincipalObjectAttributeAccesses` | [cai_usersettings](cai_usersettings.md) | `objectid` | `objectid_cai_usersettings` |


## Source

Generated from [cai_usersettings (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cai_usersettings')) on 2026-05-07.