---
logical: "msdyn_actual"
display: "Valore effettivo"
entitySetName: "msdyn_actuals"
primaryId: "msdyn_actualid"
primaryName: "msdyn_description"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Valore effettivo

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_actual` |
| Display name | Valore effettivo |
| Display (plural) | Valori effettivi |
| Schema name | `msdyn_actual` |
| Entity set (Web API) | `msdyn_actuals` |
| Primary id attribute | `msdyn_actualid` |
| Primary name attribute | `msdyn_description` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_actuals?$select=msdyn_description&$top=10
GET /api/data/v9.2/msdyn_actuals(<guid>)
POST /api/data/v9.2/msdyn_actuals
PATCH /api/data/v9.2/msdyn_actuals(<guid>)
DELETE /api/data/v9.2/msdyn_actuals(<guid>)
```

## Attributes

Writable: **46** · Read-only: **15**

### Writable

`importsequencenumber`, `msdyn_accountcustomer`, `msdyn_accountingdate`, `msdyn_accountvendor`, `msdyn_actualid`, `msdyn_adjustmentstatus`, `msdyn_amount`, `msdyn_amountmethod`, `msdyn_basisamount`, `msdyn_basisprice`, `msdyn_basisquantity`, `msdyn_billingstatus`, `msdyn_billingtype`, `msdyn_bookableresource`, `msdyn_contactcustomer`, `msdyn_contactvendor`, `msdyn_customertype`, `msdyn_description`, `msdyn_documentdate`, `msdyn_enddatetime`, `msdyn_exchangeratedate`, `msdyn_externaldescription`, `msdyn_externalreferencedate`, `msdyn_externalreferenceid`, `msdyn_invoice`, `msdyn_isjournalized`, `msdyn_percent`, `msdyn_price`, `msdyn_pricelist`, `msdyn_product`, `msdyn_quantity`, `msdyn_salescontract`, `msdyn_salescontractline`, `msdyn_startdatetime`, `msdyn_transactionclassification`, `msdyn_transactiontypecode`, `msdyn_unit`, `msdyn_unitschedule`, `msdyn_vendortype`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `transactioncurrencyid`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `exchangerate`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_amount_base`, `msdyn_basisamount_base`, `msdyn_basisprice_base`, `msdyn_price_base`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (20)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_account_msdyn_actual_AccountCustomer` | [account](account.md) | `msdyn_accountcustomer` | `msdyn_AccountCustomer` |
| `msdyn_account_msdyn_actual_AccountVendor` | [account](account.md) | `msdyn_accountvendor` | `msdyn_AccountVendor` |
| `msdyn_bookableresource_msdyn_actual_bookableresource` | [bookableresource](bookableresource.md) | `msdyn_bookableresource` | `msdyn_bookableresource` |
| `msdyn_contact_msdyn_actual_ContactCustomer` | [contact](contact.md) | `msdyn_contactcustomer` | `msdyn_ContactCustomer` |
| `msdyn_contact_msdyn_actual_ContactVendor` | [contact](contact.md) | `msdyn_contactvendor` | `msdyn_ContactVendor` |
| `msdyn_invoice_msdyn_actual_Invoice` | [invoice](invoice.md) | `msdyn_invoice` | `msdyn_Invoice` |
| `msdyn_pricelevel_msdyn_actual_PriceList` | [pricelevel](pricelevel.md) | `msdyn_pricelist` | `msdyn_PriceList` |
| `msdyn_product_msdyn_actual_Product` | [product](product.md) | `msdyn_product` | `msdyn_Product` |
| `msdyn_salesorder_msdyn_actual_SalesContract` | [salesorder](salesorder.md) | `msdyn_salescontract` | `msdyn_SalesContract` |
| `msdyn_uom_msdyn_actual_Unit` | [uom](uom.md) | `msdyn_unit` | `msdyn_Unit` |
| `msdyn_uomschedule_msdyn_actual_UnitSchedule` | [uomschedule](uomschedule.md) | `msdyn_unitschedule` | `msdyn_UnitSchedule` |
| `lk_msdyn_actual_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_actual_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_actual_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_actual_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_actual` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_actual` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_actual` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_actual` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `TransactionCurrency_msdyn_actual` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_actual_SyncErrors` | [msdyn_actual](msdyn_actual.md) | `regardingobjectid` | `regardingobjectid_msdyn_actual` |
| `msdyn_actual_AsyncOperations` | [msdyn_actual](msdyn_actual.md) | `regardingobjectid` | `regardingobjectid_msdyn_actual` |
| `msdyn_actual_MailboxTrackingFolders` | [msdyn_actual](msdyn_actual.md) | `regardingobjectid` | `regardingobjectid_msdyn_actual` |
| `msdyn_actual_UserEntityInstanceDatas` | [msdyn_actual](msdyn_actual.md) | `objectid` | `objectid_msdyn_actual` |
| `msdyn_actual_ProcessSession` | [msdyn_actual](msdyn_actual.md) | `regardingobjectid` | `regardingobjectid_msdyn_actual` |
| `msdyn_actual_BulkDeleteFailures` | [msdyn_actual](msdyn_actual.md) | `regardingobjectid` | `regardingobjectid_msdyn_actual` |
| `msdyn_actual_PrincipalObjectAttributeAccesses` | [msdyn_actual](msdyn_actual.md) | `objectid` | `objectid_msdyn_actual` |
| `msdyn_actual_DuplicateMatchingRecord` | [msdyn_actual](msdyn_actual.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_actual` |
| `msdyn_actual_DuplicateBaseRecord` | [msdyn_actual](msdyn_actual.md) | `baserecordid` | `baserecordid_msdyn_actual` |
| `msdyn_actual_Annotations` | [msdyn_actual](msdyn_actual.md) | `objectid` | `objectid_msdyn_actual` |


## Source

Generated from [msdyn_actual (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_actual')) on 2026-05-07.