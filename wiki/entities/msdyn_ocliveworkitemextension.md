---
logical: "msdyn_ocliveworkitemextension"
display: "Conversation Analytic"
entitySetName: "msdyn_ocliveworkitemextensions"
primaryId: "msdyn_ocliveworkitemextensionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Conversation Analytic

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocliveworkitemextension` |
| Display name | Conversation Analytic |
| Display (plural) | Conversation Analytics |
| Schema name | `msdyn_ocliveworkitemextension` |
| Entity set (Web API) | `msdyn_ocliveworkitemextensions` |
| Primary id attribute | `msdyn_ocliveworkitemextensionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocliveworkitemextensions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocliveworkitemextensions(<guid>)
POST /api/data/v9.2/msdyn_ocliveworkitemextensions
PATCH /api/data/v9.2/msdyn_ocliveworkitemextensions(<guid>)
DELETE /api/data/v9.2/msdyn_ocliveworkitemextensions(<guid>)
```

## Attributes

Writable: **10** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_EvaluationId`, `msdyn_Name`, `msdyn_ocliveworkitemextensionId`, `msdyn_Score`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_ocliveworkitemextension_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocliveworkitemextension_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocliveworkitemextension_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocliveworkitemextension_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_ocliveworkitemextension` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocliveworkitem_ocliveworkitemextensionid_msdyn_ocliveworkitemextension` | _n/a_ | `msdyn_ocliveworkitemextensionid` | _n/a_ |
| `msdyn_ocliveworkitemextension_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocliveworkitemextension_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocliveworkitemextension_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_ocliveworkitemextension_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_ocliveworkitemextension_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocliveworkitemextension_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocliveworkitemextension_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocliveworkitemextension_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_ocliveworkitemextension.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_ocliveworkitemextension.md) on 2026-05-06.