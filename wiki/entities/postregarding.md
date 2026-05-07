---
logical: "postregarding"
display: "Post Regarding"
entitySetName: "postregardings"
primaryId: "postregardingid"
tableType: "Standard"
ownership: "None"
---

# Post Regarding

Represents which object an activity feed post is regarding. For internal use only.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `postregarding` |
| Display name | Post Regarding |
| Display (plural) | Post Regarding |
| Schema name | `PostRegarding` |
| Entity set (Web API) | `postregardings` |
| Primary id attribute | `postregardingid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/postregardings?$select=&$top=10
GET /api/data/v9.2/postregardings(<guid>)
POST /api/data/v9.2/postregardings
PATCH /api/data/v9.2/postregardings(<guid>)
DELETE /api/data/v9.2/postregardings(<guid>)
```

## Attributes

Writable: **5** · Read-only: **4**

### Writable

`PostRegardingId`, `RegardingObjectId`, `RegardingObjectOwnerId`, `RegardingObjectOwnerIdType`, `RegardingObjectTypeCode`

### Read-only

`LatestAutoPostModifiedOn`, `LatestManualPostModifiedOn`, `RegardingObjectOwningBusinessUnit`, `RegardingObjectTypeCodeForSharing`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `account_PostRegardings` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account` |
| `appointment_PostRegardings` | [appointment](appointment.md) | `regardingobjectid` | `regardingobjectid_appointment` |
| `business_unit_PostRegarding` | [businessunit](businessunit.md) | `regardingobjectowningbusinessunit` | `regardingobjectowningbusinessunit` |
| `contact_PostRegardings` | [contact](contact.md) | `regardingobjectid` | `regardingobjectid_contact` |
| `knowledgearticle_PostRegardings` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `regardingobjectid_knowledgearticle` |
| `phonecall_PostRegardings` | [phonecall](phonecall.md) | `regardingobjectid` | `regardingobjectid_phonecall` |
| `processsession_PostRegardings` | [processsession](processsession.md) | `regardingobjectid` | `regardingobjectid_processsession` |
| `queue_PostRegardings` | [queue](queue.md) | `regardingobjectid` | `regardingobjectid_queue` |
| `recurringappointmentmaster_PostRegardings` | [recurringappointmentmaster](recurringappointmentmaster.md) | `regardingobjectid` | `regardingobjectid_recurringappointmentmaster` |
| `systemuser_PostRegardings` | [systemuser](systemuser.md) | `regardingobjectid` | `regardingobjectid_systemuser` |
| `task_PostRegardings` | [task](task.md) | `regardingobjectid` | `regardingobjectid_task` |
| `team_PostRegardings` | [team](team.md) | `regardingobjectid` | `regardingobjectid_team` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `post_PostRegardings` | _n/a_ | `postregardingid` | _n/a_ |


## Source

Generated from [postregarding.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/postregarding.md) on 2026-05-06.