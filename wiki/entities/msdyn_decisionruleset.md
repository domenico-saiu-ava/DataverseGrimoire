---
logical: "msdyn_decisionruleset"
display: "Decision rule set"
entitySetName: "msdyn_decisionrulesets"
primaryId: "msdyn_decisionrulesetid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Decision rule set

Contains list of rules to define demand and assignment behavior

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_decisionruleset` |
| Display name | Decision rule set |
| Display (plural) | Decision rule sets |
| Schema name | `msdyn_decisionruleset` |
| Entity set (Web API) | `msdyn_decisionrulesets` |
| Primary id attribute | `msdyn_decisionrulesetid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_decisionrulesets?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_decisionrulesets(<guid>)
POST /api/data/v9.2/msdyn_decisionrulesets
PATCH /api/data/v9.2/msdyn_decisionrulesets(<guid>)
DELETE /api/data/v9.2/msdyn_decisionrulesets(<guid>)
```

## Attributes

Writable: **25** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_aibmodelid`, `msdyn_authoringmode`, `msdyn_dataversecomponenttype`, `msdyn_decisionrulesetId`, `msdyn_description`, `msdyn_fetchxml`, `msdyn_inputcontractid`, `msdyn_isinputcollection`, `msdyn_mlmodeltype`, `msdyn_name`, `msdyn_outputcontractid`, `msdyn_persistoutputdata`, `msdyn_refreshinputdata`, `msdyn_rulesetdefinition`, `msdyn_rulesettype`, `msdyn_UniqueName`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_decisionruleset` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_decisionruleset_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_decisionruleset_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_decisionruleset_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_decisionruleset_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_aimodel_msdyn_decisionruleset_aibmodelid` | [msdyn_aimodel](msdyn_aimodel.md) | `msdyn_aibmodelid` | `msdyn_aibmodelid` |
| `msdyn_decisioncontract_msdyn_decisionruleset_inputcontractId` | [msdyn_decisioncontract](msdyn_decisioncontract.md) | `msdyn_inputcontractid` | `msdyn_inputcontractid` |
| `msdyn_decisioncontract_msdyn_decisionruleset_outputcontractid` | [msdyn_decisioncontract](msdyn_decisioncontract.md) | `msdyn_outputcontractid` | `msdyn_outputcontractid` |
| `owner_msdyn_decisionruleset` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_decisionruleset` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_decisionruleset` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (18)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_decisionruleset_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_decisionruleset_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_decisionruleset_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_decisionruleset_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_decisionruleset_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_decisionruleset_msdyn_assignmentconfigurationstep_rulesetid` | _n/a_ | `msdyn_rulesetid` | _n/a_ |
| `msdyn_decisionruleset_msdyn_routingconfigurationstep_rulesetid` | _n/a_ | `msdyn_rulesetid` | _n/a_ |
| `msdyn_decisionruleset_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_decisionruleset_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_decisionruleset_queue_msdyn_inqueueoverflowrulesetid` | _n/a_ | `msdyn_inqueueoverflowrulesetid` | _n/a_ |
| `msdyn_decisionruleset_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_globalrulesetconfiguration_msdyn_decisionrulesetid_msdyn_decisionruleset` | _n/a_ | `msdyn_decisionrulesetid` | _n/a_ |
| `msdyn_msdyn_decisionruleset_msdyn_masterentityroutingconfiguration_rulesetid` | _n/a_ | `msdyn_rulesetid` | _n/a_ |
| `msdyn_msdyn_decisionruleset_msdyn_swarmtemplate_skillattachmentrulesetid` | _n/a_ | `msdyn_skillattachmentrulesetid` | _n/a_ |
| `msdyn_msdyn_decisionruleset_msdyn_unifiedroutingdiagnostic_decisionrulesetid` | _n/a_ | `msdyn_decisionrulesetid` | _n/a_ |
| `msdyn_queue_decisionrulesetId` | _n/a_ | `msdyn_prequeueoverflowrulesetid` | _n/a_ |
| `msdyn_templateruleset_draftruleset_msdyn_decisionruleset` | _n/a_ | `msdyn_draftruleset` | _n/a_ |
| `msdyn_templateruleset_publishedruleset_msdyn_decisionruleset` | _n/a_ | `msdyn_publishedruleset` | _n/a_ |


## Source

Generated from [msdyn_decisionruleset.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_decisionruleset.md) on 2026-05-06.