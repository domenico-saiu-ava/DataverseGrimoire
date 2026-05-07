---
logical: "msdyn_copilotscenariosetting"
display: "copilot scenario setting"
entitySetName: "msdyn_copilotscenariosettings"
primaryId: "msdyn_copilotscenariosettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# copilot scenario setting

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_copilotscenariosetting` |
| Display name | copilot scenario setting |
| Display (plural) | copilot scenario settings |
| Schema name | `msdyn_copilotscenariosetting` |
| Entity set (Web API) | `msdyn_copilotscenariosettings` |
| Primary id attribute | `msdyn_copilotscenariosettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_copilotscenariosettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_copilotscenariosettings(<guid>)
POST /api/data/v9.2/msdyn_copilotscenariosettings
PATCH /api/data/v9.2/msdyn_copilotscenariosettings(<guid>)
DELETE /api/data/v9.2/msdyn_copilotscenariosettings(<guid>)
```

## Attributes

Writable: **15** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_admininstructions`, `msdyn_copilotscenariosettingId`, `msdyn_name`, `msdyn_prioritizationcolumns`, `msdyn_prioritizationfetchxml`, `msdyn_prioritizationprompt`, `msdyn_scenario`, `msdyn_showdefaultaifields`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_copilotscenariosetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_copilotscenariosetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_copilotscenariosetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_copilotscenariosetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_copilotscenariosetting` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_copilotscenariosetting_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilotscenariosetting_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilotscenariosetting_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_copilotscenariosetting_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_copilotscenariosetting_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilotscenariosetting_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_copilotscenariosetting_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilotscenariosetting_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_copilotscenariosetting.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_copilotscenariosetting.md) on 2026-05-06.