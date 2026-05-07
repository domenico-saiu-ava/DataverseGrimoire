---
logical: "msdyn_relationshipanalyticsmetadata"
display: "Relationship Analytics Metadata"
entitySetName: "msdyn_relationshipanalyticsmetadatas"
primaryId: "msdyn_relationshipanalyticsmetadataid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Relationship Analytics Metadata

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_relationshipanalyticsmetadata` |
| Display name | Relationship Analytics Metadata |
| Display (plural) | Relationship Analytics Metadatas |
| Schema name | `msdyn_relationshipanalyticsmetadata` |
| Entity set (Web API) | `msdyn_relationshipanalyticsmetadatas` |
| Primary id attribute | `msdyn_relationshipanalyticsmetadataid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_relationshipanalyticsmetadatas?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_relationshipanalyticsmetadatas(<guid>)
POST /api/data/v9.2/msdyn_relationshipanalyticsmetadatas
PATCH /api/data/v9.2/msdyn_relationshipanalyticsmetadatas(<guid>)
DELETE /api/data/v9.2/msdyn_relationshipanalyticsmetadatas(<guid>)
```

## Attributes

Writable: **18** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_absoluteEmailWeight`, `msdyn_absoluteMeetingWeight`, `msdyn_absolutePhonecallWeight`, `msdyn_absoluteTaskWeight`, `msdyn_communicationFrequency`, `msdyn_fairHealthThreshold`, `msdyn_goodHealthThreshold`, `msdyn_healthEnabled`, `msdyn_healthScoresDistribution`, `msdyn_name`, `msdyn_provisioningStatus`, `msdyn_relationshipanalyticsmetadataId`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_relationshipanalyticsmetadata_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_relationshipanalyticsmetadata_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_relationshipanalyticsmetadata_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_relationshipanalyticsmetadata_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_relationshipanalyticsmetadata` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_relationshipanalyticsmetadata_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_relationshipanalyticsmetadata_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_relationshipanalyticsmetadata_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_relationshipanalyticsmetadata_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_relationshipanalyticsmetadata_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_relationshipanalyticsmetadata_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_relationshipanalyticsmetadata.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_relationshipanalyticsmetadata.md) on 2026-05-06.