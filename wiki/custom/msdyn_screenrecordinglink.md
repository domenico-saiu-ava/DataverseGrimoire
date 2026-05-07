---
logical: "msdyn_screenrecordinglink"
display: "ScreenRecordingLink"
entitySetName: "msdyn_screenrecordinglinks"
primaryId: "msdyn_screenrecordinglinkid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# ScreenRecordingLink

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_screenrecordinglink` |
| Display name | ScreenRecordingLink |
| Display (plural) | ScreenRecordingLinks |
| Schema name | `msdyn_ScreenRecordingLink` |
| Entity set (Web API) | `msdyn_screenrecordinglinks` |
| Primary id attribute | `msdyn_screenrecordinglinkid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_screenrecordinglinks?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_screenrecordinglinks(<guid>)
POST /api/data/v9.2/msdyn_screenrecordinglinks
PATCH /api/data/v9.2/msdyn_screenrecordinglinks(<guid>)
DELETE /api/data/v9.2/msdyn_screenrecordinglinks(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_name`, `msdyn_relatedobject`, `msdyn_screenrecording`, `msdyn_screenrecordinglinkid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_screenrecordinglink_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_screenrecordinglink_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_screenrecordinglink_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_screenrecordinglink_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_screenrecordinglink` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_screenrecordinglink` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_screenrecordinglink` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_screenrecordinglink` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_screenrecordinglink_RelatedObject_msdyn_ocliveworkitem` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_relatedobject` | `msdyn_RelatedObject` |
| `msdyn_screenrecordinglink_ScreenRecording_msdyn_screenrecording` | [msdyn_screenrecording](msdyn_screenrecording.md) | `msdyn_screenrecording` | `msdyn_ScreenRecording` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_screenrecordinglink_SyncErrors` | [msdyn_screenrecordinglink](msdyn_screenrecordinglink.md) | `regardingobjectid` | `regardingobjectid_msdyn_screenrecordinglink` |
| `msdyn_screenrecordinglink_DuplicateMatchingRecord` | [msdyn_screenrecordinglink](msdyn_screenrecordinglink.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_screenrecordinglink` |
| `msdyn_screenrecordinglink_DuplicateBaseRecord` | [msdyn_screenrecordinglink](msdyn_screenrecordinglink.md) | `baserecordid` | `baserecordid_msdyn_screenrecordinglink` |
| `msdyn_screenrecordinglink_AsyncOperations` | [msdyn_screenrecordinglink](msdyn_screenrecordinglink.md) | `regardingobjectid` | `regardingobjectid_msdyn_screenrecordinglink` |
| `msdyn_screenrecordinglink_MailboxTrackingFolders` | [msdyn_screenrecordinglink](msdyn_screenrecordinglink.md) | `regardingobjectid` | `regardingobjectid_msdyn_screenrecordinglink` |
| `msdyn_screenrecordinglink_UserEntityInstanceDatas` | [msdyn_screenrecordinglink](msdyn_screenrecordinglink.md) | `objectid` | `objectid_msdyn_screenrecordinglink` |
| `msdyn_screenrecordinglink_ProcessSession` | [msdyn_screenrecordinglink](msdyn_screenrecordinglink.md) | `regardingobjectid` | `regardingobjectid_msdyn_screenrecordinglink` |
| `msdyn_screenrecordinglink_BulkDeleteFailures` | [msdyn_screenrecordinglink](msdyn_screenrecordinglink.md) | `regardingobjectid` | `regardingobjectid_msdyn_screenrecordinglink` |
| `msdyn_screenrecordinglink_PrincipalObjectAttributeAccesses` | [msdyn_screenrecordinglink](msdyn_screenrecordinglink.md) | `objectid` | `objectid_msdyn_screenrecordinglink` |


## Source

Generated from [msdyn_screenrecordinglink (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_screenrecordinglink')) on 2026-05-07.