---
logical: "msdyn_ocautoblockrule"
display: "Auto block rule"
entitySetName: "msdyn_ocautoblockrules"
primaryId: "msdyn_ocautoblockruleid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Auto block rule

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocautoblockrule` |
| Display name | Auto block rule |
| Display (plural) | Auto block rules |
| Schema name | `msdyn_ocautoblockrule` |
| Entity set (Web API) | `msdyn_ocautoblockrules` |
| Primary id attribute | `msdyn_ocautoblockruleid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocautoblockrules?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocautoblockrules(<guid>)
POST /api/data/v9.2/msdyn_ocautoblockrules
PATCH /api/data/v9.2/msdyn_ocautoblockrules(<guid>)
DELETE /api/data/v9.2/msdyn_ocautoblockrules(<guid>)
```

## Attributes

Writable: **13** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_description`, `msdyn_name`, `msdyn_ocautoblockruleId`, `msdyn_rule`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_ocautoblockrule` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_ocautoblockrule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocautoblockrule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocautoblockrule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocautoblockrule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_ocautoblockrule` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_ocautoblockrule` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_ocautoblockrule` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_ocautoblockrule_msdyn_ocflaggedspam_ruleid` | _n/a_ | `msdyn_ruleid` | _n/a_ |
| `msdyn_ocautoblockrule_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocautoblockrule_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocautoblockrule_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_ocautoblockrule_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_ocautoblockrule_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocautoblockrule_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocautoblockrule_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocautoblockrule_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_ocautoblockrule.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_ocautoblockrule.md) on 2026-05-06.