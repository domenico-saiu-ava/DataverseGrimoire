---
logical: "msfp_questionresponse"
display: "Customer Voice survey question response"
entitySetName: "msfp_questionresponses"
primaryId: "msfp_questionresponseid"
primaryName: "msfp_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Customer Voice survey question response

Response to a question in a survey.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msfp_questionresponse` |
| Display name | Customer Voice survey question response |
| Display (plural) | Customer Voice survey question responses |
| Schema name | `msfp_questionresponse` |
| Entity set (Web API) | `msfp_questionresponses` |
| Primary id attribute | `msfp_questionresponseid` |
| Primary name attribute | `msfp_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msfp_questionresponses?$select=msfp_name&$top=10
GET /api/data/v9.2/msfp_questionresponses(<guid>)
POST /api/data/v9.2/msfp_questionresponses
PATCH /api/data/v9.2/msfp_questionresponses(<guid>)
DELETE /api/data/v9.2/msfp_questionresponses(<guid>)
```

## Attributes

Writable: **19** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msfp_keyphrases`, `msfp_name`, `msfp_otherproperties`, `msfp_questionid`, `msfp_questionresponseId`, `msfp_response`, `msfp_Sentimentvalue`, `msfp_sourcequestionidentifier`, `msfp_sourceresponseidentifier`, `msfp_sourcesurveyidentifier`, `msfp_surveyresponseid`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msfp_questionresponse` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msfp_questionresponse_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msfp_questionresponse_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msfp_questionresponse_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msfp_questionresponse_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msfp_msfp_question_msfp_questionresponse_questionid` | [msfp_question](msfp_question.md) | `msfp_questionid` | `msfp_questionid` |
| `msfp_msfp_surveyresponse_msfp_questionresponse_surveyresponseid` | [msfp_surveyresponse](msfp_surveyresponse.md) | `msfp_surveyresponseid` | `msfp_surveyresponseid` |
| `owner_msfp_questionresponse` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msfp_questionresponse` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msfp_questionresponse` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msfp_msfp_questionresponse_msfp_fileresponse_questionresponse` | _n/a_ | `msfp_questionresponse` | _n/a_ |
| `msfp_questionresponse_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_questionresponse_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_questionresponse_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_questionresponse_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msfp_questionresponse_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_questionresponse_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msfp_questionresponse.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msfp_questionresponse.md) on 2026-05-06.