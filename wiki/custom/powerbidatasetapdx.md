---
logical: "powerbidatasetapdx"
display: "powerbidatasetapdx"
entitySetName: "powerbidatasetapdxes"
primaryId: "powerbidatasetapdxid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# powerbidatasetapdx

Entità appendice set di dati PowerBI - per attributi tecnici non gestiti

## Identity

| Property | Value |
| --- | --- |
| Logical name | `powerbidatasetapdx` |
| Display name | powerbidatasetapdx |
| Display (plural) | powerbidatasetapdxes |
| Schema name | `powerbidatasetapdx` |
| Entity set (Web API) | `powerbidatasetapdxes` |
| Primary id attribute | `powerbidatasetapdxid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/powerbidatasetapdxes?$select=name&$top=10
GET /api/data/v9.2/powerbidatasetapdxes(<guid>)
POST /api/data/v9.2/powerbidatasetapdxes
PATCH /api/data/v9.2/powerbidatasetapdxes(<guid>)
DELETE /api/data/v9.2/powerbidatasetapdxes(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`artifactobjectid`, `etag`, `importsequencenumber`, `name`, `overriddencreatedon`, `ownerid`, `parentid`, `powerbidatasetapdxid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`, `workspaceobjectid`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_powerbidatasetapdx_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_powerbidatasetapdx_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_powerbidatasetapdx_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_powerbidatasetapdx_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_powerbidatasetapdx` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_powerbidatasetapdx` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_powerbidatasetapdx` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_powerbidatasetapdx` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `powerbidatasetapdx_SyncErrors` | [powerbidatasetapdx](powerbidatasetapdx.md) | `regardingobjectid` | `regardingobjectid_powerbidatasetapdx` |
| `powerbidatasetapdx_DuplicateMatchingRecord` | [powerbidatasetapdx](powerbidatasetapdx.md) | `duplicaterecordid` | `duplicaterecordid_powerbidatasetapdx` |
| `powerbidatasetapdx_DuplicateBaseRecord` | [powerbidatasetapdx](powerbidatasetapdx.md) | `baserecordid` | `baserecordid_powerbidatasetapdx` |
| `powerbidatasetapdx_AsyncOperations` | [powerbidatasetapdx](powerbidatasetapdx.md) | `regardingobjectid` | `regardingobjectid_powerbidatasetapdx` |
| `powerbidatasetapdx_MailboxTrackingFolders` | [powerbidatasetapdx](powerbidatasetapdx.md) | `regardingobjectid` | `regardingobjectid_powerbidatasetapdx` |
| `powerbidatasetapdx_UserEntityInstanceDatas` | [powerbidatasetapdx](powerbidatasetapdx.md) | `objectid` | `objectid_powerbidatasetapdx` |
| `powerbidatasetapdx_ProcessSession` | [powerbidatasetapdx](powerbidatasetapdx.md) | `regardingobjectid` | `regardingobjectid_powerbidatasetapdx` |
| `powerbidatasetapdx_BulkDeleteFailures` | [powerbidatasetapdx](powerbidatasetapdx.md) | `regardingobjectid` | `regardingobjectid_powerbidatasetapdx` |
| `powerbidatasetapdx_PrincipalObjectAttributeAccesses` | [powerbidatasetapdx](powerbidatasetapdx.md) | `objectid` | `objectid_powerbidatasetapdx` |


## Source

Generated from [powerbidatasetapdx (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='powerbidatasetapdx')) on 2026-05-07.