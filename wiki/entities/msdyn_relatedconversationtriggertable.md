---
logical: "msdyn_relatedconversationtriggertable"
display: "Related Conversation Trigger Table"
entitySetName: "msdyn_relatedconversationtriggertables"
primaryId: "msdyn_relatedconversationtriggertableid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
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

Writable: **20** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_conversationid`, `msdyn_emailpayload`, `msdyn_inputPayload`, `msdyn_macroagentorchestrationid`, `msdyn_messageid`, `msdyn_Name`, `msdyn_OpportunityId`, `msdyn_opportunitypayload`, `msdyn_RelatedConversationTriggerTableId`, `msdyn_RetryCount`, `msdyn_SalesAgentRunId`, `msdyn_sourcetype`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_relatedconversationtriggertable` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_relatedconversationtriggertable_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_relatedconversationtriggertable_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_relatedconversationtriggertable_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_relatedconversationtriggertable_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_relatedconversationtriggertable` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_relatedconversationtriggertable` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_relatedconversationtriggertable` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_relatedconversationtriggertable_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_relatedconversationtriggertable_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_relatedconversationtriggertable_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_relatedconversationtriggertable_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_relatedconversationtriggertable_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_relatedconversationtriggertable_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_relatedconversationtriggertable_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_relatedconversationtriggertable_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_relatedconversationtriggertable.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_relatedconversationtriggertable.md) on 2026-05-06.