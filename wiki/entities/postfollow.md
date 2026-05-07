---
logical: "postfollow"
display: "Follow"
entitySetName: "postfollows"
primaryId: "postfollowid"
primaryName: "regardingobjectidname"
tableType: "Standard"
ownership: "UserOwned"
---

# Follow

Represents a user following the activity feed of an object.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `postfollow` |
| Display name | Follow |
| Display (plural) | Follows |
| Schema name | `PostFollow` |
| Entity set (Web API) | `postfollows` |
| Primary id attribute | `postfollowid` |
| Primary name attribute | `regardingobjectidname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/postfollows?$select=regardingobjectidname&$top=10
GET /api/data/v9.2/postfollows(<guid>)
POST /api/data/v9.2/postfollows
PATCH /api/data/v9.2/postfollows(<guid>)
DELETE /api/data/v9.2/postfollows(<guid>)
```

## Attributes

Writable: **7** · Read-only: **12**

### Writable

`OwnerId`, `OwnerIdType`, `PostFollowId`, `RegardingObjectId`, `RegardingObjectTypeCode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `PostToYammer`, `VersionNumber`, `YammerPostState`, `YammerRetryCount`

## Relationships

### Many-to-One (16)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `account_PostFollows` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account` |
| `appointment_PostFollows` | [appointment](appointment.md) | `regardingobjectid` | `regardingobjectid_appointment` |
| `business_unit_postfollows` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `contact_PostFollows` | [contact](contact.md) | `regardingobjectid` | `regardingobjectid_contact` |
| `knowledgearticle_PostFollows` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `regardingobjectid_knowledgearticle` |
| `lk_PostFollow_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_postfollow_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `owner_postfollows` | [owner](owner.md) | `ownerid` | `ownerid` |
| `OwningTeam_postfollows` | [team](team.md) | `owningteam` | `owningteam` |
| `phonecall_PostFollows` | [phonecall](phonecall.md) | `regardingobjectid` | `regardingobjectid_phonecall` |
| `processsession_PostFollows` | [processsession](processsession.md) | `regardingobjectid` | `regardingobjectid_processsession` |
| `queue_PostFollows` | [queue](queue.md) | `regardingobjectid` | `regardingobjectid_queue` |
| `recurringappointmentmaster_PostFollows` | [recurringappointmentmaster](recurringappointmentmaster.md) | `regardingobjectid` | `regardingobjectid_recurringappointmentmaster` |
| `systemuser_PostFollows` | [systemuser](systemuser.md) | `regardingobjectid` | `regardingobjectid_systemuser` |
| `task_PostFollows` | [task](task.md) | `regardingobjectid` | `regardingobjectid_task` |
| `user_owner_postfollows` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `PostFollow_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `PostFollow_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [postfollow.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/postfollow.md) on 2026-05-06.