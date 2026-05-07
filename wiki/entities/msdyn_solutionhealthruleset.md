---
logical: "msdyn_solutionhealthruleset"
display: "Solution Health Rule Set"
entitySetName: "msdyn_solutionhealthrulesets"
primaryId: "msdyn_solutionhealthrulesetid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Solution Health Rule Set

Represents a set that owns a number of solution health rules.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_solutionhealthruleset` |
| Display name | Solution Health Rule Set |
| Display (plural) | Solution Health Rule Sets |
| Schema name | `msdyn_solutionhealthruleset` |
| Entity set (Web API) | `msdyn_solutionhealthrulesets` |
| Primary id attribute | `msdyn_solutionhealthrulesetid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_solutionhealthrulesets?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_solutionhealthrulesets(<guid>)
POST /api/data/v9.2/msdyn_solutionhealthrulesets
PATCH /api/data/v9.2/msdyn_solutionhealthrulesets(<guid>)
DELETE /api/data/v9.2/msdyn_solutionhealthrulesets(<guid>)
```

## Attributes

Writable: **10** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_description`, `msdyn_name`, `msdyn_solutionhealthrulesetId`, `msdyn_uniquename`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_solutionhealthruleset_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_solutionhealthruleset_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_solutionhealthruleset_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_solutionhealthruleset_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_solutionhealthruleset` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_solutionhealthruleset_msdyn_analysi` | _n/a_ | `msdyn_solutionhealthrulesetid` | _n/a_ |
| `msdyn_msdyn_solutionhealthruleset_msdyn_solutio` | _n/a_ | `msdyn_solutionhealthrulesetid` | _n/a_ |
| `msdyn_solutionhealthruleset_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_solutionhealthruleset_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_solutionhealthruleset_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_solutionhealthruleset_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_solutionhealthruleset_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_solutionhealthruleset_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_solutionhealthruleset_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_solutionhealthruleset_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_solutionhealthruleset.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_solutionhealthruleset.md) on 2026-05-06.