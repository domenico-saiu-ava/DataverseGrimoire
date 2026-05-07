---
logical: "msdyn_botsession"
display: "Bot Session"
entitySetName: "msdyn_botsessions"
primaryId: "msdyn_botsessionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Bot Session

Bot specific sessions

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_botsession` |
| Display name | Bot Session |
| Display (plural) | Bot Sessions |
| Schema name | `msdyn_botsession` |
| Entity set (Web API) | `msdyn_botsessions` |
| Primary id attribute | `msdyn_botsessionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_botsessions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_botsessions(<guid>)
POST /api/data/v9.2/msdyn_botsessions
PATCH /api/data/v9.2/msdyn_botsessions(<guid>)
DELETE /api/data/v9.2/msdyn_botsessions(<guid>)
```

## Attributes

Writable: **25** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_botid`, `msdyn_botsessionId`, `msdyn_convtranscriptid`, `msdyn_csatscore`, `msdyn_endedon`, `msdyn_isengaged`, `msdyn_lastsessionoutcome`, `msdyn_lastsessionoutcomereason`, `msdyn_mcsbotsessionid`, `msdyn_Name`, `msdyn_outcome`, `msdyn_outcomereason`, `msdyn_sessionid`, `msdyn_sourcesessionid`, `msdyn_startedon`, `msdyn_topicid`, `msdyn_topicname`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_botsession` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_botsession_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_botsession_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_botsession_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_botsession_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_botsession_botid_bot` | [bot](bot.md) | `msdyn_botid` | `msdyn_botid` |
| `msdyn_msdyn_botsession_sessionid_msdyn_oc` | [msdyn_ocsession](msdyn_ocsession.md) | `msdyn_sessionid` | `msdyn_sessionid` |
| `owner_msdyn_botsession` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_botsession` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_botsession` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_botsession_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_botsession_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_botsession_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_botsession_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_botsession_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_botsession_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_botsession_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_botsession_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_botsession.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_botsession.md) on 2026-05-06.