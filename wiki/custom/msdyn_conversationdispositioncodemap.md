---
logical: "msdyn_conversationdispositioncodemap"
display: "Mapping codici smaltimento conversazione"
entitySetName: "msdyn_conversationdispositioncodemaps"
primaryId: "msdyn_conversationdispositioncodemapid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Mapping codici smaltimento conversazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_conversationdispositioncodemap` |
| Display name | Mapping codici smaltimento conversazione |
| Display (plural) | Mapping codici smaltimento conversazione |
| Schema name | `msdyn_conversationdispositioncodemap` |
| Entity set (Web API) | `msdyn_conversationdispositioncodemaps` |
| Primary id attribute | `msdyn_conversationdispositioncodemapid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_conversationdispositioncodemaps?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_conversationdispositioncodemaps(<guid>)
POST /api/data/v9.2/msdyn_conversationdispositioncodemaps
PATCH /api/data/v9.2/msdyn_conversationdispositioncodemaps(<guid>)
DELETE /api/data/v9.2/msdyn_conversationdispositioncodemaps(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_conversationdispositioncodemapid`, `msdyn_dispositioncodevalue`, `msdyn_name`, `msdyn_ocdispositioncodeid`, `msdyn_ocliveworkitemid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_conversationdispositioncodemap_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationdispositioncodemap_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationdispositioncodemap_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationdispositioncodemap_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_conversationdispositioncodemap` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_conversationdispositioncodemap` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_conversationdispositioncodemap` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_conversationdispositioncodemap` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_conversationdispositioncodemap_ocliveworkitem` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_ocliveworkitemid` | `msdyn_ocliveworkitemid` |
| `msdyn_conversationdispositioncodemap_ocdispositioncode` | [msdyn_ocdispositioncode](msdyn_ocdispositioncode.md) | `msdyn_ocdispositioncodeid` | `msdyn_ocdispositioncodeid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationdispositioncodemap_SyncErrors` | [msdyn_conversationdispositioncodemap](msdyn_conversationdispositioncodemap.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationdispositioncodemap` |
| `msdyn_conversationdispositioncodemap_DuplicateMatchingRecord` | [msdyn_conversationdispositioncodemap](msdyn_conversationdispositioncodemap.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_conversationdispositioncodemap` |
| `msdyn_conversationdispositioncodemap_DuplicateBaseRecord` | [msdyn_conversationdispositioncodemap](msdyn_conversationdispositioncodemap.md) | `baserecordid` | `baserecordid_msdyn_conversationdispositioncodemap` |
| `msdyn_conversationdispositioncodemap_AsyncOperations` | [msdyn_conversationdispositioncodemap](msdyn_conversationdispositioncodemap.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationdispositioncodemap` |
| `msdyn_conversationdispositioncodemap_MailboxTrackingFolders` | [msdyn_conversationdispositioncodemap](msdyn_conversationdispositioncodemap.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationdispositioncodemap` |
| `msdyn_conversationdispositioncodemap_UserEntityInstanceDatas` | [msdyn_conversationdispositioncodemap](msdyn_conversationdispositioncodemap.md) | `objectid` | `objectid_msdyn_conversationdispositioncodemap` |
| `msdyn_conversationdispositioncodemap_ProcessSession` | [msdyn_conversationdispositioncodemap](msdyn_conversationdispositioncodemap.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationdispositioncodemap` |
| `msdyn_conversationdispositioncodemap_BulkDeleteFailures` | [msdyn_conversationdispositioncodemap](msdyn_conversationdispositioncodemap.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationdispositioncodemap` |
| `msdyn_conversationdispositioncodemap_PrincipalObjectAttributeAccesses` | [msdyn_conversationdispositioncodemap](msdyn_conversationdispositioncodemap.md) | `objectid` | `objectid_msdyn_conversationdispositioncodemap` |


## Source

Generated from [msdyn_conversationdispositioncodemap (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_conversationdispositioncodemap')) on 2026-05-07.