---
logical: "dvtablesearchattribute"
display: "DVTableSearchAttribute"
entitySetName: "dvtablesearchattributes"
primaryId: "dvtablesearchattributeid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# DVTableSearchAttribute

DVTableSearchAttribute component

## Identity

| Property | Value |
| --- | --- |
| Logical name | `dvtablesearchattribute` |
| Display name | DVTableSearchAttribute |
| Display (plural) | DVTableSearchAttributes |
| Schema name | `DVTableSearchAttribute` |
| Entity set (Web API) | `dvtablesearchattributes` |
| Primary id attribute | `dvtablesearchattributeid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/dvtablesearchattributes?$select=name&$top=10
GET /api/data/v9.2/dvtablesearchattributes(<guid>)
POST /api/data/v9.2/dvtablesearchattributes
PATCH /api/data/v9.2/dvtablesearchattributes(<guid>)
DELETE /api/data/v9.2/dvtablesearchattributes(<guid>)
```

## Attributes

Writable: **16** · Read-only: **16**

### Writable

`attribute`, `attributelogicalname`, `dvtablesearchattributeid`, `dvtablesearchentity`, `importsequencenumber`, `isattributeenabledforvectorsearch`, `iscustomizable`, `isretrievable`, `issearchable`, `name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_dvtablesearchattribute_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_dvtablesearchattribute_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_dvtablesearchattribute_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_dvtablesearchattribute_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_dvtablesearchattribute` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_dvtablesearchattribute` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_dvtablesearchattribute` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_dvtablesearchattribute` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `attribute_dvtablesearchattribute` | [attribute](attribute.md) | `attribute` | `attribute` |
| `DVTableSearchEntity_DVTableSearchAttribut` | [dvtablesearchentity](dvtablesearchentity.md) | `dvtablesearchentity` | `dvtablesearchentity` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `dvtablesearchattribute_SyncErrors` | [dvtablesearchattribute](dvtablesearchattribute.md) | `regardingobjectid` | `regardingobjectid_dvtablesearchattribute` |
| `dvtablesearchattribute_AsyncOperations` | [dvtablesearchattribute](dvtablesearchattribute.md) | `regardingobjectid` | `regardingobjectid_dvtablesearchattribute` |
| `dvtablesearchattribute_MailboxTrackingFolders` | [dvtablesearchattribute](dvtablesearchattribute.md) | `regardingobjectid` | `regardingobjectid_dvtablesearchattribute` |
| `dvtablesearchattribute_UserEntityInstanceDatas` | [dvtablesearchattribute](dvtablesearchattribute.md) | `objectid` | `objectid_dvtablesearchattribute` |
| `dvtablesearchattribute_ProcessSession` | [dvtablesearchattribute](dvtablesearchattribute.md) | `regardingobjectid` | `regardingobjectid_dvtablesearchattribute` |
| `dvtablesearchattribute_BulkDeleteFailures` | [dvtablesearchattribute](dvtablesearchattribute.md) | `regardingobjectid` | `regardingobjectid_dvtablesearchattribute` |
| `dvtablesearchattribute_PrincipalObjectAttributeAccesses` | [dvtablesearchattribute](dvtablesearchattribute.md) | `objectid` | `objectid_dvtablesearchattribute` |


## Source

Generated from [dvtablesearchattribute (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='dvtablesearchattribute')) on 2026-05-07.