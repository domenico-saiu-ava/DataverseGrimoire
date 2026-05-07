---
logical: "msdyn_salestag"
display: "Sales Tag"
entitySetName: "msdyn_salestags"
primaryId: "msdyn_salestagid"
primaryName: "msdyn_tagname"
tableType: "Standard"
ownership: "UserOwned"
---

# Sales Tag

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salestag` |
| Display name | Sales Tag |
| Display (plural) | Sales Tags |
| Schema name | `msdyn_salestag` |
| Entity set (Web API) | `msdyn_salestags` |
| Primary id attribute | `msdyn_salestagid` |
| Primary name attribute | `msdyn_tagname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salestags?$select=msdyn_tagname&$top=10
GET /api/data/v9.2/msdyn_salestags(<guid>)
POST /api/data/v9.2/msdyn_salestags
PATCH /api/data/v9.2/msdyn_salestags(<guid>)
DELETE /api/data/v9.2/msdyn_salestags(<guid>)
```

## Attributes

Writable: **14** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_hierarchy`, `msdyn_ParentTag`, `msdyn_salestagId`, `msdyn_TagFullName`, `msdyn_TagName`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_salestag` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_salestag_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salestag_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salestag_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salestag_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_salestag_msdyn_salestag_ParentTag` | [msdyn_salestag](msdyn_salestag.md) | `msdyn_parenttag` | `msdyn_ParentTag` |
| `owner_msdyn_salestag` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_salestag` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_salestag` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salestag_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salestag_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salestag_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_salestag_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_salestag_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salestag_msdyn_salestag_ParentTag` | _n/a_ | `msdyn_parenttag` | _n/a_ |
| `msdyn_salestag_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_salestag_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salestag_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salestag_msdyn_sequence` | [msdyn_salestagid](msdyn_salestagid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_salestag.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_salestag.md) on 2026-05-06.