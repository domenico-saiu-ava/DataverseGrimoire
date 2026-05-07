---
logical: "msdyn_evaluationnotificationconfiguration"
display: "Evaluation Notification Configuration"
entitySetName: "msdyn_evaluationnotificationconfigurations"
primaryId: "msdyn_evaluationnotificationconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Evaluation Notification Configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_evaluationnotificationconfiguration` |
| Display name | Evaluation Notification Configuration |
| Display (plural) | Evaluation Notification Configurations |
| Schema name | `msdyn_evaluationnotificationconfiguration` |
| Entity set (Web API) | `msdyn_evaluationnotificationconfigurations` |
| Primary id attribute | `msdyn_evaluationnotificationconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_evaluationnotificationconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_evaluationnotificationconfigurations(<guid>)
POST /api/data/v9.2/msdyn_evaluationnotificationconfigurations
PATCH /api/data/v9.2/msdyn_evaluationnotificationconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_evaluationnotificationconfigurations(<guid>)
```

## Attributes

Writable: **16** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_criterianotificationenabled`, `msdyn_criteriathresholds`, `msdyn_evaluationnotificationconfigurationId`, `msdyn_evaluationplanid`, `msdyn_name`, `msdyn_notificationenabled`, `msdyn_sectionnotificationenabled`, `msdyn_sectionthresholds`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_evaluationnotificationconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_evaluationnotificationconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_evaluationnotificationconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_evaluationnotificationconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_evaluationnotificationconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_evaluationnotificationconfiguration_msdyn_evaluationplan` | [msdyn_evaluationplan](msdyn_evaluationplan.md) | `msdyn_evaluationplanid` | `msdyn_evaluationplanid` |
| `owner_msdyn_evaluationnotificationconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_evaluationnotificationconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_evaluationnotificationconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_evaluationnotificationconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationnotificationconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationnotificationconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationnotificationconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_evaluationnotificationconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationnotificationconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_evaluationnotificationconfiguration.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_evaluationnotificationconfiguration.md) on 2026-05-06.