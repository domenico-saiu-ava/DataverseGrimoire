---
logical: "msdyn_dataanalyticsreport_email"
display: "Email analytics"
entitySetName: "msdyn_dataanalyticsreports_emails"
primaryId: "msdyn_dataanalyticsreport_emailid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Email analytics

Email analytics

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dataanalyticsreport_email` |
| Display name | Email analytics |
| Display (plural) | Email analytics |
| Schema name | `msdyn_dataanalyticsreport_email` |
| Entity set (Web API) | `msdyn_dataanalyticsreports_emails` |
| Primary id attribute | `msdyn_dataanalyticsreport_emailid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dataanalyticsreports_emails?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_dataanalyticsreports_emails(<guid>)
POST /api/data/v9.2/msdyn_dataanalyticsreports_emails
PATCH /api/data/v9.2/msdyn_dataanalyticsreports_emails(<guid>)
DELETE /api/data/v9.2/msdyn_dataanalyticsreports_emails(<guid>)
```

## Attributes

Writable: **13** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_dataanalyticsreport_emailId`, `msdyn_dataanalyticsreportId`, `msdyn_datainsightsandanalyticsfeatureId`, `msdyn_displayorder`, `msdyn_IsVisible`, `msdyn_name`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dataanalyticsreport_email_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dataanalyticsreport_email_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dataanalyticsreport_email_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dataanalyticsreport_email_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_dasfeature_dasemail_datainsightsandanalyticsfeatureId` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureId` |
| `organization_msdyn_dataanalyticsreport_email` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dataanalyticsreport_email_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataanalyticsreport_email_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataanalyticsreport_email_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataanalyticsreport_email_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_dataanalyticsreport_email_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataanalyticsreport_email_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_dataanalyticsreport_email.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_dataanalyticsreport_email.md) on 2026-05-06.