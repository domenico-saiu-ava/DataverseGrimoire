---
logical: "account"
display: "Account"
entitySetName: "accounts"
primaryId: "accountid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
synonyms_it: ["cliente", "clienti", "azienda", "aziende", "organizzazione", "business"]
synonyms_en: ["account", "customer", "company", "organization", "business", "client"]
---

# Account

Business that represents a customer or potential customer. The company that is billed in business transactions.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `account` |
| Display name | Account |
| Display (plural) | Accounts |
| Schema name | `Account` |
| Entity set (Web API) | `accounts` |
| Primary id attribute | `accountid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/accounts?$select=name&$top=10
GET /api/data/v9.2/accounts(<guid>)
POST /api/data/v9.2/accounts
PATCH /api/data/v9.2/accounts(<guid>)
DELETE /api/data/v9.2/accounts(<guid>)
```

## Attributes

Writable: **119** · Read-only: **35**

### Writable

`AccountCategoryCode`, `AccountClassificationCode`, `AccountId`, `AccountNumber`, `AccountRatingCode`, `Address1_AddressId`, `Address1_AddressTypeCode`, `Address1_City`, `Address1_Country`, `Address1_County`, `Address1_Fax`, `Address1_FreightTermsCode`, `Address1_Latitude`, `Address1_Line1`, `Address1_Line2`, `Address1_Line3`, `Address1_Longitude`, `Address1_Name`, `Address1_PostalCode`, `Address1_PostOfficeBox`, `Address1_PrimaryContactName`, `Address1_ShippingMethodCode`, `Address1_StateOrProvince`, `Address1_Telephone1`, `Address1_Telephone2`, `Address1_Telephone3`, `Address1_UPSZone`, `Address1_UTCOffset`, `Address2_AddressId`, `Address2_AddressTypeCode`, `Address2_City`, `Address2_Country`, `Address2_County`, `Address2_Fax`, `Address2_FreightTermsCode`, `Address2_Latitude`, `Address2_Line1`, `Address2_Line2`, `Address2_Line3`, `Address2_Longitude`, `Address2_Name`, `Address2_PostalCode`, `Address2_PostOfficeBox`, `Address2_PrimaryContactName`, `Address2_ShippingMethodCode`, `Address2_StateOrProvince`, `Address2_Telephone1`, `Address2_Telephone2`, `Address2_Telephone3`, `Address2_UPSZone`, `Address2_UTCOffset`, `Adx_CreatedByIPAddress`, `Adx_CreatedByUsername`, `Adx_ModifiedByIPAddress`, `Adx_ModifiedByUsername`, `BusinessTypeCode`, `CreditLimit`, `CreditOnHold`, `CustomerSizeCode`, `CustomerTypeCode`, `Description`, `DoNotBulkEMail`, `DoNotBulkPostalMail`, `DoNotEMail`, `DoNotFax`, `DoNotPhone`, `DoNotPostalMail`, `DoNotSendMM`, `EMailAddress1`, `EMailAddress2`, `EMailAddress3`, `EntityImage`, `Fax`, `FollowEmail`, `FtpSiteURL`, `ImportSequenceNumber`, `IndustryCode`, `LastOnHoldTime`, `LastUsedInCampaign`, `MarketCap`, `MarketingOnly`, `msa_managingpartnerid`, `Name`, `NumberOfEmployees`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `OwnershipCode`, `ParentAccountId`, `ParticipatesInWorkflow`, `PaymentTermsCode`, `PreferredAppointmentDayCode`, `PreferredAppointmentTimeCode`, `PreferredContactMethodCode`, `PreferredSystemUserId`, `PrimaryContactId`, `PrimarySatoriId`, `PrimaryTwitterId`, `ProcessId`, `Revenue`, `SharesOutstanding`, `ShippingMethodCode`, `SIC`, `SLAId`, `StageId`, `StateCode`, `StatusCode`, `StockExchange`, `Telephone1`, `Telephone2`, `Telephone3`, `TerritoryCode`, `TickerSymbol`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `TraversedPath`, `UTCConversionTimeZoneCode`, `WebSiteURL`, `YomiName`

### Read-only

