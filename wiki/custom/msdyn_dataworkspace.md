---
logical: "msdyn_dataworkspace"
display: "Area di lavoro Dati"
entitySetName: "msdyn_dataworkspaces"
primaryId: "msdyn_dataworkspaceid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Area di lavoro Dati

Tabella in cui sono archiviati i record dell'area di lavoro Dati.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dataworkspace` |
| Display name | Area di lavoro Dati |
| Display (plural) | Aree di lavoro dati |
| Schema name | `msdyn_DataWorkspace` |
| Entity set (Web API) | `msdyn_dataworkspaces` |
| Primary id attribute | `msdyn_dataworkspaceid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dataworkspaces?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_dataworkspaces(<guid>)
POST /api/data/v9.2/msdyn_dataworkspaces
PATCH /api/data/v9.2/msdyn_dataworkspaces(<guid>)
DELETE /api/data/v9.2/msdyn_dataworkspaces(<guid>)
```

## Attributes

Writable: **13** · Read-only: **17**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_contentschemaversion`, `msdyn_dataworkspaceid`, `msdyn_description`, `msdyn_name`, `msdyn_parentplanid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_content`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dataworkspace_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dataworkspace_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dataworkspace_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dataworkspace_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_dataworkspace` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_dataworkspace` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_dataworkspace` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_dataworkspace` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_DataWorkspace_msdyn_Content` | [fileattachment](fileattachment.md) | `msdyn_content` | `msdyn_content` |
| `msdyn_plan_msdyn_dataworkspace` | [msdyn_plan](msdyn_plan.md) | `msdyn_parentplanid` | `msdyn_ParentPlanId` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dataworkspace_SyncErrors` | [msdyn_dataworkspace](msdyn_dataworkspace.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataworkspace` |
| `msdyn_dataworkspace_AsyncOperations` | [msdyn_dataworkspace](msdyn_dataworkspace.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataworkspace` |
| `msdyn_dataworkspace_MailboxTrackingFolders` | [msdyn_dataworkspace](msdyn_dataworkspace.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataworkspace` |
| `msdyn_dataworkspace_UserEntityInstanceDatas` | [msdyn_dataworkspace](msdyn_dataworkspace.md) | `objectid` | `objectid_msdyn_dataworkspace` |
| `msdyn_dataworkspace_ProcessSession` | [msdyn_dataworkspace](msdyn_dataworkspace.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataworkspace` |
| `msdyn_dataworkspace_BulkDeleteFailures` | [msdyn_dataworkspace](msdyn_dataworkspace.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataworkspace` |
| `msdyn_dataworkspace_PrincipalObjectAttributeAccesses` | [msdyn_dataworkspace](msdyn_dataworkspace.md) | `objectid` | `objectid_msdyn_dataworkspace` |
| `msdyn_dataworkspace_FileAttachments` | [msdyn_dataworkspace](msdyn_dataworkspace.md) | `objectid` | `objectid_msdyn_dataworkspace` |


## Source

Generated from [msdyn_dataworkspace (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_dataworkspace')) on 2026-05-07.