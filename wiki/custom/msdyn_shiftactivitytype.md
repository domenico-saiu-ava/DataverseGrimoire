---
logical: "msdyn_shiftactivitytype"
display: "Tipo di attività turno"
entitySetName: "msdyn_shiftactivitytypes"
primaryId: "msdyn_shiftactivitytypeid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Tipo di attività turno

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_shiftactivitytype` |
| Display name | Tipo di attività turno |
| Display (plural) | Tipi di attività turno |
| Schema name | `msdyn_shiftactivitytype` |
| Entity set (Web API) | `msdyn_shiftactivitytypes` |
| Primary id attribute | `msdyn_shiftactivitytypeid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_shiftactivitytypes?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_shiftactivitytypes(<guid>)
POST /api/data/v9.2/msdyn_shiftactivitytypes
PATCH /api/data/v9.2/msdyn_shiftactivitytypes(<guid>)
DELETE /api/data/v9.2/msdyn_shiftactivitytypes(<guid>)
```

## Attributes

Writable: **18** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_adherencetolerance`, `msdyn_allowedpresencestates`, `msdyn_color`, `msdyn_darkthemecolor`, `msdyn_description`, `msdyn_duration`, `msdyn_ispaid`, `msdyn_name`, `msdyn_shiftactivitytypeid`, `msdyn_shiftassignmentstatus`, `msdyn_trackadherence`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_shiftactivitytype_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_shiftactivitytype_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_shiftactivitytype_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_shiftactivitytype_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_shiftactivitytype` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_shiftactivitytype` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_shiftactivitytype` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_shiftactivitytype` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_bookableresourcebooking_msdyn_shiftactivitytype` | [msdyn_shiftactivitytype](msdyn_shiftactivitytype.md) | `msdyn_shiftactivitytype` | `msdyn_shiftactivitytype` |
| `msdyn_resourcerequirementdetail_shiftactivityty` | [msdyn_shiftactivitytype](msdyn_shiftactivitytype.md) | `msdyn_shiftactivitytypeid` | `msdyn_shiftactivitytypeid` |
| `msdyn_shiftactivitytype_SyncErrors` | [msdyn_shiftactivitytype](msdyn_shiftactivitytype.md) | `regardingobjectid` | `regardingobjectid_msdyn_shiftactivitytype` |
| `msdyn_shiftactivitytype_AsyncOperations` | [msdyn_shiftactivitytype](msdyn_shiftactivitytype.md) | `regardingobjectid` | `regardingobjectid_msdyn_shiftactivitytype` |
| `msdyn_shiftactivitytype_MailboxTrackingFolders` | [msdyn_shiftactivitytype](msdyn_shiftactivitytype.md) | `regardingobjectid` | `regardingobjectid_msdyn_shiftactivitytype` |
| `msdyn_shiftactivitytype_UserEntityInstanceDatas` | [msdyn_shiftactivitytype](msdyn_shiftactivitytype.md) | `objectid` | `objectid_msdyn_shiftactivitytype` |
| `msdyn_shiftactivitytype_ProcessSession` | [msdyn_shiftactivitytype](msdyn_shiftactivitytype.md) | `regardingobjectid` | `regardingobjectid_msdyn_shiftactivitytype` |
| `msdyn_shiftactivitytype_BulkDeleteFailures` | [msdyn_shiftactivitytype](msdyn_shiftactivitytype.md) | `regardingobjectid` | `regardingobjectid_msdyn_shiftactivitytype` |
| `msdyn_shiftactivitytype_PrincipalObjectAttributeAccesses` | [msdyn_shiftactivitytype](msdyn_shiftactivitytype.md) | `objectid` | `objectid_msdyn_shiftactivitytype` |


## Source

Generated from [msdyn_shiftactivitytype (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_shiftactivitytype')) on 2026-05-07.