---
logical: "activityparty"
display: "Activity Party"
entitySetName: "activityparties"
primaryId: "activitypartyid"
primaryName: "partyidname"
tableType: "Standard"
ownership: "None"
---

# Activity Party

Person or group associated with an activity. An activity can have multiple activity parties.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `activityparty` |
| Display name | Activity Party |
| Display (plural) | Activity Parties |
| Schema name | `ActivityParty` |
| Entity set (Web API) | `activityparties` |
| Primary id attribute | `activitypartyid` |
| Primary name attribute | `partyidname` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/activityparties?$select=partyidname&$top=10
GET /api/data/v9.2/activityparties(<guid>)
POST /api/data/v9.2/activityparties
PATCH /api/data/v9.2/activityparties(<guid>)
DELETE /api/data/v9.2/activityparties(<guid>)
```

## Attributes

Writable: **11** · Read-only: **14**

### Writable

`ActivityId`, `ActivityPartyId`, `AddressUsed`, `Effort`, `ExchangeEntryId`, `ExternalId`, `ExternalIdType`, `ParticipationTypeMask`, `PartyId`, `PartyObjectTypeCode`, `UnresolvedPartyName`

### Read-only

`AddressUsedEmailColumnNumber`, `DoNotEmail`, `DoNotFax`, `DoNotPhone`, `DoNotPostalMail`, `InstanceTypeCode`, `IsPartyDeleted`, `OwnerId`, `OwnerIdType`, `OwningBusinessUnit`, `OwningUser`, `ScheduledEnd`, `ScheduledStart`, `VersionNumber`

## Relationships

### Many-to-One (17)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `account_activity_parties` | [account](account.md) | `partyid` | `partyid_account` |
| `activitypointer_activity_parties` | [activitypointer](activitypointer.md) | `activityid` | `activityid_activitypointer` |
| `adx_inviteredemption_activity_parties` | [adx_inviteredemption](adx_inviteredemption.md) | `activityid` | `activityid_adx_inviteredemption_activityparty` |
| `adx_portalcomment_activity_parties` | [adx_portalcomment](adx_portalcomment.md) | `activityid` | `activityid_adx_portalcomment_activityparty` |
| `appointment_activity_parties` | [appointment](appointment.md) | `activityid` | `activityid_appointment` |
| `chat_activity_parties` | [chat](chat.md) | `activityid` | `activityid_chat_activityparty` |
| `contact_activity_parties` | [contact](contact.md) | `partyid` | `partyid_contact` |
| `email_activity_parties` | [email](email.md) | `activityid` | `activityid_email` |
| `fax_activity_parties` | [fax](fax.md) | `activityid` | `activityid_fax` |
| `knowledgearticle_activity_parties` | [knowledgearticle](knowledgearticle.md) | `partyid` | `partyid_knowledgearticle` |
| `letter_activity_parties` | [letter](letter.md) | `activityid` | `activityid_letter` |
| `phonecall_activity_parties` | [phonecall](phonecall.md) | `activityid` | `activityid_phonecall` |
| `queue_activity_parties` | [queue](queue.md) | `partyid` | `partyid_queue` |
| `recurringappointmentmaster_activity_parties` | [recurringappointmentmaster](recurringappointmentmaster.md) | `activityid` | `activityid_recurringappointmentmaster` |
| `socialactivity_activity_parties` | [socialactivity](socialactivity.md) | `activityid` | `activityid_socialactivity` |
| `system_user_activity_parties` | [systemuser](systemuser.md) | `partyid` | `partyid_systemuser` |
| `task_activity_parties` | [task](task.md) | `activityid` | `activityid_task` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ActivityParty_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [activityparty.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/activityparty.md) on 2026-05-06.