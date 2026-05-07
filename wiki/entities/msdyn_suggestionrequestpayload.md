---
logical: "msdyn_suggestionrequestpayload"
display: "Suggestion request payload"
entitySetName: "msdyn_suggestionrequestpayloads"
primaryId: "msdyn_suggestionrequestpayloadid"
primaryName: "msdyn_suggestedentitylogicalname"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Suggestion request payload

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_suggestionrequestpayload` |
| Display name | Suggestion request payload |
| Display (plural) | Suggestion request payloads |
| Schema name | `msdyn_suggestionrequestpayload` |
| Entity set (Web API) | `msdyn_suggestionrequestpayloads` |
| Primary id attribute | `msdyn_suggestionrequestpayloadid` |
| Primary name attribute | `msdyn_suggestedentitylogicalname` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_suggestionrequestpayloads?$select=msdyn_suggestedentitylogicalname&$top=10
GET /api/data/v9.2/msdyn_suggestionrequestpayloads(<guid>)
POST /api/data/v9.2/msdyn_suggestionrequestpayloads
PATCH /api/data/v9.2/msdyn_suggestionrequestpayloads(<guid>)
DELETE /api/data/v9.2/msdyn_suggestionrequestpayloads(<guid>)
```

## Attributes

Writable: **12** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_requestpayload`, `msdyn_responsepayload`, `msdyn_suggestedentitylogicalname`, `msdyn_suggestionfor`, `msdyn_suggestionforIdType`, `msdyn_suggestionrequestpayloadId`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_suggestionrequestpayload_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_suggestionrequestpayload_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_suggestionrequestpayload_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_suggestionrequestpayload_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_incident_msdyn_suggestionrequestpayload` | [incident](incident.md) | `msdyn_suggestionfor` | `msdyn_suggestionfor_incident` |
| `msdyn_msdyn_ocliveworkitem_msdyn_suggestionrequestpayload` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_suggestionfor` | `msdyn_suggestionfor_msdyn_ocliveworkitem` |
| `organization_msdyn_suggestionrequestpayload` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_suggestionrequestpayload_msdyn_suggestioninteraction_SuggestionRequestPayload` | _n/a_ | `msdyn_suggestionrequestpayload` | _n/a_ |
| `msdyn_suggestionrequestpayload_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_suggestionrequestpayload_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_suggestionrequestpayload_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_suggestionrequestpayload_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_suggestionrequestpayload_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_suggestionrequestpayload_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_suggestionrequestpayload.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_suggestionrequestpayload.md) on 2026-05-06.