---
logical: "savingrule"
display: "Saving Rule"
entitySetName: "savingrules"
primaryId: "savingruleid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Saving Rule

## Identity

| Property | Value |
| --- | --- |
| Logical name | `savingrule` |
| Display name | Saving Rule |
| Display (plural) | Saving Rules |
| Schema name | `savingrule` |
| Entity set (Web API) | `savingrules` |
| Primary id attribute | `savingruleid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/savingrules?$select=name&$top=10
GET /api/data/v9.2/savingrules(<guid>)
POST /api/data/v9.2/savingrules
PATCH /api/data/v9.2/savingrules(<guid>)
DELETE /api/data/v9.2/savingrules(<guid>)
```

## Attributes

Writable: **16** · Read-only: **18**

### Writable

`endedon`, `ImportSequenceNumber`, `IsCustomizable`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `ruledata`, `savingruleId`, `startedon`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`, `workflowid`, `workqueueid`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_savingrule` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_savingrule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_savingrule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_savingrule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_savingrule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_savingrule` | [owner](owner.md) | `ownerid` | `ownerid` |
| `savingrule_workflow` | [workflow](workflow.md) | `workflowid` | `workflowid_Workflow` |
| `savingrule_workqueue` | [workqueue](workqueue.md) | `workqueueid` | `workqueueid_workqueue` |
| `team_savingrule` | [team](team.md) | `owningteam` | `owningteam` |
| `user_savingrule` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `savingrule_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `savingrule_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `savingrule_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `savingrule_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `savingrule_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `savingrule_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `savingrule_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `savingrule_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [savingrule.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/savingrule.md) on 2026-05-06.