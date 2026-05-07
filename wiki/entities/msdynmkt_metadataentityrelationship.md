---
logical: "msdynmkt_metadataentityrelationship"
display: "Metadata Entity Relationship"
entitySetName: "msdynmkt_metadataentityrelationships"
primaryId: "msdynmkt_metadataentityrelationshipid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Metadata Entity Relationship

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_metadataentityrelationship` |
| Display name | Metadata Entity Relationship |
| Display (plural) | Metadata Entity Relationships |
| Schema name | `msdynmkt_metadataentityrelationship` |
| Entity set (Web API) | `msdynmkt_metadataentityrelationships` |
| Primary id attribute | `msdynmkt_metadataentityrelationshipid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_metadataentityrelationships?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_metadataentityrelationships(<guid>)
POST /api/data/v9.2/msdynmkt_metadataentityrelationships
PATCH /api/data/v9.2/msdynmkt_metadataentityrelationships(<guid>)
DELETE /api/data/v9.2/msdynmkt_metadataentityrelationships(<guid>)
```

## Attributes

Writable: **15** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdynmkt_hastomanyrelationship`, `msdynmkt_hastoonerelationship`, `msdynmkt_metadataentityrelationshipId`, `msdynmkt_name`, `msdynmkt_primaryentity`, `msdynmkt_relatedentity`, `msdynmkt_sourcetype`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdynmkt_metadataentityrelationship` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdynmkt_metadataentityrelationship_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_metadataentityrelationship_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_metadataentityrelationship_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_metadataentityrelationship_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdynmkt_metadataentityrelationship` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdynmkt_metadataentityrelationship` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdynmkt_metadataentityrelationship` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_metadataentityrelationship_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_metadataentityrelationship_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_metadataentityrelationship_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdynmkt_metadataentityrelationship_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdynmkt_metadataentityrelationship_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_metadataentityrelationship_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdynmkt_metadataentityrelationship_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_metadataentityrelationship_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdynmkt_metadataentityrelationship.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdynmkt_metadataentityrelationship.md) on 2026-05-06.