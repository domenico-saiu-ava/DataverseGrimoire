---
logical: "organizationdatasyncsubscriptionentity"
display: "OrganizationDataSyncSubscriptionEntity"
entitySetName: "organizationdatasyncsubscriptionentities"
primaryId: "organizationdatasyncsubscriptionentityid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# OrganizationDataSyncSubscriptionEntity

## Identity

| Property | Value |
| --- | --- |
| Logical name | `organizationdatasyncsubscriptionentity` |
| Display name | OrganizationDataSyncSubscriptionEntity |
| Display (plural) | OrganizationDataSyncSubscriptionEntities |
| Schema name | `organizationdatasyncsubscriptionentity` |
| Entity set (Web API) | `organizationdatasyncsubscriptionentities` |
| Primary id attribute | `organizationdatasyncsubscriptionentityid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/organizationdatasyncsubscriptionentities?$select=name&$top=10
GET /api/data/v9.2/organizationdatasyncsubscriptionentities(<guid>)
POST /api/data/v9.2/organizationdatasyncsubscriptionentities
PATCH /api/data/v9.2/organizationdatasyncsubscriptionentities(<guid>)
DELETE /api/data/v9.2/organizationdatasyncsubscriptionentities(<guid>)
```

## Attributes

Writable: **14** · Read-only: **8**

### Writable

`BlobPartitionBy`, `ImportSequenceNumber`, `InheritsFromOtc`, `IsActivity`, `name`, `ObjectTypeCode`, `OrganizationDataSyncSubscriptioId`, `OrganizationDataSyncSubscription`, `organizationdatasyncsubscriptionentityId`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_organizationdatasyncsubscriptionentity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_organizationdatasyncsubscriptionentity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_organizationdatasyncsubscriptionentity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_organizationdatasyncsubscriptionentity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_organizationdatasyncsubscriptionentity` | [organization](organization.md) | `organizationid` | `organizationid` |
| `subscription_subscriptionentity` | [organizationdatasyncsubscription](organizationdatasyncsubscription.md) | `organizationdatasyncsubscriptioid` | `organizationdatasyncsubscriptionId` |
| `subscription_subscriptionentity_duplicate` | [organizationdatasyncsubscription](organizationdatasyncsubscription.md) | `organizationdatasyncsubscription` | `organizationdatasyncsubscription` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `organizationdatasyncsubscriptionentity_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `organizationdatasyncsubscriptionentity_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `organizationdatasyncsubscriptionentity_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `organizationdatasyncsubscriptionentity_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `organizationdatasyncsubscriptionentity_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `organizationdatasyncsubscriptionentity_organizationdatasyncstate_entityname` | _n/a_ | `entityname` | _n/a_ |
| `organizationdatasyncsubscriptionentity_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `organizationdatasyncsubscriptionentity_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `organizationdatasyncsubscriptionentity_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [organizationdatasyncsubscriptionentity.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/organizationdatasyncsubscriptionentity.md) on 2026-05-06.