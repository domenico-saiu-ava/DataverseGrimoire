---
logical: "entitlementtemplate"
display: "Entitlement Template"
entitySetName: "entitlementtemplates"
primaryId: "entitlementtemplateid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Entitlement Template

Contains predefined customer support terms that can be used to created entitlements for customers.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `entitlementtemplate` |
| Display name | Entitlement Template |
| Display (plural) | Entitlement Templates |
| Schema name | `EntitlementTemplate` |
| Entity set (Web API) | `entitlementtemplates` |
| Primary id attribute | `entitlementtemplateid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/entitlementtemplates?$select=name&$top=10
GET /api/data/v9.2/entitlementtemplates(<guid>)
POST /api/data/v9.2/entitlementtemplates
PATCH /api/data/v9.2/entitlementtemplates(<guid>)
DELETE /api/data/v9.2/entitlementtemplates(<guid>)
```

## Attributes

Writable: **17** · Read-only: **9**

### Writable

`AllocationTypeCode`, `DecreaseRemainingOn`, `Description`, `EndDate`, `EntitlementTemplateId`, `entitytype`, `ImportSequenceNumber`, `KbAccessLevel`, `Name`, `OverriddenCreatedOn`, `RestrictCaseCreation`, `SLAId`, `StartDate`, `TimeZoneRuleVersionNumber`, `TotalTerms`, `TransactionCurrencyId`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `entitlementtemplate_organization` | [organization](organization.md) | `organizationid` | `organizationid` |
| `lk_entitlementtemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_entitlementtemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_entitlementtemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_entitlementtemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `sla_entitlementtemplate` | [sla](sla.md) | `slaid` | `slaid` |
| `TransactionCurrency_entitlementtemplate` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (34)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `entitlementtemplate_ActivityPointers` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlementtemplate_adx_inviteredemptions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlementtemplate_adx_portalcomments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlementtemplate_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `entitlementtemplate_Appointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlementtemplate_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlementtemplate_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlementtemplate_chats` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlementtemplate_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `entitlementtemplate_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `entitlementtemplate_Emails` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlementtemplate_entitlementchannel_entitlementtemplateid` | _n/a_ | `entitlementtemplateid` | _n/a_ |
| `entitlementtemplate_Faxes` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlementtemplate_IncidentResolutions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlementtemplate_Letters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `EntitlementTemplate_MailboxTrackingFolder` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlementtemplate_msdyn_copilottranscripts` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlementtemplate_msdyn_ocliveworkitems` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlementtemplate_msdyn_ocsessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlementtemplate_msfp_alerts` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlementtemplate_msfp_surveyinvites` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlementtemplate_msfp_surveyresponses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlementtemplate_OpportunityCloses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlementtemplate_OrderCloses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlementtemplate_PhoneCalls` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlementtemplate_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `entitlementtemplate_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlementtemplate_QuoteCloses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlementtemplate_RecurringAppointmentMasters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlementtemplate_ServiceAppointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlementtemplate_SocialActivities` | _n/a_ | `regardingobjectid` | _n/a_ |
| `EntitlementTemplate_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlementtemplate_Tasks` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlementtemplateid_RelationShip` | _n/a_ | `entitlementtemplateid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `product_entitlementtemplate_association` | [entitlementtemplateid](entitlementtemplateid.md) | _n/a_ | _n/a_ |

## Source

Generated from [entitlementtemplate.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/entitlementtemplate.md) on 2026-05-06.