---
logical: "msdyn_datahygienesettinginfo"
display: "Data Hygiene Setting Info"
entitySetName: "msdyn_datahygienesettinginfo"
primaryId: "msdyn_datahygienesettinginfoid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Data Hygiene Setting Info

Data Hygiene Setting Info

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_datahygienesettinginfo` |
| Display name | Data Hygiene Setting Info |
| Display (plural) | Data Hygiene Setting Info |
| Schema name | `msdyn_datahygienesettinginfo` |
| Entity set (Web API) | `msdyn_datahygienesettinginfo` |
| Primary id attribute | `msdyn_datahygienesettinginfoid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_datahygienesettinginfo?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_datahygienesettinginfo(<guid>)
POST /api/data/v9.2/msdyn_datahygienesettinginfo
PATCH /api/data/v9.2/msdyn_datahygienesettinginfo(<guid>)
DELETE /api/data/v9.2/msdyn_datahygienesettinginfo(<guid>)
```

## Attributes

Writable: **12** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_attribute_info`, `msdyn_datahygienesettinginfoId`, `msdyn_name`, `msdyn_runtime_setting`, `msdyn_setting_type`, `msdyn_validatefrom_days`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_datahygienesettinginfo_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_datahygienesettinginfo_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_datahygienesettinginfo_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_datahygienesettinginfo_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_datahygienesettinginfo` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_datahygienesettinginfo_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_datahygienesettinginfo_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_datahygienesettinginfo_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_datahygienesettinginfo_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_datahygienesettinginfo_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_datahygienesettinginfo_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_datahygienesettinginfo_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_datahygienesettinginfo_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_datahygienesettinginfo.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_datahygienesettinginfo.md) on 2026-05-06.