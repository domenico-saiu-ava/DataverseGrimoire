---
logical: "msdyncrm_video"
display: "Video"
entitySetName: "msdyncrm_videos"
primaryId: "msdyncrm_videoid"
primaryName: "msdyncrm_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Video

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyncrm_video` |
| Display name | Video |
| Display (plural) | Videos |
| Schema name | `msdyncrm_video` |
| Entity set (Web API) | `msdyncrm_videos` |
| Primary id attribute | `msdyncrm_videoid` |
| Primary name attribute | `msdyncrm_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyncrm_videos?$select=msdyncrm_name&$top=10
GET /api/data/v9.2/msdyncrm_videos(<guid>)
POST /api/data/v9.2/msdyncrm_videos
PATCH /api/data/v9.2/msdyncrm_videos(<guid>)
DELETE /api/data/v9.2/msdyncrm_videos(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyncrm_name`, `msdyncrm_videoembedcode`, `msdyncrm_videoId`, `msdyncrm_videothumbnailurl`, `msdyncrm_videourl`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyncrm_video` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyncrm_video_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyncrm_video_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyncrm_video_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyncrm_video_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyncrm_video` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyncrm_video` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyncrm_video` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyncrm_video_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_video_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_video_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyncrm_video_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyncrm_video_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_video_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyncrm_video_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_video_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyncrm_video.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyncrm_video.md) on 2026-05-06.