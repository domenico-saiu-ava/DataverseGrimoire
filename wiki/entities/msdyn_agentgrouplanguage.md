---
logical: "msdyn_agentgrouplanguage"
display: "Agent Group Language"
entitySetName: "msdyn_agentgrouplanguages"
primaryId: "msdyn_agentgrouplanguageid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Agent Group Language

Represents the association of user groups with language

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_agentgrouplanguage` |
| Display name | Agent Group Language |
| Display (plural) | Agent Group Languages |
| Schema name | `msdyn_agentgrouplanguage` |
| Entity set (Web API) | `msdyn_agentgrouplanguages` |
| Primary id attribute | `msdyn_agentgrouplanguageid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_agentgrouplanguages?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_agentgrouplanguages(<guid>)
POST /api/data/v9.2/msdyn_agentgrouplanguages
PATCH /api/data/v9.2/msdyn_agentgrouplanguages(<guid>)
DELETE /api/data/v9.2/msdyn_agentgrouplanguages(<guid>)
```

## Attributes

Writable: **13** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_agentgroupid`, `msdyn_agentgrouplanguageId`, `msdyn_languageid`, `msdyn_name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_agentgrouplanguage` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_agentgrouplanguage_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_agentgrouplanguage_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_agentgrouplanguage_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_agentgrouplanguage_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_agentgroup_msdyn_agentgrouplanguage_agentgroupid` | [msdyn_agentgroup](msdyn_agentgroup.md) | `msdyn_agentgroupid` | `msdyn_agentgroupid` |
| `msdyn_msdyn_language_msdyn_agentgrouplanguage_languageid` | [msdyn_language](msdyn_language.md) | `msdyn_languageid` | `msdyn_languageid` |
| `owner_msdyn_agentgrouplanguage` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_agentgrouplanguage` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_agentgrouplanguage` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_agentgrouplanguage_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentgrouplanguage_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentgrouplanguage_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_agentgrouplanguage_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_agentgrouplanguage_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentgrouplanguage_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_agentgrouplanguage_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentgrouplanguage_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_agentgrouplanguage.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_agentgrouplanguage.md) on 2026-05-06.