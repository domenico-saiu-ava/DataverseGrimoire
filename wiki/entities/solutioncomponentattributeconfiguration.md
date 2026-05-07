---
logical: "solutioncomponentattributeconfiguration"
display: "Solution Component Attribute Configuration"
entitySetName: "solutioncomponentattributeconfigurations"
primaryId: "solutioncomponentattributeconfigurationid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Solution Component Attribute Configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `solutioncomponentattributeconfiguration` |
| Display name | Solution Component Attribute Configuration |
| Display (plural) | Solution Component Attribute Configurations |
| Schema name | `solutioncomponentattributeconfiguration` |
| Entity set (Web API) | `solutioncomponentattributeconfigurations` |
| Primary id attribute | `solutioncomponentattributeconfigurationid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/solutioncomponentattributeconfigurations?$select=name&$top=10
GET /api/data/v9.2/solutioncomponentattributeconfigurations(<guid>)
POST /api/data/v9.2/solutioncomponentattributeconfigurations
PATCH /api/data/v9.2/solutioncomponentattributeconfigurations(<guid>)
DELETE /api/data/v9.2/solutioncomponentattributeconfigurations(<guid>)
```

## Attributes

Writable: **20** · Read-only: **14**

### Writable

`AttributeId`, `CustomManagedBehaviorType`, `DependencyRemovalCapability`, `EncodingFormat`, `FileExtension`, `ImportSequenceNumber`, `InvokeSubstitutionForAttribute`, `IsCustomizable`, `IsEnabledForDependencyExtraction`, `IsExportDisabled`, `IsExportedAsFile`, `IsPrefixedByTemplate`, `name`, `OverriddenCreatedOn`, `solutioncomponentattributeconfigurationId`, `SolutionComponentConfigurationId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `attribute_solutioncomponentattrconfig` | [attribute](attribute.md) | `attributeid` | `AttributeId` |
| `lk_solutioncomponentattributeconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_solutioncomponentattributeconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_solutioncomponentattributeconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_solutioncomponentattributeconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_solutioncomponentattributeconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |
| `solutioncomponentconfig_solutioncomponentattrconfig` | [solutioncomponentconfiguration](solutioncomponentconfiguration.md) | `solutioncomponentconfigurationid` | `solutioncomponentconfigurationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `solutioncomponentattributeconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `solutioncomponentattributeconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `solutioncomponentattributeconfiguration_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `solutioncomponentattributeconfiguration_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `solutioncomponentattributeconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `solutioncomponentattributeconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `solutioncomponentattributeconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `solutioncomponentattributeconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [solutioncomponentattributeconfiguration.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/solutioncomponentattributeconfiguration.md) on 2026-05-06.