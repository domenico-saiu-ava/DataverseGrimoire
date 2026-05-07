---
logical: "msdyn_timespent"
display: "Time spent in BPF"
entitySetName: "msdyn_timespents"
primaryId: "msdyn_timespentid"
primaryName: "msdyn_timespentname"
tableType: "Standard"
ownership: "UserOwned"
---

# Time spent in BPF

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_timespent` |
| Display name | Time spent in BPF |
| Display (plural) | timespents |
| Schema name | `msdyn_timespent` |
| Entity set (Web API) | `msdyn_timespents` |
| Primary id attribute | `msdyn_timespentid` |
| Primary name attribute | `msdyn_timespentname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_timespents?$select=msdyn_timespentname&$top=10
GET /api/data/v9.2/msdyn_timespents(<guid>)
POST /api/data/v9.2/msdyn_timespents
PATCH /api/data/v9.2/msdyn_timespents(<guid>)
DELETE /api/data/v9.2/msdyn_timespents(<guid>)
```

## Attributes

Writable: **15** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_businessprocessflow`, `msdyn_leadlookup`, `msdyn_opplookup`, `msdyn_stage`, `msdyn_timespentId`, `msdyn_timespentindays`, `msdyn_timespentname`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_timespent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_timespent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_timespent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_timespent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_timespent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_lead_msdyn_timespent_leadlookup` | [lead](lead.md) | `msdyn_leadlookup` | `msdyn_leadlookup` |
| `msdyn_opportunity_msdyn_timespent_opplookup` | [opportunity](opportunity.md) | `msdyn_opplookup` | `msdyn_opplookup` |
| `msdyn_processstage_msdyn_timespent_stage` | [processstage](processstage.md) | `msdyn_stage` | `msdyn_stage` |
| `msdyn_workflow_msdyn_timespent_businessprocessflow` | [workflow](workflow.md) | `msdyn_businessprocessflow` | `msdyn_businessprocessflow` |
| `owner_msdyn_timespent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_timespent` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_timespent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_timespent_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_timespent_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_timespent_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_timespent_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_timespent_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_timespent_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_timespent_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_timespent_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_timespent.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_timespent.md) on 2026-05-06.