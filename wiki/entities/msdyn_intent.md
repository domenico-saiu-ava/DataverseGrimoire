---
logical: "msdyn_intent"
display: "intent"
entitySetName: "msdyn_intents"
primaryId: "msdyn_intentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# intent

Captures the unique natural language intent

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_intent` |
| Display name | intent |
| Display (plural) | intents |
| Schema name | `msdyn_intent` |
| Entity set (Web API) | `msdyn_intents` |
| Primary id attribute | `msdyn_intentid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_intents?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_intents(<guid>)
POST /api/data/v9.2/msdyn_intents
PATCH /api/data/v9.2/msdyn_intents(<guid>)
DELETE /api/data/v9.2/msdyn_intents(<guid>)
```

## Attributes

Writable: **26** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_description`, `msdyn_harvestingsource`, `msdyn_intentfamilyid`, `msdyn_intentharvesting_batchjobstatusid`, `msdyn_intentId`, `msdyn_intentsolutionrate`, `msdyn_intentstring`, `msdyn_intentvolume`, `msdyn_is_selfserve_enabled`, `msdyn_isgroup`, `msdyn_name`, `msdyn_occurrencecount`, `msdyn_occurrencecount_last12months`, `msdyn_occurrencecount_last30days`, `msdyn_parentgroupid`, `msdyn_reviewstate`, `msdyn_reviewstatesource`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_intent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_intent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_intent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_intent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_intent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_intent_intentfamilyid_msdyn_intentfamily` | [msdyn_intentfamily](msdyn_intentfamily.md) | `msdyn_intentfamilyid` | `msdyn_intentfamilyid` |
| `msdyn_msdyn_intent_msdyn_intent_parentgroupid` | [msdyn_intent](msdyn_intent.md) | `msdyn_parentgroupid` | `msdyn_parentgroupid` |
| `owner_msdyn_intent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_intent` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_intent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (17)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_intent_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intent_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intent_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_intent_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_intent_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intent_msdyn_intentmetrics_msdyn_intentid` | _n/a_ | `msdyn_intentid` | _n/a_ |
| `msdyn_intent_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_intent_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intent_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intententity_intentgroupid_msdyn_intent` | _n/a_ | `msdyn_intentgroupid` | _n/a_ |
| `msdyn_intentplaybookmap_msdyn_intentid_msdyn_intent` | _n/a_ | `msdyn_intentid` | _n/a_ |
| `msdyn_intentsolutionmap_intentid_msdyn_intent` | _n/a_ | `msdyn_intentid` | _n/a_ |
| `msdyn_msdyn_intent_msdyn_intent_parentgroupid` | _n/a_ | `msdyn_parentgroupid` | _n/a_ |
| `msdyn_msdyn_intent_msdyn_intentattributeset_intentid` | _n/a_ | `msdyn_intentid` | _n/a_ |
| `msdyn_msdyn_intent_msdyn_intententity_intentid` | _n/a_ | `msdyn_intentid` | _n/a_ |
| `msdyn_msdyn_ocliveworkitem_msdyn_intent_activeintentgroupid` | _n/a_ | `msdyn_activeintentgroupid` | _n/a_ |
| `msdyn_msdyn_ocliveworkitem_msdyn_intent_activeintentid` | _n/a_ | `msdyn_activeintentid` | _n/a_ |


## Source

Generated from [msdyn_intent.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_intent.md) on 2026-05-06.