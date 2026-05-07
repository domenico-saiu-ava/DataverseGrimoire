---
logical: "msdyn_suggestioninteraction"
display: "Suggestion Interaction"
entitySetName: "msdyn_suggestioninteractions"
primaryId: "msdyn_suggestioninteractionid"
primaryName: "msdyn_interactiontype"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Suggestion Interaction

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_suggestioninteraction` |
| Display name | Suggestion Interaction |
| Display (plural) | Suggestion Interactions |
| Schema name | `msdyn_suggestioninteraction` |
| Entity set (Web API) | `msdyn_suggestioninteractions` |
| Primary id attribute | `msdyn_suggestioninteractionid` |
| Primary name attribute | `msdyn_interactiontype` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_suggestioninteractions?$select=msdyn_interactiontype&$top=10
GET /api/data/v9.2/msdyn_suggestioninteractions(<guid>)
POST /api/data/v9.2/msdyn_suggestioninteractions
PATCH /api/data/v9.2/msdyn_suggestioninteractions(<guid>)
DELETE /api/data/v9.2/msdyn_suggestioninteractions(<guid>)
```

## Attributes

Writable: **14** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_interactioncontext`, `msdyn_interactiontype`, `msdyn_suggestedentity`, `msdyn_suggestedentityIdType`, `msdyn_suggestionfor`, `msdyn_suggestionforIdType`, `msdyn_suggestioninteractionId`, `msdyn_suggestionrequestpayload`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_suggestioninteraction_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_suggestioninteraction_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_suggestioninteraction_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_suggestioninteraction_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_incident_msdyn_suggestioninteraction_msdyn_suggestedentity` | [incident](incident.md) | `msdyn_suggestedentity` | `msdyn_suggestedentity_incident` |
| `msdyn_incident_msdyn_suggestioninteraction_msdyn_suggestionfor` | [incident](incident.md) | `msdyn_suggestionfor` | `msdyn_suggestionfor_incident` |
| `msdyn_knowledgearticle_msdyn_suggestioninteraction_msdyn_suggestedentity` | [knowledgearticle](knowledgearticle.md) | `msdyn_suggestedentity` | `msdyn_suggestedentity_knowledgearticle` |
| `msdyn_msdyn_ocliveworkitem_msdyn_suggestioninteraction_msdyn_suggestionfor` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_suggestionfor` | `msdyn_suggestionfor_msdyn_ocliveworkitem` |
| `msdyn_msdyn_suggestionrequestpayload_msdyn_suggestioninteraction_SuggestionRequestPayload` | [msdyn_suggestionrequestpayload](msdyn_suggestionrequestpayload.md) | `msdyn_suggestionrequestpayload` | `msdyn_suggestionrequestpayload` |
| `organization_msdyn_suggestioninteraction` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_suggestioninteraction_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_suggestioninteraction_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_suggestioninteraction_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_suggestioninteraction_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_suggestioninteraction_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_suggestioninteraction_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_suggestioninteraction.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_suggestioninteraction.md) on 2026-05-06.