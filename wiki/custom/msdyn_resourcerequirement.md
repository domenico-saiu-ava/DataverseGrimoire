---
logical: "msdyn_resourcerequirement"
display: "Requisito di risorsa"
entitySetName: "msdyn_resourcerequirements"
primaryId: "msdyn_resourcerequirementid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Requisito di risorsa

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_resourcerequirement` |
| Display name | Requisito di risorsa |
| Display (plural) | Requisiti di risorse |
| Schema name | `msdyn_resourcerequirement` |
| Entity set (Web API) | `msdyn_resourcerequirements` |
| Primary id attribute | `msdyn_resourcerequirementid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_resourcerequirements?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_resourcerequirements(<guid>)
POST /api/data/v9.2/msdyn_resourcerequirements
PATCH /api/data/v9.2/msdyn_resourcerequirements(<guid>)
DELETE /api/data/v9.2/msdyn_resourcerequirements(<guid>)
```

## Attributes

Writable: **47** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_allocationmethod`, `msdyn_appointmentrequirementid`, `msdyn_bookingsetupmetadataid`, `msdyn_calendarid`, `msdyn_duration`, `msdyn_effort`, `msdyn_fromdate`, `msdyn_fulfilledduration`, `msdyn_internalflags`, `msdyn_isprimary`, `msdyn_istemplate`, `msdyn_latitude`, `msdyn_longitude`, `msdyn_name`, `msdyn_percentage`, `msdyn_pooltype`, `msdyn_priority`, `msdyn_proposedduration`, `msdyn_remainingduration`, `msdyn_requirementgroupcontrolviewid`, `msdyn_requirementgroupid`, `msdyn_requirementrelationshipid`, `msdyn_resourcerequirementid`, `msdyn_resourcetype`, `msdyn_shiftplan`, `msdyn_sortoptions`, `msdyn_status`, `msdyn_templaterequirementid`, `msdyn_territory`, `msdyn_timefrompromised`, `msdyn_timegroup`, `msdyn_timetopromised`, `msdyn_timewindowend`, `msdyn_timewindowstart`, `msdyn_timezonefortimewindow`, `msdyn_todate`, `msdyn_tzafromdate`, `msdyn_tzatodate`, `msdyn_workhourtemplate`, `msdyn_worklocation`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (18)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_shiftplan_msdyn_resourcerequirement_msdyn_shiftplan` | [msdyn_shiftplan](msdyn_shiftplan.md) | `msdyn_shiftplan` | `msdyn_shiftplan` |
| `msdyn_appointment_msdyn_resourcerequirement` | [appointment](appointment.md) | `msdyn_appointmentrequirementid` | `msdyn_AppointmentRequirementId` |
| `msdyn_msdyn_bookingsetupmetadata_msdyn_resourcerequirement` | [msdyn_bookingsetupmetadata](msdyn_bookingsetupmetadata.md) | `msdyn_bookingsetupmetadataid` | `msdyn_BookingSetupMetadataId` |
| `msdyn_msdyn_priority_msdyn_resourcerequirement_Priority` | [msdyn_priority](msdyn_priority.md) | `msdyn_priority` | `msdyn_Priority` |
| `msdyn_msdyn_timegroup_msdyn_resourcerequirement_TimeGroup` | [msdyn_timegroup](msdyn_timegroup.md) | `msdyn_timegroup` | `msdyn_TimeGroup` |
| `msdyn_requirementgroup_resourcerequirement_requirementgroupid` | [msdyn_requirementgroup](msdyn_requirementgroup.md) | `msdyn_requirementgroupid` | `msdyn_requirementgroupid` |
| `msdyn_requirementrelationship_resourcerequirement_requirementrelationshipid` | [msdyn_requirementrelationship](msdyn_requirementrelationship.md) | `msdyn_requirementrelationshipid` | `msdyn_requirementrelationshipid` |
| `msdyn_requirementstatus_resourcerequirement_status` | [msdyn_requirementstatus](msdyn_requirementstatus.md) | `msdyn_status` | `msdyn_Status` |
| `msdyn_territory_msdyn_resourcerequirement_Territory` | [territory](territory.md) | `msdyn_territory` | `msdyn_Territory` |
| `msdyn_workhourtemplate_msdyn_resourcerequirement_workhourtemplate` | [msdyn_workhourtemplate](msdyn_workhourtemplate.md) | `msdyn_workhourtemplate` | `msdyn_workhourtemplate` |
| `lk_msdyn_resourcerequirement_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_resourcerequirement_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_resourcerequirement_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_resourcerequirement_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_resourcerequirement` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_resourcerequirement` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_resourcerequirement` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_resourcerequirement` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (20)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_requirementqueue_resourcerequirementid_ms` | [msdyn_resourcerequirement](msdyn_resourcerequirement.md) | `msdyn_resourcerequirementid` | `msdyn_resourcerequirementid` |
| `msdyn_resourcerequirement_DuplicateMatchingRecord` | [msdyn_resourcerequirement](msdyn_resourcerequirement.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_resourcerequirement` |
| `msdyn_resourcerequirement_DuplicateBaseRecord` | [msdyn_resourcerequirement](msdyn_resourcerequirement.md) | `baserecordid` | `baserecordid_msdyn_resourcerequirement` |
| `msdyn_resourcerequirement_Annotations` | [msdyn_resourcerequirement](msdyn_resourcerequirement.md) | `objectid` | `objectid_msdyn_resourcerequirement` |
| `msdyn_resourcerequirement_requirementdependency_resourcerequirement` | [msdyn_resourcerequirement](msdyn_resourcerequirement.md) | `msdyn_requirement` | `msdyn_requirement` |
| `msdyn_resourcerequirement_requirementdependency_dependentrequirement` | [msdyn_resourcerequirement](msdyn_resourcerequirement.md) | `msdyn_dependentrequirement` | `msdyn_dependentrequirement` |
| `msdyn_resourcerequirement_bookableresourcebooking_ResourceRequirement` | [msdyn_resourcerequirement](msdyn_resourcerequirement.md) | `msdyn_resourcerequirement` | `msdyn_ResourceRequirement` |
| `msdyn_resourcerequirement_bookableresourcebookingheader_ResourceRequirement` | [msdyn_resourcerequirement](msdyn_resourcerequirement.md) | `msdyn_resourcerequirement` | `msdyn_ResourceRequirement` |
| `msdyn_resourcerequirement_details` | [msdyn_resourcerequirement](msdyn_resourcerequirement.md) | `msdyn_resourcerequirementid` | `msdyn_resourcerequirementid` |
| `msdyn_resourcerequirement_requirementcharacteristic_resourcerequirement` | [msdyn_resourcerequirement](msdyn_resourcerequirement.md) | `msdyn_resourcerequirement` | `msdyn_ResourceRequirement` |
| `msdyn_resourcerequirement_requirementorganizationunit_ResourceRequirement` | [msdyn_resourcerequirement](msdyn_resourcerequirement.md) | `msdyn_resourcerequirement` | `msdyn_ResourceRequirement` |
| `msdyn_resourcerequirement_requirementresourcecategory_resourcerequirement` | [msdyn_resourcerequirement](msdyn_resourcerequirement.md) | `msdyn_resourcerequirement` | `msdyn_ResourceRequirement` |
| `msdyn_resourcerequirement_requirementresourcepreference_ResourceRequirement` | [msdyn_resourcerequirement](msdyn_resourcerequirement.md) | `msdyn_resourcerequirement` | `msdyn_ResourceRequirement` |
| `msdyn_resourcerequirement_SyncErrors` | [msdyn_resourcerequirement](msdyn_resourcerequirement.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourcerequirement` |
| `msdyn_resourcerequirement_AsyncOperations` | [msdyn_resourcerequirement](msdyn_resourcerequirement.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourcerequirement` |
| `msdyn_resourcerequirement_MailboxTrackingFolders` | [msdyn_resourcerequirement](msdyn_resourcerequirement.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourcerequirement` |
| `msdyn_resourcerequirement_UserEntityInstanceDatas` | [msdyn_resourcerequirement](msdyn_resourcerequirement.md) | `objectid` | `objectid_msdyn_resourcerequirement` |
| `msdyn_resourcerequirement_ProcessSession` | [msdyn_resourcerequirement](msdyn_resourcerequirement.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourcerequirement` |
| `msdyn_resourcerequirement_BulkDeleteFailures` | [msdyn_resourcerequirement](msdyn_resourcerequirement.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourcerequirement` |
| `msdyn_resourcerequirement_PrincipalObjectAttributeAccesses` | [msdyn_resourcerequirement](msdyn_resourcerequirement.md) | `objectid` | `objectid_msdyn_resourcerequirement` |


## Source

Generated from [msdyn_resourcerequirement (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_resourcerequirement')) on 2026-05-07.