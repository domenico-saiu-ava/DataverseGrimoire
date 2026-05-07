---
logical: "msdyn_maskingrule"
display: "Regola di maschera"
entitySetName: "msdyn_maskingrules"
primaryId: "msdyn_maskingruleid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Regola di maschera

Regole di maschera da applicare ai messaggi di chat.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_maskingrule` |
| Display name | Regola di maschera |
| Display (plural) | Regole di maschera |
| Schema name | `msdyn_maskingrule` |
| Entity set (Web API) | `msdyn_maskingrules` |
| Primary id attribute | `msdyn_maskingruleid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_maskingrules?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_maskingrules(<guid>)
POST /api/data/v9.2/msdyn_maskingrules
PATCH /api/data/v9.2/msdyn_maskingrules(<guid>)
DELETE /api/data/v9.2/msdyn_maskingrules(<guid>)
```

## Attributes

Writable: **14** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_description`, `msdyn_enter_test_data`, `msdyn_masked_character`, `msdyn_masked_test_data`, `msdyn_maskingruleid`, `msdyn_name`, `msdyn_regular_expression`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_maskingrule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_maskingrule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_maskingrule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_maskingrule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_maskingrule` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_maskingrule_SyncErrors` | [msdyn_maskingrule](msdyn_maskingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_maskingrule` |
| `msdyn_maskingrule_DuplicateMatchingRecord` | [msdyn_maskingrule](msdyn_maskingrule.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_maskingrule` |
| `msdyn_maskingrule_DuplicateBaseRecord` | [msdyn_maskingrule](msdyn_maskingrule.md) | `baserecordid` | `baserecordid_msdyn_maskingrule` |
| `msdyn_maskingrule_AsyncOperations` | [msdyn_maskingrule](msdyn_maskingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_maskingrule` |
| `msdyn_maskingrule_MailboxTrackingFolders` | [msdyn_maskingrule](msdyn_maskingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_maskingrule` |
| `msdyn_maskingrule_UserEntityInstanceDatas` | [msdyn_maskingrule](msdyn_maskingrule.md) | `objectid` | `objectid_msdyn_maskingrule` |
| `msdyn_maskingrule_ProcessSession` | [msdyn_maskingrule](msdyn_maskingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_maskingrule` |
| `msdyn_maskingrule_BulkDeleteFailures` | [msdyn_maskingrule](msdyn_maskingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_maskingrule` |
| `msdyn_maskingrule_PrincipalObjectAttributeAccesses` | [msdyn_maskingrule](msdyn_maskingrule.md) | `objectid` | `objectid_msdyn_maskingrule` |


## Source

Generated from [msdyn_maskingrule (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_maskingrule')) on 2026-05-07.