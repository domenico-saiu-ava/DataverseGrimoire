---
logical: "msdyn_property"
display: "Definizione proprietà"
entitySetName: "msdyn_properties"
primaryId: "msdyn_propertyid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Definizione proprietà

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_property` |
| Display name | Definizione proprietà |
| Display (plural) | Definizioni proprietà |
| Schema name | `msdyn_property` |
| Entity set (Web API) | `msdyn_properties` |
| Primary id attribute | `msdyn_propertyid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_properties?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_properties(<guid>)
POST /api/data/v9.2/msdyn_properties
PATCH /api/data/v9.2/msdyn_properties(<guid>)
DELETE /api/data/v9.2/msdyn_properties(<guid>)
```

## Attributes

Writable: **10** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_name`, `msdyn_propertyid`, `msdyn_propertytype`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_property_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_property_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_property_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_property_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_property` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_property` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_property` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_property` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_property_SyncErrors` | [msdyn_property](msdyn_property.md) | `regardingobjectid` | `regardingobjectid_msdyn_property` |
| `msdyn_property_AsyncOperations` | [msdyn_property](msdyn_property.md) | `regardingobjectid` | `regardingobjectid_msdyn_property` |
| `msdyn_property_MailboxTrackingFolders` | [msdyn_property](msdyn_property.md) | `regardingobjectid` | `regardingobjectid_msdyn_property` |
| `msdyn_property_UserEntityInstanceDatas` | [msdyn_property](msdyn_property.md) | `objectid` | `objectid_msdyn_property` |
| `msdyn_property_ProcessSession` | [msdyn_property](msdyn_property.md) | `regardingobjectid` | `regardingobjectid_msdyn_property` |
| `msdyn_property_BulkDeleteFailures` | [msdyn_property](msdyn_property.md) | `regardingobjectid` | `regardingobjectid_msdyn_property` |
| `msdyn_property_PrincipalObjectAttributeAccesses` | [msdyn_property](msdyn_property.md) | `objectid` | `objectid_msdyn_property` |
| `msdyn_msdyn_property_msdyn_propertyassetassociation_property` | [msdyn_property](msdyn_property.md) | `msdyn_property` | `msdyn_property` |
| `msdyn_msdyn_property_msdyn_propertylocationassociation_Property` | [msdyn_property](msdyn_property.md) | `msdyn_property` | `msdyn_Property` |
| `msdyn_msdyn_property_msdyn_propertylog_property` | [msdyn_property](msdyn_property.md) | `msdyn_property` | `msdyn_property` |
| `msdyn_msdyn_property_msdyn_propertytemplateassociation_property` | [msdyn_property](msdyn_property.md) | `msdyn_property` | `msdyn_property` |


## Source

Generated from [msdyn_property (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_property')) on 2026-05-07.