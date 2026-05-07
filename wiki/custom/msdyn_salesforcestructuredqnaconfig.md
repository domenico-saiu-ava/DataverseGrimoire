---
logical: "msdyn_salesforcestructuredqnaconfig"
display: "Configurazione sessione domande e risposte strutturata Salesforce"
entitySetName: "msdyn_salesforcestructuredqnaconfigs"
primaryId: "msdyn_salesforcestructuredqnaconfigid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione sessione domande e risposte strutturata Salesforce

Entità che rappresenta la configurazione della sessione di domande e risposte strutturata Salesforce.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salesforcestructuredqnaconfig` |
| Display name | Configurazione sessione domande e risposte strutturata Salesforce |
| Display (plural) | Configurazioni sessione domande e risposte strutturata Salesforce |
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

Writable: **13** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_powerappsconnectionid`, `msdyn_salesforceinstanceurl`, `msdyn_salesforcestructuredqnaconfigid`, `name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `uniquename`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_salesforcestructuredqnaconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salesforcestructuredqnaconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salesforcestructuredqnaconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salesforcestructuredqnaconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_salesforcestructuredqnaconfig` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_salesforcestructuredqnaconfig` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_salesforcestructuredqnaconfig` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_salesforcestructuredqnaconfig` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salesforcestructuredqnaconfig_SyncErrors` | [msdyn_salesforcestructuredqnaconfig](msdyn_salesforcestructuredqnaconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesforcestructuredqnaconfig` |
| `msdyn_salesforcestructuredqnaconfig_AsyncOperations` | [msdyn_salesforcestructuredqnaconfig](msdyn_salesforcestructuredqnaconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesforcestructuredqnaconfig` |
| `msdyn_salesforcestructuredqnaconfig_MailboxTrackingFolders` | [msdyn_salesforcestructuredqnaconfig](msdyn_salesforcestructuredqnaconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesforcestructuredqnaconfig` |
| `msdyn_salesforcestructuredqnaconfig_UserEntityInstanceDatas` | [msdyn_salesforcestructuredqnaconfig](msdyn_salesforcestructuredqnaconfig.md) | `objectid` | `objectid_msdyn_salesforcestructuredqnaconfig` |
| `msdyn_salesforcestructuredqnaconfig_ProcessSession` | [msdyn_salesforcestructuredqnaconfig](msdyn_salesforcestructuredqnaconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesforcestructuredqnaconfig` |
| `msdyn_salesforcestructuredqnaconfig_BulkDeleteFailures` | [msdyn_salesforcestructuredqnaconfig](msdyn_salesforcestructuredqnaconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesforcestructuredqnaconfig` |
| `msdyn_salesforcestructuredqnaconfig_PrincipalObjectAttributeAccesses` | [msdyn_salesforcestructuredqnaconfig](msdyn_salesforcestructuredqnaconfig.md) | `objectid` | `objectid_msdyn_salesforcestructuredqnaconfig` |
| `msdyn_salesforcestructuredobject_msdyn_salesforcestructuredqnaconfig` | [msdyn_salesforcestructuredqnaconfig](msdyn_salesforcestructuredqnaconfig.md) | `msdyn_salesforcestructuredqnaconfigid` | `msdyn_salesforcestructuredqnaconfigid` |


## Source

Generated from [msdyn_salesforcestructuredqnaconfig (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_salesforcestructuredqnaconfig')) on 2026-05-07.