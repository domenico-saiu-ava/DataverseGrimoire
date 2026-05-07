---
logical: "msdyn_propertyassetassociation"
display: "Property Asset Association"
entitySetName: "msdyn_propertyassetassociations"
primaryId: "msdyn_propertyassetassociationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Property Asset Association

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_propertyassetassociation` |
| Display name | Property Asset Association |
| Display (plural) | Property Asset Associations |
| Schema name | `msdyn_propertyassetassociation` |
| Entity set (Web API) | `msdyn_propertyassetassociations` |
| Primary id attribute | `msdyn_propertyassetassociationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_propertyassetassociations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_propertyassetassociations(<guid>)
POST /api/data/v9.2/msdyn_propertyassetassociations
PATCH /api/data/v9.2/msdyn_propertyassetassociations(<guid>)
DELETE /api/data/v9.2/msdyn_propertyassetassociations(<guid>)
```

## Attributes

Writable: **12** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_customerasset`, `msdyn_name`, `msdyn_property`, `msdyn_propertyassetassociationId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_propertyassetassociation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_propertyassetassociation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_propertyassetassociation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_propertyassetassociation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_propertyassetassociation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_customerasset_msdyn_propertyassetassociation_customerasset` | [msdyn_customerasset](msdyn_customerasset.md) | `msdyn_customerasset` | `msdyn_customerasset` |
| `msdyn_msdyn_property_msdyn_propertyassetassociation_property` | [msdyn_property](msdyn_property.md) | `msdyn_property` | `msdyn_property` |
| `owner_msdyn_propertyassetassociation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_propertyassetassociation` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_propertyassetassociation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_propertyassetassociation_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_propertyassetassociation_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_propertyassetassociation_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_propertyassetassociation_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_propertyassetassociation_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_propertyassetassociation_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_propertyassetassociation.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_propertyassetassociation.md) on 2026-05-06.