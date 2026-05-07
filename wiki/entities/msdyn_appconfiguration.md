---
logical: "msdyn_appconfiguration"
display: "App profile"
entitySetName: "msdyn_appconfigurations"
primaryId: "msdyn_appconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# App profile

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_appconfiguration` |
| Display name | App profile |
| Display (plural) | App profiles |
| Schema name | `msdyn_appconfiguration` |
| Entity set (Web API) | `msdyn_appconfigurations` |
| Primary id attribute | `msdyn_appconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_appconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_appconfigurations(<guid>)
POST /api/data/v9.2/msdyn_appconfigurations
PATCH /api/data/v9.2/msdyn_appconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_appconfigurations(<guid>)
```

## Attributes

Writable: **16** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_appconfigurationId`, `msdyn_appmoduleuniquename`, `msdyn_description`, `msdyn_name`, `msdyn_productivitypaneuniquename`, `msdyn_profileorder`, `msdyn_UniqueName`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_appconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_appconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_appconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_appconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_appconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_appconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_appconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_appconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_appconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_appconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_appconfiguration_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_appconfiguration_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_appconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_appconfiguration_msdyn_appprofilerolemapping` | _n/a_ | `msdyn_appprofileid` | _n/a_ |
| `msdyn_appconfiguration_msdyn_inboxconfiguration` | _n/a_ | `msdyn_appconfigurationid` | _n/a_ |
| `msdyn_appconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_appconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_appconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_appcopilotconfig_msdyn_appconfig` | _n/a_ | `msdyn_appconfigurationid` | _n/a_ |
| `msdyn_chtappcopilotconfig_msdyn_appconfig` | _n/a_ | `msdyn_appconfigurationid` | _n/a_ |

### Many-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_appconfig_msdyn_channelprovider` | [msdyn_appconfigurationid](msdyn_appconfigurationid.md) | _n/a_ | _n/a_ |
| `msdyn_appconfiguration_applicationextension` | [msdyn_appconfigurationid](msdyn_appconfigurationid.md) | _n/a_ | _n/a_ |
| `msdyn_appconfiguration_sessiontemplate` | [msdyn_appconfigurationid](msdyn_appconfigurationid.md) | _n/a_ | _n/a_ |
| `msdyn_appconfiguration_systemuser` | [msdyn_appconfigurationid](msdyn_appconfigurationid.md) | _n/a_ | _n/a_ |
| `msdyn_msdyn_paneconfig_msdyn_appconfig` | [msdyn_appconfigurationid](msdyn_appconfigurationid.md) | _n/a_ | _n/a_ |
| `msdyn_smartassistconfig_msdyn_appconfig` | [msdyn_appconfigurationid](msdyn_appconfigurationid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_appconfiguration.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_appconfiguration.md) on 2026-05-06.