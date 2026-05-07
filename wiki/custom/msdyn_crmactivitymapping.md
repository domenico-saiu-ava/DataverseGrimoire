---
logical: "msdyn_crmactivitymapping"
display: "CRM Activity Mapping"
entitySetName: "msdyn_crmactivitymappings"
primaryId: "msdyn_crmactivitymappingid"
primaryName: "msdyn_exchangeitemid"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# CRM Activity Mapping

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_crmactivitymapping` |
| Display name | CRM Activity Mapping |
| Display (plural) | CRM Activity Mappings |
| Schema name | `msdyn_crmactivitymapping` |
| Entity set (Web API) | `msdyn_crmactivitymappings` |
| Primary id attribute | `msdyn_crmactivitymappingid` |
| Primary name attribute | `msdyn_exchangeitemid` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_crmactivitymappings?$select=msdyn_exchangeitemid&$top=10
GET /api/data/v9.2/msdyn_crmactivitymappings(<guid>)
POST /api/data/v9.2/msdyn_crmactivitymappings
PATCH /api/data/v9.2/msdyn_crmactivitymappings(<guid>)
DELETE /api/data/v9.2/msdyn_crmactivitymappings(<guid>)
```

## Attributes

Writable: **20** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_additionalfields`, `msdyn_crmactivityid`, `msdyn_crmactivitymappingid`, `msdyn_crmactivitytype`, `msdyn_crmorgurl`, `msdyn_crmrelatedrecordupdatedtime`, `msdyn_exchangeitemid`, `msdyn_exchangeitemtype`, `msdyn_lastsyncsnapshot`, `msdyn_metadata`, `msdyn_regardingobjectid`, `msdyn_regardingobjecttype`, `msdyn_trackstatus`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_crmactivitymapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_crmactivitymapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_crmactivitymapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_crmactivitymapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_crmactivitymapping` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_crmactivitymapping` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_crmactivitymapping` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_crmactivitymapping` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_crmactivitymapping_SyncErrors` | [msdyn_crmactivitymapping](msdyn_crmactivitymapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_crmactivitymapping` |
| `msdyn_crmactivitymapping_DuplicateMatchingRecord` | [msdyn_crmactivitymapping](msdyn_crmactivitymapping.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_crmactivitymapping` |
| `msdyn_crmactivitymapping_DuplicateBaseRecord` | [msdyn_crmactivitymapping](msdyn_crmactivitymapping.md) | `baserecordid` | `baserecordid_msdyn_crmactivitymapping` |
| `msdyn_crmactivitymapping_AsyncOperations` | [msdyn_crmactivitymapping](msdyn_crmactivitymapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_crmactivitymapping` |
| `msdyn_crmactivitymapping_MailboxTrackingFolders` | [msdyn_crmactivitymapping](msdyn_crmactivitymapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_crmactivitymapping` |
| `msdyn_crmactivitymapping_UserEntityInstanceDatas` | [msdyn_crmactivitymapping](msdyn_crmactivitymapping.md) | `objectid` | `objectid_msdyn_crmactivitymapping` |
| `msdyn_crmactivitymapping_ProcessSession` | [msdyn_crmactivitymapping](msdyn_crmactivitymapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_crmactivitymapping` |
| `msdyn_crmactivitymapping_BulkDeleteFailures` | [msdyn_crmactivitymapping](msdyn_crmactivitymapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_crmactivitymapping` |
| `msdyn_crmactivitymapping_PrincipalObjectAttributeAccesses` | [msdyn_crmactivitymapping](msdyn_crmactivitymapping.md) | `objectid` | `objectid_msdyn_crmactivitymapping` |


## Source

Generated from [msdyn_crmactivitymapping (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_crmactivitymapping')) on 2026-05-07.