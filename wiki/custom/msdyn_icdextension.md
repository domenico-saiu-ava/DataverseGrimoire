---
logical: "msdyn_icdextension"
display: "Estensione ICD"
entitySetName: "msdyn_icdextensions"
primaryId: "msdyn_icdextensionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Estensione ICD

Contiene i campi correlati all'ICD che verranno generati e mantenuti.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_icdextension` |
| Display name | Estensione ICD |
| Display (plural) | Estensioni ICD |
| Schema name | `msdyn_ICDExtension` |
| Entity set (Web API) | `msdyn_icdextensions` |
| Primary id attribute | `msdyn_icdextensionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_icdextensions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_icdextensions(<guid>)
POST /api/data/v9.2/msdyn_icdextensions
PATCH /api/data/v9.2/msdyn_icdextensions(<guid>)
DELETE /api/data/v9.2/msdyn_icdextensions(<guid>)
```

## Attributes

Writable: **14** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_description`, `msdyn_entityid`, `msdyn_examples`, `msdyn_icdextensionid`, `msdyn_isaigenerated`, `msdyn_name`, `msdyn_reviewstate`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_icdextension_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_icdextension_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_icdextension_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_icdextension_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_icdextension` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_icdextension` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_icdextension` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_icdextension` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `queue_msdyn_entityId_msdyn_icdextension` | [queue](queue.md) | `msdyn_entityid` | `msdyn_entityId_queue` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_icdextension_SyncErrors` | [msdyn_icdextension](msdyn_icdextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_icdextension` |
| `msdyn_icdextension_DuplicateMatchingRecord` | [msdyn_icdextension](msdyn_icdextension.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_icdextension` |
| `msdyn_icdextension_DuplicateBaseRecord` | [msdyn_icdextension](msdyn_icdextension.md) | `baserecordid` | `baserecordid_msdyn_icdextension` |
| `msdyn_icdextension_AsyncOperations` | [msdyn_icdextension](msdyn_icdextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_icdextension` |
| `msdyn_icdextension_MailboxTrackingFolders` | [msdyn_icdextension](msdyn_icdextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_icdextension` |
| `msdyn_icdextension_UserEntityInstanceDatas` | [msdyn_icdextension](msdyn_icdextension.md) | `objectid` | `objectid_msdyn_icdextension` |
| `msdyn_icdextension_ProcessSession` | [msdyn_icdextension](msdyn_icdextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_icdextension` |
| `msdyn_icdextension_BulkDeleteFailures` | [msdyn_icdextension](msdyn_icdextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_icdextension` |
| `msdyn_icdextension_PrincipalObjectAttributeAccesses` | [msdyn_icdextension](msdyn_icdextension.md) | `objectid` | `objectid_msdyn_icdextension` |
| `msdyn_ICDExtension_msdyn_icdExtensionid_msdyn_ActiveICDExtension` | [msdyn_icdextension](msdyn_icdextension.md) | `msdyn_icdextensionid` | `msdyn_icdExtensionid` |


## Source

Generated from [msdyn_icdextension (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_icdextension')) on 2026-05-07.