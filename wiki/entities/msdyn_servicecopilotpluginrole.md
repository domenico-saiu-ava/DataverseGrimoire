---
logical: "msdyn_servicecopilotpluginrole"
display: "Service Copilot Plugin Role"
entitySetName: "msdyn_servicecopilotpluginroles"
primaryId: "msdyn_servicecopilotpluginroleid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Service Copilot Plugin Role

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_servicecopilotpluginrole` |
| Display name | Service Copilot Plugin Role |
| Display (plural) | Service Copilot Plugin Roles |
| Schema name | `msdyn_servicecopilotpluginrole` |
| Entity set (Web API) | `msdyn_servicecopilotpluginroles` |
| Primary id attribute | `msdyn_servicecopilotpluginroleid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_servicecopilotpluginroles?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_servicecopilotpluginroles(<guid>)
POST /api/data/v9.2/msdyn_servicecopilotpluginroles
PATCH /api/data/v9.2/msdyn_servicecopilotpluginroles(<guid>)
DELETE /api/data/v9.2/msdyn_servicecopilotpluginroles(<guid>)
```

## Attributes

Writable: **10** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_name`, `msdyn_roleid`, `msdyn_servicecopilotpluginId`, `msdyn_servicecopilotpluginroleId`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_servicecopilotpluginrole_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_servicecopilotpluginrole_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_servicecopilotpluginrole_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_servicecopilotpluginrole_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_servicecopilotplugin_msdyn_servicecopilotpluginrole_servicecopilotpluginId` | [msdyn_servicecopilotplugin](msdyn_servicecopilotplugin.md) | `msdyn_servicecopilotpluginid` | `msdyn_servicecopilotpluginId` |
| `msdyn_role_msdyn_servicecopilotpluginrole_roleid` | [role](role.md) | `msdyn_roleid` | `msdyn_roleid` |
| `organization_msdyn_servicecopilotpluginrole` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_servicecopilotpluginrole_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_servicecopilotpluginrole_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_servicecopilotpluginrole_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_servicecopilotpluginrole_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_servicecopilotpluginrole_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_servicecopilotpluginrole_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_servicecopilotpluginrole_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_servicecopilotpluginrole_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_servicecopilotpluginrole.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_servicecopilotpluginrole.md) on 2026-05-06.