---
logical: "textanalyticsentitymapping"
display: "Text Analytics Entity Mapping"
entitySetName: "textanalyticsentitymappings"
primaryId: "textanalyticsentitymappingid"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Text Analytics Entity Mapping

## Identity

| Property | Value |
| --- | --- |
| Logical name | `textanalyticsentitymapping` |
| Display name | Text Analytics Entity Mapping |
| Display (plural) | Text Analytics Entity Mappings |
| Schema name | `TextAnalyticsEntityMapping` |
| Entity set (Web API) | `textanalyticsentitymappings` |
| Primary id attribute | `textanalyticsentitymappingid` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/textanalyticsentitymappings?$select=&$top=10
GET /api/data/v9.2/textanalyticsentitymappings(<guid>)
POST /api/data/v9.2/textanalyticsentitymappings
PATCH /api/data/v9.2/textanalyticsentitymappings(<guid>)
DELETE /api/data/v9.2/textanalyticsentitymappings(<guid>)
```

## Attributes

Writable: **13** · Read-only: **7**

### Writable

`AdvancedSimilarityRuleId`, `Entity`, `EntityDisplayName`, `EntityPickList`, `Field`, `FieldDisplayName`, `FieldPickList`, `IsTextMatchMapping`, `KnowledgeSearchModelId`, `ModelType`, `RelationshipName`, `SimilarityRuleId`, `TextAnalyticsEntityMappingId`

### Read-only

`ComponentState`, `IsManaged`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `TextAnalyticsEntityMappingIdUnique`

## Relationships

### Many-to-One (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `organization_textanalyticsentitymapping` | [organization](organization.md) | `organizationid` | `organizationid` |
| `similarityrule_textanalyticsentitymapping` | [similarityrule](similarityrule.md) | `similarityruleid` | `similarityruleid` |



## Source

Generated from [textanalyticsentitymapping.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/textanalyticsentitymapping.md) on 2026-05-06.