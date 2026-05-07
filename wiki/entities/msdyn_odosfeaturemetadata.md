---
logical: "msdyn_odosfeaturemetadata"
display: "ODOSFeatureMetadata"
entitySetName: "msdyn_odosfeaturemetadatas"
primaryId: "msdyn_odosfeaturemetadataid"
primaryName: "msdyn_featurename"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# ODOSFeatureMetadata

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_odosfeaturemetadata` |
| Display name | ODOSFeatureMetadata |
| Display (plural) | ODOSFeatureMetadata |
| Schema name | `msdyn_odosfeaturemetadata` |
| Entity set (Web API) | `msdyn_odosfeaturemetadatas` |
| Primary id attribute | `msdyn_odosfeaturemetadataid` |
| Primary name attribute | `msdyn_featurename` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_odosfeaturemetadatas?$select=msdyn_featurename&$top=10
GET /api/data/v9.2/msdyn_odosfeaturemetadatas(<guid>)
POST /api/data/v9.2/msdyn_odosfeaturemetadatas
PATCH /api/data/v9.2/msdyn_odosfeaturemetadatas(<guid>)
DELETE /api/data/v9.2/msdyn_odosfeaturemetadatas(<guid>)
```

## Attributes

Writable: **19** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_clientid`, `msdyn_consentrevokedtime`, `msdyn_entities`, `msdyn_featurename`, `msdyn_isconsentrevoked`, `msdyn_isfeatureenabled`, `msdyn_lastbackfillrunexecutionId`, `msdyn_lastrunexecutionid`, `msdyn_odosfeaturemetadataId`, `msdyn_primitives`, `msdyn_propertybag`, `msdyn_provisioningexception`, `msdyn_provisioningstage`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_odosfeaturemetadata_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_odosfeaturemetadata_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_odosfeaturemetadata_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_odosfeaturemetadata_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_odosfeaturemetadata` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_odosfeaturemetadata_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_odosfeaturemetadata_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_odosfeaturemetadata_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_odosfeaturemetadata_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_odosfeaturemetadata_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_odosfeaturemetadata_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_odosfeaturemetadata.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_odosfeaturemetadata.md) on 2026-05-06.