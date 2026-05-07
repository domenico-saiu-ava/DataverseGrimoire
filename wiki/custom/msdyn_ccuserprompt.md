---
logical: "msdyn_ccuserprompt"
display: "CC User Prompt"
entitySetName: "msdyn_ccuserprompts"
primaryId: "msdyn_ccuserpromptid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# CC User Prompt

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ccuserprompt` |
| Display name | CC User Prompt |
| Display (plural) | CC User Prompts |
| Schema name | `msdyn_ccuserprompt` |
| Entity set (Web API) | `msdyn_ccuserprompts` |
| Primary id attribute | `msdyn_ccuserpromptid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ccuserprompts?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ccuserprompts(<guid>)
POST /api/data/v9.2/msdyn_ccuserprompts
PATCH /api/data/v9.2/msdyn_ccuserprompts(<guid>)
DELETE /api/data/v9.2/msdyn_ccuserprompts(<guid>)
```

## Attributes

Writable: **20** · Read-only: **17**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_ccplaybookpolicyid`, `msdyn_ccuserpromptid`, `msdyn_channel`, `msdyn_errormessage`, `msdyn_exclusionlist`, `msdyn_inclusionlist`, `msdyn_name`, `msdyn_prompt`, `msdyn_promptstage`, `msdyn_promptstagestatus`, `msdyn_promptstatus`, `msdyn_prompttemplate`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_workflowrule`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_ccuserprompt_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ccuserprompt_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ccuserprompt_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ccuserprompt_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_ccuserprompt` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_ccuserprompt` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_ccuserprompt` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_ccuserprompt` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_ccuserprompt_msdyn_workflowrule` | [fileattachment](fileattachment.md) | `msdyn_workflowrule` | `msdyn_workflowrule` |
| `msdyn_ccuserprompt_ccplaybookpolicyid_msdyn_ccplaybookpolicy` | [msdyn_ccplaybookpolicy](msdyn_ccplaybookpolicy.md) | `msdyn_ccplaybookpolicyid` | `msdyn_ccplaybookpolicyid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ccuserprompt_SyncErrors` | [msdyn_ccuserprompt](msdyn_ccuserprompt.md) | `regardingobjectid` | `regardingobjectid_msdyn_ccuserprompt` |
| `msdyn_ccuserprompt_AsyncOperations` | [msdyn_ccuserprompt](msdyn_ccuserprompt.md) | `regardingobjectid` | `regardingobjectid_msdyn_ccuserprompt` |
| `msdyn_ccuserprompt_MailboxTrackingFolders` | [msdyn_ccuserprompt](msdyn_ccuserprompt.md) | `regardingobjectid` | `regardingobjectid_msdyn_ccuserprompt` |
| `msdyn_ccuserprompt_UserEntityInstanceDatas` | [msdyn_ccuserprompt](msdyn_ccuserprompt.md) | `objectid` | `objectid_msdyn_ccuserprompt` |
| `msdyn_ccuserprompt_ProcessSession` | [msdyn_ccuserprompt](msdyn_ccuserprompt.md) | `regardingobjectid` | `regardingobjectid_msdyn_ccuserprompt` |
| `msdyn_ccuserprompt_BulkDeleteFailures` | [msdyn_ccuserprompt](msdyn_ccuserprompt.md) | `regardingobjectid` | `regardingobjectid_msdyn_ccuserprompt` |
| `msdyn_ccuserprompt_PrincipalObjectAttributeAccesses` | [msdyn_ccuserprompt](msdyn_ccuserprompt.md) | `objectid` | `objectid_msdyn_ccuserprompt` |
| `msdyn_ccuserprompt_FileAttachments` | [msdyn_ccuserprompt](msdyn_ccuserprompt.md) | `objectid` | `objectid_msdyn_ccuserprompt` |


## Source

Generated from [msdyn_ccuserprompt (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ccuserprompt')) on 2026-05-07.