---
logical: "msdyn_casetopicsetting"
display: "Case Topic Setting"
entitySetName: "msdyn_casetopicsettings"
primaryId: "msdyn_casetopicsettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Case Topic Setting

Case Topic Setting Entity

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_casetopicsetting` |
| Display name | Case Topic Setting |
| Display (plural) | Case Topic Settings |
| Schema name | `msdyn_casetopicsetting` |
| Entity set (Web API) | `msdyn_casetopicsettings` |
| Primary id attribute | `msdyn_casetopicsettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_casetopicsettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_casetopicsettings(<guid>)
POST /api/data/v9.2/msdyn_casetopicsettings
PATCH /api/data/v9.2/msdyn_casetopicsettings(<guid>)
DELETE /api/data/v9.2/msdyn_casetopicsettings(<guid>)
```

## Attributes

Writable: **15** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_AttributeInUse`, `msdyn_casetopicsettingId`, `msdyn_Delimiters`, `msdyn_Enabled`, `msdyn_IgnoreList`, `msdyn_name`, `msdyn_SelectionLocation`, `msdyn_TopicAutomationEnabled`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_casetopicsetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_casetopicsetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_casetopicsetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_casetopicsetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_casetopicsetting` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_casetopicsetting_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_casetopicsetting_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_casetopicsetting_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_casetopicsetting_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_casetopicsetting_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_casetopicsetting_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_casetopicsetting.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_casetopicsetting.md) on 2026-05-06.