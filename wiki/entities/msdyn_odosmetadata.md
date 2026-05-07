---
logical: "msdyn_odosmetadata"
display: "ODOSMetadata"
entitySetName: "msdyn_odosmetadatas"
primaryId: "msdyn_odosmetadataid"
primaryName: "msdyn_odosendpoint"
tableType: "Standard"
ownership: "OrganizationOwned"
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

`ImportSequenceNumber`, `msdyn_enabledroles`, `msdyn_odosendpoint`, `msdyn_odosmetadataId`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `tmp_Provisioning_Island`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_odosmetadata_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_odosmetadata_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_odosmetadata_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_odosmetadata_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_odosmetadata` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_odosmetadata_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_odosmetadata_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_odosmetadata_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_odosmetadata_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_odosmetadata_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_odosmetadata_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_odosmetadata.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_odosmetadata.md) on 2026-05-06.