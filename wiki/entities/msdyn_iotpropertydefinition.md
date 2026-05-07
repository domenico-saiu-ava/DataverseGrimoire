---
logical: "msdyn_iotpropertydefinition"
display: "IoT Property Definition"
entitySetName: "msdyn_iotpropertydefinitions"
primaryId: "msdyn_iotpropertydefinitionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# IoT Property Definition

Defines a device property or a parameter that can be used for one or more command definitions.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_iotpropertydefinition` |
| Display name | IoT Property Definition |
| Display (plural) | IoT Property Definitions |
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

Writable: **16** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_AdditionalProperties`, `msdyn_Editable`, `msdyn_iotpropertydefinitionId`, `msdyn_name`, `msdyn_ParentProperty`, `msdyn_Type`, `msdyn_unit`, `msdyn_Visible`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_iotpropertydefinition` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_iotpropertydefinition_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_iotpropertydefinition_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_iotpropertydefinition_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_iotpropertydefinition_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_iotpropertydefinition_msdyn_iotpropertydefinition_ParentParameter` | [msdyn_iotpropertydefinition](msdyn_iotpropertydefinition.md) | `msdyn_parentproperty` | `msdyn_ParentProperty` |
| `owner_msdyn_iotpropertydefinition` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_iotpropertydefinition` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_iotpropertydefinition` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_iotdevicevisualizationconfiguration_measurement` | _n/a_ | `msdyn_measurement` | _n/a_ |
| `msdyn_iotpropertydefinition_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotpropertydefinition_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotpropertydefinition_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_iotpropertydefinition_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_iotpropertydefinition_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotpropertydefinition_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_iotpropertydefinition_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotpropertydefinition_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_msdyn_iotpropertydefinition_msdyn_iotdeviceproperty_Property` | _n/a_ | `msdyn_property` | _n/a_ |
| `msdyn_msdyn_iotpropertydefinition_msdyn_iotpropertydefinition_ParentParameter` | _n/a_ | `msdyn_parentproperty` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_iotdevicecommandparameters` | [msdyn_iotpropertydefinitionid](msdyn_iotpropertydefinitionid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_iotpropertydefinition.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_iotpropertydefinition.md) on 2026-05-06.