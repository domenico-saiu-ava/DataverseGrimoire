---
logical: "msdyn_ocautomatedactionrule"
display: "Timeout Rule"
entitySetName: "msdyn_ocautomatedactionrules"
primaryId: "msdyn_ocautomatedactionruleid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Timeout Rule

The omnichannel automated action rules.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocautomatedactionrule` |
| Display name | Timeout Rule |
| Display (plural) | Timeout Rules |
| Schema name | `msdyn_ocautomatedactionrule` |
| Entity set (Web API) | `msdyn_ocautomatedactionrules` |
| Primary id attribute | `msdyn_ocautomatedactionruleid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocautomatedactionrules?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocautomatedactionrules(<guid>)
POST /api/data/v9.2/msdyn_ocautomatedactionrules
PATCH /api/data/v9.2/msdyn_ocautomatedactionrules(<guid>)
DELETE /api/data/v9.2/msdyn_ocautomatedactionrules(<guid>)
```

## Attributes

Writable: **17** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_actiontype`, `msdyn_eventfrequency`, `msdyn_eventinterval`, `msdyn_eventtype`, `msdyn_name`, `msdyn_ocautomatedactionruleId`, `msdyn_operator`, `msdyn_order`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_ocautomatedactionrule` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_ocautomatedactionrule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocautomatedactionrule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocautomatedactionrule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocautomatedactionrule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_ocautomatedactionrule` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_ocautomatedactionrule` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_ocautomatedactionrule` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_ocautomatedactionrule_msdyn_ocautomatedactionrulesmapping_automatedactionruleId` | _n/a_ | `msdyn_automatedactionruleid` | _n/a_ |
| `msdyn_ocautomatedactionrule_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocautomatedactionrule_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocautomatedactionrule_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_ocautomatedactionrule_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_ocautomatedactionrule_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocautomatedactionrule_msdyn_ocautomatedactionrule_msdyn_oclocalizationdata` | _n/a_ | `msdyn_loc_ocautomatedactionruleid` | _n/a_ |
| `msdyn_ocautomatedactionrule_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocautomatedactionrule_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocautomatedactionrule_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_channelprofile_msdyn_ocautomatedactionrule` | [msdyn_ocautomatedactionruleid](msdyn_ocautomatedactionruleid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_ocautomatedactionrule.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_ocautomatedactionrule.md) on 2026-05-06.