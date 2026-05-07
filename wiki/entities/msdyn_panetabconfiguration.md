---
logical: "msdyn_panetabconfiguration"
display: "Pane tab configuration"
entitySetName: "msdyn_panetabconfigurations"
primaryId: "msdyn_panetabconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Pane tab configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_panetabconfiguration` |
| Display name | Pane tab configuration |
| Display (plural) | Pane tab configurations |
| Schema name | `msdyn_panetabconfiguration` |
| Entity set (Web API) | `msdyn_panetabconfigurations` |
| Primary id attribute | `msdyn_panetabconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_panetabconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_panetabconfigurations(<guid>)
POST /api/data/v9.2/msdyn_panetabconfigurations
PATCH /api/data/v9.2/msdyn_panetabconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_panetabconfigurations(<guid>)
```

## Attributes

Writable: **16** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_iconpath`, `msdyn_isEnabled`, `msdyn_name`, `msdyn_order`, `msdyn_panetabconfigurationId`, `msdyn_ProductivityPaneId`, `msdyn_ToolId`, `msdyn_tooltip`, `msdyn_UniqueName`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_panetabconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_panetabconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_panetabconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_panetabconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_paneconfig_msdyn_tabconfig` | [msdyn_paneconfiguration](msdyn_paneconfiguration.md) | `msdyn_productivitypaneid` | `msdyn_ProductivityPaneId` |
| `msdyn_msdyn_toolconfig_msdyn_tabconfig` | [msdyn_panetoolconfiguration](msdyn_panetoolconfiguration.md) | `msdyn_toolid` | `msdyn_ToolId` |
| `organization_msdyn_panetabconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_panetabconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_panetabconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_panetabconfiguration_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_panetabconfiguration_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_panetabconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_panetabconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_panetabconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_panetabconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_panetabconfiguration.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_panetabconfiguration.md) on 2026-05-06.