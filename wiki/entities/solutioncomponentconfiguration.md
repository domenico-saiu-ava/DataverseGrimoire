---
logical: "solutioncomponentconfiguration"
display: "Solution Component Configuration"
entitySetName: "solutioncomponentconfigurations"
primaryId: "solutioncomponentconfigurationid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Solution Component Configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `solutioncomponentconfiguration` |
| Display name | Solution Component Configuration |
| Display (plural) | Solution Component Configurations |
| Schema name | `solutioncomponentconfiguration` |
| Entity set (Web API) | `solutioncomponentconfigurations` |
| Primary id attribute | `solutioncomponentconfigurationid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/solutioncomponentconfigurations?$select=name&$top=10
GET /api/data/v9.2/solutioncomponentconfigurations(<guid>)
POST /api/data/v9.2/solutioncomponentconfigurations
PATCH /api/data/v9.2/solutioncomponentconfigurations(<guid>)
DELETE /api/data/v9.2/solutioncomponentconfigurations(<guid>)
```

## Attributes

Writable: **20** · Read-only: **14**

### Writable

`AllowExportKeyWithoutPrefix`, `DependencyRemovalDisabledForComponents`, `EntityId`, `FileFormat`, `FileScope`, `ImportSequenceNumber`, `InvokeSubstitution`, `IsCustomizable`, `isdisplayable`, `IsOneToOneChildComponent`, `IsSoftDeleteEnabled`, `IsVersioningEnabled`, `KeepActiveCustomizationAfterConversion`, `name`, `OverriddenCreatedOn`, `solutioncomponentconfigurationId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `entity_solutioncomponentconfiguration` | [entity](entity.md) | `entityid` | `EntityId` |
| `lk_solutioncomponentconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_solutioncomponentconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_solutioncomponentconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_solutioncomponentconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_solutioncomponentconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `solutioncomponentconfig_solutioncomponentattrconfig` | _n/a_ | `solutioncomponentconfigurationid` | _n/a_ |
| `solutioncomponentconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `solutioncomponentconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `solutioncomponentconfiguration_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `solutioncomponentconfiguration_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `solutioncomponentconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `solutioncomponentconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `solutioncomponentconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `solutioncomponentconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [solutioncomponentconfiguration.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/solutioncomponentconfiguration.md) on 2026-05-06.