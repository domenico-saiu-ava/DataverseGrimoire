---
logical: "msdyn_inboxcardconfiguration"
display: "Inbox card configuration"
entitySetName: "msdyn_inboxcardconfigurations"
primaryId: "msdyn_inboxcardconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Inbox card configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_inboxcardconfiguration` |
| Display name | Inbox card configuration |
| Display (plural) | Inbox card configurations |
| Schema name | `msdyn_inboxcardconfiguration` |
| Entity set (Web API) | `msdyn_inboxcardconfigurations` |
| Primary id attribute | `msdyn_inboxcardconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_inboxcardconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_inboxcardconfigurations(<guid>)
POST /api/data/v9.2/msdyn_inboxcardconfigurations
PATCH /api/data/v9.2/msdyn_inboxcardconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_inboxcardconfigurations(<guid>)
```

## Attributes

Writable: **13** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_cardlayout`, `msdyn_inboxcardconfigurationId`, `msdyn_name`, `msdyn_regardingentity`, `msdyn_requiredfields`, `msdyn_uniquename`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_inboxcardconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_inboxcardconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_inboxcardconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_inboxcardconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_inboxcardconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_inboxcardconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_inboxcardconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_inboxcardconfiguration_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_inboxcardconfiguration_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_inboxcardconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_inboxcardconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_inboxcardconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_inboxcardconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_msdyn_inboxcardconfiguration_msdyn_inboxentityconfig_inboxcardconfigurationid` | _n/a_ | `msdyn_inboxcardconfigurationid` | _n/a_ |


## Source

Generated from [msdyn_inboxcardconfiguration.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_inboxcardconfiguration.md) on 2026-05-06.