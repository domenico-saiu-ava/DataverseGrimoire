---
logical: "msdyn_competitorresearchagenttrigger"
display: "Competitor Research Agent Trigger"
entitySetName: "msdyn_competitorresearchagenttriggers"
primaryId: "msdyn_competitorresearchagenttriggerid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Competitor Research Agent Trigger

Competitor Research Agent Trigger

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_competitorresearchagenttrigger` |
| Display name | Competitor Research Agent Trigger |
| Display (plural) | Competitor Research Agent Trigger |
| Schema name | `msdyn_competitorresearchagenttrigger` |
| Entity set (Web API) | `msdyn_competitorresearchagenttriggers` |
| Primary id attribute | `msdyn_competitorresearchagenttriggerid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_competitorresearchagenttriggers?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_competitorresearchagenttriggers(<guid>)
POST /api/data/v9.2/msdyn_competitorresearchagenttriggers
PATCH /api/data/v9.2/msdyn_competitorresearchagenttriggers(<guid>)
DELETE /api/data/v9.2/msdyn_competitorresearchagenttriggers(<guid>)
```

## Attributes

Writable: **17** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_competitorresearchagenttriggerId`, `msdyn_input`, `msdyn_leadcompany`, `msdyn_name`, `msdyn_reference_id`, `msdyn_retrycount`, `msdyn_sellercompany`, `msdyn_trigger_source`, `msdyn_unprocessedinput`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_competitorresearchagenttrigger` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_competitorresearchagenttrigger_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_competitorresearchagenttrigger_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_competitorresearchagenttrigger_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_competitorresearchagenttrigger_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_competitorresearchagenttrigger` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_competitorresearchagenttrigger` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_competitorresearchagenttrigger` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_competitorresearchagenttrigger_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_competitorresearchagenttrigger_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_competitorresearchagenttrigger_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_competitorresearchagenttrigger_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_competitorresearchagenttrigger_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_competitorresearchagenttrigger_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_competitorresearchagenttrigger_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_competitorresearchagenttrigger_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_competitorresearchagenttrigger.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_competitorresearchagenttrigger.md) on 2026-05-06.