---
logical: "mspp_pollplacement"
display: "Poll Placement"
entitySetName: "mspp_pollplacements"
primaryId: "mspp_pollplacementid"
primaryName: "mspp_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Poll Placement

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_pollplacement` |
| Display name | Poll Placement |
| Display (plural) | Poll Placements |
| Schema name | `mspp_pollplacement` |
| Entity set (Web API) | `mspp_pollplacements` |
| Primary id attribute | `mspp_pollplacementid` |
| Primary name attribute | `mspp_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/mspp_pollplacements?$select=mspp_name&$top=10
GET /api/data/v9.2/mspp_pollplacements(<guid>)
POST /api/data/v9.2/mspp_pollplacements
PATCH /api/data/v9.2/mspp_pollplacements(<guid>)
DELETE /api/data/v9.2/mspp_pollplacements(<guid>)
```

## Attributes

Writable: **10** · Read-only: **0**

### Writable

`mspp_createdby`, `mspp_createdon`, `mspp_modifiedby`, `mspp_modifiedon`, `mspp_name`, `mspp_pollplacementId`, `mspp_websiteid`, `mspp_webtemplateid`, `statecode`, `statuscode`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_systemuser_mspp_pollplacement_createdby` | [systemuser](systemuser.md) | `mspp_createdby` | `mspp_createdby` |
| `mspp_systemuser_mspp_pollplacement_modifiedby` | [systemuser](systemuser.md) | `mspp_modifiedby` | `mspp_modifiedby` |
| `mspp_website_pollplacement` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_websiteid` |
| `mspp_webtemplate_pollplacement` | [mspp_webtemplate](mspp_webtemplate.md) | `mspp_webtemplateid` | `mspp_webtemplateid` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_pollplacement_ActivityPointers` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_pollplacement_adx_inviteredemptions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_pollplacement_adx_portalcomments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_pollplacement_Appointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_pollplacement_chats` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_pollplacement_Emails` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_pollplacement_Faxes` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_pollplacement_Letters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_pollplacement_PhoneCalls` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_pollplacement_RecurringAppointmentMasters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_pollplacement_SocialActivities` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_pollplacement_Tasks` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [mspp_pollplacement.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/mspp_pollplacement.md) on 2026-05-06.