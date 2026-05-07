---
logical: "resourcespec"
display: "Resource Specification"
entitySetName: "resourcespecs"
primaryId: "resourcespecid"
primaryName: "name"
tableType: "Standard"
ownership: "BusinessOwned"
---

# Resource Specification

Selection rule that allows the scheduling engine to select a number of resources from a pool of resources. The rules can be associated with a service.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `resourcespec` |
| Display name | Resource Specification |
| Display (plural) | Resource Specifications |
| Schema name | `ResourceSpec` |
| Entity set (Web API) | `resourcespecs` |
| Primary id attribute | `resourcespecid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | BusinessOwned |

## Web API examples

```http
GET /api/data/v9.2/resourcespecs?$select=name&$top=10
GET /api/data/v9.2/resourcespecs(<guid>)
POST /api/data/v9.2/resourcespecs
PATCH /api/data/v9.2/resourcespecs(<guid>)
DELETE /api/data/v9.2/resourcespecs(<guid>)
```

## Attributes

Writable: **15** · Read-only: **8**

### Writable

`BusinessUnitId`, `Constraints`, `Description`, `EffortRequired`, `GroupObjectId`, `ImportSequenceNumber`, `Name`, `ObjectiveExpression`, `ObjectTypeCode`, `OverriddenCreatedOn`, `RequiredCount`, `ResourceSpecId`, `SameSite`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_resource_specs` | [businessunit](businessunit.md) | `businessunitid` | `businessunitid` |
| `constraint_based_group_resource_specs` | [constraintbasedgroup](constraintbasedgroup.md) | `groupobjectid` | `groupobjectid_constraintbasedgroup` |
| `lk_resourcespec_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_resourcespec_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_resourcespec_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_resourcespec_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_resource_specs` | [organization](organization.md) | `organizationid` | `organizationid` |
| `team_resource_specs` | [team](team.md) | `groupobjectid` | `groupobjectid_team` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ActivityPartyResourceSpec` | _n/a_ | `resourcespecid` | _n/a_ |
| `resource_spec_services` | _n/a_ | `resourcespecid` | _n/a_ |
| `ResourceSpec_Annotation` | _n/a_ | `objectid` | _n/a_ |
| `ResourceSpec_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `ResourceSpec_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `resourcespec_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `resourcespec_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `resourcespec_resources` | _n/a_ | `resourceid` | _n/a_ |
| `resourcespec_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [resourcespec.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/resourcespec.md) on 2026-05-06.