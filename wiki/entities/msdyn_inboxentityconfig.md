---
logical: "msdyn_inboxentityconfig"
display: "Inbox Entity Configuration"
entitySetName: "msdyn_inboxentityconfigs"
primaryId: "msdyn_inboxentityconfigid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Inbox Entity Configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_inboxentityconfig` |
| Display name | Inbox Entity Configuration |
| Display (plural) | Inbox Entity Configurations |
| Schema name | `msdyn_inboxentityconfig` |
| Entity set (Web API) | `msdyn_inboxentityconfigs` |
| Primary id attribute | `msdyn_inboxentityconfigid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_inboxentityconfigs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_inboxentityconfigs(<guid>)
POST /api/data/v9.2/msdyn_inboxentityconfigs
PATCH /api/data/v9.2/msdyn_inboxentityconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_inboxentityconfigs(<guid>)
```

## Attributes

Writable: **12** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_entitytypeid`, `msdyn_inboxcardconfigurationid`, `msdyn_inboxentityconfigId`, `msdyn_name`, `msdyn_uniquename`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_inboxentityconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_inboxentityconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_inboxentityconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_inboxentityconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_entity_msdyn_inboxentityconfig_entitytypeid` | [entity](entity.md) | `msdyn_entitytypeid` | `msdyn_entitytypeid` |
| `msdyn_msdyn_inboxcardconfiguration_msdyn_inboxentityconfig_inboxcardconfigurationid` | [msdyn_inboxcardconfiguration](msdyn_inboxcardconfiguration.md) | `msdyn_inboxcardconfigurationid` | `msdyn_inboxcardconfigurationid` |
| `organization_msdyn_inboxentityconfig` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_inboxentityconfig_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_inboxentityconfig_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_inboxentityconfig_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_inboxentityconfig_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_inboxentityconfig_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_inboxentityconfig_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_inboxentityconfig_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_inboxentityconfig_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_inboxentityconfig.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_inboxentityconfig.md) on 2026-05-06.