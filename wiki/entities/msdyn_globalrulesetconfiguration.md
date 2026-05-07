---
logical: "msdyn_globalrulesetconfiguration"
display: "msdyn_globalrulesetconfiguration"
entitySetName: "msdyn_globalrulesetconfigurations"
primaryId: "msdyn_globalrulesetconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# msdyn_globalrulesetconfiguration

Entity to store Global Rule Configurations (Not Tied to Workstream) e.g. Config Profile Identification Rules

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_globalrulesetconfiguration` |
| Display name | msdyn_globalrulesetconfiguration |
| Display (plural) | msdyn_globalrulesetconfiguration |
| Schema name | `msdyn_globalrulesetconfiguration` |
| Entity set (Web API) | `msdyn_globalrulesetconfigurations` |
| Primary id attribute | `msdyn_globalrulesetconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_globalrulesetconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_globalrulesetconfigurations(<guid>)
POST /api/data/v9.2/msdyn_globalrulesetconfigurations
PATCH /api/data/v9.2/msdyn_globalrulesetconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_globalrulesetconfigurations(<guid>)
```

## Attributes

Writable: **13** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_decisionrulesetid`, `msdyn_globalrulesetconfigurationId`, `msdyn_name`, `msdyn_ruletype`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_globalrulesetconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_globalrulesetconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_globalrulesetconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_globalrulesetconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_globalrulesetconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_globalrulesetconfiguration_msdyn_decisionrulesetid_msdyn_decisionruleset` | [msdyn_decisionruleset](msdyn_decisionruleset.md) | `msdyn_decisionrulesetid` | `msdyn_decisionrulesetid` |
| `owner_msdyn_globalrulesetconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_globalrulesetconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_globalrulesetconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_globalrulesetconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_globalrulesetconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_globalrulesetconfiguration_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_globalrulesetconfiguration_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_globalrulesetconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_globalrulesetconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_globalrulesetconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_globalrulesetconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_globalrulesetconfiguration.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_globalrulesetconfiguration.md) on 2026-05-06.