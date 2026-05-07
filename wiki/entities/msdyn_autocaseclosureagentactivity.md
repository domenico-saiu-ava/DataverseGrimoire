---
logical: "msdyn_autocaseclosureagentactivity"
display: "Case Management Agent for case closure Activity"
entitySetName: "msdyn_autocaseclosureagentactivities"
primaryId: "msdyn_autocaseclosureagentactivityid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Case Management Agent for case closure Activity

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_autocaseclosureagentactivity` |
| Display name | Case Management Agent for case closure Activity |
| Display (plural) | Case Management Agent for case closure Activities |
| Schema name | `msdyn_autocaseclosureagentactivity` |
| Entity set (Web API) | `msdyn_autocaseclosureagentactivities` |
| Primary id attribute | `msdyn_autocaseclosureagentactivityid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_autocaseclosureagentactivities?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_autocaseclosureagentactivities(<guid>)
POST /api/data/v9.2/msdyn_autocaseclosureagentactivities
PATCH /api/data/v9.2/msdyn_autocaseclosureagentactivities(<guid>)
DELETE /api/data/v9.2/msdyn_autocaseclosureagentactivities(<guid>)
```

## Attributes

Writable: **20** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_activityid`, `msdyn_activitytype`, `msdyn_autocaseclosureagentactivityId`, `msdyn_autocaseclosureagentgeneratedemailid`, `msdyn_autocaseclosureagentmonitoringid`, `msdyn_casefollowupandclosureconfigurationid`, `msdyn_followupcount`, `msdyn_incidentid`, `msdyn_isfullautonomous`, `msdyn_name`, `msdyn_regarding`, `msdyn_regardingIdType`, `msdyn_retrycount`, `msdyn_triggertrackingid`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_autocaseclosureagentactivity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_autocaseclosureagentactivity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_autocaseclosureagentactivity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_autocaseclosureagentactivity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_autocaseclosureagentactivity_msdyn_autocaseclosureagentmonitoringid_monitoringid` | [msdyn_autocaseclosureagentmonitoring](msdyn_autocaseclosureagentmonitoring.md) | `msdyn_autocaseclosureagentmonitoringid` | `msdyn_autocaseclosureagentmonitoringid` |
| `msdyn_autocaseclosureagentactivity_msdyn_casefollowupandclosureconfigurationid_configurationid` | [msdyn_casefollowupandclosureconfiguration](msdyn_casefollowupandclosureconfiguration.md) | `msdyn_casefollowupandclosureconfigurationid` | `msdyn_casefollowupandclosureconfigurationid` |
| `msdyn_autocaseclosureagentactivity_regarding_incident` | [incident](incident.md) | `msdyn_regarding` | `msdyn_regarding` |
| `msdyn_email_msdyn_autocaseclosureagentactivity_activityid` | [email](email.md) | `msdyn_activityid` | `msdyn_activityid` |
| `msdyn_email_msdyn_autocaseclosureagentactivity_autocaseclosureagentgeneratedemailid` | [email](email.md) | `msdyn_autocaseclosureagentgeneratedemailid` | `msdyn_autocaseclosureagentgeneratedemailid` |
| `msdyn_incident_msdyn_autocaseclosureagentactivity_incidentid` | [incident](incident.md) | `msdyn_incidentid` | `msdyn_incidentid` |
| `organization_msdyn_autocaseclosureagentactivity` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_autocaseclosureagentactivity_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_autocaseclosureagentactivity_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_autocaseclosureagentactivity_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_autocaseclosureagentactivity_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_autocaseclosureagentactivity_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_autocaseclosureagentactivity_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_autocaseclosureagentactivity.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_autocaseclosureagentactivity.md) on 2026-05-06.