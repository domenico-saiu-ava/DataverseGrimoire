---
logical: "msdyn_ocliveworkitemcontextitem"
display: "Valore elemento di contesto"
entitySetName: "msdyn_ocliveworkitemcontextitems"
primaryId: "msdyn_ocliveworkitemcontextitemid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Valore elemento di contesto

Archivia i valori elementi di contesto per un impegno.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocliveworkitemcontextitem` |
| Display name | Valore elemento di contesto |
| Display (plural) | Valori elementi di contesto |
| Schema name | `msdyn_ocliveworkitemcontextitem` |
| Entity set (Web API) | `msdyn_ocliveworkitemcontextitems` |
| Primary id attribute | `msdyn_ocliveworkitemcontextitemid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocliveworkitemcontextitems?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocliveworkitemcontextitems(<guid>)
POST /api/data/v9.2/msdyn_ocliveworkitemcontextitems
PATCH /api/data/v9.2/msdyn_ocliveworkitemcontextitems(<guid>)
DELETE /api/data/v9.2/msdyn_ocliveworkitemcontextitems(<guid>)
```

## Attributes

Writable: **14** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_datatype`, `msdyn_isdisplayable`, `msdyn_name`, `msdyn_ocliveworkitemcontextitemid`, `msdyn_ocliveworkitemid`, `msdyn_ocliveworkstreamcontextvariableid`, `msdyn_value`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_ocliveworkitemcontextitem_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocliveworkitemcontextitem_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocliveworkitemcontextitem_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocliveworkitemcontextitem_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_ocliveworkitemcontextitem` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_ocliveworkitemcontextitem` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_ocliveworkitemcontextitem` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_ocliveworkitemcontextitem` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_lwscv_msdyn_ocliveworkitemcontextitem_ocliveworkstreamcontextvariableid` | [msdyn_ocliveworkstreamcontextvariable](msdyn_ocliveworkstreamcontextvariable.md) | `msdyn_ocliveworkstreamcontextvariableid` | `msdyn_ocliveworkstreamcontextvariableid` |
| `msdyn_msdyn_ocliveworkitem_msdyn_ocliveworkitemcontextitem_ocliveworkitemid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_ocliveworkitemid` | `msdyn_ocliveworkitemid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocliveworkitemcontextitem_SyncErrors` | [msdyn_ocliveworkitemcontextitem](msdyn_ocliveworkitemcontextitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkitemcontextitem` |
| `msdyn_ocliveworkitemcontextitem_DuplicateMatchingRecord` | [msdyn_ocliveworkitemcontextitem](msdyn_ocliveworkitemcontextitem.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_ocliveworkitemcontextitem` |
| `msdyn_ocliveworkitemcontextitem_DuplicateBaseRecord` | [msdyn_ocliveworkitemcontextitem](msdyn_ocliveworkitemcontextitem.md) | `baserecordid` | `baserecordid_msdyn_ocliveworkitemcontextitem` |
| `msdyn_ocliveworkitemcontextitem_AsyncOperations` | [msdyn_ocliveworkitemcontextitem](msdyn_ocliveworkitemcontextitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkitemcontextitem` |
| `msdyn_ocliveworkitemcontextitem_MailboxTrackingFolders` | [msdyn_ocliveworkitemcontextitem](msdyn_ocliveworkitemcontextitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkitemcontextitem` |
| `msdyn_ocliveworkitemcontextitem_UserEntityInstanceDatas` | [msdyn_ocliveworkitemcontextitem](msdyn_ocliveworkitemcontextitem.md) | `objectid` | `objectid_msdyn_ocliveworkitemcontextitem` |
| `msdyn_ocliveworkitemcontextitem_ProcessSession` | [msdyn_ocliveworkitemcontextitem](msdyn_ocliveworkitemcontextitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkitemcontextitem` |
| `msdyn_ocliveworkitemcontextitem_BulkDeleteFailures` | [msdyn_ocliveworkitemcontextitem](msdyn_ocliveworkitemcontextitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkitemcontextitem` |
| `msdyn_ocliveworkitemcontextitem_PrincipalObjectAttributeAccesses` | [msdyn_ocliveworkitemcontextitem](msdyn_ocliveworkitemcontextitem.md) | `objectid` | `objectid_msdyn_ocliveworkitemcontextitem` |


## Source

Generated from [msdyn_ocliveworkitemcontextitem (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ocliveworkitemcontextitem')) on 2026-05-07.