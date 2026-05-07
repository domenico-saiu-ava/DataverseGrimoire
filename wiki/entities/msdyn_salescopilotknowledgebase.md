---
logical: "msdyn_salescopilotknowledgebase"
display: "Sales Copilot Knowledge Base"
entitySetName: "msdyn_salescopilotknowledgebases"
primaryId: "msdyn_salescopilotknowledgebaseid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Sales Copilot Knowledge Base

Entity used to store extracted question from emails and its corresponding answer retrieved from various sources

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salescopilotknowledgebase` |
| Display name | Sales Copilot Knowledge Base |
| Display (plural) | Sales Copilot Knowledge Bases |
| Schema name | `msdyn_salescopilotknowledgebase` |
| Entity set (Web API) | `msdyn_salescopilotknowledgebases` |
| Primary id attribute | `msdyn_salescopilotknowledgebaseid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salescopilotknowledgebases?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_salescopilotknowledgebases(<guid>)
POST /api/data/v9.2/msdyn_salescopilotknowledgebases
PATCH /api/data/v9.2/msdyn_salescopilotknowledgebases(<guid>)
DELETE /api/data/v9.2/msdyn_salescopilotknowledgebases(<guid>)
```

## Attributes

Writable: **15** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_answer`, `msdyn_answerfetched`, `msdyn_citations`, `msdyn_name`, `msdyn_question`, `msdyn_salescopilotemailinsightid`, `msdyn_salescopilotknowledgebaseId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_salescopilotknowledgebase` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_salescopilotknowledgebase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salescopilotknowledgebase_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salescopilotknowledgebase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salescopilotknowledgebase_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_salescopilotknowledgebase_msdyn_salescopilotemailinsight_msdyn_salescopilotemailinsightid` | [msdyn_salescopilotemailinsight](msdyn_salescopilotemailinsight.md) | `msdyn_salescopilotemailinsightid` | `msdyn_salescopilotemailinsightid` |
| `owner_msdyn_salescopilotknowledgebase` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_salescopilotknowledgebase` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_salescopilotknowledgebase` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salescopilotknowledgebase_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salescopilotknowledgebase_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salescopilotknowledgebase_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salescopilotknowledgebase_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_salescopilotknowledgebase_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salescopilotknowledgebase_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_salescopilotknowledgebase.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_salescopilotknowledgebase.md) on 2026-05-06.