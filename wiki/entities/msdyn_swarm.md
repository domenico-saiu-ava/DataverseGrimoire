---
logical: "msdyn_swarm"
display: "Swarm"
entitySetName: "msdyn_swarms"
primaryId: "msdyn_swarmid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Swarm

Tracks the list of swarms created by agents to resolve the customer issues

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_swarm` |
| Display name | Swarm |
| Display (plural) | Swarms |
| Schema name | `msdyn_swarm` |
| Entity set (Web API) | `msdyn_swarms` |
| Primary id attribute | `msdyn_swarmid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_swarms?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_swarms(<guid>)
POST /api/data/v9.2/msdyn_swarms
PATCH /api/data/v9.2/msdyn_swarms(<guid>)
DELETE /api/data/v9.2/msdyn_swarms(<guid>)
```

## Attributes

Writable: **18** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_description`, `msdyn_name`, `msdyn_resolution`, `msdyn_skillsmodifiedon`, `msdyn_swarmId`, `msdyn_swarmrelatedrecordid`, `msdyn_swarmrelatedrecordidIdType`, `msdyn_swarmtemplateid`, `msdyn_teamsconversationid`, `msdyn_title`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_swarm` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_swarm_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_swarm_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_swarm_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_swarm_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_swarmtemplate_msdyn_swarm_swarmtemplateid` | [msdyn_swarmtemplate](msdyn_swarmtemplate.md) | `msdyn_swarmtemplateid` | `msdyn_swarmtemplateid` |
| `msdyn_swarm_account` | [account](account.md) | `msdyn_swarmrelatedrecordid` | `msdyn_swarmrelatedrecordid_account` |
| `msdyn_swarm_incident` | [incident](incident.md) | `msdyn_swarmrelatedrecordid` | `msdyn_swarmrelatedrecordid_incident` |
| `owner_msdyn_swarm` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_swarm` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_swarm` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (33)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_swarm_msdyn_swarmparticipant_swarmid` | _n/a_ | `msdyn_swarmid` | _n/a_ |
| `msdyn_msdyn_swarm_msdyn_swarmskill_swarmid` | _n/a_ | `msdyn_swarmid` | _n/a_ |
| `msdyn_swarm_ActivityPointers` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarm_adx_inviteredemptions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarm_adx_portalcomments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarm_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_swarm_Appointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarm_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarm_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarm_chats` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarm_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_swarm_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_swarm_Emails` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarm_Faxes` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarm_Letters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarm_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarm_msdyn_copilottranscripts` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarm_msdyn_ocliveworkitems` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarm_msdyn_ocsessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarm_msfp_alerts` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarm_msfp_surveyinvites` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarm_msfp_surveyresponses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarm_PhoneCalls` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarm_PostFollows` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarm_PostRegardings` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarm_Posts` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarm_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_swarm_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarm_RecurringAppointmentMasters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarm_ServiceAppointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarm_SocialActivities` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarm_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarm_Tasks` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_swarm.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_swarm.md) on 2026-05-06.