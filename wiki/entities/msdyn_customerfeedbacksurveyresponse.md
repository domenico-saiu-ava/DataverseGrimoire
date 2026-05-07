---
logical: "msdyn_customerfeedbacksurveyresponse"
display: "Customer feedback survey response"
entitySetName: "msdyn_customerfeedbacksurveyresponses"
primaryId: "msdyn_customerfeedbacksurveyresponseid"
primaryName: "msdyn_customerfeedbacksurveyurl"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Customer feedback survey response

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_customerfeedbacksurveyresponse` |
| Display name | Customer feedback survey response |
| Display (plural) | Customer feedback surveys response |
| Schema name | `msdyn_customerfeedbacksurveyresponse` |
| Entity set (Web API) | `msdyn_customerfeedbacksurveyresponses` |
| Primary id attribute | `msdyn_customerfeedbacksurveyresponseid` |
| Primary name attribute | `msdyn_customerfeedbacksurveyurl` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_customerfeedbacksurveyresponses?$select=msdyn_customerfeedbacksurveyurl&$top=10
GET /api/data/v9.2/msdyn_customerfeedbacksurveyresponses(<guid>)
POST /api/data/v9.2/msdyn_customerfeedbacksurveyresponses
PATCH /api/data/v9.2/msdyn_customerfeedbacksurveyresponses(<guid>)
DELETE /api/data/v9.2/msdyn_customerfeedbacksurveyresponses(<guid>)
```

## Attributes

Writable: **15** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_customerfeedbacksurveyid`, `msdyn_customerfeedbacksurveyinviteid`, `msdyn_customerfeedbacksurveyresponseId`, `msdyn_customerfeedbacksurveyurl`, `msdyn_otherproperties`, `msdyn_regardingobjectid`, `msdyn_response`, `msdyn_response_raw`, `msdyn_satisfactionmetricvalue`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_customerfeedbacksurveyresponse_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_customerfeedbacksurveyresponse_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_customerfeedbacksurveyresponse_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_customerfeedbacksurveyresponse_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_customerfeedbacksurvey_msdyn_customerfeedbacksurveyresponse` | [msdyn_customerfeedbacksurvey](msdyn_customerfeedbacksurvey.md) | `msdyn_customerfeedbacksurveyid` | `msdyn_customerfeedbacksurveyid` |
| `msdyn_customerfeedbacksurveyinvite_msdyn_customerfeedbacksurveyresponse` | [msdyn_customerfeedbacksurveyinvite](msdyn_customerfeedbacksurveyinvite.md) | `msdyn_customerfeedbacksurveyinviteid` | `msdyn_customerfeedbacksurveyinviteid` |
| `organization_msdyn_customerfeedbacksurveyresponse` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_customerfeedbacksurveyresponse_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerfeedbacksurveyresponse_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerfeedbacksurveyresponse_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_customerfeedbacksurveyresponse_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_customerfeedbacksurveyresponse_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerfeedbacksurveyresponse_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_customerfeedbacksurveyresponse_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerfeedbacksurveyresponse_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_customerfeedbacksurveyresponse.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_customerfeedbacksurveyresponse.md) on 2026-05-06.