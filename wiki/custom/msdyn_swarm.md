---
logical: "msdyn_swarm"
display: "Aggregato"
entitySetName: "msdyn_swarms"
primaryId: "msdyn_swarmid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Aggregato

Tiene traccia dell'elenco di aggregati creati dagli agenti per risolvere i problemi del cliente

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_swarm` |
| Display name | Aggregato |
| Display (plural) | Aggregati |
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

Writable: **16** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_description`, `msdyn_name`, `msdyn_resolution`, `msdyn_skillsmodifiedon`, `msdyn_swarmid`, `msdyn_swarmrelatedrecordid`, `msdyn_swarmtemplateid`, `msdyn_teamsconversationid`, `msdyn_title`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_swarm_incident` | [incident](incident.md) | `msdyn_swarmrelatedrecordid` | `msdyn_swarmrelatedrecordid_incident` |
| `lk_msdyn_swarm_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_swarm_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_swarm_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_swarm_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_swarm` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_swarm` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_swarm` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_swarm` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_swarmtemplate_msdyn_swarm_swarmtemplateid` | [msdyn_swarmtemplate](msdyn_swarmtemplate.md) | `msdyn_swarmtemplateid` | `msdyn_swarmtemplateid` |
| `msdyn_swarm_account` | [account](account.md) | `msdyn_swarmrelatedrecordid` | `msdyn_swarmrelatedrecordid_account` |

### One-to-Many (37)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_swarm_msdyn_bookingalerts` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm_msdyn_bookingalert` |
| `msdyn_swarm_PostRegardings` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm` |
| `msdyn_swarm_PostFollows` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm` |
| `msdyn_swarm_PostRoles` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm` |
| `msdyn_swarm_Posts` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm` |
| `msdyn_swarm_msdyn_copilottranscripts` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm_msdyn_copilottranscript` |
| `msdyn_swarm_msdyn_ocliveworkitems` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm_msdyn_ocliveworkitem` |
| `msdyn_swarm_msdyn_ocsessions` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm_msdyn_ocsession` |
| `msdyn_swarm_cai_genericcontacts` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm_cai_genericcontact` |
| `msdyn_swarm_ActivityPointers` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm` |
| `msdyn_swarm_msfp_alerts` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm_msfp_alert` |
| `msdyn_swarm_adx_inviteredemptions` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm_adx_inviteredemption` |
| `msdyn_swarm_msfp_surveyinvites` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm_msfp_surveyinvite` |
| `msdyn_swarm_msfp_surveyresponses` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm_msfp_surveyresponse` |
| `msdyn_swarm_adx_portalcomments` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm_adx_portalcomment` |
| `msdyn_swarm_chats` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm_chat` |
| `msdyn_swarm_SyncErrors` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm` |
| `msdyn_swarm_DuplicateMatchingRecord` | [msdyn_swarm](msdyn_swarm.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_swarm` |
| `msdyn_swarm_DuplicateBaseRecord` | [msdyn_swarm](msdyn_swarm.md) | `baserecordid` | `baserecordid_msdyn_swarm` |
| `msdyn_swarm_AsyncOperations` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm` |
| `msdyn_swarm_MailboxTrackingFolders` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm` |
| `msdyn_swarm_UserEntityInstanceDatas` | [msdyn_swarm](msdyn_swarm.md) | `objectid` | `objectid_msdyn_swarm` |
| `msdyn_swarm_ProcessSession` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm` |
| `msdyn_swarm_BulkDeleteFailures` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm` |
| `msdyn_swarm_PrincipalObjectAttributeAccesses` | [msdyn_swarm](msdyn_swarm.md) | `objectid` | `objectid_msdyn_swarm` |
| `msdyn_swarm_Appointments` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm_appointment` |
| `msdyn_swarm_Emails` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm_email` |
| `msdyn_swarm_Faxes` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm_fax` |
| `msdyn_swarm_Letters` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm_letter` |
| `msdyn_swarm_PhoneCalls` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm_phonecall` |
| `msdyn_swarm_Tasks` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm_task` |
| `msdyn_swarm_RecurringAppointmentMasters` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm_recurringappointmentmaster` |
| `msdyn_swarm_SocialActivities` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm_socialactivity` |
| `msdyn_swarm_Annotations` | [msdyn_swarm](msdyn_swarm.md) | `objectid` | `objectid_msdyn_swarm` |
| `msdyn_swarm_ServiceAppointments` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm_serviceappointment` |
| `msdyn_msdyn_swarm_msdyn_swarmparticipant_swarmid` | [msdyn_swarm](msdyn_swarm.md) | `msdyn_swarmid` | `msdyn_swarmid` |
| `msdyn_msdyn_swarm_msdyn_swarmskill_swarmid` | [msdyn_swarm](msdyn_swarm.md) | `msdyn_swarmid` | `msdyn_swarmid` |


## Source

Generated from [msdyn_swarm (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_swarm')) on 2026-05-07.