---
logical: "entitlementtemplatechannel"
display: "Entitlement Template Channel"
entitySetName: "entitlementtemplatechannels"
primaryId: "entitlementtemplatechannelid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# Entitlement Template Channel

Contains predefined support terms for a channel to create entitlements for customers.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `entitlementtemplatechannel` |
| Display name | Entitlement Template Channel |
| Display (plural) | Entitlement Template Channels |
| Schema name | `EntitlementTemplateChannel` |
| Entity set (Web API) | `entitlementtemplatechannels` |
| Primary id attribute | `entitlementtemplatechannelid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/entitlementtemplatechannels?$select=name&$top=10
GET /api/data/v9.2/entitlementtemplatechannels(<guid>)
POST /api/data/v9.2/entitlementtemplatechannels
PATCH /api/data/v9.2/entitlementtemplatechannels(<guid>)
DELETE /api/data/v9.2/entitlementtemplatechannels(<guid>)
```

## Attributes

Writable: **10** · Read-only: **9**

### Writable

`Channel`, `EntitlementTemplateChannelId`, `EntitlementTemplateId`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `TimeZoneRuleVersionNumber`, `TotalTerms`, `TransactionCurrencyId`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `entitlementtemplate_entitlementchannel_entitlementtemplateid` | [entitlementtemplate](entitlementtemplate.md) | `entitlementtemplateid` | `entitlementtemplateid` |
| `entitlementtemplatechannel_organization` | [organization](organization.md) | `organizationid` | `organizationid` |
| `lk_entitlementtemplatechannel_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_entitlementtemplatechannel_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_entitlementtemplatechannel_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_entitlementtemplatechannel_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `TransactionCurrency_entitlementtemplatechannel` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `entitlementtemplatechannel_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlementtemplatechannel_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlementtemplatechannel_connections1` | _n/a_ | `record1id` | _n/a_ |
| `entitlementtemplatechannel_connections2` | _n/a_ | `record2id` | _n/a_ |
| `entitlementtemplatechannel_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlementtemplatechannel_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `entitlementtemplatechannel_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [entitlementtemplatechannel.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/entitlementtemplatechannel.md) on 2026-05-06.