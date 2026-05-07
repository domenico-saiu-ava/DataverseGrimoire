---
logical: "cai_walletmembership"
display: "Membro Portafoglio"
entitySetName: "cai_walletmemberships"
primaryId: "cai_walletmembershipid"
primaryName: "cai_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Membro Portafoglio

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cai_walletmembership` |
| Display name | Membro Portafoglio |
| Display (plural) | Membri Portafoglio |
| Schema name | `cai_walletmembership` |
| Entity set (Web API) | `cai_walletmemberships` |
| Primary id attribute | `cai_walletmembershipid` |
| Primary name attribute | `cai_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/cai_walletmemberships?$select=cai_name&$top=10
GET /api/data/v9.2/cai_walletmemberships(<guid>)
POST /api/data/v9.2/cai_walletmemberships
PATCH /api/data/v9.2/cai_walletmemberships(<guid>)
DELETE /api/data/v9.2/cai_walletmemberships(<guid>)
```

## Attributes

Writable: **15** · Read-only: **10**

### Writable

`cai_checksumid`, `cai_enddate`, `cai_membershiptype`, `cai_name`, `cai_startdate`, `cai_systemuserid`, `cai_walletid`, `cai_walletmembershipid`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_cai_wallet_cai_walletmembership_walletid` | [cai_wallet](cai_wallet.md) | `cai_walletid` | `cai_walletid` |
| `lk_cai_walletmembership_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_cai_walletmembership_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_cai_walletmembership_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_cai_walletmembership_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_cai_walletmembership` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_cai_walletmembership` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_cai_walletmembership` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_cai_walletmembership` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `cai_systemuser_cai_walletmembership_systemuserid` | [systemuser](systemuser.md) | `cai_systemuserid` | `cai_systemuserid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_walletmembership_SyncErrors` | [cai_walletmembership](cai_walletmembership.md) | `regardingobjectid` | `regardingobjectid_cai_walletmembership` |
| `cai_walletmembership_DuplicateMatchingRecord` | [cai_walletmembership](cai_walletmembership.md) | `duplicaterecordid` | `duplicaterecordid_cai_walletmembership` |
| `cai_walletmembership_DuplicateBaseRecord` | [cai_walletmembership](cai_walletmembership.md) | `baserecordid` | `baserecordid_cai_walletmembership` |
| `cai_walletmembership_AsyncOperations` | [cai_walletmembership](cai_walletmembership.md) | `regardingobjectid` | `regardingobjectid_cai_walletmembership` |
| `cai_walletmembership_MailboxTrackingFolders` | [cai_walletmembership](cai_walletmembership.md) | `regardingobjectid` | `regardingobjectid_cai_walletmembership` |
| `cai_walletmembership_UserEntityInstanceDatas` | [cai_walletmembership](cai_walletmembership.md) | `objectid` | `objectid_cai_walletmembership` |
| `cai_walletmembership_ProcessSession` | [cai_walletmembership](cai_walletmembership.md) | `regardingobjectid` | `regardingobjectid_cai_walletmembership` |
| `cai_walletmembership_BulkDeleteFailures` | [cai_walletmembership](cai_walletmembership.md) | `regardingobjectid` | `regardingobjectid_cai_walletmembership` |
| `cai_walletmembership_PrincipalObjectAttributeAccesses` | [cai_walletmembership](cai_walletmembership.md) | `objectid` | `objectid_cai_walletmembership` |


## Source

Generated from [cai_walletmembership (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cai_walletmembership')) on 2026-05-07.