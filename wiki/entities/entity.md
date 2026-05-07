---
logical: "entity"
display: "Entity"
entitySetName: "entities"
primaryId: "entityid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# Entity

## Identity

| Property | Value |
| --- | --- |
| Logical name | `entity` |
| Display name | Entity |
| Display (plural) | Entities |
| Schema name | `Entity` |
| Entity set (Web API) | `entities` |
| Primary id attribute | `entityid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/entities?$select=name&$top=10
GET /api/data/v9.2/entities(<guid>)
POST /api/data/v9.2/entities
PATCH /api/data/v9.2/entities(<guid>)
DELETE /api/data/v9.2/entities(<guid>)
```

## Attributes

Writable: **16** · Read-only: **6**

### Writable

`AddressTableName`, `BaseTableName`, `CollectionName`, `EntityId`, `EntitySetName`, `ExtensionTableName`, `ExternalCollectionName`, `ExternalName`, `LogicalCollectionName`, `LogicalName`, `Name`, `OriginalLocalizedCollectionName`, `OriginalLocalizedName`, `ParentControllingAttributeName`, `PhysicalName`, `ReportViewName`

### Read-only

`ComponentState`, `IsActivity`, `ObjectTypeCode`, `OverwriteTime`, `SolutionId`, `VersionNumber`

## Relationships


### One-to-Many (21)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `AIPluginOperation_Entity_Entity` | _n/a_ | `entity` | _n/a_ |
| `catalogassignment_entity` | _n/a_ | `object` | _n/a_ |
| `DVFileSearchEntity_Entity_Entity` | _n/a_ | `entity` | _n/a_ |
| `DVTableSearchEntity_Entity_Entity` | _n/a_ | `entity` | _n/a_ |
| `emailaddressconfiguration_entity_EntityId` | _n/a_ | `entityid` | _n/a_ |
| `entity_appaction_ContextEntity` | _n/a_ | `contextentity` | _n/a_ |
| `entity_appactionrule_ContextEntity` | _n/a_ | `contextentity` | _n/a_ |
| `entity_entityanalyticsconfig` | _n/a_ | `parententityid` | _n/a_ |
| `entity_sensitivitylabelattributemapping_EntityId` | _n/a_ | `entityid` | _n/a_ |
| `entity_serviceplanmapping` | _n/a_ | `entity` | _n/a_ |
| `entity_solutioncomponentbatchconfiguration_PrimaryEntity` | _n/a_ | `primaryentity` | _n/a_ |
| `entity_solutioncomponentbatchconfiguration_RelatedEntity` | _n/a_ | `relatedentity` | _n/a_ |
| `entity_solutioncomponentconfiguration` | _n/a_ | `entityid` | _n/a_ |
| `entityclusterconfig_extensionofrecordid` | _n/a_ | `extensionofrecordid` | _n/a_ |
| `metadataforarchival_extensionofrecordid` | _n/a_ | `extensionofrecordid` | _n/a_ |
| `msdyn_entity_msdyn_entitylinkchatconfiguration` | _n/a_ | `msdyn_entitytype` | _n/a_ |
| `msdyn_insightsstorevirtualentity_extensionofrecordid` | _n/a_ | `extensionofrecordid` | _n/a_ |
| `privilegesremovalsetting_extensionofrecordid` | _n/a_ | `extensionofrecordid` | _n/a_ |
| `recyclebinconfig_extensionofrecordid` | _n/a_ | `extensionofrecordid` | _n/a_ |
| `sharedlinksetting_extensionofrecordid` | _n/a_ | `extensionofrecordid` | _n/a_ |
| `virtualentitymetadata_extensionofrecordid` | _n/a_ | `extensionofrecordid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `card_entity_connections` | [entityid](entityid.md) | _n/a_ | _n/a_ |

## Source

Generated from [entity.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/entity.md) on 2026-05-06.