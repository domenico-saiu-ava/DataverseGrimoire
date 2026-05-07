---
logical: "msdyn_personasecurityrolemapping"
display: "Mapping ruoli di sicurezza utente tipo"
entitySetName: "msdyn_personasecurityrolemappings"
primaryId: "msdyn_personasecurityrolemappingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Mapping ruoli di sicurezza utente tipo

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_personasecurityrolemapping` |
| Display name | Mapping ruoli di sicurezza utente tipo |
| Display (plural) | Mapping ruoli di sicurezza utente tipo |
| Schema name | `msdyn_personasecurityrolemapping` |
| Entity set (Web API) | `msdyn_personasecurityrolemappings` |
| Primary id attribute | `msdyn_personasecurityrolemappingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_personasecurityrolemappings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_personasecurityrolemappings(<guid>)
POST /api/data/v9.2/msdyn_personasecurityrolemappings
PATCH /api/data/v9.2/msdyn_personasecurityrolemappings(<guid>)
DELETE /api/data/v9.2/msdyn_personasecurityrolemappings(<guid>)
```

## Attributes

Writable: **12** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_name`, `msdyn_personasecurityrolemappingid`, `msdyn_personatype`, `msdyn_securityroleid`, `msdyn_uniquename`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_role_msdyn_personasecurityrolemapping` | [role](role.md) | `msdyn_securityroleid` | `msdyn_SecurityRoleId` |
| `lk_msdyn_personasecurityrolemapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_personasecurityrolemapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_personasecurityrolemapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_personasecurityrolemapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_personasecurityrolemapping` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_personasecurityrolemapping_SyncErrors` | [msdyn_personasecurityrolemapping](msdyn_personasecurityrolemapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_personasecurityrolemapping` |
| `msdyn_personasecurityrolemapping_DuplicateMatchingRecord` | [msdyn_personasecurityrolemapping](msdyn_personasecurityrolemapping.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_personasecurityrolemapping` |
| `msdyn_personasecurityrolemapping_DuplicateBaseRecord` | [msdyn_personasecurityrolemapping](msdyn_personasecurityrolemapping.md) | `baserecordid` | `baserecordid_msdyn_personasecurityrolemapping` |
| `msdyn_personasecurityrolemapping_AsyncOperations` | [msdyn_personasecurityrolemapping](msdyn_personasecurityrolemapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_personasecurityrolemapping` |
| `msdyn_personasecurityrolemapping_MailboxTrackingFolders` | [msdyn_personasecurityrolemapping](msdyn_personasecurityrolemapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_personasecurityrolemapping` |
| `msdyn_personasecurityrolemapping_UserEntityInstanceDatas` | [msdyn_personasecurityrolemapping](msdyn_personasecurityrolemapping.md) | `objectid` | `objectid_msdyn_personasecurityrolemapping` |
| `msdyn_personasecurityrolemapping_ProcessSession` | [msdyn_personasecurityrolemapping](msdyn_personasecurityrolemapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_personasecurityrolemapping` |
| `msdyn_personasecurityrolemapping_BulkDeleteFailures` | [msdyn_personasecurityrolemapping](msdyn_personasecurityrolemapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_personasecurityrolemapping` |
| `msdyn_personasecurityrolemapping_PrincipalObjectAttributeAccesses` | [msdyn_personasecurityrolemapping](msdyn_personasecurityrolemapping.md) | `objectid` | `objectid_msdyn_personasecurityrolemapping` |


## Source

Generated from [msdyn_personasecurityrolemapping (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_personasecurityrolemapping')) on 2026-05-07.