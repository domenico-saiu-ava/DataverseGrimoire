---
logical: "powerbireportapdx"
display: "powerbireportapdx"
entitySetName: "powerbireportapdxes"
primaryId: "powerbireportapdxid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# powerbireportapdx

Entità appendice report PowerBI per attributi tecnici non gestiti

## Identity

| Property | Value |
| --- | --- |
| Logical name | `powerbireportapdx` |
| Display name | powerbireportapdx |
| Display (plural) | powerbireportapdxes |
| Schema name | `powerbireportapdx` |
| Entity set (Web API) | `powerbireportapdxes` |
| Primary id attribute | `powerbireportapdxid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/powerbireportapdxes?$select=name&$top=10
GET /api/data/v9.2/powerbireportapdxes(<guid>)
POST /api/data/v9.2/powerbireportapdxes
PATCH /api/data/v9.2/powerbireportapdxes(<guid>)
DELETE /api/data/v9.2/powerbireportapdxes(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`artifactobjectid`, `etag`, `importsequencenumber`, `name`, `overriddencreatedon`, `ownerid`, `parentid`, `powerbireportapdxid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`, `workspaceobjectid`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_powerbireportapdx_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_powerbireportapdx_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_powerbireportapdx_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_powerbireportapdx_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_powerbireportapdx` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_powerbireportapdx` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_powerbireportapdx` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_powerbireportapdx` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `powerbireportapdx_SyncErrors` | [powerbireportapdx](powerbireportapdx.md) | `regardingobjectid` | `regardingobjectid_powerbireportapdx` |
| `powerbireportapdx_DuplicateMatchingRecord` | [powerbireportapdx](powerbireportapdx.md) | `duplicaterecordid` | `duplicaterecordid_powerbireportapdx` |
| `powerbireportapdx_DuplicateBaseRecord` | [powerbireportapdx](powerbireportapdx.md) | `baserecordid` | `baserecordid_powerbireportapdx` |
| `powerbireportapdx_AsyncOperations` | [powerbireportapdx](powerbireportapdx.md) | `regardingobjectid` | `regardingobjectid_powerbireportapdx` |
| `powerbireportapdx_MailboxTrackingFolders` | [powerbireportapdx](powerbireportapdx.md) | `regardingobjectid` | `regardingobjectid_powerbireportapdx` |
| `powerbireportapdx_UserEntityInstanceDatas` | [powerbireportapdx](powerbireportapdx.md) | `objectid` | `objectid_powerbireportapdx` |
| `powerbireportapdx_ProcessSession` | [powerbireportapdx](powerbireportapdx.md) | `regardingobjectid` | `regardingobjectid_powerbireportapdx` |
| `powerbireportapdx_BulkDeleteFailures` | [powerbireportapdx](powerbireportapdx.md) | `regardingobjectid` | `regardingobjectid_powerbireportapdx` |
| `powerbireportapdx_PrincipalObjectAttributeAccesses` | [powerbireportapdx](powerbireportapdx.md) | `objectid` | `objectid_powerbireportapdx` |


## Source

Generated from [powerbireportapdx (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='powerbireportapdx')) on 2026-05-07.