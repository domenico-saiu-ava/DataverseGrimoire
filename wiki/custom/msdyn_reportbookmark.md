---
logical: "msdyn_reportbookmark"
display: "Segnalibro report"
entitySetName: "msdyn_reportbookmarks"
primaryId: "msdyn_reportbookmarkid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Segnalibro report

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_reportbookmark` |
| Display name | Segnalibro report |
| Display (plural) | Segnalibri report |
| Schema name | `msdyn_reportbookmark` |
| Entity set (Web API) | `msdyn_reportbookmarks` |
| Primary id attribute | `msdyn_reportbookmarkid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_reportbookmarks?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_reportbookmarks(<guid>)
POST /api/data/v9.2/msdyn_reportbookmarks
PATCH /api/data/v9.2/msdyn_reportbookmarks(<guid>)
DELETE /api/data/v9.2/msdyn_reportbookmarks(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_isdefault`, `msdyn_name`, `msdyn_relatedfeatureid`, `msdyn_relatedreportid`, `msdyn_reportbookmarkid`, `msdyn_state`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_reportbookmark_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_reportbookmark_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_reportbookmark_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_reportbookmark_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_reportbookmark` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_reportbookmark` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_reportbookmark` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_reportbookmark` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_reportbookmark_SyncErrors` | [msdyn_reportbookmark](msdyn_reportbookmark.md) | `regardingobjectid` | `regardingobjectid_msdyn_reportbookmark` |
| `msdyn_reportbookmark_DuplicateMatchingRecord` | [msdyn_reportbookmark](msdyn_reportbookmark.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_reportbookmark` |
| `msdyn_reportbookmark_DuplicateBaseRecord` | [msdyn_reportbookmark](msdyn_reportbookmark.md) | `baserecordid` | `baserecordid_msdyn_reportbookmark` |
| `msdyn_reportbookmark_AsyncOperations` | [msdyn_reportbookmark](msdyn_reportbookmark.md) | `regardingobjectid` | `regardingobjectid_msdyn_reportbookmark` |
| `msdyn_reportbookmark_MailboxTrackingFolders` | [msdyn_reportbookmark](msdyn_reportbookmark.md) | `regardingobjectid` | `regardingobjectid_msdyn_reportbookmark` |
| `msdyn_reportbookmark_UserEntityInstanceDatas` | [msdyn_reportbookmark](msdyn_reportbookmark.md) | `objectid` | `objectid_msdyn_reportbookmark` |
| `msdyn_reportbookmark_ProcessSession` | [msdyn_reportbookmark](msdyn_reportbookmark.md) | `regardingobjectid` | `regardingobjectid_msdyn_reportbookmark` |
| `msdyn_reportbookmark_BulkDeleteFailures` | [msdyn_reportbookmark](msdyn_reportbookmark.md) | `regardingobjectid` | `regardingobjectid_msdyn_reportbookmark` |
| `msdyn_reportbookmark_PrincipalObjectAttributeAccesses` | [msdyn_reportbookmark](msdyn_reportbookmark.md) | `objectid` | `objectid_msdyn_reportbookmark` |


## Source

Generated from [msdyn_reportbookmark (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_reportbookmark')) on 2026-05-07.