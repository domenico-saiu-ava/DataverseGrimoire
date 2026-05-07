---
logical: "msdyn_intentattribute"
display: "intentattribute"
entitySetName: "msdyn_intentattributes"
primaryId: "msdyn_intentattributeid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# intentattribute

Captures all possible attributes across all intents

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_intentattribute` |
| Display name | intentattribute |
| Display (plural) | intentattributes |
| Schema name | `msdyn_intentattribute` |
| Entity set (Web API) | `msdyn_intentattributes` |
| Primary id attribute | `msdyn_intentattributeid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_intentattributes?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_intentattributes(<guid>)
POST /api/data/v9.2/msdyn_intentattributes
PATCH /api/data/v9.2/msdyn_intentattributes(<guid>)
DELETE /api/data/v9.2/msdyn_intentattributes(<guid>)
```

## Attributes

Writable: **15** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_acronyms`, `msdyn_intentattributeId`, `msdyn_intentfamilyid`, `msdyn_name`, `msdyn_reviewstate`, `msdyn_source`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_intentattribute` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_intentattribute_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_intentattribute_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_intentattribute_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_intentattribute_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_intentattribute_intentfamilyid_msdyn_intentfamily` | [msdyn_intentfamily](msdyn_intentfamily.md) | `msdyn_intentfamilyid` | `msdyn_intentfamilyid` |
| `owner_msdyn_intentattribute` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_intentattribute` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_intentattribute` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_intentattribute_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentattribute_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentattribute_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_intentattribute_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_intentattribute_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentattribute_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_intentattribute_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentattribute_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_msdyn_intentattribute_msdyn_intentattribute_entity_intentattributeid` | _n/a_ | `msdyn_intentattributeid` | _n/a_ |
| `msdyn_msdyn_intentattribute_msdyn_intentattributeset_intentattributeid` | _n/a_ | `msdyn_intentattributeid` | _n/a_ |


## Source

Generated from [msdyn_intentattribute.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_intentattribute.md) on 2026-05-06.