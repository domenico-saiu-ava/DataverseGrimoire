---
logical: "msdyn_ocliveworkitemcharacteristic"
display: "Caratteristica conversazione"
entitySetName: "msdyn_ocliveworkitemcharacteristics"
primaryId: "msdyn_ocliveworkitemcharacteristicid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Caratteristica conversazione

Caratteristica associata alla conversazione Multicanale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocliveworkitemcharacteristic` |
| Display name | Caratteristica conversazione |
| Display (plural) | Caratteristiche conversazione |
| Schema name | `msdyn_ocliveworkitemcharacteristic` |
| Entity set (Web API) | `msdyn_ocliveworkitemcharacteristics` |
| Primary id attribute | `msdyn_ocliveworkitemcharacteristicid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocliveworkitemcharacteristics?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocliveworkitemcharacteristics(<guid>)
POST /api/data/v9.2/msdyn_ocliveworkitemcharacteristics
PATCH /api/data/v9.2/msdyn_ocliveworkitemcharacteristics(<guid>)
DELETE /api/data/v9.2/msdyn_ocliveworkitemcharacteristics(<guid>)
```

## Attributes

Writable: **19** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_characteristic`, `msdyn_characteristicsource`, `msdyn_confidence`, `msdyn_createdon`, `msdyn_mlmodelid`, `msdyn_modifiedon`, `msdyn_name`, `msdyn_ocliveworkitemcharacteristicid`, `msdyn_ocliveworkitemid`, `msdyn_ratingvalue`, `msdyn_skilladdedby`, `msdyn_status`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_ocliveworkitemcharacteristic_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocliveworkitemcharacteristic_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocliveworkitemcharacteristic_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocliveworkitemcharacteristic_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_ocliveworkitemcharacteristic` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_ocliveworkitemcharacteristic` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_ocliveworkitemcharacteristic` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_ocliveworkitemcharacteristic` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_characteristic_msdyn_ocliveworkitemcharacteristic_characteristic` | [characteristic](characteristic.md) | `msdyn_characteristic` | `msdyn_characteristic` |
| `msdyn_msdyn_ocliveworkitem_msdyn_ocliveworkitemcharacteristic_ocliveworkitemid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_ocliveworkitemid` | `msdyn_ocliveworkitemid` |
| `msdyn_ratingvalue_msdyn_ocliveworkitemcharacteristic_ratingvalue` | [ratingvalue](ratingvalue.md) | `msdyn_ratingvalue` | `msdyn_ratingvalue` |
| `msdyn_ocliveworkitemcharacteristic_mlmodelid` | [msdyn_aimodel](msdyn_aimodel.md) | `msdyn_mlmodelid` | `msdyn_mlmodelid` |
| `msdyn_ocliveworkitemcharacteristic_skilladdedby` | [systemuser](systemuser.md) | `msdyn_skilladdedby` | `msdyn_skilladdedby` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocliveworkitemcharacteristic_SyncErrors` | [msdyn_ocliveworkitemcharacteristic](msdyn_ocliveworkitemcharacteristic.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkitemcharacteristic` |
| `msdyn_ocliveworkitemcharacteristic_DuplicateMatchingRecord` | [msdyn_ocliveworkitemcharacteristic](msdyn_ocliveworkitemcharacteristic.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_ocliveworkitemcharacteristic` |
| `msdyn_ocliveworkitemcharacteristic_DuplicateBaseRecord` | [msdyn_ocliveworkitemcharacteristic](msdyn_ocliveworkitemcharacteristic.md) | `baserecordid` | `baserecordid_msdyn_ocliveworkitemcharacteristic` |
| `msdyn_ocliveworkitemcharacteristic_AsyncOperations` | [msdyn_ocliveworkitemcharacteristic](msdyn_ocliveworkitemcharacteristic.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkitemcharacteristic` |
| `msdyn_ocliveworkitemcharacteristic_MailboxTrackingFolders` | [msdyn_ocliveworkitemcharacteristic](msdyn_ocliveworkitemcharacteristic.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkitemcharacteristic` |
| `msdyn_ocliveworkitemcharacteristic_UserEntityInstanceDatas` | [msdyn_ocliveworkitemcharacteristic](msdyn_ocliveworkitemcharacteristic.md) | `objectid` | `objectid_msdyn_ocliveworkitemcharacteristic` |
| `msdyn_ocliveworkitemcharacteristic_ProcessSession` | [msdyn_ocliveworkitemcharacteristic](msdyn_ocliveworkitemcharacteristic.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkitemcharacteristic` |
| `msdyn_ocliveworkitemcharacteristic_BulkDeleteFailures` | [msdyn_ocliveworkitemcharacteristic](msdyn_ocliveworkitemcharacteristic.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkitemcharacteristic` |
| `msdyn_ocliveworkitemcharacteristic_PrincipalObjectAttributeAccesses` | [msdyn_ocliveworkitemcharacteristic](msdyn_ocliveworkitemcharacteristic.md) | `objectid` | `objectid_msdyn_ocliveworkitemcharacteristic` |
| `msdyn_msdyn_ocliveworkitemcharacteristic_msdyn_ocsessioncharacteristic_ocliveworkitemcharacteristic` | [msdyn_ocliveworkitemcharacteristic](msdyn_ocliveworkitemcharacteristic.md) | `msdyn_ocliveworkitemcharacteristic` | `msdyn_ocliveworkitemcharacteristic` |


## Source

Generated from [msdyn_ocliveworkitemcharacteristic (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ocliveworkitemcharacteristic')) on 2026-05-07.