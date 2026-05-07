---
logical: "msdyn_propertylog"
display: "Registro proprietà"
entitySetName: "msdyn_propertylogs"
primaryId: "msdyn_propertylogid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Registro proprietà

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_propertylog` |
| Display name | Registro proprietà |
| Display (plural) | Registri proprietà |
| Schema name | `msdyn_propertylog` |
| Entity set (Web API) | `msdyn_propertylogs` |
| Primary id attribute | `msdyn_propertylogid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_propertylogs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_propertylogs(<guid>)
POST /api/data/v9.2/msdyn_propertylogs
PATCH /api/data/v9.2/msdyn_propertylogs(<guid>)
DELETE /api/data/v9.2/msdyn_propertylogs(<guid>)
```

## Attributes

Writable: **20** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_booleanvalue`, `msdyn_customerasset`, `msdyn_datevalue`, `msdyn_delta`, `msdyn_functionallocation`, `msdyn_islatest`, `msdyn_name`, `msdyn_numbervalue`, `msdyn_property`, `msdyn_propertylogid`, `msdyn_readingtime`, `msdyn_stringvalue`, `msdyn_valuetodisplay`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_propertylog_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_propertylog_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_propertylog_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_propertylog_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_propertylog` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_propertylog` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_propertylog` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_propertylog` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_customerasset_msdyn_propertylog_customerasset` | [msdyn_customerasset](msdyn_customerasset.md) | `msdyn_customerasset` | `msdyn_customerasset` |
| `msdyn_msdyn_functionallocation_msdyn_propertylog_FunctionalLocation` | [msdyn_functionallocation](msdyn_functionallocation.md) | `msdyn_functionallocation` | `msdyn_FunctionalLocation` |
| `msdyn_msdyn_property_msdyn_propertylog_property` | [msdyn_property](msdyn_property.md) | `msdyn_property` | `msdyn_property` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_propertylog_SyncErrors` | [msdyn_propertylog](msdyn_propertylog.md) | `regardingobjectid` | `regardingobjectid_msdyn_propertylog` |
| `msdyn_propertylog_AsyncOperations` | [msdyn_propertylog](msdyn_propertylog.md) | `regardingobjectid` | `regardingobjectid_msdyn_propertylog` |
| `msdyn_propertylog_MailboxTrackingFolders` | [msdyn_propertylog](msdyn_propertylog.md) | `regardingobjectid` | `regardingobjectid_msdyn_propertylog` |
| `msdyn_propertylog_UserEntityInstanceDatas` | [msdyn_propertylog](msdyn_propertylog.md) | `objectid` | `objectid_msdyn_propertylog` |
| `msdyn_propertylog_ProcessSession` | [msdyn_propertylog](msdyn_propertylog.md) | `regardingobjectid` | `regardingobjectid_msdyn_propertylog` |
| `msdyn_propertylog_BulkDeleteFailures` | [msdyn_propertylog](msdyn_propertylog.md) | `regardingobjectid` | `regardingobjectid_msdyn_propertylog` |
| `msdyn_propertylog_PrincipalObjectAttributeAccesses` | [msdyn_propertylog](msdyn_propertylog.md) | `objectid` | `objectid_msdyn_propertylog` |


## Source

Generated from [msdyn_propertylog (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_propertylog')) on 2026-05-07.