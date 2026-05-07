---
logical: "msdyn_duplicatedetectionpluginrun"
display: "Esecuzione plug-in rilevamento duplicati"
entitySetName: "msdyn_duplicatedetectionpluginruns"
primaryId: "msdyn_duplicatedetectionpluginrunid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Esecuzione plug-in rilevamento duplicati

Esecuzione plug-in Rilevamento duplicati utilizzata per tenere traccia dello stato completato o di errore del plug-in Rilevamento duplicati

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_duplicatedetectionpluginrun` |
| Display name | Esecuzione plug-in rilevamento duplicati |
| Display (plural) | Esecuzioni plug-in Rilevamento duplicati |
| Schema name | `msdyn_duplicatedetectionpluginrun` |
| Entity set (Web API) | `msdyn_duplicatedetectionpluginruns` |
| Primary id attribute | `msdyn_duplicatedetectionpluginrunid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_duplicatedetectionpluginruns?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_duplicatedetectionpluginruns(<guid>)
POST /api/data/v9.2/msdyn_duplicatedetectionpluginruns
PATCH /api/data/v9.2/msdyn_duplicatedetectionpluginruns(<guid>)
DELETE /api/data/v9.2/msdyn_duplicatedetectionpluginruns(<guid>)
```

## Attributes

Writable: **15** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_baserecordid`, `msdyn_duplicatedetectionpluginrunid`, `msdyn_entityname`, `msdyn_failurereason`, `msdyn_iscompleted`, `msdyn_messagename`, `msdyn_name`, `msdyn_reruncompleted`, `msdyn_retrycount`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_lead_msdyn_duplicatedetectionpluginrun_baserecordid` | [lead](lead.md) | `msdyn_baserecordid` | `msdyn_baserecordid` |
| `lk_msdyn_duplicatedetectionpluginrun_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_duplicatedetectionpluginrun_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_duplicatedetectionpluginrun_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_duplicatedetectionpluginrun_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_duplicatedetectionpluginrun` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_duplicatedetectionpluginrun_SyncErrors` | [msdyn_duplicatedetectionpluginrun](msdyn_duplicatedetectionpluginrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_duplicatedetectionpluginrun` |
| `msdyn_duplicatedetectionpluginrun_DuplicateMatchingRecord` | [msdyn_duplicatedetectionpluginrun](msdyn_duplicatedetectionpluginrun.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_duplicatedetectionpluginrun` |
| `msdyn_duplicatedetectionpluginrun_DuplicateBaseRecord` | [msdyn_duplicatedetectionpluginrun](msdyn_duplicatedetectionpluginrun.md) | `baserecordid` | `baserecordid_msdyn_duplicatedetectionpluginrun` |
| `msdyn_duplicatedetectionpluginrun_AsyncOperations` | [msdyn_duplicatedetectionpluginrun](msdyn_duplicatedetectionpluginrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_duplicatedetectionpluginrun` |
| `msdyn_duplicatedetectionpluginrun_MailboxTrackingFolders` | [msdyn_duplicatedetectionpluginrun](msdyn_duplicatedetectionpluginrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_duplicatedetectionpluginrun` |
| `msdyn_duplicatedetectionpluginrun_UserEntityInstanceDatas` | [msdyn_duplicatedetectionpluginrun](msdyn_duplicatedetectionpluginrun.md) | `objectid` | `objectid_msdyn_duplicatedetectionpluginrun` |
| `msdyn_duplicatedetectionpluginrun_ProcessSession` | [msdyn_duplicatedetectionpluginrun](msdyn_duplicatedetectionpluginrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_duplicatedetectionpluginrun` |
| `msdyn_duplicatedetectionpluginrun_BulkDeleteFailures` | [msdyn_duplicatedetectionpluginrun](msdyn_duplicatedetectionpluginrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_duplicatedetectionpluginrun` |
| `msdyn_duplicatedetectionpluginrun_PrincipalObjectAttributeAccesses` | [msdyn_duplicatedetectionpluginrun](msdyn_duplicatedetectionpluginrun.md) | `objectid` | `objectid_msdyn_duplicatedetectionpluginrun` |


## Source

Generated from [msdyn_duplicatedetectionpluginrun (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_duplicatedetectionpluginrun')) on 2026-05-07.