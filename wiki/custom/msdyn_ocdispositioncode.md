---
logical: "msdyn_ocdispositioncode"
display: "Codice smaltimento multicanale"
entitySetName: "msdyn_ocdispositioncodes"
primaryId: "msdyn_ocdispositioncodeid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Codice smaltimento multicanale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocdispositioncode` |
| Display name | Codice smaltimento multicanale |
| Display (plural) | Codici smaltimento multicanale |
| Schema name | `msdyn_ocdispositioncode` |
| Entity set (Web API) | `msdyn_ocdispositioncodes` |
| Primary id attribute | `msdyn_ocdispositioncodeid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocdispositioncodes?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocdispositioncodes(<guid>)
POST /api/data/v9.2/msdyn_ocdispositioncodes
PATCH /api/data/v9.2/msdyn_ocdispositioncodes(<guid>)
DELETE /api/data/v9.2/msdyn_ocdispositioncodes(<guid>)
```

## Attributes

Writable: **14** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_appliestoallworkstreams`, `msdyn_dispositioncodecategoryid`, `msdyn_dispositioncodevalue`, `msdyn_languageid`, `msdyn_name`, `msdyn_ocdispositioncodeid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_ocdispositioncode_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocdispositioncode_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocdispositioncode_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocdispositioncode_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_ocdispositioncode` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_ocdispositioncode` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_ocdispositioncode` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_ocdispositioncode` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_ocdispositioncode_languageid_msdyn_oclanguage` | [msdyn_oclanguage](msdyn_oclanguage.md) | `msdyn_languageid` | `msdyn_languageid` |
| `msdyn_ocdispositioncode_dispositioncodecategoryid_msdyn_dispositioncodecategory` | [msdyn_dispositioncodecategory](msdyn_dispositioncodecategory.md) | `msdyn_dispositioncodecategoryid` | `msdyn_dispositioncodecategoryid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocdispositioncode_SyncErrors` | [msdyn_ocdispositioncode](msdyn_ocdispositioncode.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocdispositioncode` |
| `msdyn_ocdispositioncode_DuplicateMatchingRecord` | [msdyn_ocdispositioncode](msdyn_ocdispositioncode.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_ocdispositioncode` |
| `msdyn_ocdispositioncode_DuplicateBaseRecord` | [msdyn_ocdispositioncode](msdyn_ocdispositioncode.md) | `baserecordid` | `baserecordid_msdyn_ocdispositioncode` |
| `msdyn_ocdispositioncode_AsyncOperations` | [msdyn_ocdispositioncode](msdyn_ocdispositioncode.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocdispositioncode` |
| `msdyn_ocdispositioncode_MailboxTrackingFolders` | [msdyn_ocdispositioncode](msdyn_ocdispositioncode.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocdispositioncode` |
| `msdyn_ocdispositioncode_UserEntityInstanceDatas` | [msdyn_ocdispositioncode](msdyn_ocdispositioncode.md) | `objectid` | `objectid_msdyn_ocdispositioncode` |
| `msdyn_ocdispositioncode_ProcessSession` | [msdyn_ocdispositioncode](msdyn_ocdispositioncode.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocdispositioncode` |
| `msdyn_ocdispositioncode_BulkDeleteFailures` | [msdyn_ocdispositioncode](msdyn_ocdispositioncode.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocdispositioncode` |
| `msdyn_ocdispositioncode_PrincipalObjectAttributeAccesses` | [msdyn_ocdispositioncode](msdyn_ocdispositioncode.md) | `objectid` | `objectid_msdyn_ocdispositioncode` |
| `msdyn_conversationdispositioncodemap_ocdispositioncode` | [msdyn_ocdispositioncode](msdyn_ocdispositioncode.md) | `msdyn_ocdispositioncodeid` | `msdyn_ocdispositioncodeid` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocdispositioncode_liveworkstream_msdyn_liveworkstream` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | _n/a_ | `msdyn_ocdispositioncode_liveworkstream_msdyn_liveworkstream` |

## Source

Generated from [msdyn_ocdispositioncode (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ocdispositioncode')) on 2026-05-07.