`Address1_Composite`, `Address2_Composite`, `Aging30`, `Aging30_Base`, `Aging60`, `Aging60_Base`, `Aging90`, `Aging90_Base`, `CreatedBy`, `CreatedByExternalParty`, `CreatedOn`, `CreatedOnBehalfBy`, `CreditLimit_Base`, `EntityImage_Timestamp`, `EntityImage_URL`, `EntityImageId`, `ExchangeRate`, `IsPrivate`, `MarketCap_Base`, `MasterId`, `Merged`, `ModifiedBy`, `ModifiedByExternalParty`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OnHoldTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `Revenue_Base`, `SLAInvokedId`, `TimeSpentByMeOnEmailAndMeetings`, `VersionNumber`

## Relationships

### Many-to-One (17)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `account_master_account` | [account](account.md) | `masterid` | `masterid` |
| `account_parent_account` | [account](account.md) | `parentaccountid` | `parentaccountid` |
| `account_primary_contact` | [contact](contact.md) | `primarycontactid` | `primarycontactid` |
| `business_unit_accounts` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_accountbase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_accountbase_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_accountbase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_accountbase_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `manualsla_account` | [sla](sla.md) | `slaid` | `sla_account_sla` |
| `msa_account_managingpartner` | [account](account.md) | `msa_managingpartnerid` | `msa_managingpartnerid` |
| `owner_accounts` | [owner](owner.md) | `ownerid` | `ownerid` |
| `processstage_account` | [processstage](processstage.md) | `stageid` | `stageid_processstage` |
| `sla_account` | [sla](sla.md) | `slainvokedid` | `slainvokedid_account_sla` |
| `system_user_accounts` | [systemuser](systemuser.md) | `preferredsystemuserid` | `preferredsystemuserid` |
| `team_accounts` | [team](team.md) | `owningteam` | `owningteam` |
| `transactioncurrency_account` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |
| `user_accounts` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (41)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `account_actioncard` | _n/a_ | `regardingobjectid` | _n/a_ |
| `account_activity_parties` | _n/a_ | `partyid` | _n/a_ |
| `Account_ActivityPointers` | _n/a_ | `regardingobjectid` | _n/a_ |
| `account_adx_inviteredemptions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `account_adx_portalcomments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Account_Annotation` | _n/a_ | `objectid` | _n/a_ |
| `Account_Appointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Account_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Account_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `account_chats` | _n/a_ | `regardingobjectid` | _n/a_ |
| `account_connections1` | _n/a_ | `record1id` | _n/a_ |
| `account_connections2` | _n/a_ | `record2id` | _n/a_ |
| `Account_CustomerAddress` | _n/a_ | `parentid` | _n/a_ |
| `Account_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `Account_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `Account_Email_EmailSender` | _n/a_ | `emailsender` | _n/a_ |
| `Account_Email_SendersAccount` | _n/a_ | `sendersaccount` | _n/a_ |
| `Account_Emails` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Account_Faxes` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Account_Letters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Account_MailboxTrackingFolder` | _n/a_ | `regardingobjectid` | _n/a_ |
| `account_master_account` | _n/a_ | `masterid` | _n/a_ |
| `account_parent_account` | _n/a_ | `parentaccountid` | _n/a_ |
| `Account_Phonecalls` | _n/a_ | `regardingobjectid` | _n/a_ |
| `account_PostFollows` | _n/a_ | `regardingobjectid` | _n/a_ |
| `account_PostRegardings` | _n/a_ | `regardingobjectid` | _n/a_ |
| `account_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `Account_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Account_RecurringAppointmentMasters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Account_SharepointDocumentLocation` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Account_SocialActivities` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Account_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Account_Tasks` | _n/a_ | `regardingobjectid` | _n/a_ |
| `adx_invitation_assigntoaccount` | _n/a_ | `adx_assigntoaccount` | _n/a_ |
| `contact_customer_accounts` | _n/a_ | `parentcustomerid` | _n/a_ |
| `msa_account_managingpartner` | _n/a_ | `msa_managingpartnerid` | _n/a_ |
| `msa_contact_managingpartner` | _n/a_ | `msa_managingpartnerid` | _n/a_ |
| `slakpiinstance_account` | _n/a_ | `regarding` | _n/a_ |
| `SocialActivity_PostAuthor_accounts` | _n/a_ | `postauthor` | _n/a_ |
| `SocialActivity_PostAuthorAccount_accounts` | _n/a_ | `postauthoraccount` | _n/a_ |
| `Socialprofile_customer_accounts` | _n/a_ | `customerid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `powerpagecomponent_mspp_webrole_account` | [accountid](accountid.md) | _n/a_ | _n/a_ |

## Source

Generated from [account.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/account.md) on 2026-05-06.