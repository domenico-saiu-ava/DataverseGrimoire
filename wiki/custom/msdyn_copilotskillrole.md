---
logical: "msdyn_copilotskillrole"
display: "Ruolo competenza Copilot"
entitySetName: "msdyn_copilotskillroles"
primaryId: "msdyn_copilotskillroleid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Ruolo competenza Copilot

Archivia il mapping tra i ruoli e le competenze di Copilot.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_copilotskillrole` |
| Display name | Ruolo competenza Copilot |
| Display (plural) | Ruoli competenza Copilot |
| Schema name | `msdyn_copilotskillrole` |
| Entity set (Web API) | `msdyn_copilotskillroles` |
| Primary id attribute | `msdyn_copilotskillroleid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_copilotskillroles?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_copilotskillroles(<guid>)
POST /api/data/v9.2/msdyn_copilotskillroles
PATCH /api/data/v9.2/msdyn_copilotskillroles(<guid>)
DELETE /api/data/v9.2/msdyn_copilotskillroles(<guid>)
```

## Attributes

Writable: **10** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_copilotskillid`, `msdyn_copilotskillroleid`, `msdyn_name`, `msdyn_roleid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_copilotskillrole_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_copilotskillrole_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_copilotskillrole_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_copilotskillrole_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_copilotskillrole` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_msdyn_copilotskill_msdyn_copilotskillrole_copilotskillid` | [msdyn_copilotskill](msdyn_copilotskill.md) | `msdyn_copilotskillid` | `msdyn_copilotskillid` |
| `msdyn_role_msdyn_copilotskillrole_roleid` | [role](role.md) | `msdyn_roleid` | `msdyn_roleid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_copilotskillrole_SyncErrors` | [msdyn_copilotskillrole](msdyn_copilotskillrole.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotskillrole` |
| `msdyn_copilotskillrole_DuplicateMatchingRecord` | [msdyn_copilotskillrole](msdyn_copilotskillrole.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_copilotskillrole` |
| `msdyn_copilotskillrole_DuplicateBaseRecord` | [msdyn_copilotskillrole](msdyn_copilotskillrole.md) | `baserecordid` | `baserecordid_msdyn_copilotskillrole` |
| `msdyn_copilotskillrole_AsyncOperations` | [msdyn_copilotskillrole](msdyn_copilotskillrole.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotskillrole` |
| `msdyn_copilotskillrole_MailboxTrackingFolders` | [msdyn_copilotskillrole](msdyn_copilotskillrole.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotskillrole` |
| `msdyn_copilotskillrole_UserEntityInstanceDatas` | [msdyn_copilotskillrole](msdyn_copilotskillrole.md) | `objectid` | `objectid_msdyn_copilotskillrole` |
| `msdyn_copilotskillrole_ProcessSession` | [msdyn_copilotskillrole](msdyn_copilotskillrole.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotskillrole` |
| `msdyn_copilotskillrole_BulkDeleteFailures` | [msdyn_copilotskillrole](msdyn_copilotskillrole.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotskillrole` |
| `msdyn_copilotskillrole_PrincipalObjectAttributeAccesses` | [msdyn_copilotskillrole](msdyn_copilotskillrole.md) | `objectid` | `objectid_msdyn_copilotskillrole` |


## Source

Generated from [msdyn_copilotskillrole (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_copilotskillrole')) on 2026-05-07.