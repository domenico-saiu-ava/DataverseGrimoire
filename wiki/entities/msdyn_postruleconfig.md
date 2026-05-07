---
logical: "msdyn_postruleconfig"
display: "Post Rule Configuration"
entitySetName: "msdyn_postruleconfigs"
primaryId: "msdyn_postruleconfigid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Post Rule Configuration

Enable or disable system post rules for an entity for Activity Feeds and Yammer.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_postruleconfig` |
| Display name | Post Rule Configuration |
| Display (plural) | Post Rule Configurations |
| Schema name | `msdyn_PostRuleConfig` |
| Entity set (Web API) | `msdyn_postruleconfigs` |
| Primary id attribute | `msdyn_postruleconfigid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_postruleconfigs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_postruleconfigs(<guid>)
POST /api/data/v9.2/msdyn_postruleconfigs
PATCH /api/data/v9.2/msdyn_postruleconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_postruleconfigs(<guid>)
```

## Attributes

Writable: **14** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_FormatId`, `msdyn_name`, `msdyn_PostConfigId`, `msdyn_PostRuleConfigId`, `msdyn_PostToYammer`, `msdyn_RuleId`, `msdyn_RuleSource`, `msdyn_StepId`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_postruleconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_postruleconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_postruleconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_postruleconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_postconfig_msdyn_postruleconfig` | [msdyn_postconfig](msdyn_postconfig.md) | `msdyn_postconfigid` | `msdyn_PostConfigId` |
| `organization_msdyn_postruleconfig` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_postruleconfig_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_postruleconfig_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_postruleconfig_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_postruleconfig_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_postruleconfig_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_postruleconfig_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_postruleconfig.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_postruleconfig.md) on 2026-05-06.