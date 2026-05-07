---
logical: "msdyn_sequence"
display: "Sequenza"
entitySetName: "msdyn_sequences"
primaryId: "msdyn_sequenceid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Sequenza

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_sequence` |
| Display name | Sequenza |
| Display (plural) | Sequenze |
| Schema name | `msdyn_sequence` |
| Entity set (Web API) | `msdyn_sequences` |
| Primary id attribute | `msdyn_sequenceid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_sequences?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_sequences(<guid>)
POST /api/data/v9.2/msdyn_sequences
PATCH /api/data/v9.2/msdyn_sequences(<guid>)
DELETE /api/data/v9.2/msdyn_sequences(<guid>)
```

## Attributes

Writable: **37** · Read-only: **17**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_SequenceStats180d`, `msdyn_SequenceStats1y`, `msdyn_SequenceStats2y`, `msdyn_SequenceStats30d`, `msdyn_SequenceStats90d`, `msdyn_analyticsavailable`, `msdyn_analyticsversion`, `msdyn_assignsequencecondition`, `msdyn_assignsequencefieldname`, `msdyn_assignsequencetype`, `msdyn_cjodefinition`, `msdyn_cjodefinitionstate`, `msdyn_definition`, `msdyn_description`, `msdyn_iswaittimecomputationenabledatsequencelevel`, `msdyn_maxstepcount`, `msdyn_name`, `msdyn_orchestratorversion`, `msdyn_parentsequence`, `msdyn_regardingentitydisplayname`, `msdyn_regardingentityname`, `msdyn_sequenceexitcriterion`, `msdyn_sequenceid`, `msdyn_template`, `msdyn_totaltasks`, `msdyn_type`, `msdyn_version`, `msdyn_versiondescription`, `msdyn_workflowid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_sequencerecords`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_sequence_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_sequence_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_sequence_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_sequence_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_sequence` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_sequence` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_sequence` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_sequence` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_sequence_parentsequence` | [msdyn_sequence](msdyn_sequence.md) | `msdyn_parentsequence` | `msdyn_ParentSequence` |

### One-to-Many (16)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_sequence_SyncErrors` | [msdyn_sequence](msdyn_sequence.md) | `regardingobjectid` | `regardingobjectid_msdyn_sequence` |
| `msdyn_sequence_DuplicateMatchingRecord` | [msdyn_sequence](msdyn_sequence.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_sequence` |
| `msdyn_sequence_DuplicateBaseRecord` | [msdyn_sequence](msdyn_sequence.md) | `baserecordid` | `baserecordid_msdyn_sequence` |
| `msdyn_sequence_AsyncOperations` | [msdyn_sequence](msdyn_sequence.md) | `regardingobjectid` | `regardingobjectid_msdyn_sequence` |
| `msdyn_sequence_MailboxTrackingFolders` | [msdyn_sequence](msdyn_sequence.md) | `regardingobjectid` | `regardingobjectid_msdyn_sequence` |
| `msdyn_sequence_UserEntityInstanceDatas` | [msdyn_sequence](msdyn_sequence.md) | `objectid` | `objectid_msdyn_sequence` |
| `msdyn_sequence_ProcessSession` | [msdyn_sequence](msdyn_sequence.md) | `regardingobjectid` | `regardingobjectid_msdyn_sequence` |
| `msdyn_sequence_BulkDeleteFailures` | [msdyn_sequence](msdyn_sequence.md) | `regardingobjectid` | `regardingobjectid_msdyn_sequence` |
| `msdyn_sequence_PrincipalObjectAttributeAccesses` | [msdyn_sequence](msdyn_sequence.md) | `objectid` | `objectid_msdyn_sequence` |
| `msdyn_sequence_connections1` | [msdyn_sequence](msdyn_sequence.md) | `record1id` | `record1id_msdyn_sequence` |
| `msdyn_sequence_connections2` | [msdyn_sequence](msdyn_sequence.md) | `record2id` | `record2id_msdyn_sequence` |
| `msdyn_msdyn_sequence_msdyn_segment_Sequence` | [msdyn_sequence](msdyn_sequence.md) | `msdyn_sequence` | `msdyn_Sequence` |
| `msdyn_sequence_appliedsequenceinstance` | [msdyn_sequence](msdyn_sequence.md) | `msdyn_appliedsequenceinstance` | `msdyn_appliedsequenceinstance` |
| `msdyn_sequence_parentsequence` | [msdyn_sequence](msdyn_sequence.md) | `msdyn_parentsequence` | `msdyn_ParentSequence` |
| `msdyn_sequenceparent` | [msdyn_sequence](msdyn_sequence.md) | `msdyn_parentsequence` | `msdyn_parentsequence` |
| `msdyn_sequence_sequencestat` | [msdyn_sequence](msdyn_sequence.md) | `msdyn_sequence` | `msdyn_sequence` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salestag_msdyn_sequence` | [msdyn_salestag](msdyn_salestag.md) | _n/a_ | `msdyn_salestag_msdyn_sequence` |

## Source

Generated from [msdyn_sequence (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_sequence')) on 2026-05-07.