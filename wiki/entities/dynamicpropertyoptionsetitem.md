---
logical: "dynamicpropertyoptionsetitem"
display: "Property Option Set Item"
entitySetName: "dynamicpropertyoptionsetitems"
primaryId: "dynamicpropertyoptionsetvalueid"
primaryName: "dynamicpropertyoptionname"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Property Option Set Item

Item with a name and value in a property option set type.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `dynamicpropertyoptionsetitem` |
| Display name | Property Option Set Item |
| Display (plural) | Property Option Set Items |
| Schema name | `DynamicPropertyOptionSetItem` |
| Entity set (Web API) | `dynamicpropertyoptionsetitems` |
| Primary id attribute | `dynamicpropertyoptionsetvalueid` |
| Primary name attribute | `dynamicpropertyoptionname` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/dynamicpropertyoptionsetitems?$select=dynamicpropertyoptionname&$top=10
GET /api/data/v9.2/dynamicpropertyoptionsetitems(<guid>)
POST /api/data/v9.2/dynamicpropertyoptionsetitems
PATCH /api/data/v9.2/dynamicpropertyoptionsetitems(<guid>)
DELETE /api/data/v9.2/dynamicpropertyoptionsetitems(<guid>)
```

## Attributes

Writable: **12** · Read-only: **9**

### Writable

`DMTImportState`, `DynamicPropertyId`, `DynamicPropertyOptionDescription`, `DynamicPropertyOptionName`, `DynamicPropertyOptionSetValueId`, `DynamicPropertyOptionSetValueSequenceNumber`, `DynamicPropertyOptionValue`, `ImportSequenceNumber`, `OverriddenCreatedOn`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `DynamicProperty_DynamicPropertyOptionSetItem` | [dynamicproperty](dynamicproperty.md) | `dynamicpropertyid` | `dynamicpropertyid` |
| `DynamicPropertyOptionSetItem_organization` | [organization](organization.md) | `organizationid` | `organizationid` |
| `DynamicPropertyOptionSetItem_TransactionCurrency` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |
| `lk_DynamicPropertyOptionSetItem_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_DynamicPropertyOptionSetItem_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_DynamicPropertyOptionSetItem_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_DynamicPropertyOptionSetItem_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `DefaultValueOptionSet_DynamicProperty` | _n/a_ | `defaultvalueoptionset` | _n/a_ |
| `dynamicpropertyoptionsetitem_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `dynamicpropertyoptionsetitem_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `dynamicpropertyoptionsetitem_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `dynamicpropertyoptionsetitem_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `dynamicpropertyoptionsetitem_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [dynamicpropertyoptionsetitem.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/dynamicpropertyoptionsetitem.md) on 2026-05-06.