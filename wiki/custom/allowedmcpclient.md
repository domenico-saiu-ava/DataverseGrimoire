---
logical: "allowedmcpclient"
display: "Client MCP consentito"
entitySetName: "allowedmcpclients"
primaryId: "allowedmcpclientid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Client MCP consentito

Client MCP che può comunicare con l'endpoint MCP

## Identity

| Property | Value |
| --- | --- |
| Logical name | `allowedmcpclient` |
| Display name | Client MCP consentito |
| Display (plural) | Client MCP consentiti |
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

`allowedmcpclientid`, `applicationid`, `importsequencenumber`, `iscustomizable`, `isenabled`, `name`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `uniquename`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_allowedmcpclient_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_allowedmcpclient_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_allowedmcpclient_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_allowedmcpclient_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_allowedmcpclient` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `allowedmcpclient_SyncErrors` | [allowedmcpclient](allowedmcpclient.md) | `regardingobjectid` | `regardingobjectid_allowedmcpclient` |
| `allowedmcpclient_AsyncOperations` | [allowedmcpclient](allowedmcpclient.md) | `regardingobjectid` | `regardingobjectid_allowedmcpclient` |
| `allowedmcpclient_MailboxTrackingFolders` | [allowedmcpclient](allowedmcpclient.md) | `regardingobjectid` | `regardingobjectid_allowedmcpclient` |
| `allowedmcpclient_UserEntityInstanceDatas` | [allowedmcpclient](allowedmcpclient.md) | `objectid` | `objectid_allowedmcpclient` |
| `allowedmcpclient_ProcessSession` | [allowedmcpclient](allowedmcpclient.md) | `regardingobjectid` | `regardingobjectid_allowedmcpclient` |
| `allowedmcpclient_BulkDeleteFailures` | [allowedmcpclient](allowedmcpclient.md) | `regardingobjectid` | `regardingobjectid_allowedmcpclient` |
| `allowedmcpclient_PrincipalObjectAttributeAccesses` | [allowedmcpclient](allowedmcpclient.md) | `objectid` | `objectid_allowedmcpclient` |


## Source

Generated from [allowedmcpclient (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='allowedmcpclient')) on 2026-05-07.