---
logical: "msdyn_timegroupdetail"
display: "Dettagli gruppo di ore"
entitySetName: "msdyn_timegroupdetails"
primaryId: "msdyn_timegroupdetailid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Dettagli gruppo di ore

Specifica singoli intervalli di tempo in un gruppo di ore.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_timegroupdetail` |
| Display name | Dettagli gruppo di ore |
| Display (plural) | Dettagli gruppo di ore |
| Schema name | `msdyn_timegroupdetail` |
| Entity set (Web API) | `msdyn_timegroupdetails` |
| Primary id attribute | `msdyn_timegroupdetailid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_timegroupdetails?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_timegroupdetails(<guid>)
POST /api/data/v9.2/msdyn_timegroupdetails
PATCH /api/data/v9.2/msdyn_timegroupdetails(<guid>)
DELETE /api/data/v9.2/msdyn_timegroupdetails(<guid>)
```

## Attributes

Writable: **15** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_endtime`, `msdyn_name`, `msdyn_starttime`, `msdyn_timegroupdetailid`, `msdyn_timegroupid`, `overriddencreatedon`, `ownerid`, `processid`, `stageid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `traversedpath`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_timegroupdetail_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_timegroupdetail_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_timegroupdetail_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_timegroupdetail_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_timegroupdetail` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_timegroupdetail` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_timegroupdetail` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_timegroupdetail` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `processstage_msdyn_timegroupdetail` | [processstage](processstage.md) | `stageid` | `stageid` |
| `msdyn_msdyn_timegroup_msdyn_timegroupdetail` | [msdyn_timegroup](msdyn_timegroup.md) | `msdyn_timegroupid` | `msdyn_timegroupid` |

### One-to-Many (37)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_timegroupdetail_ActivityPointers` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroupdetail` |
| `msdyn_timegroupdetail_msfp_alerts` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroupdetail_msfp_alert` |
| `msdyn_timegroupdetail_adx_inviteredemptions` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroupdetail_adx_inviteredemption` |
| `msdyn_timegroupdetail_msdyn_ocsessions` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroupdetail_msdyn_ocsession` |
| `msdyn_timegroupdetail_msfp_surveyinvites` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroupdetail_msfp_surveyinvite` |
| `msdyn_timegroupdetail_msdyn_ocliveworkitems` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroupdetail_msdyn_ocliveworkitem` |
| `msdyn_timegroupdetail_msdyn_bookingalerts` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroupdetail_msdyn_bookingalert` |
| `msdyn_timegroupdetail_msfp_surveyresponses` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroupdetail_msfp_surveyresponse` |
| `msdyn_timegroupdetail_adx_portalcomments` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroupdetail_adx_portalcomment` |
| `msdyn_timegroupdetail_chats` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroupdetail_chat` |
| `msdyn_timegroupdetail_msdyn_copilottranscripts` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroupdetail_msdyn_copilottranscript` |
| `msdyn_timegroupdetail_SyncErrors` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroupdetail` |
| `msdyn_timegroupdetail_DuplicateMatchingRecord` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_timegroupdetail` |
| `msdyn_timegroupdetail_DuplicateBaseRecord` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `baserecordid` | `baserecordid_msdyn_timegroupdetail` |
| `msdyn_timegroupdetail_SharePointDocumentLocations` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroupdetail` |
| `msdyn_timegroupdetail_SharePointDocuments` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroupdetail` |
| `msdyn_timegroupdetail_AsyncOperations` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroupdetail` |
| `msdyn_timegroupdetail_MailboxTrackingFolders` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroupdetail` |
| `msdyn_timegroupdetail_UserEntityInstanceDatas` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `objectid` | `objectid_msdyn_timegroupdetail` |
| `msdyn_timegroupdetail_ProcessSession` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroupdetail` |
| `msdyn_timegroupdetail_BulkDeleteFailures` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroupdetail` |
| `msdyn_timegroupdetail_PrincipalObjectAttributeAccesses` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `objectid` | `objectid_msdyn_timegroupdetail` |
| `msdyn_timegroupdetail_Appointments` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroupdetail_appointment` |
| `msdyn_timegroupdetail_Emails` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroupdetail_email` |
| `msdyn_timegroupdetail_Faxes` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroupdetail_fax` |
| `msdyn_timegroupdetail_Letters` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroupdetail_letter` |
| `msdyn_timegroupdetail_PhoneCalls` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroupdetail_phonecall` |
| `msdyn_timegroupdetail_Tasks` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroupdetail_task` |
| `msdyn_timegroupdetail_RecurringAppointmentMasters` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroupdetail_recurringappointmentmaster` |
| `msdyn_timegroupdetail_SocialActivities` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroupdetail_socialactivity` |
| `msdyn_timegroupdetail_connections1` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `record1id` | `record1id_msdyn_timegroupdetail` |
| `msdyn_timegroupdetail_connections2` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `record2id` | `record2id_msdyn_timegroupdetail` |
| `msdyn_timegroupdetail_QueueItems` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `objectid` | `objectid_msdyn_timegroupdetail` |
| `msdyn_timegroupdetail_Annotations` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `objectid` | `objectid_msdyn_timegroupdetail` |
| `msdyn_timegroupdetail_ServiceAppointments` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroupdetail_serviceappointment` |
| `msdyn_timegroupdetail_cai_genericcontacts` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroupdetail_cai_genericcontact` |
| `msdyn_msdyn_timegroupdetail_bookableresourcebooking_TimeGroupDetailSelected` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `msdyn_timegroupdetailselected` | `msdyn_timegroupdetailselected` |


## Source

Generated from [msdyn_timegroupdetail (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_timegroupdetail')) on 2026-05-07.