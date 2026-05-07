---
logical: "msdyn_segment"
display: "Segment"
entitySetName: "msdyn_segments"
primaryId: "msdyn_segmentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Segment

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_segment` |
| Display name | Segment |
| Display (plural) | Segments |
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

Writable: **21** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_description`, `msdyn_entityfieldname`, `msdyn_entityfilter`, `msdyn_evaluateindataverse`, `msdyn_isresegmentationenabled`, `msdyn_isroutingenabledforresegmentation`, `msdyn_name`, `msdyn_objecttype`, `msdyn_objecttypecode`, `msdyn_segmentId`, `msdyn_segmenttype`, `msdyn_sequence`, `msdyn_triggertype`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_segment` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_segment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_segment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_segment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_segment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_sequence_msdyn_segment_Sequence` | [msdyn_sequence](msdyn_sequence.md) | `msdyn_sequence` | `msdyn_Sequence` |
| `owner_msdyn_segment` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_segment` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_segment` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (17)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_segment_account` | _n/a_ | `msdyn_segmentid` | _n/a_ |
| `msdyn_msdyn_segment_contact` | _n/a_ | `msdyn_segmentid` | _n/a_ |
| `msdyn_msdyn_segment_lead` | _n/a_ | `msdyn_segmentid` | _n/a_ |
| `msdyn_msdyn_segment_msdyn_assignmentrule_segment` | _n/a_ | `msdyn_segmentid` | _n/a_ |
| `msdyn_msdyn_segment_msdyn_salesroutingrun_previoussegmentid` | _n/a_ | `msdyn_previoussegmentid` | _n/a_ |
| `msdyn_msdyn_segment_msdyn_salesroutingrun_segment` | _n/a_ | `msdyn_segmentid` | _n/a_ |
| `msdyn_msdyn_segment_msdyn_saruninstance` | _n/a_ | `msdyn_segmentid` | _n/a_ |
| `msdyn_msdyn_segment_opportunity` | _n/a_ | `msdyn_segmentid` | _n/a_ |
| `msdyn_segment_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_segment_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_segment_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_segment_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_segment_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_segment_msdyn_sequencetarget` | _n/a_ | `msdyn_segment` | _n/a_ |
| `msdyn_segment_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_segment_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_segment_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_segment.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_segment.md) on 2026-05-06.