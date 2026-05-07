---
logical: "msdyn_leadhygienesetting"
display: "Lead Hygiene Setting"
entitySetName: "msdyn_leadhygienesettings"
primaryId: "msdyn_leadhygienesettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Lead Hygiene Setting

Lead Hygiene Setting

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_leadhygienesetting` |
| Display name | Lead Hygiene Setting |
| Display (plural) | Lead Hygiene Settings |
| Schema name | `msdyn_leadhygienesetting` |
| Entity set (Web API) | `msdyn_leadhygienesettings` |
| Primary id attribute | `msdyn_leadhygienesettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_leadhygienesettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_leadhygienesettings(<guid>)
POST /api/data/v9.2/msdyn_leadhygienesettings
PATCH /api/data/v9.2/msdyn_leadhygienesettings(<guid>)
DELETE /api/data/v9.2/msdyn_leadhygienesettings(<guid>)
```

## Attributes

Writable: **11** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_isduplicatedetectionenabled`, `msdyn_lastschemapublishedtimestamp`, `msdyn_leadhygienesettingId`, `msdyn_Name`, `msdyn_querytop`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_leadhygienesetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_leadhygienesetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_leadhygienesetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_leadhygienesetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_leadhygienesetting` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_leadhygienesetting_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_leadhygienesetting_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_leadhygienesetting_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_leadhygienesetting_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_leadhygienesetting_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_leadhygienesetting_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_leadhygienesetting_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_leadhygienesetting_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_leadhygienesetting.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_leadhygienesetting.md) on 2026-05-06.