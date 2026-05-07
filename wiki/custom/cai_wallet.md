---
logical: "cai_wallet"
display: "Portafoglio"
entitySetName: "cai_wallets"
primaryId: "cai_walletid"
primaryName: "cai_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Portafoglio

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cai_wallet` |
| Display name | Portafoglio |
| Display (plural) | Portafogli |
| Schema name | `cai_wallet` |
| Entity set (Web API) | `cai_wallets` |
| Primary id attribute | `cai_walletid` |
| Primary name attribute | `cai_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/cai_wallets?$select=cai_name&$top=10
GET /api/data/v9.2/cai_wallets(<guid>)
POST /api/data/v9.2/cai_wallets
PATCH /api/data/v9.2/cai_wallets(<guid>)
DELETE /api/data/v9.2/cai_wallets(<guid>)
```

## Attributes

Writable: **18** · Read-only: **10**

### Writable

`cai_branchlevelid`, `cai_businessunitid`, `cai_checksumid`, `cai_code`, `cai_description`, `cai_dsscodeid`, `cai_institutecode`, `cai_manager`, `cai_name`, `cai_orgunitid`, `cai_walletid`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_businessunit_cai_wallet_businessunitid` | [businessunit](businessunit.md) | `cai_businessunitid` | `cai_businessunitid` |
| `lk_cai_wallet_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_cai_wallet_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_cai_wallet_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_cai_wallet_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_cai_wallet` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_cai_wallet` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_cai_wallet` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_cai_wallet` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `cai_systemuser_cai_wallet_manager` | [systemuser](systemuser.md) | `cai_manager` | `cai_manager` |
| `cai_team_cai_wallet_branchlevelid` | [team](team.md) | `cai_branchlevelid` | `cai_branchlevelid` |
| `cai_wallet_orgunitid_cai_orgunit` | [cai_orgunit](cai_orgunit.md) | `cai_orgunitid` | `cai_orgunitid` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_wallet_SyncErrors` | [cai_wallet](cai_wallet.md) | `regardingobjectid` | `regardingobjectid_cai_wallet` |
| `cai_wallet_DuplicateMatchingRecord` | [cai_wallet](cai_wallet.md) | `duplicaterecordid` | `duplicaterecordid_cai_wallet` |
| `cai_wallet_DuplicateBaseRecord` | [cai_wallet](cai_wallet.md) | `baserecordid` | `baserecordid_cai_wallet` |
| `cai_wallet_AsyncOperations` | [cai_wallet](cai_wallet.md) | `regardingobjectid` | `regardingobjectid_cai_wallet` |
| `cai_wallet_MailboxTrackingFolders` | [cai_wallet](cai_wallet.md) | `regardingobjectid` | `regardingobjectid_cai_wallet` |
| `cai_wallet_UserEntityInstanceDatas` | [cai_wallet](cai_wallet.md) | `objectid` | `objectid_cai_wallet` |
| `cai_wallet_ProcessSession` | [cai_wallet](cai_wallet.md) | `regardingobjectid` | `regardingobjectid_cai_wallet` |
| `cai_wallet_BulkDeleteFailures` | [cai_wallet](cai_wallet.md) | `regardingobjectid` | `regardingobjectid_cai_wallet` |
| `cai_wallet_PrincipalObjectAttributeAccesses` | [cai_wallet](cai_wallet.md) | `objectid` | `objectid_cai_wallet` |
| `cai_cai_wallet_account_walletid` | [cai_wallet](cai_wallet.md) | `cai_walletid` | `cai_walletid` |
| `cai_cai_wallet_cai_walletmembership_walletid` | [cai_wallet](cai_wallet.md) | `cai_walletid` | `cai_walletid` |
| `cai_cai_wallet_contact_walletid` | [cai_wallet](cai_wallet.md) | `cai_walletid` | `cai_walletid` |


## Source

Generated from [cai_wallet (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cai_wallet')) on 2026-05-07.