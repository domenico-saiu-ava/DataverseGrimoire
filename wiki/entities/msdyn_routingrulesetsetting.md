---
logical: "msdyn_routingrulesetsetting"
display: "Routing Rule Set Setting"
entitySetName: "msdyn_routingrulesetsettings"
primaryId: "msdyn_routingrulesetsettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Routing Rule Set Setting

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_routingrulesetsetting` |
| Display name | Routing Rule Set Setting |
| Display (plural) | Routing Rule Set Settings |
| Schema name | `msdyn_routingrulesetsetting` |
| Entity set (Web API) | `msdyn_routingrulesetsettings` |
| Primary id attribute | `msdyn_routingrulesetsettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_routingrulesetsettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_routingrulesetsettings(<guid>)
POST /api/data/v9.2/msdyn_routingrulesetsettings
PATCH /api/data/v9.2/msdyn_routingrulesetsettings(<guid>)
DELETE /api/data/v9.2/msdyn_routingrulesetsettings(<guid>)
```

## Attributes

Writable: **9** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_ismultipleactiveroutingrulesetallowed`, `msdyn_name`, `msdyn_routingrulesetsettingId`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_routingrulesetsetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_routingrulesetsetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_routingrulesetsetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_routingrulesetsetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_routingrulesetsetting` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_routingrulesetsetting_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_routingrulesetsetting_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_routingrulesetsetting_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_routingrulesetsetting_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_routingrulesetsetting_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_routingrulesetsetting_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_routingrulesetsetting_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_routingrulesetsetting_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_routingrulesetsetting.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_routingrulesetsetting.md) on 2026-05-06.