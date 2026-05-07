---
logical: "msdyn_requirementcharacteristic"
display: "Caratteristica requisito"
entitySetName: "msdyn_requirementcharacteristics"
primaryId: "msdyn_requirementcharacteristicid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Caratteristica requisito

Caratteristica requisito

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_requirementcharacteristic` |
| Display name | Caratteristica requisito |
| Display (plural) | Caratteristiche requisiti |
| Schema name | `msdyn_requirementcharacteristic` |
| Entity set (Web API) | `msdyn_requirementcharacteristics` |
| Primary id attribute | `msdyn_requirementcharacteristicid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_requirementcharacteristics?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_requirementcharacteristics(<guid>)
POST /api/data/v9.2/msdyn_requirementcharacteristics
PATCH /api/data/v9.2/msdyn_requirementcharacteristics(<guid>)
DELETE /api/data/v9.2/msdyn_requirementcharacteristics(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_characteristic`, `msdyn_name`, `msdyn_ratingvalue`, `msdyn_requirementcharacteristicid`, `msdyn_resourcerequirement`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_characteristic_msdyn_requirementcharacteristic_characteristic` | [characteristic](characteristic.md) | `msdyn_characteristic` | `msdyn_Characteristic` |
| `msdyn_ratingvalue_msdyn_requirementcharacteristic_ratingvalue` | [ratingvalue](ratingvalue.md) | `msdyn_ratingvalue` | `msdyn_ratingvalue` |
| `msdyn_resourcerequirement_requirementcharacteristic_resourcerequirement` | [msdyn_resourcerequirement](msdyn_resourcerequirement.md) | `msdyn_resourcerequirement` | `msdyn_ResourceRequirement` |
| `lk_msdyn_requirementcharacteristic_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_requirementcharacteristic_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_requirementcharacteristic_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_requirementcharacteristic_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_requirementcharacteristic` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_requirementcharacteristic` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_requirementcharacteristic` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_requirementcharacteristic` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_requirementcharacteristic_DuplicateMatchingRecord` | [msdyn_requirementcharacteristic](msdyn_requirementcharacteristic.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_requirementcharacteristic` |
| `msdyn_requirementcharacteristic_DuplicateBaseRecord` | [msdyn_requirementcharacteristic](msdyn_requirementcharacteristic.md) | `baserecordid` | `baserecordid_msdyn_requirementcharacteristic` |
| `msdyn_requirementcharacteristic_Annotations` | [msdyn_requirementcharacteristic](msdyn_requirementcharacteristic.md) | `objectid` | `objectid_msdyn_requirementcharacteristic` |
| `msdyn_requirementcharacteristic_SyncErrors` | [msdyn_requirementcharacteristic](msdyn_requirementcharacteristic.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementcharacteristic` |
| `msdyn_requirementcharacteristic_AsyncOperations` | [msdyn_requirementcharacteristic](msdyn_requirementcharacteristic.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementcharacteristic` |
| `msdyn_requirementcharacteristic_MailboxTrackingFolders` | [msdyn_requirementcharacteristic](msdyn_requirementcharacteristic.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementcharacteristic` |
| `msdyn_requirementcharacteristic_UserEntityInstanceDatas` | [msdyn_requirementcharacteristic](msdyn_requirementcharacteristic.md) | `objectid` | `objectid_msdyn_requirementcharacteristic` |
| `msdyn_requirementcharacteristic_ProcessSession` | [msdyn_requirementcharacteristic](msdyn_requirementcharacteristic.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementcharacteristic` |
| `msdyn_requirementcharacteristic_BulkDeleteFailures` | [msdyn_requirementcharacteristic](msdyn_requirementcharacteristic.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementcharacteristic` |
| `msdyn_requirementcharacteristic_PrincipalObjectAttributeAccesses` | [msdyn_requirementcharacteristic](msdyn_requirementcharacteristic.md) | `objectid` | `objectid_msdyn_requirementcharacteristic` |


## Source

Generated from [msdyn_requirementcharacteristic (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_requirementcharacteristic')) on 2026-05-07.