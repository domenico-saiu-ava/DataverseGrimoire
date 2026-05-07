---
logical: "msdyn_kpieventdefinition"
display: "Definizione evento KPI"
entitySetName: "msdyn_kpieventdefinitions"
primaryId: "msdyn_kpieventdefinitionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Definizione evento KPI

Entità primaria per la definizione di un evento KPI

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_kpieventdefinition` |
| Display name | Definizione evento KPI |
| Display (plural) | Definizioni evento KPI |
| Schema name | `msdyn_KPIEventDefinition` |
| Entity set (Web API) | `msdyn_kpieventdefinitions` |
| Primary id attribute | `msdyn_kpieventdefinitionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_kpieventdefinitions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_kpieventdefinitions(<guid>)
POST /api/data/v9.2/msdyn_kpieventdefinitions
PATCH /api/data/v9.2/msdyn_kpieventdefinitions(<guid>)
DELETE /api/data/v9.2/msdyn_kpieventdefinitions(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_eventdescription`, `msdyn_eventdisplayname`, `msdyn_eventtype`, `msdyn_kpieventdefinitionid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_kpieventdefinition_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_kpieventdefinition_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_kpieventdefinition_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_kpieventdefinition_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_kpieventdefinition` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_kpieventdefinition` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_kpieventdefinition` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_kpieventdefinition` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_kpieventdefinition_SyncErrors` | [msdyn_kpieventdefinition](msdyn_kpieventdefinition.md) | `regardingobjectid` | `regardingobjectid_msdyn_kpieventdefinition` |
| `msdyn_kpieventdefinition_DuplicateMatchingRecord` | [msdyn_kpieventdefinition](msdyn_kpieventdefinition.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_kpieventdefinition` |
| `msdyn_kpieventdefinition_DuplicateBaseRecord` | [msdyn_kpieventdefinition](msdyn_kpieventdefinition.md) | `baserecordid` | `baserecordid_msdyn_kpieventdefinition` |
| `msdyn_kpieventdefinition_AsyncOperations` | [msdyn_kpieventdefinition](msdyn_kpieventdefinition.md) | `regardingobjectid` | `regardingobjectid_msdyn_kpieventdefinition` |
| `msdyn_kpieventdefinition_MailboxTrackingFolders` | [msdyn_kpieventdefinition](msdyn_kpieventdefinition.md) | `regardingobjectid` | `regardingobjectid_msdyn_kpieventdefinition` |
| `msdyn_kpieventdefinition_UserEntityInstanceDatas` | [msdyn_kpieventdefinition](msdyn_kpieventdefinition.md) | `objectid` | `objectid_msdyn_kpieventdefinition` |
| `msdyn_kpieventdefinition_ProcessSession` | [msdyn_kpieventdefinition](msdyn_kpieventdefinition.md) | `regardingobjectid` | `regardingobjectid_msdyn_kpieventdefinition` |
| `msdyn_kpieventdefinition_BulkDeleteFailures` | [msdyn_kpieventdefinition](msdyn_kpieventdefinition.md) | `regardingobjectid` | `regardingobjectid_msdyn_kpieventdefinition` |
| `msdyn_kpieventdefinition_PrincipalObjectAttributeAccesses` | [msdyn_kpieventdefinition](msdyn_kpieventdefinition.md) | `objectid` | `objectid_msdyn_kpieventdefinition` |


## Source

Generated from [msdyn_kpieventdefinition (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_kpieventdefinition')) on 2026-05-07.