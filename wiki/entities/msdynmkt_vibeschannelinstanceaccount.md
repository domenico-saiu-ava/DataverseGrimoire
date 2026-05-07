---
logical: "msdynmkt_vibeschannelinstanceaccount"
display: "Vibes channel instance account"
entitySetName: "msdynmkt_vibeschannelinstanceaccounts"
primaryId: "msdynmkt_vibeschannelinstanceaccountid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Vibes channel instance account

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_vibeschannelinstanceaccount` |
| Display name | Vibes channel instance account |
| Display (plural) | Vibes channel instance accounts |
| Schema name | `msdynmkt_vibeschannelinstanceaccount` |
| Entity set (Web API) | `msdynmkt_vibeschannelinstanceaccounts` |
| Primary id attribute | `msdynmkt_vibeschannelinstanceaccountid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_vibeschannelinstanceaccounts?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_vibeschannelinstanceaccounts(<guid>)
POST /api/data/v9.2/msdynmkt_vibeschannelinstanceaccounts
PATCH /api/data/v9.2/msdynmkt_vibeschannelinstanceaccounts(<guid>)
DELETE /api/data/v9.2/msdynmkt_vibeschannelinstanceaccounts(<guid>)
```

## Attributes

Writable: **12** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdynmkt_name`, `msdynmkt_password`, `msdynmkt_username`, `msdynmkt_vibeschannelinstanceaccountId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdynmkt_vibeschannelinstanceaccount` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdynmkt_vibeschannelinstanceaccount_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_vibeschannelinstanceaccount_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_vibeschannelinstanceaccount_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_vibeschannelinstanceaccount_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdynmkt_vibeschannelinstanceaccount` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdynmkt_vibeschannelinstanceaccount` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdynmkt_vibeschannelinstanceaccount` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ChannelInstanceAccount_extendedentityid_msdynmkt_vibeschannelinstanceaccount` | _n/a_ | `msdyn_extendedentityid` | _n/a_ |
| `msdynmkt_vibeschannelinstanceaccount_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_vibeschannelinstanceaccount_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_vibeschannelinstanceaccount_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_vibeschannelinstanceaccount_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdynmkt_vibeschannelinstanceaccount_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_vibeschannelinstanceaccount_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdynmkt_vibeschannelinstanceaccount.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdynmkt_vibeschannelinstanceaccount.md) on 2026-05-06.