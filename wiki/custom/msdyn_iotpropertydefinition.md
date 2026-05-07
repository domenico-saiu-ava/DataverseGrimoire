---
logical: "msdyn_iotpropertydefinition"
display: "Definizione della proprietà IoT"
entitySetName: "msdyn_iotpropertydefinitions"
primaryId: "msdyn_iotpropertydefinitionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Definizione della proprietà IoT

Definisce una proprietà del dispositivo o parametro che può essere utilizzato per una o più definizioni dei comandi.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_iotpropertydefinition` |
| Display name | Definizione della proprietà IoT |
| Display (plural) | Definizioni della proprietà IoT |
| Schema name | `msdyn_iotpropertydefinition` |
| Entity set (Web API) | `msdyn_iotpropertydefinitions` |
| Primary id attribute | `msdyn_iotpropertydefinitionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_iotpropertydefinitions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_iotpropertydefinitions(<guid>)
POST /api/data/v9.2/msdyn_iotpropertydefinitions
PATCH /api/data/v9.2/msdyn_iotpropertydefinitions(<guid>)
DELETE /api/data/v9.2/msdyn_iotpropertydefinitions(<guid>)
```

## Attributes

Writable: **15** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_additionalproperties`, `msdyn_editable`, `msdyn_iotpropertydefinitionid`, `msdyn_name`, `msdyn_parentproperty`, `msdyn_type`, `msdyn_unit`, `msdyn_visible`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_iotpropertydefinition_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_iotpropertydefinition_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_iotpropertydefinition_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_iotpropertydefinition_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_iotpropertydefinition` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_iotpropertydefinition` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_iotpropertydefinition` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_iotpropertydefinition` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_iotpropertydefinition_msdyn_iotpropertydefinition_ParentParameter` | [msdyn_iotpropertydefinition](msdyn_iotpropertydefinition.md) | `msdyn_parentproperty` | `msdyn_ParentProperty` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_iotpropertydefinition_SyncErrors` | [msdyn_iotpropertydefinition](msdyn_iotpropertydefinition.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotpropertydefinition` |
| `msdyn_iotpropertydefinition_DuplicateMatchingRecord` | [msdyn_iotpropertydefinition](msdyn_iotpropertydefinition.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_iotpropertydefinition` |
| `msdyn_iotpropertydefinition_DuplicateBaseRecord` | [msdyn_iotpropertydefinition](msdyn_iotpropertydefinition.md) | `baserecordid` | `baserecordid_msdyn_iotpropertydefinition` |
| `msdyn_iotpropertydefinition_AsyncOperations` | [msdyn_iotpropertydefinition](msdyn_iotpropertydefinition.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotpropertydefinition` |
| `msdyn_iotpropertydefinition_MailboxTrackingFolders` | [msdyn_iotpropertydefinition](msdyn_iotpropertydefinition.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotpropertydefinition` |
| `msdyn_iotpropertydefinition_UserEntityInstanceDatas` | [msdyn_iotpropertydefinition](msdyn_iotpropertydefinition.md) | `objectid` | `objectid_msdyn_iotpropertydefinition` |
| `msdyn_iotpropertydefinition_ProcessSession` | [msdyn_iotpropertydefinition](msdyn_iotpropertydefinition.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotpropertydefinition` |
| `msdyn_iotpropertydefinition_BulkDeleteFailures` | [msdyn_iotpropertydefinition](msdyn_iotpropertydefinition.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotpropertydefinition` |
| `msdyn_iotpropertydefinition_PrincipalObjectAttributeAccesses` | [msdyn_iotpropertydefinition](msdyn_iotpropertydefinition.md) | `objectid` | `objectid_msdyn_iotpropertydefinition` |
| `msdyn_iotdevicevisualizationconfiguration_measurement` | [msdyn_iotpropertydefinition](msdyn_iotpropertydefinition.md) | `msdyn_measurement` | `msdyn_Measurement` |
| `msdyn_msdyn_iotpropertydefinition_msdyn_iotdeviceproperty_Property` | [msdyn_iotpropertydefinition](msdyn_iotpropertydefinition.md) | `msdyn_property` | `msdyn_Property` |
| `msdyn_msdyn_iotpropertydefinition_msdyn_iotpropertydefinition_ParentParameter` | [msdyn_iotpropertydefinition](msdyn_iotpropertydefinition.md) | `msdyn_parentproperty` | `msdyn_ParentProperty` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_iotdevicecommandparameters` | [msdyn_iotdevicecommanddefinition](msdyn_iotdevicecommanddefinition.md) | _n/a_ | `msdyn_iotdevicecommandparameters` |

## Source

Generated from [msdyn_iotpropertydefinition (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_iotpropertydefinition')) on 2026-05-07.