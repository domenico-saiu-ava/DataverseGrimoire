---
logical: "knowledgefaq"
display: "Knowledge FAQ"
entitySetName: "knowledgefaqs"
primaryId: "knowledgefaqid"
primaryName: "botcomponentid"
tableType: "Standard"
ownership: "UserOwned"
---

# Knowledge FAQ

Stores Knowledge Frequently Asked Questions

## Identity

| Property | Value |
| --- | --- |
| Logical name | `knowledgefaq` |
| Display name | Knowledge FAQ |
| Display (plural) | Knowledge FAQS |
| Schema name | `KnowledgeFAQ` |
| Entity set (Web API) | `knowledgefaqs` |
| Primary id attribute | `knowledgefaqid` |
| Primary name attribute | `botcomponentid` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/knowledgefaqs?$select=botcomponentid&$top=10
GET /api/data/v9.2/knowledgefaqs(<guid>)
POST /api/data/v9.2/knowledgefaqs
PATCH /api/data/v9.2/knowledgefaqs(<guid>)
DELETE /api/data/v9.2/knowledgefaqs(<guid>)
```

## Attributes

Writable: **12** · Read-only: **12**

### Writable

`BotComponentId`, `FAQData`, `ImportSequenceNumber`, `KnowledgeFAQId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `Source`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_knowledgefaq` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_knowledgefaq_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_knowledgefaq_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_knowledgefaq_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_knowledgefaq_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_knowledgefaq` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_knowledgefaq` | [team](team.md) | `owningteam` | `owningteam` |
| `user_knowledgefaq` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `knowledgefaq_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `knowledgefaq_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `knowledgefaq_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `knowledgefaq_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `knowledgefaq_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `knowledgefaq_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [knowledgefaq.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/knowledgefaq.md) on 2026-05-06.