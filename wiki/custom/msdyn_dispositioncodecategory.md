---
logical: "msdyn_dispositioncodecategory"
display: "Categoria di codice smaltimento"
entitySetName: "msdyn_dispositioncodecategories"
primaryId: "msdyn_dispositioncodecategoryid"
primaryName: "msdyn_categoryname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Categoria di codice smaltimento

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dispositioncodecategory` |
| Display name | Categoria di codice smaltimento |
| Display (plural) | Categorie di codice smaltimento |
| Schema name | `msdyn_dispositioncodecategory` |
| Entity set (Web API) | `msdyn_dispositioncodecategories` |
| Primary id attribute | `msdyn_dispositioncodecategoryid` |
| Primary name attribute | `msdyn_categoryname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dispositioncodecategories?$select=msdyn_categoryname&$top=10
GET /api/data/v9.2/msdyn_dispositioncodecategories(<guid>)
POST /api/data/v9.2/msdyn_dispositioncodecategories
PATCH /api/data/v9.2/msdyn_dispositioncodecategories(<guid>)
DELETE /api/data/v9.2/msdyn_dispositioncodecategories(<guid>)
```

## Attributes

Writable: **10** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_categoryname`, `msdyn_dispositioncodecategoryid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dispositioncodecategory_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dispositioncodecategory_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dispositioncodecategory_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dispositioncodecategory_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_dispositioncodecategory` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_dispositioncodecategory` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_dispositioncodecategory` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_dispositioncodecategory` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dispositioncodecategory_SyncErrors` | [msdyn_dispositioncodecategory](msdyn_dispositioncodecategory.md) | `regardingobjectid` | `regardingobjectid_msdyn_dispositioncodecategory` |
| `msdyn_dispositioncodecategory_AsyncOperations` | [msdyn_dispositioncodecategory](msdyn_dispositioncodecategory.md) | `regardingobjectid` | `regardingobjectid_msdyn_dispositioncodecategory` |
| `msdyn_dispositioncodecategory_MailboxTrackingFolders` | [msdyn_dispositioncodecategory](msdyn_dispositioncodecategory.md) | `regardingobjectid` | `regardingobjectid_msdyn_dispositioncodecategory` |
| `msdyn_dispositioncodecategory_UserEntityInstanceDatas` | [msdyn_dispositioncodecategory](msdyn_dispositioncodecategory.md) | `objectid` | `objectid_msdyn_dispositioncodecategory` |
| `msdyn_dispositioncodecategory_ProcessSession` | [msdyn_dispositioncodecategory](msdyn_dispositioncodecategory.md) | `regardingobjectid` | `regardingobjectid_msdyn_dispositioncodecategory` |
| `msdyn_dispositioncodecategory_BulkDeleteFailures` | [msdyn_dispositioncodecategory](msdyn_dispositioncodecategory.md) | `regardingobjectid` | `regardingobjectid_msdyn_dispositioncodecategory` |
| `msdyn_dispositioncodecategory_PrincipalObjectAttributeAccesses` | [msdyn_dispositioncodecategory](msdyn_dispositioncodecategory.md) | `objectid` | `objectid_msdyn_dispositioncodecategory` |
| `msdyn_ocdispositioncode_dispositioncodecategoryid_msdyn_dispositioncodecategory` | [msdyn_dispositioncodecategory](msdyn_dispositioncodecategory.md) | `msdyn_dispositioncodecategoryid` | `msdyn_dispositioncodecategoryid` |


## Source

Generated from [msdyn_dispositioncodecategory (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_dispositioncodecategory')) on 2026-05-07.