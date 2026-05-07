---
logical: "msdynmkt_linkmobilitychannelinstanceaccount"
display: "Link mobility channel instance account"
entitySetName: "msdynmkt_linkmobilitychannelinstanceaccounts"
primaryId: "msdynmkt_linkmobilitychannelinstanceaccountid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Link mobility channel instance account

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_linkmobilitychannelinstanceaccount` |
| Display name | Link mobility channel instance account |
| Display (plural) | Link mobility channel instance accounts |
| Schema name | `msdynmkt_linkmobilitychannelinstanceaccount` |
| Entity set (Web API) | `msdynmkt_linkmobilitychannelinstanceaccounts` |
| Primary id attribute | `msdynmkt_linkmobilitychannelinstanceaccountid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_linkmobilitychannelinstanceaccounts?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_linkmobilitychannelinstanceaccounts(<guid>)
POST /api/data/v9.2/msdynmkt_linkmobilitychannelinstanceaccounts
PATCH /api/data/v9.2/msdynmkt_linkmobilitychannelinstanceaccounts(<guid>)
DELETE /api/data/v9.2/msdynmkt_linkmobilitychannelinstanceaccounts(<guid>)
```

## Attributes

Writable: **16** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdynmkt_baseurl`, `msdynmkt_gateid`, `msdynmkt_linkmobilitychannelinstanceaccountId`, `msdynmkt_name`, `msdynmkt_password`, `msdynmkt_platformid`, `msdynmkt_platformPartnerId`, `msdynmkt_username`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdynmkt_linkmobilitychannelinstanceaccount` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdynmkt_linkmobilitychannelinstanceaccount_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_linkmobilitychannelinstanceaccount_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_linkmobilitychannelinstanceaccount_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_linkmobilitychannelinstanceaccount_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdynmkt_linkmobilitychannelinstanceaccount` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdynmkt_linkmobilitychannelinstanceaccount` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdynmkt_linkmobilitychannelinstanceaccount` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ChannelInstanceAccount_extendedentityid_msdynmkt_linkmobilitychannelinstanceaccount` | _n/a_ | `msdyn_extendedentityid` | _n/a_ |
| `msdynmkt_linkmobilitychannelinstanceaccount_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_linkmobilitychannelinstanceaccount_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_linkmobilitychannelinstanceaccount_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_linkmobilitychannelinstanceaccount_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdynmkt_linkmobilitychannelinstanceaccount_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_linkmobilitychannelinstanceaccount_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdynmkt_linkmobilitychannelinstanceaccount.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdynmkt_linkmobilitychannelinstanceaccount.md) on 2026-05-06.