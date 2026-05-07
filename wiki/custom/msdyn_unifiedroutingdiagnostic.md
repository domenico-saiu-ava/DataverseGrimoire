---
logical: "msdyn_unifiedroutingdiagnostic"
display: "Elemento diagnostica distribuzione"
entitySetName: "msdyn_unifiedroutingdiagnostics"
primaryId: "msdyn_unifiedroutingdiagnosticid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Elemento diagnostica distribuzione

Entità utilizzata per archiviare i dati di diagnostica della distribuzione unificata.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_unifiedroutingdiagnostic` |
| Display name | Elemento diagnostica distribuzione |
| Display (plural) | Elementi diagnostica distribuzione |
| Schema name | `msdyn_unifiedroutingdiagnostic` |
| Entity set (Web API) | `msdyn_unifiedroutingdiagnostics` |
| Primary id attribute | `msdyn_unifiedroutingdiagnosticid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_unifiedroutingdiagnostics?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_unifiedroutingdiagnostics(<guid>)
POST /api/data/v9.2/msdyn_unifiedroutingdiagnostics
PATCH /api/data/v9.2/msdyn_unifiedroutingdiagnostics(<guid>)
DELETE /api/data/v9.2/msdyn_unifiedroutingdiagnostics(<guid>)
```

## Attributes

Writable: **22** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_completedon`, `msdyn_decisionrulesetid`, `msdyn_diagnosticdata`, `msdyn_diagnosticdatatype`, `msdyn_evaluation`, `msdyn_inputdata`, `msdyn_name`, `msdyn_ocliveworkitemid`, `msdyn_outputdata`, `msdyn_ruletype`, `msdyn_sequencenumber`, `msdyn_startedon`, `msdyn_targetobject`, `msdyn_unifiedroutingdiagnosticid`, `msdyn_unifiedroutingrunid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_ocliveworkitem_msdyn_unifiedroutingdiagnostic_ocliveworkitemid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_ocliveworkitemid` | `msdyn_ocliveworkitemid` |
| `msdyn_msdyn_ocliveworkitem_msdyn_unifiedroutingdiagnostic_targetobject` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_targetobject` | `msdyn_targetobject_msdyn_ocliveworkitem` |
| `lk_msdyn_unifiedroutingdiagnostic_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_unifiedroutingdiagnostic_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_unifiedroutingdiagnostic_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_unifiedroutingdiagnostic_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_unifiedroutingdiagnostic` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_unifiedroutingdiagnostic` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_unifiedroutingdiagnostic` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_unifiedroutingdiagnostic` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_unifiedroutingrun_msdyn_unifiedroutingdiagnostic` | [msdyn_unifiedroutingrun](msdyn_unifiedroutingrun.md) | `msdyn_unifiedroutingrunid` | `msdyn_unifiedroutingrunid` |
| `msdyn_queueitem_msdyn_unifiedroutingdiagnostic_targetobject` | [queueitem](queueitem.md) | `msdyn_targetobject` | `msdyn_targetobject_queueitem` |
| `msdyn_msdyn_decisionruleset_msdyn_unifiedroutingdiagnostic_decisionrulesetid` | [msdyn_decisionruleset](msdyn_decisionruleset.md) | `msdyn_decisionrulesetid` | `msdyn_decisionrulesetid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_unifiedroutingdiagnostic_SyncErrors` | [msdyn_unifiedroutingdiagnostic](msdyn_unifiedroutingdiagnostic.md) | `regardingobjectid` | `regardingobjectid_msdyn_unifiedroutingdiagnostic` |
| `msdyn_unifiedroutingdiagnostic_DuplicateMatchingRecord` | [msdyn_unifiedroutingdiagnostic](msdyn_unifiedroutingdiagnostic.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_unifiedroutingdiagnostic` |
| `msdyn_unifiedroutingdiagnostic_DuplicateBaseRecord` | [msdyn_unifiedroutingdiagnostic](msdyn_unifiedroutingdiagnostic.md) | `baserecordid` | `baserecordid_msdyn_unifiedroutingdiagnostic` |
| `msdyn_unifiedroutingdiagnostic_AsyncOperations` | [msdyn_unifiedroutingdiagnostic](msdyn_unifiedroutingdiagnostic.md) | `regardingobjectid` | `regardingobjectid_msdyn_unifiedroutingdiagnostic` |
| `msdyn_unifiedroutingdiagnostic_MailboxTrackingFolders` | [msdyn_unifiedroutingdiagnostic](msdyn_unifiedroutingdiagnostic.md) | `regardingobjectid` | `regardingobjectid_msdyn_unifiedroutingdiagnostic` |
| `msdyn_unifiedroutingdiagnostic_UserEntityInstanceDatas` | [msdyn_unifiedroutingdiagnostic](msdyn_unifiedroutingdiagnostic.md) | `objectid` | `objectid_msdyn_unifiedroutingdiagnostic` |
| `msdyn_unifiedroutingdiagnostic_ProcessSession` | [msdyn_unifiedroutingdiagnostic](msdyn_unifiedroutingdiagnostic.md) | `regardingobjectid` | `regardingobjectid_msdyn_unifiedroutingdiagnostic` |
| `msdyn_unifiedroutingdiagnostic_BulkDeleteFailures` | [msdyn_unifiedroutingdiagnostic](msdyn_unifiedroutingdiagnostic.md) | `regardingobjectid` | `regardingobjectid_msdyn_unifiedroutingdiagnostic` |
| `msdyn_unifiedroutingdiagnostic_PrincipalObjectAttributeAccesses` | [msdyn_unifiedroutingdiagnostic](msdyn_unifiedroutingdiagnostic.md) | `objectid` | `objectid_msdyn_unifiedroutingdiagnostic` |


## Source

Generated from [msdyn_unifiedroutingdiagnostic (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_unifiedroutingdiagnostic')) on 2026-05-07.