---
logical: "dvtablesearchentity"
display: "DVTableSearchEntity"
entitySetName: "dvtablesearchentities"
primaryId: "dvtablesearchentityid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# DVTableSearchEntity

DVTableSearchEntities component

## Identity

| Property | Value |
| --- | --- |
| Logical name | `dvtablesearchentity` |
| Display name | DVTableSearchEntity |
| Display (plural) | DVTableSearchEntities |
| Schema name | `DVTableSearchEntity` |
| Entity set (Web API) | `dvtablesearchentities` |
| Primary id attribute | `dvtablesearchentityid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/dvtablesearchentities?$select=name&$top=10
GET /api/data/v9.2/dvtablesearchentities(<guid>)
POST /api/data/v9.2/dvtablesearchentities
PATCH /api/data/v9.2/dvtablesearchentities(<guid>)
DELETE /api/data/v9.2/dvtablesearchentities(<guid>)
```

## Attributes

Writable: **14** · Read-only: **16**

### Writable

`dvtablesearch`, `dvtablesearchentityid`, `entity`, `entitylogicalname`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `unstructuredfilesearchentityid`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_dvtablesearchentity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_dvtablesearchentity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_dvtablesearchentity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_dvtablesearchentity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_dvtablesearchentity` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_dvtablesearchentity` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_dvtablesearchentity` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_dvtablesearchentity` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `DVTableSearch_DVTableSearch_DVTableSearch` | [dvtablesearch](dvtablesearch.md) | `dvtablesearch` | `DVTableSearch` |
| `DVTableSearchEntity_Entity_Entity` | [entity](entity.md) | `entity` | `Entity` |
| `dvtablesearchentity_unstructuredfilesearchentity_unstructuredfilesearchentityId` | [unstructuredfilesearchentity](unstructuredfilesearchentity.md) | `unstructuredfilesearchentityid` | `unstructuredfilesearchentityId` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `CopilotSynonyms_DVTableSearchEntity` | [dvtablesearchentity](dvtablesearchentity.md) | `skillentity` | `skillentity` |
| `dvtablesearchentity_SyncErrors` | [dvtablesearchentity](dvtablesearchentity.md) | `regardingobjectid` | `regardingobjectid_dvtablesearchentity` |
| `dvtablesearchentity_AsyncOperations` | [dvtablesearchentity](dvtablesearchentity.md) | `regardingobjectid` | `regardingobjectid_dvtablesearchentity` |
| `dvtablesearchentity_MailboxTrackingFolders` | [dvtablesearchentity](dvtablesearchentity.md) | `regardingobjectid` | `regardingobjectid_dvtablesearchentity` |
| `dvtablesearchentity_UserEntityInstanceDatas` | [dvtablesearchentity](dvtablesearchentity.md) | `objectid` | `objectid_dvtablesearchentity` |
| `dvtablesearchentity_ProcessSession` | [dvtablesearchentity](dvtablesearchentity.md) | `regardingobjectid` | `regardingobjectid_dvtablesearchentity` |
| `dvtablesearchentity_BulkDeleteFailures` | [dvtablesearchentity](dvtablesearchentity.md) | `regardingobjectid` | `regardingobjectid_dvtablesearchentity` |
| `dvtablesearchentity_PrincipalObjectAttributeAccesses` | [dvtablesearchentity](dvtablesearchentity.md) | `objectid` | `objectid_dvtablesearchentity` |
| `DVTableSearchEntity_DVTableSearchAttribut` | [dvtablesearchentity](dvtablesearchentity.md) | `dvtablesearchentity` | `dvtablesearchentity` |


## Source

Generated from [dvtablesearchentity (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='dvtablesearchentity')) on 2026-05-07.