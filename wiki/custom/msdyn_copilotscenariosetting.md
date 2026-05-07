---
logical: "msdyn_copilotscenariosetting"
display: "Impostazione scenario Copilot"
entitySetName: "msdyn_copilotscenariosettings"
primaryId: "msdyn_copilotscenariosettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impostazione scenario Copilot

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_copilotscenariosetting` |
| Display name | Impostazione scenario Copilot |
| Display (plural) | Impostazioni scenario Copilot |
| Schema name | `msdyn_copilotscenariosetting` |
| Entity set (Web API) | `msdyn_copilotscenariosettings` |
| Primary id attribute | `msdyn_copilotscenariosettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_copilotscenariosettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_copilotscenariosettings(<guid>)
POST /api/data/v9.2/msdyn_copilotscenariosettings
PATCH /api/data/v9.2/msdyn_copilotscenariosettings(<guid>)
DELETE /api/data/v9.2/msdyn_copilotscenariosettings(<guid>)
```

## Attributes

Writable: **15** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_admininstructions`, `msdyn_copilotscenariosettingid`, `msdyn_name`, `msdyn_prioritizationcolumns`, `msdyn_prioritizationfetchxml`, `msdyn_prioritizationprompt`, `msdyn_scenario`, `msdyn_showdefaultaifields`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_copilotscenariosetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_copilotscenariosetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_copilotscenariosetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_copilotscenariosetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_copilotscenariosetting` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_copilotscenariosetting_SyncErrors` | [msdyn_copilotscenariosetting](msdyn_copilotscenariosetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotscenariosetting` |
| `msdyn_copilotscenariosetting_DuplicateMatchingRecord` | [msdyn_copilotscenariosetting](msdyn_copilotscenariosetting.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_copilotscenariosetting` |
| `msdyn_copilotscenariosetting_DuplicateBaseRecord` | [msdyn_copilotscenariosetting](msdyn_copilotscenariosetting.md) | `baserecordid` | `baserecordid_msdyn_copilotscenariosetting` |
| `msdyn_copilotscenariosetting_AsyncOperations` | [msdyn_copilotscenariosetting](msdyn_copilotscenariosetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotscenariosetting` |
| `msdyn_copilotscenariosetting_MailboxTrackingFolders` | [msdyn_copilotscenariosetting](msdyn_copilotscenariosetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotscenariosetting` |
| `msdyn_copilotscenariosetting_UserEntityInstanceDatas` | [msdyn_copilotscenariosetting](msdyn_copilotscenariosetting.md) | `objectid` | `objectid_msdyn_copilotscenariosetting` |
| `msdyn_copilotscenariosetting_ProcessSession` | [msdyn_copilotscenariosetting](msdyn_copilotscenariosetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotscenariosetting` |
| `msdyn_copilotscenariosetting_BulkDeleteFailures` | [msdyn_copilotscenariosetting](msdyn_copilotscenariosetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotscenariosetting` |
| `msdyn_copilotscenariosetting_PrincipalObjectAttributeAccesses` | [msdyn_copilotscenariosetting](msdyn_copilotscenariosetting.md) | `objectid` | `objectid_msdyn_copilotscenariosetting` |


## Source

Generated from [msdyn_copilotscenariosetting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_copilotscenariosetting')) on 2026-05-07.