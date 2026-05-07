---
logical: "msdyn_ocdispositioncode"
display: "OC Disposition Code"
entitySetName: "msdyn_ocdispositioncodes"
primaryId: "msdyn_ocdispositioncodeid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# OC Disposition Code

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocdispositioncode` |
| Display name | OC Disposition Code |
| Display (plural) | OC Disposition Codes |
| Schema name | `msdyn_ocdispositioncode` |
| Entity set (Web API) | `msdyn_ocdispositioncodes` |
| Primary id attribute | `msdyn_ocdispositioncodeid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocdispositioncodes?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocdispositioncodes(<guid>)
POST /api/data/v9.2/msdyn_ocdispositioncodes
PATCH /api/data/v9.2/msdyn_ocdispositioncodes(<guid>)
DELETE /api/data/v9.2/msdyn_ocdispositioncodes(<guid>)
```

## Attributes

Writable: **15** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_appliestoallworkstreams`, `msdyn_dispositioncodecategoryid`, `msdyn_dispositioncodevalue`, `msdyn_languageid`, `msdyn_name`, `msdyn_ocdispositioncodeId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_ocdispositioncode` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_ocdispositioncode_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocdispositioncode_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocdispositioncode_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocdispositioncode_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_ocdispositioncode_dispositioncodecategoryid_msdyn_dispositioncodecategory` | [msdyn_dispositioncodecategory](msdyn_dispositioncodecategory.md) | `msdyn_dispositioncodecategoryid` | `msdyn_dispositioncodecategoryid` |
| `msdyn_ocdispositioncode_languageid_msdyn_oclanguage` | [msdyn_oclanguage](msdyn_oclanguage.md) | `msdyn_languageid` | `msdyn_languageid` |
| `owner_msdyn_ocdispositioncode` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_ocdispositioncode` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_ocdispositioncode` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationdispositioncodemap_ocdispositioncode` | _n/a_ | `msdyn_ocdispositioncodeid` | _n/a_ |
| `msdyn_ocdispositioncode_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocdispositioncode_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocdispositioncode_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_ocdispositioncode_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_ocdispositioncode_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocdispositioncode_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocdispositioncode_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocdispositioncode_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocdispositioncode_liveworkstream_msdyn_liveworkstream` | [msdyn_ocdispositioncodeid](msdyn_ocdispositioncodeid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_ocdispositioncode.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_ocdispositioncode.md) on 2026-05-06.