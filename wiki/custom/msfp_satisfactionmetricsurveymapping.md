---
logical: "msfp_satisfactionmetricsurveymapping"
display: "Mapping sondaggio metrica di soddisfazione Customer Voice"
entitySetName: "msfp_satisfactionmetricsurveymappings"
primaryId: "msfp_satisfactionmetricsurveymappingid"
primaryName: "msfp_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Mapping sondaggio metrica di soddisfazione Customer Voice

Mapping tra la metrica di soddisfazione e il sondaggio

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msfp_satisfactionmetricsurveymapping` |
| Display name | Mapping sondaggio metrica di soddisfazione Customer Voice |
| Display (plural) | Mapping sondaggi metrica di soddisfazione Customer Voice |
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

Writable: **14** · Read-only: **10**

### Writable

`importsequencenumber`, `msfp_name`, `msfp_projectid`, `msfp_satisfactionmetricid`, `msfp_satisfactionmetricsurveymappingid`, `msfp_satisfactionmetrictype`, `msfp_surveyid`, `msfp_surveyquestionid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msfp_satisfactionmetricsurveymapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msfp_satisfactionmetricsurveymapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msfp_satisfactionmetricsurveymapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msfp_satisfactionmetricsurveymapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msfp_satisfactionmetricsurveymapping` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msfp_satisfactionmetricsurveymapping` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msfp_satisfactionmetricsurveymapping` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msfp_satisfactionmetricsurveymapping` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msfp_satisfactionmetricsurveymapping_projectid_msfp_project` | [msfp_project](msfp_project.md) | `msfp_projectid` | `msfp_projectid` |
| `msfp_satisfactionmetricsurveymapping_satisfactionmetricid_msfp_satisfactionmetric` | [msfp_satisfactionmetric](msfp_satisfactionmetric.md) | `msfp_satisfactionmetricid` | `msfp_satisfactionmetricid` |
| `msfp_satisfactionmetricsurveymapping_surveyid_msfp_survey` | [msfp_survey](msfp_survey.md) | `msfp_surveyid` | `msfp_surveyid` |
| `msfp_satisfactionmetricsurveymapping_surveyquestionid_msfp_question` | [msfp_question](msfp_question.md) | `msfp_surveyquestionid` | `msfp_surveyquestionid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msfp_satisfactionmetricsurveymapping_SyncErrors` | [msfp_satisfactionmetricsurveymapping](msfp_satisfactionmetricsurveymapping.md) | `regardingobjectid` | `regardingobjectid_msfp_satisfactionmetricsurveymapping` |
| `msfp_satisfactionmetricsurveymapping_DuplicateMatchingRecord` | [msfp_satisfactionmetricsurveymapping](msfp_satisfactionmetricsurveymapping.md) | `duplicaterecordid` | `duplicaterecordid_msfp_satisfactionmetricsurveymapping` |
| `msfp_satisfactionmetricsurveymapping_DuplicateBaseRecord` | [msfp_satisfactionmetricsurveymapping](msfp_satisfactionmetricsurveymapping.md) | `baserecordid` | `baserecordid_msfp_satisfactionmetricsurveymapping` |
| `msfp_satisfactionmetricsurveymapping_AsyncOperations` | [msfp_satisfactionmetricsurveymapping](msfp_satisfactionmetricsurveymapping.md) | `regardingobjectid` | `regardingobjectid_msfp_satisfactionmetricsurveymapping` |
| `msfp_satisfactionmetricsurveymapping_MailboxTrackingFolders` | [msfp_satisfactionmetricsurveymapping](msfp_satisfactionmetricsurveymapping.md) | `regardingobjectid` | `regardingobjectid_msfp_satisfactionmetricsurveymapping` |
| `msfp_satisfactionmetricsurveymapping_UserEntityInstanceDatas` | [msfp_satisfactionmetricsurveymapping](msfp_satisfactionmetricsurveymapping.md) | `objectid` | `objectid_msfp_satisfactionmetricsurveymapping` |
| `msfp_satisfactionmetricsurveymapping_ProcessSession` | [msfp_satisfactionmetricsurveymapping](msfp_satisfactionmetricsurveymapping.md) | `regardingobjectid` | `regardingobjectid_msfp_satisfactionmetricsurveymapping` |
| `msfp_satisfactionmetricsurveymapping_BulkDeleteFailures` | [msfp_satisfactionmetricsurveymapping](msfp_satisfactionmetricsurveymapping.md) | `regardingobjectid` | `regardingobjectid_msfp_satisfactionmetricsurveymapping` |
| `msfp_satisfactionmetricsurveymapping_PrincipalObjectAttributeAccesses` | [msfp_satisfactionmetricsurveymapping](msfp_satisfactionmetricsurveymapping.md) | `objectid` | `objectid_msfp_satisfactionmetricsurveymapping` |
| `msfp_satisfactionmetricaggregate_satisfactionmetricsurveymappingid_msfp_satisfactionmetricsurveymap` | [msfp_satisfactionmetricsurveymapping](msfp_satisfactionmetricsurveymapping.md) | `msfp_satisfactionmetricsurveymappingid` | `msfp_satisfactionmetricsurveymappingid` |


## Source

Generated from [msfp_satisfactionmetricsurveymapping (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msfp_satisfactionmetricsurveymapping')) on 2026-05-07.