---
logical: "msdyn_propertytemplateassociation"
display: "Property Template Association"
entitySetName: "msdyn_propertytemplateassociations"
primaryId: "msdyn_propertytemplateassociationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Property Template Association

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_propertytemplateassociation` |
| Display name | Property Template Association |
| Display (plural) | Property Template Associations |
| Schema name | `msdyn_propertytemplateassociation` |
| Entity set (Web API) | `msdyn_propertytemplateassociations` |
| Primary id attribute | `msdyn_propertytemplateassociationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_propertytemplateassociations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_propertytemplateassociations(<guid>)
POST /api/data/v9.2/msdyn_propertytemplateassociations
PATCH /api/data/v9.2/msdyn_propertytemplateassociations(<guid>)
DELETE /api/data/v9.2/msdyn_propertytemplateassociations(<guid>)
```

## Attributes

Writable: **12** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_name`, `msdyn_property`, `msdyn_propertytemplate`, `msdyn_propertytemplateassociationId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_propertytemplateassociation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_propertytemplateassociation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_propertytemplateassociation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_propertytemplateassociation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_propertytemplateassociation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_property_msdyn_propertytemplateassociation_property` | [msdyn_property](msdyn_property.md) | `msdyn_property` | `msdyn_property` |
| `msdyn_msdyn_templateforproperties_msdyn_propertytemplateassociation_propertytemplate` | [msdyn_templateforproperties](msdyn_templateforproperties.md) | `msdyn_propertytemplate` | `msdyn_propertytemplate` |
| `owner_msdyn_propertytemplateassociation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_propertytemplateassociation` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_propertytemplateassociation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_propertytemplateassociation_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_propertytemplateassociation_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_propertytemplateassociation_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_propertytemplateassociation_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_propertytemplateassociation_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_propertytemplateassociation_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_propertytemplateassociation.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_propertytemplateassociation.md) on 2026-05-06.