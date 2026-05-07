---
logical: "mspp_publishingstatetransitionrule"
display: "Regola di transizione stato pubblicazione"
entitySetName: "mspp_publishingstatetransitionrules"
primaryId: "mspp_publishingstatetransitionruleid"
primaryName: "mspp_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Regola di transizione stato pubblicazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_publishingstatetransitionrule` |
| Display name | Regola di transizione stato pubblicazione |
| Display (plural) | Regole di transizione stato pubblicazione |
| Schema name | `mspp_publishingstatetransitionrule` |
| Entity set (Web API) | `mspp_publishingstatetransitionrules` |
| Primary id attribute | `mspp_publishingstatetransitionruleid` |
| Primary name attribute | `mspp_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/mspp_publishingstatetransitionrules?$select=mspp_name&$top=10
GET /api/data/v9.2/mspp_publishingstatetransitionrules(<guid>)
POST /api/data/v9.2/mspp_publishingstatetransitionrules
PATCH /api/data/v9.2/mspp_publishingstatetransitionrules(<guid>)
DELETE /api/data/v9.2/mspp_publishingstatetransitionrules(<guid>)
```

## Attributes

Writable: **11** · Read-only: **0**

### Writable

`mspp_createdby`, `mspp_createdon`, `mspp_fromstate_publishingstateid`, `mspp_modifiedby`, `mspp_modifiedon`, `mspp_name`, `mspp_publishingstatetransitionruleid`, `mspp_tostate_publishingstateid`, `mspp_websiteid`, `statecode`, `statuscode`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_frompublishingstate_statetransition` | [mspp_publishingstate](mspp_publishingstate.md) | `mspp_fromstate_publishingstateid` | `mspp_FromState_PublishingStateId` |
| `mspp_systemuser_mspp_publishingstatetransitionrule_createdby` | [systemuser](systemuser.md) | `mspp_createdby` | `mspp_createdby` |
| `mspp_systemuser_mspp_publishingstatetransitionrule_modifiedby` | [systemuser](systemuser.md) | `mspp_modifiedby` | `mspp_modifiedby` |
| `mspp_topublishingstate_statetransition` | [mspp_publishingstate](mspp_publishingstate.md) | `mspp_tostate_publishingstateid` | `mspp_ToState_PublishingStateId` |
| `mspp_website_publishingstatetransition` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_WebsiteId` |

### One-to-Many (30)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_publishingstatetransitionrule_msdyn_bookingalerts` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_msdyn_bookingalert` |
| `mspp_publishingstatetransitionrule_OpportunityCloses` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_opportunityclose` |
| `mspp_publishingstatetransitionrule_OrderCloses` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_orderclose` |
| `mspp_publishingstatetransitionrule_IncidentResolutions` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_incidentresolution` |
| `mspp_publishingstatetransitionrule_QuoteCloses` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_quoteclose` |
| `mspp_publishingstatetransitionrule_ServiceAppointments` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_serviceappointment` |
| `mspp_publishingstatetransitionrule_msdyn_copilottranscripts` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_msdyn_copilottranscript` |
| `mspp_publishingstatetransitionrule_BulkOperations` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_bulkoperation` |
| `mspp_publishingstatetransitionrule_msdyn_ocliveworkitems` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_msdyn_ocliveworkitem` |
| `mspp_publishingstatetransitionrule_CampaignActivities` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_campaignactivity` |
| `mspp_publishingstatetransitionrule_CampaignResponses` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_campaignresponse` |
| `mspp_publishingstatetransitionrule_msdyn_ocsessions` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_msdyn_ocsession` |
| `mspp_publishingstatetransitionrule_cai_genericcontacts` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_cai_genericcontact` |
| `mspp_publishingstatetransitionrule_msfp_alerts` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_msfp_alert` |
| `mspp_publishingstatetransitionrule_msfp_surveyinvites` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_msfp_surveyinvite` |
| `mspp_publishingstatetransitionrule_msfp_surveyresponses` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_msfp_surveyresponse` |
| `mspp_publishingstatetransitionrule_ActivityPointers` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule` |
| `mspp_publishingstatetransitionrule_adx_inviteredemptions` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_adx_inviteredemption` |
| `mspp_publishingstatetransitionrule_adx_portalcomments` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_adx_portalcomment` |
| `mspp_publishingstatetransitionrule_chats` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_chat` |
| `mspp_publishingstatetransitionrule_Appointments` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_appointment` |
| `mspp_publishingstatetransitionrule_Emails` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_email` |
| `mspp_publishingstatetransitionrule_Faxes` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_fax` |
| `mspp_publishingstatetransitionrule_Letters` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_letter` |
| `mspp_publishingstatetransitionrule_PhoneCalls` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_phonecall` |
| `mspp_publishingstatetransitionrule_Tasks` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_task` |
| `mspp_publishingstatetransitionrule_RecurringAppointmentMasters` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_recurringappointmentmaster` |
| `mspp_publishingstatetransitionrule_SocialActivities` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_socialactivity` |
| `mspp_publishingstatetransitionrule_connections1` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `record1id` | `record1id_mspp_publishingstatetransitionrule` |
| `mspp_publishingstatetransitionrule_connections2` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `record2id` | `record2id_mspp_publishingstatetransitionrule` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_publishingstatetransitionrule_webrole` | [mspp_webrole](mspp_webrole.md) | _n/a_ | `mspp_publishingstatetransitionrule_webrole` |

## Source

Generated from [mspp_publishingstatetransitionrule (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='mspp_publishingstatetransitionrule')) on 2026-05-07.