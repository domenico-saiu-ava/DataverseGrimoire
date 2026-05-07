---
logical: "delegatedauthorization"
display: "DelegatedAuthorization"
entitySetName: "DelegatedAuthorizations"
primaryId: "delegatedauthorizationid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
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

`BotId`, `DelegatedAuthorizationId`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `ProviderType`, `RoadmapProjectId`, `SharePointListId`, `SharePointSite`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_delegatedauthorization_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_delegatedauthorization_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_delegatedauthorization_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_delegatedauthorization_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_delegatedauthorization` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `delegatedauthorization_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `delegatedauthorization_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `delegatedauthorization_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `delegatedauthorization_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `delegatedauthorization_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `delegatedauthorization_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `team_delegatedauthorization` | _n/a_ | `delegatedauthorizationid` | _n/a_ |


## Source

Generated from [delegatedauthorization.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/delegatedauthorization.md) on 2026-05-06.