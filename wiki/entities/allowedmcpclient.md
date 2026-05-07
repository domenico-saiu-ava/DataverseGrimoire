---
logical: "allowedmcpclient"
display: "Allowed MCP Client"
entitySetName: "allowedmcpclients"
primaryId: "allowedmcpclientid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Allowed MCP Client

An MCP client that is allowed to talk to MCP endpoint

## Identity

| Property | Value |
| --- | --- |
| Logical name | `allowedmcpclient` |
| Display name | Allowed MCP Client |
| Display (plural) | Allowed MCP Clients |
| Schema name | `allowedmcpclient` |
| Entity set (Web API) | `allowedmcpclients` |
| Primary id attribute | `allowedmcpclientid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/allowedmcpclients?$select=name&$top=10
GET /api/data/v9.2/allowedmcpclients(<guid>)
POST /api/data/v9.2/allowedmcpclients
PATCH /api/data/v9.2/allowedmcpclients(<guid>)
DELETE /api/data/v9.2/allowedmcpclients(<guid>)
```

## Attributes

Writable: **12** · Read-only: **14**

### Writable

`allowedmcpclientId`, `ApplicationId`, `ImportSequenceNumber`, `IsCustomizable`, `IsEnabled`, `Name`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UniqueName`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_allowedmcpclient_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_allowedmcpclient_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_allowedmcpclient_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_allowedmcpclient_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_allowedmcpclient` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `allowedmcpclient_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `allowedmcpclient_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `allowedmcpclient_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `allowedmcpclient_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `allowedmcpclient_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `allowedmcpclient_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [allowedmcpclient.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/allowedmcpclient.md) on 2026-05-06.