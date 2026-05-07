---
logical: "msdyn_casesuggestionrequestpayload"
display: "Case Suggestion Request Payload"
entitySetName: "msdyn_casesuggestionrequestpayloads"
primaryId: "msdyn_casesuggestionrequestpayloadid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Case Suggestion Request Payload

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_casesuggestionrequestpayload` |
| Display name | Case Suggestion Request Payload |
| Display (plural) | Case Suggestion Request Payloads |
| Schema name | `msdyn_casesuggestionrequestpayload` |
| Entity set (Web API) | `msdyn_casesuggestionrequestpayloads` |
| Primary id attribute | `msdyn_casesuggestionrequestpayloadid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_casesuggestionrequestpayloads?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_casesuggestionrequestpayloads(<guid>)
POST /api/data/v9.2/msdyn_casesuggestionrequestpayloads
PATCH /api/data/v9.2/msdyn_casesuggestionrequestpayloads(<guid>)
DELETE /api/data/v9.2/msdyn_casesuggestionrequestpayloads(<guid>)
```

## Attributes

Writable: **11** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_caseid`, `msdyn_casesuggestionrequestpayloadId`, `msdyn_name`, `msdyn_requestpayload`, `msdyn_responsepayload`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_casesuggestionrequestpayload_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_casesuggestionrequestpayload_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_casesuggestionrequestpayload_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_casesuggestionrequestpayload_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_incident_msdyn_casesuggestionrequestpayload_caseid` | [incident](incident.md) | `msdyn_caseid` | `msdyn_caseid` |
| `organization_msdyn_casesuggestionrequestpayload` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_casesuggestionrequestpayload_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_casesuggestionrequestpayload_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_casesuggestionrequestpayload_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_casesuggestionrequestpayload_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_casesuggestionrequestpayload_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_casesuggestionrequestpayload_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_casesuggestionrequestpayload.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_casesuggestionrequestpayload.md) on 2026-05-06.