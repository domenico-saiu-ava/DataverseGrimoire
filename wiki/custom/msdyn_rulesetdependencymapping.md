---
logical: "msdyn_rulesetdependencymapping"
display: "Rulesetentitymapping"
entitySetName: "msdyn_rulesetdependencymappings"
primaryId: "msdyn_rulesetdependencymappingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Rulesetentitymapping

Solo per uso interno, l'entità viene utilizzata per archiviare un mapping implicito tra un set di regole e un'entità polimorfica

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_rulesetdependencymapping` |
| Display name | Rulesetentitymapping |
| Display (plural) | Rulesetentitymappings |
| Schema name | `msdyn_rulesetdependencymapping` |
| Entity set (Web API) | `msdyn_rulesetdependencymappings` |
| Primary id attribute | `msdyn_rulesetdependencymappingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_rulesetdependencymappings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_rulesetdependencymappings(<guid>)
POST /api/data/v9.2/msdyn_rulesetdependencymappings
PATCH /api/data/v9.2/msdyn_rulesetdependencymappings(<guid>)
DELETE /api/data/v9.2/msdyn_rulesetdependencymappings(<guid>)
```

## Attributes

Writable: **15** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_name`, `msdyn_referencedpolymorphicentityid`, `msdyn_referencedpolymorphiclogicalname`, `msdyn_referencingruleid`, `msdyn_referencingrulename`, `msdyn_referencingrulesetid`, `msdyn_rulesetdependencymappingid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (19)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_rulesetdependencymapping_ocliveworkstreamcontextvariable_referencedpolymorphicentityid` | [msdyn_ocliveworkstreamcontextvariable](msdyn_ocliveworkstreamcontextvariable.md) | `msdyn_referencedpolymorphicentityid` | `msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_ocliveworkstreamcontextvariable` |
| `msdyn_rulesetdependencymapping_liveworkstream_referencedpolymorphicentityid` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_referencedpolymorphicentityid` | `msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_liveworkstream` |
| `msdyn_rulesetdependencymapping_msdyn_capacityprofile_msdyn_referencedpolymorphicentityid` | [msdyn_capacityprofile](msdyn_capacityprofile.md) | `msdyn_referencedpolymorphicentityid` | `msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_capacityprofile` |
| `msdyn_rulesetdependencymapping_msdyn_overflowactionconfig_msdyn_referencedpolymorphicentityid` | [msdyn_overflowactionconfig](msdyn_overflowactionconfig.md) | `msdyn_referencedpolymorphicentityid` | `msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_overflowactionconfig` |
| `lk_msdyn_rulesetdependencymapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_rulesetdependencymapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_rulesetdependencymapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_rulesetdependencymapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_rulesetdependencymapping` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_rulesetdependencymapping` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_rulesetdependencymapping` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_rulesetdependencymapping` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_rulesetdependencymapping_msdyn_intent_msdyn_referencedpolymorphicentityid` | [msdyn_intent](msdyn_intent.md) | `msdyn_referencedpolymorphicentityid` | `msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_intent` |
| `msdyn_rulesetdependencymapping_queue_msdyn_referencedpolymorphicentityid` | [queue](queue.md) | `msdyn_referencedpolymorphicentityid` | `msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_queue` |
| `msdyn_rulesetdependencymapping_msdyn_decisionruleset_msdyn_referencingrulesetid` | [msdyn_decisionruleset](msdyn_decisionruleset.md) | `msdyn_referencingrulesetid` | `msdyn_referencingrulesetid_msdyn_rulesetdependencymapping_msdyn_decisionruleset` |
| `msdyn_rulesetdependencymapping_characteristic_msdyn_referencedpolymorphicentityid` | [characteristic](characteristic.md) | `msdyn_referencedpolymorphicentityid` | `msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_characteristic` |
| `msdyn_rulesetdependencymapping_ratingvalue_msdyn_referencedpolymorphicentityid` | [ratingvalue](ratingvalue.md) | `msdyn_referencedpolymorphicentityid` | `msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_ratingvalue` |
| `msdyn_rulesetdependencymapping_msdyn_decisionruleset_msdyn_referencedpolymorphicentityid` | [msdyn_decisionruleset](msdyn_decisionruleset.md) | `msdyn_referencedpolymorphicentityid` | `msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_decisionruleset` |
| `msdyn_rulesetdependencymapping_msdyn_customapirulesetconfig_msdyn_referencedpolymorphicentityid` | [msdyn_customapirulesetconfiguration](msdyn_customapirulesetconfiguration.md) | `msdyn_referencedpolymorphicentityid` | `msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_customapirulesetconfig` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_rulesetdependencymapping_SyncErrors` | [msdyn_rulesetdependencymapping](msdyn_rulesetdependencymapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_rulesetdependencymapping` |
| `msdyn_rulesetdependencymapping_DuplicateMatchingRecord` | [msdyn_rulesetdependencymapping](msdyn_rulesetdependencymapping.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_rulesetdependencymapping` |
| `msdyn_rulesetdependencymapping_DuplicateBaseRecord` | [msdyn_rulesetdependencymapping](msdyn_rulesetdependencymapping.md) | `baserecordid` | `baserecordid_msdyn_rulesetdependencymapping` |
| `msdyn_rulesetdependencymapping_AsyncOperations` | [msdyn_rulesetdependencymapping](msdyn_rulesetdependencymapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_rulesetdependencymapping` |
| `msdyn_rulesetdependencymapping_MailboxTrackingFolders` | [msdyn_rulesetdependencymapping](msdyn_rulesetdependencymapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_rulesetdependencymapping` |
| `msdyn_rulesetdependencymapping_UserEntityInstanceDatas` | [msdyn_rulesetdependencymapping](msdyn_rulesetdependencymapping.md) | `objectid` | `objectid_msdyn_rulesetdependencymapping` |
| `msdyn_rulesetdependencymapping_ProcessSession` | [msdyn_rulesetdependencymapping](msdyn_rulesetdependencymapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_rulesetdependencymapping` |
| `msdyn_rulesetdependencymapping_BulkDeleteFailures` | [msdyn_rulesetdependencymapping](msdyn_rulesetdependencymapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_rulesetdependencymapping` |
| `msdyn_rulesetdependencymapping_PrincipalObjectAttributeAccesses` | [msdyn_rulesetdependencymapping](msdyn_rulesetdependencymapping.md) | `objectid` | `objectid_msdyn_rulesetdependencymapping` |


## Source

Generated from [msdyn_rulesetdependencymapping (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_rulesetdependencymapping')) on 2026-05-07.