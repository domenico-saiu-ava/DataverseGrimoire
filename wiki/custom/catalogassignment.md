---
logical: "catalogassignment"
display: "Assegnazione catalogo"
entitySetName: "catalogassignments"
primaryId: "catalogassignmentid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Assegnazione catalogo

Entità per l'assegnazione di record a un catalogo specifico 

## Identity

| Property | Value |
| --- | --- |
| Logical name | `catalogassignment` |
| Display name | Assegnazione catalogo |
| Display (plural) | Assegnazioni catalogo |
| Schema name | `CatalogAssignment` |
| Entity set (Web API) | `catalogassignments` |
| Primary id attribute | `catalogassignmentid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/catalogassignments?$select=name&$top=10
GET /api/data/v9.2/catalogassignments(<guid>)
POST /api/data/v9.2/catalogassignments
PATCH /api/data/v9.2/catalogassignments(<guid>)
DELETE /api/data/v9.2/catalogassignments(<guid>)
```

## Attributes

Writable: **11** · Read-only: **14**

### Writable

`catalogassignmentid`, `catalogid`, `importsequencenumber`, `iscustomizable`, `name`, `object`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_catalogassignment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_catalogassignment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_catalogassignment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_catalogassignment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_catalogassignment` | [organization](organization.md) | `organizationid` | `organizationid` |
| `catalogassignment_workflow` | [workflow](workflow.md) | `object` | `WorkflowId` |
| `catalog_catalogassignment` | [catalog](catalog.md) | `catalogid` | `CatalogId` |
| `catalogassignment_entity` | [entity](entity.md) | `object` | `EntityId` |
| `catalogassignment_customapi` | [customapi](customapi.md) | `object` | `CustomAPIId` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `catalogassignment_SyncErrors` | [catalogassignment](catalogassignment.md) | `regardingobjectid` | `regardingobjectid_catalogassignment` |
| `catalogassignment_DuplicateMatchingRecord` | [catalogassignment](catalogassignment.md) | `duplicaterecordid` | `duplicaterecordid_catalogassignment` |
| `catalogassignment_DuplicateBaseRecord` | [catalogassignment](catalogassignment.md) | `baserecordid` | `baserecordid_catalogassignment` |
| `catalogassignment_AsyncOperations` | [catalogassignment](catalogassignment.md) | `regardingobjectid` | `regardingobjectid_catalogassignment` |
| `catalogassignment_MailboxTrackingFolders` | [catalogassignment](catalogassignment.md) | `regardingobjectid` | `regardingobjectid_catalogassignment` |
| `catalogassignment_UserEntityInstanceDatas` | [catalogassignment](catalogassignment.md) | `objectid` | `objectid_catalogassignment` |
| `catalogassignment_ProcessSession` | [catalogassignment](catalogassignment.md) | `regardingobjectid` | `regardingobjectid_catalogassignment` |
| `catalogassignment_BulkDeleteFailures` | [catalogassignment](catalogassignment.md) | `regardingobjectid` | `regardingobjectid_catalogassignment` |
| `catalogassignment_PrincipalObjectAttributeAccesses` | [catalogassignment](catalogassignment.md) | `objectid` | `objectid_catalogassignment` |


## Source

Generated from [catalogassignment (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='catalogassignment')) on 2026-05-07.