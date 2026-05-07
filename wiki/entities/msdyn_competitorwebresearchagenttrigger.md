---
logical: "msdyn_competitorwebresearchagenttrigger"
display: "Web Research Agent Trigger"
entitySetName: "msdyn_competitorwebresearchagenttriggers"
primaryId: "msdyn_competitorwebresearchagenttriggerid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Web Research Agent Trigger

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_competitorwebresearchagenttrigger` |
| Display name | Web Research Agent Trigger |
| Display (plural) | Web Research Agent Triggers |
| Schema name | `msdyn_competitorwebresearchagenttrigger` |
| Entity set (Web API) | `msdyn_competitorwebresearchagenttriggers` |
| Primary id attribute | `msdyn_competitorwebresearchagenttriggerid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_competitorwebresearchagenttriggers?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_competitorwebresearchagenttriggers(<guid>)
POST /api/data/v9.2/msdyn_competitorwebresearchagenttriggers
PATCH /api/data/v9.2/msdyn_competitorwebresearchagenttriggers(<guid>)
DELETE /api/data/v9.2/msdyn_competitorwebresearchagenttriggers(<guid>)
```

## Attributes

Writable: **16** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_competitorwebresearchagenttriggerId`, `msdyn_input`, `msdyn_leadcompany`, `msdyn_Name`, `msdyn_reference_id`, `msdyn_retrycount`, `msdyn_sellercompany`, `msdyn_trigger_source`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_competitorwebresearchagenttrigger` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_competitorwebresearchagenttrigger_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_competitorwebresearchagenttrigger_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_competitorwebresearchagenttrigger_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_competitorwebresearchagenttrigger_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_competitorwebresearchagenttrigger` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_competitorwebresearchagenttrigger` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_competitorwebresearchagenttrigger` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_competitorwebresearchagenttrigger_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_competitorwebresearchagenttrigger_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_competitorwebresearchagenttrigger_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_competitorwebresearchagenttrigger_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_competitorwebresearchagenttrigger_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_competitorwebresearchagenttrigger_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_competitorwebresearchagenttrigger_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_competitorwebresearchagenttrigger_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_competitorwebresearchagenttrigger.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_competitorwebresearchagenttrigger.md) on 2026-05-06.