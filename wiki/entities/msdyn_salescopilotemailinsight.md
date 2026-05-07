---
logical: "msdyn_salescopilotemailinsight"
display: "Sales Copilot Email Insight"
entitySetName: "msdyn_salescopilotemailinsights"
primaryId: "msdyn_salescopilotemailinsightid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Sales Copilot Email Insight

Entity used to keep the actions derived from email

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salescopilotemailinsight` |
| Display name | Sales Copilot Email Insight |
| Display (plural) | Sales Copilot EmailInsights |
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

Writable: **24** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_actiondescription`, `msdyn_actiontitle`, `msdyn_actiontype`, `msdyn_activitymappingid`, `msdyn_activitymappingidIdType`, `msdyn_citations`, `msdyn_conversationid`, `msdyn_draftapiname`, `msdyn_draftapipayload`, `msdyn_expireson`, `msdyn_internetmessageid`, `msdyn_messageid`, `msdyn_name`, `msdyn_regardingid`, `msdyn_regardinglogicalname`, `msdyn_salescopilotemailinsightId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_salescopilotemailinsight` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_salescopilotemailinsight_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salescopilotemailinsight_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salescopilotemailinsight_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salescopilotemailinsight_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_salescopilotemailinsight_msdyn_activitymapping_msdyn_activitymappingid` | [msdyn_activitymapping](msdyn_activitymapping.md) | `msdyn_activitymappingid` | `msdyn_activitymappingid` |
| `owner_msdyn_salescopilotemailinsight` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_salescopilotemailinsight` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_salescopilotemailinsight` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salescopilotemailinsight_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salescopilotemailinsight_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salescopilotemailinsight_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_salescopilotemailinsight_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_salescopilotemailinsight_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salescopilotemailinsight_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_salescopilotemailinsight_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salescopilotemailinsight_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salescopilotknowledgebase_msdyn_salescopilotemailinsight_msdyn_salescopilotemailinsightid` | _n/a_ | `msdyn_salescopilotemailinsightid` | _n/a_ |


## Source

Generated from [msdyn_salescopilotemailinsight.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_salescopilotemailinsight.md) on 2026-05-06.