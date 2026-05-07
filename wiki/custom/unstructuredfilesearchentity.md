---
logical: "unstructuredfilesearchentity"
display: "UnstructuredFileSearchEntity"
entitySetName: "unstructuredfilesearchentities"
primaryId: "unstructuredfilesearchentityid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# UnstructuredFileSearchEntity

## Identity

| Property | Value |
| --- | --- |
| Logical name | `unstructuredfilesearchentity` |
| Display name | UnstructuredFileSearchEntity |
| Display (plural) | UnstructuredFileSearchEntity |
| Schema name | `unstructuredfilesearchentity` |
| Entity set (Web API) | `unstructuredfilesearchentities` |
| Primary id attribute | `unstructuredfilesearchentityid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/unstructuredfilesearchentities?$select=name&$top=10
GET /api/data/v9.2/unstructuredfilesearchentities(<guid>)
POST /api/data/v9.2/unstructuredfilesearchentities
PATCH /api/data/v9.2/unstructuredfilesearchentities(<guid>)
DELETE /api/data/v9.2/unstructuredfilesearchentities(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `knowledgesource`, `name`, `overriddencreatedon`, `ownerid`, `sourceurl`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `unstructuredfilesearchentityid`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_unstructuredfilesearchentity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_unstructuredfilesearchentity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_unstructuredfilesearchentity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_unstructuredfilesearchentity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_unstructuredfilesearchentity` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_unstructuredfilesearchentity` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_unstructuredfilesearchentity` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_unstructuredfilesearchentity` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `unstructuredfilesearchentity_SyncErrors` | [unstructuredfilesearchentity](unstructuredfilesearchentity.md) | `regardingobjectid` | `regardingobjectid_unstructuredfilesearchentity` |
| `unstructuredfilesearchentity_DuplicateMatchingRecord` | [unstructuredfilesearchentity](unstructuredfilesearchentity.md) | `duplicaterecordid` | `duplicaterecordid_unstructuredfilesearchentity` |
| `unstructuredfilesearchentity_DuplicateBaseRecord` | [unstructuredfilesearchentity](unstructuredfilesearchentity.md) | `baserecordid` | `baserecordid_unstructuredfilesearchentity` |
| `unstructuredfilesearchentity_AsyncOperations` | [unstructuredfilesearchentity](unstructuredfilesearchentity.md) | `regardingobjectid` | `regardingobjectid_unstructuredfilesearchentity` |
| `unstructuredfilesearchentity_MailboxTrackingFolders` | [unstructuredfilesearchentity](unstructuredfilesearchentity.md) | `regardingobjectid` | `regardingobjectid_unstructuredfilesearchentity` |
| `unstructuredfilesearchentity_UserEntityInstanceDatas` | [unstructuredfilesearchentity](unstructuredfilesearchentity.md) | `objectid` | `objectid_unstructuredfilesearchentity` |
| `unstructuredfilesearchentity_ProcessSession` | [unstructuredfilesearchentity](unstructuredfilesearchentity.md) | `regardingobjectid` | `regardingobjectid_unstructuredfilesearchentity` |
| `unstructuredfilesearchentity_BulkDeleteFailures` | [unstructuredfilesearchentity](unstructuredfilesearchentity.md) | `regardingobjectid` | `regardingobjectid_unstructuredfilesearchentity` |
| `unstructuredfilesearchentity_PrincipalObjectAttributeAccesses` | [unstructuredfilesearchentity](unstructuredfilesearchentity.md) | `objectid` | `objectid_unstructuredfilesearchentity` |
| `unstructuredfilesearchentity_unstructuredfilesearchrecord_UnstructuredFileSearchEntityId` | [unstructuredfilesearchentity](unstructuredfilesearchentity.md) | `unstructuredfilesearchentityid` | `UnstructuredFileSearchEntityId` |
| `dvtablesearchentity_unstructuredfilesearchentity_unstructuredfilesearchentityId` | [unstructuredfilesearchentity](unstructuredfilesearchentity.md) | `unstructuredfilesearchentityid` | `unstructuredfilesearchentityId` |


## Source

Generated from [unstructuredfilesearchentity (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='unstructuredfilesearchentity')) on 2026-05-07.