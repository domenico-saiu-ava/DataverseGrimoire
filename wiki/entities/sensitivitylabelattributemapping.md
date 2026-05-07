---
logical: "sensitivitylabelattributemapping"
display: "Sensitivity Label Attribute Mapping"
entitySetName: "sensitivitylabelattributemappings"
primaryId: "sensitivitylabelattributemappingid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Sensitivity Label Attribute Mapping

Sensitivity Label Attribute Mapping

## Identity

| Property | Value |
| --- | --- |
| Logical name | `sensitivitylabelattributemapping` |
| Display name | Sensitivity Label Attribute Mapping |
| Display (plural) | Sensitivity Label Attribute Mappings |
| Schema name | `sensitivitylabelattributemapping` |
| Entity set (Web API) | `sensitivitylabelattributemappings` |
| Primary id attribute | `sensitivitylabelattributemappingid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/sensitivitylabelattributemappings?$select=name&$top=10
GET /api/data/v9.2/sensitivitylabelattributemappings(<guid>)
POST /api/data/v9.2/sensitivitylabelattributemappings
PATCH /api/data/v9.2/sensitivitylabelattributemappings(<guid>)
DELETE /api/data/v9.2/sensitivitylabelattributemappings(<guid>)
```

## Attributes

Writable: **12** · Read-only: **14**

### Writable

`AttributeId`, `EntityId`, `ImportSequenceNumber`, `IsCustomizable`, `LabelId`, `Name`, `OverriddenCreatedOn`, `sensitivitylabelattributemappingId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `attribute_sensitivitylabelattributemapping_AttributeId` | [attribute](attribute.md) | `attributeid` | `AttributeId` |
| `entity_sensitivitylabelattributemapping_EntityId` | [entity](entity.md) | `entityid` | `EntityId` |
| `lk_sensitivitylabelattributemapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_sensitivitylabelattributemapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_sensitivitylabelattributemapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_sensitivitylabelattributemapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_sensitivitylabelattributemapping` | [organization](organization.md) | `organizationid` | `organizationid` |
| `sensitivitylabelattributemapping_sensitivitylabel` | [sensitivitylabel](sensitivitylabel.md) | `labelid` | `LabelId` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `sensitivitylabelattributemapping_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `sensitivitylabelattributemapping_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `sensitivitylabelattributemapping_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `sensitivitylabelattributemapping_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `sensitivitylabelattributemapping_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `sensitivitylabelattributemapping_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `sensitivitylabelattributemapping_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `sensitivitylabelattributemapping_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [sensitivitylabelattributemapping.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/sensitivitylabelattributemapping.md) on 2026-05-06.