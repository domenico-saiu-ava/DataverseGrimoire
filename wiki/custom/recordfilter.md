---
logical: "recordfilter"
display: "Filtro record"
entitySetName: "recordfilters"
primaryId: "recordfilterid"
primaryName: "displayname"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Filtro record

Filtro accesso record

## Identity

| Property | Value |
| --- | --- |
| Logical name | `recordfilter` |
| Display name | Filtro record |
| Display (plural) | Filtri record |
| Schema name | `RecordFilter` |
| Entity set (Web API) | `recordfilters` |
| Primary id attribute | `recordfilterid` |
| Primary name attribute | `displayname` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/recordfilters?$select=displayname&$top=10
GET /api/data/v9.2/recordfilters(<guid>)
POST /api/data/v9.2/recordfilters
PATCH /api/data/v9.2/recordfilters(<guid>)
DELETE /api/data/v9.2/recordfilters(<guid>)
```

## Attributes

Writable: **12** · Read-only: **15**

### Writable

`displayname`, `fetchxml`, `filterlinkedrecords`, `importsequencenumber`, `iscustomizable`, `overriddencreatedon`, `recordfilterid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `uniquename`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `isrolebusinessunitquery`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_recordfilter_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_recordfilter_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_recordfilter_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_recordfilter_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_recordfilter` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `recordfilter_SyncErrors` | [recordfilter](recordfilter.md) | `regardingobjectid` | `regardingobjectid_recordfilter` |
| `recordfilter_DuplicateMatchingRecord` | [recordfilter](recordfilter.md) | `duplicaterecordid` | `duplicaterecordid_recordfilter` |
| `recordfilter_DuplicateBaseRecord` | [recordfilter](recordfilter.md) | `baserecordid` | `baserecordid_recordfilter` |
| `recordfilter_AsyncOperations` | [recordfilter](recordfilter.md) | `regardingobjectid` | `regardingobjectid_recordfilter` |
| `recordfilter_MailboxTrackingFolders` | [recordfilter](recordfilter.md) | `regardingobjectid` | `regardingobjectid_recordfilter` |
| `recordfilter_UserEntityInstanceDatas` | [recordfilter](recordfilter.md) | `objectid` | `objectid_recordfilter` |
| `recordfilter_ProcessSession` | [recordfilter](recordfilter.md) | `regardingobjectid` | `regardingobjectid_recordfilter` |
| `recordfilter_BulkDeleteFailures` | [recordfilter](recordfilter.md) | `regardingobjectid` | `regardingobjectid_recordfilter` |
| `recordfilter_PrincipalObjectAttributeAccesses` | [recordfilter](recordfilter.md) | `objectid` | `objectid_recordfilter` |
| `recordfilter_entityrecordfilter` | [recordfilter](recordfilter.md) | `recordfilterid` | `RecordFilterId` |
| `recordfilter_roleprivileges` | [recordfilter](recordfilter.md) | `recordfilterid` | `RecordFilterId` |


## Source

Generated from [recordfilter (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='recordfilter')) on 2026-05-07.