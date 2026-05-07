---
logical: "msdyn_ocautomatedactionrulesmapping"
display: "Automated action rules mapping"
entitySetName: "msdyn_ocautomatedactionrulesmappings"
primaryId: "msdyn_ocautomatedactionrulesmappingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Automated action rules mapping

The mapping of omnichannel automated action rules.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocautomatedactionrulesmapping` |
| Display name | Automated action rules mapping |
| Display (plural) | Automated action rules mappings |
| Schema name | `msdyn_ocautomatedactionrulesmapping` |
| Entity set (Web API) | `msdyn_ocautomatedactionrulesmappings` |
| Primary id attribute | `msdyn_ocautomatedactionrulesmappingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocautomatedactionrulesmappings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocautomatedactionrulesmappings(<guid>)
POST /api/data/v9.2/msdyn_ocautomatedactionrulesmappings
PATCH /api/data/v9.2/msdyn_ocautomatedactionrulesmappings(<guid>)
DELETE /api/data/v9.2/msdyn_ocautomatedactionrulesmappings(<guid>)
```

## Attributes

Writable: **13** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_automatedactionruleId`, `msdyn_liveworkstreamid`, `msdyn_name`, `msdyn_ocautomatedactionrulesmappingId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_ocautomatedactionrulesmapping` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_ocautomatedactionrulesmapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocautomatedactionrulesmapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocautomatedactionrulesmapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocautomatedactionrulesmapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_liveworkstream_msdyn_ocautomatedactionrulesmapping_liveworkstreamid` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_liveworkstreamid` | `msdyn_liveworkstreamid` |
| `msdyn_msdyn_ocautomatedactionrule_msdyn_ocautomatedactionrulesmapping_automatedactionruleId` | [msdyn_ocautomatedactionrule](msdyn_ocautomatedactionrule.md) | `msdyn_automatedactionruleid` | `msdyn_automatedactionruleId` |
| `owner_msdyn_ocautomatedactionrulesmapping` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_ocautomatedactionrulesmapping` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_ocautomatedactionrulesmapping` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocautomatedactionrulesmapping_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocautomatedactionrulesmapping_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocautomatedactionrulesmapping_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_ocautomatedactionrulesmapping_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_ocautomatedactionrulesmapping_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocautomatedactionrulesmapping_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocautomatedactionrulesmapping_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocautomatedactionrulesmapping_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_ocautomatedactionrulesmapping.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_ocautomatedactionrulesmapping.md) on 2026-05-06.