---
logical: "powerpagessiteaifeedback"
display: "Power Pages Site AI Feedback"
entitySetName: "powerpagessiteaifeedbacks"
primaryId: "powerpagessiteaifeedbackid"
primaryName: "name"
tableType: "Elastic"
ownership: "UserOwned"
---

# Power Pages Site AI Feedback

## Identity

| Property | Value |
| --- | --- |
| Logical name | `powerpagessiteaifeedback` |
| Display name | Power Pages Site AI Feedback |
| Display (plural) | Power Pages Site AI Feedbacks |
| Schema name | `PowerPagesSiteAIFeedback` |
| Entity set (Web API) | `powerpagessiteaifeedbacks` |
| Primary id attribute | `powerpagessiteaifeedbackid` |
| Primary name attribute | `name` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/powerpagessiteaifeedbacks?$select=name&$top=10
GET /api/data/v9.2/powerpagessiteaifeedbacks(<guid>)
POST /api/data/v9.2/powerpagessiteaifeedbacks
PATCH /api/data/v9.2/powerpagessiteaifeedbacks(<guid>)
DELETE /api/data/v9.2/powerpagessiteaifeedbacks(<guid>)
```

## Attributes

Writable: **17** · Read-only: **12**

### Writable

`Contact`, `Feedback`, `ImportSequenceNumber`, `Name`, `Origin`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PartitionId`, `PowerPagesSiteAIFeedbackId`, `PowerPagesSiteAIFeedbackName`, `Reason`, `Response`, `TTLInSeconds`, `UserPrompt`, `WebsiteDomain`, `WebsiteId`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_powerpagessiteaifeedback` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_powerpagessiteaifeedback_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_powerpagessiteaifeedback_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_powerpagessiteaifeedback_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_powerpagessiteaifeedback_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_powerpagessiteaifeedback` | [owner](owner.md) | `ownerid` | `ownerid` |
| `PowerPagesSiteAIFeedback_Contact_Contact` | [contact](contact.md) | `contact` | `Contact` |
| `team_powerpagessiteaifeedback` | [team](team.md) | `owningteam` | `owningteam` |
| `user_powerpagessiteaifeedback` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |



## Source

Generated from [powerpagessiteaifeedback.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/powerpagessiteaifeedback.md) on 2026-05-06.