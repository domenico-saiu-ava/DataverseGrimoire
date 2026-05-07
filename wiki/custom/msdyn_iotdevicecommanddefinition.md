---
logical: "msdyn_iotdevicecommanddefinition"
display: "Definizione dei comandi del dispositivo IoT"
entitySetName: "msdyn_iotdevicecommanddefinitions"
primaryId: "msdyn_iotdevicecommanddefinitionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Definizione dei comandi del dispositivo IoT

Metadati per i comandi supportati da un dispositivo o da una categoria di dispositivo.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_iotdevicecommanddefinition` |
| Display name | Definizione dei comandi del dispositivo IoT |
| Display (plural) | Definizioni dei comandi del dispositivo IoT |
| Schema name | `msdyn_iotdevicecommanddefinition` |
| Entity set (Web API) | `msdyn_iotdevicecommanddefinitions` |
| Primary id attribute | `msdyn_iotdevicecommanddefinitionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_iotdevicecommanddefinitions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_iotdevicecommanddefinitions(<guid>)
POST /api/data/v9.2/msdyn_iotdevicecommanddefinitions
PATCH /api/data/v9.2/msdyn_iotdevicecommanddefinitions(<guid>)
DELETE /api/data/v9.2/msdyn_iotdevicecommanddefinitions(<guid>)
```

## Attributes

Writable: **9** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_iotdevicecommanddefinitionid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_iotdevicecommanddefinition_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_iotdevicecommanddefinition_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_iotdevicecommanddefinition_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_iotdevicecommanddefinition_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_iotdevicecommanddefinition` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_iotdevicecommanddefinition` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_iotdevicecommanddefinition` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_iotdevicecommanddefinition` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_iotdevicecommanddefinition_SyncErrors` | [msdyn_iotdevicecommanddefinition](msdyn_iotdevicecommanddefinition.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotdevicecommanddefinition` |
| `msdyn_iotdevicecommanddefinition_DuplicateMatchingRecord` | [msdyn_iotdevicecommanddefinition](msdyn_iotdevicecommanddefinition.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_iotdevicecommanddefinition` |
| `msdyn_iotdevicecommanddefinition_DuplicateBaseRecord` | [msdyn_iotdevicecommanddefinition](msdyn_iotdevicecommanddefinition.md) | `baserecordid` | `baserecordid_msdyn_iotdevicecommanddefinition` |
| `msdyn_iotdevicecommanddefinition_AsyncOperations` | [msdyn_iotdevicecommanddefinition](msdyn_iotdevicecommanddefinition.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotdevicecommanddefinition` |
| `msdyn_iotdevicecommanddefinition_MailboxTrackingFolders` | [msdyn_iotdevicecommanddefinition](msdyn_iotdevicecommanddefinition.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotdevicecommanddefinition` |
| `msdyn_iotdevicecommanddefinition_UserEntityInstanceDatas` | [msdyn_iotdevicecommanddefinition](msdyn_iotdevicecommanddefinition.md) | `objectid` | `objectid_msdyn_iotdevicecommanddefinition` |
| `msdyn_iotdevicecommanddefinition_ProcessSession` | [msdyn_iotdevicecommanddefinition](msdyn_iotdevicecommanddefinition.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotdevicecommanddefinition` |
| `msdyn_iotdevicecommanddefinition_BulkDeleteFailures` | [msdyn_iotdevicecommanddefinition](msdyn_iotdevicecommanddefinition.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotdevicecommanddefinition` |
| `msdyn_iotdevicecommanddefinition_PrincipalObjectAttributeAccesses` | [msdyn_iotdevicecommanddefinition](msdyn_iotdevicecommanddefinition.md) | `objectid` | `objectid_msdyn_iotdevicecommanddefinition` |
| `msdyn_msdyn_iotdevicecommanddefinition_msdyn_iotdevicecommand_Command` | [msdyn_iotdevicecommanddefinition](msdyn_iotdevicecommanddefinition.md) | `msdyn_command` | `msdyn_Command` |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_iotdevicecategorycommands` | [msdyn_iotdevicecategory](msdyn_iotdevicecategory.md) | _n/a_ | `msdyn_iotdevicecategorycommands` |
| `msdyn_iotdevicecommandparameters` | [msdyn_iotpropertydefinition](msdyn_iotpropertydefinition.md) | _n/a_ | `msdyn_iotdevicecommandparameters` |

## Source

Generated from [msdyn_iotdevicecommanddefinition (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_iotdevicecommanddefinition')) on 2026-05-07.