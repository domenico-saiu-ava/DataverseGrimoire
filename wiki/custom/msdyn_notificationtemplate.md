---
logical: "msdyn_notificationtemplate"
display: "Modello di notifica"
entitySetName: "msdyn_notificationtemplates"
primaryId: "msdyn_notificationtemplateid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Modello di notifica

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_notificationtemplate` |
| Display name | Modello di notifica |
| Display (plural) | Modelli di notifica |
| Schema name | `msdyn_notificationtemplate` |
| Entity set (Web API) | `msdyn_notificationtemplates` |
| Primary id attribute | `msdyn_notificationtemplateid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_notificationtemplates?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_notificationtemplates(<guid>)
POST /api/data/v9.2/msdyn_notificationtemplates
PATCH /api/data/v9.2/msdyn_notificationtemplates(<guid>)
DELETE /api/data/v9.2/msdyn_notificationtemplates(<guid>)
```

## Attributes

Writable: **24** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_acceptbuttontext`, `msdyn_autoacceptnotification`, `msdyn_autopopupsession`, `msdyn_description`, `msdyn_desktopnotificationmode`, `msdyn_icon`, `msdyn_name`, `msdyn_notificationtemplateid`, `msdyn_rejectbuttontext`, `msdyn_showrejectbutton`, `msdyn_showtimeout`, `msdyn_theme`, `msdyn_timeout`, `msdyn_title`, `msdyn_uniquename`, `msdyn_useMultiLineandMultiField`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_notificationtemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_notificationtemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_notificationtemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_notificationtemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_notificationtemplate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_notificationtemplate` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_notificationtemplate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_notificationtemplate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_notificationtemplate_SyncErrors` | [msdyn_notificationtemplate](msdyn_notificationtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_notificationtemplate` |
| `msdyn_notificationtemplate_DuplicateMatchingRecord` | [msdyn_notificationtemplate](msdyn_notificationtemplate.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_notificationtemplate` |
| `msdyn_notificationtemplate_DuplicateBaseRecord` | [msdyn_notificationtemplate](msdyn_notificationtemplate.md) | `baserecordid` | `baserecordid_msdyn_notificationtemplate` |
| `msdyn_notificationtemplate_AsyncOperations` | [msdyn_notificationtemplate](msdyn_notificationtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_notificationtemplate` |
| `msdyn_notificationtemplate_MailboxTrackingFolders` | [msdyn_notificationtemplate](msdyn_notificationtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_notificationtemplate` |
| `msdyn_notificationtemplate_UserEntityInstanceDatas` | [msdyn_notificationtemplate](msdyn_notificationtemplate.md) | `objectid` | `objectid_msdyn_notificationtemplate` |
| `msdyn_notificationtemplate_ProcessSession` | [msdyn_notificationtemplate](msdyn_notificationtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_notificationtemplate` |
| `msdyn_notificationtemplate_BulkDeleteFailures` | [msdyn_notificationtemplate](msdyn_notificationtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_notificationtemplate` |
| `msdyn_notificationtemplate_PrincipalObjectAttributeAccesses` | [msdyn_notificationtemplate](msdyn_notificationtemplate.md) | `objectid` | `objectid_msdyn_notificationtemplate` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_notificationtemplate_notificationfield` | [msdyn_notificationfield](msdyn_notificationfield.md) | _n/a_ | `msdyn_notificationtemplate_notificationfield` |

## Source

Generated from [msdyn_notificationtemplate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_notificationtemplate')) on 2026-05-07.