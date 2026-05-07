---
logical: "entityrecordfilter"
display: "EntityRecordFilter"
entitySetName: "entityrecordfilters"
primaryId: "entityrecordfilterid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# EntityRecordFilter

Codici tipo di oggetto RecordFilter

## Identity

| Property | Value |
| --- | --- |
| Logical name | `entityrecordfilter` |
| Display name | EntityRecordFilter |
| Display (plural) | EntityRecordFilters |
| Schema name | `EntityRecordFilter` |
| Entity set (Web API) | `entityrecordfilters` |
| Primary id attribute | `entityrecordfilterid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/entityrecordfilters?$select=name&$top=10
GET /api/data/v9.2/entityrecordfilters(<guid>)
POST /api/data/v9.2/entityrecordfilters
PATCH /api/data/v9.2/entityrecordfilters(<guid>)
DELETE /api/data/v9.2/entityrecordfilters(<guid>)
```

## Attributes

Writable: **11** · Read-only: **14**

### Writable

`entityrecordfilterid`, `importsequencenumber`, `iscustomizable`, `name`, `objecttypecode`, `overriddencreatedon`, `recordfilterid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_entityrecordfilter_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_entityrecordfilter_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_entityrecordfilter_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_entityrecordfilter_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_entityrecordfilter` | [organization](organization.md) | `organizationid` | `organizationid` |
| `recordfilter_entityrecordfilter` | [recordfilter](recordfilter.md) | `recordfilterid` | `RecordFilterId` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `entityrecordfilter_SyncErrors` | [entityrecordfilter](entityrecordfilter.md) | `regardingobjectid` | `regardingobjectid_entityrecordfilter` |
| `entityrecordfilter_DuplicateMatchingRecord` | [entityrecordfilter](entityrecordfilter.md) | `duplicaterecordid` | `duplicaterecordid_entityrecordfilter` |
| `entityrecordfilter_DuplicateBaseRecord` | [entityrecordfilter](entityrecordfilter.md) | `baserecordid` | `baserecordid_entityrecordfilter` |
| `entityrecordfilter_AsyncOperations` | [entityrecordfilter](entityrecordfilter.md) | `regardingobjectid` | `regardingobjectid_entityrecordfilter` |
| `entityrecordfilter_MailboxTrackingFolders` | [entityrecordfilter](entityrecordfilter.md) | `regardingobjectid` | `regardingobjectid_entityrecordfilter` |
| `entityrecordfilter_UserEntityInstanceDatas` | [entityrecordfilter](entityrecordfilter.md) | `objectid` | `objectid_entityrecordfilter` |
| `entityrecordfilter_ProcessSession` | [entityrecordfilter](entityrecordfilter.md) | `regardingobjectid` | `regardingobjectid_entityrecordfilter` |
| `entityrecordfilter_BulkDeleteFailures` | [entityrecordfilter](entityrecordfilter.md) | `regardingobjectid` | `regardingobjectid_entityrecordfilter` |
| `entityrecordfilter_PrincipalObjectAttributeAccesses` | [entityrecordfilter](entityrecordfilter.md) | `objectid` | `objectid_entityrecordfilter` |


## Source

Generated from [entityrecordfilter (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='entityrecordfilter')) on 2026-05-07.