---
logical: "organizationdatasyncsubscription"
display: "OrganizationDataSyncSubscription"
entitySetName: "organizationdatasyncsubscriptions"
primaryId: "organizationdatasyncsubscriptionid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# OrganizationDataSyncSubscription

## Identity

| Property | Value |
| --- | --- |
| Logical name | `organizationdatasyncsubscription` |
| Display name | OrganizationDataSyncSubscription |
| Display (plural) | OrganizationDataSyncSubscriptions |
| Schema name | `organizationdatasyncsubscription` |
| Entity set (Web API) | `organizationdatasyncsubscriptions` |
| Primary id attribute | `organizationdatasyncsubscriptionid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/organizationdatasyncsubscriptions?$select=name&$top=10
GET /api/data/v9.2/organizationdatasyncsubscriptions(<guid>)
POST /api/data/v9.2/organizationdatasyncsubscriptions
PATCH /api/data/v9.2/organizationdatasyncsubscriptions(<guid>)
DELETE /api/data/v9.2/organizationdatasyncsubscriptions(<guid>)
```

## Attributes

Writable: **30** · Read-only: **8**

### Writable

`AadApplicationId`, `BlobPartitionBy`, `CanSyncAllMetadata`, `DataEndpointPostingType`, `DataProcessingType`, `EndpointSettings`, `EntityFilters`, `EntitySettings`, `FullSyncOnly`, `ImportSequenceNumber`, `IsOutOfBoxSubscription`, `MigrationState`, `name`, `NeedCopyAttachmentsToBlob`, `NeedToCopyFilesToBlob`, `NewEntities`, `NewFnoTables`, `organizationdatasyncsubscriptionId`, `OverriddenCreatedOn`, `PartnerPrefix`, `statecode`, `statuscode`, `SubscribedToAllEntities`, `SubscriptionEndpointStatus`, `SubscriptionEntities`, `SubscriptionFnoTables`, `TimeZoneRuleVersionNumber`, `UnsubscribedEntities`, `UnsubscribedFnoTables`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_organizationdatasyncsubscription_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_organizationdatasyncsubscription_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_organizationdatasyncsubscription_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_organizationdatasyncsubscription_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_organizationdatasyncsubscription` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `organizationdatasyncsubscription_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `organizationdatasyncsubscription_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `organizationdatasyncsubscription_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `organizationdatasyncsubscription_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `organizationdatasyncsubscription_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `organizationdatasyncsubscription_organizationdatasyncfnostate_organizationdatasyncsubscriptionid` | _n/a_ | `organizationdatasyncsubscriptionid` | _n/a_ |
| `organizationdatasyncsubscription_organizationdatasyncstate_organizationdatasyncsubscriptionid` | _n/a_ | `organizationdatasyncsubscriptionid` | _n/a_ |
| `organizationdatasyncsubscription_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `organizationdatasyncsubscription_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `organizationdatasyncsubscription_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `subscription_subscriptionentity` | _n/a_ | `organizationdatasyncsubscriptioid` | _n/a_ |
| `subscription_subscriptionentity_duplicate` | _n/a_ | `organizationdatasyncsubscription` | _n/a_ |
| `subscription_subscriptionfnotable` | _n/a_ | `organizationdatasyncsubscriptioid` | _n/a_ |
| `subscription_subscriptionfnotable_duplicate` | _n/a_ | `organizationdatasyncsubscription` | _n/a_ |


## Source

Generated from [organizationdatasyncsubscription.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/organizationdatasyncsubscription.md) on 2026-05-06.