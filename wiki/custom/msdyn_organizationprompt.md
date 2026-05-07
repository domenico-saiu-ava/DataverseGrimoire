---
logical: "msdyn_organizationprompt"
display: "Prompt organizzazione"
entitySetName: "msdyn_organizationprompts"
primaryId: "msdyn_organizationpromptid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Prompt organizzazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_organizationprompt` |
| Display name | Prompt organizzazione |
| Display (plural) | Prompt organizzazione |
| Schema name | `msdyn_organizationprompt` |
| Entity set (Web API) | `msdyn_organizationprompts` |
| Primary id attribute | `msdyn_organizationpromptid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_organizationprompts?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_organizationprompts(<guid>)
POST /api/data/v9.2/msdyn_organizationprompts
PATCH /api/data/v9.2/msdyn_organizationprompts(<guid>)
DELETE /api/data/v9.2/msdyn_organizationprompts(<guid>)
```

## Attributes

Writable: **20** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `mdyn_orgpromptfiltervalue`, `msdyn_clientactionresources`, `msdyn_clienteventdata`, `msdyn_entityname`, `msdyn_name`, `msdyn_organizationpromptfiltervalue`, `msdyn_organizationpromptid`, `msdyn_prompt`, `msdyn_promptalias`, `msdyn_promptinstruction`, `msdyn_promptscope`, `msdyn_showinguide`, `msdyn_skill`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_organizationprompt_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_organizationprompt_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_organizationprompt_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_organizationprompt_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_organizationprompt` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_organizationprompt_msdyn_skill_msdyn_copilotskill` | [msdyn_copilotskill](msdyn_copilotskill.md) | `msdyn_skill` | `msdyn_skill` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_organizationprompt_SyncErrors` | [msdyn_organizationprompt](msdyn_organizationprompt.md) | `regardingobjectid` | `regardingobjectid_msdyn_organizationprompt` |
| `msdyn_organizationprompt_DuplicateMatchingRecord` | [msdyn_organizationprompt](msdyn_organizationprompt.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_organizationprompt` |
| `msdyn_organizationprompt_DuplicateBaseRecord` | [msdyn_organizationprompt](msdyn_organizationprompt.md) | `baserecordid` | `baserecordid_msdyn_organizationprompt` |
| `msdyn_organizationprompt_AsyncOperations` | [msdyn_organizationprompt](msdyn_organizationprompt.md) | `regardingobjectid` | `regardingobjectid_msdyn_organizationprompt` |
| `msdyn_organizationprompt_MailboxTrackingFolders` | [msdyn_organizationprompt](msdyn_organizationprompt.md) | `regardingobjectid` | `regardingobjectid_msdyn_organizationprompt` |
| `msdyn_organizationprompt_UserEntityInstanceDatas` | [msdyn_organizationprompt](msdyn_organizationprompt.md) | `objectid` | `objectid_msdyn_organizationprompt` |
| `msdyn_organizationprompt_ProcessSession` | [msdyn_organizationprompt](msdyn_organizationprompt.md) | `regardingobjectid` | `regardingobjectid_msdyn_organizationprompt` |
| `msdyn_organizationprompt_BulkDeleteFailures` | [msdyn_organizationprompt](msdyn_organizationprompt.md) | `regardingobjectid` | `regardingobjectid_msdyn_organizationprompt` |
| `msdyn_organizationprompt_PrincipalObjectAttributeAccesses` | [msdyn_organizationprompt](msdyn_organizationprompt.md) | `objectid` | `objectid_msdyn_organizationprompt` |


## Source

Generated from [msdyn_organizationprompt (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_organizationprompt')) on 2026-05-07.