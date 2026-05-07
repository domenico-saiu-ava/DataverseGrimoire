---
logical: "msdyn_dataanalyticsreport_email"
display: "Analisi e-mail"
entitySetName: "msdyn_dataanalyticsreports_emails"
primaryId: "msdyn_dataanalyticsreport_emailid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Analisi e-mail

Analisi e-mail

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dataanalyticsreport_email` |
| Display name | Analisi e-mail |
| Display (plural) | Analisi e-mail |
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

`importsequencenumber`, `iscustomizable`, `msdyn_dataanalyticsreport_emailid`, `msdyn_dataanalyticsreportid`, `msdyn_datainsightsandanalyticsfeatureid`, `msdyn_displayorder`, `msdyn_isvisible`, `msdyn_name`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dataanalyticsreport_email_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dataanalyticsreport_email_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dataanalyticsreport_email_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dataanalyticsreport_email_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_dataanalyticsreport_email` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_dasfeature_dasemail_datainsightsandanalyticsfeatureId` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureId` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dataanalyticsreport_email_SyncErrors` | [msdyn_dataanalyticsreport_email](msdyn_dataanalyticsreport_email.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_email` |
| `msdyn_dataanalyticsreport_email_AsyncOperations` | [msdyn_dataanalyticsreport_email](msdyn_dataanalyticsreport_email.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_email` |
| `msdyn_dataanalyticsreport_email_MailboxTrackingFolders` | [msdyn_dataanalyticsreport_email](msdyn_dataanalyticsreport_email.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_email` |
| `msdyn_dataanalyticsreport_email_UserEntityInstanceDatas` | [msdyn_dataanalyticsreport_email](msdyn_dataanalyticsreport_email.md) | `objectid` | `objectid_msdyn_dataanalyticsreport_email` |
| `msdyn_dataanalyticsreport_email_ProcessSession` | [msdyn_dataanalyticsreport_email](msdyn_dataanalyticsreport_email.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_email` |
| `msdyn_dataanalyticsreport_email_BulkDeleteFailures` | [msdyn_dataanalyticsreport_email](msdyn_dataanalyticsreport_email.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_email` |
| `msdyn_dataanalyticsreport_email_PrincipalObjectAttributeAccesses` | [msdyn_dataanalyticsreport_email](msdyn_dataanalyticsreport_email.md) | `objectid` | `objectid_msdyn_dataanalyticsreport_email` |


## Source

Generated from [msdyn_dataanalyticsreport_email (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_dataanalyticsreport_email')) on 2026-05-07.