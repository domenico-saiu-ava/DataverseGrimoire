---
logical: "msdynmkt_linkmobilitychannelinstance"
display: "Link mobility channel instance"
entitySetName: "msdynmkt_linkmobilitychannelinstances"
primaryId: "msdynmkt_linkmobilitychannelinstanceid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Link mobility channel instance

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_linkmobilitychannelinstance` |
| Display name | Link mobility channel instance |
| Display (plural) | Link mobility channel instances |
| Schema name | `msdynmkt_linkmobilitychannelinstance` |
| Entity set (Web API) | `msdynmkt_linkmobilitychannelinstances` |
| Primary id attribute | `msdynmkt_linkmobilitychannelinstanceid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_linkmobilitychannelinstances?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_linkmobilitychannelinstances(<guid>)
POST /api/data/v9.2/msdynmkt_linkmobilitychannelinstances
PATCH /api/data/v9.2/msdynmkt_linkmobilitychannelinstances(<guid>)
DELETE /api/data/v9.2/msdynmkt_linkmobilitychannelinstances(<guid>)
```

## Attributes

Writable: **11** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdynmkt_linkmobilitychannelinstanceId`, `msdynmkt_name`, `msdynmkt_type`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdynmkt_linkmobilitychannelinstance` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdynmkt_linkmobilitychannelinstance_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_linkmobilitychannelinstance_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_linkmobilitychannelinstance_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_linkmobilitychannelinstance_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdynmkt_linkmobilitychannelinstance` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdynmkt_linkmobilitychannelinstance` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdynmkt_linkmobilitychannelinstance` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ChannelInstance_extendedentityid_msdynmkt_linkmobilitychannelinstance` | _n/a_ | `msdyn_extendedentityid` | _n/a_ |
| `msdynmkt_linkmobilitychannelinstance_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_linkmobilitychannelinstance_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_linkmobilitychannelinstance_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_linkmobilitychannelinstance_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdynmkt_linkmobilitychannelinstance_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_linkmobilitychannelinstance_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdynmkt_linkmobilitychannelinstance.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdynmkt_linkmobilitychannelinstance.md) on 2026-05-06.