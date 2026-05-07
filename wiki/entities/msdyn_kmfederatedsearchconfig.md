---
logical: "msdyn_kmfederatedsearchconfig"
display: "Search provider"
entitySetName: "msdyn_kmfederatedsearchconfigs"
primaryId: "msdyn_kmfederatedsearchconfigid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Search provider

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_kmfederatedsearchconfig` |
| Display name | Search provider |
| Display (plural) | Search providers |
| Schema name | `msdyn_kmfederatedsearchconfig` |
| Entity set (Web API) | `msdyn_kmfederatedsearchconfigs` |
| Primary id attribute | `msdyn_kmfederatedsearchconfigid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_kmfederatedsearchconfigs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_kmfederatedsearchconfigs(<guid>)
POST /api/data/v9.2/msdyn_kmfederatedsearchconfigs
PATCH /api/data/v9.2/msdyn_kmfederatedsearchconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_kmfederatedsearchconfigs(<guid>)
```

## Attributes

Writable: **15** · Read-only: **12**

### Writable

`ConnectionId`, `ImportSequenceNumber`, `msdyn_Description`, `msdyn_kmfederatedsearchconfigId`, `msdyn_Name`, `Organization`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `SearchType`, `SharepointURL`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_kmfederatedsearchconfig` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_kmfederatedsearchconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_kmfederatedsearchconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_kmfederatedsearchconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_kmfederatedsearchconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_kmfederatedsearchconfig` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_kmfederatedsearchconfig` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_kmfederatedsearchconfig` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `IK_msdyn_kmfederatedsearchconfig_msdyn_federatedarticle_searchproviderid` | _n/a_ | `msdyn_searchproviderid` | _n/a_ |
| `msdyn_kmfederatedsearchconfig_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_kmfederatedsearchconfig_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_kmfederatedsearchconfig_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_kmfederatedsearchconfig_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_kmfederatedsearchconfig_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_kmfederatedsearchconfig_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_kmfederatedsearchconfig_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_kmfederatedsearchconfig_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_kmfederatedsearchconfig.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_kmfederatedsearchconfig.md) on 2026-05-06.