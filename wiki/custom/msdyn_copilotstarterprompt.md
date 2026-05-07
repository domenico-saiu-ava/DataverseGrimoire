---
logical: "msdyn_copilotstarterprompt"
display: "Prompt iniziale Copilot"
entitySetName: "msdyn_copilotstarterprompts"
primaryId: "msdyn_copilotstarterpromptid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Prompt iniziale Copilot

Elenco di prompt iniziali per le competenze di Copilot

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_copilotstarterprompt` |
| Display name | Prompt iniziale Copilot |
| Display (plural) | Prompt iniziali Copilot |
| Schema name | `msdyn_copilotstarterprompt` |
| Entity set (Web API) | `msdyn_copilotstarterprompts` |
| Primary id attribute | `msdyn_copilotstarterpromptid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_copilotstarterprompts?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_copilotstarterprompts(<guid>)
POST /api/data/v9.2/msdyn_copilotstarterprompts
PATCH /api/data/v9.2/msdyn_copilotstarterprompts(<guid>)
DELETE /api/data/v9.2/msdyn_copilotstarterprompts(<guid>)
```

## Attributes

Writable: **16** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_copilotskill`, `msdyn_copilotstarterpromptid`, `msdyn_name`, `msdyn_section1prompt`, `msdyn_section1title`, `msdyn_section2prompt`, `msdyn_section2title`, `msdyn_section3prompt`, `msdyn_section3title`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_copilotstarterprompt_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_copilotstarterprompt_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_copilotstarterprompt_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_copilotstarterprompt_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_copilotstarterprompt` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_msdyn_copilotskill_msdyn_copilotstarterprompt_copilotskill` | [msdyn_copilotskill](msdyn_copilotskill.md) | `msdyn_copilotskill` | `msdyn_copilotskill` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_copilotstarterprompt_SyncErrors` | [msdyn_copilotstarterprompt](msdyn_copilotstarterprompt.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotstarterprompt` |
| `msdyn_copilotstarterprompt_DuplicateMatchingRecord` | [msdyn_copilotstarterprompt](msdyn_copilotstarterprompt.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_copilotstarterprompt` |
| `msdyn_copilotstarterprompt_DuplicateBaseRecord` | [msdyn_copilotstarterprompt](msdyn_copilotstarterprompt.md) | `baserecordid` | `baserecordid_msdyn_copilotstarterprompt` |
| `msdyn_copilotstarterprompt_AsyncOperations` | [msdyn_copilotstarterprompt](msdyn_copilotstarterprompt.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotstarterprompt` |
| `msdyn_copilotstarterprompt_MailboxTrackingFolders` | [msdyn_copilotstarterprompt](msdyn_copilotstarterprompt.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotstarterprompt` |
| `msdyn_copilotstarterprompt_UserEntityInstanceDatas` | [msdyn_copilotstarterprompt](msdyn_copilotstarterprompt.md) | `objectid` | `objectid_msdyn_copilotstarterprompt` |
| `msdyn_copilotstarterprompt_ProcessSession` | [msdyn_copilotstarterprompt](msdyn_copilotstarterprompt.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotstarterprompt` |
| `msdyn_copilotstarterprompt_BulkDeleteFailures` | [msdyn_copilotstarterprompt](msdyn_copilotstarterprompt.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotstarterprompt` |
| `msdyn_copilotstarterprompt_PrincipalObjectAttributeAccesses` | [msdyn_copilotstarterprompt](msdyn_copilotstarterprompt.md) | `objectid` | `objectid_msdyn_copilotstarterprompt` |


## Source

Generated from [msdyn_copilotstarterprompt (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_copilotstarterprompt')) on 2026-05-07.