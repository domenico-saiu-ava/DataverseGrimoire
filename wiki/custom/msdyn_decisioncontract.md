---
logical: "msdyn_decisioncontract"
display: "Contratto decisione"
entitySetName: "msdyn_decisioncontracts"
primaryId: "msdyn_decisioncontractid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Contratto decisione

Archivia le informazioni sul contratto che sarà obbligatorio per la definizione del set di regole

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_decisioncontract` |
| Display name | Contratto decisione |
| Display (plural) | Contratti decisione |
| Schema name | `msdyn_decisioncontract` |
| Entity set (Web API) | `msdyn_decisioncontracts` |
| Primary id attribute | `msdyn_decisioncontractid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_decisioncontracts?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_decisioncontracts(<guid>)
POST /api/data/v9.2/msdyn_decisioncontracts
PATCH /api/data/v9.2/msdyn_decisioncontracts(<guid>)
DELETE /api/data/v9.2/msdyn_decisioncontracts(<guid>)
```

## Attributes

Writable: **12** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_contractdefinition`, `msdyn_decisioncontractid`, `msdyn_name`, `msdyn_uniquename`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_decisioncontract_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_decisioncontract_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_decisioncontract_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_decisioncontract_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_decisioncontract` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_decisioncontract` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_decisioncontract` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_decisioncontract` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_liveworkstream_decisioncontractid` | [msdyn_decisioncontract](msdyn_decisioncontract.md) | `msdyn_routingcontractid` | `msdyn_routingcontractid` |
| `msdyn_queue_decisioncontractid` | [msdyn_decisioncontract](msdyn_decisioncontract.md) | `msdyn_assignmentinputcontractid` | `msdyn_routingcontractid` |
| `msdyn_decisioncontract_SyncErrors` | [msdyn_decisioncontract](msdyn_decisioncontract.md) | `regardingobjectid` | `regardingobjectid_msdyn_decisioncontract` |
| `msdyn_decisioncontract_DuplicateMatchingRecord` | [msdyn_decisioncontract](msdyn_decisioncontract.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_decisioncontract` |
| `msdyn_decisioncontract_DuplicateBaseRecord` | [msdyn_decisioncontract](msdyn_decisioncontract.md) | `baserecordid` | `baserecordid_msdyn_decisioncontract` |
| `msdyn_decisioncontract_AsyncOperations` | [msdyn_decisioncontract](msdyn_decisioncontract.md) | `regardingobjectid` | `regardingobjectid_msdyn_decisioncontract` |
| `msdyn_decisioncontract_MailboxTrackingFolders` | [msdyn_decisioncontract](msdyn_decisioncontract.md) | `regardingobjectid` | `regardingobjectid_msdyn_decisioncontract` |
| `msdyn_decisioncontract_UserEntityInstanceDatas` | [msdyn_decisioncontract](msdyn_decisioncontract.md) | `objectid` | `objectid_msdyn_decisioncontract` |
| `msdyn_decisioncontract_ProcessSession` | [msdyn_decisioncontract](msdyn_decisioncontract.md) | `regardingobjectid` | `regardingobjectid_msdyn_decisioncontract` |
| `msdyn_decisioncontract_BulkDeleteFailures` | [msdyn_decisioncontract](msdyn_decisioncontract.md) | `regardingobjectid` | `regardingobjectid_msdyn_decisioncontract` |
| `msdyn_decisioncontract_PrincipalObjectAttributeAccesses` | [msdyn_decisioncontract](msdyn_decisioncontract.md) | `objectid` | `objectid_msdyn_decisioncontract` |
| `msdyn_decisioncontract_msdyn_decisionruleset_inputcontractId` | [msdyn_decisioncontract](msdyn_decisioncontract.md) | `msdyn_inputcontractid` | `msdyn_inputcontractid` |
| `msdyn_decisioncontract_msdyn_decisionruleset_outputcontractid` | [msdyn_decisioncontract](msdyn_decisioncontract.md) | `msdyn_outputcontractid` | `msdyn_outputcontractid` |


## Source

Generated from [msdyn_decisioncontract (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_decisioncontract')) on 2026-05-07.