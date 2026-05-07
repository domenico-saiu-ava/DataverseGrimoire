---
logical: "msdyn_segmentattribute"
display: "Proprietà segmento"
entitySetName: "msdyn_segmentattributes"
primaryId: "msdyn_segmentattributeid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Proprietà segmento

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_segmentattribute` |
| Display name | Proprietà segmento |
| Display (plural) | Proprietà segmento |
| Schema name | `msdyn_segmentattribute` |
| Entity set (Web API) | `msdyn_segmentattributes` |
| Primary id attribute | `msdyn_segmentattributeid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_segmentattributes?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_segmentattributes(<guid>)
POST /api/data/v9.2/msdyn_segmentattributes
PATCH /api/data/v9.2/msdyn_segmentattributes(<guid>)
DELETE /api/data/v9.2/msdyn_segmentattributes(<guid>)
```

## Attributes

Writable: **13** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_aggregatedprimaryentityattributelist`, `msdyn_aggregatedrelatedentityattributelist`, `msdyn_attributemapping`, `msdyn_name`, `msdyn_objecttype`, `msdyn_segmentattributeid`, `msdyn_segmentpriorityorder`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_segmentattribute_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_segmentattribute_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_segmentattribute_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_segmentattribute_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_segmentattribute` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_segmentattribute_SyncErrors` | [msdyn_segmentattribute](msdyn_segmentattribute.md) | `regardingobjectid` | `regardingobjectid_msdyn_segmentattribute` |
| `msdyn_segmentattribute_DuplicateMatchingRecord` | [msdyn_segmentattribute](msdyn_segmentattribute.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_segmentattribute` |
| `msdyn_segmentattribute_DuplicateBaseRecord` | [msdyn_segmentattribute](msdyn_segmentattribute.md) | `baserecordid` | `baserecordid_msdyn_segmentattribute` |
| `msdyn_segmentattribute_AsyncOperations` | [msdyn_segmentattribute](msdyn_segmentattribute.md) | `regardingobjectid` | `regardingobjectid_msdyn_segmentattribute` |
| `msdyn_segmentattribute_MailboxTrackingFolders` | [msdyn_segmentattribute](msdyn_segmentattribute.md) | `regardingobjectid` | `regardingobjectid_msdyn_segmentattribute` |
| `msdyn_segmentattribute_UserEntityInstanceDatas` | [msdyn_segmentattribute](msdyn_segmentattribute.md) | `objectid` | `objectid_msdyn_segmentattribute` |
| `msdyn_segmentattribute_ProcessSession` | [msdyn_segmentattribute](msdyn_segmentattribute.md) | `regardingobjectid` | `regardingobjectid_msdyn_segmentattribute` |
| `msdyn_segmentattribute_BulkDeleteFailures` | [msdyn_segmentattribute](msdyn_segmentattribute.md) | `regardingobjectid` | `regardingobjectid_msdyn_segmentattribute` |
| `msdyn_segmentattribute_PrincipalObjectAttributeAccesses` | [msdyn_segmentattribute](msdyn_segmentattribute.md) | `objectid` | `objectid_msdyn_segmentattribute` |


## Source

Generated from [msdyn_segmentattribute (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_segmentattribute')) on 2026-05-07.