---
logical: "duplicaterule"
display: "Duplicate Detection Rule"
entitySetName: "duplicaterules"
primaryId: "duplicateruleid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Duplicate Detection Rule

Rule used to identify potential duplicates.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `duplicaterule` |
| Display name | Duplicate Detection Rule |
| Display (plural) | Duplicate Detection Rules |
| Schema name | `DuplicateRule` |
| Entity set (Web API) | `duplicaterules` |
| Primary id attribute | `duplicateruleid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/duplicaterules?$select=name&$top=10
GET /api/data/v9.2/duplicaterules(<guid>)
POST /api/data/v9.2/duplicaterules
PATCH /api/data/v9.2/duplicaterules(<guid>)
DELETE /api/data/v9.2/duplicaterules(<guid>)
```

## Attributes

Writable: **14** · Read-only: **22**

### Writable

`BaseEntityName`, `Description`, `DuplicateRuleId`, `ExcludeInactiveRecords`, `IsCaseSensitive`, `IsCustomizable`, `MatchingEntityName`, `Name`, `OwnerId`, `OwnerIdType`, `StatusCode`, `TimeZoneRuleVersionNumber`, `UniqueName`, `UTCConversionTimeZoneCode`

### Read-only

`BaseEntityMatchCodeTable`, `BaseEntityTypeCode`, `ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `MatchingEntityMatchCodeTable`, `MatchingEntityTypeCode`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `StateCode`, `SupportingSolutionId`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `BusinessUnit_DuplicateRules` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_duplicaterule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_duplicaterule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_duplicaterulebase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_duplicaterulebase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `owner_duplicaterules` | [owner](owner.md) | `ownerid` | `ownerid` |
| `SystemUser_DuplicateRules` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_DuplicateRules` | [team](team.md) | `owningteam` | `owningteam` |

### One-to-Many (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `DuplicateRule_Annotation` | _n/a_ | `objectid` | _n/a_ |
| `DuplicateRule_DuplicateBaseRecord` | _n/a_ | `duplicateruleid` | _n/a_ |
| `DuplicateRule_DuplicateRuleConditions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `DuplicateRule_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [duplicaterule.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/duplicaterule.md) on 2026-05-06.