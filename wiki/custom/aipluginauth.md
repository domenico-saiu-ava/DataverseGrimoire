---
logical: "aipluginauth"
display: "AIPluginAuth"
entitySetName: "aipluginauths"
primaryId: "aipluginauthid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# AIPluginAuth

Entity to store AIPlugin Auth Information

## Identity

| Property | Value |
| --- | --- |
| Logical name | `aipluginauth` |
| Display name | AIPluginAuth |
| Display (plural) | AIPluginAuths |
| Schema name | `AIPluginAuth` |
| Entity set (Web API) | `aipluginauths` |
| Primary id attribute | `aipluginauthid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/aipluginauths?$select=name&$top=10
GET /api/data/v9.2/aipluginauths(<guid>)
POST /api/data/v9.2/aipluginauths
PATCH /api/data/v9.2/aipluginauths(<guid>)
DELETE /api/data/v9.2/aipluginauths(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`aipluginauthid`, `authreferenceid`, `authtype`, `importsequencenumber`, `name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_aipluginauth_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_aipluginauth_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_aipluginauth_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_aipluginauth_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_aipluginauth` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_aipluginauth` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_aipluginauth` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_aipluginauth` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `aipluginauth_SyncErrors` | [aipluginauth](aipluginauth.md) | `regardingobjectid` | `regardingobjectid_aipluginauth` |
| `aipluginauth_DuplicateMatchingRecord` | [aipluginauth](aipluginauth.md) | `duplicaterecordid` | `duplicaterecordid_aipluginauth` |
| `aipluginauth_DuplicateBaseRecord` | [aipluginauth](aipluginauth.md) | `baserecordid` | `baserecordid_aipluginauth` |
| `aipluginauth_AsyncOperations` | [aipluginauth](aipluginauth.md) | `regardingobjectid` | `regardingobjectid_aipluginauth` |
| `aipluginauth_MailboxTrackingFolders` | [aipluginauth](aipluginauth.md) | `regardingobjectid` | `regardingobjectid_aipluginauth` |
| `aipluginauth_UserEntityInstanceDatas` | [aipluginauth](aipluginauth.md) | `objectid` | `objectid_aipluginauth` |
| `aipluginauth_ProcessSession` | [aipluginauth](aipluginauth.md) | `regardingobjectid` | `regardingobjectid_aipluginauth` |
| `aipluginauth_BulkDeleteFailures` | [aipluginauth](aipluginauth.md) | `regardingobjectid` | `regardingobjectid_aipluginauth` |
| `aipluginauth_PrincipalObjectAttributeAccesses` | [aipluginauth](aipluginauth.md) | `objectid` | `objectid_aipluginauth` |
| `AIPluginAuth_AIPlugin` | [aipluginauth](aipluginauth.md) | `pluginauthid` | `AIPluginAuth` |


## Source

Generated from [aipluginauth (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='aipluginauth')) on 2026-05-07.