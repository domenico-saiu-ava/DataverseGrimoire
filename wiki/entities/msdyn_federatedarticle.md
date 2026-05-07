---
logical: "msdyn_federatedarticle"
display: "Knowledge Federated Article"
entitySetName: "msdyn_federatedarticles"
primaryId: "msdyn_federatedarticleid"
primaryName: "msdyn_title"
tableType: "Standard"
ownership: "UserOwned"
---

# Knowledge Federated Article

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_federatedarticle` |
| Display name | Knowledge Federated Article |
| Display (plural) | Knowledge Federated Articles |
| Schema name | `msdyn_federatedarticle` |
| Entity set (Web API) | `msdyn_federatedarticles` |
| Primary id attribute | `msdyn_federatedarticleid` |
| Primary name attribute | `msdyn_title` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_federatedarticles?$select=msdyn_title&$top=10
GET /api/data/v9.2/msdyn_federatedarticles(<guid>)
POST /api/data/v9.2/msdyn_federatedarticles
PATCH /api/data/v9.2/msdyn_federatedarticles(<guid>)
DELETE /api/data/v9.2/msdyn_federatedarticles(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_federatedarticleId`, `msdyn_searchproviderarticleid`, `msdyn_searchproviderid`, `msdyn_title`, `msdyn_url`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_federatedarticle` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `IK_msdyn_kmfederatedsearchconfig_msdyn_federatedarticle_searchproviderid` | [msdyn_kmfederatedsearchconfig](msdyn_kmfederatedsearchconfig.md) | `msdyn_searchproviderid` | `msdyn_searchproviderid` |
| `lk_msdyn_federatedarticle_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_federatedarticle_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_federatedarticle_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_federatedarticle_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_federatedarticle` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_federatedarticle` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_federatedarticle` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_federatedarticle_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_federatedarticle_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_federatedarticle_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_federatedarticle_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_federatedarticle_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_federatedarticle_msdyn_federatedarticleincident_federatedarticleId` | _n/a_ | `msdyn_federatedarticleid` | _n/a_ |
| `msdyn_federatedarticle_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_federatedarticle_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_federatedarticle_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_federatedarticle.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_federatedarticle.md) on 2026-05-06.