---
logical: "msdyn_salesforcestructuredobject"
display: "Salesforce Structured Object"
entitySetName: "msdyn_salesforcestructuredobjects"
primaryId: "msdyn_salesforcestructuredobjectid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Salesforce Structured Object

Entity that represents the Salesforce Structured Object.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salesforcestructuredobject` |
| Display name | Salesforce Structured Object |
| Display (plural) | Salesforce Structured Objects |
| Schema name | `msdyn_salesforcestructuredobject` |
| Entity set (Web API) | `msdyn_salesforcestructuredobjects` |
| Primary id attribute | `msdyn_salesforcestructuredobjectid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salesforcestructuredobjects?$select=name&$top=10
GET /api/data/v9.2/msdyn_salesforcestructuredobjects(<guid>)
POST /api/data/v9.2/msdyn_salesforcestructuredobjects
PATCH /api/data/v9.2/msdyn_salesforcestructuredobjects(<guid>)
DELETE /api/data/v9.2/msdyn_salesforcestructuredobjects(<guid>)
```

## Attributes

Writable: **13** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_salesforcestructuredobjectId`, `msdyn_salesforcestructuredobjectname`, `msdyn_salesforcestructuredqnaconfigid`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_salesforcestructuredobject` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_salesforcestructuredobject_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salesforcestructuredobject_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salesforcestructuredobject_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salesforcestructuredobject_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_salesforcestructuredobject_msdyn_salesforcestructuredqnaconfig` | [msdyn_salesforcestructuredqnaconfig](msdyn_salesforcestructuredqnaconfig.md) | `msdyn_salesforcestructuredqnaconfigid` | `msdyn_salesforcestructuredqnaconfigid` |
| `owner_msdyn_salesforcestructuredobject` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_salesforcestructuredobject` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_salesforcestructuredobject` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salesforcestructuredobject_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesforcestructuredobject_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesforcestructuredobject_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesforcestructuredobject_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_salesforcestructuredobject_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesforcestructuredobject_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_salesforcestructuredobject.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_salesforcestructuredobject.md) on 2026-05-06.