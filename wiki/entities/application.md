---
logical: "application"
display: "Application"
entitySetName: "applications"
primaryId: "applicationid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Application

Application

## Identity

| Property | Value |
| --- | --- |
| Logical name | `application` |
| Display name | Application |
| Display (plural) | Applications |
| Schema name | `Application` |
| Entity set (Web API) | `applications` |
| Primary id attribute | `applicationid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/applications?$select=name&$top=10
GET /api/data/v9.2/applications(<guid>)
POST /api/data/v9.2/applications
PATCH /api/data/v9.2/applications(<guid>)
DELETE /api/data/v9.2/applications(<guid>)
```

## Attributes

Writable: **8** · Read-only: **13**

### Writable

`Access`, `ApplicationId`, `CommonlyUsed`, `IsCustomizable`, `Name`, `OverriddenCreatedOn`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`

## Relationships

### Many-to-One (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `organization_application` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `application_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `application_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `application_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `application_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `application_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `application_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `application_role` | [applicationid](applicationid.md) | _n/a_ | _n/a_ |

## Source

Generated from [application.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/application.md) on 2026-05-06.