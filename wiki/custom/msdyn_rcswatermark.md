---
logical: "msdyn_rcswatermark"
display: "RCS Watermark"
entitySetName: "msdyn_rcswatermarks"
primaryId: "msdyn_rcswatermarkid"
primaryName: "msdyn_ownerid"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# RCS Watermark

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_rcswatermark` |
| Display name | RCS Watermark |
| Display (plural) | RCS Watermarks |
| Schema name | `msdyn_RCSWatermark` |
| Entity set (Web API) | `msdyn_rcswatermarks` |
| Primary id attribute | `msdyn_rcswatermarkid` |
| Primary name attribute | `msdyn_ownerid` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_rcswatermarks?$select=msdyn_ownerid&$top=10
GET /api/data/v9.2/msdyn_rcswatermarks(<guid>)
POST /api/data/v9.2/msdyn_rcswatermarks
PATCH /api/data/v9.2/msdyn_rcswatermarks(<guid>)
DELETE /api/data/v9.2/msdyn_rcswatermarks(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_ownerid`, `msdyn_rcswatermarkid`, `msdyn_sourcetype`, `msdyn_watermark`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_rcswatermark_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_rcswatermark_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_rcswatermark_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_rcswatermark_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_rcswatermark` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_rcswatermark` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_rcswatermark` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_rcswatermark` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_rcswatermark_SyncErrors` | [msdyn_rcswatermark](msdyn_rcswatermark.md) | `regardingobjectid` | `regardingobjectid_msdyn_rcswatermark` |
| `msdyn_rcswatermark_AsyncOperations` | [msdyn_rcswatermark](msdyn_rcswatermark.md) | `regardingobjectid` | `regardingobjectid_msdyn_rcswatermark` |
| `msdyn_rcswatermark_MailboxTrackingFolders` | [msdyn_rcswatermark](msdyn_rcswatermark.md) | `regardingobjectid` | `regardingobjectid_msdyn_rcswatermark` |
| `msdyn_rcswatermark_UserEntityInstanceDatas` | [msdyn_rcswatermark](msdyn_rcswatermark.md) | `objectid` | `objectid_msdyn_rcswatermark` |
| `msdyn_rcswatermark_ProcessSession` | [msdyn_rcswatermark](msdyn_rcswatermark.md) | `regardingobjectid` | `regardingobjectid_msdyn_rcswatermark` |
| `msdyn_rcswatermark_BulkDeleteFailures` | [msdyn_rcswatermark](msdyn_rcswatermark.md) | `regardingobjectid` | `regardingobjectid_msdyn_rcswatermark` |
| `msdyn_rcswatermark_PrincipalObjectAttributeAccesses` | [msdyn_rcswatermark](msdyn_rcswatermark.md) | `objectid` | `objectid_msdyn_rcswatermark` |


## Source

Generated from [msdyn_rcswatermark (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_rcswatermark')) on 2026-05-07.