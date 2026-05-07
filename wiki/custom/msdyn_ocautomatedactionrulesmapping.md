---
logical: "msdyn_ocautomatedactionrulesmapping"
display: "Mapping regole di azione automatica"
entitySetName: "msdyn_ocautomatedactionrulesmappings"
primaryId: "msdyn_ocautomatedactionrulesmappingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Mapping regole di azione automatica

Mapping delle regole di azione automatica multicanale.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocautomatedactionrulesmapping` |
| Display name | Mapping regole di azione automatica |
| Display (plural) | Mapping regole di azione automatica |
| Schema name | `msdyn_ocautomatedactionrulesmapping` |
| Entity set (Web API) | `msdyn_ocautomatedactionrulesmappings` |
| Primary id attribute | `msdyn_ocautomatedactionrulesmappingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocautomatedactionrulesmappings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocautomatedactionrulesmappings(<guid>)
POST /api/data/v9.2/msdyn_ocautomatedactionrulesmappings
PATCH /api/data/v9.2/msdyn_ocautomatedactionrulesmappings(<guid>)
DELETE /api/data/v9.2/msdyn_ocautomatedactionrulesmappings(<guid>)
```

## Attributes

Writable: **12** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_automatedactionruleid`, `msdyn_liveworkstreamid`, `msdyn_name`, `msdyn_ocautomatedactionrulesmappingid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_ocautomatedactionrulesmapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocautomatedactionrulesmapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocautomatedactionrulesmapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocautomatedactionrulesmapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_ocautomatedactionrulesmapping` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_ocautomatedactionrulesmapping` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_ocautomatedactionrulesmapping` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_ocautomatedactionrulesmapping` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_ocautomatedactionrule_msdyn_ocautomatedactionrulesmapping_automatedactionruleId` | [msdyn_ocautomatedactionrule](msdyn_ocautomatedactionrule.md) | `msdyn_automatedactionruleid` | `msdyn_automatedactionruleId` |
| `msdyn_msdyn_liveworkstream_msdyn_ocautomatedactionrulesmapping_liveworkstreamid` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_liveworkstreamid` | `msdyn_liveworkstreamid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocautomatedactionrulesmapping_SyncErrors` | [msdyn_ocautomatedactionrulesmapping](msdyn_ocautomatedactionrulesmapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocautomatedactionrulesmapping` |
| `msdyn_ocautomatedactionrulesmapping_DuplicateMatchingRecord` | [msdyn_ocautomatedactionrulesmapping](msdyn_ocautomatedactionrulesmapping.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_ocautomatedactionrulesmapping` |
| `msdyn_ocautomatedactionrulesmapping_DuplicateBaseRecord` | [msdyn_ocautomatedactionrulesmapping](msdyn_ocautomatedactionrulesmapping.md) | `baserecordid` | `baserecordid_msdyn_ocautomatedactionrulesmapping` |
| `msdyn_ocautomatedactionrulesmapping_AsyncOperations` | [msdyn_ocautomatedactionrulesmapping](msdyn_ocautomatedactionrulesmapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocautomatedactionrulesmapping` |
| `msdyn_ocautomatedactionrulesmapping_MailboxTrackingFolders` | [msdyn_ocautomatedactionrulesmapping](msdyn_ocautomatedactionrulesmapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocautomatedactionrulesmapping` |
| `msdyn_ocautomatedactionrulesmapping_UserEntityInstanceDatas` | [msdyn_ocautomatedactionrulesmapping](msdyn_ocautomatedactionrulesmapping.md) | `objectid` | `objectid_msdyn_ocautomatedactionrulesmapping` |
| `msdyn_ocautomatedactionrulesmapping_ProcessSession` | [msdyn_ocautomatedactionrulesmapping](msdyn_ocautomatedactionrulesmapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocautomatedactionrulesmapping` |
| `msdyn_ocautomatedactionrulesmapping_BulkDeleteFailures` | [msdyn_ocautomatedactionrulesmapping](msdyn_ocautomatedactionrulesmapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocautomatedactionrulesmapping` |
| `msdyn_ocautomatedactionrulesmapping_PrincipalObjectAttributeAccesses` | [msdyn_ocautomatedactionrulesmapping](msdyn_ocautomatedactionrulesmapping.md) | `objectid` | `objectid_msdyn_ocautomatedactionrulesmapping` |


## Source

Generated from [msdyn_ocautomatedactionrulesmapping (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ocautomatedactionrulesmapping')) on 2026-05-07.