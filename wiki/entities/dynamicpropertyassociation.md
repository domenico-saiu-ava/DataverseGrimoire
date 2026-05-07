---
logical: "dynamicpropertyassociation"
display: "Property Association"
entitySetName: "dynamicpropertyassociations"
primaryId: "dynamicpropertyassociationid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Property Association

Association of a property definition with another entity in the system.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `dynamicpropertyassociation` |
| Display name | Property Association |
| Display (plural) | Property Associations |
| Schema name | `DynamicPropertyAssociation` |
| Entity set (Web API) | `dynamicpropertyassociations` |
| Primary id attribute | `dynamicpropertyassociationid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/dynamicpropertyassociations?$select=name&$top=10
GET /api/data/v9.2/dynamicpropertyassociations(<guid>)
POST /api/data/v9.2/dynamicpropertyassociations
PATCH /api/data/v9.2/dynamicpropertyassociations(<guid>)
DELETE /api/data/v9.2/dynamicpropertyassociations(<guid>)
```

## Attributes

Writable: **13** · Read-only: **9**

### Writable

`AssociationStatus`, `DMTImportState`, `DynamicPropertyAssociationId`, `DynamicPropertyId`, `ImportSequenceNumber`, `InheritanceState`, `Name`, `OverriddenCreatedOn`, `RegardingObjectid`, `RegardingObjectTypeCode`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `Dynamicproperty_DynamicPropertyAssociation` | [dynamicproperty](dynamicproperty.md) | `dynamicpropertyid` | `dynamicpropertyid` |
| `DynamicPropertyAssociation_organization` | [organization](organization.md) | `organizationid` | `organizationid` |
| `DynamicPropertyAssociation_TransactionCurrency` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |
| `lk_DynamicPropertyAssociationattribute_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_DynamicPropertyAssociationattribute_CreatedOnBehalfBy` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_DynamicPropertyAssociationattribute_ModifiedBy` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_DynamicPropertyAssociationattribute_ModifiedOnBehalfBy` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `Product_DynamicPropertyAssociation` | [product](product.md) | `regardingobjectid` | `regardingobjectid_product` |
| `ProductAssociation_DynamicPropertyAssociation` | [productassociation](productassociation.md) | `regardingobjectid` | `regardingobjectid_productassociation` |

### One-to-Many (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `dynamicpropertyassociation_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `dynamicpropertyassociation_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `dynamicpropertyassociation_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `dynamicpropertyassociation_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `dynamicpropertyassociation_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [dynamicpropertyassociation.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/dynamicpropertyassociation.md) on 2026-05-06.