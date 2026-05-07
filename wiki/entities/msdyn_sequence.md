---
logical: "msdyn_sequence"
display: "Sequence"
entitySetName: "msdyn_sequences"
primaryId: "msdyn_sequenceid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Sequence

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_sequence` |
| Display name | Sequence |
| Display (plural) | Sequences |
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

Writable: **38** · Read-only: **19**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_AnalyticsAvailable`, `msdyn_analyticsversion`, `msdyn_assignsequencecondition`, `msdyn_assignsequencefieldname`, `msdyn_assignsequencetype`, `msdyn_cjodefinition`, `msdyn_cjodefinitionstate`, `msdyn_definition`, `msdyn_description`, `msdyn_iswaittimecomputationenabledatsequencelevel`, `msdyn_maxstepcount`, `msdyn_name`, `msdyn_orchestratorversion`, `msdyn_ParentSequence`, `msdyn_regardingentitydisplayname`, `msdyn_regardingEntityName`, `msdyn_SequenceExitCriterion`, `msdyn_sequenceId`, `msdyn_SequenceStats180d`, `msdyn_SequenceStats1y`, `msdyn_SequenceStats2y`, `msdyn_SequenceStats30d`, `msdyn_SequenceStats90d`, `msdyn_template`, `msdyn_totaltasks`, `msdyn_Type`, `msdyn_Version`, `msdyn_VersionDescription`, `msdyn_workflowid`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_SequenceRecords`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_sequence` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_sequence_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_sequence_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_sequence_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_sequence_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_sequence_parentsequence` | [msdyn_sequence](msdyn_sequence.md) | `msdyn_parentsequence` | `msdyn_ParentSequence` |
| `owner_msdyn_sequence` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_sequence` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_sequence` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (15)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_sequence_msdyn_segment_Sequence` | _n/a_ | `msdyn_sequence` | _n/a_ |
| `msdyn_sequence_appliedsequenceinstance` | _n/a_ | `msdyn_appliedsequenceinstance` | _n/a_ |
| `msdyn_sequence_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sequence_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sequence_connections1` | _n/a_ | `record1id` | _n/a_ |
| `msdyn_sequence_connections2` | _n/a_ | `record2id` | _n/a_ |
| `msdyn_sequence_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_sequence_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_sequence_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sequence_parentsequence` | _n/a_ | `msdyn_parentsequence` | _n/a_ |
| `msdyn_sequence_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_sequence_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sequence_sequencestat` | _n/a_ | `msdyn_sequence` | _n/a_ |
| `msdyn_sequence_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sequenceparent` | _n/a_ | `msdyn_parentsequence` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salestag_msdyn_sequence` | [msdyn_sequenceid](msdyn_sequenceid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_sequence.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_sequence.md) on 2026-05-06.