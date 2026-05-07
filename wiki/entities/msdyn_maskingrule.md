---
logical: "msdyn_maskingrule"
display: "Masking Rule"
entitySetName: "msdyn_maskingrules"
primaryId: "msdyn_maskingruleid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Masking Rule

Masking Rules to apply to chat messages.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_maskingrule` |
| Display name | Masking Rule |
| Display (plural) | Masking Rules |
| Schema name | `msdyn_maskingrule` |
| Entity set (Web API) | `msdyn_maskingrules` |
| Primary id attribute | `msdyn_maskingruleid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_maskingrules?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_maskingrules(<guid>)
POST /api/data/v9.2/msdyn_maskingrules
PATCH /api/data/v9.2/msdyn_maskingrules(<guid>)
DELETE /api/data/v9.2/msdyn_maskingrules(<guid>)
```

## Attributes

Writable: **14** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_description`, `msdyn_enter_test_data`, `msdyn_masked_character`, `msdyn_masked_test_data`, `msdyn_maskingruleId`, `msdyn_name`, `msdyn_regular_expression`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_maskingrule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_maskingrule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_maskingrule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_maskingrule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_maskingrule` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_maskingrule_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_maskingrule_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_maskingrule_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_maskingrule_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_maskingrule_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_maskingrule_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_maskingrule_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_maskingrule_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_maskingrule.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_maskingrule.md) on 2026-05-06.