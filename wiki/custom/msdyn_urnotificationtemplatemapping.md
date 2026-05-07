---
logical: "msdyn_urnotificationtemplatemapping"
display: "Mapping modelli di notifica di distribuzione unificata"
entitySetName: "msdyn_urnotificationtemplatemappings"
primaryId: "msdyn_urnotificationtemplatemappingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Mapping modelli di notifica di distribuzione unificata

Questa entità archivia il mapping per il flusso di lavoro e il modello di notifica.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_urnotificationtemplatemapping` |
| Display name | Mapping modelli di notifica di distribuzione unificata |
| Display (plural) | Mapping modelli di notifica di distribuzione unificata |
| Schema name | `msdyn_urnotificationtemplatemapping` |
| Entity set (Web API) | `msdyn_urnotificationtemplatemappings` |
| Primary id attribute | `msdyn_urnotificationtemplatemappingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_urnotificationtemplatemappings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_urnotificationtemplatemappings(<guid>)
POST /api/data/v9.2/msdyn_urnotificationtemplatemappings
PATCH /api/data/v9.2/msdyn_urnotificationtemplatemappings(<guid>)
DELETE /api/data/v9.2/msdyn_urnotificationtemplatemappings(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_name`, `msdyn_notificationtemplate`, `msdyn_urnotificationtemplatemappingid`, `msdyn_workstream`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_urnotificationtemplatemapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_urnotificationtemplatemapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_urnotificationtemplatemapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_urnotificationtemplatemapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_urnotificationtemplatemapping` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_urnotificationtemplatemapping` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_urnotificationtemplatemapping` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_urnotificationtemplatemapping` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_liveworkstream_msdyn_urnotificationtemplatemapping_workstream` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_workstream` | `msdyn_workstream` |
| `msdyn_msdyn_urnotificationtemplate_msdyn_urnotificationtemplatemapping_notificationtemplate` | [msdyn_urnotificationtemplate](msdyn_urnotificationtemplate.md) | `msdyn_notificationtemplate` | `msdyn_notificationtemplate` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_urnotificationtemplatemapping_SyncErrors` | [msdyn_urnotificationtemplatemapping](msdyn_urnotificationtemplatemapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_urnotificationtemplatemapping` |
| `msdyn_urnotificationtemplatemapping_DuplicateMatchingRecord` | [msdyn_urnotificationtemplatemapping](msdyn_urnotificationtemplatemapping.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_urnotificationtemplatemapping` |
| `msdyn_urnotificationtemplatemapping_DuplicateBaseRecord` | [msdyn_urnotificationtemplatemapping](msdyn_urnotificationtemplatemapping.md) | `baserecordid` | `baserecordid_msdyn_urnotificationtemplatemapping` |
| `msdyn_urnotificationtemplatemapping_AsyncOperations` | [msdyn_urnotificationtemplatemapping](msdyn_urnotificationtemplatemapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_urnotificationtemplatemapping` |
| `msdyn_urnotificationtemplatemapping_MailboxTrackingFolders` | [msdyn_urnotificationtemplatemapping](msdyn_urnotificationtemplatemapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_urnotificationtemplatemapping` |
| `msdyn_urnotificationtemplatemapping_UserEntityInstanceDatas` | [msdyn_urnotificationtemplatemapping](msdyn_urnotificationtemplatemapping.md) | `objectid` | `objectid_msdyn_urnotificationtemplatemapping` |
| `msdyn_urnotificationtemplatemapping_ProcessSession` | [msdyn_urnotificationtemplatemapping](msdyn_urnotificationtemplatemapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_urnotificationtemplatemapping` |
| `msdyn_urnotificationtemplatemapping_BulkDeleteFailures` | [msdyn_urnotificationtemplatemapping](msdyn_urnotificationtemplatemapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_urnotificationtemplatemapping` |
| `msdyn_urnotificationtemplatemapping_PrincipalObjectAttributeAccesses` | [msdyn_urnotificationtemplatemapping](msdyn_urnotificationtemplatemapping.md) | `objectid` | `objectid_msdyn_urnotificationtemplatemapping` |


## Source

Generated from [msdyn_urnotificationtemplatemapping (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_urnotificationtemplatemapping')) on 2026-05-07.