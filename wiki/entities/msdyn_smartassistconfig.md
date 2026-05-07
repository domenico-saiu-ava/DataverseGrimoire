---
logical: "msdyn_smartassistconfig"
display: "Smartassist configuration"
entitySetName: "msdyn_smartassistconfigs"
primaryId: "msdyn_smartassistconfigid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Smartassist configuration

Stores Smartassist configurations

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_smartassistconfig` |
| Display name | Smartassist configuration |
| Display (plural) | Smartassist configurations |
| Schema name | `msdyn_smartassistconfig` |
| Entity set (Web API) | `msdyn_smartassistconfigs` |
| Primary id attribute | `msdyn_smartassistconfigid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_smartassistconfigs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_smartassistconfigs(<guid>)
POST /api/data/v9.2/msdyn_smartassistconfigs
PATCH /api/data/v9.2/msdyn_smartassistconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_smartassistconfigs(<guid>)
```

## Attributes

Writable: **21** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_IconURL`, `msdyn_isDefault`, `msdyn_maxsuggestioncount`, `msdyn_name`, `msdyn_Order`, `msdyn_smartassistconfigId`, `msdyn_SourceEntityName`, `msdyn_Suggestioncontainertitle`, `msdyn_SuggestionControlConfigUniquename`, `msdyn_Suggestioncontroltype`, `msdyn_SuggestionProvider`, `msdyn_Suggestiontype`, `msdyn_SuggestionWebresourceURL`, `msdyn_UniqueName`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_smartassistconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_smartassistconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_smartassistconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_smartassistconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_smartassistconfig` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_smartassistconfig_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_smartassistconfig_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_smartassistconfig_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_smartassistconfig_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_smartassistconfig_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_smartassistconfig_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_smartassistconfig_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_smartassistconfig_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_smartassistconfig_msdyn_appconfig` | [msdyn_smartassistconfigid](msdyn_smartassistconfigid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_smartassistconfig.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_smartassistconfig.md) on 2026-05-06.