---
logical: "msdyn_timegroup"
display: "Preferenza evasione"
entitySetName: "msdyn_timegroups"
primaryId: "msdyn_timegroupid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Preferenza evasione

Specifica gruppi di ore consistenti in più intervalli di tempo da usare, ad esempio, per la pianificazione.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_timegroup` |
| Display name | Preferenza evasione |
| Display (plural) | Preferenze evasione |
| Schema name | `msdyn_timegroup` |
| Entity set (Web API) | `msdyn_timegroups` |
| Primary id attribute | `msdyn_timegroupid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_timegroups?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_timegroups(<guid>)
POST /api/data/v9.2/msdyn_timegroups
PATCH /api/data/v9.2/msdyn_timegroups(<guid>)
DELETE /api/data/v9.2/msdyn_timegroups(<guid>)
```

## Attributes

Writable: **18** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_displaytopxresultsinsatimegroup`, `msdyn_hidebookingtimeonsa`, `msdyn_interval`, `msdyn_intervalsbegin`, `msdyn_name`, `msdyn_resetpertimegroupdetail`, `msdyn_resultsperinterval`, `msdyn_timegroupid`, `overriddencreatedon`, `ownerid`, `processid`, `stageid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `traversedpath`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_timegroup_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_timegroup_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_timegroup_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_timegroup_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_timegroup` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_timegroup` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_timegroup` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_timegroup` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `processstage_msdyn_timegroup` | [processstage](processstage.md) | `stageid` | `stageid` |

### One-to-Many (38)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_timegroup_ActivityPointers` | [msdyn_timegroup](msdyn_timegroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroup` |
| `msdyn_timegroup_msfp_alerts` | [msdyn_timegroup](msdyn_timegroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroup_msfp_alert` |
| `msdyn_timegroup_adx_inviteredemptions` | [msdyn_timegroup](msdyn_timegroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroup_adx_inviteredemption` |
| `msdyn_timegroup_msdyn_ocsessions` | [msdyn_timegroup](msdyn_timegroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroup_msdyn_ocsession` |
| `msdyn_timegroup_msfp_surveyinvites` | [msdyn_timegroup](msdyn_timegroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroup_msfp_surveyinvite` |
| `msdyn_timegroup_msdyn_ocliveworkitems` | [msdyn_timegroup](msdyn_timegroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroup_msdyn_ocliveworkitem` |
| `msdyn_timegroup_msdyn_bookingalerts` | [msdyn_timegroup](msdyn_timegroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroup_msdyn_bookingalert` |
| `msdyn_timegroup_msfp_surveyresponses` | [msdyn_timegroup](msdyn_timegroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroup_msfp_surveyresponse` |
| `msdyn_timegroup_adx_portalcomments` | [msdyn_timegroup](msdyn_timegroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroup_adx_portalcomment` |
| `msdyn_timegroup_chats` | [msdyn_timegroup](msdyn_timegroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroup_chat` |
| `msdyn_timegroup_msdyn_copilottranscripts` | [msdyn_timegroup](msdyn_timegroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroup_msdyn_copilottranscript` |
| `msdyn_timegroup_SyncErrors` | [msdyn_timegroup](msdyn_timegroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroup` |
| `msdyn_timegroup_DuplicateMatchingRecord` | [msdyn_timegroup](msdyn_timegroup.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_timegroup` |
| `msdyn_timegroup_DuplicateBaseRecord` | [msdyn_timegroup](msdyn_timegroup.md) | `baserecordid` | `baserecordid_msdyn_timegroup` |
| `msdyn_timegroup_SharePointDocumentLocations` | [msdyn_timegroup](msdyn_timegroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroup` |
| `msdyn_timegroup_SharePointDocuments` | [msdyn_timegroup](msdyn_timegroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroup` |
| `msdyn_timegroup_AsyncOperations` | [msdyn_timegroup](msdyn_timegroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroup` |
| `msdyn_timegroup_MailboxTrackingFolders` | [msdyn_timegroup](msdyn_timegroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroup` |
| `msdyn_timegroup_UserEntityInstanceDatas` | [msdyn_timegroup](msdyn_timegroup.md) | `objectid` | `objectid_msdyn_timegroup` |
| `msdyn_timegroup_ProcessSession` | [msdyn_timegroup](msdyn_timegroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroup` |
| `msdyn_timegroup_BulkDeleteFailures` | [msdyn_timegroup](msdyn_timegroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroup` |
| `msdyn_timegroup_PrincipalObjectAttributeAccesses` | [msdyn_timegroup](msdyn_timegroup.md) | `objectid` | `objectid_msdyn_timegroup` |
| `msdyn_timegroup_Appointments` | [msdyn_timegroup](msdyn_timegroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroup_appointment` |
| `msdyn_timegroup_Emails` | [msdyn_timegroup](msdyn_timegroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroup_email` |
| `msdyn_timegroup_Faxes` | [msdyn_timegroup](msdyn_timegroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroup_fax` |
| `msdyn_timegroup_Letters` | [msdyn_timegroup](msdyn_timegroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroup_letter` |
| `msdyn_timegroup_PhoneCalls` | [msdyn_timegroup](msdyn_timegroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroup_phonecall` |
| `msdyn_timegroup_Tasks` | [msdyn_timegroup](msdyn_timegroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroup_task` |
| `msdyn_timegroup_RecurringAppointmentMasters` | [msdyn_timegroup](msdyn_timegroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroup_recurringappointmentmaster` |
| `msdyn_timegroup_SocialActivities` | [msdyn_timegroup](msdyn_timegroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroup_socialactivity` |
| `msdyn_timegroup_connections1` | [msdyn_timegroup](msdyn_timegroup.md) | `record1id` | `record1id_msdyn_timegroup` |
| `msdyn_timegroup_connections2` | [msdyn_timegroup](msdyn_timegroup.md) | `record2id` | `record2id_msdyn_timegroup` |
| `msdyn_timegroup_QueueItems` | [msdyn_timegroup](msdyn_timegroup.md) | `objectid` | `objectid_msdyn_timegroup` |
| `msdyn_timegroup_Annotations` | [msdyn_timegroup](msdyn_timegroup.md) | `objectid` | `objectid_msdyn_timegroup` |
| `msdyn_timegroup_ServiceAppointments` | [msdyn_timegroup](msdyn_timegroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroup_serviceappointment` |
| `msdyn_timegroup_cai_genericcontacts` | [msdyn_timegroup](msdyn_timegroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroup_cai_genericcontact` |
| `msdyn_msdyn_timegroup_msdyn_resourcerequirement_TimeGroup` | [msdyn_timegroup](msdyn_timegroup.md) | `msdyn_timegroup` | `msdyn_TimeGroup` |
| `msdyn_msdyn_timegroup_msdyn_timegroupdetail` | [msdyn_timegroup](msdyn_timegroup.md) | `msdyn_timegroupid` | `msdyn_timegroupid` |


## Source

Generated from [msdyn_timegroup (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_timegroup')) on 2026-05-07.