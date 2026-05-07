---
logical: "msdyn_decisionruleset"
display: "Set di regole decisione"
entitySetName: "msdyn_decisionrulesets"
primaryId: "msdyn_decisionrulesetid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Set di regole decisione

Contiene l'elenco di regole per definire il comportamento di domanda e assegnazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_decisionruleset` |
| Display name | Set di regole decisione |
| Display (plural) | Set di regole decisione |
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

Writable: **24** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_aibmodelid`, `msdyn_authoringmode`, `msdyn_dataversecomponenttype`, `msdyn_decisionrulesetid`, `msdyn_description`, `msdyn_fetchxml`, `msdyn_inputcontractid`, `msdyn_isinputcollection`, `msdyn_mlmodeltype`, `msdyn_name`, `msdyn_outputcontractid`, `msdyn_persistoutputdata`, `msdyn_refreshinputdata`, `msdyn_rulesetdefinition`, `msdyn_rulesettype`, `msdyn_uniquename`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_decisionruleset_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_decisionruleset_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_decisionruleset_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_decisionruleset_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_decisionruleset` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_decisionruleset` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_decisionruleset` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_decisionruleset` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_decisioncontract_msdyn_decisionruleset_inputcontractId` | [msdyn_decisioncontract](msdyn_decisioncontract.md) | `msdyn_inputcontractid` | `msdyn_inputcontractid` |
| `msdyn_decisioncontract_msdyn_decisionruleset_outputcontractid` | [msdyn_decisioncontract](msdyn_decisioncontract.md) | `msdyn_outputcontractid` | `msdyn_outputcontractid` |
| `msdyn_aimodel_msdyn_decisionruleset_aibmodelid` | [msdyn_aimodel](msdyn_aimodel.md) | `msdyn_aibmodelid` | `msdyn_aibmodelid` |

### One-to-Many (22)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_queue_decisionrulesetId` | [msdyn_decisionruleset](msdyn_decisionruleset.md) | `msdyn_prequeueoverflowrulesetid` | `msdyn_decisionrulesetid` |
| `msdyn_decisionruleset_queue_msdyn_inqueueoverflowrulesetid` | [msdyn_decisionruleset](msdyn_decisionruleset.md) | `msdyn_inqueueoverflowrulesetid` | `msdyn_inqueueoverflowrulesetid` |
| `msdyn_decisionruleset_msdyn_assignmentconfigurationstep_rulesetid` | [msdyn_decisionruleset](msdyn_decisionruleset.md) | `msdyn_rulesetid` | `msdyn_rulesetid` |
| `msdyn_decisionruleset_msdyn_routingconfigurationstep_rulesetid` | [msdyn_decisionruleset](msdyn_decisionruleset.md) | `msdyn_rulesetid` | `msdyn_rulesetid` |
| `msdyn_globalrulesetconfiguration_msdyn_decisionrulesetid_msdyn_decisionruleset` | [msdyn_decisionruleset](msdyn_decisionruleset.md) | `msdyn_decisionrulesetid` | `msdyn_decisionrulesetid` |
| `msdyn_decisionruleset_SyncErrors` | [msdyn_decisionruleset](msdyn_decisionruleset.md) | `regardingobjectid` | `regardingobjectid_msdyn_decisionruleset` |
| `msdyn_decisionruleset_DuplicateMatchingRecord` | [msdyn_decisionruleset](msdyn_decisionruleset.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_decisionruleset` |
| `msdyn_decisionruleset_DuplicateBaseRecord` | [msdyn_decisionruleset](msdyn_decisionruleset.md) | `baserecordid` | `baserecordid_msdyn_decisionruleset` |
| `msdyn_decisionruleset_AsyncOperations` | [msdyn_decisionruleset](msdyn_decisionruleset.md) | `regardingobjectid` | `regardingobjectid_msdyn_decisionruleset` |
| `msdyn_decisionruleset_MailboxTrackingFolders` | [msdyn_decisionruleset](msdyn_decisionruleset.md) | `regardingobjectid` | `regardingobjectid_msdyn_decisionruleset` |
| `msdyn_decisionruleset_UserEntityInstanceDatas` | [msdyn_decisionruleset](msdyn_decisionruleset.md) | `objectid` | `objectid_msdyn_decisionruleset` |
| `msdyn_decisionruleset_ProcessSession` | [msdyn_decisionruleset](msdyn_decisionruleset.md) | `regardingobjectid` | `regardingobjectid_msdyn_decisionruleset` |
| `msdyn_decisionruleset_BulkDeleteFailures` | [msdyn_decisionruleset](msdyn_decisionruleset.md) | `regardingobjectid` | `regardingobjectid_msdyn_decisionruleset` |
| `msdyn_decisionruleset_PrincipalObjectAttributeAccesses` | [msdyn_decisionruleset](msdyn_decisionruleset.md) | `objectid` | `objectid_msdyn_decisionruleset` |
| `msdyn_rulesetdependencymapping_msdyn_decisionruleset_msdyn_referencingrulesetid` | [msdyn_decisionruleset](msdyn_decisionruleset.md) | `msdyn_referencingrulesetid` | `msdyn_referencingrulesetid_msdyn_rulesetdependencymapping_msdyn_decisionruleset` |
| `msdyn_msdyn_decisionruleset_msdyn_unifiedroutingdiagnostic_decisionrulesetid` | [msdyn_decisionruleset](msdyn_decisionruleset.md) | `msdyn_decisionrulesetid` | `msdyn_decisionrulesetid` |
| `msdyn_rulesetdependencymapping_msdyn_decisionruleset_msdyn_referencedpolymorphicentityid` | [msdyn_decisionruleset](msdyn_decisionruleset.md) | `msdyn_referencedpolymorphicentityid` | `msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_decisionruleset` |
| `msdyn_intentsolution_mappingconfiguration_rulesetid_msdyn_decisionruleset` | [msdyn_decisionruleset](msdyn_decisionruleset.md) | `msdyn_rulesetid` | `msdyn_rulesetid` |
| `msdyn_msdyn_decisionruleset_msdyn_swarmtemplate_skillattachmentrulesetid` | [msdyn_decisionruleset](msdyn_decisionruleset.md) | `msdyn_skillattachmentrulesetid` | `msdyn_skillattachmentrulesetid` |
| `msdyn_templateruleset_draftruleset_msdyn_decisionruleset` | [msdyn_decisionruleset](msdyn_decisionruleset.md) | `msdyn_draftruleset` | `msdyn_draftruleset` |
| `msdyn_templateruleset_publishedruleset_msdyn_decisionruleset` | [msdyn_decisionruleset](msdyn_decisionruleset.md) | `msdyn_publishedruleset` | `msdyn_publishedruleset` |
| `msdyn_msdyn_decisionruleset_msdyn_masterentityroutingconfiguration_rulesetid` | [msdyn_decisionruleset](msdyn_decisionruleset.md) | `msdyn_rulesetid` | `msdyn_rulesetid` |


## Source

Generated from [msdyn_decisionruleset (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_decisionruleset')) on 2026-05-07.