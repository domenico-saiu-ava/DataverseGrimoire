---
logical: "msdyn_ocsessioncharacteristic"
display: "Caratteristica sessione"
entitySetName: "msdyn_ocsessioncharacteristics"
primaryId: "msdyn_ocsessioncharacteristicid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Caratteristica sessione

Caratteristica associata alla sessione Multicanale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocsessioncharacteristic` |
| Display name | Caratteristica sessione |
| Display (plural) | Caratteristiche sessione |
| Schema name | `msdyn_ocsessioncharacteristic` |
| Entity set (Web API) | `msdyn_ocsessioncharacteristics` |
| Primary id attribute | `msdyn_ocsessioncharacteristicid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocsessioncharacteristics?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocsessioncharacteristics(<guid>)
POST /api/data/v9.2/msdyn_ocsessioncharacteristics
PATCH /api/data/v9.2/msdyn_ocsessioncharacteristics(<guid>)
DELETE /api/data/v9.2/msdyn_ocsessioncharacteristics(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_name`, `msdyn_ocliveworkitemcharacteristic`, `msdyn_ocsession`, `msdyn_ocsessioncharacteristicid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_ocsessioncharacteristic_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocsessioncharacteristic_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocsessioncharacteristic_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocsessioncharacteristic_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_ocsessioncharacteristic` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_ocsessioncharacteristic` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_ocsessioncharacteristic` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_ocsessioncharacteristic` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_ocliveworkitemcharacteristic_msdyn_ocsessioncharacteristic_ocliveworkitemcharacteristic` | [msdyn_ocliveworkitemcharacteristic](msdyn_ocliveworkitemcharacteristic.md) | `msdyn_ocliveworkitemcharacteristic` | `msdyn_ocliveworkitemcharacteristic` |
| `msdyn_ocsession_sessioncharacteristic_nested` | [msdyn_ocsession](msdyn_ocsession.md) | `msdyn_ocsession` | `msdyn_ocsession` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocsessioncharacteristic_SyncErrors` | [msdyn_ocsessioncharacteristic](msdyn_ocsessioncharacteristic.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsessioncharacteristic` |
| `msdyn_ocsessioncharacteristic_DuplicateMatchingRecord` | [msdyn_ocsessioncharacteristic](msdyn_ocsessioncharacteristic.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_ocsessioncharacteristic` |
| `msdyn_ocsessioncharacteristic_DuplicateBaseRecord` | [msdyn_ocsessioncharacteristic](msdyn_ocsessioncharacteristic.md) | `baserecordid` | `baserecordid_msdyn_ocsessioncharacteristic` |
| `msdyn_ocsessioncharacteristic_AsyncOperations` | [msdyn_ocsessioncharacteristic](msdyn_ocsessioncharacteristic.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsessioncharacteristic` |
| `msdyn_ocsessioncharacteristic_MailboxTrackingFolders` | [msdyn_ocsessioncharacteristic](msdyn_ocsessioncharacteristic.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsessioncharacteristic` |
| `msdyn_ocsessioncharacteristic_UserEntityInstanceDatas` | [msdyn_ocsessioncharacteristic](msdyn_ocsessioncharacteristic.md) | `objectid` | `objectid_msdyn_ocsessioncharacteristic` |
| `msdyn_ocsessioncharacteristic_ProcessSession` | [msdyn_ocsessioncharacteristic](msdyn_ocsessioncharacteristic.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsessioncharacteristic` |
| `msdyn_ocsessioncharacteristic_BulkDeleteFailures` | [msdyn_ocsessioncharacteristic](msdyn_ocsessioncharacteristic.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsessioncharacteristic` |
| `msdyn_ocsessioncharacteristic_PrincipalObjectAttributeAccesses` | [msdyn_ocsessioncharacteristic](msdyn_ocsessioncharacteristic.md) | `objectid` | `objectid_msdyn_ocsessioncharacteristic` |


## Source

Generated from [msdyn_ocsessioncharacteristic (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ocsessioncharacteristic')) on 2026-05-07.