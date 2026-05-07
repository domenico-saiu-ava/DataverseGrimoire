---
logical: "msdyn_modulerundetail"
display: "Dettagli esecuzione modulo"
entitySetName: "msdyn_modulerundetails"
primaryId: "msdyn_modulerundetailid"
primaryName: "msdyn_modelrunid"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Dettagli esecuzione modulo

Risultato dell'esecuzione di un modello MEF

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_modulerundetail` |
| Display name | Dettagli esecuzione modulo |
| Display (plural) | Dettagli esecuzione modulo |
| Schema name | `msdyn_modulerundetail` |
| Entity set (Web API) | `msdyn_modulerundetails` |
| Primary id attribute | `msdyn_modulerundetailid` |
| Primary name attribute | `msdyn_modelrunid` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_modulerundetails?$select=msdyn_modelrunid&$top=10
GET /api/data/v9.2/msdyn_modulerundetails(<guid>)
POST /api/data/v9.2/msdyn_modulerundetails
PATCH /api/data/v9.2/msdyn_modulerundetails(<guid>)
DELETE /api/data/v9.2/msdyn_modulerundetails(<guid>)
```

## Attributes

Writable: **20** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_endtime`, `msdyn_iscompleted`, `msdyn_modelrunid`, `msdyn_moduleconfigid`, `msdyn_moduleconfigidversion`, `msdyn_moduleendpointresults`, `msdyn_moduleresultcodes`, `msdyn_modulerundetailid`, `msdyn_outputmodeljsonpath`, `msdyn_queuedtime`, `msdyn_starttime`, `msdyn_synapseschemasyncjobid`, `msdyn_version`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_modulerundetail_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_modulerundetail_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_modulerundetail_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_modulerundetail_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_modulerundetail` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_modulerundetail_SyncErrors` | [msdyn_modulerundetail](msdyn_modulerundetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_modulerundetail` |
| `msdyn_modulerundetail_DuplicateMatchingRecord` | [msdyn_modulerundetail](msdyn_modulerundetail.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_modulerundetail` |
| `msdyn_modulerundetail_DuplicateBaseRecord` | [msdyn_modulerundetail](msdyn_modulerundetail.md) | `baserecordid` | `baserecordid_msdyn_modulerundetail` |
| `msdyn_modulerundetail_AsyncOperations` | [msdyn_modulerundetail](msdyn_modulerundetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_modulerundetail` |
| `msdyn_modulerundetail_MailboxTrackingFolders` | [msdyn_modulerundetail](msdyn_modulerundetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_modulerundetail` |
| `msdyn_modulerundetail_UserEntityInstanceDatas` | [msdyn_modulerundetail](msdyn_modulerundetail.md) | `objectid` | `objectid_msdyn_modulerundetail` |
| `msdyn_modulerundetail_ProcessSession` | [msdyn_modulerundetail](msdyn_modulerundetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_modulerundetail` |
| `msdyn_modulerundetail_BulkDeleteFailures` | [msdyn_modulerundetail](msdyn_modulerundetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_modulerundetail` |
| `msdyn_modulerundetail_PrincipalObjectAttributeAccesses` | [msdyn_modulerundetail](msdyn_modulerundetail.md) | `objectid` | `objectid_msdyn_modulerundetail` |


## Source

Generated from [msdyn_modulerundetail (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_modulerundetail')) on 2026-05-07.