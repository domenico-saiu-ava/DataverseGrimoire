---
logical: "msdyn_contactsuggestionrule"
display: "Contact suggestion rule"
entitySetName: "msdyn_contactsuggestionrules"
primaryId: "msdyn_contactsuggestionruleid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Contact suggestion rule

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_contactsuggestionrule` |
| Display name | Contact suggestion rule |
| Display (plural) | Contact suggestion rules |
| Schema name | `msdyn_contactsuggestionrule` |
| Entity set (Web API) | `msdyn_contactsuggestionrules` |
| Primary id attribute | `msdyn_contactsuggestionruleid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_contactsuggestionrules?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_contactsuggestionrules(<guid>)
POST /api/data/v9.2/msdyn_contactsuggestionrules
PATCH /api/data/v9.2/msdyn_contactsuggestionrules(<guid>)
DELETE /api/data/v9.2/msdyn_contactsuggestionrules(<guid>)
```

## Attributes

Writable: **22** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_contactsuggestionruleId`, `msdyn_contactsuggestionrulesetid`, `msdyn_customactioninputs`, `msdyn_customactionname`, `msdyn_descriptiontemplate`, `msdyn_descriptiontemplateplaceholders`, `msdyn_fetchxml`, `msdyn_name`, `msdyn_pathtotarget`, `msdyn_rank`, `msdyn_ruletype`, `msdyn_top`, `msdyn_uniquename`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_contactsuggestionrule` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_contactsuggestionrule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_contactsuggestionrule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_contactsuggestionrule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_contactsuggestionrule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_contactsuggestionruleset_msdyn_contactsuggestionrule_contactsuggestionrulesetid` | [msdyn_contactsuggestionruleset](msdyn_contactsuggestionruleset.md) | `msdyn_contactsuggestionrulesetid` | `msdyn_contactsuggestionrulesetid` |
| `owner_msdyn_contactsuggestionrule` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_contactsuggestionrule` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_contactsuggestionrule` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_contactsuggestionrule_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_contactsuggestionrule_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_contactsuggestionrule_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_contactsuggestionrule_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_contactsuggestionrule_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_contactsuggestionrule_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_contactsuggestionrule_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_contactsuggestionrule_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_contactsuggestionrule.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_contactsuggestionrule.md) on 2026-05-06.