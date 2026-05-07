---
logical: "dynamicproperty"
display: "Property"
entitySetName: "dynamicproperties"
primaryId: "dynamicpropertyid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Property

Information about a product property.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `dynamicproperty` |
| Display name | Property |
| Display (plural) | Properties |
| Schema name | `DynamicProperty` |
| Entity set (Web API) | `dynamicproperties` |
| Primary id attribute | `dynamicpropertyid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/dynamicproperties?$select=name&$top=10
GET /api/data/v9.2/dynamicproperties(<guid>)
POST /api/data/v9.2/dynamicproperties
PATCH /api/data/v9.2/dynamicproperties(<guid>)
DELETE /api/data/v9.2/dynamicproperties(<guid>)
```

## Attributes

Writable: **33** · Read-only: **8**

### Writable

`BaseDynamicPropertyId`, `DataType`, `DefaultAttributeValue`, `DefaultValueDecimal`, `DefaultValueDouble`, `DefaultValueInteger`, `DefaultValueOptionSet`, `DefaultValueString`, `Description`, `DMTImportState`, `DynamicPropertyId`, `ImportSequenceNumber`, `IsHidden`, `IsReadOnly`, `IsRequired`, `MaxLengthString`, `MaxValueDecimal`, `MaxValueDouble`, `MaxValueInteger`, `MinValueDecimal`, `MinValueDouble`, `MinValueInteger`, `Name`, `OverriddenCreatedOn`, `OverwrittenDynamicPropertyId`, `Precision`, `RegardingObjectId`, `RegardingObjectTypeCode`, `RootDynamicPropertyId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `DefaultValueOptionSet_DynamicProperty` | [dynamicpropertyoptionsetitem](dynamicpropertyoptionsetitem.md) | `defaultvalueoptionset` | `dynamicpropertyoptionsetvalueid` |
| `dynamicproperty_base_dynamicproperty` | [dynamicproperty](dynamicproperty.md) | `basedynamicpropertyid` | `basedynamicpropertyid` |
| `dynamicproperty_organization` | [organization](organization.md) | `organizationid` | `organizationid` |
| `lk_DynamicProperty_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_DynamicProperty_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_DynamicProperty_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_DynamicProperty_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `Product_DynamicProperty` | [product](product.md) | `regardingobjectid` | `regardingobjectid_product` |
| `ProductAssociation_DynamicProperty` | [productassociation](productassociation.md) | `regardingobjectid` | `regardingobjectid_productassociation` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `dynamicproperty_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `dynamicproperty_base_dynamicproperty` | _n/a_ | `basedynamicpropertyid` | _n/a_ |
| `dynamicproperty_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Dynamicproperty_DynamicPropertyAssociation` | _n/a_ | `dynamicpropertyid` | _n/a_ |
| `DynamicProperty_DynamicPropertyInstance` | _n/a_ | `dynamicpropertyid` | _n/a_ |
| `DynamicProperty_DynamicPropertyOptionSetItem` | _n/a_ | `dynamicpropertyid` | _n/a_ |
| `dynamicproperty_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `dynamicproperty_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `dynamicproperty_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [dynamicproperty.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/dynamicproperty.md) on 2026-05-06.