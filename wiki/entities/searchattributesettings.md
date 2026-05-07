---
logical: "searchattributesettings"
display: "SearchAttributeSettings"
entitySetName: "searchattributesettingses"
primaryId: "searchattributesettingsid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# SearchAttributeSettings

## Identity

| Property | Value |
| --- | --- |
| Logical name | `searchattributesettings` |
| Display name | SearchAttributeSettings |
| Display (plural) | SearchAttributeSettings |
| Schema name | `searchattributesettings` |
| Entity set (Web API) | `searchattributesettingses` |
| Primary id attribute | `searchattributesettingsid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/searchattributesettingses?$select=name&$top=10
GET /api/data/v9.2/searchattributesettingses(<guid>)
POST /api/data/v9.2/searchattributesettingses
PATCH /api/data/v9.2/searchattributesettingses(<guid>)
DELETE /api/data/v9.2/searchattributesettingses(<guid>)
```

## Attributes

Writable: **11** · Read-only: **8**

### Writable

`attributename`, `entityname`, `ImportSequenceNumber`, `name`, `OverriddenCreatedOn`, `searchattributesettingsId`, `settings`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_searchattributesettings_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_searchattributesettings_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_searchattributesettings_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_searchattributesettings_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_searchattributesettings` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `searchattributesettings_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `searchattributesettings_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `searchattributesettings_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `searchattributesettings_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `searchattributesettings_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `searchattributesettings_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `searchattributesettings_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `searchattributesettings_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [searchattributesettings.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/searchattributesettings.md) on 2026-05-06.