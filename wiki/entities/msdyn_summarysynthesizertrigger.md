---
logical: "msdyn_summarysynthesizertrigger"
display: "Summary Synthesizer Agent Trigger"
entitySetName: "msdyn_summarysynthesizertriggers"
primaryId: "msdyn_summarysynthesizertriggerid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Summary Synthesizer Agent Trigger

Summary Synthesizer Agent Trigger Entity

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_summarysynthesizertrigger` |
| Display name | Summary Synthesizer Agent Trigger |
| Display (plural) | msdyn_summarysynthesizertriggers |
| Schema name | `msdyn_summarysynthesizertrigger` |
| Entity set (Web API) | `msdyn_summarysynthesizertriggers` |
| Primary id attribute | `msdyn_summarysynthesizertriggerid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_summarysynthesizertriggers?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_summarysynthesizertriggers(<guid>)
POST /api/data/v9.2/msdyn_summarysynthesizertriggers
PATCH /api/data/v9.2/msdyn_summarysynthesizertriggers(<guid>)
DELETE /api/data/v9.2/msdyn_summarysynthesizertriggers(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_input`, `msdyn_leadid`, `msdyn_name`, `msdyn_retrycount`, `msdyn_summarysynthesizertriggerId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_summarysynthesizertrigger` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_summarysynthesizertrigger_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_summarysynthesizertrigger_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_summarysynthesizertrigger_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_summarysynthesizertrigger_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_summarysynthesizertrigger` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_summarysynthesizertrigger` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_summarysynthesizertrigger` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_summarysynthesizertrigger_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_summarysynthesizertrigger_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_summarysynthesizertrigger_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_summarysynthesizertrigger_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_summarysynthesizertrigger_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_summarysynthesizertrigger_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_summarysynthesizertrigger_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_summarysynthesizertrigger_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_summarysynthesizertrigger.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_summarysynthesizertrigger.md) on 2026-05-06.