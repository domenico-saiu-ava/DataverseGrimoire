---
logical: "msdyn_channelprovider"
display: "Channel Integration Framework v2.0 Provider"
entitySetName: "msdyn_channelproviders"
primaryId: "msdyn_channelproviderid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Channel Integration Framework v2.0 Provider

Entity that holds the configuration data for a third-party voice channel provider based on Channel Integration Framework v2.0

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_channelprovider` |
| Display name | Channel Integration Framework v2.0 Provider |
| Display (plural) | Channel Integration Framework v2.0 Providers |
| Schema name | `msdyn_channelprovider` |
| Entity set (Web API) | `msdyn_channelproviders` |
| Primary id attribute | `msdyn_channelproviderid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_channelproviders?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_channelproviders(<guid>)
POST /api/data/v9.2/msdyn_channelproviders
PATCH /api/data/v9.2/msdyn_channelproviders(<guid>)
DELETE /api/data/v9.2/msdyn_channelproviders(<guid>)
```

## Attributes

Writable: **21** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_apiversion`, `msdyn_channelproviderId`, `msdyn_channelurl`, `msdyn_customparams`, `msdyn_enableanalytics`, `msdyn_enableoutbound`, `msdyn_Label`, `msdyn_name`, `msdyn_sandboxconfiguration`, `msdyn_SortOrder`, `msdyn_trusteddomain`, `msdyn_UniqueName`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_channelprovider` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_channelprovider_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_channelprovider_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_channelprovider_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_channelprovider_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_channelprovider` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_channelprovider` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_channelprovider` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_channelprovider_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_channelprovider_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_channelprovider_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_channelprovider_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_channelprovider_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_channelprovider_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_channelprovider_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_channelprovider_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_appconfig_msdyn_channelprovider` | [msdyn_channelproviderid](msdyn_channelproviderid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_channelprovider.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_channelprovider.md) on 2026-05-06.