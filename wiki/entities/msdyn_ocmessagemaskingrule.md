---
logical: "msdyn_ocmessagemaskingrule"
display: "Message masking rule"
entitySetName: "msdyn_ocmessagemaskingrules"
primaryId: "msdyn_ocmessagemaskingruleid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Message masking rule

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocmessagemaskingrule` |
| Display name | Message masking rule |
| Display (plural) | Message masking rule |
| Schema name | `msdyn_ocmessagemaskingrule` |
| Entity set (Web API) | `msdyn_ocmessagemaskingrules` |
| Primary id attribute | `msdyn_ocmessagemaskingruleid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocmessagemaskingrules?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocmessagemaskingrules(<guid>)
POST /api/data/v9.2/msdyn_ocmessagemaskingrules
PATCH /api/data/v9.2/msdyn_ocmessagemaskingrules(<guid>)
DELETE /api/data/v9.2/msdyn_ocmessagemaskingrules(<guid>)
```

## Attributes

Writable: **14** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_liveworkstreamid`, `msdyn_name`, `msdyn_oclanguageid`, `msdyn_ocmessagemaskingruleId`, `msdyn_redactedmessagetext`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_ocmessagemaskingrule` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_ocmessagemaskingrule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocmessagemaskingrule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocmessagemaskingrule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocmessagemaskingrule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_liveworkstream_msdyn_ocmessagemaskingrule_liveworkstreamid` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_liveworkstreamid` | `msdyn_liveworkstreamid` |
| `msdyn_msdyn_oclanguage_msdyn_ocmessagemaskingrule_oclanguageid` | [msdyn_oclanguage](msdyn_oclanguage.md) | `msdyn_oclanguageid` | `msdyn_oclanguageid` |
| `owner_msdyn_ocmessagemaskingrule` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_ocmessagemaskingrule` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_ocmessagemaskingrule` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocmessagemaskingrule_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocmessagemaskingrule_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocmessagemaskingrule_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_ocmessagemaskingrule_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_ocmessagemaskingrule_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocmessagemaskingrule_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocmessagemaskingrule_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocmessagemaskingrule_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_ocmessagemaskingrule.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_ocmessagemaskingrule.md) on 2026-05-06.