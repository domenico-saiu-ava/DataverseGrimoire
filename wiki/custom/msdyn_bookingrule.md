---
logical: "msdyn_bookingrule"
display: "Regola di prenotazione"
entitySetName: "msdyn_bookingrules"
primaryId: "msdyn_bookingruleid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Regola di prenotazione

Specifica le regole personalizzate che il sistema deve convalidare prima di salvare un record prenotazione.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_bookingrule` |
| Display name | Regola di prenotazione |
| Display (plural) | Regole di prenotazione |
| Schema name | `msdyn_bookingrule` |
| Entity set (Web API) | `msdyn_bookingrules` |
| Primary id attribute | `msdyn_bookingruleid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_bookingrules?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_bookingrules(<guid>)
POST /api/data/v9.2/msdyn_bookingrules
PATCH /api/data/v9.2/msdyn_bookingrules(<guid>)
DELETE /api/data/v9.2/msdyn_bookingrules(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_bookingruleid`, `msdyn_codeofrule`, `msdyn_methodname`, `msdyn_name`, `msdyn_webresource`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_bookingrule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_bookingrule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_bookingrule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_bookingrule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_bookingrule` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_bookingrule` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_bookingrule` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_bookingrule` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (33)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_bookingrule_ActivityPointers` | [msdyn_bookingrule](msdyn_bookingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingrule` |
| `msdyn_bookingrule_msfp_alerts` | [msdyn_bookingrule](msdyn_bookingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingrule_msfp_alert` |
| `msdyn_bookingrule_adx_inviteredemptions` | [msdyn_bookingrule](msdyn_bookingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingrule_adx_inviteredemption` |
| `msdyn_bookingrule_msdyn_ocsessions` | [msdyn_bookingrule](msdyn_bookingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingrule_msdyn_ocsession` |
| `msdyn_bookingrule_msfp_surveyinvites` | [msdyn_bookingrule](msdyn_bookingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingrule_msfp_surveyinvite` |
| `msdyn_bookingrule_msdyn_ocliveworkitems` | [msdyn_bookingrule](msdyn_bookingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingrule_msdyn_ocliveworkitem` |
| `msdyn_bookingrule_msdyn_bookingalerts` | [msdyn_bookingrule](msdyn_bookingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingrule_msdyn_bookingalert` |
| `msdyn_bookingrule_msfp_surveyresponses` | [msdyn_bookingrule](msdyn_bookingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingrule_msfp_surveyresponse` |
| `msdyn_bookingrule_adx_portalcomments` | [msdyn_bookingrule](msdyn_bookingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingrule_adx_portalcomment` |
| `msdyn_bookingrule_chats` | [msdyn_bookingrule](msdyn_bookingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingrule_chat` |
| `msdyn_bookingrule_msdyn_copilottranscripts` | [msdyn_bookingrule](msdyn_bookingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingrule_msdyn_copilottranscript` |
| `msdyn_bookingrule_SyncErrors` | [msdyn_bookingrule](msdyn_bookingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingrule` |
| `msdyn_bookingrule_DuplicateMatchingRecord` | [msdyn_bookingrule](msdyn_bookingrule.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_bookingrule` |
| `msdyn_bookingrule_DuplicateBaseRecord` | [msdyn_bookingrule](msdyn_bookingrule.md) | `baserecordid` | `baserecordid_msdyn_bookingrule` |
| `msdyn_bookingrule_AsyncOperations` | [msdyn_bookingrule](msdyn_bookingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingrule` |
| `msdyn_bookingrule_MailboxTrackingFolders` | [msdyn_bookingrule](msdyn_bookingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingrule` |
| `msdyn_bookingrule_UserEntityInstanceDatas` | [msdyn_bookingrule](msdyn_bookingrule.md) | `objectid` | `objectid_msdyn_bookingrule` |
| `msdyn_bookingrule_ProcessSession` | [msdyn_bookingrule](msdyn_bookingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingrule` |
| `msdyn_bookingrule_BulkDeleteFailures` | [msdyn_bookingrule](msdyn_bookingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingrule` |
| `msdyn_bookingrule_PrincipalObjectAttributeAccesses` | [msdyn_bookingrule](msdyn_bookingrule.md) | `objectid` | `objectid_msdyn_bookingrule` |
| `msdyn_bookingrule_Appointments` | [msdyn_bookingrule](msdyn_bookingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingrule_appointment` |
| `msdyn_bookingrule_Emails` | [msdyn_bookingrule](msdyn_bookingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingrule_email` |
| `msdyn_bookingrule_Faxes` | [msdyn_bookingrule](msdyn_bookingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingrule_fax` |
| `msdyn_bookingrule_Letters` | [msdyn_bookingrule](msdyn_bookingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingrule_letter` |
| `msdyn_bookingrule_PhoneCalls` | [msdyn_bookingrule](msdyn_bookingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingrule_phonecall` |
| `msdyn_bookingrule_Tasks` | [msdyn_bookingrule](msdyn_bookingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingrule_task` |
| `msdyn_bookingrule_RecurringAppointmentMasters` | [msdyn_bookingrule](msdyn_bookingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingrule_recurringappointmentmaster` |
| `msdyn_bookingrule_SocialActivities` | [msdyn_bookingrule](msdyn_bookingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingrule_socialactivity` |
| `msdyn_bookingrule_connections1` | [msdyn_bookingrule](msdyn_bookingrule.md) | `record1id` | `record1id_msdyn_bookingrule` |
| `msdyn_bookingrule_connections2` | [msdyn_bookingrule](msdyn_bookingrule.md) | `record2id` | `record2id_msdyn_bookingrule` |
| `msdyn_bookingrule_Annotations` | [msdyn_bookingrule](msdyn_bookingrule.md) | `objectid` | `objectid_msdyn_bookingrule` |
| `msdyn_bookingrule_ServiceAppointments` | [msdyn_bookingrule](msdyn_bookingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingrule_serviceappointment` |
| `msdyn_bookingrule_cai_genericcontacts` | [msdyn_bookingrule](msdyn_bookingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingrule_cai_genericcontact` |


## Source

Generated from [msdyn_bookingrule (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_bookingrule')) on 2026-05-07.