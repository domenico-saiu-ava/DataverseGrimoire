---
logical: "msdyn_intentsolutionmap"
display: "Intent Solution Map"
entitySetName: "msdyn_intentsolutionmaps"
primaryId: "msdyn_intentsolutionmapid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Intent Solution Map

Captures Solutions for Intent Groups

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_intentsolutionmap` |
| Display name | Intent Solution Map |
| Display (plural) | Intent Solution Maps |
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

Writable: **23** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_agentgroupid`, `msdyn_intentfamilyid`, `msdyn_intentgroupconditionid`, `msdyn_intentid`, `msdyn_intentsolutionmapId`, `msdyn_Name`, `msdyn_order`, `msdyn_queueid`, `msdyn_reviewstate`, `msdyn_rootknowledgearticleid`, `msdyn_solutionmapid`, `msdyn_solutionmetadata`, `msdyn_solutiontype`, `msdyn_source`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (15)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_intentsolutionmap` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_intentsolutionmap_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_intentsolutionmap_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_intentsolutionmap_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_intentsolutionmap_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_intentgroupconditionid_msdyn_intentsolutionmap_msdyn_intentgroupcondition` | [msdyn_intentgroupcondition](msdyn_intentgroupcondition.md) | `msdyn_intentgroupconditionid` | `msdyn_intentgroupconditionid` |
| `msdyn_intentsolutionmap_agentgroupid_msdyn_agentgroup` | [msdyn_agentgroup](msdyn_agentgroup.md) | `msdyn_agentgroupid` | `msdyn_agentgroupid` |
| `msdyn_intentsolutionmap_intentfamilyid_msdyn_intentfamily` | [msdyn_intentfamily](msdyn_intentfamily.md) | `msdyn_intentfamilyid` | `msdyn_intentfamilyid` |
| `msdyn_intentsolutionmap_intentid_msdyn_intent` | [msdyn_intent](msdyn_intent.md) | `msdyn_intentid` | `msdyn_intentid` |
| `msdyn_intentsolutionmap_knowledgearticleid_knowledgearticle` | [knowledgearticle](knowledgearticle.md) | `msdyn_rootknowledgearticleid` | `msdyn_rootknowledgearticleid` |
| `msdyn_intentsolutionmap_queueid_queue` | [queue](queue.md) | `msdyn_queueid` | `msdyn_queueid` |
| `msdyn_intentsolutionmap_solutionmapid_msdyn_organizationsolutionmap` | [msdyn_organizationsolutionmap](msdyn_organizationsolutionmap.md) | `msdyn_solutionmapid` | `msdyn_solutionmapid` |
| `owner_msdyn_intentsolutionmap` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_intentsolutionmap` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_intentsolutionmap` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_intentsolutionmap_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentsolutionmap_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentsolutionmap_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_intentsolutionmap_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_intentsolutionmap_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentsolutionmap_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_intentsolutionmap_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentsolutionmap_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_intentsolutionmap.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_intentsolutionmap.md) on 2026-05-06.