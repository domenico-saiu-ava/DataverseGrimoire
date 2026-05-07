---
logical: "synapselinkexternaltablestate"
display: "Synapse Link External Table State"
entitySetName: "synapselinkexternaltablestates"
primaryId: "synapselinkexternaltablestateid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Synapse Link External Table State

Synapse Link external table states

## Identity

| Property | Value |
| --- | --- |
| Logical name | `synapselinkexternaltablestate` |
| Display name | Synapse Link External Table State |
| Display (plural) | Synapse Link External Table States |
| Schema name | `synapselinkexternaltablestate` |
| Entity set (Web API) | `synapselinkexternaltablestates` |
| Primary id attribute | `synapselinkexternaltablestateid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/synapselinkexternaltablestates?$select=name&$top=10
GET /api/data/v9.2/synapselinkexternaltablestates(<guid>)
POST /api/data/v9.2/synapselinkexternaltablestates
PATCH /api/data/v9.2/synapselinkexternaltablestates(<guid>)
DELETE /api/data/v9.2/synapselinkexternaltablestates(<guid>)
```

## Attributes

Writable: **23** · Read-only: **8**

### Writable

`datalakefolder`, `entityname`, `importsequencenumber`, `lakehouseshortcutstate`, `lastsynchronizedon`, `lastsyncstate`, `maxrecordversion`, `metadataversion`, `minsynceddataversion`, `name`, `overriddencreatedon`, `recordcount`, `schemamodifiedon`, `sourcerecordcount`, `statecode`, `statuscode`, `synapsedatabasename`, `synapselinkexternaltablestateid`, `synapseworkspacename`, `tablestate`, `timezoneruleversionnumber`, `trinostate`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_synapselinkexternaltablestate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_synapselinkexternaltablestate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_synapselinkexternaltablestate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_synapselinkexternaltablestate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_synapselinkexternaltablestate` | [organization](organization.md) | `organizationid` | `organizationid` |
| `synapselinkexternaltablestates` | [datalakefolder](datalakefolder.md) | `datalakefolder` | `datalakefolder` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `synapselinkexternaltablestate_SyncErrors` | [synapselinkexternaltablestate](synapselinkexternaltablestate.md) | `regardingobjectid` | `regardingobjectid_synapselinkexternaltablestate` |
| `synapselinkexternaltablestate_DuplicateMatchingRecord` | [synapselinkexternaltablestate](synapselinkexternaltablestate.md) | `duplicaterecordid` | `duplicaterecordid_synapselinkexternaltablestate` |
| `synapselinkexternaltablestate_DuplicateBaseRecord` | [synapselinkexternaltablestate](synapselinkexternaltablestate.md) | `baserecordid` | `baserecordid_synapselinkexternaltablestate` |
| `synapselinkexternaltablestate_AsyncOperations` | [synapselinkexternaltablestate](synapselinkexternaltablestate.md) | `regardingobjectid` | `regardingobjectid_synapselinkexternaltablestate` |
| `synapselinkexternaltablestate_MailboxTrackingFolders` | [synapselinkexternaltablestate](synapselinkexternaltablestate.md) | `regardingobjectid` | `regardingobjectid_synapselinkexternaltablestate` |
| `synapselinkexternaltablestate_UserEntityInstanceDatas` | [synapselinkexternaltablestate](synapselinkexternaltablestate.md) | `objectid` | `objectid_synapselinkexternaltablestate` |
| `synapselinkexternaltablestate_ProcessSession` | [synapselinkexternaltablestate](synapselinkexternaltablestate.md) | `regardingobjectid` | `regardingobjectid_synapselinkexternaltablestate` |
| `synapselinkexternaltablestate_BulkDeleteFailures` | [synapselinkexternaltablestate](synapselinkexternaltablestate.md) | `regardingobjectid` | `regardingobjectid_synapselinkexternaltablestate` |
| `synapselinkexternaltablestate_PrincipalObjectAttributeAccesses` | [synapselinkexternaltablestate](synapselinkexternaltablestate.md) | `objectid` | `objectid_synapselinkexternaltablestate` |


## Source

Generated from [synapselinkexternaltablestate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='synapselinkexternaltablestate')) on 2026-05-07.