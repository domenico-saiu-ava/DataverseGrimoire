---
logical: "mspp_publishingstatetransitionrule"
display: "Publishing State Transition Rule"
entitySetName: "mspp_publishingstatetransitionrules"
primaryId: "mspp_publishingstatetransitionruleid"
primaryName: "mspp_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Publishing State Transition Rule

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_publishingstatetransitionrule` |
| Display name | Publishing State Transition Rule |
| Display (plural) | Publishing State Transition Rules |
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

`mspp_createdby`, `mspp_createdon`, `mspp_fromstate_publishingstateid`, `mspp_modifiedby`, `mspp_modifiedon`, `mspp_name`, `mspp_publishingstatetransitionruleId`, `mspp_tostate_publishingstateid`, `mspp_websiteid`, `statecode`, `statuscode`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_frompublishingstate_statetransition` | [mspp_publishingstate](mspp_publishingstate.md) | `mspp_fromstate_publishingstateid` | `mspp_FromState_PublishingStateId` |
| `mspp_systemuser_mspp_publishingstatetransitionrule_createdby` | [systemuser](systemuser.md) | `mspp_createdby` | `mspp_createdby` |
| `mspp_systemuser_mspp_publishingstatetransitionrule_modifiedby` | [systemuser](systemuser.md) | `mspp_modifiedby` | `mspp_modifiedby` |
| `mspp_topublishingstate_statetransition` | [mspp_publishingstate](mspp_publishingstate.md) | `mspp_tostate_publishingstateid` | `mspp_ToState_PublishingStateId` |
| `mspp_website_publishingstatetransition` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_WebsiteId` |

### One-to-Many (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_publishingstatetransitionrule_ActivityPointers` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_publishingstatetransitionrule_adx_inviteredemptions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_publishingstatetransitionrule_adx_portalcomments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_publishingstatetransitionrule_Appointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_publishingstatetransitionrule_chats` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_publishingstatetransitionrule_connections1` | _n/a_ | `record1id` | _n/a_ |
| `mspp_publishingstatetransitionrule_connections2` | _n/a_ | `record2id` | _n/a_ |
| `mspp_publishingstatetransitionrule_Emails` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_publishingstatetransitionrule_Faxes` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_publishingstatetransitionrule_Letters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_publishingstatetransitionrule_PhoneCalls` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_publishingstatetransitionrule_RecurringAppointmentMasters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_publishingstatetransitionrule_SocialActivities` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_publishingstatetransitionrule_Tasks` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_publishingstatetransitionrule_webrole` | [mspp_publishingstatetransitionruleid](mspp_publishingstatetransitionruleid.md) | _n/a_ | _n/a_ |

## Source

Generated from [mspp_publishingstatetransitionrule.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/mspp_publishingstatetransitionrule.md) on 2026-05-06.