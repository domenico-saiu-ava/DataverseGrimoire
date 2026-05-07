---
logical: "msdyn_servicecopilotpluginrole"
display: "Ruolo plug-in Service Copilot"
entitySetName: "msdyn_servicecopilotpluginroles"
primaryId: "msdyn_servicecopilotpluginroleid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Ruolo plug-in Service Copilot

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_servicecopilotpluginrole` |
| Display name | Ruolo plug-in Service Copilot |
| Display (plural) | Ruoli plug-in Service Copilot |
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

`importsequencenumber`, `msdyn_name`, `msdyn_roleid`, `msdyn_servicecopilotpluginid`, `msdyn_servicecopilotpluginroleid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_servicecopilotpluginrole_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_servicecopilotpluginrole_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_servicecopilotpluginrole_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_servicecopilotpluginrole_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_servicecopilotpluginrole` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_msdyn_servicecopilotplugin_msdyn_servicecopilotpluginrole_servicecopilotpluginId` | [msdyn_servicecopilotplugin](msdyn_servicecopilotplugin.md) | `msdyn_servicecopilotpluginid` | `msdyn_servicecopilotpluginId` |
| `msdyn_role_msdyn_servicecopilotpluginrole_roleid` | [role](role.md) | `msdyn_roleid` | `msdyn_roleid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_servicecopilotpluginrole_SyncErrors` | [msdyn_servicecopilotpluginrole](msdyn_servicecopilotpluginrole.md) | `regardingobjectid` | `regardingobjectid_msdyn_servicecopilotpluginrole` |
| `msdyn_servicecopilotpluginrole_DuplicateMatchingRecord` | [msdyn_servicecopilotpluginrole](msdyn_servicecopilotpluginrole.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_servicecopilotpluginrole` |
| `msdyn_servicecopilotpluginrole_DuplicateBaseRecord` | [msdyn_servicecopilotpluginrole](msdyn_servicecopilotpluginrole.md) | `baserecordid` | `baserecordid_msdyn_servicecopilotpluginrole` |
| `msdyn_servicecopilotpluginrole_AsyncOperations` | [msdyn_servicecopilotpluginrole](msdyn_servicecopilotpluginrole.md) | `regardingobjectid` | `regardingobjectid_msdyn_servicecopilotpluginrole` |
| `msdyn_servicecopilotpluginrole_MailboxTrackingFolders` | [msdyn_servicecopilotpluginrole](msdyn_servicecopilotpluginrole.md) | `regardingobjectid` | `regardingobjectid_msdyn_servicecopilotpluginrole` |
| `msdyn_servicecopilotpluginrole_UserEntityInstanceDatas` | [msdyn_servicecopilotpluginrole](msdyn_servicecopilotpluginrole.md) | `objectid` | `objectid_msdyn_servicecopilotpluginrole` |
| `msdyn_servicecopilotpluginrole_ProcessSession` | [msdyn_servicecopilotpluginrole](msdyn_servicecopilotpluginrole.md) | `regardingobjectid` | `regardingobjectid_msdyn_servicecopilotpluginrole` |
| `msdyn_servicecopilotpluginrole_BulkDeleteFailures` | [msdyn_servicecopilotpluginrole](msdyn_servicecopilotpluginrole.md) | `regardingobjectid` | `regardingobjectid_msdyn_servicecopilotpluginrole` |
| `msdyn_servicecopilotpluginrole_PrincipalObjectAttributeAccesses` | [msdyn_servicecopilotpluginrole](msdyn_servicecopilotpluginrole.md) | `objectid` | `objectid_msdyn_servicecopilotpluginrole` |


## Source

Generated from [msdyn_servicecopilotpluginrole (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_servicecopilotpluginrole')) on 2026-05-07.