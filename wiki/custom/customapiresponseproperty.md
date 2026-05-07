---
logical: "customapiresponseproperty"
display: "Proprietà di risposta API personalizzata"
entitySetName: "customapiresponseproperties"
primaryId: "customapiresponsepropertyid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Proprietà di risposta API personalizzata

Entità che definisce una proprietà di risposta per un'API personalizzata 

## Identity

| Property | Value |
| --- | --- |
| Logical name | `customapiresponseproperty` |
| Display name | Proprietà di risposta API personalizzata |
| Display (plural) | Proprietà di risposta API personalizzata |
| Schema name | `CustomAPIResponseProperty` |
| Entity set (Web API) | `customapiresponseproperties` |
| Primary id attribute | `customapiresponsepropertyid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/customapiresponseproperties?$select=name&$top=10
GET /api/data/v9.2/customapiresponseproperties(<guid>)
POST /api/data/v9.2/customapiresponseproperties
PATCH /api/data/v9.2/customapiresponseproperties(<guid>)
DELETE /api/data/v9.2/customapiresponseproperties(<guid>)
```

## Attributes

Writable: **15** · Read-only: **17**

### Writable

`customapiid`, `customapiresponsepropertyid`, `description`, `displayname`, `importsequencenumber`, `iscustomizable`, `logicalentityname`, `name`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `type`, `uniquename`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `ownerid`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_customapiresponseproperty_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_customapiresponseproperty_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_customapiresponseproperty_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_customapiresponseproperty_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `customapi_customapiresponseproperty` | [customapi](customapi.md) | `customapiid` | `CustomAPIId` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_customapiresponseproperty_msdyn_customapirulesetconfiguration_CustomAPIResponseProperty` | [customapiresponseproperty](customapiresponseproperty.md) | `msdyn_customapiresponseproperty` | `msdyn_CustomAPIResponseProperty` |
| `customapiresponseproperty_SyncErrors` | [customapiresponseproperty](customapiresponseproperty.md) | `regardingobjectid` | `regardingobjectid_customapiresponseproperty` |
| `customapiresponseproperty_AsyncOperations` | [customapiresponseproperty](customapiresponseproperty.md) | `regardingobjectid` | `regardingobjectid_customapiresponseproperty` |
| `customapiresponseproperty_MailboxTrackingFolders` | [customapiresponseproperty](customapiresponseproperty.md) | `regardingobjectid` | `regardingobjectid_customapiresponseproperty` |
| `customapiresponseproperty_UserEntityInstanceDatas` | [customapiresponseproperty](customapiresponseproperty.md) | `objectid` | `objectid_customapiresponseproperty` |
| `customapiresponseproperty_ProcessSession` | [customapiresponseproperty](customapiresponseproperty.md) | `regardingobjectid` | `regardingobjectid_customapiresponseproperty` |
| `customapiresponseproperty_BulkDeleteFailures` | [customapiresponseproperty](customapiresponseproperty.md) | `regardingobjectid` | `regardingobjectid_customapiresponseproperty` |
| `customapiresponseproperty_PrincipalObjectAttributeAccesses` | [customapiresponseproperty](customapiresponseproperty.md) | `objectid` | `objectid_customapiresponseproperty` |


## Source

Generated from [customapiresponseproperty (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='customapiresponseproperty')) on 2026-05-07.