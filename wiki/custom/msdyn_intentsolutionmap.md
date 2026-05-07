---
logical: "msdyn_intentsolutionmap"
display: "Mappa soluzioni finalità"
entitySetName: "msdyn_intentsolutionmaps"
primaryId: "msdyn_intentsolutionmapid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Mappa soluzioni finalità

Acquisisce soluzioni per gruppi di finalità

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_intentsolutionmap` |
| Display name | Mappa soluzioni finalità |
| Display (plural) | Mappe soluzioni finalità |
| Schema name | `msdyn_intentsolutionmap` |
| Entity set (Web API) | `msdyn_intentsolutionmaps` |
| Primary id attribute | `msdyn_intentsolutionmapid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_intentsolutionmaps?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_intentsolutionmaps(<guid>)
POST /api/data/v9.2/msdyn_intentsolutionmaps
PATCH /api/data/v9.2/msdyn_intentsolutionmaps(<guid>)
DELETE /api/data/v9.2/msdyn_intentsolutionmaps(<guid>)
```

## Attributes

Writable: **22** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_agentgroupid`, `msdyn_intentfamilyid`, `msdyn_intentgroupconditionid`, `msdyn_intentid`, `msdyn_intentsolutionmapid`, `msdyn_name`, `msdyn_order`, `msdyn_queueid`, `msdyn_reviewstate`, `msdyn_rootknowledgearticleid`, `msdyn_solutionmapid`, `msdyn_solutionmetadata`, `msdyn_solutiontype`, `msdyn_source`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (15)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_intentsolutionmap_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_intentsolutionmap_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_intentsolutionmap_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_intentsolutionmap_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_intentsolutionmap` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_intentsolutionmap` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_intentsolutionmap` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_intentsolutionmap` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_intentsolutionmap_intentfamilyid_msdyn_intentfamily` | [msdyn_intentfamily](msdyn_intentfamily.md) | `msdyn_intentfamilyid` | `msdyn_intentfamilyid` |
| `msdyn_intentsolutionmap_agentgroupid_msdyn_agentgroup` | [msdyn_agentgroup](msdyn_agentgroup.md) | `msdyn_agentgroupid` | `msdyn_agentgroupid` |
| `msdyn_intentsolutionmap_knowledgearticleid_knowledgearticle` | [knowledgearticle](knowledgearticle.md) | `msdyn_rootknowledgearticleid` | `msdyn_rootknowledgearticleid` |
| `msdyn_intentsolutionmap_solutionmapid_msdyn_organizationsolutionmap` | [msdyn_organizationsolutionmap](msdyn_organizationsolutionmap.md) | `msdyn_solutionmapid` | `msdyn_solutionmapid` |
| `msdyn_intentsolutionmap_queueid_queue` | [queue](queue.md) | `msdyn_queueid` | `msdyn_queueid` |
| `msdyn_intentsolutionmap_intentid_msdyn_intent` | [msdyn_intent](msdyn_intent.md) | `msdyn_intentid` | `msdyn_intentid` |
| `msdyn_intentgroupconditionid_msdyn_intentsolutionmap_msdyn_intentgroupcondition` | [msdyn_intentgroupcondition](msdyn_intentgroupcondition.md) | `msdyn_intentgroupconditionid` | `msdyn_intentgroupconditionid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_intentsolutionmap_SyncErrors` | [msdyn_intentsolutionmap](msdyn_intentsolutionmap.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentsolutionmap` |
| `msdyn_intentsolutionmap_DuplicateMatchingRecord` | [msdyn_intentsolutionmap](msdyn_intentsolutionmap.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_intentsolutionmap` |
| `msdyn_intentsolutionmap_DuplicateBaseRecord` | [msdyn_intentsolutionmap](msdyn_intentsolutionmap.md) | `baserecordid` | `baserecordid_msdyn_intentsolutionmap` |
| `msdyn_intentsolutionmap_AsyncOperations` | [msdyn_intentsolutionmap](msdyn_intentsolutionmap.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentsolutionmap` |
| `msdyn_intentsolutionmap_MailboxTrackingFolders` | [msdyn_intentsolutionmap](msdyn_intentsolutionmap.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentsolutionmap` |
| `msdyn_intentsolutionmap_UserEntityInstanceDatas` | [msdyn_intentsolutionmap](msdyn_intentsolutionmap.md) | `objectid` | `objectid_msdyn_intentsolutionmap` |
| `msdyn_intentsolutionmap_ProcessSession` | [msdyn_intentsolutionmap](msdyn_intentsolutionmap.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentsolutionmap` |
| `msdyn_intentsolutionmap_BulkDeleteFailures` | [msdyn_intentsolutionmap](msdyn_intentsolutionmap.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentsolutionmap` |
| `msdyn_intentsolutionmap_PrincipalObjectAttributeAccesses` | [msdyn_intentsolutionmap](msdyn_intentsolutionmap.md) | `objectid` | `objectid_msdyn_intentsolutionmap` |


## Source

Generated from [msdyn_intentsolutionmap (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_intentsolutionmap')) on 2026-05-07.