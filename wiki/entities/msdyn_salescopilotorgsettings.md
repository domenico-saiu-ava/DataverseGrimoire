---
logical: "msdyn_salescopilotorgsettings"
display: "Org level settings for Sales Copilot apps"
entitySetName: "msdyn_salescopilotorgsettingsset"
primaryId: "msdyn_salescopilotorgsettingsid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Org level settings for Sales Copilot apps

Org level settings for Sales Copilot apps

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salescopilotorgsettings` |
| Display name | Org level settings for Sales Copilot apps |
| Display (plural) | Org level settings for Sales Copilot apps |
| Schema name | `msdyn_salescopilotorgsettings` |
| Entity set (Web API) | `msdyn_salescopilotorgsettingsset` |
| Primary id attribute | `msdyn_salescopilotorgsettingsid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salescopilotorgsettingsset?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_salescopilotorgsettingsset(<guid>)
POST /api/data/v9.2/msdyn_salescopilotorgsettingsset
PATCH /api/data/v9.2/msdyn_salescopilotorgsettingsset(<guid>)
DELETE /api/data/v9.2/msdyn_salescopilotorgsettingsset(<guid>)
```

## Attributes

Writable: **11** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_entitylogicalname`, `msdyn_featurename`, `msdyn_name`, `msdyn_salescopilotorgsettingsId`, `msdyn_settingsdata`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_salescopilotorgsettings_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salescopilotorgsettings_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salescopilotorgsettings_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salescopilotorgsettings_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_salescopilotorgsettings` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salescopilotorgsettings_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salescopilotorgsettings_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salescopilotorgsettings_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_salescopilotorgsettings_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_salescopilotorgsettings_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salescopilotorgsettings_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_salescopilotorgsettings_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salescopilotorgsettings_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_salescopilotorgsettings.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_salescopilotorgsettings.md) on 2026-05-06.