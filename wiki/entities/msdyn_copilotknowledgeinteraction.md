---
logical: "msdyn_copilotknowledgeinteraction"
display: "Copilot knowledge interaction"
entitySetName: "msdyn_copilotknowledgeinteractions"
primaryId: "msdyn_copilotknowledgeinteractionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "None"
---

# Copilot knowledge interaction

Record of copilot using knowledge article

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_copilotknowledgeinteraction` |
| Display name | Copilot knowledge interaction |
| Display (plural) | Copilot knowledge interactions |
| Schema name | `msdyn_copilotknowledgeinteraction` |
| Entity set (Web API) | `msdyn_copilotknowledgeinteractions` |
| Primary id attribute | `msdyn_copilotknowledgeinteractionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_copilotknowledgeinteractions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_copilotknowledgeinteractions(<guid>)
POST /api/data/v9.2/msdyn_copilotknowledgeinteractions
PATCH /api/data/v9.2/msdyn_copilotknowledgeinteractions(<guid>)
DELETE /api/data/v9.2/msdyn_copilotknowledgeinteractions(<guid>)
```

## Attributes

Writable: **9** · Read-only: **7**

### Writable

`ImportSequenceNumber`, `msdyn_copilotknowledgeinteractionId`, `msdyn_knowledgearticleid`, `msdyn_name`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_copilotknowledgeinteraction_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_copilotknowledgeinteraction_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_copilotknowledgeinteraction_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_copilotknowledgeinteraction_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_copilotknowledgeinteraction_knowledgearticleid_knowledgearticle` | [knowledgearticle](knowledgearticle.md) | `msdyn_knowledgearticleid` | `msdyn_knowledgearticleid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_copilotknowledgeinteraction_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilotknowledgeinteraction_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilotknowledgeinteraction_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilotknowledgeinteraction_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_copilotknowledgeinteraction_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilotknowledgeinteraction_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_copilotknowledgeinteraction.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_copilotknowledgeinteraction.md) on 2026-05-06.