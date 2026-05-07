---
logical: "msdyn_leadagentresult"
display: "Lead Agent Result"
entitySetName: "msdyn_leadagentresults"
primaryId: "msdyn_leadagentresultid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Lead Agent Result

Entity to save lead agent results.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_leadagentresult` |
| Display name | Lead Agent Result |
| Display (plural) | Lead Agent Results |
| Schema name | `msdyn_leadagentresult` |
| Entity set (Web API) | `msdyn_leadagentresults` |
| Primary id attribute | `msdyn_leadagentresultid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_leadagentresults?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_leadagentresults(<guid>)
POST /api/data/v9.2/msdyn_leadagentresults
PATCH /api/data/v9.2/msdyn_leadagentresults(<guid>)
DELETE /api/data/v9.2/msdyn_leadagentresults(<guid>)
```

## Attributes

Writable: **31** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_bantscore`, `msdyn_cioengagementsummary`, `msdyn_cioengagementsummarylastrun`, `msdyn_firesynthesisadditionalinsights`, `msdyn_firesynthesisagentlastrun`, `msdyn_firesynthesisdata`, `msdyn_icpbantsummary`, `msdyn_icpexecutivesummary`, `msdyn_icpscore`, `msdyn_leadagentresultId`, `msdyn_leadid`, `msdyn_leadidIdType`, `msdyn_mostrecentoutlookactivity`, `msdyn_name`, `msdyn_prioritizationagentlastrun`, `msdyn_prioritizationresultdetails`, `msdyn_prioritizationresultscore`, `msdyn_purchasinginterestdata`, `msdyn_qualificationagentlastrun`, `msdyn_qualificationdecision`, `msdyn_qualificationresultdetails`, `msdyn_qualificationresultrank`, `msdyn_qualificationstandards`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_leadagentresult` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_leadagentresult_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_leadagentresult_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_leadagentresult_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_leadagentresult_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_leadagentresult_leadid` | [lead](lead.md) | `msdyn_leadid` | `msdyn_leadid_lead` |
| `owner_msdyn_leadagentresult` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_leadagentresult` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_leadagentresult` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_leadagentresult_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_leadagentresult_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_leadagentresult_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_leadagentresult_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_leadagentresult_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_leadagentresult_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_leadagentresult_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_leadagentresult_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_leadagentresult.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_leadagentresult.md) on 2026-05-06.