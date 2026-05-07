---
logical: "purviewlabelinfo"
display: "Purview Label Info"
entitySetName: "purviewlabelinfos"
primaryId: "purviewlabelinfoid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Purview Label Info

## Identity

| Property | Value |
| --- | --- |
| Logical name | `purviewlabelinfo` |
| Display name | Purview Label Info |
| Display (plural) | PurviewLabelInfo |
| Schema name | `purviewlabelinfo` |
| Entity set (Web API) | `purviewlabelinfos` |
| Primary id attribute | `purviewlabelinfoid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/purviewlabelinfos?$select=name&$top=10
GET /api/data/v9.2/purviewlabelinfos(<guid>)
POST /api/data/v9.2/purviewlabelinfos
PATCH /api/data/v9.2/purviewlabelinfos(<guid>)
DELETE /api/data/v9.2/purviewlabelinfos(<guid>)
```

## Attributes

Writable: **27** · Read-only: **8**

### Writable

`applicableto`, `applicationmode`, `color`, `contentformats`, `defaultsublabelid`, `description`, `hasprotection`, `importsequencenumber`, `isactive`, `isapplicable`, `isdataverseprotected`, `isdefault`, `isenabled`, `isendpointprotectionenabled`, `isparent`, `issmimeencryptenabled`, `issmimesignenabled`, `name`, `overriddencreatedon`, `parentlabelid`, `priority`, `purviewlabelinfoid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `tooltip`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `purviewlabelinfo_purviewlabelinfo` | [purviewlabelinfo](purviewlabelinfo.md) | `parentlabelid` | `ParentLabelId` |
| `lk_purviewlabelinfo_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_purviewlabelinfo_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_purviewlabelinfo_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_purviewlabelinfo_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_purviewlabelinfo` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `purviewlabelinfo_purviewlabelinfo` | [purviewlabelinfo](purviewlabelinfo.md) | `parentlabelid` | `ParentLabelId` |
| `purviewlabelinfo_SyncErrors` | [purviewlabelinfo](purviewlabelinfo.md) | `regardingobjectid` | `regardingobjectid_purviewlabelinfo` |
| `purviewlabelinfo_DuplicateMatchingRecord` | [purviewlabelinfo](purviewlabelinfo.md) | `duplicaterecordid` | `duplicaterecordid_purviewlabelinfo` |
| `purviewlabelinfo_DuplicateBaseRecord` | [purviewlabelinfo](purviewlabelinfo.md) | `baserecordid` | `baserecordid_purviewlabelinfo` |
| `purviewlabelinfo_AsyncOperations` | [purviewlabelinfo](purviewlabelinfo.md) | `regardingobjectid` | `regardingobjectid_purviewlabelinfo` |
| `purviewlabelinfo_MailboxTrackingFolders` | [purviewlabelinfo](purviewlabelinfo.md) | `regardingobjectid` | `regardingobjectid_purviewlabelinfo` |
| `purviewlabelinfo_UserEntityInstanceDatas` | [purviewlabelinfo](purviewlabelinfo.md) | `objectid` | `objectid_purviewlabelinfo` |
| `purviewlabelinfo_ProcessSession` | [purviewlabelinfo](purviewlabelinfo.md) | `regardingobjectid` | `regardingobjectid_purviewlabelinfo` |
| `purviewlabelinfo_BulkDeleteFailures` | [purviewlabelinfo](purviewlabelinfo.md) | `regardingobjectid` | `regardingobjectid_purviewlabelinfo` |
| `purviewlabelinfo_PrincipalObjectAttributeAccesses` | [purviewlabelinfo](purviewlabelinfo.md) | `objectid` | `objectid_purviewlabelinfo` |


## Source

Generated from [purviewlabelinfo (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='purviewlabelinfo')) on 2026-05-07.