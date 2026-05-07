---
logical: "msdyn_requirementstatus"
display: "Stato requisito"
entitySetName: "msdyn_requirementstatuses"
primaryId: "msdyn_requirementstatusid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Stato requisito

Stato requisito

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_requirementstatus` |
| Display name | Stato requisito |
| Display (plural) | Stati requisito |
| Schema name | `msdyn_requirementstatus` |
| Entity set (Web API) | `msdyn_requirementstatuses` |
| Primary id attribute | `msdyn_requirementstatusid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_requirementstatuses?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_requirementstatuses(<guid>)
POST /api/data/v9.2/msdyn_requirementstatuses
PATCH /api/data/v9.2/msdyn_requirementstatuses(<guid>)
DELETE /api/data/v9.2/msdyn_requirementstatuses(<guid>)
```

## Attributes

Writable: **10** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_name`, `msdyn_requirementstatusid`, `msdyn_status`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_requirementstatus_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_requirementstatus_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_requirementstatus_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_requirementstatus_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_requirementstatus` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_requirementstatus` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_requirementstatus` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_requirementstatus` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_requirementstatus_DuplicateMatchingRecord` | [msdyn_requirementstatus](msdyn_requirementstatus.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_requirementstatus` |
| `msdyn_requirementstatus_DuplicateBaseRecord` | [msdyn_requirementstatus](msdyn_requirementstatus.md) | `baserecordid` | `baserecordid_msdyn_requirementstatus` |
| `msdyn_requirementstatus_Annotations` | [msdyn_requirementstatus](msdyn_requirementstatus.md) | `objectid` | `objectid_msdyn_requirementstatus` |
| `msdyn_requirementstatus_SyncErrors` | [msdyn_requirementstatus](msdyn_requirementstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementstatus` |
| `msdyn_requirementstatus_AsyncOperations` | [msdyn_requirementstatus](msdyn_requirementstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementstatus` |
| `msdyn_requirementstatus_MailboxTrackingFolders` | [msdyn_requirementstatus](msdyn_requirementstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementstatus` |
| `msdyn_requirementstatus_UserEntityInstanceDatas` | [msdyn_requirementstatus](msdyn_requirementstatus.md) | `objectid` | `objectid_msdyn_requirementstatus` |
| `msdyn_requirementstatus_ProcessSession` | [msdyn_requirementstatus](msdyn_requirementstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementstatus` |
| `msdyn_requirementstatus_BulkDeleteFailures` | [msdyn_requirementstatus](msdyn_requirementstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementstatus` |
| `msdyn_requirementstatus_PrincipalObjectAttributeAccesses` | [msdyn_requirementstatus](msdyn_requirementstatus.md) | `objectid` | `objectid_msdyn_requirementstatus` |
| `msdyn_msdyn_requirementstatus_msdyn_bookingsetupmetadata_DefaultRequirementActiveStatus` | [msdyn_requirementstatus](msdyn_requirementstatus.md) | `msdyn_defaultrequirementactivestatus` | `msdyn_DefaultRequirementActiveStatus` |
| `msdyn_msdyn_requirementstatus_msdyn_bookingsetupmetadata_DefaultRequirementCanceledStatus` | [msdyn_requirementstatus](msdyn_requirementstatus.md) | `msdyn_defaultrequirementcanceledstatus` | `msdyn_DefaultRequirementCanceledStatus` |
| `msdyn_msdyn_requirementstatus_msdyn_bookingsetupmetadata_DefaultRequirementCompletedStatus` | [msdyn_requirementstatus](msdyn_requirementstatus.md) | `msdyn_defaultrequirementcompletedstatus` | `msdyn_DefaultRequirementCompletedStatus` |
| `msdyn_requirementstatus_resourcerequirement_status` | [msdyn_requirementstatus](msdyn_requirementstatus.md) | `msdyn_status` | `msdyn_Status` |


## Source

Generated from [msdyn_requirementstatus (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_requirementstatus')) on 2026-05-07.