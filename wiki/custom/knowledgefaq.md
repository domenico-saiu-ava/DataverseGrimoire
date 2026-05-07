---
logical: "knowledgefaq"
display: "FAQ Knowledge Base"
entitySetName: "knowledgefaqs"
primaryId: "knowledgefaqid"
primaryName: "botcomponentid"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# FAQ Knowledge Base

Archivia le domande frequenti della Knowledge Base

## Identity

| Property | Value |
| --- | --- |
| Logical name | `knowledgefaq` |
| Display name | FAQ Knowledge Base |
| Display (plural) | FAQS Knowledge Base |
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

Writable: **11** · Read-only: **10**

### Writable

`botcomponentid`, `faqdata`, `importsequencenumber`, `knowledgefaqid`, `overriddencreatedon`, `ownerid`, `source`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_knowledgefaq_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_knowledgefaq_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_knowledgefaq_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_knowledgefaq_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_knowledgefaq` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_knowledgefaq` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_knowledgefaq` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_knowledgefaq` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `knowledgefaq_SyncErrors` | [knowledgefaq](knowledgefaq.md) | `regardingobjectid` | `regardingobjectid_knowledgefaq` |
| `knowledgefaq_AsyncOperations` | [knowledgefaq](knowledgefaq.md) | `regardingobjectid` | `regardingobjectid_knowledgefaq` |
| `knowledgefaq_MailboxTrackingFolders` | [knowledgefaq](knowledgefaq.md) | `regardingobjectid` | `regardingobjectid_knowledgefaq` |
| `knowledgefaq_UserEntityInstanceDatas` | [knowledgefaq](knowledgefaq.md) | `objectid` | `objectid_knowledgefaq` |
| `knowledgefaq_ProcessSession` | [knowledgefaq](knowledgefaq.md) | `regardingobjectid` | `regardingobjectid_knowledgefaq` |
| `knowledgefaq_BulkDeleteFailures` | [knowledgefaq](knowledgefaq.md) | `regardingobjectid` | `regardingobjectid_knowledgefaq` |
| `knowledgefaq_PrincipalObjectAttributeAccesses` | [knowledgefaq](knowledgefaq.md) | `objectid` | `objectid_knowledgefaq` |


## Source

Generated from [knowledgefaq (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='knowledgefaq')) on 2026-05-07.