---
logical: "msdyn_unifiedroutingdiagnostic"
display: "Routing diagnostic item"
entitySetName: "msdyn_unifiedroutingdiagnostics"
primaryId: "msdyn_unifiedroutingdiagnosticid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Routing diagnostic item

The entity used to store unified routing diagnostic data.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_unifiedroutingdiagnostic` |
| Display name | Routing diagnostic item |
| Display (plural) | Routing diagnostic items |
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

Writable: **24** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_completedon`, `msdyn_decisionrulesetid`, `msdyn_diagnosticdata`, `msdyn_diagnosticdatatype`, `msdyn_evaluation`, `msdyn_inputdata`, `msdyn_name`, `msdyn_ocliveworkitemid`, `msdyn_outputdata`, `msdyn_ruletype`, `msdyn_sequencenumber`, `msdyn_startedon`, `msdyn_targetobject`, `msdyn_targetobjectIdType`, `msdyn_unifiedroutingdiagnosticId`, `msdyn_unifiedroutingrunid`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_unifiedroutingdiagnostic` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_unifiedroutingdiagnostic_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_unifiedroutingdiagnostic_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_unifiedroutingdiagnostic_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_unifiedroutingdiagnostic_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_decisionruleset_msdyn_unifiedroutingdiagnostic_decisionrulesetid` | [msdyn_decisionruleset](msdyn_decisionruleset.md) | `msdyn_decisionrulesetid` | `msdyn_decisionrulesetid` |
| `msdyn_msdyn_ocliveworkitem_msdyn_unifiedroutingdiagnostic_ocliveworkitemid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_ocliveworkitemid` | `msdyn_ocliveworkitemid` |
| `msdyn_msdyn_ocliveworkitem_msdyn_unifiedroutingdiagnostic_targetobject` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_targetobject` | `msdyn_targetobject_msdyn_ocliveworkitem` |
| `msdyn_queueitem_msdyn_unifiedroutingdiagnostic_targetobject` | [queueitem](queueitem.md) | `msdyn_targetobject` | `msdyn_targetobject_queueitem` |
| `msdyn_unifiedroutingrun_msdyn_unifiedroutingdiagnostic` | [msdyn_unifiedroutingrun](msdyn_unifiedroutingrun.md) | `msdyn_unifiedroutingrunid` | `msdyn_unifiedroutingrunid` |
| `owner_msdyn_unifiedroutingdiagnostic` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_unifiedroutingdiagnostic` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_unifiedroutingdiagnostic` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_unifiedroutingdiagnostic_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_unifiedroutingdiagnostic_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_unifiedroutingdiagnostic_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_unifiedroutingdiagnostic_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_unifiedroutingdiagnostic_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_unifiedroutingdiagnostic_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_unifiedroutingdiagnostic_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_unifiedroutingdiagnostic_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_unifiedroutingdiagnostic.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_unifiedroutingdiagnostic.md) on 2026-05-06.