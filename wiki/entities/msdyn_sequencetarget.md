---
logical: "msdyn_sequencetarget"
display: "Sequence Target"
entitySetName: "msdyn_sequencetargets"
primaryId: "msdyn_sequencetargetid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Sequence Target

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_sequencetarget` |
| Display name | Sequence Target |
| Display (plural) | Sequence Targets |
| Schema name | `msdyn_sequencetarget` |
| Entity set (Web API) | `msdyn_sequencetargets` |
| Primary id attribute | `msdyn_sequencetargetid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_sequencetargets?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_sequencetargets(<guid>)
POST /api/data/v9.2/msdyn_sequencetargets
PATCH /api/data/v9.2/msdyn_sequencetargets(<guid>)
DELETE /api/data/v9.2/msdyn_sequencetargets(<guid>)
```

## Attributes

Writable: **28** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_advancedfromstep`, `msdyn_appliedsequenceinstance`, `msdyn_currentstepcount`, `msdyn_currentstepdefinitionid`, `msdyn_currentstepname`, `msdyn_currentstepsubtype`, `msdyn_currentsteptype`, `msdyn_deactivatereason`, `msdyn_disconnectedafterstepdefinitionid`, `msdyn_msflowrunid`, `msdyn_name`, `msdyn_parentsequence`, `msdyn_ParentSequenceVersion`, `msdyn_regarding`, `msdyn_segment`, `msdyn_sequencetargetId`, `msdyn_sequencetargetuniquekey`, `msdyn_target`, `msdyn_targetIdType`, `msdyn_totalstepcount`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (16)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_sequencetarget` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_sequencetarget_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_sequencetarget_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_sequencetarget_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_sequencetarget_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_advancedfromstep_msdyn_sequencetarget` | [msdyn_sequencetargetstep](msdyn_sequencetargetstep.md) | `msdyn_advancedfromstep` | `msdyn_advancedfromstep` |
| `msdyn_segment_msdyn_sequencetarget` | [msdyn_segment](msdyn_segment.md) | `msdyn_segment` | `msdyn_segment` |
| `msdyn_sequence_appliedsequenceinstance` | [msdyn_sequence](msdyn_sequence.md) | `msdyn_appliedsequenceinstance` | `msdyn_appliedsequenceinstance` |
| `msdyn_sequenceparent` | [msdyn_sequence](msdyn_sequence.md) | `msdyn_parentsequence` | `msdyn_parentsequence` |
| `msdyn_sequencetarget_account_msdyn_target` | [account](account.md) | `msdyn_target` | `msdyn_target` |
| `msdyn_sequencetarget_contact_msdyn_target` | [contact](contact.md) | `msdyn_target` | `msdyn_target` |
| `msdyn_sequencetarget_lead_msdyn_target` | [lead](lead.md) | `msdyn_target` | `msdyn_target` |
| `msdyn_sequencetarget_opportunity_msdyn_target` | [opportunity](opportunity.md) | `msdyn_target` | `msdyn_target` |
| `owner_msdyn_sequencetarget` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_sequencetarget` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_sequencetarget` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_sequencetarget_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sequencetarget_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sequencetarget_connections1` | _n/a_ | `record1id` | _n/a_ |
| `msdyn_sequencetarget_connections2` | _n/a_ | `record2id` | _n/a_ |
| `msdyn_sequencetarget_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_sequencetarget_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_sequencetarget_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sequencetarget_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_sequencetarget_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sequencetarget_sequencetargetstep` | _n/a_ | `msdyn_sequencetarget` | _n/a_ |
| `msdyn_sequencetarget_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_sequencetarget.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_sequencetarget.md) on 2026-05-06.