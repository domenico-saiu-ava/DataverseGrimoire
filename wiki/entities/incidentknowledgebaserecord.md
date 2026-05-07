---
logical: "incidentknowledgebaserecord"
display: "Incident KnowledgeBaseRecord"
entitySetName: "incidentknowledgebaserecords"
primaryId: "incidentknowledgebaserecordid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# Incident KnowledgeBaseRecord

## Identity

| Property | Value |
| --- | --- |
| Logical name | `incidentknowledgebaserecord` |
| Display name | Incident KnowledgeBaseRecord |
| Display (plural) | Incident KnowledgeBaseRecords |
| Schema name | `IncidentKnowledgeBaseRecord` |
| Entity set (Web API) | `incidentknowledgebaserecords` |
| Primary id attribute | `incidentknowledgebaserecordid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/incidentknowledgebaserecords?$select=name&$top=10
GET /api/data/v9.2/incidentknowledgebaserecords(<guid>)
POST /api/data/v9.2/incidentknowledgebaserecords
PATCH /api/data/v9.2/incidentknowledgebaserecords(<guid>)
DELETE /api/data/v9.2/incidentknowledgebaserecords(<guid>)
```

## Attributes

Writable: **6** · Read-only: **3**

### Writable

`ImportSequenceNumber`, `IncidentKnowledgeBaseRecordId`, `Name`, `OverriddenCreatedOn`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`IncidentId`, `KnowledgeBaseRecordId`, `VersionNumber`

## Relationships


### One-to-Many (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `incidentknowledgebaserecord_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `incidentknowledgebaserecord_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `incidentknowledgebaserecord_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `incidentknowledgebaserecord_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `KnowledgeBaseRecord_Incident` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [incidentknowledgebaserecord.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/incidentknowledgebaserecord.md) on 2026-05-06.