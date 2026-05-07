---
logical: "msdyn_plan"
display: "Piano"
entitySetName: "msdyn_plans"
primaryId: "msdyn_planid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Piano

Tabella in cui sono archiviati i record del piano.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_plan` |
| Display name | Piano |
| Display (plural) | Piani |
| Schema name | `msdyn_Plan` |
| Entity set (Web API) | `msdyn_plans` |
| Primary id attribute | `msdyn_planid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_plans?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_plans(<guid>)
POST /api/data/v9.2/msdyn_plans
PATCH /api/data/v9.2/msdyn_plans(<guid>)
DELETE /api/data/v9.2/msdyn_plans(<guid>)
```

## Attributes

Writable: **14** · Read-only: **17**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_contentschemaversion`, `msdyn_description`, `msdyn_languagecode`, `msdyn_name`, `msdyn_planid`, `msdyn_prompt`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_content`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_plan_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_plan_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_plan_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_plan_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_plan` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_plan` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_plan` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_plan` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_Plan_msdyn_Content` | [fileattachment](fileattachment.md) | `msdyn_content` | `msdyn_content` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `businessprocesslinkedartifact_planlink_msdyn_plan` | [msdyn_plan](msdyn_plan.md) | `planlink` | `planlink` |
| `msdyn_plan_SyncErrors` | [msdyn_plan](msdyn_plan.md) | `regardingobjectid` | `regardingobjectid_msdyn_plan` |
| `msdyn_plan_AsyncOperations` | [msdyn_plan](msdyn_plan.md) | `regardingobjectid` | `regardingobjectid_msdyn_plan` |
| `msdyn_plan_MailboxTrackingFolders` | [msdyn_plan](msdyn_plan.md) | `regardingobjectid` | `regardingobjectid_msdyn_plan` |
| `msdyn_plan_UserEntityInstanceDatas` | [msdyn_plan](msdyn_plan.md) | `objectid` | `objectid_msdyn_plan` |
| `msdyn_plan_ProcessSession` | [msdyn_plan](msdyn_plan.md) | `regardingobjectid` | `regardingobjectid_msdyn_plan` |
| `msdyn_plan_BulkDeleteFailures` | [msdyn_plan](msdyn_plan.md) | `regardingobjectid` | `regardingobjectid_msdyn_plan` |
| `msdyn_plan_PrincipalObjectAttributeAccesses` | [msdyn_plan](msdyn_plan.md) | `objectid` | `objectid_msdyn_plan` |
| `msdyn_plan_FileAttachments` | [msdyn_plan](msdyn_plan.md) | `objectid` | `objectid_msdyn_plan` |
| `msdyn_plan_msdyn_planartifact` | [msdyn_plan](msdyn_plan.md) | `msdyn_parentplanid` | `msdyn_ParentPlanId` |
| `msdyn_plan_msdyn_planattachment` | [msdyn_plan](msdyn_plan.md) | `msdyn_parentplanid` | `msdyn_ParentPlanId` |
| `msdyn_plan_msdyn_dataworkspace` | [msdyn_plan](msdyn_plan.md) | `msdyn_parentplanid` | `msdyn_ParentPlanId` |


## Source

Generated from [msdyn_plan (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_plan')) on 2026-05-07.