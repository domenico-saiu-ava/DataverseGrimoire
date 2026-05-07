---
logical: "msdyn_compliancerule"
display: "Regola di conformità"
entitySetName: "msdyn_compliancerules"
primaryId: "msdyn_complianceruleid"
primaryName: "msdyn_rulename"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Regola di conformità

Definisce una regola di conformità o una protezione configurata dagli amministratori.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_compliancerule` |
| Display name | Regola di conformità |
| Display (plural) | Regole di conformità |
| Schema name | `msdyn_ComplianceRule` |
| Entity set (Web API) | `msdyn_compliancerules` |
| Primary id attribute | `msdyn_complianceruleid` |
| Primary name attribute | `msdyn_rulename` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_compliancerules?$select=msdyn_rulename&$top=10
GET /api/data/v9.2/msdyn_compliancerules(<guid>)
POST /api/data/v9.2/msdyn_compliancerules
PATCH /api/data/v9.2/msdyn_compliancerules(<guid>)
DELETE /api/data/v9.2/msdyn_compliancerules(<guid>)
```

## Attributes

Writable: **13** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_action`, `msdyn_complianceruleid`, `msdyn_description`, `msdyn_nudgetemplateid`, `msdyn_rulename`, `msdyn_scope`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_compliancerule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_compliancerule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_compliancerule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_compliancerule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_compliancerule` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_compliancerule_NudgeTemplateID_msdyn_agentnudgetemplate` | [msdyn_agentnudgetemplate](msdyn_agentnudgetemplate.md) | `msdyn_nudgetemplateid` | `msdyn_NudgeTemplateID` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_compliancerule_SyncErrors` | [msdyn_compliancerule](msdyn_compliancerule.md) | `regardingobjectid` | `regardingobjectid_msdyn_compliancerule` |
| `msdyn_compliancerule_DuplicateMatchingRecord` | [msdyn_compliancerule](msdyn_compliancerule.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_compliancerule` |
| `msdyn_compliancerule_DuplicateBaseRecord` | [msdyn_compliancerule](msdyn_compliancerule.md) | `baserecordid` | `baserecordid_msdyn_compliancerule` |
| `msdyn_compliancerule_AsyncOperations` | [msdyn_compliancerule](msdyn_compliancerule.md) | `regardingobjectid` | `regardingobjectid_msdyn_compliancerule` |
| `msdyn_compliancerule_MailboxTrackingFolders` | [msdyn_compliancerule](msdyn_compliancerule.md) | `regardingobjectid` | `regardingobjectid_msdyn_compliancerule` |
| `msdyn_compliancerule_UserEntityInstanceDatas` | [msdyn_compliancerule](msdyn_compliancerule.md) | `objectid` | `objectid_msdyn_compliancerule` |
| `msdyn_compliancerule_ProcessSession` | [msdyn_compliancerule](msdyn_compliancerule.md) | `regardingobjectid` | `regardingobjectid_msdyn_compliancerule` |
| `msdyn_compliancerule_BulkDeleteFailures` | [msdyn_compliancerule](msdyn_compliancerule.md) | `regardingobjectid` | `regardingobjectid_msdyn_compliancerule` |
| `msdyn_compliancerule_PrincipalObjectAttributeAccesses` | [msdyn_compliancerule](msdyn_compliancerule.md) | `objectid` | `objectid_msdyn_compliancerule` |


## Source

Generated from [msdyn_compliancerule (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_compliancerule')) on 2026-05-07.