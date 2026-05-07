---
logical: "msdyn_conversationtopic"
display: "Conversation Topic"
entitySetName: "msdyn_conversationtopics"
primaryId: "msdyn_conversationtopicid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Conversation Topic

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_conversationtopic` |
| Display name | Conversation Topic |
| Display (plural) | Conversation Topics |
| Schema name | `msdyn_conversationtopic` |
| Entity set (Web API) | `msdyn_conversationtopics` |
| Primary id attribute | `msdyn_conversationtopicid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_conversationtopics?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_conversationtopics(<guid>)
POST /api/data/v9.2/msdyn_conversationtopics
PATCH /api/data/v9.2/msdyn_conversationtopics(<guid>)
DELETE /api/data/v9.2/msdyn_conversationtopics(<guid>)
```

## Attributes

Writable: **12** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_conversationtopicId`, `msdyn_name`, `msdyn_SimilarityScore`, `msdyn_TopicCounts`, `msdyn_TopicDate`, `msdyn_TopicPercentage`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_conversationtopic_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationtopic_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationtopic_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationtopic_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_conversationtopic` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationtopic_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationtopic_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationtopic_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationtopic_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_conversationtopic_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationtopic_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_msdyn_conversationtopic_msdyn_conversationtopic_conversation_conversationtopicid` | _n/a_ | `msdyn_conversationtopicid` | _n/a_ |


## Source

Generated from [msdyn_conversationtopic.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_conversationtopic.md) on 2026-05-06.