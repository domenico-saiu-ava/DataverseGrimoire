---
logical: "msdyn_conversationrecord"
display: "Conversation Record"
entitySetName: "msdyn_conversationrecords"
primaryId: "msdyn_conversationrecordid"
primaryName: "msdyn_conversationid"
tableType: "Elastic"
ownership: "UserOwned"
---

# Conversation Record

Stores complete conversation transcripts for chat and voice channels, along with rich contextual metadata. This includes customer sentiment analysis, escalation status (e.g., whether the conversation was handed off to a human agent), customer wait times, channel type, associated workstream details, and conversational attributes

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_conversationrecord` |
| Display name | Conversation Record |
| Display (plural) | Conversation Records |
| Schema name | `msdyn_conversationrecord` |
| Entity set (Web API) | `msdyn_conversationrecords` |
| Primary id attribute | `msdyn_conversationrecordid` |
| Primary name attribute | `msdyn_conversationid` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_conversationrecords?$select=msdyn_conversationid&$top=10
GET /api/data/v9.2/msdyn_conversationrecords(<guid>)
POST /api/data/v9.2/msdyn_conversationrecords
PATCH /api/data/v9.2/msdyn_conversationrecords(<guid>)
DELETE /api/data/v9.2/msdyn_conversationrecords(<guid>)
```

## Attributes

Writable: **21** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_channelinstanceId`, `msdyn_channeltype`, `msdyn_conversationclosedon`, `msdyn_conversationcreatedon`, `msdyn_conversationid`, `msdyn_conversationrecordId`, `msdyn_conversationstate`, `msdyn_conversationtitle`, `msdyn_conversationtranscript`, `msdyn_customerfirstwaittime`, `msdyn_customerid`, `msdyn_customerlocale`, `msdyn_customersentiment`, `msdyn_isescalatedtocustomerservicerepresentative`, `msdyn_workstream`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PartitionId`, `TTLInSeconds`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_conversationrecord` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_conversationrecord_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationrecord_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationrecord_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationrecord_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_conversationrecord` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_conversationrecord` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_conversationrecord` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |



## Source

Generated from [msdyn_conversationrecord.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_conversationrecord.md) on 2026-05-06.