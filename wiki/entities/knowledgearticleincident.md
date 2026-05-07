---
logical: "knowledgearticleincident"
display: "Knowledge Article Incident"
entitySetName: "knowledgearticleincidents"
primaryId: "knowledgearticleincidentid"
primaryName: "knowledgearticleidname"
tableType: "Standard"
ownership: "UserOwned"
---

# Knowledge Article Incident

Association between an knowledge article and incident.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `knowledgearticleincident` |
| Display name | Knowledge Article Incident |
| Display (plural) | Knowledge Article Incidents |
| Schema name | `KnowledgeArticleIncident` |
| Entity set (Web API) | `knowledgearticleincidents` |
| Primary id attribute | `knowledgearticleincidentid` |
| Primary name attribute | `knowledgearticleidname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/knowledgearticleincidents?$select=knowledgearticleidname&$top=10
GET /api/data/v9.2/knowledgearticleincidents(<guid>)
POST /api/data/v9.2/knowledgearticleincidents
PATCH /api/data/v9.2/knowledgearticleincidents(<guid>)
DELETE /api/data/v9.2/knowledgearticleincidents(<guid>)
```

## Attributes

Writable: **11** · Read-only: **16**

### Writable

`ImportSequenceNumber`, `IncidentId`, `IsSentToCustomer`, `KnowledgeArticleId`, `KnowledgeArticleIncidentId`, `KnowledgeUsage`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerId`, `OwnerIdName`, `OwnerIdType`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `TransactionCurrencyId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `incident_knowledgearticles` | [knowledgearticle](knowledgearticle.md) | `knowledgearticleid` | `knowledgearticleid` |
| `knowledgearticle_incidents` | [incident](incident.md) | `incidentid` | `incidentid` |
| `lk_knowledgearticleincident_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_knowledgearticleincident_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_knowledgearticleincident_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_knowledgearticleincident_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `team_knowledgearticleincident` | [team](team.md) | `owningteam` | `owningteam` |
| `transactioncurrency_knowledgearticleincident` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |
| `user_knowledgearticleincident` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `knowledgearticleincident_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `knowledgearticleincident_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `knowledgearticleincident_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `knowledgearticleincident_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `knowledgearticleincident_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `KnowledgeArticleIncident_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [knowledgearticleincident.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/knowledgearticleincident.md) on 2026-05-06.