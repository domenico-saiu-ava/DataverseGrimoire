---
logical: "msfp_fileresponse"
display: "Risposta file Customer Voice"
entitySetName: "msfp_fileresponses"
primaryId: "msfp_fileresponseid"
primaryName: "msfp_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Risposta file Customer Voice

Risposta a una domanda di caricamento file.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msfp_fileresponse` |
| Display name | Risposta file Customer Voice |
| Display (plural) | Risposte file Customer Voice |
| Schema name | `msfp_fileresponse` |
| Entity set (Web API) | `msfp_fileresponses` |
| Primary id attribute | `msfp_fileresponseid` |
| Primary name attribute | `msfp_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msfp_fileresponses?$select=msfp_name&$top=10
GET /api/data/v9.2/msfp_fileresponses(<guid>)
POST /api/data/v9.2/msfp_fileresponses
PATCH /api/data/v9.2/msfp_fileresponses(<guid>)
DELETE /api/data/v9.2/msfp_fileresponses(<guid>)
```

## Attributes

Writable: **15** · Read-only: **20**

### Writable

`importsequencenumber`, `msfp_fileresponseid`, `msfp_name`, `msfp_otherproperties`, `msfp_question`, `msfp_questionresponse`, `msfp_sourcequestionidentifier`, `msfp_sourcesurveyidentifier`, `msfp_survey`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msfp_file1`, `msfp_file10`, `msfp_file2`, `msfp_file3`, `msfp_file4`, `msfp_file5`, `msfp_file6`, `msfp_file7`, `msfp_file8`, `msfp_file9`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (21)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msfp_fileresponse_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msfp_fileresponse_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msfp_fileresponse_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msfp_fileresponse_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msfp_fileresponse` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msfp_fileresponse` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msfp_fileresponse` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msfp_fileresponse` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msfp_fileresponse_msfp_file1` | [fileattachment](fileattachment.md) | `msfp_file1` | `msfp_file1` |
| `FileAttachment_msfp_fileresponse_msfp_file10` | [fileattachment](fileattachment.md) | `msfp_file10` | `msfp_file10` |
| `FileAttachment_msfp_fileresponse_msfp_file2` | [fileattachment](fileattachment.md) | `msfp_file2` | `msfp_file2` |
| `FileAttachment_msfp_fileresponse_msfp_file3` | [fileattachment](fileattachment.md) | `msfp_file3` | `msfp_file3` |
| `FileAttachment_msfp_fileresponse_msfp_file4` | [fileattachment](fileattachment.md) | `msfp_file4` | `msfp_file4` |
| `FileAttachment_msfp_fileresponse_msfp_file5` | [fileattachment](fileattachment.md) | `msfp_file5` | `msfp_file5` |
| `FileAttachment_msfp_fileresponse_msfp_file6` | [fileattachment](fileattachment.md) | `msfp_file6` | `msfp_file6` |
| `FileAttachment_msfp_fileresponse_msfp_file7` | [fileattachment](fileattachment.md) | `msfp_file7` | `msfp_file7` |
| `FileAttachment_msfp_fileresponse_msfp_file8` | [fileattachment](fileattachment.md) | `msfp_file8` | `msfp_file8` |
| `FileAttachment_msfp_fileresponse_msfp_file9` | [fileattachment](fileattachment.md) | `msfp_file9` | `msfp_file9` |
| `msfp_msfp_question_msfp_fileresponse_question` | [msfp_question](msfp_question.md) | `msfp_question` | `msfp_question` |
| `msfp_msfp_questionresponse_msfp_fileresponse_questionresponse` | [msfp_questionresponse](msfp_questionresponse.md) | `msfp_questionresponse` | `msfp_questionresponse` |
| `msfp_msfp_survey_msfp_fileresponse_survey` | [msfp_survey](msfp_survey.md) | `msfp_survey` | `msfp_survey` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msfp_fileresponse_SyncErrors` | [msfp_fileresponse](msfp_fileresponse.md) | `regardingobjectid` | `regardingobjectid_msfp_fileresponse` |
| `msfp_fileresponse_DuplicateMatchingRecord` | [msfp_fileresponse](msfp_fileresponse.md) | `duplicaterecordid` | `duplicaterecordid_msfp_fileresponse` |
| `msfp_fileresponse_DuplicateBaseRecord` | [msfp_fileresponse](msfp_fileresponse.md) | `baserecordid` | `baserecordid_msfp_fileresponse` |
| `msfp_fileresponse_AsyncOperations` | [msfp_fileresponse](msfp_fileresponse.md) | `regardingobjectid` | `regardingobjectid_msfp_fileresponse` |
| `msfp_fileresponse_MailboxTrackingFolders` | [msfp_fileresponse](msfp_fileresponse.md) | `regardingobjectid` | `regardingobjectid_msfp_fileresponse` |
| `msfp_fileresponse_UserEntityInstanceDatas` | [msfp_fileresponse](msfp_fileresponse.md) | `objectid` | `objectid_msfp_fileresponse` |
| `msfp_fileresponse_ProcessSession` | [msfp_fileresponse](msfp_fileresponse.md) | `regardingobjectid` | `regardingobjectid_msfp_fileresponse` |
| `msfp_fileresponse_BulkDeleteFailures` | [msfp_fileresponse](msfp_fileresponse.md) | `regardingobjectid` | `regardingobjectid_msfp_fileresponse` |
| `msfp_fileresponse_PrincipalObjectAttributeAccesses` | [msfp_fileresponse](msfp_fileresponse.md) | `objectid` | `objectid_msfp_fileresponse` |
| `msfp_fileresponse_FileAttachments` | [msfp_fileresponse](msfp_fileresponse.md) | `objectid` | `objectid_msfp_fileresponse` |


## Source

Generated from [msfp_fileresponse (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msfp_fileresponse')) on 2026-05-07.