---
logical: "msdyn_urnotificationtemplate"
display: "Modello di notifica di distribuzione unificata"
entitySetName: "msdyn_urnotificationtemplates"
primaryId: "msdyn_urnotificationtemplateid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Modello di notifica di distribuzione unificata

L'entità archivia tutti i modelli utilizzati per la notifica di distribuzione unificata.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_urnotificationtemplate` |
| Display name | Modello di notifica di distribuzione unificata |
| Display (plural) | Modelli di notifica di distribuzione unificata |
| Schema name | `msdyn_urnotificationtemplate` |
| Entity set (Web API) | `msdyn_urnotificationtemplates` |
| Primary id attribute | `msdyn_urnotificationtemplateid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_urnotificationtemplates?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_urnotificationtemplates(<guid>)
POST /api/data/v9.2/msdyn_urnotificationtemplates
PATCH /api/data/v9.2/msdyn_urnotificationtemplates(<guid>)
DELETE /api/data/v9.2/msdyn_urnotificationtemplates(<guid>)
```

## Attributes

Writable: **13** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_channeltype`, `msdyn_entitylogicalname`, `msdyn_entitytitlemapping`, `msdyn_name`, `msdyn_urnotificationtemplateid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_urnotificationtemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_urnotificationtemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_urnotificationtemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_urnotificationtemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_urnotificationtemplate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_urnotificationtemplate` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_urnotificationtemplate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_urnotificationtemplate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_urnotificationtemplate_SyncErrors` | [msdyn_urnotificationtemplate](msdyn_urnotificationtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_urnotificationtemplate` |
| `msdyn_urnotificationtemplate_DuplicateMatchingRecord` | [msdyn_urnotificationtemplate](msdyn_urnotificationtemplate.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_urnotificationtemplate` |
| `msdyn_urnotificationtemplate_DuplicateBaseRecord` | [msdyn_urnotificationtemplate](msdyn_urnotificationtemplate.md) | `baserecordid` | `baserecordid_msdyn_urnotificationtemplate` |
| `msdyn_urnotificationtemplate_AsyncOperations` | [msdyn_urnotificationtemplate](msdyn_urnotificationtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_urnotificationtemplate` |
| `msdyn_urnotificationtemplate_MailboxTrackingFolders` | [msdyn_urnotificationtemplate](msdyn_urnotificationtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_urnotificationtemplate` |
| `msdyn_urnotificationtemplate_UserEntityInstanceDatas` | [msdyn_urnotificationtemplate](msdyn_urnotificationtemplate.md) | `objectid` | `objectid_msdyn_urnotificationtemplate` |
| `msdyn_urnotificationtemplate_ProcessSession` | [msdyn_urnotificationtemplate](msdyn_urnotificationtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_urnotificationtemplate` |
| `msdyn_urnotificationtemplate_BulkDeleteFailures` | [msdyn_urnotificationtemplate](msdyn_urnotificationtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_urnotificationtemplate` |
| `msdyn_urnotificationtemplate_PrincipalObjectAttributeAccesses` | [msdyn_urnotificationtemplate](msdyn_urnotificationtemplate.md) | `objectid` | `objectid_msdyn_urnotificationtemplate` |
| `msdyn_msdyn_urnotificationtemplate_msdyn_urnotificationtemplatemapping_notificationtemplate` | [msdyn_urnotificationtemplate](msdyn_urnotificationtemplate.md) | `msdyn_notificationtemplate` | `msdyn_notificationtemplate` |


## Source

Generated from [msdyn_urnotificationtemplate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_urnotificationtemplate')) on 2026-05-07.