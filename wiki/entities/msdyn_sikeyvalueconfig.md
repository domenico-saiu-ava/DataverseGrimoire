---
logical: "msdyn_sikeyvalueconfig"
display: "SI Key Value Config"
entitySetName: "msdyn_sikeyvalueconfigs"
primaryId: "msdyn_sikeyvalueconfigid"
primaryName: "msdyn_configkey"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# SI Key Value Config

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_sikeyvalueconfig` |
| Display name | SI Key Value Config |
| Display (plural) | SI Key Value Configs |
| Schema name | `msdyn_sikeyvalueconfig` |
| Entity set (Web API) | `msdyn_sikeyvalueconfigs` |
| Primary id attribute | `msdyn_sikeyvalueconfigid` |
| Primary name attribute | `msdyn_configkey` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_sikeyvalueconfigs?$select=msdyn_configkey&$top=10
GET /api/data/v9.2/msdyn_sikeyvalueconfigs(<guid>)
POST /api/data/v9.2/msdyn_sikeyvalueconfigs
PATCH /api/data/v9.2/msdyn_sikeyvalueconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_sikeyvalueconfigs(<guid>)
```

## Attributes

Writable: **9** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_ConfigKey`, `msdyn_ConfigValue`, `msdyn_sikeyvalueconfigId`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_sikeyvalueconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_sikeyvalueconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_sikeyvalueconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_sikeyvalueconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_sikeyvalueconfig` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_sikeyvalueconfig_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sikeyvalueconfig_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sikeyvalueconfig_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sikeyvalueconfig_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_sikeyvalueconfig_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sikeyvalueconfig_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_sikeyvalueconfig.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_sikeyvalueconfig.md) on 2026-05-06.