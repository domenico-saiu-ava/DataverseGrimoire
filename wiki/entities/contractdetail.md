---
logical: "contractdetail"
display: "Contract Line"
entitySetName: "contractdetails"
primaryId: "contractdetailid"
primaryName: "title"
tableType: "Standard"
ownership: "UserOwned"
synonyms_it: ["riga contratto", "voce contratto"]
synonyms_en: ["contract line", "contract detail"]
---

# Contract Line

Line item in a contract that specifies the type of service a customer is entitled to.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `contractdetail` |
| Display name | Contract Line |
| Display (plural) | Contract Lines |
| Schema name | `ContractDetail` |
| Entity set (Web API) | `contractdetails` |
| Primary id attribute | `contractdetailid` |
| Primary name attribute | `title` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/contractdetails?$select=title&$top=10
GET /api/data/v9.2/contractdetails(<guid>)
POST /api/data/v9.2/contractdetails
PATCH /api/data/v9.2/contractdetails(<guid>)
DELETE /api/data/v9.2/contractdetails(<guid>)
```

## Attributes

Writable: **26** · Read-only: **30**

### Writable

`ActiveOn`, `ContractDetailId`, `ContractId`, `CustomerId`, `CustomerIdType`, `Discount`, `DiscountPercentage`, `EffectivityCalendar`, `ExpiresOn`, `ImportSequenceNumber`, `InitialQuantity`, `LineItemOrder`, `OverriddenCreatedOn`, `Price`, `ProductId`, `ProductSerialNumber`, `ServiceAddress`, `ServiceContractUnitsCode`, `StateCode`, `StatusCode`, `TimeZoneRuleVersionNumber`, `Title`, `TotalAllotments`, `UoMId`, `UoMScheduleId`, `UTCConversionTimeZoneCode`

### Read-only

`AccountId`, `AllotmentsOverage`, `AllotmentsRemaining`, `AllotmentsUsed`, `ContactId`, `ContractStateCode`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `CustomerIdName`, `CustomerIdYomiName`, `Discount_Base`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `Net`, `Net_Base`, `OwnerId`, `OwnerIdName`, `OwnerIdType`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `Price_Base`, `Rate`, `Rate_Base`, `TransactionCurrencyId`, `VersionNumber`

## Relationships

### Many-to-One (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `contract_detail_unit_of_measure_schedule` | [uomschedule](uomschedule.md) | `uomscheduleid` | `uomscheduleid` |
| `contract_line_items` | [contract](contract.md) | `contractid` | `contractid` |
| `contractlineitem_customer_accounts` | [account](account.md) | `customerid` | `customerid_account` |
| `contractlineitem_customer_contacts` | [contact](contact.md) | `customerid` | `customerid_contact` |
| `customer_address_contract_line_items` | [customeraddress](customeraddress.md) | `serviceaddress` | `serviceaddress` |
| `lk_contractdetail_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_contractdetail_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_contractdetailbase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_contractdetailbase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `product_contract_line_items` | [product](product.md) | `productid` | `productid` |
| `team_contractdetail` | [team](team.md) | `owningteam` | `owningteam` |
| `transactioncurrency_contractdetail` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |
| `unit_of_measurement_contract_line_items` | [uom](uom.md) | `uomid` | `uomid` |
| `user_contractdetail` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `contract_detail_cases` | _n/a_ | `contractdetailid` | _n/a_ |
| `ContractDetail_Annotation` | _n/a_ | `objectid` | _n/a_ |
| `ContractDetail_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `ContractDetail_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `contractdetail_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `contractdetail_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `ContractDetail_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `ContractDetail_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [contractdetail.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/contractdetail.md) on 2026-05-06.