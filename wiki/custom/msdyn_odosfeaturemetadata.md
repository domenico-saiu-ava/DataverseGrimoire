---
logical: "msdyn_odosfeaturemetadata"
display: "ODOSFeatureMetadata"
entitySetName: "msdyn_odosfeaturemetadatas"
primaryId: "msdyn_odosfeaturemetadataid"
primaryName: "msdyn_featurename"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

`importsequencenumber`, `msdyn_clientid`, `msdyn_consentrevokedtime`, `msdyn_entities`, `msdyn_featurename`, `msdyn_isconsentrevoked`, `msdyn_isfeatureenabled`, `msdyn_lastbackfillrunexecutionId`, `msdyn_lastrunexecutionid`, `msdyn_odosfeaturemetadataid`, `msdyn_primitives`, `msdyn_propertybag`, `msdyn_provisioningexception`, `msdyn_provisioningstage`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_odosfeaturemetadata_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_odosfeaturemetadata_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_odosfeaturemetadata_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_odosfeaturemetadata_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_odosfeaturemetadata` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_odosfeaturemetadata_SyncErrors` | [msdyn_odosfeaturemetadata](msdyn_odosfeaturemetadata.md) | `regardingobjectid` | `regardingobjectid_msdyn_odosfeaturemetadata` |
| `msdyn_odosfeaturemetadata_AsyncOperations` | [msdyn_odosfeaturemetadata](msdyn_odosfeaturemetadata.md) | `regardingobjectid` | `regardingobjectid_msdyn_odosfeaturemetadata` |
| `msdyn_odosfeaturemetadata_MailboxTrackingFolders` | [msdyn_odosfeaturemetadata](msdyn_odosfeaturemetadata.md) | `regardingobjectid` | `regardingobjectid_msdyn_odosfeaturemetadata` |
| `msdyn_odosfeaturemetadata_UserEntityInstanceDatas` | [msdyn_odosfeaturemetadata](msdyn_odosfeaturemetadata.md) | `objectid` | `objectid_msdyn_odosfeaturemetadata` |
| `msdyn_odosfeaturemetadata_ProcessSession` | [msdyn_odosfeaturemetadata](msdyn_odosfeaturemetadata.md) | `regardingobjectid` | `regardingobjectid_msdyn_odosfeaturemetadata` |
| `msdyn_odosfeaturemetadata_BulkDeleteFailures` | [msdyn_odosfeaturemetadata](msdyn_odosfeaturemetadata.md) | `regardingobjectid` | `regardingobjectid_msdyn_odosfeaturemetadata` |
| `msdyn_odosfeaturemetadata_PrincipalObjectAttributeAccesses` | [msdyn_odosfeaturemetadata](msdyn_odosfeaturemetadata.md) | `objectid` | `objectid_msdyn_odosfeaturemetadata` |


## Source

Generated from [msdyn_odosfeaturemetadata (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_odosfeaturemetadata')) on 2026-05-07.