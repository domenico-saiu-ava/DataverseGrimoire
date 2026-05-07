---
logical: "msdyn_aiconnectormapping"
display: "msdyn_aiconnectormapping"
entitySetName: "msdyn_aiconnectormappings"
primaryId: "msdyn_aiconnectormappingid"
primaryName: "msdyn_type"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_aiconnectormapping

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aiconnectormapping` |
| Display name | msdyn_aiconnectormapping |
| Display (plural) | msdyn_aiconnectormappings |
| Schema name | `msdyn_aiconnectormapping` |
| Entity set (Web API) | `msdyn_aiconnectormappings` |
| Primary id attribute | `msdyn_aiconnectormappingid` |
| Primary name attribute | `msdyn_type` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aiconnectormappings?$select=msdyn_type&$top=10
GET /api/data/v9.2/msdyn_aiconnectormappings(<guid>)
POST /api/data/v9.2/msdyn_aiconnectormappings
PATCH /api/data/v9.2/msdyn_aiconnectormappings(<guid>)
DELETE /api/data/v9.2/msdyn_aiconnectormappings(<guid>)
```

## Attributes

Writable: **12** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_aiconnectormappingid`, `msdyn_connectionid`, `msdyn_connectorid`, `msdyn_operationid`, `msdyn_type`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_aiconnectormapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aiconnectormapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aiconnectormapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aiconnectormapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_aiconnectormapping` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aiconnectormapping_SyncErrors` | [msdyn_aiconnectormapping](msdyn_aiconnectormapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiconnectormapping` |
| `msdyn_aiconnectormapping_DuplicateMatchingRecord` | [msdyn_aiconnectormapping](msdyn_aiconnectormapping.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_aiconnectormapping` |
| `msdyn_aiconnectormapping_DuplicateBaseRecord` | [msdyn_aiconnectormapping](msdyn_aiconnectormapping.md) | `baserecordid` | `baserecordid_msdyn_aiconnectormapping` |
| `msdyn_aiconnectormapping_AsyncOperations` | [msdyn_aiconnectormapping](msdyn_aiconnectormapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiconnectormapping` |
| `msdyn_aiconnectormapping_MailboxTrackingFolders` | [msdyn_aiconnectormapping](msdyn_aiconnectormapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiconnectormapping` |
| `msdyn_aiconnectormapping_UserEntityInstanceDatas` | [msdyn_aiconnectormapping](msdyn_aiconnectormapping.md) | `objectid` | `objectid_msdyn_aiconnectormapping` |
| `msdyn_aiconnectormapping_ProcessSession` | [msdyn_aiconnectormapping](msdyn_aiconnectormapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiconnectormapping` |
| `msdyn_aiconnectormapping_BulkDeleteFailures` | [msdyn_aiconnectormapping](msdyn_aiconnectormapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiconnectormapping` |
| `msdyn_aiconnectormapping_PrincipalObjectAttributeAccesses` | [msdyn_aiconnectormapping](msdyn_aiconnectormapping.md) | `objectid` | `objectid_msdyn_aiconnectormapping` |


## Source

Generated from [msdyn_aiconnectormapping (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_aiconnectormapping')) on 2026-05-07.