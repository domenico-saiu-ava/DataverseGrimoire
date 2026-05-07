---
logical: "msdyn_functionallocationtype"
display: "Tipo di unità funzionale"
entitySetName: "msdyn_functionallocationtypes"
primaryId: "msdyn_functionallocationtypeid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Tipo di unità funzionale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_functionallocationtype` |
| Display name | Tipo di unità funzionale |
| Display (plural) | Tipi di unità funzionali |
| Schema name | `msdyn_FunctionalLocationType` |
| Entity set (Web API) | `msdyn_functionallocationtypes` |
| Primary id attribute | `msdyn_functionallocationtypeid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_functionallocationtypes?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_functionallocationtypes(<guid>)
POST /api/data/v9.2/msdyn_functionallocationtypes
PATCH /api/data/v9.2/msdyn_functionallocationtypes(<guid>)
DELETE /api/data/v9.2/msdyn_functionallocationtypes(<guid>)
```

## Attributes

Writable: **9** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_functionallocationtypeid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_functionallocationtype_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_functionallocationtype_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_functionallocationtype_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_functionallocationtype_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_functionallocationtype` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_functionallocationtype` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_functionallocationtype` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_functionallocationtype` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_functionallocationtype_SyncErrors` | [msdyn_functionallocationtype](msdyn_functionallocationtype.md) | `regardingobjectid` | `regardingobjectid_msdyn_functionallocationtype` |
| `msdyn_functionallocationtype_AsyncOperations` | [msdyn_functionallocationtype](msdyn_functionallocationtype.md) | `regardingobjectid` | `regardingobjectid_msdyn_functionallocationtype` |
| `msdyn_functionallocationtype_MailboxTrackingFolders` | [msdyn_functionallocationtype](msdyn_functionallocationtype.md) | `regardingobjectid` | `regardingobjectid_msdyn_functionallocationtype` |
| `msdyn_functionallocationtype_UserEntityInstanceDatas` | [msdyn_functionallocationtype](msdyn_functionallocationtype.md) | `objectid` | `objectid_msdyn_functionallocationtype` |
| `msdyn_functionallocationtype_ProcessSession` | [msdyn_functionallocationtype](msdyn_functionallocationtype.md) | `regardingobjectid` | `regardingobjectid_msdyn_functionallocationtype` |
| `msdyn_functionallocationtype_BulkDeleteFailures` | [msdyn_functionallocationtype](msdyn_functionallocationtype.md) | `regardingobjectid` | `regardingobjectid_msdyn_functionallocationtype` |
| `msdyn_functionallocationtype_PrincipalObjectAttributeAccesses` | [msdyn_functionallocationtype](msdyn_functionallocationtype.md) | `objectid` | `objectid_msdyn_functionallocationtype` |
| `msdyn_FunctionalLocation_FunctionalLocationTyp` | [msdyn_functionallocationtype](msdyn_functionallocationtype.md) | `msdyn_functionallocationtype` | `msdyn_FunctionalLocationType` |
| `msdyn_msdyn_functionallocationtype_msdyn_locationtypetemplateassociation_functionallocationtype` | [msdyn_functionallocationtype](msdyn_functionallocationtype.md) | `msdyn_functionallocationtype` | `msdyn_functionallocationtype` |


## Source

Generated from [msdyn_functionallocationtype (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_functionallocationtype')) on 2026-05-07.