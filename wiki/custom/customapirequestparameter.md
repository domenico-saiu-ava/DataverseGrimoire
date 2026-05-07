---
logical: "customapirequestparameter"
display: "Parametro di richiesta API personalizzata"
entitySetName: "customapirequestparameters"
primaryId: "customapirequestparameterid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Parametro di richiesta API personalizzata

Entità che definisce un parametro della richiesta per un'API personalizzata

## Identity

| Property | Value |
| --- | --- |
| Logical name | `customapirequestparameter` |
| Display name | Parametro di richiesta API personalizzata |
| Display (plural) | Parametri di richiesta API personalizzata |
| Schema name | `CustomAPIRequestParameter` |
| Entity set (Web API) | `customapirequestparameters` |
| Primary id attribute | `customapirequestparameterid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/customapirequestparameters?$select=name&$top=10
GET /api/data/v9.2/customapirequestparameters(<guid>)
POST /api/data/v9.2/customapirequestparameters
PATCH /api/data/v9.2/customapirequestparameters(<guid>)
DELETE /api/data/v9.2/customapirequestparameters(<guid>)
```

## Attributes

Writable: **16** · Read-only: **17**

### Writable

`customapiid`, `customapirequestparameterid`, `description`, `displayname`, `importsequencenumber`, `iscustomizable`, `isoptional`, `logicalentityname`, `name`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `type`, `uniquename`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `ownerid`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_customapirequestparameter_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_customapirequestparameter_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_customapirequestparameter_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_customapirequestparameter_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `customapi_customapirequestparameter` | [customapi](customapi.md) | `customapiid` | `CustomAPIId` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_customapirequestparameter_eventparameter` | [customapirequestparameter](customapirequestparameter.md) | `msdynmkt_customapirequestparameterid` | `msdynmkt_customapirequestparameterid` |
| `msdyn_customapirequestparameter_msdyn_customapirulesetconfiguration_CustomAPIRequestParameter` | [customapirequestparameter](customapirequestparameter.md) | `msdyn_customapirequestparameter` | `msdyn_CustomAPIRequestParameter` |
| `customapirequestparameter_SyncErrors` | [customapirequestparameter](customapirequestparameter.md) | `regardingobjectid` | `regardingobjectid_customapirequestparameter` |
| `customapirequestparameter_AsyncOperations` | [customapirequestparameter](customapirequestparameter.md) | `regardingobjectid` | `regardingobjectid_customapirequestparameter` |
| `customapirequestparameter_MailboxTrackingFolders` | [customapirequestparameter](customapirequestparameter.md) | `regardingobjectid` | `regardingobjectid_customapirequestparameter` |
| `customapirequestparameter_UserEntityInstanceDatas` | [customapirequestparameter](customapirequestparameter.md) | `objectid` | `objectid_customapirequestparameter` |
| `customapirequestparameter_ProcessSession` | [customapirequestparameter](customapirequestparameter.md) | `regardingobjectid` | `regardingobjectid_customapirequestparameter` |
| `customapirequestparameter_BulkDeleteFailures` | [customapirequestparameter](customapirequestparameter.md) | `regardingobjectid` | `regardingobjectid_customapirequestparameter` |
| `customapirequestparameter_PrincipalObjectAttributeAccesses` | [customapirequestparameter](customapirequestparameter.md) | `objectid` | `objectid_customapirequestparameter` |


## Source

Generated from [customapirequestparameter (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='customapirequestparameter')) on 2026-05-07.