---
logical: "msfp_satisfactionmetricsurveymapping"
display: "Customer Voice Satisfaction Metric Survey Mapping"
entitySetName: "msfp_satisfactionmetricsurveymappings"
primaryId: "msfp_satisfactionmetricsurveymappingid"
primaryName: "msfp_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Customer Voice Satisfaction Metric Survey Mapping

Mapping between satisfaction metric and survey

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msfp_satisfactionmetricsurveymapping` |
| Display name | Customer Voice Satisfaction Metric Survey Mapping |
| Display (plural) | Customer Voice Satisfaction Metric Survey Mappings |
| Schema name | `msfp_satisfactionmetricsurveymapping` |
| Entity set (Web API) | `msfp_satisfactionmetricsurveymappings` |
| Primary id attribute | `msfp_satisfactionmetricsurveymappingid` |
| Primary name attribute | `msfp_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msfp_satisfactionmetricsurveymappings?$select=msfp_name&$top=10
GET /api/data/v9.2/msfp_satisfactionmetricsurveymappings(<guid>)
POST /api/data/v9.2/msfp_satisfactionmetricsurveymappings
PATCH /api/data/v9.2/msfp_satisfactionmetricsurveymappings(<guid>)
DELETE /api/data/v9.2/msfp_satisfactionmetricsurveymappings(<guid>)
```

## Attributes

Writable: **15** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msfp_name`, `msfp_projectid`, `msfp_satisfactionmetricid`, `msfp_satisfactionmetricsurveymappingId`, `msfp_satisfactionmetrictype`, `msfp_surveyid`, `msfp_surveyquestionid`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msfp_satisfactionmetricsurveymapping` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msfp_satisfactionmetricsurveymapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msfp_satisfactionmetricsurveymapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msfp_satisfactionmetricsurveymapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msfp_satisfactionmetricsurveymapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msfp_satisfactionmetricsurveymapping_projectid_msfp_project` | [msfp_project](msfp_project.md) | `msfp_projectid` | `msfp_projectid` |
| `msfp_satisfactionmetricsurveymapping_satisfactionmetricid_msfp_satisfactionmetric` | [msfp_satisfactionmetric](msfp_satisfactionmetric.md) | `msfp_satisfactionmetricid` | `msfp_satisfactionmetricid` |
| `msfp_satisfactionmetricsurveymapping_surveyid_msfp_survey` | [msfp_survey](msfp_survey.md) | `msfp_surveyid` | `msfp_surveyid` |
| `msfp_satisfactionmetricsurveymapping_surveyquestionid_msfp_question` | [msfp_question](msfp_question.md) | `msfp_surveyquestionid` | `msfp_surveyquestionid` |
| `owner_msfp_satisfactionmetricsurveymapping` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msfp_satisfactionmetricsurveymapping` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msfp_satisfactionmetricsurveymapping` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msfp_satisfactionmetricaggregate_satisfactionmetricsurveymappingid_msfp_satisfactionmetricsurveymap` | _n/a_ | `msfp_satisfactionmetricsurveymappingid` | _n/a_ |
| `msfp_satisfactionmetricsurveymapping_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_satisfactionmetricsurveymapping_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_satisfactionmetricsurveymapping_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msfp_satisfactionmetricsurveymapping_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msfp_satisfactionmetricsurveymapping_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_satisfactionmetricsurveymapping_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msfp_satisfactionmetricsurveymapping_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_satisfactionmetricsurveymapping_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msfp_satisfactionmetricsurveymapping.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msfp_satisfactionmetricsurveymapping.md) on 2026-05-06.