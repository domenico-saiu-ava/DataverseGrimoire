---
logical: "elasticfileattachment"
display: "ElasticFileAttachment"
entitySetName: "elasticfileattachments"
primaryId: "elasticfileattachmentid"
primaryName: "filename"
tableType: "Elastic"
ownership: "None"
---

# ElasticFileAttachment

Elastic File Attachment

## Identity

| Property | Value |
| --- | --- |
| Logical name | `elasticfileattachment` |
| Display name | ElasticFileAttachment |
| Display (plural) | ElasticFileAttachments |
| Schema name | `ElasticFileAttachment` |
| Entity set (Web API) | `elasticfileattachments` |
| Primary id attribute | `elasticfileattachmentid` |
| Primary name attribute | `filename` |
| Table type | Elastic |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/elasticfileattachments?$select=filename&$top=10
GET /api/data/v9.2/elasticfileattachments(<guid>)
POST /api/data/v9.2/elasticfileattachments
PATCH /api/data/v9.2/elasticfileattachments(<guid>)
DELETE /api/data/v9.2/elasticfileattachments(<guid>)
```

## Attributes

Writable: **11** · Read-only: **6**

### Writable

`ElasticFileAttachmentId`, `FileName`, `ImportSequenceNumber`, `MimeType`, `ObjectId`, `ObjectIdTypeCode`, `ObjectTypeCode`, `OverriddenCreatedOn`, `PartitionId`, `RegardingFieldName`, `TTLInSeconds`

### Read-only

`CreatedOn`, `FilePointer`, `FileSizeInBytes`, `Prefix`, `StoragePointer`, `VersionNumber`

## Relationships

### Many-to-One (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `componentversionnrddatasource_ElasticFileAttachments` | [componentversionnrddatasource](componentversionnrddatasource.md) | `objectid` | `objectid_componentversionnrddatasource` |
| `sourcecontrolcomponentpayload_ElasticFileAttachments` | [sourcecontrolcomponentpayload](sourcecontrolcomponentpayload.md) | `objectid` | `objectid_sourcecontrolcomponentpayload` |

### One-to-Many (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ElasticFileAttachment_componentversionnrddatasource_Payload` | _n/a_ | `payload` | _n/a_ |
| `ElasticFileAttachment_SourceControlComponentPayload_ComponentPayload` | _n/a_ | `componentpayload` | _n/a_ |
| `ElasticFileAttachment_SourceControlComponentPayload_ComponentPayloadInGit` | _n/a_ | `componentpayloadingit` | _n/a_ |


## Source

Generated from [elasticfileattachment.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/elasticfileattachment.md) on 2026-05-06.