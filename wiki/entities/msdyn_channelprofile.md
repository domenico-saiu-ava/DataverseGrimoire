---
logical: "msdyn_channelprofile"
display: "Channel Profile"
entitySetName: "msdyn_channelprofiles"
primaryId: "msdyn_channelprofileid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Channel Profile

Channel profile configuration for omnichannel

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_channelprofile` |
| Display name | Channel Profile |
| Display (plural) | Channel Profiles |
| Schema name | `msdyn_channelprofile` |
| Entity set (Web API) | `msdyn_channelprofiles` |
| Primary id attribute | `msdyn_channelprofileid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_channelprofiles?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_channelprofiles(<guid>)
POST /api/data/v9.2/msdyn_channelprofiles
PATCH /api/data/v9.2/msdyn_channelprofiles(<guid>)
DELETE /api/data/v9.2/msdyn_channelprofiles(<guid>)
```

## Attributes

Writable: **13** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_channelprofileId`, `msdyn_conversationmode`, `msdyn_name`, `msdyn_streamsource`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_channelprofile` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_channelprofile_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_channelprofile_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_channelprofile_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_channelprofile_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_channelprofile` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_channelprofile` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_channelprofile` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_channelprofile_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_channelprofile_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_channelprofile_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_channelprofile_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_channelprofile_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_channelprofile_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_channelprofile_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_channelprofile_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsession_msdyn_channelprofileid_msdyn_channelprofile` | _n/a_ | `msdyn_channelprofileid` | _n/a_ |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_channelprofile_msdyn_ocautomatedactionrule` | [msdyn_channelprofileid](msdyn_channelprofileid.md) | _n/a_ | _n/a_ |
| `msdyn_msdyn_channelprofile_msdyn_ocsystemmessage` | [msdyn_channelprofileid](msdyn_channelprofileid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_channelprofile.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_channelprofile.md) on 2026-05-06.