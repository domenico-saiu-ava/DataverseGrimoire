---
logical: "msdyn_contactsuggestionruleset"
display: "Contact suggestion ruleset"
entitySetName: "msdyn_contactsuggestionrulesets"
primaryId: "msdyn_contactsuggestionrulesetid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Contact suggestion ruleset

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_contactsuggestionruleset` |
| Display name | Contact suggestion ruleset |
| Display (plural) | Contact suggestion rulesets |
| Schema name | `msdyn_contactsuggestionruleset` |
| Entity set (Web API) | `msdyn_contactsuggestionrulesets` |
| Primary id attribute | `msdyn_contactsuggestionrulesetid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_contactsuggestionrulesets?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_contactsuggestionrulesets(<guid>)
POST /api/data/v9.2/msdyn_contactsuggestionrulesets
PATCH /api/data/v9.2/msdyn_contactsuggestionrulesets(<guid>)
DELETE /api/data/v9.2/msdyn_contactsuggestionrulesets(<guid>)
```

## Attributes

Writable: **13** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_contactsuggestionrulesetId`, `msdyn_entitytype`, `msdyn_name`, `msdyn_uniquename`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_contactsuggestionruleset` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_contactsuggestionruleset_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_contactsuggestionruleset_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_contactsuggestionruleset_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_contactsuggestionruleset_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_entity_msdyn_contactsuggestionruleset_entitytype` | [entity](entity.md) | `msdyn_entitytype` | `msdyn_entitytype` |
| `owner_msdyn_contactsuggestionruleset` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_contactsuggestionruleset` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_contactsuggestionruleset` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_contactsuggestionruleset_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_contactsuggestionruleset_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_contactsuggestionruleset_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_contactsuggestionruleset_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_contactsuggestionruleset_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_contactsuggestionruleset_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_contactsuggestionruleset_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_contactsuggestionruleset_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_msdyn_contactsuggestionruleset_msdyn_contactsuggestionrule_contactsuggestionrulesetid` | _n/a_ | `msdyn_contactsuggestionrulesetid` | _n/a_ |


## Source

Generated from [msdyn_contactsuggestionruleset.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_contactsuggestionruleset.md) on 2026-05-06.