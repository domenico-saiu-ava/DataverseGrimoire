---
logical: "msdyn_decisioncontract"
display: "Decision contract"
entitySetName: "msdyn_decisioncontracts"
primaryId: "msdyn_decisioncontractid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Decision contract

Stores information about contract that will be required for ruleset definition

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_decisioncontract` |
| Display name | Decision contract |
| Display (plural) | Decision contracts |
| Schema name | `msdyn_decisioncontract` |
| Entity set (Web API) | `msdyn_decisioncontracts` |
| Primary id attribute | `msdyn_decisioncontractid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_decisioncontracts?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_decisioncontracts(<guid>)
POST /api/data/v9.2/msdyn_decisioncontracts
PATCH /api/data/v9.2/msdyn_decisioncontracts(<guid>)
DELETE /api/data/v9.2/msdyn_decisioncontracts(<guid>)
```

## Attributes

Writable: **13** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_contractdefinition`, `msdyn_decisioncontractId`, `msdyn_name`, `msdyn_UniqueName`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_decisioncontract` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_decisioncontract_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_decisioncontract_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_decisioncontract_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_decisioncontract_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_decisioncontract` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_decisioncontract` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_decisioncontract` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_decisioncontract_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_decisioncontract_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_decisioncontract_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_decisioncontract_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_decisioncontract_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_decisioncontract_msdyn_decisionruleset_inputcontractId` | _n/a_ | `msdyn_inputcontractid` | _n/a_ |
| `msdyn_decisioncontract_msdyn_decisionruleset_outputcontractid` | _n/a_ | `msdyn_outputcontractid` | _n/a_ |
| `msdyn_decisioncontract_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_decisioncontract_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_decisioncontract_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_liveworkstream_decisioncontractid` | _n/a_ | `msdyn_routingcontractid` | _n/a_ |
| `msdyn_queue_decisioncontractid` | _n/a_ | `msdyn_assignmentinputcontractid` | _n/a_ |


## Source

Generated from [msdyn_decisioncontract.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_decisioncontract.md) on 2026-05-06.