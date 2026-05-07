---
logical: "dvfilesearchentity"
display: "DVFileSearchEntity"
entitySetName: "dvfilesearchentities"
primaryId: "dvfilesearchentityid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# DVFileSearchEntity

DVFileSearchEntities component.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `dvfilesearchentity` |
| Display name | DVFileSearchEntity |
| Display (plural) | DVFileSearchEntities |
| Schema name | `DVFileSearchEntity` |
| Entity set (Web API) | `dvfilesearchentities` |
| Primary id attribute | `dvfilesearchentityid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/dvfilesearchentities?$select=name&$top=10
GET /api/data/v9.2/dvfilesearchentities(<guid>)
POST /api/data/v9.2/dvfilesearchentities
PATCH /api/data/v9.2/dvfilesearchentities(<guid>)
DELETE /api/data/v9.2/dvfilesearchentities(<guid>)
```

## Attributes

Writable: **13** · Read-only: **16**

### Writable

`dvfilesearch`, `dvfilesearchentityid`, `entity`, `entitylogicalname`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_dvfilesearchentity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_dvfilesearchentity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_dvfilesearchentity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_dvfilesearchentity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_dvfilesearchentity` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_dvfilesearchentity` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_dvfilesearchentity` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_dvfilesearchentity` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `DVFileSearch_DVFileSearch_DVFileSearchEnt` | [dvfilesearch](dvfilesearch.md) | `dvfilesearch` | `DVFileSearch` |
| `DVFileSearchEntity_Entity_Entity` | [entity](entity.md) | `entity` | `Entity` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `dvfilesearchentity_SyncErrors` | [dvfilesearchentity](dvfilesearchentity.md) | `regardingobjectid` | `regardingobjectid_dvfilesearchentity` |
| `dvfilesearchentity_AsyncOperations` | [dvfilesearchentity](dvfilesearchentity.md) | `regardingobjectid` | `regardingobjectid_dvfilesearchentity` |
| `dvfilesearchentity_MailboxTrackingFolders` | [dvfilesearchentity](dvfilesearchentity.md) | `regardingobjectid` | `regardingobjectid_dvfilesearchentity` |
| `dvfilesearchentity_UserEntityInstanceDatas` | [dvfilesearchentity](dvfilesearchentity.md) | `objectid` | `objectid_dvfilesearchentity` |
| `dvfilesearchentity_ProcessSession` | [dvfilesearchentity](dvfilesearchentity.md) | `regardingobjectid` | `regardingobjectid_dvfilesearchentity` |
| `dvfilesearchentity_BulkDeleteFailures` | [dvfilesearchentity](dvfilesearchentity.md) | `regardingobjectid` | `regardingobjectid_dvfilesearchentity` |
| `dvfilesearchentity_PrincipalObjectAttributeAccesses` | [dvfilesearchentity](dvfilesearchentity.md) | `objectid` | `objectid_dvfilesearchentity` |
| `DVFileSearchEntity_DVFileSearchAttribute` | [dvfilesearchentity](dvfilesearchentity.md) | `dvfilesearchentity` | `dvfilesearchentity` |


## Source

Generated from [dvfilesearchentity (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='dvfilesearchentity')) on 2026-05-07.