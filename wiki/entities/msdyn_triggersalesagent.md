---
logical: "msdyn_triggersalesagent"
display: "Trigger Sales Agent"
entitySetName: "msdyn_triggersalesagents"
primaryId: "msdyn_triggersalesagentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Trigger Sales Agent

This table contains records of trigger sales agents.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_triggersalesagent` |
| Display name | Trigger Sales Agent |
| Display (plural) | Trigger Sales Agents |
| Schema name | `msdyn_triggersalesagent` |
| Entity set (Web API) | `msdyn_triggersalesagents` |
| Primary id attribute | `msdyn_triggersalesagentid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_triggersalesagents?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_triggersalesagents(<guid>)
POST /api/data/v9.2/msdyn_triggersalesagents
PATCH /api/data/v9.2/msdyn_triggersalesagents(<guid>)
DELETE /api/data/v9.2/msdyn_triggersalesagents(<guid>)
```

## Attributes

Writable: **16** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_macroagentorchestrationid`, `msdyn_name`, `msdyn_regardingid`, `msdyn_regardingidIdType`, `msdyn_salesagentprofile`, `msdyn_triggerpayload`, `msdyn_triggersalesagentId`, `msdyn_triggertype`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_triggersalesagent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_triggersalesagent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_triggersalesagent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_triggersalesagent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_triggersalesagent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_triggersalesagent_regardingid_lead` | [lead](lead.md) | `msdyn_regardingid` | `msdyn_regardingid` |
| `msdyn_triggersalesagent_salesagentprofile_msdyn_salesagentprofile` | [msdyn_salesagentprofile](msdyn_salesagentprofile.md) | `msdyn_salesagentprofile` | `msdyn_salesagentprofile` |
| `owner_msdyn_triggersalesagent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_triggersalesagent` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_triggersalesagent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_triggersalesagent_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_triggersalesagent_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_triggersalesagent_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_triggersalesagent_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_triggersalesagent_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_triggersalesagent_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_triggersalesagent.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_triggersalesagent.md) on 2026-05-06.