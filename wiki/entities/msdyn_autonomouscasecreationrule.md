---
logical: "msdyn_autonomouscasecreationrule"
display: "Autonomous case creation and update rules"
entitySetName: "msdyn_autonomouscasecreationrules"
primaryId: "msdyn_autonomouscasecreationruleid"
primaryName: "msdyn_rulename"
tableType: "Standard"
ownership: "UserOwned"
---

# Autonomous case creation and update rules

Autonomous case creation and update rules

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_autonomouscasecreationrule` |
| Display name | Autonomous case creation and update rules |
| Display (plural) | Autonomous case creation and update rules |
| Schema name | `msdyn_autonomouscasecreationrule` |
| Entity set (Web API) | `msdyn_autonomouscasecreationrules` |
| Primary id attribute | `msdyn_autonomouscasecreationruleid` |
| Primary name attribute | `msdyn_rulename` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_autonomouscasecreationrules?$select=msdyn_rulename&$top=10
GET /api/data/v9.2/msdyn_autonomouscasecreationrules(<guid>)
POST /api/data/v9.2/msdyn_autonomouscasecreationrules
PATCH /api/data/v9.2/msdyn_autonomouscasecreationrules(<guid>)
DELETE /api/data/v9.2/msdyn_autonomouscasecreationrules(<guid>)
```

## Attributes

Writable: **18** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_autonomouscasecreationruleId`, `msdyn_conditionsxml`, `msdyn_customapiname`, `msdyn_order`, `msdyn_predictorfields`, `msdyn_regarding`, `msdyn_rulename`, `msdyn_uniquename`, `msdyn_useCustomApi`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_autonomouscasecreationrule` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_autonomouscasecreationrule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_autonomouscasecreationrule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_autonomouscasecreationrule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_autonomouscasecreationrule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_autonomouscasecreationrule` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_autonomouscasecreationrule` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_autonomouscasecreationrule` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_autonomouscasecreationrule_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_autonomouscasecreationrule_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_autonomouscasecreationrule_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_autonomouscasecreationrule_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_autonomouscasecreationrule_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_autonomouscasecreationrule_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_autonomouscasecreationrule_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_autonomouscasecreationrule_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_autonomouscasecreationrule.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_autonomouscasecreationrule.md) on 2026-05-06.