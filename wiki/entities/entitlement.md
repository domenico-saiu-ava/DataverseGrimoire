---
logical: "entitlement"
display: "Entitlement"
entitySetName: "entitlements"
primaryId: "entitlementid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
synonyms_it: ["diritto", "diritti", "entitlement", "diritto assistenza"]
synonyms_en: ["entitlement", "support entitlement"]
---

# Entitlement

Defines the amount and type of support a customer should receive.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `entitlement` |
| Display name | Entitlement |
| Display (plural) | Entitlements |
| Schema name | `Entitlement` |
| Entity set (Web API) | `entitlements` |
| Primary id attribute | `entitlementid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/entitlements?$select=name&$top=10
GET /api/data/v9.2/entitlements(<guid>)
POST /api/data/v9.2/entitlements
PATCH /api/data/v9.2/entitlements(<guid>)
DELETE /api/data/v9.2/entitlements(<guid>)
```

## Attributes

Writable: **30** · Read-only: **17**

### Writable

`AllocationTypeCode`, `CustomerId`, `CustomerIdType`, `DecreaseRemainingOn`, `Description`, `EmailAddress`, `EndDate`, `EntitlementId`, `EntitlementTemplateId`, `entitytype`, `ImportSequenceNumber`, `IsDefault`, `KbAccessLevel`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `ProcessId`, `RemainingTerms`, `RestrictCaseCreation`, `SLAId`, `StageId`, `StartDate`, `StateCode`, `StatusCode`, `TimeZoneRuleVersionNumber`, `TotalTerms`, `TransactionCurrencyId`, `TraversedPath`, `UTCConversionTimeZoneCode`

### Read-only

`AccountId`, `ContactId`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `CustomerIdName`, `CustomerIdYomiName`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (16)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `account_entitlement_Account` | [account](account.md) | `accountid` | `accountid` |
| `account_entitlement_Customer` | [account](account.md) | `customerid` | `customerid_account` |
| `business_unit_entitlement` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `contact_entitlement_ContactId` | [contact](contact.md) | `contactid` | `contactid` |
| `contact_entitlement_Customer` | [contact](contact.md) | `customerid` | `customerid_contact` |
| `entitlementtemplateid_RelationShip` | [entitlementtemplate](entitlementtemplate.md) | `entitlementtemplateid` | `entitlementtemplateid` |
| `lk_entitlement_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_entitlement_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_entitlement_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_entitlement_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_entitlement` | [owner](owner.md) | `ownerid` | `ownerid` |
| `processstage_Entitlement` | [processstage](processstage.md) | `stageid` | `stageid` |
| `sla_entitlement` | [sla](sla.md) | `slaid` | `slaid` |
| `team_entitlement` | [team](team.md) | `owningteam` | `owningteam` |
| `TransactionCurrency_Entitlement` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |
| `user_entitlement` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (37)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `entitlement_ActivityParties` | _n/a_ | `partyid` | _n/a_ |
| `entitlement_ActivityPointers` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlement_adx_inviteredemptions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlement_adx_portalcomments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlement_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `entitlement_Appointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlement_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlement_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlement_cases` | _n/a_ | `entitlementid` | _n/a_ |
| `entitlement_chats` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlement_connections1` | _n/a_ | `record1id` | _n/a_ |
| `entitlement_connections2` | _n/a_ | `record2id` | _n/a_ |
| `entitlement_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `entitlement_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `entitlement_Emails` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlement_entitlementchannel_EntitlementId` | _n/a_ | `entitlementid` | _n/a_ |
| `entitlement_Faxes` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlement_IncidentResolutions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlement_Letters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Entitlement_MailboxTrackingFolder` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlement_msdyn_copilottranscripts` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlement_msdyn_ocliveworkitems` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlement_msdyn_ocsessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlement_msfp_alerts` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlement_msfp_surveyinvites` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlement_msfp_surveyresponses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlement_OpportunityCloses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlement_OrderCloses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlement_PhoneCalls` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlement_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `entitlement_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlement_QuoteCloses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlement_RecurringAppointmentMasters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlement_ServiceAppointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlement_SocialActivities` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Entitlement_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlement_Tasks` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `entitlementcontacts_association` | [entitlementid](entitlementid.md) | _n/a_ | _n/a_ |
| `product_entitlement_association` | [entitlementid](entitlementid.md) | _n/a_ | _n/a_ |

## Source

Generated from [entitlement.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/entitlement.md) on 2026-05-06.