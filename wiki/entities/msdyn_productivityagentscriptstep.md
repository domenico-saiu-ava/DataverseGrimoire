---
logical: "msdyn_productivityagentscriptstep"
display: "Script step"
entitySetName: "msdyn_productivityagentscriptsteps"
primaryId: "msdyn_productivityagentscriptstepid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Script step

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_productivityagentscriptstep` |
| Display name | Script step |
| Display (plural) | Script steps |
| Schema name | `msdyn_productivityagentscriptstep` |
| Entity set (Web API) | `msdyn_productivityagentscriptsteps` |
| Primary id attribute | `msdyn_productivityagentscriptstepid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_productivityagentscriptsteps?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_productivityagentscriptsteps(<guid>)
POST /api/data/v9.2/msdyn_productivityagentscriptsteps
PATCH /api/data/v9.2/msdyn_productivityagentscriptsteps(<guid>)
DELETE /api/data/v9.2/msdyn_productivityagentscriptsteps(<guid>)
```

## Attributes

Writable: **19** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_actiontype`, `msdyn_agentscriptid`, `msdyn_description`, `msdyn_macroactionid`, `msdyn_name`, `msdyn_order`, `msdyn_productivityagentscriptstepId`, `msdyn_routeactionid`, `msdyn_textinstruction`, `msdyn_UniqueName`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_productivityagentscriptstep` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_productivityagentscriptstep_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_productivityagentscriptstep_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_productivityagentscriptstep_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_productivityagentscriptstep_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_prod_agentscript_msdyn_prod_agentscriptstep_agentscriptid` | [msdyn_productivityagentscript](msdyn_productivityagentscript.md) | `msdyn_agentscriptid` | `msdyn_agentscriptid` |
| `msdyn_msdyn_prod_agentscript_msdyn_prod_agentscriptstep_routeactionid` | [msdyn_productivityagentscript](msdyn_productivityagentscript.md) | `msdyn_routeactionid` | `msdyn_routeactionid` |
| `msdyn_workflow_msdyn_prod_agentscriptstep_macroactionid` | [workflow](workflow.md) | `msdyn_macroactionid` | `msdyn_macroactionid` |
| `owner_msdyn_productivityagentscriptstep` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_productivityagentscriptstep` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_productivityagentscriptstep` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_productivityagentscriptstep_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_productivityagentscriptstep_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_productivityagentscriptstep_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_productivityagentscriptstep_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_productivityagentscriptstep_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_productivityagentscriptstep_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_productivityagentscriptstep_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_productivityagentscriptstep_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_productivityagentscriptstep.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_productivityagentscriptstep.md) on 2026-05-06.