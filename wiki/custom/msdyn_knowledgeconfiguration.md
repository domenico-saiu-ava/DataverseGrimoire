---
logical: "msdyn_knowledgeconfiguration"
display: "Configurazione conoscenza"
entitySetName: "msdyn_knowledgeconfigurations"
primaryId: "msdyn_knowledgeconfigurationid"
primaryName: "msdyn_settingname"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione conoscenza

Rappresenta le possibili impostazioni utilizzate nella gestione delle informazioni

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_knowledgeconfiguration` |
| Display name | Configurazione conoscenza |
| Display (plural) | Configurazioni conoscenza |
| Schema name | `msdyn_knowledgeconfiguration` |
| Entity set (Web API) | `msdyn_knowledgeconfigurations` |
| Primary id attribute | `msdyn_knowledgeconfigurationid` |
| Primary name attribute | `msdyn_settingname` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_knowledgeconfigurations?$select=msdyn_settingname&$top=10
GET /api/data/v9.2/msdyn_knowledgeconfigurations(<guid>)
POST /api/data/v9.2/msdyn_knowledgeconfigurations
PATCH /api/data/v9.2/msdyn_knowledgeconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_knowledgeconfigurations(<guid>)
```

## Attributes

Writable: **11** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_datatype`, `msdyn_groupname`, `msdyn_knowledgeconfigurationid`, `msdyn_settingname`, `msdyn_settingvalue`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_knowledgeconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_knowledgeconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_knowledgeconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_knowledgeconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_knowledgeconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_knowledgeconfiguration_SyncErrors` | [msdyn_knowledgeconfiguration](msdyn_knowledgeconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgeconfiguration` |
| `msdyn_knowledgeconfiguration_DuplicateMatchingRecord` | [msdyn_knowledgeconfiguration](msdyn_knowledgeconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_knowledgeconfiguration` |
| `msdyn_knowledgeconfiguration_DuplicateBaseRecord` | [msdyn_knowledgeconfiguration](msdyn_knowledgeconfiguration.md) | `baserecordid` | `baserecordid_msdyn_knowledgeconfiguration` |
| `msdyn_knowledgeconfiguration_AsyncOperations` | [msdyn_knowledgeconfiguration](msdyn_knowledgeconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgeconfiguration` |
| `msdyn_knowledgeconfiguration_MailboxTrackingFolders` | [msdyn_knowledgeconfiguration](msdyn_knowledgeconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgeconfiguration` |
| `msdyn_knowledgeconfiguration_UserEntityInstanceDatas` | [msdyn_knowledgeconfiguration](msdyn_knowledgeconfiguration.md) | `objectid` | `objectid_msdyn_knowledgeconfiguration` |
| `msdyn_knowledgeconfiguration_ProcessSession` | [msdyn_knowledgeconfiguration](msdyn_knowledgeconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgeconfiguration` |
| `msdyn_knowledgeconfiguration_BulkDeleteFailures` | [msdyn_knowledgeconfiguration](msdyn_knowledgeconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgeconfiguration` |
| `msdyn_knowledgeconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_knowledgeconfiguration](msdyn_knowledgeconfiguration.md) | `objectid` | `objectid_msdyn_knowledgeconfiguration` |


## Source

Generated from [msdyn_knowledgeconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_knowledgeconfiguration')) on 2026-05-07.