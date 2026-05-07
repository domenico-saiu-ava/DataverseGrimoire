---
logical: "searchattributesettings"
display: "SearchAttributeSettings"
entitySetName: "searchattributesettingses"
primaryId: "searchattributesettingsid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

`attributename`, `entityname`, `importsequencenumber`, `name`, `overriddencreatedon`, `searchattributesettingsid`, `settings`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_searchattributesettings_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_searchattributesettings_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_searchattributesettings_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_searchattributesettings_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_searchattributesettings` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `searchattributesettings_SyncErrors` | [searchattributesettings](searchattributesettings.md) | `regardingobjectid` | `regardingobjectid_searchattributesettings` |
| `searchattributesettings_DuplicateMatchingRecord` | [searchattributesettings](searchattributesettings.md) | `duplicaterecordid` | `duplicaterecordid_searchattributesettings` |
| `searchattributesettings_DuplicateBaseRecord` | [searchattributesettings](searchattributesettings.md) | `baserecordid` | `baserecordid_searchattributesettings` |
| `searchattributesettings_AsyncOperations` | [searchattributesettings](searchattributesettings.md) | `regardingobjectid` | `regardingobjectid_searchattributesettings` |
| `searchattributesettings_MailboxTrackingFolders` | [searchattributesettings](searchattributesettings.md) | `regardingobjectid` | `regardingobjectid_searchattributesettings` |
| `searchattributesettings_UserEntityInstanceDatas` | [searchattributesettings](searchattributesettings.md) | `objectid` | `objectid_searchattributesettings` |
| `searchattributesettings_ProcessSession` | [searchattributesettings](searchattributesettings.md) | `regardingobjectid` | `regardingobjectid_searchattributesettings` |
| `searchattributesettings_BulkDeleteFailures` | [searchattributesettings](searchattributesettings.md) | `regardingobjectid` | `regardingobjectid_searchattributesettings` |
| `searchattributesettings_PrincipalObjectAttributeAccesses` | [searchattributesettings](searchattributesettings.md) | `objectid` | `objectid_searchattributesettings` |


## Source

Generated from [searchattributesettings (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='searchattributesettings')) on 2026-05-07.