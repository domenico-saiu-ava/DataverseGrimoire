---
logical: "msdyn_salescopilotemailinsight"
display: "Informazioni dettagliate e-mail Sales Copilot"
entitySetName: "msdyn_salescopilotemailinsights"
primaryId: "msdyn_salescopilotemailinsightid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Informazioni dettagliate e-mail Sales Copilot

Entità usata per mantenere le azioni derivate dai messaggi e-mail

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salescopilotemailinsight` |
| Display name | Informazioni dettagliate e-mail Sales Copilot |
| Display (plural) | EmailInsights Sales Copilot |
| Schema name | `msdyn_salescopilotemailinsight` |
| Entity set (Web API) | `msdyn_salescopilotemailinsights` |
| Primary id attribute | `msdyn_salescopilotemailinsightid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salescopilotemailinsights?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_salescopilotemailinsights(<guid>)
POST /api/data/v9.2/msdyn_salescopilotemailinsights
PATCH /api/data/v9.2/msdyn_salescopilotemailinsights(<guid>)
DELETE /api/data/v9.2/msdyn_salescopilotemailinsights(<guid>)
```

## Attributes

Writable: **22** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_actiondescription`, `msdyn_actiontitle`, `msdyn_actiontype`, `msdyn_activitymappingid`, `msdyn_citations`, `msdyn_conversationid`, `msdyn_draftapiname`, `msdyn_draftapipayload`, `msdyn_expireson`, `msdyn_internetmessageid`, `msdyn_messageid`, `msdyn_name`, `msdyn_regardingid`, `msdyn_regardinglogicalname`, `msdyn_salescopilotemailinsightid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salescopilotemailinsight_msdyn_activitymapping_msdyn_activitymappingid` | [msdyn_activitymapping](msdyn_activitymapping.md) | `msdyn_activitymappingid` | `msdyn_activitymappingid` |
| `lk_msdyn_salescopilotemailinsight_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salescopilotemailinsight_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salescopilotemailinsight_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salescopilotemailinsight_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_salescopilotemailinsight` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_salescopilotemailinsight` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_salescopilotemailinsight` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_salescopilotemailinsight` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salescopilotknowledgebase_msdyn_salescopilotemailinsight_msdyn_salescopilotemailinsightid` | [msdyn_salescopilotemailinsight](msdyn_salescopilotemailinsight.md) | `msdyn_salescopilotemailinsightid` | `msdyn_salescopilotemailinsightid` |
| `msdyn_salescopilotemailinsight_SyncErrors` | [msdyn_salescopilotemailinsight](msdyn_salescopilotemailinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_salescopilotemailinsight` |
| `msdyn_salescopilotemailinsight_DuplicateMatchingRecord` | [msdyn_salescopilotemailinsight](msdyn_salescopilotemailinsight.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_salescopilotemailinsight` |
| `msdyn_salescopilotemailinsight_DuplicateBaseRecord` | [msdyn_salescopilotemailinsight](msdyn_salescopilotemailinsight.md) | `baserecordid` | `baserecordid_msdyn_salescopilotemailinsight` |
| `msdyn_salescopilotemailinsight_AsyncOperations` | [msdyn_salescopilotemailinsight](msdyn_salescopilotemailinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_salescopilotemailinsight` |
| `msdyn_salescopilotemailinsight_MailboxTrackingFolders` | [msdyn_salescopilotemailinsight](msdyn_salescopilotemailinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_salescopilotemailinsight` |
| `msdyn_salescopilotemailinsight_UserEntityInstanceDatas` | [msdyn_salescopilotemailinsight](msdyn_salescopilotemailinsight.md) | `objectid` | `objectid_msdyn_salescopilotemailinsight` |
| `msdyn_salescopilotemailinsight_ProcessSession` | [msdyn_salescopilotemailinsight](msdyn_salescopilotemailinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_salescopilotemailinsight` |
| `msdyn_salescopilotemailinsight_BulkDeleteFailures` | [msdyn_salescopilotemailinsight](msdyn_salescopilotemailinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_salescopilotemailinsight` |
| `msdyn_salescopilotemailinsight_PrincipalObjectAttributeAccesses` | [msdyn_salescopilotemailinsight](msdyn_salescopilotemailinsight.md) | `objectid` | `objectid_msdyn_salescopilotemailinsight` |


## Source

Generated from [msdyn_salescopilotemailinsight (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_salescopilotemailinsight')) on 2026-05-07.