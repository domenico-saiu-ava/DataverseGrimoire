---
logical: "contact"
display: "Contact"
entitySetName: "contacts"
primaryId: "contactid"
primaryName: "fullname"
tableType: "Standard"
ownership: "UserOwned"
synonyms_it: ["contatto", "contatti", "persona", "persone", "individuo", "referente"]
synonyms_en: ["contact", "person", "individual", "people"]
---

# Contact

Person with whom a business unit has a relationship, such as customer, supplier, and colleague.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `contact` |
| Display name | Contact |
| Display (plural) | Contacts |
| Schema name | `Contact` |
| Entity set (Web API) | `contacts` |
| Primary id attribute | `contactid` |
| Primary name attribute | `fullname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/contacts?$select=fullname&$top=10
GET /api/data/v9.2/contacts(<guid>)
POST /api/data/v9.2/contacts
PATCH /api/data/v9.2/contacts(<guid>)
DELETE /api/data/v9.2/contacts(<guid>)
```

## Attributes

Writable: **191** · Read-only: **42**

### Writable

`AccountRoleCode`, `Address1_AddressId`, `Address1_AddressTypeCode`, `Address1_City`, `Address1_Country`, `Address1_County`, `Address1_Fax`, `Address1_FreightTermsCode`, `Address1_Latitude`, `Address1_Line1`, `Address1_Line2`, `Address1_Line3`, `Address1_Longitude`, `Address1_Name`, `Address1_PostalCode`, `Address1_PostOfficeBox`, `Address1_PrimaryContactName`, `Address1_ShippingMethodCode`, `Address1_StateOrProvince`, `Address1_Telephone1`, `Address1_Telephone2`, `Address1_Telephone3`, `Address1_UPSZone`, `Address1_UTCOffset`, `Address2_AddressId`, `Address2_AddressTypeCode`, `Address2_City`, `Address2_Country`, `Address2_County`, `Address2_Fax`, `Address2_FreightTermsCode`, `Address2_Latitude`, `Address2_Line1`, `Address2_Line2`, `Address2_Line3`, `Address2_Longitude`, `Address2_Name`, `Address2_PostalCode`, `Address2_PostOfficeBox`, `Address2_PrimaryContactName`, `Address2_ShippingMethodCode`, `Address2_StateOrProvince`, `Address2_Telephone1`, `Address2_Telephone2`, `Address2_Telephone3`, `Address2_UPSZone`, `Address2_UTCOffset`, `Address3_AddressId`, `Address3_AddressTypeCode`, `Address3_City`, `Address3_Country`, `Address3_County`, `Address3_Fax`, `Address3_FreightTermsCode`, `Address3_Latitude`, `Address3_Line1`, `Address3_Line2`, `Address3_Line3`, `Address3_Longitude`, `Address3_Name`, `Address3_PostalCode`, `Address3_PostOfficeBox`, `Address3_PrimaryContactName`, `Address3_ShippingMethodCode`, `Address3_StateOrProvince`, `Address3_Telephone1`, `Address3_Telephone2`, `Address3_Telephone3`, `Address3_UPSZone`, `Address3_UTCOffset`, `adx_ConfirmRemovePassword`, `Adx_CreatedByIPAddress`, `Adx_CreatedByUsername`, `adx_identity_accessfailedcount`, `adx_identity_emailaddress1confirmed`, `adx_identity_lastsuccessfullogin`, `adx_identity_locallogindisabled`, `adx_identity_lockoutenabled`, `adx_identity_lockoutenddate`, `adx_identity_logonenabled`, `adx_identity_mobilephoneconfirmed`, `adx_identity_newpassword`, `adx_identity_passwordhash`, `adx_identity_securitystamp`, `adx_identity_twofactorenabled`, `adx_identity_username`, `Adx_ModifiedByIPAddress`, `Adx_ModifiedByUsername`, `Adx_OrganizationName`, `adx_preferredlcid`, `adx_profilealert`, `adx_profilealertdate`, `adx_profilealertinstructions`, `Adx_ProfileIsAnonymous`, `Adx_ProfileLastActivity`, `adx_profilemodifiedon`, `adx_PublicProfileCopy`, `Adx_TimeZone`, `Anniversary`, `AnnualIncome`, `AssistantName`, `AssistantPhone`, `BirthDate`, `Business2`, `Callback`, `ChildrensNames`, `Company`, `ContactId`, `CreditLimit`, `CreditOnHold`, `CustomerSizeCode`, `CustomerTypeCode`, `Department`, `Description`, `DoNotBulkEMail`, `DoNotBulkPostalMail`, `DoNotEMail`, `DoNotFax`, `DoNotPhone`, `DoNotPostalMail`, `DoNotSendMM`, `EducationCode`, `EMailAddress1`, `EMailAddress2`, `EMailAddress3`, `EmployeeId`, `EntityImage`, `ExternalUserIdentifier`, `FamilyStatusCode`, `Fax`, `FirstName`, `FollowEmail`, `FtpSiteUrl`, `GenderCode`, `GovernmentId`, `HasChildrenCode`, `Home2`, `ImportSequenceNumber`, `IsBackofficeCustomer`, `JobTitle`, `LastName`, `LastOnHoldTime`, `LastUsedInCampaign`, `LeadSourceCode`, `ManagerName`, `ManagerPhone`, `MarketingOnly`, `MiddleName`, `MobilePhone`, `msa_managingpartnerid`, `msdyn_disablewebtracking`, `msdyn_isminor`, `msdyn_isminorwithparentalconsent`, `msdyn_portaltermsagreementdate`, `mspp_userpreferredlcid`, `NickName`, `NumberOfChildren`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `Pager`, `ParentCustomerId`, `ParentCustomerIdType`, `ParticipatesInWorkflow`, `PaymentTermsCode`, `PreferredAppointmentDayCode`, `PreferredAppointmentTimeCode`, `PreferredContactMethodCode`, `PreferredSystemUserId`, `ProcessId`, `Salutation`, `ShippingMethodCode`, `SLAId`, `SpousesName`, `StageId`, `StateCode`, `StatusCode`, `SubscriptionId`, `Suffix`, `Telephone1`, `Telephone2`, `Telephone3`, `TerritoryCode`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `TraversedPath`, `UTCConversionTimeZoneCode`, `WebSiteUrl`, `YomiFirstName`, `YomiLastName`, `YomiMiddleName`

