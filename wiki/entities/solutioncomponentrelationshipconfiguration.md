---
logical: "solutioncomponentrelationshipconfiguration"
display: "Solution Component Relationship Configuration"
entitySetName: "solutioncomponentrelationshipconfigurations"
primaryId: "solutioncomponentrelationshipconfigurationid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Solution Component Relationship Configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `solutioncomponentrelationshipconfiguration` |
| Display name | Solution Component Relationship Configuration |
| Display (plural) | Solution Component Relationship Configurations |
| Schema name | `solutioncomponentrelationshipconfiguration` |
| Entity set (Web API) | `solutioncomponentrelationshipconfigurations` |
| Primary id attribute | `solutioncomponentrelationshipconfigurationid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/solutioncomponentrelationshipconfigurations?$select=name&$top=10
GET /api/data/v9.2/solutioncomponentrelationshipconfigurations(<guid>)
POST /api/data/v9.2/solutioncomponentrelationshipconfigurations
PATCH /api/data/v9.2/solutioncomponentrelationshipconfigurations(<guid>)
DELETE /api/data/v9.2/solutioncomponentrelationshipconfigurations(<guid>)
```

## Attributes

Writable: **17** · Read-only: **14**

### Writable

`AddRelatedComponents`, `CascadeRemoveComponents`, `EntityRelationshipId`, `ForceAddingManagedRelatedComponents`, `ImportSequenceNumber`, `IsCustomizable`, `name`, `NoMissingDependencyForApiManagedSolution`, `OverriddenCreatedOn`, `PrimaryEntityDependencyType`, `RespectParentRootComponentBehavior`, `SecondaryEntityDependencyType`, `solutioncomponentrelationshipconfigurationId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `entityrelationship_config` | [entityrelationship](entityrelationship.md) | `entityrelationshipid` | `EntityRelationshipId` |
| `lk_solutioncomponentrelationshipconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_solutioncomponentrelationshipconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_solutioncomponentrelationshipconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_solutioncomponentrelationshipconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_solutioncomponentrelationshipconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `solutioncomponentrelationshipconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `solutioncomponentrelationshipconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `solutioncomponentrelationshipconfiguration_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `solutioncomponentrelationshipconfiguration_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `solutioncomponentrelationshipconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `solutioncomponentrelationshipconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `solutioncomponentrelationshipconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `solutioncomponentrelationshipconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [solutioncomponentrelationshipconfiguration.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/solutioncomponentrelationshipconfiguration.md) on 2026-05-06.