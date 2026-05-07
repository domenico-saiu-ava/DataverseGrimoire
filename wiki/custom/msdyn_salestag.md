---
logical: "msdyn_salestag"
display: "Tag Vendite"
entitySetName: "msdyn_salestags"
primaryId: "msdyn_salestagid"
primaryName: "msdyn_tagname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Tag Vendite

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salestag` |
| Display name | Tag Vendite |
| Display (plural) | Tag Vendite |
| Schema name | `msdyn_salestag` |
| Entity set (Web API) | `msdyn_salestags` |
| Primary id attribute | `msdyn_salestagid` |
| Primary name attribute | `msdyn_tagname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salestags?$select=msdyn_tagname&$top=10
GET /api/data/v9.2/msdyn_salestags(<guid>)
POST /api/data/v9.2/msdyn_salestags
PATCH /api/data/v9.2/msdyn_salestags(<guid>)
DELETE /api/data/v9.2/msdyn_salestags(<guid>)
```

## Attributes

Writable: **13** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_hierarchy`, `msdyn_parenttag`, `msdyn_salestagid`, `msdyn_tagfullname`, `msdyn_tagname`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_salestag_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salestag_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salestag_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salestag_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_salestag` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_salestag` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_salestag` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_salestag` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_salestag_msdyn_salestag_ParentTag` | [msdyn_salestag](msdyn_salestag.md) | `msdyn_parenttag` | `msdyn_ParentTag` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salestag_SyncErrors` | [msdyn_salestag](msdyn_salestag.md) | `regardingobjectid` | `regardingobjectid_msdyn_salestag` |
| `msdyn_salestag_DuplicateMatchingRecord` | [msdyn_salestag](msdyn_salestag.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_salestag` |
| `msdyn_salestag_DuplicateBaseRecord` | [msdyn_salestag](msdyn_salestag.md) | `baserecordid` | `baserecordid_msdyn_salestag` |
| `msdyn_salestag_AsyncOperations` | [msdyn_salestag](msdyn_salestag.md) | `regardingobjectid` | `regardingobjectid_msdyn_salestag` |
| `msdyn_salestag_MailboxTrackingFolders` | [msdyn_salestag](msdyn_salestag.md) | `regardingobjectid` | `regardingobjectid_msdyn_salestag` |
| `msdyn_salestag_UserEntityInstanceDatas` | [msdyn_salestag](msdyn_salestag.md) | `objectid` | `objectid_msdyn_salestag` |
| `msdyn_salestag_ProcessSession` | [msdyn_salestag](msdyn_salestag.md) | `regardingobjectid` | `regardingobjectid_msdyn_salestag` |
| `msdyn_salestag_BulkDeleteFailures` | [msdyn_salestag](msdyn_salestag.md) | `regardingobjectid` | `regardingobjectid_msdyn_salestag` |
| `msdyn_salestag_PrincipalObjectAttributeAccesses` | [msdyn_salestag](msdyn_salestag.md) | `objectid` | `objectid_msdyn_salestag` |
| `msdyn_salestag_msdyn_salestag_ParentTag` | [msdyn_salestag](msdyn_salestag.md) | `msdyn_parenttag` | `msdyn_ParentTag` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salestag_msdyn_sequence` | [msdyn_sequence](msdyn_sequence.md) | _n/a_ | `msdyn_salestag_msdyn_sequence` |

## Source

Generated from [msdyn_salestag (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_salestag')) on 2026-05-07.