---
logical: "msdyn_kmpersonalizationsetting"
display: "Knowledge personalization"
entitySetName: "msdyn_kmpersonalizationsettings"
primaryId: "msdyn_kmpersonalizationsettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Knowledge personalization

Allows users to personalize their knowledge search filters and knowledge authoring language.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_kmpersonalizationsetting` |
| Display name | Knowledge personalization |
| Display (plural) | Knowledge personalizations |
| Schema name | `msdyn_kmpersonalizationsetting` |
| Entity set (Web API) | `msdyn_kmpersonalizationsettings` |
| Primary id attribute | `msdyn_kmpersonalizationsettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_kmpersonalizationsettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_kmpersonalizationsettings(<guid>)
POST /api/data/v9.2/msdyn_kmpersonalizationsettings
PATCH /api/data/v9.2/msdyn_kmpersonalizationsettings(<guid>)
DELETE /api/data/v9.2/msdyn_kmpersonalizationsettings(<guid>)
```

## Attributes

Writable: **10** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_filtercontroldata`, `msdyn_kmpersonalizationsettingId`, `msdyn_languagecontrol`, `msdyn_name`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_kmpersonalizationsetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_kmpersonalizationsetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_kmpersonalizationsetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_kmpersonalizationsetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_kmpersonalizationsetting` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_kmpersonalizationsetting_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_kmpersonalizationsetting_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_kmpersonalizationsetting_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_kmpersonalizationsetting_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_kmpersonalizationsetting_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_kmpersonalizationsetting_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_kmpersonalizationsetting.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_kmpersonalizationsetting.md) on 2026-05-06.