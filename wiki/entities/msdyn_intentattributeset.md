---
logical: "msdyn_intentattributeset"
display: "intentattributeset"
entitySetName: "msdyn_intentattributesets"
primaryId: "msdyn_intentattributesetid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# intentattributeset

Captures the attributes required to complete a given intent

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_intentattributeset` |
| Display name | intentattributeset |
| Display (plural) | intentattributesets |
| Schema name | `msdyn_intentattributeset` |
| Entity set (Web API) | `msdyn_intentattributesets` |
| Primary id attribute | `msdyn_intentattributesetid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_intentattributesets?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_intentattributesets(<guid>)
POST /api/data/v9.2/msdyn_intentattributesets
PATCH /api/data/v9.2/msdyn_intentattributesets(<guid>)
DELETE /api/data/v9.2/msdyn_intentattributesets(<guid>)
```

## Attributes

Writable: **20** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_intentattributeid`, `msdyn_intentattributesetId`, `msdyn_intentfamilyid`, `msdyn_intentid`, `msdyn_ismandatory`, `msdyn_name`, `msdyn_occurrencecount`, `msdyn_occurrencecount_last12months`, `msdyn_occurrencecount_last30days`, `msdyn_reviewstate`, `msdyn_source`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_intentattributeset` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_intentattributeset_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_intentattributeset_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_intentattributeset_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_intentattributeset_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_intentattributeset_intentfamilyid_msdyn_intentfamily` | [msdyn_intentfamily](msdyn_intentfamily.md) | `msdyn_intentfamilyid` | `msdyn_intentfamilyid` |
| `msdyn_msdyn_intent_msdyn_intentattributeset_intentid` | [msdyn_intent](msdyn_intent.md) | `msdyn_intentid` | `msdyn_intentid` |
| `msdyn_msdyn_intentattribute_msdyn_intentattributeset_intentattributeid` | [msdyn_intentattribute](msdyn_intentattribute.md) | `msdyn_intentattributeid` | `msdyn_intentattributeid` |
| `owner_msdyn_intentattributeset` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_intentattributeset` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_intentattributeset` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_intentattributeset_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentattributeset_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentattributeset_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_intentattributeset_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_intentattributeset_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentattributeset_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_intentattributeset_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentattributeset_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_intentattributeset.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_intentattributeset.md) on 2026-05-06.