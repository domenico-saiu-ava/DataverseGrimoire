---
logical: "msdyn_activitymapping"
display: "Mapping impegni"
entitySetName: "msdyn_activitymappings"
primaryId: "msdyn_activitymappingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Mapping impegni

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_activitymapping` |
| Display name | Mapping impegni |
| Display (plural) | msdyn_activitymappings |
| Schema name | `msdyn_activitymapping` |
| Entity set (Web API) | `msdyn_activitymappings` |
| Primary id attribute | `msdyn_activitymappingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_activitymappings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_activitymappings(<guid>)
POST /api/data/v9.2/msdyn_activitymappings
PATCH /api/data/v9.2/msdyn_activitymappings(<guid>)
DELETE /api/data/v9.2/msdyn_activitymappings(<guid>)
```

## Attributes

Writable: **15** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_activitycontent`, `msdyn_activityid`, `msdyn_activitymappingid`, `msdyn_activitytype`, `msdyn_conversationid`, `msdyn_internetmessageid`, `msdyn_name`, `msdyn_regardingobjectid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_activitymapping_lead` | [lead](lead.md) | `msdyn_regardingobjectid` | `msdyn_regardingobjectid_lead` |
| `msdyn_activitymapping_opportunity` | [opportunity](opportunity.md) | `msdyn_regardingobjectid` | `msdyn_regardingobjectid_opportunity` |
| `lk_msdyn_activitymapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_activitymapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_activitymapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_activitymapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_activitymapping` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_activitymapping` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_activitymapping` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_activitymapping` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salescopilotemailinsight_msdyn_activitymapping_msdyn_activitymappingid` | [msdyn_activitymapping](msdyn_activitymapping.md) | `msdyn_activitymappingid` | `msdyn_activitymappingid` |
| `msdyn_activitymapping_SyncErrors` | [msdyn_activitymapping](msdyn_activitymapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_activitymapping` |
| `msdyn_activitymapping_DuplicateMatchingRecord` | [msdyn_activitymapping](msdyn_activitymapping.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_activitymapping` |
| `msdyn_activitymapping_DuplicateBaseRecord` | [msdyn_activitymapping](msdyn_activitymapping.md) | `baserecordid` | `baserecordid_msdyn_activitymapping` |
| `msdyn_activitymapping_AsyncOperations` | [msdyn_activitymapping](msdyn_activitymapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_activitymapping` |
| `msdyn_activitymapping_MailboxTrackingFolders` | [msdyn_activitymapping](msdyn_activitymapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_activitymapping` |
| `msdyn_activitymapping_UserEntityInstanceDatas` | [msdyn_activitymapping](msdyn_activitymapping.md) | `objectid` | `objectid_msdyn_activitymapping` |
| `msdyn_activitymapping_ProcessSession` | [msdyn_activitymapping](msdyn_activitymapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_activitymapping` |
| `msdyn_activitymapping_BulkDeleteFailures` | [msdyn_activitymapping](msdyn_activitymapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_activitymapping` |
| `msdyn_activitymapping_PrincipalObjectAttributeAccesses` | [msdyn_activitymapping](msdyn_activitymapping.md) | `objectid` | `objectid_msdyn_activitymapping` |


## Source

Generated from [msdyn_activitymapping (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_activitymapping')) on 2026-05-07.