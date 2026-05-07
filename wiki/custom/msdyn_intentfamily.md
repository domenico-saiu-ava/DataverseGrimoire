---
logical: "msdyn_intentfamily"
display: "Line-of-business"
entitySetName: "msdyn_intentfamilies"
primaryId: "msdyn_intentfamilyid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Line-of-business

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_intentfamily` |
| Display name | Line-of-business |
| Display (plural) | Line-of-business |
| Schema name | `msdyn_intentfamily` |
| Entity set (Web API) | `msdyn_intentfamilies` |
| Primary id attribute | `msdyn_intentfamilyid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_intentfamilies?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_intentfamilies(<guid>)
POST /api/data/v9.2/msdyn_intentfamilies
PATCH /api/data/v9.2/msdyn_intentfamilies(<guid>)
DELETE /api/data/v9.2/msdyn_intentfamilies(<guid>)
```

## Attributes

Writable: **18** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_CPAAutomationLevel`, `msdyn_defaultusergroup`, `msdyn_description`, `msdyn_intentbasedroutingenabled`, `msdyn_intentfamily_description`, `msdyn_intentfamilyid`, `msdyn_iscaseintentfromactivityenabled`, `msdyn_isdefault`, `msdyn_isenabled`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_intentfamily_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_intentfamily_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_intentfamily_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_intentfamily_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_intentfamily` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_intentfamily` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_intentfamily` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_intentfamily` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_intentfamily_msdyn_defaultusergroup_msdyn_agentgroup` | [msdyn_agentgroup](msdyn_agentgroup.md) | `msdyn_defaultusergroup` | `msdyn_defaultusergroup` |

### One-to-Many (26)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_intentfamily_SyncErrors` | [msdyn_intentfamily](msdyn_intentfamily.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentfamily` |
| `msdyn_intentfamily_DuplicateMatchingRecord` | [msdyn_intentfamily](msdyn_intentfamily.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_intentfamily` |
| `msdyn_intentfamily_DuplicateBaseRecord` | [msdyn_intentfamily](msdyn_intentfamily.md) | `baserecordid` | `baserecordid_msdyn_intentfamily` |
| `msdyn_intentfamily_AsyncOperations` | [msdyn_intentfamily](msdyn_intentfamily.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentfamily` |
| `msdyn_intentfamily_MailboxTrackingFolders` | [msdyn_intentfamily](msdyn_intentfamily.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentfamily` |
| `msdyn_intentfamily_UserEntityInstanceDatas` | [msdyn_intentfamily](msdyn_intentfamily.md) | `objectid` | `objectid_msdyn_intentfamily` |
| `msdyn_intentfamily_ProcessSession` | [msdyn_intentfamily](msdyn_intentfamily.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentfamily` |
| `msdyn_intentfamily_BulkDeleteFailures` | [msdyn_intentfamily](msdyn_intentfamily.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentfamily` |
| `msdyn_intentfamily_PrincipalObjectAttributeAccesses` | [msdyn_intentfamily](msdyn_intentfamily.md) | `objectid` | `objectid_msdyn_intentfamily` |
| `msdyn_intent_intentfamilyid_msdyn_intentfamily` | [msdyn_intentfamily](msdyn_intentfamily.md) | `msdyn_intentfamilyid` | `msdyn_intentfamilyid` |
| `msdyn_intentconfig_intentfamilyid_msdyn_intentfamily` | [msdyn_intentfamily](msdyn_intentfamily.md) | `msdyn_intentfamilyid` | `msdyn_intentfamilyid` |
| `msdyn_intentattribute_intentfamilyid_msdyn_intentfamily` | [msdyn_intentfamily](msdyn_intentfamily.md) | `msdyn_intentfamilyid` | `msdyn_intentfamilyid` |
| `msdyn_intentattributeset_intentfamilyid_msdyn_intentfamily` | [msdyn_intentfamily](msdyn_intentfamily.md) | `msdyn_intentfamilyid` | `msdyn_intentfamilyid` |
| `msdyn_intententity_intentfamilyid_msdyn_intentfamily` | [msdyn_intentfamily](msdyn_intentfamily.md) | `msdyn_intentfamilyid` | `msdyn_intentfamilyid` |
| `msdyn_intentsolutionmap_intentfamilyid_msdyn_intentfamily` | [msdyn_intentfamily](msdyn_intentfamily.md) | `msdyn_intentfamilyid` | `msdyn_intentfamilyid` |
| `msdyn_agentgroup_intentfamilyid_msdyn_intentfamily` | [msdyn_intentfamily](msdyn_intentfamily.md) | `msdyn_intentfamilyid` | `msdyn_intentfamilyid` |
| `msdyn_intentgroupcondition_msdyn_intentfamily_msdyn_intentfamily` | [msdyn_intentfamily](msdyn_intentfamily.md) | `msdyn_intentfamily` | `msdyn_intentfamily` |
| `msdyn_liveworkstream_intentfamilyid_msdyn_intentfamily` | [msdyn_intentfamily](msdyn_intentfamily.md) | `msdyn_intentfamilyid` | `msdyn_intentfamilyid` |
| `Queue_intentfamilyid_msdyn_intentfamily` | [msdyn_intentfamily](msdyn_intentfamily.md) | `msdyn_intentfamilyid` | `msdyn_intentfamilyid` |
| `msdyn_msdyn_ocliveworkitem_msdyn_intentfamily_activeintentfamilyid` | [msdyn_intentfamily](msdyn_intentfamily.md) | `msdyn_activeintentfamilyid` | `msdyn_activeintentfamilyid` |
| `msdyn_intentfamily_harvestingconfiguration_msdyn_intentfamilyid_msdyn_intentfamily` | [msdyn_intentfamily](msdyn_intentfamily.md) | `msdyn_intentfamilyid` | `msdyn_intentfamilyid` |
| `msdyn_intentharvesting_batchjobstatusdetail_msdyn_intentfamilyid_msdyn_intentfamily` | [msdyn_intentfamily](msdyn_intentfamily.md) | `msdyn_intentfamilyid` | `msdyn_intentfamilyid` |
| `msdyn_intentplaybook_msdyn_intentfamilyid_msdyn_intentfamily` | [msdyn_intentfamily](msdyn_intentfamily.md) | `msdyn_intentfamilyid` | `msdyn_intentfamilyid` |
| `msdyn_intentplaybookmap_msdyn_intentfamilyid_msdyn_intentfamily` | [msdyn_intentfamily](msdyn_intentfamily.md) | `msdyn_intentfamilyid` | `msdyn_intentfamilyid` |
| `msdyn_intentharvesting_proposedintent_intentfamilyid` | [msdyn_intentfamily](msdyn_intentfamily.md) | `msdyn_intentfamilyid` | `msdyn_intentfamilyid` |
| `msdyn_intentfamily_adminassignment_msdyn_intentfamilyid_msdyn_intentfamily` | [msdyn_intentfamily](msdyn_intentfamily.md) | `msdyn_intentfamilyid` | `msdyn_intentfamilyid` |


## Source

Generated from [msdyn_intentfamily (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_intentfamily')) on 2026-05-07.