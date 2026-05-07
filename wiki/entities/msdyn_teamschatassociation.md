---
logical: "msdyn_teamschatassociation"
display: "Microsoft Teams chat association entity"
entitySetName: "msdyn_teamschatassociations"
primaryId: "msdyn_teamschatassociationid"
primaryName: "msdyn_teamschatassociationname"
tableType: "Standard"
ownership: "None"
---

# Microsoft Teams chat association entity

For internal use only. Entity which stores association data of Dynamics 365 records with Microsoft Teams chat

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_teamschatassociation` |
| Display name | Microsoft Teams chat association entity |
| Display (plural) | Microsoft Teams chat association entities |
| Schema name | `msdyn_teamschatassociation` |
| Entity set (Web API) | `msdyn_teamschatassociations` |
| Primary id attribute | `msdyn_teamschatassociationid` |
| Primary name attribute | `msdyn_teamschatassociationname` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_teamschatassociations?$select=msdyn_teamschatassociationname&$top=10
GET /api/data/v9.2/msdyn_teamschatassociations(<guid>)
POST /api/data/v9.2/msdyn_teamschatassociations
PATCH /api/data/v9.2/msdyn_teamschatassociations(<guid>)
DELETE /api/data/v9.2/msdyn_teamschatassociations(<guid>)
```

## Attributes

Writable: **12** · Read-only: **7**

### Writable

`ImportSequenceNumber`, `msdyn_entityrecordstate`, `msdyn_regardingobjectid`, `msdyn_regardingobjectname`, `msdyn_teamschatassociationId`, `msdyn_teamschatassociationname`, `msdyn_teamschatid`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `VersionNumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_teamschatassociation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_teamschatassociation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_teamschatassociation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_teamschatassociation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_teamschatassociation_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_teamschatassociation_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_teamschatassociation_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_teamschatassociation_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_teamschatassociation_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_teamschatassociation_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_teamschatassociation.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_teamschatassociation.md) on 2026-05-06.