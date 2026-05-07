---
logical: "msdyn_relatedconversationtriggertable"
display: "Related Conversation Trigger Table"
entitySetName: "msdyn_relatedconversationtriggertables"
primaryId: "msdyn_relatedconversationtriggertableid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Related Conversation Trigger Table

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_relatedconversationtriggertable` |
| Display name | Related Conversation Trigger Table |
| Display (plural) | Related Conversation Trigger Tables |
| Schema name | `msdyn_RelatedConversationTriggerTable` |
| Entity set (Web API) | `msdyn_relatedconversationtriggertables` |
| Primary id attribute | `msdyn_relatedconversationtriggertableid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_relatedconversationtriggertables?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_relatedconversationtriggertables(<guid>)
POST /api/data/v9.2/msdyn_relatedconversationtriggertables
PATCH /api/data/v9.2/msdyn_relatedconversationtriggertables(<guid>)
DELETE /api/data/v9.2/msdyn_relatedconversationtriggertables(<guid>)
```

## Attributes

Writable: **26** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_conversationid`, `msdyn_emailmetadata`, `msdyn_emailpayload`, `msdyn_emailthreadpayload`, `msdyn_errormessage`, `msdyn_inputpayload`, `msdyn_macroagentorchestrationid`, `msdyn_messageid`, `msdyn_name`, `msdyn_opportunityid`, `msdyn_opportunitypayload`, `msdyn_processedstage`, `msdyn_relatedconversationtriggertableid`, `msdyn_requiredstages`, `msdyn_retrycount`, `msdyn_salesagentprofile`, `msdyn_salesagentrunid`, `msdyn_sourcetype`, `msdyn_userid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_relatedconversationtriggertable_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_relatedconversationtriggertable_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_relatedconversationtriggertable_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_relatedconversationtriggertable_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_relatedconversationtriggertable` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_relatedconversationtriggertable` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_relatedconversationtriggertable` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_relatedconversationtriggertable` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_RelatedConversationTriggerTable_SalesAgentProfile_msdyn_salesagentprofile` | [msdyn_salesagentprofile](msdyn_salesagentprofile.md) | `msdyn_salesagentprofile` | `msdyn_SalesAgentProfile` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_relatedconversationtriggertable_SyncErrors` | [msdyn_relatedconversationtriggertable](msdyn_relatedconversationtriggertable.md) | `regardingobjectid` | `regardingobjectid_msdyn_relatedconversationtriggertable` |
| `msdyn_relatedconversationtriggertable_DuplicateMatchingRecord` | [msdyn_relatedconversationtriggertable](msdyn_relatedconversationtriggertable.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_relatedconversationtriggertable` |
| `msdyn_relatedconversationtriggertable_DuplicateBaseRecord` | [msdyn_relatedconversationtriggertable](msdyn_relatedconversationtriggertable.md) | `baserecordid` | `baserecordid_msdyn_relatedconversationtriggertable` |
| `msdyn_relatedconversationtriggertable_AsyncOperations` | [msdyn_relatedconversationtriggertable](msdyn_relatedconversationtriggertable.md) | `regardingobjectid` | `regardingobjectid_msdyn_relatedconversationtriggertable` |
| `msdyn_relatedconversationtriggertable_MailboxTrackingFolders` | [msdyn_relatedconversationtriggertable](msdyn_relatedconversationtriggertable.md) | `regardingobjectid` | `regardingobjectid_msdyn_relatedconversationtriggertable` |
| `msdyn_relatedconversationtriggertable_UserEntityInstanceDatas` | [msdyn_relatedconversationtriggertable](msdyn_relatedconversationtriggertable.md) | `objectid` | `objectid_msdyn_relatedconversationtriggertable` |
| `msdyn_relatedconversationtriggertable_ProcessSession` | [msdyn_relatedconversationtriggertable](msdyn_relatedconversationtriggertable.md) | `regardingobjectid` | `regardingobjectid_msdyn_relatedconversationtriggertable` |
| `msdyn_relatedconversationtriggertable_BulkDeleteFailures` | [msdyn_relatedconversationtriggertable](msdyn_relatedconversationtriggertable.md) | `regardingobjectid` | `regardingobjectid_msdyn_relatedconversationtriggertable` |
| `msdyn_relatedconversationtriggertable_PrincipalObjectAttributeAccesses` | [msdyn_relatedconversationtriggertable](msdyn_relatedconversationtriggertable.md) | `objectid` | `objectid_msdyn_relatedconversationtriggertable` |


## Source

Generated from [msdyn_relatedconversationtriggertable (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_relatedconversationtriggertable')) on 2026-05-07.