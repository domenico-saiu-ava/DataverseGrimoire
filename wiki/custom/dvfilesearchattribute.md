---
logical: "dvfilesearchattribute"
display: "DVFileSearchAttribute"
entitySetName: "dvfilesearchattributes"
primaryId: "dvfilesearchattributeid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# DVFileSearchAttribute

## Identity

| Property | Value |
| --- | --- |
| Logical name | `dvfilesearchattribute` |
| Display name | DVFileSearchAttribute |
| Display (plural) | DVFileSearchAttributes |
| Schema name | `DVFileSearchAttribute` |
| Entity set (Web API) | `dvfilesearchattributes` |
| Primary id attribute | `dvfilesearchattributeid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/dvfilesearchattributes?$select=name&$top=10
GET /api/data/v9.2/dvfilesearchattributes(<guid>)
POST /api/data/v9.2/dvfilesearchattributes
PATCH /api/data/v9.2/dvfilesearchattributes(<guid>)
DELETE /api/data/v9.2/dvfilesearchattributes(<guid>)
```

## Attributes

Writable: **17** · Read-only: **16**

### Writable

`attribute`, `attributelogicalname`, `dvfilesearchattributeid`, `dvfilesearchentity`, `importsequencenumber`, `iscustomizable`, `isfilterable`, `issearchable`, `isvectorizable`, `name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `uniquename`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_dvfilesearchattribute_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_dvfilesearchattribute_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_dvfilesearchattribute_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_dvfilesearchattribute_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_dvfilesearchattribute` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_dvfilesearchattribute` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_dvfilesearchattribute` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_dvfilesearchattribute` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `attribute_dvfilesearchattribute` | [attribute](attribute.md) | `attribute` | `attribute` |
| `DVFileSearchEntity_DVFileSearchAttribute` | [dvfilesearchentity](dvfilesearchentity.md) | `dvfilesearchentity` | `dvfilesearchentity` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `dvfilesearchattribute_SyncErrors` | [dvfilesearchattribute](dvfilesearchattribute.md) | `regardingobjectid` | `regardingobjectid_dvfilesearchattribute` |
| `dvfilesearchattribute_AsyncOperations` | [dvfilesearchattribute](dvfilesearchattribute.md) | `regardingobjectid` | `regardingobjectid_dvfilesearchattribute` |
| `dvfilesearchattribute_MailboxTrackingFolders` | [dvfilesearchattribute](dvfilesearchattribute.md) | `regardingobjectid` | `regardingobjectid_dvfilesearchattribute` |
| `dvfilesearchattribute_UserEntityInstanceDatas` | [dvfilesearchattribute](dvfilesearchattribute.md) | `objectid` | `objectid_dvfilesearchattribute` |
| `dvfilesearchattribute_ProcessSession` | [dvfilesearchattribute](dvfilesearchattribute.md) | `regardingobjectid` | `regardingobjectid_dvfilesearchattribute` |
| `dvfilesearchattribute_BulkDeleteFailures` | [dvfilesearchattribute](dvfilesearchattribute.md) | `regardingobjectid` | `regardingobjectid_dvfilesearchattribute` |
| `dvfilesearchattribute_PrincipalObjectAttributeAccesses` | [dvfilesearchattribute](dvfilesearchattribute.md) | `objectid` | `objectid_dvfilesearchattribute` |


## Source

Generated from [dvfilesearchattribute (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='dvfilesearchattribute')) on 2026-05-07.