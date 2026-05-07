---
logical: "msdyn_segment"
display: "Segmento"
entitySetName: "msdyn_segments"
primaryId: "msdyn_segmentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Segmento

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_segment` |
| Display name | Segmento |
| Display (plural) | Segmenti |
| Schema name | `msdyn_segment` |
| Entity set (Web API) | `msdyn_segments` |
| Primary id attribute | `msdyn_segmentid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_segments?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_segments(<guid>)
POST /api/data/v9.2/msdyn_segments
PATCH /api/data/v9.2/msdyn_segments(<guid>)
DELETE /api/data/v9.2/msdyn_segments(<guid>)
```

## Attributes

Writable: **20** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_description`, `msdyn_entityfieldname`, `msdyn_entityfilter`, `msdyn_evaluateindataverse`, `msdyn_isresegmentationenabled`, `msdyn_isroutingenabledforresegmentation`, `msdyn_name`, `msdyn_objecttype`, `msdyn_objecttypecode`, `msdyn_segmentid`, `msdyn_segmenttype`, `msdyn_sequence`, `msdyn_triggertype`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_segment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_segment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_segment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_segment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_segment` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_segment` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_segment` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_segment` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_sequence_msdyn_segment_Sequence` | [msdyn_sequence](msdyn_sequence.md) | `msdyn_sequence` | `msdyn_Sequence` |

### One-to-Many (18)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_segment_account` | [msdyn_segment](msdyn_segment.md) | `msdyn_segmentid` | `msdyn_segmentid` |
| `msdyn_msdyn_segment_contact` | [msdyn_segment](msdyn_segment.md) | `msdyn_segmentid` | `msdyn_segmentid` |
| `msdyn_segment_SyncErrors` | [msdyn_segment](msdyn_segment.md) | `regardingobjectid` | `regardingobjectid_msdyn_segment` |
| `msdyn_segment_DuplicateMatchingRecord` | [msdyn_segment](msdyn_segment.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_segment` |
| `msdyn_segment_DuplicateBaseRecord` | [msdyn_segment](msdyn_segment.md) | `baserecordid` | `baserecordid_msdyn_segment` |
| `msdyn_segment_AsyncOperations` | [msdyn_segment](msdyn_segment.md) | `regardingobjectid` | `regardingobjectid_msdyn_segment` |
| `msdyn_segment_MailboxTrackingFolders` | [msdyn_segment](msdyn_segment.md) | `regardingobjectid` | `regardingobjectid_msdyn_segment` |
| `msdyn_segment_UserEntityInstanceDatas` | [msdyn_segment](msdyn_segment.md) | `objectid` | `objectid_msdyn_segment` |
| `msdyn_segment_ProcessSession` | [msdyn_segment](msdyn_segment.md) | `regardingobjectid` | `regardingobjectid_msdyn_segment` |
| `msdyn_segment_BulkDeleteFailures` | [msdyn_segment](msdyn_segment.md) | `regardingobjectid` | `regardingobjectid_msdyn_segment` |
| `msdyn_segment_PrincipalObjectAttributeAccesses` | [msdyn_segment](msdyn_segment.md) | `objectid` | `objectid_msdyn_segment` |
| `msdyn_msdyn_segment_lead` | [msdyn_segment](msdyn_segment.md) | `msdyn_segmentid` | `msdyn_segmentid` |
| `msdyn_msdyn_segment_opportunity` | [msdyn_segment](msdyn_segment.md) | `msdyn_segmentid` | `msdyn_segmentid` |
| `msdyn_segment_msdyn_sequencetarget` | [msdyn_segment](msdyn_segment.md) | `msdyn_segment` | `msdyn_segment` |
| `msdyn_msdyn_segment_msdyn_saruninstance` | [msdyn_segment](msdyn_segment.md) | `msdyn_segmentid` | `msdyn_SegmentId` |
| `msdyn_msdyn_segment_msdyn_assignmentrule_segment` | [msdyn_segment](msdyn_segment.md) | `msdyn_segmentid` | `msdyn_segmentid` |
| `msdyn_msdyn_segment_msdyn_salesroutingrun_segment` | [msdyn_segment](msdyn_segment.md) | `msdyn_segmentid` | `msdyn_segmentid` |
| `msdyn_msdyn_segment_msdyn_salesroutingrun_previoussegmentid` | [msdyn_segment](msdyn_segment.md) | `msdyn_previoussegmentid` | `msdyn_previoussegmentid` |


## Source

Generated from [msdyn_segment (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_segment')) on 2026-05-07.