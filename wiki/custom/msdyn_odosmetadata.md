---
logical: "msdyn_odosmetadata"
display: "ODOSMetadata"
entitySetName: "msdyn_odosmetadatas"
primaryId: "msdyn_odosmetadataid"
primaryName: "msdyn_odosendpoint"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# ODOSMetadata

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_odosmetadata` |
| Display name | ODOSMetadata |
| Display (plural) | ODOSMetadata |
| Schema name | `msdyn_odosmetadata` |
| Entity set (Web API) | `msdyn_odosmetadatas` |
| Primary id attribute | `msdyn_odosmetadataid` |
| Primary name attribute | `msdyn_odosendpoint` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_odosmetadatas?$select=msdyn_odosendpoint&$top=10
GET /api/data/v9.2/msdyn_odosmetadatas(<guid>)
POST /api/data/v9.2/msdyn_odosmetadatas
PATCH /api/data/v9.2/msdyn_odosmetadatas(<guid>)
DELETE /api/data/v9.2/msdyn_odosmetadatas(<guid>)
```

## Attributes

Writable: **10** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_enabledroles`, `msdyn_odosendpoint`, `msdyn_odosmetadataid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `tmp_provisioning_island`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_odosmetadata_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_odosmetadata_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_odosmetadata_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_odosmetadata_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_odosmetadata` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_odosmetadata_SyncErrors` | [msdyn_odosmetadata](msdyn_odosmetadata.md) | `regardingobjectid` | `regardingobjectid_msdyn_odosmetadata` |
| `msdyn_odosmetadata_AsyncOperations` | [msdyn_odosmetadata](msdyn_odosmetadata.md) | `regardingobjectid` | `regardingobjectid_msdyn_odosmetadata` |
| `msdyn_odosmetadata_MailboxTrackingFolders` | [msdyn_odosmetadata](msdyn_odosmetadata.md) | `regardingobjectid` | `regardingobjectid_msdyn_odosmetadata` |
| `msdyn_odosmetadata_UserEntityInstanceDatas` | [msdyn_odosmetadata](msdyn_odosmetadata.md) | `objectid` | `objectid_msdyn_odosmetadata` |
| `msdyn_odosmetadata_ProcessSession` | [msdyn_odosmetadata](msdyn_odosmetadata.md) | `regardingobjectid` | `regardingobjectid_msdyn_odosmetadata` |
| `msdyn_odosmetadata_BulkDeleteFailures` | [msdyn_odosmetadata](msdyn_odosmetadata.md) | `regardingobjectid` | `regardingobjectid_msdyn_odosmetadata` |
| `msdyn_odosmetadata_PrincipalObjectAttributeAccesses` | [msdyn_odosmetadata](msdyn_odosmetadata.md) | `objectid` | `objectid_msdyn_odosmetadata` |


## Source

Generated from [msdyn_odosmetadata (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_odosmetadata')) on 2026-05-07.