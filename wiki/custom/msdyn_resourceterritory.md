---
logical: "msdyn_resourceterritory"
display: "Area risorsa"
entitySetName: "msdyn_resourceterritories"
primaryId: "msdyn_resourceterritoryid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Area risorsa

Consente di specificare l'area per cui una risorsa può fornire servizi

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_resourceterritory` |
| Display name | Area risorsa |
| Display (plural) | Aree risorsa |
| Schema name | `msdyn_resourceterritory` |
| Entity set (Web API) | `msdyn_resourceterritories` |
| Primary id attribute | `msdyn_resourceterritoryid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_resourceterritories?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_resourceterritories(<guid>)
POST /api/data/v9.2/msdyn_resourceterritories
PATCH /api/data/v9.2/msdyn_resourceterritories(<guid>)
DELETE /api/data/v9.2/msdyn_resourceterritories(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_name`, `msdyn_resource`, `msdyn_resourceterritoryid`, `msdyn_territory`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_resourceterritory_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_resourceterritory_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_resourceterritory_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_resourceterritory_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_resourceterritory` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_resourceterritory` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_resourceterritory` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_resourceterritory` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_bookableresource_msdyn_resourceterritory_Resource` | [bookableresource](bookableresource.md) | `msdyn_resource` | `msdyn_resource` |
| `msdyn_territory_msdyn_resourceterritory_Territory` | [territory](territory.md) | `msdyn_territory` | `msdyn_territory` |

### One-to-Many (35)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_resourceterritory_ActivityPointers` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourceterritory` |
| `msdyn_resourceterritory_msfp_alerts` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourceterritory_msfp_alert` |
| `msdyn_resourceterritory_adx_inviteredemptions` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourceterritory_adx_inviteredemption` |
| `msdyn_resourceterritory_msdyn_ocsessions` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourceterritory_msdyn_ocsession` |
| `msdyn_resourceterritory_msfp_surveyinvites` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourceterritory_msfp_surveyinvite` |
| `msdyn_resourceterritory_msdyn_ocliveworkitems` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourceterritory_msdyn_ocliveworkitem` |
| `msdyn_resourceterritory_msdyn_bookingalerts` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourceterritory_msdyn_bookingalert` |
| `msdyn_resourceterritory_msfp_surveyresponses` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourceterritory_msfp_surveyresponse` |
| `msdyn_resourceterritory_adx_portalcomments` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourceterritory_adx_portalcomment` |
| `msdyn_resourceterritory_chats` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourceterritory_chat` |
| `msdyn_resourceterritory_msdyn_copilottranscripts` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourceterritory_msdyn_copilottranscript` |
| `msdyn_resourceterritory_SyncErrors` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourceterritory` |
| `msdyn_resourceterritory_DuplicateMatchingRecord` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_resourceterritory` |
| `msdyn_resourceterritory_DuplicateBaseRecord` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `baserecordid` | `baserecordid_msdyn_resourceterritory` |
| `msdyn_resourceterritory_SharePointDocumentLocations` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourceterritory` |
| `msdyn_resourceterritory_SharePointDocuments` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourceterritory` |
| `msdyn_resourceterritory_AsyncOperations` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourceterritory` |
| `msdyn_resourceterritory_MailboxTrackingFolders` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourceterritory` |
| `msdyn_resourceterritory_UserEntityInstanceDatas` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `objectid` | `objectid_msdyn_resourceterritory` |
| `msdyn_resourceterritory_ProcessSession` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourceterritory` |
| `msdyn_resourceterritory_BulkDeleteFailures` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourceterritory` |
| `msdyn_resourceterritory_PrincipalObjectAttributeAccesses` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `objectid` | `objectid_msdyn_resourceterritory` |
| `msdyn_resourceterritory_Appointments` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourceterritory_appointment` |
| `msdyn_resourceterritory_Emails` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourceterritory_email` |
| `msdyn_resourceterritory_Faxes` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourceterritory_fax` |
| `msdyn_resourceterritory_Letters` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourceterritory_letter` |
| `msdyn_resourceterritory_PhoneCalls` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourceterritory_phonecall` |
| `msdyn_resourceterritory_Tasks` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourceterritory_task` |
| `msdyn_resourceterritory_RecurringAppointmentMasters` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourceterritory_recurringappointmentmaster` |
| `msdyn_resourceterritory_SocialActivities` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourceterritory_socialactivity` |
| `msdyn_resourceterritory_connections1` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `record1id` | `record1id_msdyn_resourceterritory` |
| `msdyn_resourceterritory_connections2` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `record2id` | `record2id_msdyn_resourceterritory` |
| `msdyn_resourceterritory_Annotations` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `objectid` | `objectid_msdyn_resourceterritory` |
| `msdyn_resourceterritory_ServiceAppointments` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourceterritory_serviceappointment` |
| `msdyn_resourceterritory_cai_genericcontacts` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourceterritory_cai_genericcontact` |


## Source

Generated from [msdyn_resourceterritory (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_resourceterritory')) on 2026-05-07.