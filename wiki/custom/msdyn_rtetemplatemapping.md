---
logical: "msdyn_rtetemplatemapping"
display: "Mapping dei modelli RTE"
entitySetName: "msdyn_rtetemplatemappings"
primaryId: "msdyn_rtetemplatemappingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Mapping dei modelli RTE

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_rtetemplatemapping` |
| Display name | Mapping dei modelli RTE |
| Display (plural) | Mapping dei modelli RTE |
| Schema name | `msdyn_rtetemplatemapping` |
| Entity set (Web API) | `msdyn_rtetemplatemappings` |
| Primary id attribute | `msdyn_rtetemplatemappingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_rtetemplatemappings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_rtetemplatemappings(<guid>)
POST /api/data/v9.2/msdyn_rtetemplatemappings
PATCH /api/data/v9.2/msdyn_rtetemplatemappings(<guid>)
DELETE /api/data/v9.2/msdyn_rtetemplatemappings(<guid>)
```

## Attributes

Writable: **11** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_entity`, `msdyn_name`, `msdyn_rtestructuredtemplate`, `msdyn_rtetemplatemappingid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_rtetemplatemapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_rtetemplatemapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_rtetemplatemapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_rtetemplatemapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_rtetemplatemapping` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_entity_msdyn_rtetemplatemapping_entity` | [entity](entity.md) | `msdyn_entity` | `msdyn_entity` |
| `msdyn_msdyn_rtestructuredtemplate_msdyn_rtetemplatemapping_rtestructuredtemplate` | [msdyn_rtestructuredtemplate](msdyn_rtestructuredtemplate.md) | `msdyn_rtestructuredtemplate` | `msdyn_rtestructuredtemplate` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_rtetemplatemapping_SyncErrors` | [msdyn_rtetemplatemapping](msdyn_rtetemplatemapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_rtetemplatemapping` |
| `msdyn_rtetemplatemapping_DuplicateMatchingRecord` | [msdyn_rtetemplatemapping](msdyn_rtetemplatemapping.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_rtetemplatemapping` |
| `msdyn_rtetemplatemapping_DuplicateBaseRecord` | [msdyn_rtetemplatemapping](msdyn_rtetemplatemapping.md) | `baserecordid` | `baserecordid_msdyn_rtetemplatemapping` |
| `msdyn_rtetemplatemapping_AsyncOperations` | [msdyn_rtetemplatemapping](msdyn_rtetemplatemapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_rtetemplatemapping` |
| `msdyn_rtetemplatemapping_MailboxTrackingFolders` | [msdyn_rtetemplatemapping](msdyn_rtetemplatemapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_rtetemplatemapping` |
| `msdyn_rtetemplatemapping_UserEntityInstanceDatas` | [msdyn_rtetemplatemapping](msdyn_rtetemplatemapping.md) | `objectid` | `objectid_msdyn_rtetemplatemapping` |
| `msdyn_rtetemplatemapping_ProcessSession` | [msdyn_rtetemplatemapping](msdyn_rtetemplatemapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_rtetemplatemapping` |
| `msdyn_rtetemplatemapping_BulkDeleteFailures` | [msdyn_rtetemplatemapping](msdyn_rtetemplatemapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_rtetemplatemapping` |
| `msdyn_rtetemplatemapping_PrincipalObjectAttributeAccesses` | [msdyn_rtetemplatemapping](msdyn_rtetemplatemapping.md) | `objectid` | `objectid_msdyn_rtetemplatemapping` |


## Source

Generated from [msdyn_rtetemplatemapping (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_rtetemplatemapping')) on 2026-05-07.