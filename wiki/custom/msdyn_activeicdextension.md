---
logical: "msdyn_activeicdextension"
display: "Estensione ICD attiva"
entitySetName: "msdyn_activeicdextensions"
primaryId: "msdyn_activeicdextensionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Estensione ICD attiva

Indica la descrizione e gli esempi attualmente attivi per l'entità specificata (coda/agente e così via) come selezionato dall'amministratore C1.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_activeicdextension` |
| Display name | Estensione ICD attiva |
| Display (plural) | Estensioni ICD attive |
| Schema name | `msdyn_ActiveICDExtension` |
| Entity set (Web API) | `msdyn_activeicdextensions` |
| Primary id attribute | `msdyn_activeicdextensionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_activeicdextensions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_activeicdextensions(<guid>)
POST /api/data/v9.2/msdyn_activeicdextensions
PATCH /api/data/v9.2/msdyn_activeicdextensions(<guid>)
DELETE /api/data/v9.2/msdyn_activeicdextensions(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_activeicdextensionid`, `msdyn_entityid`, `msdyn_icdextensionid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_activeicdextension_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_activeicdextension_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_activeicdextension_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_activeicdextension_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_activeicdextension` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_activeicdextension` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_activeicdextension` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_activeicdextension` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `queue_msdyn_entityId_msdyn_activeicdextension` | [queue](queue.md) | `msdyn_entityid` | `msdyn_entityId_queue` |
| `msdyn_ICDExtension_msdyn_icdExtensionid_msdyn_ActiveICDExtension` | [msdyn_icdextension](msdyn_icdextension.md) | `msdyn_icdextensionid` | `msdyn_icdExtensionid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_activeicdextension_SyncErrors` | [msdyn_activeicdextension](msdyn_activeicdextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_activeicdextension` |
| `msdyn_activeicdextension_DuplicateMatchingRecord` | [msdyn_activeicdextension](msdyn_activeicdextension.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_activeicdextension` |
| `msdyn_activeicdextension_DuplicateBaseRecord` | [msdyn_activeicdextension](msdyn_activeicdextension.md) | `baserecordid` | `baserecordid_msdyn_activeicdextension` |
| `msdyn_activeicdextension_AsyncOperations` | [msdyn_activeicdextension](msdyn_activeicdextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_activeicdextension` |
| `msdyn_activeicdextension_MailboxTrackingFolders` | [msdyn_activeicdextension](msdyn_activeicdextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_activeicdextension` |
| `msdyn_activeicdextension_UserEntityInstanceDatas` | [msdyn_activeicdextension](msdyn_activeicdextension.md) | `objectid` | `objectid_msdyn_activeicdextension` |
| `msdyn_activeicdextension_ProcessSession` | [msdyn_activeicdextension](msdyn_activeicdextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_activeicdextension` |
| `msdyn_activeicdextension_BulkDeleteFailures` | [msdyn_activeicdextension](msdyn_activeicdextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_activeicdextension` |
| `msdyn_activeicdextension_PrincipalObjectAttributeAccesses` | [msdyn_activeicdextension](msdyn_activeicdextension.md) | `objectid` | `objectid_msdyn_activeicdextension` |


## Source

Generated from [msdyn_activeicdextension (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_activeicdextension')) on 2026-05-07.