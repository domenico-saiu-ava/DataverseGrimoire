---
logical: "delegatedauthorization"
display: "DelegatedAuthorization"
entitySetName: "DelegatedAuthorizations"
primaryId: "delegatedauthorizationid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# DelegatedAuthorization

Context for delegated authorization.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `delegatedauthorization` |
| Display name | DelegatedAuthorization |
| Display (plural) | DelegatedAuthorizations |
| Schema name | `DelegatedAuthorization` |
| Entity set (Web API) | `DelegatedAuthorizations` |
| Primary id attribute | `delegatedauthorizationid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/DelegatedAuthorizations?$select=name&$top=10
GET /api/data/v9.2/DelegatedAuthorizations(<guid>)
POST /api/data/v9.2/DelegatedAuthorizations
PATCH /api/data/v9.2/DelegatedAuthorizations(<guid>)
DELETE /api/data/v9.2/DelegatedAuthorizations(<guid>)
```

## Attributes

Writable: **13** · Read-only: **8**

### Writable

`botid`, `delegatedauthorizationid`, `importsequencenumber`, `name`, `overriddencreatedon`, `providertype`, `roadmapprojectid`, `sharepointlistid`, `sharepointsite`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_delegatedauthorization_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_delegatedauthorization_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_delegatedauthorization_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_delegatedauthorization_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_delegatedauthorization` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `delegatedauthorization_SyncErrors` | [delegatedauthorization](delegatedauthorization.md) | `regardingobjectid` | `regardingobjectid_delegatedauthorization` |
| `delegatedauthorization_AsyncOperations` | [delegatedauthorization](delegatedauthorization.md) | `regardingobjectid` | `regardingobjectid_delegatedauthorization` |
| `delegatedauthorization_MailboxTrackingFolders` | [delegatedauthorization](delegatedauthorization.md) | `regardingobjectid` | `regardingobjectid_delegatedauthorization` |
| `delegatedauthorization_UserEntityInstanceDatas` | [delegatedauthorization](delegatedauthorization.md) | `objectid` | `objectid_delegatedauthorization` |
| `delegatedauthorization_ProcessSession` | [delegatedauthorization](delegatedauthorization.md) | `regardingobjectid` | `regardingobjectid_delegatedauthorization` |
| `delegatedauthorization_BulkDeleteFailures` | [delegatedauthorization](delegatedauthorization.md) | `regardingobjectid` | `regardingobjectid_delegatedauthorization` |
| `delegatedauthorization_PrincipalObjectAttributeAccesses` | [delegatedauthorization](delegatedauthorization.md) | `objectid` | `objectid_delegatedauthorization` |
| `team_delegatedauthorization` | [delegatedauthorization](delegatedauthorization.md) | `delegatedauthorizationid` | `delegatedauthorizationid` |


## Source

Generated from [delegatedauthorization (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='delegatedauthorization')) on 2026-05-07.