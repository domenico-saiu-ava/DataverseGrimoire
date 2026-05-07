---
logical: "knowledgebaserecord"
display: "Knowledge Base Record"
entitySetName: "knowledgebaserecords"
primaryId: "knowledgebaserecordid"
primaryName: "title"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Knowledge Base Record

Metadata of knowledge base (KB) articles associated with Microsoft Dynamics 365 entities.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `knowledgebaserecord` |
| Display name | Knowledge Base Record |
| Display (plural) | Knowledge Base Records |
| Schema name | `KnowledgeBaseRecord` |
| Entity set (Web API) | `knowledgebaserecords` |
| Primary id attribute | `knowledgebaserecordid` |
| Primary name attribute | `title` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/knowledgebaserecords?$select=title&$top=10
GET /api/data/v9.2/knowledgebaserecords(<guid>)
POST /api/data/v9.2/knowledgebaserecords
PATCH /api/data/v9.2/knowledgebaserecords(<guid>)
DELETE /api/data/v9.2/knowledgebaserecords(<guid>)
```

## Attributes

Writable: **7** · Read-only: **9**

### Writable

`KnowledgeBaseRecordId`, `PrivateUrl`, `PublicUrl`, `TimeZoneRuleVersionNumber`, `Title`, `TransactionCurrencyId`, `UniqueId`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_KnowledgeBaseRecord_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_KnowledgeBaseRecord_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_KnowledgeBaseRecord_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_KnowledgeBaseRecord_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_KnowledgeBaseRecord` | [organization](organization.md) | `organizationid` | `organizationid` |
| `TransactionCurrency_KnowledgeBaseRecord` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (22)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `KnowledgeBaseRecord_ActivityPointers` | _n/a_ | `regardingobjectid` | _n/a_ |
| `knowledgebaserecord_adx_inviteredemptions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `knowledgebaserecord_adx_portalcomments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `KnowledgeBaseRecord_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `KnowledgeBaseRecord_Appointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `KnowledgeBaseRecord_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `KnowledgeBaseRecord_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `knowledgebaserecord_chats` | _n/a_ | `regardingobjectid` | _n/a_ |
| `KnowledgeBaseRecord_connections1` | _n/a_ | `record1id` | _n/a_ |
| `KnowledgeBaseRecord_connections2` | _n/a_ | `record2id` | _n/a_ |
| `KnowledgeBaseRecord_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `KnowledgeBaseRecord_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `KnowledgeBaseRecord_Emails` | _n/a_ | `regardingobjectid` | _n/a_ |
| `KnowledgeBaseRecord_Faxes` | _n/a_ | `regardingobjectid` | _n/a_ |
| `KnowledgeBaseRecord_Letters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `KnowledgeBaseRecord_PhoneCalls` | _n/a_ | `regardingobjectid` | _n/a_ |
| `KnowledgeBaseRecord_PrincipalObjectAttributeAccess` | _n/a_ | `objectid` | _n/a_ |
| `KnowledgeBaseRecord_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `KnowledgeBaseRecord_RecurringAppointmentMasters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `KnowledgeBaseRecord_SocialActivities` | _n/a_ | `regardingobjectid` | _n/a_ |
| `KnowledgeBaseRecord_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `KnowledgeBaseRecord_Tasks` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [knowledgebaserecord.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/knowledgebaserecord.md) on 2026-05-06.