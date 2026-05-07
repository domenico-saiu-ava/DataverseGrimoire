---
logical: "contract"
display: "Contract"
entitySetName: "contracts"
primaryId: "contractid"
primaryName: "title"
tableType: "Standard"
ownership: "UserOwned"
synonyms_it: ["contratto", "contratti"]
synonyms_en: ["contract"]
---

# Contract

Agreement to provide customer service during a specified amount of time or number of cases.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `contract` |
| Display name | Contract |
| Display (plural) | Contracts |
| Schema name | `Contract` |
| Entity set (Web API) | `contracts` |
| Primary id attribute | `contractid` |
| Primary name attribute | `title` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/contracts?$select=title&$top=10
GET /api/data/v9.2/contracts(<guid>)
POST /api/data/v9.2/contracts
PATCH /api/data/v9.2/contracts(<guid>)
DELETE /api/data/v9.2/contracts(<guid>)
```

## Attributes

Writable: **32** · Read-only: **33**

### Writable

`ActiveOn`, `AllotmentTypeCode`, `BillingCustomerId`, `BillingCustomerIdType`, `BillingEndOn`, `BillingFrequencyCode`, `BillingStartOn`, `BillToAddress`, `ContractId`, `ContractLanguage`, `ContractNumber`, `ContractServiceLevelCode`, `ContractTemplateId`, `CustomerId`, `CustomerIdType`, `EffectivityCalendar`, `EmailAddress`, `EntityImage`, `ExpiresOn`, `ImportSequenceNumber`, `OriginatingContract`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `ServiceAddress`, `StateCode`, `StatusCode`, `TimeZoneRuleVersionNumber`, `Title`, `TransactionCurrencyId`, `UseDiscountAsPercentage`, `UTCConversionTimeZoneCode`

### Read-only

`AccountId`, `BillingAccountId`, `BillingContactId`, `BillingCustomerIdName`, `BillingCustomerIdYomiName`, `CancelOn`, `ContactId`, `ContractTemplateAbbreviation`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `CustomerIdName`, `CustomerIdYomiName`, `Duration`, `EntityImage_Timestamp`, `EntityImage_URL`, `EntityImageId`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `NetPrice`, `NetPrice_Base`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `TotalDiscount`, `TotalDiscount_Base`, `TotalPrice`, `TotalPrice_Base`, `VersionNumber`

## Relationships

### Many-to-One (17)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_service_contracts` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `contract_billingcustomer_accounts` | [account](account.md) | `billingcustomerid` | `billingcustomerid_account` |
| `contract_billingcustomer_contacts` | [contact](contact.md) | `billingcustomerid` | `billingcustomerid_contact` |
| `contract_customer_accounts` | [account](account.md) | `customerid` | `customerid_account` |
| `contract_customer_contacts` | [contact](contact.md) | `customerid` | `customerid_contact` |
| `contract_originating_contract` | [contract](contract.md) | `originatingcontract` | `originatingcontract` |
| `contract_template_contracts` | [contracttemplate](contracttemplate.md) | `contracttemplateid` | `contracttemplateid` |
| `customer_address_contracts_as_billing_address` | [customeraddress](customeraddress.md) | `billtoaddress` | `billtoaddress` |
| `customer_address_contracts_as_service_address` | [customeraddress](customeraddress.md) | `serviceaddress` | `serviceaddress` |
| `lk_contract_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_contract_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_contractbase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_contractbase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `owner_contracts` | [owner](owner.md) | `ownerid` | `ownerid` |
| `system_user_service_contracts` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_service_contracts` | [team](team.md) | `owningteam` | `owningteam` |
| `transactioncurrency_contract` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (34)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `contract_activity_parties` | _n/a_ | `partyid` | _n/a_ |
| `Contract_ActivityPointers` | _n/a_ | `regardingobjectid` | _n/a_ |
| `contract_adx_inviteredemptions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `contract_adx_portalcomments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Contract_Annotation` | _n/a_ | `objectid` | _n/a_ |
| `Contract_Appointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Contract_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Contract_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `contract_cases` | _n/a_ | `contractid` | _n/a_ |
| `contract_chats` | _n/a_ | `regardingobjectid` | _n/a_ |
| `contract_connections1` | _n/a_ | `record1id` | _n/a_ |
| `contract_connections2` | _n/a_ | `record2id` | _n/a_ |
| `Contract_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `Contract_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `Contract_Emails` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Contract_Faxes` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Contract_Letters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `contract_line_items` | _n/a_ | `contractid` | _n/a_ |
| `Contract_MailboxTrackingFolder` | _n/a_ | `regardingobjectid` | _n/a_ |
| `contract_msdyn_copilottranscripts` | _n/a_ | `regardingobjectid` | _n/a_ |
| `contract_msdyn_ocliveworkitems` | _n/a_ | `regardingobjectid` | _n/a_ |
| `contract_msdyn_ocsessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `contract_msfp_alerts` | _n/a_ | `regardingobjectid` | _n/a_ |
| `contract_msfp_surveyinvites` | _n/a_ | `regardingobjectid` | _n/a_ |
| `contract_msfp_surveyresponses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `contract_originating_contract` | _n/a_ | `originatingcontract` | _n/a_ |
| `Contract_Phonecalls` | _n/a_ | `regardingobjectid` | _n/a_ |
| `contract_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `Contract_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Contract_RecurringAppointmentMasters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Contract_ServiceAppointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Contract_SocialActivities` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Contract_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Contract_Tasks` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `servicecontractcontacts_association` | [contractid](contractid.md) | _n/a_ | _n/a_ |

## Source

Generated from [contract.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/contract.md) on 2026-05-06.