---
logical: "msdyn_routingconfigurationstep"
display: "Routing configuration step"
entitySetName: "msdyn_routingconfigurationsteps"
primaryId: "msdyn_routingconfigurationstepid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Routing configuration step

Links the routing configuration with ruleset

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_routingconfigurationstep` |
| Display name | Routing configuration step |
| Display (plural) | Routing configuration steps |
| Schema name | `msdyn_routingconfigurationstep` |
| Entity set (Web API) | `msdyn_routingconfigurationsteps` |
| Primary id attribute | `msdyn_routingconfigurationstepid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_routingconfigurationsteps?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_routingconfigurationsteps(<guid>)
POST /api/data/v9.2/msdyn_routingconfigurationsteps
PATCH /api/data/v9.2/msdyn_routingconfigurationsteps(<guid>)
DELETE /api/data/v9.2/msdyn_routingconfigurationsteps(<guid>)
```

## Attributes

Writable: **16** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_name`, `msdyn_routingconfigurationid`, `msdyn_routingconfigurationstepId`, `msdyn_rulesetid`, `msdyn_steporder`, `msdyn_type`, `msdyn_UniqueName`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_routingconfigurationstep` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_routingconfigurationstep_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_routingconfigurationstep_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_routingconfigurationstep_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_routingconfigurationstep_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_decisionruleset_msdyn_routingconfigurationstep_rulesetid` | [msdyn_decisionruleset](msdyn_decisionruleset.md) | `msdyn_rulesetid` | `msdyn_rulesetid` |
| `msdyn_routingconfiguration_msdyn_routingconfigurationstep_routingconfigurationid` | [msdyn_routingconfiguration](msdyn_routingconfiguration.md) | `msdyn_routingconfigurationid` | `msdyn_routingconfigurationid` |
| `owner_msdyn_routingconfigurationstep` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_routingconfigurationstep` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_routingconfigurationstep` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_routingconfigurationstep_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_routingconfigurationstep_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_routingconfigurationstep_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_routingconfigurationstep_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_routingconfigurationstep_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_routingconfigurationstep_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_routingconfigurationstep_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_routingconfigurationstep_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_routingconfigurationstep.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_routingconfigurationstep.md) on 2026-05-06.