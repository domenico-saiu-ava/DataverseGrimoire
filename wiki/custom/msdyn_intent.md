---
logical: "msdyn_intent"
display: "finalità"
entitySetName: "msdyn_intents"
primaryId: "msdyn_intentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# finalità

Acquisisce la finalità univoca in linguaggio naturale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_intent` |
| Display name | finalità |
| Display (plural) | finalità |
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

Writable: **28** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_description`, `msdyn_harvestingsource`, `msdyn_intent_agent_settings`, `msdyn_intent_description`, `msdyn_intentfamilyid`, `msdyn_intentharvesting_batchjobstatusid`, `msdyn_intentid`, `msdyn_intentsolutionrate`, `msdyn_intentstring`, `msdyn_intentvolume`, `msdyn_is_selfserve_enabled`, `msdyn_isgroup`, `msdyn_locale_code`, `msdyn_name`, `msdyn_occurrencecount`, `msdyn_occurrencecount_last12months`, `msdyn_occurrencecount_last30days`, `msdyn_parentgroupid`, `msdyn_reviewstate`, `msdyn_reviewstatesource`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_intent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_intent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_intent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_intent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_intent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_intent` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_intent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_intent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_intent_msdyn_intent_parentgroupid` | [msdyn_intent](msdyn_intent.md) | `msdyn_parentgroupid` | `msdyn_parentgroupid` |
| `msdyn_msdyn_intent_msdyn_intentharvesting_batchjobstatusid_msdyn_intentharvesting_batchjobstatus` | [msdyn_intentharvesting_batchjobstatus](msdyn_intentharvesting_batchjobstatus.md) | `msdyn_intentharvesting_batchjobstatusid` | `msdyn_intentharvesting_batchjobstatusid` |
| `msdyn_intent_intentfamilyid_msdyn_intentfamily` | [msdyn_intentfamily](msdyn_intentfamily.md) | `msdyn_intentfamilyid` | `msdyn_intentfamilyid` |

### One-to-Many (21)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_intent_msdyn_aiagentstatus` | [msdyn_intent](msdyn_intent.md) | `msdyn_lastintent` | `msdyn_lastintent` |
| `msdyn_msdyn_intentgroup_msdyn_aiagentstatus` | [msdyn_intent](msdyn_intent.md) | `msdyn_lastintentgroup` | `msdyn_lastintentgroup` |
| `msdyn_intent_SyncErrors` | [msdyn_intent](msdyn_intent.md) | `regardingobjectid` | `regardingobjectid_msdyn_intent` |
| `msdyn_intent_DuplicateMatchingRecord` | [msdyn_intent](msdyn_intent.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_intent` |
| `msdyn_intent_DuplicateBaseRecord` | [msdyn_intent](msdyn_intent.md) | `baserecordid` | `baserecordid_msdyn_intent` |
| `msdyn_intent_AsyncOperations` | [msdyn_intent](msdyn_intent.md) | `regardingobjectid` | `regardingobjectid_msdyn_intent` |
| `msdyn_intent_MailboxTrackingFolders` | [msdyn_intent](msdyn_intent.md) | `regardingobjectid` | `regardingobjectid_msdyn_intent` |
| `msdyn_intent_UserEntityInstanceDatas` | [msdyn_intent](msdyn_intent.md) | `objectid` | `objectid_msdyn_intent` |
| `msdyn_intent_ProcessSession` | [msdyn_intent](msdyn_intent.md) | `regardingobjectid` | `regardingobjectid_msdyn_intent` |
| `msdyn_intent_BulkDeleteFailures` | [msdyn_intent](msdyn_intent.md) | `regardingobjectid` | `regardingobjectid_msdyn_intent` |
| `msdyn_intent_PrincipalObjectAttributeAccesses` | [msdyn_intent](msdyn_intent.md) | `objectid` | `objectid_msdyn_intent` |
| `msdyn_rulesetdependencymapping_msdyn_intent_msdyn_referencedpolymorphicentityid` | [msdyn_intent](msdyn_intent.md) | `msdyn_referencedpolymorphicentityid` | `msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_intent` |
| `msdyn_msdyn_intent_msdyn_intent_parentgroupid` | [msdyn_intent](msdyn_intent.md) | `msdyn_parentgroupid` | `msdyn_parentgroupid` |
| `msdyn_msdyn_intent_msdyn_intentattributeset_intentid` | [msdyn_intent](msdyn_intent.md) | `msdyn_intentid` | `msdyn_intentid` |
| `msdyn_msdyn_intent_msdyn_intententity_intentid` | [msdyn_intent](msdyn_intent.md) | `msdyn_intentid` | `msdyn_intentid` |
| `msdyn_intententity_intentgroupid_msdyn_intent` | [msdyn_intent](msdyn_intent.md) | `msdyn_intentgroupid` | `msdyn_intentgroupid` |
| `msdyn_intentsolutionmap_intentid_msdyn_intent` | [msdyn_intent](msdyn_intent.md) | `msdyn_intentid` | `msdyn_intentid` |
| `msdyn_msdyn_ocliveworkitem_msdyn_intent_activeintentgroupid` | [msdyn_intent](msdyn_intent.md) | `msdyn_activeintentgroupid` | `msdyn_activeintentgroupid` |
| `msdyn_msdyn_ocliveworkitem_msdyn_intent_activeintentid` | [msdyn_intent](msdyn_intent.md) | `msdyn_activeintentid` | `msdyn_activeintentid` |
| `msdyn_intentplaybookmap_msdyn_intentid_msdyn_intent` | [msdyn_intent](msdyn_intent.md) | `msdyn_intentid` | `msdyn_intentid` |
| `msdyn_intent_msdyn_intentmetrics_msdyn_intentid` | [msdyn_intent](msdyn_intent.md) | `msdyn_intentid` | `msdyn_intentid` |


## Source

Generated from [msdyn_intent (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_intent')) on 2026-05-07.