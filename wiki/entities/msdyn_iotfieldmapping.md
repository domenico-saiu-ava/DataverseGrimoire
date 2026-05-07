---
logical: "msdyn_iotfieldmapping"
display: "IoT Field Mapping"
entitySetName: "msdyn_iotfieldmappings"
primaryId: "msdyn_iotfieldmappingid"
primaryName: "msdyn_modelinputfieldname"
tableType: "Standard"
ownership: "UserOwned"
---

# IoT Field Mapping

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_iotfieldmapping` |
| Display name | IoT Field Mapping |
| Display (plural) | IoT Field Mappings |
| Schema name | `msdyn_iotfieldmapping` |
| Entity set (Web API) | `msdyn_iotfieldmappings` |
| Primary id attribute | `msdyn_iotfieldmappingid` |
| Primary name attribute | `msdyn_modelinputfieldname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_iotfieldmappings?$select=msdyn_modelinputfieldname&$top=10
GET /api/data/v9.2/msdyn_iotfieldmappings(<guid>)
POST /api/data/v9.2/msdyn_iotfieldmappings
PATCH /api/data/v9.2/msdyn_iotfieldmappings(<guid>)
DELETE /api/data/v9.2/msdyn_iotfieldmappings(<guid>)
```

## Attributes

Writable: **17** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_DirectPathOrKeyPath`, `msdyn_FieldDataFormat`, `msdyn_FieldName`, `msdyn_iotfieldmappingId`, `msdyn_MappingType`, `msdyn_ModelInputFieldName`, `msdyn_SearchType`, `msdyn_ValuePath`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_iotfieldmapping` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_iotfieldmapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_iotfieldmapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_iotfieldmapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_iotfieldmapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_iotfieldmapping` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_iotfieldmapping` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_iotfieldmapping` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_iotfieldmapping_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotfieldmapping_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotfieldmapping_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_iotfieldmapping_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_iotfieldmapping_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotfieldmapping_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_iotfieldmapping_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotfieldmapping_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_iotfieldmapping.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_iotfieldmapping.md) on 2026-05-06.