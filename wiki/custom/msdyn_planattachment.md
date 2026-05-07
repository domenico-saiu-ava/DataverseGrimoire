---
logical: "msdyn_planattachment"
display: "Allegato al piano"
entitySetName: "msdyn_planattachments"
primaryId: "msdyn_planattachmentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Allegato al piano

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_planattachment` |
| Display name | Allegato al piano |
| Display (plural) | Allegati al piano |
| Schema name | `msdyn_PlanAttachment` |
| Entity set (Web API) | `msdyn_planattachments` |
| Primary id attribute | `msdyn_planattachmentid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_planattachments?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_planattachments(<guid>)
POST /api/data/v9.2/msdyn_planattachments
PATCH /api/data/v9.2/msdyn_planattachments(<guid>)
DELETE /api/data/v9.2/msdyn_planattachments(<guid>)
```

## Attributes

Writable: **11** · Read-only: **17**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_name`, `msdyn_parentplanid`, `msdyn_planattachmentid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_content`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_planattachment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_planattachment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_planattachment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_planattachment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_planattachment` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_planattachment` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_planattachment` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_planattachment` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_PlanAttachment_msdyn_Content` | [fileattachment](fileattachment.md) | `msdyn_content` | `msdyn_content` |
| `msdyn_plan_msdyn_planattachment` | [msdyn_plan](msdyn_plan.md) | `msdyn_parentplanid` | `msdyn_ParentPlanId` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_planattachment_SyncErrors` | [msdyn_planattachment](msdyn_planattachment.md) | `regardingobjectid` | `regardingobjectid_msdyn_planattachment` |
| `msdyn_planattachment_AsyncOperations` | [msdyn_planattachment](msdyn_planattachment.md) | `regardingobjectid` | `regardingobjectid_msdyn_planattachment` |
| `msdyn_planattachment_MailboxTrackingFolders` | [msdyn_planattachment](msdyn_planattachment.md) | `regardingobjectid` | `regardingobjectid_msdyn_planattachment` |
| `msdyn_planattachment_UserEntityInstanceDatas` | [msdyn_planattachment](msdyn_planattachment.md) | `objectid` | `objectid_msdyn_planattachment` |
| `msdyn_planattachment_ProcessSession` | [msdyn_planattachment](msdyn_planattachment.md) | `regardingobjectid` | `regardingobjectid_msdyn_planattachment` |
| `msdyn_planattachment_BulkDeleteFailures` | [msdyn_planattachment](msdyn_planattachment.md) | `regardingobjectid` | `regardingobjectid_msdyn_planattachment` |
| `msdyn_planattachment_PrincipalObjectAttributeAccesses` | [msdyn_planattachment](msdyn_planattachment.md) | `objectid` | `objectid_msdyn_planattachment` |
| `msdyn_planattachment_FileAttachments` | [msdyn_planattachment](msdyn_planattachment.md) | `objectid` | `objectid_msdyn_planattachment` |


## Source

Generated from [msdyn_planattachment (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_planattachment')) on 2026-05-07.