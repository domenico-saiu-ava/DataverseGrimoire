---
logical: "organizationdatasyncsubscriptionfnotable"
display: "OrganizationDataSyncSubscriptionFnoTable"
entitySetName: "organizationdatasyncsubscriptionfnotables"
primaryId: "organizationdatasyncsubscriptionfnotableid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# OrganizationDataSyncSubscriptionFnoTable

## Identity

| Property | Value |
| --- | --- |
| Logical name | `organizationdatasyncsubscriptionfnotable` |
| Display name | OrganizationDataSyncSubscriptionFnoTable |
| Display (plural) | OrganizationDataSyncSubscriptionFnoTables |
| Schema name | `organizationdatasyncsubscriptionfnotable` |
| Entity set (Web API) | `organizationdatasyncsubscriptionfnotables` |
| Primary id attribute | `organizationdatasyncsubscriptionfnotableid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/organizationdatasyncsubscriptionfnotables?$select=name&$top=10
GET /api/data/v9.2/organizationdatasyncsubscriptionfnotables(<guid>)
POST /api/data/v9.2/organizationdatasyncsubscriptionfnotables
PATCH /api/data/v9.2/organizationdatasyncsubscriptionfnotables(<guid>)
DELETE /api/data/v9.2/organizationdatasyncsubscriptionfnotables(<guid>)
```

## Attributes

Writable: **14** · Read-only: **8**

### Writable

`BlobPartitionBy`, `ImportSequenceNumber`, `InheritsFromOtc`, `IsActivity`, `name`, `ObjectTypeCode`, `OrganizationDataSyncSubscriptioId`, `OrganizationDataSyncSubscription`, `organizationdatasyncsubscriptionfnotableId`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_organizationdatasyncsubscriptionfnotable_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_organizationdatasyncsubscriptionfnotable_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_organizationdatasyncsubscriptionfnotable_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_organizationdatasyncsubscriptionfnotable_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_organizationdatasyncsubscriptionfnotable` | [organization](organization.md) | `organizationid` | `organizationid` |
| `subscription_subscriptionfnotable` | [organizationdatasyncsubscription](organizationdatasyncsubscription.md) | `organizationdatasyncsubscriptioid` | `organizationdatasyncsubscriptionId` |
| `subscription_subscriptionfnotable_duplicate` | [organizationdatasyncsubscription](organizationdatasyncsubscription.md) | `organizationdatasyncsubscription` | `organizationdatasyncsubscription` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `organizationdatasyncsubscriptionfnotable_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `organizationdatasyncsubscriptionfnotable_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `organizationdatasyncsubscriptionfnotable_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `organizationdatasyncsubscriptionfnotable_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `organizationdatasyncsubscriptionfnotable_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `organizationdatasyncsubscriptionfnotable_organizationdatasyncfnostate_entityname` | _n/a_ | `entityname` | _n/a_ |
| `organizationdatasyncsubscriptionfnotable_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `organizationdatasyncsubscriptionfnotable_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `organizationdatasyncsubscriptionfnotable_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [organizationdatasyncsubscriptionfnotable.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/organizationdatasyncsubscriptionfnotable.md) on 2026-05-06.