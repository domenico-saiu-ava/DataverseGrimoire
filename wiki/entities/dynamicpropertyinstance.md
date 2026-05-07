---
logical: "dynamicpropertyinstance"
display: "Property Instance"
entitySetName: "dynamicpropertyinstances"
primaryId: "dynamicpropertyinstanceid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Property Instance

Instance of a property with its value.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `dynamicpropertyinstance` |
| Display name | Property Instance |
| Display (plural) | Property Instances |
| Schema name | `DynamicPropertyInstance` |
| Entity set (Web API) | `dynamicpropertyinstances` |
| Primary id attribute | `dynamicpropertyinstanceid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/dynamicpropertyinstances?$select=name&$top=10
GET /api/data/v9.2/dynamicpropertyinstances(<guid>)
POST /api/data/v9.2/dynamicpropertyinstances
PATCH /api/data/v9.2/dynamicpropertyinstances(<guid>)
DELETE /api/data/v9.2/dynamicpropertyinstances(<guid>)
```

## Attributes

Writable: **18** · Read-only: **13**

### Writable

`DMTImportState`, `DynamicPropertyId`, `DynamicPropertyInstanceid`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `RegardingObjectId`, `RegardingObjectIdType`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `UTCConversionTimeZoneCode`, `validationstatus`, `ValueDecimal`, `ValueDouble`, `ValueInteger`, `ValueString`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_dynamicproperyinstance` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `DynamicProperty_DynamicPropertyInstance` | [dynamicproperty](dynamicproperty.md) | `dynamicpropertyid` | `dynamicpropertyid` |
| `Dynamicpropertyinsatance_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `InvoiceDetail_Dynamicpropertyinstance` | [invoicedetail](invoicedetail.md) | `regardingobjectid` | `regardingobjectid_invoicedetail` |
| `lk_Dynamicpropertyinsatanceattribute_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_Dynamicpropertyinsatanceattribute_ModifiedBy` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_Dynamicpropertyinsatanceattribute_ModifiedOnBehalfBy` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `OpportunityProduct_Dynamicpropertyinstance` | [opportunityproduct](opportunityproduct.md) | `regardingobjectid` | `regardingobjectid_opportunityproduct` |
| `Owner_dynamicproperyinstance` | [owner](owner.md) | `ownerid` | `ownerid` |
| `OwningUser_Dynamicpropertyinsatance` | [systemuser](systemuser.md) | `dynamicpropertyinstanceid` | `owninguser` |
| `QuoteDetail_Dynamicpropertyinstance` | [quotedetail](quotedetail.md) | `regardingobjectid` | `regardingobjectid_quotedetail` |
| `SalesOrderDetail_Dynamicpropertyinstance` | [salesorderdetail](salesorderdetail.md) | `regardingobjectid` | `regardingobjectid_salesorderdetail` |
| `team_DynamicPropertyInstance` | [team](team.md) | `owningteam` | `owningteam` |
| `TransactionCurrency_Dynamicpropertyinsatance` | [transactioncurrency](transactioncurrency.md) | `dynamicpropertyinstanceid` | `transactioncurrencyid` |

### One-to-Many (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `dynamicpropertyinstance_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `dynamicpropertyinstance_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `dynamicpropertyinstance_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `dynamicpropertyinstance_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `dynamicpropertyinstance_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [dynamicpropertyinstance.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/dynamicpropertyinstance.md) on 2026-05-06.