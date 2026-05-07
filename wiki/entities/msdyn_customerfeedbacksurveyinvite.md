---
logical: "msdyn_customerfeedbacksurveyinvite"
display: "Customer feedback survey invite"
entitySetName: "msdyn_customerfeedbacksurveyinvites"
primaryId: "msdyn_customerfeedbacksurveyinviteid"
primaryName: "msdyn_customerfeedbacksurveyurl"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Customer feedback survey invite

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_customerfeedbacksurveyinvite` |
| Display name | Customer feedback survey invite |
| Display (plural) | Customer feedback surveys invite |
| Schema name | `msdyn_customerfeedbacksurveyinvite` |
| Entity set (Web API) | `msdyn_customerfeedbacksurveyinvites` |
| Primary id attribute | `msdyn_customerfeedbacksurveyinviteid` |
| Primary name attribute | `msdyn_customerfeedbacksurveyurl` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_customerfeedbacksurveyinvites?$select=msdyn_customerfeedbacksurveyurl&$top=10
GET /api/data/v9.2/msdyn_customerfeedbacksurveyinvites(<guid>)
POST /api/data/v9.2/msdyn_customerfeedbacksurveyinvites
PATCH /api/data/v9.2/msdyn_customerfeedbacksurveyinvites(<guid>)
DELETE /api/data/v9.2/msdyn_customerfeedbacksurveyinvites(<guid>)
```

## Attributes

Writable: **14** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_customerfeedbacksurveyid`, `msdyn_customerfeedbacksurveyinviteId`, `msdyn_customerfeedbacksurveyurl`, `msdyn_inviteemailaddress`, `msdyn_inviteexpirationdate`, `msdyn_invitestatus`, `msdyn_otherproperties`, `msdyn_regardingobjectid`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_customerfeedbacksurveyinvite_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_customerfeedbacksurveyinvite_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_customerfeedbacksurveyinvite_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_customerfeedbacksurveyinvite_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_customerfeedbacksurvey_msdyn_customerfeedbacksurveyinvite` | [msdyn_customerfeedbacksurvey](msdyn_customerfeedbacksurvey.md) | `msdyn_customerfeedbacksurveyid` | `msdyn_customerfeedbacksurveyid` |
| `organization_msdyn_customerfeedbacksurveyinvite` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_customerfeedbacksurveyinvite_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerfeedbacksurveyinvite_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerfeedbacksurveyinvite_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_customerfeedbacksurveyinvite_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_customerfeedbacksurveyinvite_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerfeedbacksurveyinvite_msdyn_customerfeedbacksurveyresponse` | _n/a_ | `msdyn_customerfeedbacksurveyinviteid` | _n/a_ |
| `msdyn_customerfeedbacksurveyinvite_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_customerfeedbacksurveyinvite_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerfeedbacksurveyinvite_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_customerfeedbacksurveyinvite.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_customerfeedbacksurveyinvite.md) on 2026-05-06.