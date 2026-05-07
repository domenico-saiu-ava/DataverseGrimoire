---
logical: "approvalstagecondition"
display: "Condizione fase di approvazione"
entitySetName: "approvalstageconditions"
primaryId: "approvalstageconditionid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Condizione fase di approvazione

Condizione nelle approvazioni in più fasi

## Identity

| Property | Value |
| --- | --- |
| Logical name | `approvalstagecondition` |
| Display name | Condizione fase di approvazione |
| Display (plural) | Condizioni fase di approvazione |
| Schema name | `approvalstagecondition` |
| Entity set (Web API) | `approvalstageconditions` |
| Primary id attribute | `approvalstageconditionid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/approvalstageconditions?$select=name&$top=10
GET /api/data/v9.2/approvalstageconditions(<guid>)
POST /api/data/v9.2/approvalstageconditions
PATCH /api/data/v9.2/approvalstageconditions(<guid>)
DELETE /api/data/v9.2/approvalstageconditions(<guid>)
```

## Attributes

Writable: **14** · Read-only: **10**

### Writable

`approval`, `approvalstageconditionid`, `conditionallogic`, `importsequencenumber`, `name`, `overriddencreatedon`, `ownerid`, `resultinfo`, `resulttype`, `resultvalue`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_approvalstagecondition_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_approvalstagecondition_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_approvalstagecondition_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_approvalstagecondition_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_approvalstagecondition` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_approvalstagecondition` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_approvalstagecondition` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_approvalstagecondition` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `approvalstagecondition_approval_msdyn_flow_approval` | [msdyn_flow_approval](msdyn_flow_approval.md) | `approval` | `approval` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `approvalstagecondition_SyncErrors` | [approvalstagecondition](approvalstagecondition.md) | `regardingobjectid` | `regardingobjectid_approvalstagecondition` |
| `approvalstagecondition_DuplicateMatchingRecord` | [approvalstagecondition](approvalstagecondition.md) | `duplicaterecordid` | `duplicaterecordid_approvalstagecondition` |
| `approvalstagecondition_DuplicateBaseRecord` | [approvalstagecondition](approvalstagecondition.md) | `baserecordid` | `baserecordid_approvalstagecondition` |
| `approvalstagecondition_AsyncOperations` | [approvalstagecondition](approvalstagecondition.md) | `regardingobjectid` | `regardingobjectid_approvalstagecondition` |
| `approvalstagecondition_MailboxTrackingFolders` | [approvalstagecondition](approvalstagecondition.md) | `regardingobjectid` | `regardingobjectid_approvalstagecondition` |
| `approvalstagecondition_UserEntityInstanceDatas` | [approvalstagecondition](approvalstagecondition.md) | `objectid` | `objectid_approvalstagecondition` |
| `approvalstagecondition_ProcessSession` | [approvalstagecondition](approvalstagecondition.md) | `regardingobjectid` | `regardingobjectid_approvalstagecondition` |
| `approvalstagecondition_BulkDeleteFailures` | [approvalstagecondition](approvalstagecondition.md) | `regardingobjectid` | `regardingobjectid_approvalstagecondition` |
| `approvalstagecondition_PrincipalObjectAttributeAccesses` | [approvalstagecondition](approvalstagecondition.md) | `objectid` | `objectid_approvalstagecondition` |
| `approvalstageorder_stagecondition_approvalstagecondition` | [approvalstagecondition](approvalstagecondition.md) | `stagecondition` | `stagecondition` |


## Source

Generated from [approvalstagecondition (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='approvalstagecondition')) on 2026-05-07.