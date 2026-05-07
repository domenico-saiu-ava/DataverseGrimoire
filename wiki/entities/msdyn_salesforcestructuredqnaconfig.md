---
logical: "msdyn_salesforcestructuredqnaconfig"
display: "Salesforce Structured QnA Config"
entitySetName: "msdyn_salesforcestructuredqnaconfigs"
primaryId: "msdyn_salesforcestructuredqnaconfigid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Salesforce Structured QnA Config

Entity that represents the Salesforce Structured QnA Config.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salesforcestructuredqnaconfig` |
| Display name | Salesforce Structured QnA Config |
| Display (plural) | Salesforce Structured QnA Configs |
| Schema name | `msdyn_salesforcestructuredqnaconfig` |
| Entity set (Web API) | `msdyn_salesforcestructuredqnaconfigs` |
| Primary id attribute | `msdyn_salesforcestructuredqnaconfigid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salesforcestructuredqnaconfigs?$select=name&$top=10
GET /api/data/v9.2/msdyn_salesforcestructuredqnaconfigs(<guid>)
POST /api/data/v9.2/msdyn_salesforcestructuredqnaconfigs
PATCH /api/data/v9.2/msdyn_salesforcestructuredqnaconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_salesforcestructuredqnaconfigs(<guid>)
```

## Attributes

Writable: **14** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_powerappsconnectionid`, `msdyn_salesforceinstanceurl`, `msdyn_salesforcestructuredqnaconfigId`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UniqueName`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_salesforcestructuredqnaconfig` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_salesforcestructuredqnaconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salesforcestructuredqnaconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salesforcestructuredqnaconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salesforcestructuredqnaconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_salesforcestructuredqnaconfig` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_salesforcestructuredqnaconfig` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_salesforcestructuredqnaconfig` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salesforcestructuredobject_msdyn_salesforcestructuredqnaconfig` | _n/a_ | `msdyn_salesforcestructuredqnaconfigid` | _n/a_ |
| `msdyn_salesforcestructuredqnaconfig_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesforcestructuredqnaconfig_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesforcestructuredqnaconfig_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesforcestructuredqnaconfig_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_salesforcestructuredqnaconfig_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesforcestructuredqnaconfig_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_salesforcestructuredqnaconfig.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_salesforcestructuredqnaconfig.md) on 2026-05-06.