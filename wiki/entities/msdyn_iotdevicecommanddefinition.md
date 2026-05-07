---
logical: "msdyn_iotdevicecommanddefinition"
display: "IoT Device Command Definition"
entitySetName: "msdyn_iotdevicecommanddefinitions"
primaryId: "msdyn_iotdevicecommanddefinitionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# IoT Device Command Definition

Metadata for commands that a device or a device category supports.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_iotdevicecommanddefinition` |
| Display name | IoT Device Command Definition |
| Display (plural) | IoT Device Command Definitions |
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

Writable: **10** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_iotdevicecommanddefinitionId`, `msdyn_name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_iotdevicecommanddefinition` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_iotdevicecommanddefinition_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_iotdevicecommanddefinition_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_iotdevicecommanddefinition_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_iotdevicecommanddefinition_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_iotdevicecommanddefinition` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_iotdevicecommanddefinition` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_iotdevicecommanddefinition` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_iotdevicecommanddefinition_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotdevicecommanddefinition_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotdevicecommanddefinition_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_iotdevicecommanddefinition_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_iotdevicecommanddefinition_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotdevicecommanddefinition_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_iotdevicecommanddefinition_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotdevicecommanddefinition_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_msdyn_iotdevicecommanddefinition_msdyn_iotdevicecommand_Command` | _n/a_ | `msdyn_command` | _n/a_ |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_iotdevicecategorycommands` | [msdyn_iotdevicecommanddefinitionid](msdyn_iotdevicecommanddefinitionid.md) | _n/a_ | _n/a_ |
| `msdyn_iotdevicecommandparameters` | [msdyn_iotdevicecommanddefinitionid](msdyn_iotdevicecommanddefinitionid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_iotdevicecommanddefinition.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_iotdevicecommanddefinition.md) on 2026-05-06.