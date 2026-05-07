---
logical: "msdyncrm_video"
display: "Video"
entitySetName: "msdyncrm_videos"
primaryId: "msdyncrm_videoid"
primaryName: "msdyncrm_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Video

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyncrm_video` |
| Display name | Video |
| Display (plural) | Video |
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

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyncrm_name`, `msdyncrm_videoembedcode`, `msdyncrm_videoid`, `msdyncrm_videothumbnailurl`, `msdyncrm_videourl`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyncrm_video_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyncrm_video_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyncrm_video_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyncrm_video_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyncrm_video` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyncrm_video` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyncrm_video` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyncrm_video` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyncrm_video_DuplicateMatchingRecord` | [msdyncrm_video](msdyncrm_video.md) | `duplicaterecordid` | `duplicaterecordid_msdyncrm_video` |
| `msdyncrm_video_DuplicateBaseRecord` | [msdyncrm_video](msdyncrm_video.md) | `baserecordid` | `baserecordid_msdyncrm_video` |
| `msdyncrm_video_SyncErrors` | [msdyncrm_video](msdyncrm_video.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_video` |
| `msdyncrm_video_AsyncOperations` | [msdyncrm_video](msdyncrm_video.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_video` |
| `msdyncrm_video_MailboxTrackingFolders` | [msdyncrm_video](msdyncrm_video.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_video` |
| `msdyncrm_video_UserEntityInstanceDatas` | [msdyncrm_video](msdyncrm_video.md) | `objectid` | `objectid_msdyncrm_video` |
| `msdyncrm_video_ProcessSession` | [msdyncrm_video](msdyncrm_video.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_video` |
| `msdyncrm_video_BulkDeleteFailures` | [msdyncrm_video](msdyncrm_video.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_video` |
| `msdyncrm_video_PrincipalObjectAttributeAccesses` | [msdyncrm_video](msdyncrm_video.md) | `objectid` | `objectid_msdyncrm_video` |


## Source

Generated from [msdyncrm_video (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyncrm_video')) on 2026-05-07.