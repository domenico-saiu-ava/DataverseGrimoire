---
logical: "msfp_fileresponse"
display: "Customer Voice file response"
entitySetName: "msfp_fileresponses"
primaryId: "msfp_fileresponseid"
primaryName: "msfp_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Customer Voice file response

Response to a file upload question.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msfp_fileresponse` |
| Display name | Customer Voice file response |
| Display (plural) | Customer Voice file responses |
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

Writable: **16** · Read-only: **32**

### Writable

`ImportSequenceNumber`, `msfp_fileresponseId`, `msfp_name`, `msfp_otherproperties`, `msfp_question`, `msfp_questionresponse`, `msfp_sourcequestionidentifier`, `msfp_sourcesurveyidentifier`, `msfp_survey`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msfp_file1`, `msfp_file1_Name`, `msfp_file10`, `msfp_file10_Name`, `msfp_file2`, `msfp_file2_Name`, `msfp_file3`, `msfp_file3_Name`, `msfp_file4`, `msfp_file4_Name`, `msfp_file5`, `msfp_file5_Name`, `msfp_file6`, `msfp_file6_Name`, `msfp_file7`, `msfp_file7_Name`, `msfp_file8`, `msfp_file8_Name`, `msfp_file9`, `msfp_file9_Name`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (21)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
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
| `lk_msfp_fileresponse_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msfp_fileresponse_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msfp_fileresponse_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msfp_fileresponse_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msfp_msfp_question_msfp_fileresponse_question` | [msfp_question](msfp_question.md) | `msfp_question` | `msfp_question` |
| `msfp_msfp_questionresponse_msfp_fileresponse_questionresponse` | [msfp_questionresponse](msfp_questionresponse.md) | `msfp_questionresponse` | `msfp_questionresponse` |
| `msfp_msfp_survey_msfp_fileresponse_survey` | [msfp_survey](msfp_survey.md) | `msfp_survey` | `msfp_survey` |
| `owner_msfp_fileresponse` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msfp_fileresponse` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msfp_fileresponse` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msfp_fileresponse_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_fileresponse_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_fileresponse_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msfp_fileresponse_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msfp_fileresponse_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `msfp_fileresponse_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_fileresponse_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msfp_fileresponse_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_fileresponse_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msfp_fileresponse.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msfp_fileresponse.md) on 2026-05-06.