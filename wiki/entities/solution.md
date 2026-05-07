---
logical: "solution"
display: "Solution"
entitySetName: "solutions"
primaryId: "solutionid"
primaryName: "friendlyname"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Solution

A solution which contains CRM customizations.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `solution` |
| Display name | Solution |
| Display (plural) | Solutions |
| Schema name | `Solution` |
| Entity set (Web API) | `solutions` |
| Primary id attribute | `solutionid` |
| Primary name attribute | `friendlyname` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/solutions?$select=friendlyname&$top=10
GET /api/data/v9.2/solutions(<guid>)
POST /api/data/v9.2/solutions
PATCH /api/data/v9.2/solutions(<guid>)
DELETE /api/data/v9.2/solutions(<guid>)
```

## Attributes

Writable: **13** · Read-only: **23**

### Writable

`ConfigurationPageId`, `Description`, `EnabledForSourceControlIntegration`, `FriendlyName`, `PublisherId`, `SolutionId`, `SolutionPackageVersion`, `SolutionType`, `SourceControlSyncStatus`, `TemplateSuffix`, `Thumbprint`, `UniqueName`, `Version`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `FileId`, `InstalledOn`, `IsApiManaged`, `IsInternal`, `IsManaged`, `IsVisible`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `ParentSolutionId`, `PinpointAssetId`, `PinpointPublisherId`, `PinpointSolutionDefaultLocale`, `PinpointSolutionId`, `PublisherIdOptionValuePrefix`, `PublisherIdPrefix`, `UpdatedOn`, `UpgradeInfo`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `fileattachment_solution_fileid` | [fileattachment](fileattachment.md) | `fileid` | `fileid` |
| `lk_solution_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_solution_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_solutionbase_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_solutionbase_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_solution` | [organization](organization.md) | `organizationid` | `organizationid` |
| `publisher_solution` | [publisher](publisher.md) | `publisherid` | `publisherid` |
| `solution_configuration_webresource` | [webresource](webresource.md) | `configurationpageid` | `configurationpageid` |
| `solution_parent_solution` | [solution](solution.md) | `parentsolutionid` | `parentsolutionid` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `FileAttachment_Solution` | _n/a_ | `objectid` | _n/a_ |
| `FK_CanvasApp_Solution` | _n/a_ | `solutionid` | _n/a_ |
| `solution_fieldpermission` | _n/a_ | `solutionid` | _n/a_ |
| `solution_fieldsecurityprofile` | _n/a_ | `solutionid` | _n/a_ |
| `solution_parent_solution` | _n/a_ | `parentsolutionid` | _n/a_ |
| `solution_privilege` | _n/a_ | `solutionid` | _n/a_ |
| `solution_role` | _n/a_ | `solutionid` | _n/a_ |
| `solution_roleprivileges` | _n/a_ | `solutionid` | _n/a_ |
| `solution_solutioncomponent` | _n/a_ | `solutionid` | _n/a_ |
| `Solution_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `user_settings_preferred_solution` | _n/a_ | `preferredsolution` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `package_solution` | [solutionid](solutionid.md) | _n/a_ | _n/a_ |

## Source

Generated from [solution.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/solution.md) on 2026-05-06.