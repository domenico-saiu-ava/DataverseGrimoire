---
logical: "msdyn_iotfieldmapping"
display: "Mapping dei campi IoT"
entitySetName: "msdyn_iotfieldmappings"
primaryId: "msdyn_iotfieldmappingid"
primaryName: "msdyn_modelinputfieldname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Mapping dei campi IoT

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_iotfieldmapping` |
| Display name | Mapping dei campi IoT |
| Display (plural) | Mapping dei campi IoT |
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

Writable: **16** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_directpathorkeypath`, `msdyn_fielddataformat`, `msdyn_fieldname`, `msdyn_iotfieldmappingid`, `msdyn_mappingtype`, `msdyn_modelinputfieldname`, `msdyn_searchtype`, `msdyn_valuepath`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_iotfieldmapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_iotfieldmapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_iotfieldmapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_iotfieldmapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_iotfieldmapping` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_iotfieldmapping` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_iotfieldmapping` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_iotfieldmapping` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_iotfieldmapping_SyncErrors` | [msdyn_iotfieldmapping](msdyn_iotfieldmapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotfieldmapping` |
| `msdyn_iotfieldmapping_DuplicateMatchingRecord` | [msdyn_iotfieldmapping](msdyn_iotfieldmapping.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_iotfieldmapping` |
| `msdyn_iotfieldmapping_DuplicateBaseRecord` | [msdyn_iotfieldmapping](msdyn_iotfieldmapping.md) | `baserecordid` | `baserecordid_msdyn_iotfieldmapping` |
| `msdyn_iotfieldmapping_AsyncOperations` | [msdyn_iotfieldmapping](msdyn_iotfieldmapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotfieldmapping` |
| `msdyn_iotfieldmapping_MailboxTrackingFolders` | [msdyn_iotfieldmapping](msdyn_iotfieldmapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotfieldmapping` |
| `msdyn_iotfieldmapping_UserEntityInstanceDatas` | [msdyn_iotfieldmapping](msdyn_iotfieldmapping.md) | `objectid` | `objectid_msdyn_iotfieldmapping` |
| `msdyn_iotfieldmapping_ProcessSession` | [msdyn_iotfieldmapping](msdyn_iotfieldmapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotfieldmapping` |
| `msdyn_iotfieldmapping_BulkDeleteFailures` | [msdyn_iotfieldmapping](msdyn_iotfieldmapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotfieldmapping` |
| `msdyn_iotfieldmapping_PrincipalObjectAttributeAccesses` | [msdyn_iotfieldmapping](msdyn_iotfieldmapping.md) | `objectid` | `objectid_msdyn_iotfieldmapping` |


## Source

Generated from [msdyn_iotfieldmapping (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_iotfieldmapping')) on 2026-05-07.