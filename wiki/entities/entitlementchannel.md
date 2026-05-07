---
logical: "entitlementchannel"
display: "Entitlement Channel"
entitySetName: "entitlementchannels"
primaryId: "entitlementchannelid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Entitlement Channel

Defines the amount and type of support for a channel.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `entitlementchannel` |
| Display name | Entitlement Channel |
| Display (plural) | Entitlement Channels |
| Schema name | `EntitlementChannel` |
| Entity set (Web API) | `entitlementchannels` |
| Primary id attribute | `entitlementchannelid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/entitlementchannels?$select=name&$top=10
GET /api/data/v9.2/entitlementchannels(<guid>)
POST /api/data/v9.2/entitlementchannels
PATCH /api/data/v9.2/entitlementchannels(<guid>)
DELETE /api/data/v9.2/entitlementchannels(<guid>)
```

## Attributes

Writable: **12** · Read-only: **15**

### Writable

`Channel`, `EntitlementChannelId`, `EntitlementId`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `RemainingTerms`, `TimeZoneRuleVersionNumber`, `TotalTerms`, `TransactionCurrencyId`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OwnerIdName`, `OwnerIdType`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `entitlement_entitlementchannel_EntitlementId` | [entitlement](entitlement.md) | `entitlementid` | `entitlementid` |
| `entitlementchannel_organization` | [organization](organization.md) | `organizationid` | `organizationid` |
| `lk_entitlementchannel_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_entitlementchannel_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_entitlementchannel_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_entitlementchannel_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `team_entitlementchannel` | [team](team.md) | `owningteam` | `owningteam` |
| `TransactionCurrency_entitlementchannel` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |
| `user_entitlementchannel` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `entitlementchannel_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `entitlementchannel_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlementchannel_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlementchannel_connections1` | _n/a_ | `record1id` | _n/a_ |
| `entitlementchannel_connections2` | _n/a_ | `record2id` | _n/a_ |
| `entitlementchannel_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `entitlementchannel_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `entitlementchannel_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlementchannel_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `entitlementchannel_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlementchannel_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [entitlementchannel.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/entitlementchannel.md) on 2026-05-06.