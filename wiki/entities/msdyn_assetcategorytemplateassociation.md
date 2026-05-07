---
logical: "msdyn_assetcategorytemplateassociation"
display: "Asset Category Template Association"
entitySetName: "msdyn_assetcategorytemplateassociations"
primaryId: "msdyn_assetcategorytemplateassociationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Asset Category Template Association

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_assetcategorytemplateassociation` |
| Display name | Asset Category Template Association |
| Display (plural) | Asset Category Template Associations |
| Schema name | `msdyn_assetcategorytemplateassociation` |
| Entity set (Web API) | `msdyn_assetcategorytemplateassociations` |
| Primary id attribute | `msdyn_assetcategorytemplateassociationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_assetcategorytemplateassociations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_assetcategorytemplateassociations(<guid>)
POST /api/data/v9.2/msdyn_assetcategorytemplateassociations
PATCH /api/data/v9.2/msdyn_assetcategorytemplateassociations(<guid>)
DELETE /api/data/v9.2/msdyn_assetcategorytemplateassociations(<guid>)
```

## Attributes

Writable: **12** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_assetcategorytemplateassociationId`, `msdyn_customerassetcategory`, `msdyn_name`, `msdyn_propertytemplate`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_assetcategorytemplateassociation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_assetcategorytemplateassociation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_assetcategorytemplateassociation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_assetcategorytemplateassociation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_assetcategorytemplateassociation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_customerassetcategory_msdyn_assetcategorytemplateassociation_customerassetproperty` | [msdyn_customerassetcategory](msdyn_customerassetcategory.md) | `msdyn_customerassetcategory` | `msdyn_customerassetcategory` |
| `msdyn_msdyn_templateforproperties_msdyn_assetcategorytemplateassociation_propertytemplate` | [msdyn_templateforproperties](msdyn_templateforproperties.md) | `msdyn_propertytemplate` | `msdyn_propertytemplate` |
| `owner_msdyn_assetcategorytemplateassociation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_assetcategorytemplateassociation` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_assetcategorytemplateassociation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_assetcategorytemplateassociation_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_assetcategorytemplateassociation_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_assetcategorytemplateassociation_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_assetcategorytemplateassociation_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_assetcategorytemplateassociation_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_assetcategorytemplateassociation_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_assetcategorytemplateassociation.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_assetcategorytemplateassociation.md) on 2026-05-06.