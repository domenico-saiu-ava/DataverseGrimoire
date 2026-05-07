---
logical: "msdyn_formmapping"
display: "Mapping moduli"
entitySetName: "msdyn_formmappings"
primaryId: "msdyn_formmappingid"
primaryName: "msdyn_formname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Mapping moduli

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_formmapping` |
| Display name | Mapping moduli |
| Display (plural) | Mapping moduli |
| Schema name | `msdyn_FormMapping` |
| Entity set (Web API) | `msdyn_formmappings` |
| Primary id attribute | `msdyn_formmappingid` |
| Primary name attribute | `msdyn_formname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_formmappings?$select=msdyn_formname&$top=10
GET /api/data/v9.2/msdyn_formmappings(<guid>)
POST /api/data/v9.2/msdyn_formmappings
PATCH /api/data/v9.2/msdyn_formmappings(<guid>)
DELETE /api/data/v9.2/msdyn_formmappings(<guid>)
```

## Attributes

Writable: **17** · Read-only: **16**

### Writable

`allowedoperations`, `baseentity`, `cardid`, `customapiid`, `importsequencenumber`, `iscustomizable`, `msdyn_context`, `msdyn_formmappingid`, `msdyn_formname`, `msdyn_requestedcolumns`, `operation`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_formmapping_cardid` | [card](card.md) | `cardid` | `cardid` |
| `lk_msdyn_formmapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_formmapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_formmapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_formmapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_formmapping` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_formmapping` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_formmapping` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_formmapping` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_formmapping_customapiid` | [customapi](customapi.md) | `customapiid` | `customapiid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_formmapping_SyncErrors` | [msdyn_formmapping](msdyn_formmapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_formmapping` |
| `msdyn_formmapping_DuplicateMatchingRecord` | [msdyn_formmapping](msdyn_formmapping.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_formmapping` |
| `msdyn_formmapping_DuplicateBaseRecord` | [msdyn_formmapping](msdyn_formmapping.md) | `baserecordid` | `baserecordid_msdyn_formmapping` |
| `msdyn_formmapping_AsyncOperations` | [msdyn_formmapping](msdyn_formmapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_formmapping` |
| `msdyn_formmapping_MailboxTrackingFolders` | [msdyn_formmapping](msdyn_formmapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_formmapping` |
| `msdyn_formmapping_UserEntityInstanceDatas` | [msdyn_formmapping](msdyn_formmapping.md) | `objectid` | `objectid_msdyn_formmapping` |
| `msdyn_formmapping_ProcessSession` | [msdyn_formmapping](msdyn_formmapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_formmapping` |
| `msdyn_formmapping_BulkDeleteFailures` | [msdyn_formmapping](msdyn_formmapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_formmapping` |
| `msdyn_formmapping_PrincipalObjectAttributeAccesses` | [msdyn_formmapping](msdyn_formmapping.md) | `objectid` | `objectid_msdyn_formmapping` |


## Source

Generated from [msdyn_formmapping (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_formmapping')) on 2026-05-07.