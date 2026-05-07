---
logical: "powerpagessiteaifeedback"
display: "Feedback IA sito di Power Pages"
entitySetName: "powerpagessiteaifeedbacks"
primaryId: "powerpagessiteaifeedbackid"
primaryName: "name"
tableType: "Elastic"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Feedback IA sito di Power Pages

## Identity

| Property | Value |
| --- | --- |
| Logical name | `powerpagessiteaifeedback` |
| Display name | Feedback IA sito di Power Pages |
| Display (plural) | Feedback IA sito di Power Pages |
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

Writable: **16** · Read-only: **10**

### Writable

`contact`, `feedback`, `importsequencenumber`, `name`, `origin`, `overriddencreatedon`, `ownerid`, `partitionid`, `powerpagessiteaifeedbackid`, `powerpagessiteaifeedbackname`, `reason`, `response`, `ttlinseconds`, `userprompt`, `websitedomain`, `websiteid`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_powerpagessiteaifeedback_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_powerpagessiteaifeedback_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_powerpagessiteaifeedback_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_powerpagessiteaifeedback_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_powerpagessiteaifeedback` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_powerpagessiteaifeedback` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_powerpagessiteaifeedback` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_powerpagessiteaifeedback` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `PowerPagesSiteAIFeedback_Contact_Contact` | [contact](contact.md) | `contact` | `Contact` |



## Source

Generated from [powerpagessiteaifeedback (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='powerpagessiteaifeedback')) on 2026-05-07.