---
logical: "msdyn_favoriteknowledgearticle"
display: "Favorite knowledge article"
entitySetName: "msdyn_favoriteknowledgearticles"
primaryId: "msdyn_favoriteknowledgearticleid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Favorite knowledge article

Entity for favorite knowledge articles

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_favoriteknowledgearticle` |
| Display name | Favorite knowledge article |
| Display (plural) | Favorite knowledge articles |
| Schema name | `msdyn_favoriteknowledgearticle` |
| Entity set (Web API) | `msdyn_favoriteknowledgearticles` |
| Primary id attribute | `msdyn_favoriteknowledgearticleid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_favoriteknowledgearticles?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_favoriteknowledgearticles(<guid>)
POST /api/data/v9.2/msdyn_favoriteknowledgearticles
PATCH /api/data/v9.2/msdyn_favoriteknowledgearticles(<guid>)
DELETE /api/data/v9.2/msdyn_favoriteknowledgearticles(<guid>)
```

## Attributes

Writable: **11** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_favoriteknowledgearticleId`, `msdyn_knowledgearticleid`, `msdyn_name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_favoriteknowledgearticle` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_favoriteknowledgearticle_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_favoriteknowledgearticle_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_favoriteknowledgearticle_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_favoriteknowledgearticle_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_knowledgearticle_favoriteknowledgearticle` | [knowledgearticle](knowledgearticle.md) | `msdyn_knowledgearticleid` | `msdyn_knowledgearticleid` |
| `owner_msdyn_favoriteknowledgearticle` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_favoriteknowledgearticle` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_favoriteknowledgearticle` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_favoriteknowledgearticle_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_favoriteknowledgearticle_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_favoriteknowledgearticle_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_favoriteknowledgearticle_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_favoriteknowledgearticle_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_favoriteknowledgearticle_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_favoriteknowledgearticle_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_favoriteknowledgearticle_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_favoriteknowledgearticle.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_favoriteknowledgearticle.md) on 2026-05-06.