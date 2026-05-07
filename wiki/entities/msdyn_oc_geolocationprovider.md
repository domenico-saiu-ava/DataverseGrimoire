---
logical: "msdyn_oc_geolocationprovider"
display: "Geo Location Provider"
entitySetName: "msdyn_oc_geolocationproviders"
primaryId: "msdyn_oc_geolocationproviderid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Geo Location Provider

Geo Location Providers

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_oc_geolocationprovider` |
| Display name | Geo Location Provider |
| Display (plural) | Geo Location Providers |
| Schema name | `msdyn_oc_geolocationprovider` |
| Entity set (Web API) | `msdyn_oc_geolocationproviders` |
| Primary id attribute | `msdyn_oc_geolocationproviderid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_oc_geolocationproviders?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_oc_geolocationproviders(<guid>)
POST /api/data/v9.2/msdyn_oc_geolocationproviders
PATCH /api/data/v9.2/msdyn_oc_geolocationproviders(<guid>)
DELETE /api/data/v9.2/msdyn_oc_geolocationproviders(<guid>)
```

## Attributes

Writable: **15** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_name`, `msdyn_oc_geolocationproviderId`, `msdyn_providerapikey`, `msdyn_providerapikeyversion`, `msdyn_providername`, `msdyn_secureproviderapikey`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_oc_geolocationprovider` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_oc_geolocationprovider_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_oc_geolocationprovider_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_oc_geolocationprovider_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_oc_geolocationprovider_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_oc_geolocationprovider` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_oc_geolocationprovider` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_oc_geolocationprovider` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_oc_geolocationprovider_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_oc_geolocationprovider_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_oc_geolocationprovider_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_oc_geolocationprovider_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_oc_geolocationprovider_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_oc_geolocationprovider_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_oc_geolocationprovider_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_oc_geolocationprovider_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_oc_geolocationprovider.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_oc_geolocationprovider.md) on 2026-05-06.