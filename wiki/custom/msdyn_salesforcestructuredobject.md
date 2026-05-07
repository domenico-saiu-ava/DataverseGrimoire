---
logical: "msdyn_salesforcestructuredobject"
display: "Oggetto strutturato Salesforce"
entitySetName: "msdyn_salesforcestructuredobjects"
primaryId: "msdyn_salesforcestructuredobjectid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Oggetto strutturato Salesforce

Entità che rappresenta l'oggetto strutturato Salesforce.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salesforcestructuredobject` |
| Display name | Oggetto strutturato Salesforce |
| Display (plural) | Oggetti strutturati Salesforce |
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

Writable: **12** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_salesforcestructuredobjectid`, `msdyn_salesforcestructuredobjectname`, `msdyn_salesforcestructuredqnaconfigid`, `name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_salesforcestructuredobject_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salesforcestructuredobject_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salesforcestructuredobject_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salesforcestructuredobject_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_salesforcestructuredobject` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_salesforcestructuredobject` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_salesforcestructuredobject` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_salesforcestructuredobject` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_salesforcestructuredobject_msdyn_salesforcestructuredqnaconfig` | [msdyn_salesforcestructuredqnaconfig](msdyn_salesforcestructuredqnaconfig.md) | `msdyn_salesforcestructuredqnaconfigid` | `msdyn_salesforcestructuredqnaconfigid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salesforcestructuredobject_SyncErrors` | [msdyn_salesforcestructuredobject](msdyn_salesforcestructuredobject.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesforcestructuredobject` |
| `msdyn_salesforcestructuredobject_AsyncOperations` | [msdyn_salesforcestructuredobject](msdyn_salesforcestructuredobject.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesforcestructuredobject` |
| `msdyn_salesforcestructuredobject_MailboxTrackingFolders` | [msdyn_salesforcestructuredobject](msdyn_salesforcestructuredobject.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesforcestructuredobject` |
| `msdyn_salesforcestructuredobject_UserEntityInstanceDatas` | [msdyn_salesforcestructuredobject](msdyn_salesforcestructuredobject.md) | `objectid` | `objectid_msdyn_salesforcestructuredobject` |
| `msdyn_salesforcestructuredobject_ProcessSession` | [msdyn_salesforcestructuredobject](msdyn_salesforcestructuredobject.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesforcestructuredobject` |
| `msdyn_salesforcestructuredobject_BulkDeleteFailures` | [msdyn_salesforcestructuredobject](msdyn_salesforcestructuredobject.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesforcestructuredobject` |
| `msdyn_salesforcestructuredobject_PrincipalObjectAttributeAccesses` | [msdyn_salesforcestructuredobject](msdyn_salesforcestructuredobject.md) | `objectid` | `objectid_msdyn_salesforcestructuredobject` |


## Source

Generated from [msdyn_salesforcestructuredobject (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_salesforcestructuredobject')) on 2026-05-07.