### Read-only

`AccountId`, `Address1_Composite`, `Address2_Composite`, `Address3_Composite`, `Aging30`, `Aging30_Base`, `Aging60`, `Aging60_Base`, `Aging90`, `Aging90_Base`, `AnnualIncome_Base`, `CreatedBy`, `CreatedByExternalParty`, `CreatedOn`, `CreatedOnBehalfBy`, `CreditLimit_Base`, `EntityImage_Timestamp`, `EntityImage_URL`, `EntityImageId`, `ExchangeRate`, `FullName`, `IsAutoCreate`, `IsPrivate`, `MasterId`, `Merged`, `ModifiedBy`, `ModifiedByExternalParty`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OnHoldTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `ParentContactId`, `ParentCustomerIdName`, `ParentCustomerIdYomiName`, `SLAInvokedId`, `TimeSpentByMeOnEmailAndMeetings`, `VersionNumber`, `YomiFullName`

## Relationships

### Many-to-One (17)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_contacts` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `contact_customer_accounts` | [account](account.md) | `parentcustomerid` | `parentcustomerid_account` |
| `contact_customer_contacts` | [contact](contact.md) | `parentcustomerid` | `parentcustomerid_contact` |
| `contact_master_contact` | [contact](contact.md) | `masterid` | `masterid` |
| `contact_owning_user` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `lk_contact_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_contact_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_contactbase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_contactbase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `manualsla_contact` | [sla](sla.md) | `slaid` | `sla_contact_sla` |
| `msa_contact_managingpartner` | [account](account.md) | `msa_managingpartnerid` | `msa_managingpartnerid` |
| `owner_contacts` | [owner](owner.md) | `ownerid` | `ownerid` |
| `processstage_contact` | [processstage](processstage.md) | `stageid` | `stageid_processstage` |
| `sla_contact` | [sla](sla.md) | `slainvokedid` | `slainvokedid_contact_sla` |
| `system_user_contacts` | [systemuser](systemuser.md) | `preferredsystemuserid` | `preferredsystemuserid` |
| `team_contacts` | [team](team.md) | `owningteam` | `owningteam` |
| `transactioncurrency_contact` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (45)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `account_primary_contact` | _n/a_ | `primarycontactid` | _n/a_ |
| `adx_contact_externalidentity` | _n/a_ | `adx_contactid` | _n/a_ |
| `adx_invitation_invitecontact` | _n/a_ | `adx_invitecontact` | _n/a_ |
| `adx_invitation_invitercontact` | _n/a_ | `adx_invitercontact` | _n/a_ |
| `adx_invitation_redeemedContact` | _n/a_ | `adx_redeemedcontact` | _n/a_ |
| `adx_webformsession_contact` | _n/a_ | `adx_contact` | _n/a_ |
| `contact_actioncard` | _n/a_ | `regardingobjectid` | _n/a_ |
| `contact_activity_parties` | _n/a_ | `partyid` | _n/a_ |
| `Contact_ActivityPointers` | _n/a_ | `regardingobjectid` | _n/a_ |
| `contact_adx_inviteredemptions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `contact_adx_portalcomments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Contact_Annotation` | _n/a_ | `objectid` | _n/a_ |
| `Contact_Appointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Contact_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Contact_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `contact_chats` | _n/a_ | `regardingobjectid` | _n/a_ |
| `contact_connections1` | _n/a_ | `record1id` | _n/a_ |
| `contact_connections2` | _n/a_ | `record2id` | _n/a_ |
| `contact_customer_contacts` | _n/a_ | `parentcustomerid` | _n/a_ |
| `Contact_CustomerAddress` | _n/a_ | `parentid` | _n/a_ |
| `Contact_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `Contact_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `Contact_Email_EmailSender` | _n/a_ | `emailsender` | _n/a_ |
| `Contact_Emails` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Contact_Faxes` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Contact_Feedback` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Contact_Letters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Contact_MailboxTrackingFolder` | _n/a_ | `regardingobjectid` | _n/a_ |
| `contact_master_contact` | _n/a_ | `masterid` | _n/a_ |
| `Contact_Phonecalls` | _n/a_ | `regardingobjectid` | _n/a_ |
| `contact_PostFollows` | _n/a_ | `regardingobjectid` | _n/a_ |
| `contact_PostRegardings` | _n/a_ | `regardingobjectid` | _n/a_ |
| `contact_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `Contact_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Contact_RecurringAppointmentMasters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Contact_SocialActivities` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Contact_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Contact_Tasks` | _n/a_ | `regardingobjectid` | _n/a_ |
| `lk_contact_feedback_createdby` | _n/a_ | `createdbycontact` | _n/a_ |
| `lk_contact_feedback_createdonbehalfby` | _n/a_ | `createdonbehalfbycontact` | _n/a_ |
| `PowerPagesSiteAIFeedback_Contact_Contact` | _n/a_ | `contact` | _n/a_ |
| `slakpiinstance_contact` | _n/a_ | `regarding` | _n/a_ |
| `socialactivity_postauthor_contacts` | _n/a_ | `postauthor` | _n/a_ |
| `socialactivity_postauthoraccount_contacts` | _n/a_ | `postauthoraccount` | _n/a_ |
| `Socialprofile_customer_contacts` | _n/a_ | `customerid` | _n/a_ |

### Many-to-Many (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `adx_invitation_invitecontacts` | [contactid](contactid.md) | _n/a_ | _n/a_ |
| `adx_invitation_redeemedcontacts` | [contactid](contactid.md) | _n/a_ | _n/a_ |
| `powerpagecomponent_mspp_webrole_contact` | [contactid](contactid.md) | _n/a_ | _n/a_ |

## Source

Generated from [contact.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/contact.md) on 2026-05-06.