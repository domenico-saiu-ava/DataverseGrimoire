---
logical: "feedback"
display: "Feedback"
entitySetName: "feedback"
primaryId: "feedbackid"
primaryName: "title"
tableType: "Standard"
ownership: "UserOwned"
---

# Feedback

Feedback and rating.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `feedback` |
| Display name | Feedback |
| Display (plural) | Feedback |
| Schema name | `Feedback` |
| Entity set (Web API) | `feedback` |
| Primary id attribute | `feedbackid` |
| Primary name attribute | `title` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/feedback?$select=title&$top=10
GET /api/data/v9.2/feedback(<guid>)
POST /api/data/v9.2/feedback
PATCH /api/data/v9.2/feedback(<guid>)
DELETE /api/data/v9.2/feedback(<guid>)
```

## Attributes

Writable: **25** · Read-only: **16**

### Writable

`adx_approved`, `adx_authorurl`, `Adx_ContactEmail`, `Adx_ContactUsername`, `Adx_CreatedByContact`, `Comments`, `CreatedByContact`, `CreatedOnBehalfByContact`, `FeedbackId`, `ImportSequenceNumber`, `MaxRating`, `MinRating`, `msdyn_ContextObjectId`, `msdyn_ContextObjectIdType`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `Rating`, `RegardingObjectId`, `RegardingObjectTypeCode`, `Source`, `StateCode`, `StatusCode`, `Title`, `TransactionCurrencyId`

### Read-only

`ClosedBy`, `ClosedOn`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `NormalizedRating`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_feedback` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `Contact_Feedback` | [contact](contact.md) | `regardingobjectid` | `ContactId` |
| `feedback_feedback` | [feedback](feedback.md) | `regardingobjectid` | `FeedbackId` |
| `KnowledgeArticle_Feedback` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `KnowledgeArticleId` |
| `lk_contact_feedback_createdby` | [contact](contact.md) | `createdbycontact` | `CreatedByContact` |
| `lk_contact_feedback_createdonbehalfby` | [contact](contact.md) | `createdonbehalfbycontact` | `CreatedOnBehalfByContact` |
| `lk_feedback_closedby` | [systemuser](systemuser.md) | `closedby` | `closedby` |
| `lk_feedback_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_feedback_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_feedback_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_feedback_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `ModifiedOnBehalfBy` |
| `msdyn_knowledgearticle_feedback_context` | [knowledgearticle](knowledgearticle.md) | `msdyn_contextobjectid` | `msdyn_ContextObjectId_knowledgearticle` |
| `owner_feedback` | [owner](owner.md) | `ownerid` | `ownerid` |
| `transactioncurrency_feedback` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `feedback_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `feedback_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `feedback_feedback` | _n/a_ | `regardingobjectid` | _n/a_ |
| `feedback_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `Feedback_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [feedback.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/feedback.md) on 2026-05-06.