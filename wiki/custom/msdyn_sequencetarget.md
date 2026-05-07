---
logical: "msdyn_sequencetarget"
display: "Destinazione sequenza"
entitySetName: "msdyn_sequencetargets"
primaryId: "msdyn_sequencetargetid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Destinazione sequenza

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_sequencetarget` |
| Display name | Destinazione sequenza |
| Display (plural) | Destinazioni sequenza |
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

Writable: **26** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_advancedfromstep`, `msdyn_appliedsequenceinstance`, `msdyn_currentstepcount`, `msdyn_currentstepdefinitionid`, `msdyn_currentstepname`, `msdyn_currentstepsubtype`, `msdyn_currentsteptype`, `msdyn_deactivatereason`, `msdyn_disconnectedafterstepdefinitionid`, `msdyn_msflowrunid`, `msdyn_name`, `msdyn_parentsequence`, `msdyn_parentsequenceversion`, `msdyn_regarding`, `msdyn_segment`, `msdyn_sequencetargetid`, `msdyn_sequencetargetuniquekey`, `msdyn_target`, `msdyn_totalstepcount`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (16)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_sequencetarget_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_sequencetarget_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_sequencetarget_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_sequencetarget_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_sequencetarget` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_sequencetarget` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_sequencetarget` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_sequencetarget` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_segment_msdyn_sequencetarget` | [msdyn_segment](msdyn_segment.md) | `msdyn_segment` | `msdyn_segment` |
| `msdyn_sequence_appliedsequenceinstance` | [msdyn_sequence](msdyn_sequence.md) | `msdyn_appliedsequenceinstance` | `msdyn_appliedsequenceinstance` |
| `msdyn_sequenceparent` | [msdyn_sequence](msdyn_sequence.md) | `msdyn_parentsequence` | `msdyn_parentsequence` |
| `msdyn_advancedfromstep_msdyn_sequencetarget` | [msdyn_sequencetargetstep](msdyn_sequencetargetstep.md) | `msdyn_advancedfromstep` | `msdyn_advancedfromstep` |
| `msdyn_sequencetarget_lead_msdyn_target` | [lead](lead.md) | `msdyn_target` | `msdyn_target` |
| `msdyn_sequencetarget_opportunity_msdyn_target` | [opportunity](opportunity.md) | `msdyn_target` | `msdyn_target` |
| `msdyn_sequencetarget_contact_msdyn_target` | [contact](contact.md) | `msdyn_target` | `msdyn_target` |
| `msdyn_sequencetarget_account_msdyn_target` | [account](account.md) | `msdyn_target` | `msdyn_target` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_sequencetarget_SyncErrors` | [msdyn_sequencetarget](msdyn_sequencetarget.md) | `regardingobjectid` | `regardingobjectid_msdyn_sequencetarget` |
| `msdyn_sequencetarget_DuplicateMatchingRecord` | [msdyn_sequencetarget](msdyn_sequencetarget.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_sequencetarget` |
| `msdyn_sequencetarget_DuplicateBaseRecord` | [msdyn_sequencetarget](msdyn_sequencetarget.md) | `baserecordid` | `baserecordid_msdyn_sequencetarget` |
| `msdyn_sequencetarget_AsyncOperations` | [msdyn_sequencetarget](msdyn_sequencetarget.md) | `regardingobjectid` | `regardingobjectid_msdyn_sequencetarget` |
| `msdyn_sequencetarget_MailboxTrackingFolders` | [msdyn_sequencetarget](msdyn_sequencetarget.md) | `regardingobjectid` | `regardingobjectid_msdyn_sequencetarget` |
| `msdyn_sequencetarget_UserEntityInstanceDatas` | [msdyn_sequencetarget](msdyn_sequencetarget.md) | `objectid` | `objectid_msdyn_sequencetarget` |
| `msdyn_sequencetarget_ProcessSession` | [msdyn_sequencetarget](msdyn_sequencetarget.md) | `regardingobjectid` | `regardingobjectid_msdyn_sequencetarget` |
| `msdyn_sequencetarget_BulkDeleteFailures` | [msdyn_sequencetarget](msdyn_sequencetarget.md) | `regardingobjectid` | `regardingobjectid_msdyn_sequencetarget` |
| `msdyn_sequencetarget_PrincipalObjectAttributeAccesses` | [msdyn_sequencetarget](msdyn_sequencetarget.md) | `objectid` | `objectid_msdyn_sequencetarget` |
| `msdyn_sequencetarget_connections1` | [msdyn_sequencetarget](msdyn_sequencetarget.md) | `record1id` | `record1id_msdyn_sequencetarget` |
| `msdyn_sequencetarget_connections2` | [msdyn_sequencetarget](msdyn_sequencetarget.md) | `record2id` | `record2id_msdyn_sequencetarget` |
| `msdyn_sequencetarget_sequencetargetstep` | [msdyn_sequencetarget](msdyn_sequencetarget.md) | `msdyn_sequencetarget` | `msdyn_sequencetarget` |


## Source

Generated from [msdyn_sequencetarget (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_sequencetarget')) on 2026-05-07.