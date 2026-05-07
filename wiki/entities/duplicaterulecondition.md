---
logical: "duplicaterulecondition"
display: "Duplicate Rule Condition"
entitySetName: "duplicateruleconditions"
primaryId: "duplicateruleconditionid"
tableType: "Standard"
ownership: "None"
---

# Duplicate Rule Condition

Condition of a duplicate detection rule.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `duplicaterulecondition` |
| Display name | Duplicate Rule Condition |
| Display (plural) | Duplicate Rule Conditions |
| Schema name | `DuplicateRuleCondition` |
| Entity set (Web API) | `duplicateruleconditions` |
| Primary id attribute | `duplicateruleconditionid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/duplicateruleconditions?$select=&$top=10
GET /api/data/v9.2/duplicateruleconditions(<guid>)
POST /api/data/v9.2/duplicateruleconditions
PATCH /api/data/v9.2/duplicateruleconditions(<guid>)
DELETE /api/data/v9.2/duplicateruleconditions(<guid>)
```

## Attributes

Writable: **9** · Read-only: **16**

### Writable

`BaseAttributeName`, `DuplicateRuleConditionId`, `IgnoreBlankValues`, `IsCustomizable`, `MatchingAttributeName`, `OperatorCode`, `OperatorParam`, `RegardingObjectId`, `UniqueRuleName`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerId`, `OwnerIdType`, `OwningBusinessUnit`, `OwningUser`, `SolutionId`, `SupportingSolutionId`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `DuplicateRule_DuplicateRuleConditions` | [duplicaterule](duplicaterule.md) | `regardingobjectid` | `regardingobjectid` |
| `lk_duplicaterulecondition_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_duplicaterulecondition_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_duplicateruleconditionbase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_duplicateruleconditionbase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `DuplicateRuleCondition_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [duplicaterulecondition.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/duplicaterulecondition.md) on 2026-05-06.