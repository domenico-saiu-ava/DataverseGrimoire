---
logical: "msdyn_requirementgroup"
display: "Gruppo di requisiti"
entitySetName: "msdyn_requirementgroups"
primaryId: "msdyn_requirementgroupid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Gruppo di requisiti

Servizio che ha periodi di offerta di requisiti di risorsa

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_requirementgroup` |
| Display name | Gruppo di requisiti |
| Display (plural) | Gruppi di requisiti |
| Schema name | `msdyn_requirementgroup` |
| Entity set (Web API) | `msdyn_requirementgroups` |
| Primary id attribute | `msdyn_requirementgroupid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_requirementgroups?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_requirementgroups(<guid>)
POST /api/data/v9.2/msdyn_requirementgroups
PATCH /api/data/v9.2/msdyn_requirementgroups(<guid>)
DELETE /api/data/v9.2/msdyn_requirementgroups(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_autogrouptype`, `msdyn_istemplate`, `msdyn_name`, `msdyn_requirementgroupid`, `msdyn_requirementgrouptemplateid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_requirementgroup_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_requirementgroup_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_requirementgroup_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_requirementgroup_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_requirementgroup` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_requirementgroup` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_requirementgroup` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_requirementgroup` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_requirementgroup_requirementgroup_requirementgrouptemplateid` | [msdyn_requirementgroup](msdyn_requirementgroup.md) | `msdyn_requirementgrouptemplateid` | `msdyn_requirementgrouptemplateid` |

### One-to-Many (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_requirementgroup_SyncErrors` | [msdyn_requirementgroup](msdyn_requirementgroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementgroup` |
| `msdyn_requirementgroup_AsyncOperations` | [msdyn_requirementgroup](msdyn_requirementgroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementgroup` |
| `msdyn_requirementgroup_MailboxTrackingFolders` | [msdyn_requirementgroup](msdyn_requirementgroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementgroup` |
| `msdyn_requirementgroup_UserEntityInstanceDatas` | [msdyn_requirementgroup](msdyn_requirementgroup.md) | `objectid` | `objectid_msdyn_requirementgroup` |
| `msdyn_requirementgroup_ProcessSession` | [msdyn_requirementgroup](msdyn_requirementgroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementgroup` |
| `msdyn_requirementgroup_BulkDeleteFailures` | [msdyn_requirementgroup](msdyn_requirementgroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementgroup` |
| `msdyn_requirementgroup_PrincipalObjectAttributeAccesses` | [msdyn_requirementgroup](msdyn_requirementgroup.md) | `objectid` | `objectid_msdyn_requirementgroup` |
| `msdyn_requirementgroup_DuplicateMatchingRecord` | [msdyn_requirementgroup](msdyn_requirementgroup.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_requirementgroup` |
| `msdyn_requirementgroup_DuplicateBaseRecord` | [msdyn_requirementgroup](msdyn_requirementgroup.md) | `baserecordid` | `baserecordid_msdyn_requirementgroup` |
| `msdyn_requirementgroup_bookableresourcebooking_requirementgroupid` | [msdyn_requirementgroup](msdyn_requirementgroup.md) | `msdyn_requirementgroupid` | `msdyn_requirementgroupid` |
| `msdyn_requirementgroup_requirementgroup_requirementgrouptemplateid` | [msdyn_requirementgroup](msdyn_requirementgroup.md) | `msdyn_requirementgrouptemplateid` | `msdyn_requirementgrouptemplateid` |
| `msdyn_requirementgroup_requirementrelationship_requirementgroupid` | [msdyn_requirementgroup](msdyn_requirementgroup.md) | `msdyn_requirementgroupid` | `msdyn_requirementgroupid` |
| `msdyn_requirementgroup_resourcerequirement_requirementgroupid` | [msdyn_requirementgroup](msdyn_requirementgroup.md) | `msdyn_requirementgroupid` | `msdyn_requirementgroupid` |


## Source

Generated from [msdyn_requirementgroup (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_requirementgroup')) on 2026-05-07.