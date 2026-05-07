---
logical: "msdyn_outreachtriggeragent"
display: "Outreach Trigger Agent"
entitySetName: "msdyn_outreachtriggeragents"
primaryId: "msdyn_outreachtriggeragentid"
primaryName: "msdyn_conversationid"
tableType: "Standard"
ownership: "UserOwned"
---

# Outreach Trigger Agent

Entity to save outreach agent

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_outreachtriggeragent` |
| Display name | Outreach Trigger Agent |
| Display (plural) | Outreach Trigger Agents |
| Schema name | `msdyn_outreachtriggeragent` |
| Entity set (Web API) | `msdyn_outreachtriggeragents` |
| Primary id attribute | `msdyn_outreachtriggeragentid` |
| Primary name attribute | `msdyn_conversationid` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_outreachtriggeragents?$select=msdyn_conversationid&$top=10
GET /api/data/v9.2/msdyn_outreachtriggeragents(<guid>)
POST /api/data/v9.2/msdyn_outreachtriggeragents
PATCH /api/data/v9.2/msdyn_outreachtriggeragents(<guid>)
DELETE /api/data/v9.2/msdyn_outreachtriggeragents(<guid>)
```

## Attributes

Writable: **12** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_conversationId`, `msdyn_emailpayload`, `msdyn_outreachtriggeragentId`, `msdyn_retrycount`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_outreachtriggeragent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_outreachtriggeragent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_outreachtriggeragent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_outreachtriggeragent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_outreachtriggeragent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_outreachtriggeragent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_outreachtriggeragent` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_outreachtriggeragent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_outreachtriggeragent_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_outreachtriggeragent_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_outreachtriggeragent_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_outreachtriggeragent_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_outreachtriggeragent_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_outreachtriggeragent_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_outreachtriggeragent_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_outreachtriggeragent_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_outreachtriggeragent.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_outreachtriggeragent.md) on 2026-05-06.