---
logical: "msdyn_salesagenthandover"
display: "Sales Agent Handover"
entitySetName: "msdyn_salesagenthandovers"
primaryId: "msdyn_salesagenthandoverid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Sales Agent Handover

This table contains records of Sales Agent Handovers.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salesagenthandover` |
| Display name | Sales Agent Handover |
| Display (plural) | Sales Agent Handovers |
| Schema name | `msdyn_salesagenthandover` |
| Entity set (Web API) | `msdyn_salesagenthandovers` |
| Primary id attribute | `msdyn_salesagenthandoverid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salesagenthandovers?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_salesagenthandovers(<guid>)
POST /api/data/v9.2/msdyn_salesagenthandovers
PATCH /api/data/v9.2/msdyn_salesagenthandovers(<guid>)
DELETE /api/data/v9.2/msdyn_salesagenthandovers(<guid>)
```

## Attributes

Writable: **16** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_handoveractions`, `msdyn_handoverintent`, `msdyn_name`, `msdyn_regardingid`, `msdyn_regardingIdType`, `msdyn_salesagenthandoverId`, `msdyn_salesagenthandovertarget`, `msdyn_salesagentrun`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_salesagenthandover` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_salesagenthandover_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salesagenthandover_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salesagenthandover_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salesagenthandover_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_salesagenthandover_msdyn_salesagentrun` | [msdyn_salesagentrun](msdyn_salesagentrun.md) | `msdyn_salesagentrun` | `msdyn_salesagentrun` |
| `msdyn_salesagenthandover_regardingId_lead` | [lead](lead.md) | `msdyn_regardingid` | `msdyn_regardingId` |
| `owner_msdyn_salesagenthandover` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_salesagenthandover` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_salesagenthandover` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salesagenthandover_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesagenthandover_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesagenthandover_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesagenthandover_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_salesagenthandover_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesagenthandover_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_salesagenthandover.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_salesagenthandover.md) on 2026-05-06.