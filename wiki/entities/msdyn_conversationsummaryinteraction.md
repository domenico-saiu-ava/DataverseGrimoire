---
logical: "msdyn_conversationsummaryinteraction"
display: "Conversation Summary Interaction"
entitySetName: "msdyn_conversationsummaryinteractions"
primaryId: "msdyn_conversationsummaryinteractionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Conversation Summary Interaction

Conversation Summary Interaction Entity

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_conversationsummaryinteraction` |
| Display name | Conversation Summary Interaction |
| Display (plural) | Conversation Summary Interactions |
| Schema name | `msdyn_conversationsummaryinteraction` |
| Entity set (Web API) | `msdyn_conversationsummaryinteractions` |
| Primary id attribute | `msdyn_conversationsummaryinteractionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_conversationsummaryinteractions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_conversationsummaryinteractions(<guid>)
POST /api/data/v9.2/msdyn_conversationsummaryinteractions
PATCH /api/data/v9.2/msdyn_conversationsummaryinteractions(<guid>)
DELETE /api/data/v9.2/msdyn_conversationsummaryinteractions(<guid>)
```

## Attributes

Writable: **17** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_conversationid`, `msdyn_conversationsummaryinteractionId`, `msdyn_feedbackverbatim`, `msdyn_helpful`, `msdyn_interactioncontext`, `msdyn_issuefeedbackverbatim`, `msdyn_issueinaccurate`, `msdyn_name`, `msdyn_resolutionfeedbackverbatim`, `msdyn_resolutioninaccurate`, `msdyn_summary`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_conversationsummaryinteraction_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationsummaryinteraction_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationsummaryinteraction_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationsummaryinteraction_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_ocliveworkitem_msdyn_conversationsummaryinteraction_conversationid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_conversationid` | `msdyn_conversationid` |
| `organization_msdyn_conversationsummaryinteraction` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationsummaryinteraction_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationsummaryinteraction_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationsummaryinteraction_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationsummaryinteraction_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_conversationsummaryinteraction_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationsummaryinteraction_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_conversationsummaryinteraction.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_conversationsummaryinteraction.md) on 2026-05-06.