---
logical: "searchrelationshipsettings"
display: "SearchRelationshipSettings"
entitySetName: "searchrelationshipsettingses"
primaryId: "searchrelationshipsettingsid"
primaryName: "relationshipsettingname"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# SearchRelationshipSettings

## Identity

| Property | Value |
| --- | --- |
| Logical name | `searchrelationshipsettings` |
| Display name | SearchRelationshipSettings |
| Display (plural) | SearchRelationshipSettings |
| Schema name | `searchrelationshipsettings` |
| Entity set (Web API) | `searchrelationshipsettingses` |
| Primary id attribute | `searchrelationshipsettingsid` |
| Primary name attribute | `relationshipsettingname` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/searchrelationshipsettingses?$select=relationshipsettingname&$top=10
GET /api/data/v9.2/searchrelationshipsettingses(<guid>)
POST /api/data/v9.2/searchrelationshipsettingses
PATCH /api/data/v9.2/searchrelationshipsettingses(<guid>)
DELETE /api/data/v9.2/searchrelationshipsettingses(<guid>)
```

## Attributes

Writable: **11** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `OverriddenCreatedOn`, `RelationshipMetadataId`, `RelationshipName`, `relationshipsettingname`, `SearchEntity`, `searchrelationshipsettingsId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_searchrelationshipsettings_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_searchrelationshipsettings_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_searchrelationshipsettings_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_searchrelationshipsettings_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_searchrelationshipsettings` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `searchrelationshipsettings_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `searchrelationshipsettings_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `searchrelationshipsettings_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `searchrelationshipsettings_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `searchrelationshipsettings_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `searchrelationshipsettings_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `searchrelationshipsettings_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `searchrelationshipsettings_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [searchrelationshipsettings.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/searchrelationshipsettings.md) on 2026-05-06.