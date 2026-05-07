---
logical: "msdyn_property"
display: "Property Definition"
entitySetName: "msdyn_properties"
primaryId: "msdyn_propertyid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Property Definition

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_property` |
| Display name | Property Definition |
| Display (plural) | Property Definitions |
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

Writable: **11** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_name`, `msdyn_propertyId`, `msdyn_propertytype`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_property` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_property_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_property_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_property_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_property_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_property` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_property` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_property` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_property_msdyn_propertyassetassociation_property` | _n/a_ | `msdyn_property` | _n/a_ |
| `msdyn_msdyn_property_msdyn_propertylocationassociation_Property` | _n/a_ | `msdyn_property` | _n/a_ |
| `msdyn_msdyn_property_msdyn_propertylog_property` | _n/a_ | `msdyn_property` | _n/a_ |
| `msdyn_msdyn_property_msdyn_propertytemplateassociation_property` | _n/a_ | `msdyn_property` | _n/a_ |
| `msdyn_property_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_property_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_property_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_property_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_property_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_property_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_property.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_property.md) on 2026-05-06.