---
logical: "searchrelationshipsettings"
display: "SearchRelationshipSettings"
entitySetName: "searchrelationshipsettingses"
primaryId: "searchrelationshipsettingsid"
primaryName: "relationshipsettingname"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

`importsequencenumber`, `overriddencreatedon`, `relationshipmetadataid`, `relationshipname`, `relationshipsettingname`, `searchentity`, `searchrelationshipsettingsid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_searchrelationshipsettings_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_searchrelationshipsettings_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_searchrelationshipsettings_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_searchrelationshipsettings_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_searchrelationshipsettings` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `searchrelationshipsettings_SyncErrors` | [searchrelationshipsettings](searchrelationshipsettings.md) | `regardingobjectid` | `regardingobjectid_searchrelationshipsettings` |
| `searchrelationshipsettings_DuplicateMatchingRecord` | [searchrelationshipsettings](searchrelationshipsettings.md) | `duplicaterecordid` | `duplicaterecordid_searchrelationshipsettings` |
| `searchrelationshipsettings_DuplicateBaseRecord` | [searchrelationshipsettings](searchrelationshipsettings.md) | `baserecordid` | `baserecordid_searchrelationshipsettings` |
| `searchrelationshipsettings_AsyncOperations` | [searchrelationshipsettings](searchrelationshipsettings.md) | `regardingobjectid` | `regardingobjectid_searchrelationshipsettings` |
| `searchrelationshipsettings_MailboxTrackingFolders` | [searchrelationshipsettings](searchrelationshipsettings.md) | `regardingobjectid` | `regardingobjectid_searchrelationshipsettings` |
| `searchrelationshipsettings_UserEntityInstanceDatas` | [searchrelationshipsettings](searchrelationshipsettings.md) | `objectid` | `objectid_searchrelationshipsettings` |
| `searchrelationshipsettings_ProcessSession` | [searchrelationshipsettings](searchrelationshipsettings.md) | `regardingobjectid` | `regardingobjectid_searchrelationshipsettings` |
| `searchrelationshipsettings_BulkDeleteFailures` | [searchrelationshipsettings](searchrelationshipsettings.md) | `regardingobjectid` | `regardingobjectid_searchrelationshipsettings` |
| `searchrelationshipsettings_PrincipalObjectAttributeAccesses` | [searchrelationshipsettings](searchrelationshipsettings.md) | `objectid` | `objectid_searchrelationshipsettings` |


## Source

Generated from [searchrelationshipsettings (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='searchrelationshipsettings')) on 2026-05-07.