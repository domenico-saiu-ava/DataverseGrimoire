---
logical: "msdyn_agentlanguage"
display: "Agent Language"
entitySetName: "msdyn_agentlanguages"
primaryId: "msdyn_agentlanguageid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Agent Language

Represents the association of users with language

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_agentlanguage` |
| Display name | Agent Language |
| Display (plural) | Agent Languages |
| Schema name | `msdyn_agentlanguage` |
| Entity set (Web API) | `msdyn_agentlanguages` |
| Primary id attribute | `msdyn_agentlanguageid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_agentlanguages?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_agentlanguages(<guid>)
POST /api/data/v9.2/msdyn_agentlanguages
PATCH /api/data/v9.2/msdyn_agentlanguages(<guid>)
DELETE /api/data/v9.2/msdyn_agentlanguages(<guid>)
```

## Attributes

Writable: **13** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_agentlanguageId`, `msdyn_languageid`, `msdyn_name`, `msdyn_systemuserid`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_agentlanguage` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_agentlanguage_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_agentlanguage_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_agentlanguage_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_agentlanguage_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_language_msdyn_agentlanguage_languageid` | [msdyn_language](msdyn_language.md) | `msdyn_languageid` | `msdyn_languageid` |
| `msdyn_systemuser_msdyn_agentlanguage_systemuserid` | [systemuser](systemuser.md) | `msdyn_systemuserid` | `msdyn_systemuserid` |
| `owner_msdyn_agentlanguage` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_agentlanguage` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_agentlanguage` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_agentlanguage_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentlanguage_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentlanguage_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_agentlanguage_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_agentlanguage_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentlanguage_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_agentlanguage_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentlanguage_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_agentlanguage.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_agentlanguage.md) on 2026-05-06.