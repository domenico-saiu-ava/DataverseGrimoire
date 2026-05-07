---
logical: "msdyn_timeofftype"
display: "Tipo di indisponibilità"
entitySetName: "msdyn_timeofftypes"
primaryId: "msdyn_timeofftypeid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Tipo di indisponibilità

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_timeofftype` |
| Display name | Tipo di indisponibilità |
| Display (plural) | Tipi di indisponibilità |
| Schema name | `msdyn_timeofftype` |
| Entity set (Web API) | `msdyn_timeofftypes` |
| Primary id attribute | `msdyn_timeofftypeid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_timeofftypes?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_timeofftypes(<guid>)
POST /api/data/v9.2/msdyn_timeofftypes
PATCH /api/data/v9.2/msdyn_timeofftypes(<guid>)
DELETE /api/data/v9.2/msdyn_timeofftypes(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_color`, `msdyn_darkthemecolor`, `msdyn_description`, `msdyn_name`, `msdyn_timeofftypeid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_timeofftype_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_timeofftype_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_timeofftype_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_timeofftype_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_timeofftype` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_timeofftype` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_timeofftype` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_timeofftype` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_wemrequest_timeofftype_msdyn_timeofftype` | [msdyn_timeofftype](msdyn_timeofftype.md) | `msdyn_timeofftype` | `msdyn_timeofftype` |
| `msdyn_timeofftype_SyncErrors` | [msdyn_timeofftype](msdyn_timeofftype.md) | `regardingobjectid` | `regardingobjectid_msdyn_timeofftype` |
| `msdyn_timeofftype_AsyncOperations` | [msdyn_timeofftype](msdyn_timeofftype.md) | `regardingobjectid` | `regardingobjectid_msdyn_timeofftype` |
| `msdyn_timeofftype_MailboxTrackingFolders` | [msdyn_timeofftype](msdyn_timeofftype.md) | `regardingobjectid` | `regardingobjectid_msdyn_timeofftype` |
| `msdyn_timeofftype_UserEntityInstanceDatas` | [msdyn_timeofftype](msdyn_timeofftype.md) | `objectid` | `objectid_msdyn_timeofftype` |
| `msdyn_timeofftype_ProcessSession` | [msdyn_timeofftype](msdyn_timeofftype.md) | `regardingobjectid` | `regardingobjectid_msdyn_timeofftype` |
| `msdyn_timeofftype_BulkDeleteFailures` | [msdyn_timeofftype](msdyn_timeofftype.md) | `regardingobjectid` | `regardingobjectid_msdyn_timeofftype` |
| `msdyn_timeofftype_PrincipalObjectAttributeAccesses` | [msdyn_timeofftype](msdyn_timeofftype.md) | `objectid` | `objectid_msdyn_timeofftype` |


## Source

Generated from [msdyn_timeofftype (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_timeofftype')) on 2026-05-07.