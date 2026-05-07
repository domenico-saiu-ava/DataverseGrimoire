---
logical: "msdyn_salesagentconfiguration"
display: "Sales Agent Configuration"
entitySetName: "msdyn_salesagentconfigurations"
primaryId: "msdyn_salesagentconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Sales Agent Configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salesagentconfiguration` |
| Display name | Sales Agent Configuration |
| Display (plural) | Sales Agent Configurations |
| Schema name | `msdyn_SalesAgentConfiguration` |
| Entity set (Web API) | `msdyn_salesagentconfigurations` |
| Primary id attribute | `msdyn_salesagentconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salesagentconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_salesagentconfigurations(<guid>)
POST /api/data/v9.2/msdyn_salesagentconfigurations
PATCH /api/data/v9.2/msdyn_salesagentconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_salesagentconfigurations(<guid>)
```

## Attributes

Writable: **28** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_AccountResearchConfig`, `msdyn_ActivatedBy`, `msdyn_ActivatedOn`, `msdyn_ActivationStatusAgentEnabled`, `msdyn_ActivationStatusUpdatedBy`, `msdyn_ActivationStatusUpdatedOn`, `msdyn_BingChatEnabled`, `msdyn_CustomerProfileConfig`, `msdyn_emailvalidationconfig`, `msdyn_LeadRefreshDetails`, `msdyn_LeadWebResearchConfig`, `msdyn_name`, `msdyn_PrioritizationConfig`, `msdyn_ProductConfig`, `msdyn_QualificationConfig`, `msdyn_QualificationCriteria`, `msdyn_SalesAgentConfigurationId`, `msdyn_SupportingKnowledgeConfig`, `msdyn_TeamAccessConfig`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_salesagentconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_salesagentconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salesagentconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salesagentconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salesagentconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_salesagentconfiguration_ActivatedBy_systemuser` | [systemuser](systemuser.md) | `msdyn_activatedby` | `msdyn_ActivatedBy` |
| `msdyn_salesagentconfiguration_ActivationStatusUpdatedBy_systemuser` | [systemuser](systemuser.md) | `msdyn_activationstatusupdatedby` | `msdyn_ActivationStatusUpdatedBy` |
| `owner_msdyn_salesagentconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_salesagentconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_salesagentconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salesagentconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesagentconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesagentconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesagentconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_salesagentconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesagentconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_salesagentconfiguration.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_salesagentconfiguration.md) on 2026-05-06.