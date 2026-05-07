---
logical: "msdynmkt_eventmetadata_sdkmessageprocessingstep"
display: "Trigger per i passaggi di elaborazione dei messaggi SDK"
entitySetName: "msdynmkt_eventmetadata_sdkmessageprocessingsteps"
primaryId: "msdynmkt_eventmetadata_sdkmessageprocessingstepid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Trigger per i passaggi di elaborazione dei messaggi SDK

Mapping tra trigger di marketing CJO e passaggi di elaborazione messaggi SDK

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_eventmetadata_sdkmessageprocessingstep` |
| Display name | Trigger per i passaggi di elaborazione dei messaggi SDK |
| Display (plural) | Trigger per i passaggi di elaborazione dei messaggi SDK |
| Schema name | `msdynmkt_eventmetadata_sdkmessageprocessingstep` |
| Entity set (Web API) | `msdynmkt_eventmetadata_sdkmessageprocessingsteps` |
| Primary id attribute | `msdynmkt_eventmetadata_sdkmessageprocessingstepid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_eventmetadata_sdkmessageprocessingsteps?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_eventmetadata_sdkmessageprocessingsteps(<guid>)
POST /api/data/v9.2/msdynmkt_eventmetadata_sdkmessageprocessingsteps
PATCH /api/data/v9.2/msdynmkt_eventmetadata_sdkmessageprocessingsteps(<guid>)
DELETE /api/data/v9.2/msdynmkt_eventmetadata_sdkmessageprocessingsteps(<guid>)
```

## Attributes

Writable: **12** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdynmkt_eventmetadata_sdkmessageprocessingstepid`, `msdynmkt_eventmetadataid`, `msdynmkt_name`, `msdynmkt_sdkmessageprocessingstepid`, `msdynmkt_uniquename`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_eventmetadata_eventmetadata_sdkmessagepro` | [msdynmkt_eventmetadata](msdynmkt_eventmetadata.md) | `msdynmkt_eventmetadataid` | `msdynmkt_eventmetadataId` |
| `msdynmkt_sdkmessageprocessingstep_eventmetadata_sd` | [sdkmessageprocessingstep](sdkmessageprocessingstep.md) | `msdynmkt_sdkmessageprocessingstepid` | `msdynmkt_sdkmessageprocessingstepId` |
| `lk_msdynmkt_eventmetadata_sdkmessageprocessingstep_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_eventmetadata_sdkmessageprocessingstep_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_eventmetadata_sdkmessageprocessingstep_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_eventmetadata_sdkmessageprocessingstep_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdynmkt_eventmetadata_sdkmessageprocessingstep` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_eventmetadata_sdkmessageprocessingstep_SyncErrors` | [msdynmkt_eventmetadata_sdkmessageprocessingstep](msdynmkt_eventmetadata_sdkmessageprocessingstep.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_eventmetadata_sdkmessageprocessingstep` |
| `msdynmkt_eventmetadata_sdkmessageprocessingstep_DuplicateMatchingRecord` | [msdynmkt_eventmetadata_sdkmessageprocessingstep](msdynmkt_eventmetadata_sdkmessageprocessingstep.md) | `duplicaterecordid` | `duplicaterecordid_msdynmkt_eventmetadata_sdkmessageprocessingstep` |
| `msdynmkt_eventmetadata_sdkmessageprocessingstep_DuplicateBaseRecord` | [msdynmkt_eventmetadata_sdkmessageprocessingstep](msdynmkt_eventmetadata_sdkmessageprocessingstep.md) | `baserecordid` | `baserecordid_msdynmkt_eventmetadata_sdkmessageprocessingstep` |
| `msdynmkt_eventmetadata_sdkmessageprocessingstep_AsyncOperations` | [msdynmkt_eventmetadata_sdkmessageprocessingstep](msdynmkt_eventmetadata_sdkmessageprocessingstep.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_eventmetadata_sdkmessageprocessingstep` |
| `msdynmkt_eventmetadata_sdkmessageprocessingstep_MailboxTrackingFolders` | [msdynmkt_eventmetadata_sdkmessageprocessingstep](msdynmkt_eventmetadata_sdkmessageprocessingstep.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_eventmetadata_sdkmessageprocessingstep` |
| `msdynmkt_eventmetadata_sdkmessageprocessingstep_UserEntityInstanceDatas` | [msdynmkt_eventmetadata_sdkmessageprocessingstep](msdynmkt_eventmetadata_sdkmessageprocessingstep.md) | `objectid` | `objectid_msdynmkt_eventmetadata_sdkmessageprocessingstep` |
| `msdynmkt_eventmetadata_sdkmessageprocessingstep_ProcessSession` | [msdynmkt_eventmetadata_sdkmessageprocessingstep](msdynmkt_eventmetadata_sdkmessageprocessingstep.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_eventmetadata_sdkmessageprocessingstep` |
| `msdynmkt_eventmetadata_sdkmessageprocessingstep_BulkDeleteFailures` | [msdynmkt_eventmetadata_sdkmessageprocessingstep](msdynmkt_eventmetadata_sdkmessageprocessingstep.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_eventmetadata_sdkmessageprocessingstep` |
| `msdynmkt_eventmetadata_sdkmessageprocessingstep_PrincipalObjectAttributeAccesses` | [msdynmkt_eventmetadata_sdkmessageprocessingstep](msdynmkt_eventmetadata_sdkmessageprocessingstep.md) | `objectid` | `objectid_msdynmkt_eventmetadata_sdkmessageprocessingstep` |


## Source

Generated from [msdynmkt_eventmetadata_sdkmessageprocessingstep (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_eventmetadata_sdkmessageprocessingstep')) on 2026-05-07.