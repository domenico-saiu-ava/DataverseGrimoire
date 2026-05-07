---
logical: "mspp_adplacement"
display: "Ad Placement"
entitySetName: "mspp_adplacements"
primaryId: "mspp_adplacementid"
primaryName: "mspp_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Ad Placement

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_adplacement` |
| Display name | Ad Placement |
| Display (plural) | Ad Placements |
| Schema name | `mspp_adplacement` |
| Entity set (Web API) | `mspp_adplacements` |
| Primary id attribute | `mspp_adplacementid` |
| Primary name attribute | `mspp_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/mspp_adplacements?$select=mspp_name&$top=10
GET /api/data/v9.2/mspp_adplacements(<guid>)
POST /api/data/v9.2/mspp_adplacements
PATCH /api/data/v9.2/mspp_adplacements(<guid>)
DELETE /api/data/v9.2/mspp_adplacements(<guid>)
```

## Attributes

Writable: **10** · Read-only: **0**

### Writable

`mspp_adplacementId`, `mspp_createdby`, `mspp_createdon`, `mspp_modifiedby`, `mspp_modifiedon`, `mspp_name`, `mspp_websiteid`, `mspp_webtemplateid`, `statecode`, `statuscode`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_systemuser_mspp_adplacement_createdby` | [systemuser](systemuser.md) | `mspp_createdby` | `mspp_createdby` |
| `mspp_systemuser_mspp_adplacement_modifiedby` | [systemuser](systemuser.md) | `mspp_modifiedby` | `mspp_modifiedby` |
| `mspp_website_adplacement` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_websiteid` |
| `mspp_webtemplate_adplacement` | [mspp_webtemplate](mspp_webtemplate.md) | `mspp_webtemplateid` | `mspp_webtemplateid` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_adplacement_ActivityPointers` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_adplacement_adx_inviteredemptions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_adplacement_adx_portalcomments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_adplacement_Appointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_adplacement_chats` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_adplacement_Emails` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_adplacement_Faxes` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_adplacement_Letters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_adplacement_PhoneCalls` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_adplacement_RecurringAppointmentMasters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_adplacement_SocialActivities` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_adplacement_Tasks` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [mspp_adplacement.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/mspp_adplacement.md) on 2026-05-06.