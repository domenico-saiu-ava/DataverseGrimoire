---
logical: "msdyn_templateruleset"
display: "Template Rule Set"
entitySetName: "msdyn_templaterulesets"
primaryId: "msdyn_templaterulesetid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Template Rule Set

Contains template rulesets that can be applied to custom assignment method in a queue

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_templateruleset` |
| Display name | Template Rule Set |
| Display (plural) | Template Rule Sets |
| Schema name | `msdyn_templateruleset` |
| Entity set (Web API) | `msdyn_templaterulesets` |
| Primary id attribute | `msdyn_templaterulesetid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_templaterulesets?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_templaterulesets(<guid>)
POST /api/data/v9.2/msdyn_templaterulesets
PATCH /api/data/v9.2/msdyn_templaterulesets(<guid>)
DELETE /api/data/v9.2/msdyn_templaterulesets(<guid>)
```

## Attributes

Writable: **20** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_bulkoperationrunid`, `msdyn_channel`, `msdyn_channeltype`, `msdyn_description`, `msdyn_draftruleset`, `msdyn_name`, `msdyn_publishedon`, `msdyn_publishedruleset`, `msdyn_templaterulesetId`, `msdyn_type`, `msdyn_UniqueName`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_templateruleset` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_templateruleset_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_templateruleset_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_templateruleset_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_templateruleset_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_templateruleset_draftruleset_msdyn_decisionruleset` | [msdyn_decisionruleset](msdyn_decisionruleset.md) | `msdyn_draftruleset` | `msdyn_draftruleset` |
| `msdyn_templateruleset_publishedruleset_msdyn_decisionruleset` | [msdyn_decisionruleset](msdyn_decisionruleset.md) | `msdyn_publishedruleset` | `msdyn_publishedruleset` |
| `owner_msdyn_templateruleset` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_templateruleset` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_templateruleset` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_templateruleset_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_templateruleset_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_templateruleset_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_templateruleset_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_templateruleset_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_templateruleset_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_templateruleset_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_templateruleset_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_templatevariablebatchoperation_msdyn_templaterulesetid_msdyn_templateruleset` | _n/a_ | `msdyn_templaterulesetid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_templatecontextvariable_msdyn_templateruleset_msdyn_templateruleset` | [msdyn_templaterulesetid](msdyn_templaterulesetid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_templateruleset.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_templateruleset.md) on 2026-05-06.