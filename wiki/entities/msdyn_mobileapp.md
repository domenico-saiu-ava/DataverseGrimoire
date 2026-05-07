---
logical: "msdyn_mobileapp"
display: "Mobile App"
entitySetName: "msdyn_mobileapps"
primaryId: "msdyn_mobileappid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Mobile App

Mobile App

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_mobileapp` |
| Display name | Mobile App |
| Display (plural) | Mobile App |
| Schema name | `msdyn_mobileapp` |
| Entity set (Web API) | `msdyn_mobileapps` |
| Primary id attribute | `msdyn_mobileappid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_mobileapps?$select=name&$top=10
GET /api/data/v9.2/msdyn_mobileapps(<guid>)
POST /api/data/v9.2/msdyn_mobileapps
PATCH /api/data/v9.2/msdyn_mobileapps(<guid>)
DELETE /api/data/v9.2/msdyn_mobileapps(<guid>)
```

## Attributes

Writable: **46** · Read-only: **54**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_actionButtonHighlight`, `msdyn_adalClientId`, `msdyn_adalRedirectUri`, `msdyn_AndroidAppCenterAPIToken`, `msdyn_AndroidAppCenterAPITokenSaved`, `msdyn_appCenterAppIdAab`, `msdyn_appCenterAppIdApk`, `msdyn_appCenterAppIdIpa`, `msdyn_azureBlobStorageAccountName`, `msdyn_azureBlobStorageContainerName`, `msdyn_branch`, `msdyn_buildDetails`, `msdyn_bundleIdentifier`, `msdyn_buttonColor`, `msdyn_customDimensions`, `msdyn_displayName`, `msdyn_fillColor`, `msdyn_headingTextColor`, `msdyn_hyperLinkColor`, `msdyn_IOSAppCenterAPIToken`, `msdyn_IOSAppCenterAPITokenSaved`, `msdyn_iosEnterpriseSigningEnabled`, `msdyn_isAppSigningEnabled`, `msdyn_keyVaultUri`, `msdyn_mobileappId`, `msdyn_orgName`, `msdyn_platformType`, `msdyn_primaryPublishedAppName`, `msdyn_pushNotificationsEnabled_android`, `msdyn_pushNotificationsEnabled_ios`, `msdyn_recentBuild`, `msdyn_secondaryApps`, `msdyn_secondaryPublishedAppNames`, `msdyn_statusBarContentColorMode`, `msdyn_storageTypeForUpload`, `msdyn_UniqueName`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_appIcon1024x1024`, `msdyn_appIcon1024x1024_Name`, `msdyn_appIcon120x120`, `msdyn_appIcon120x120_Name`, `msdyn_appIcon152x152`, `msdyn_appIcon152x152_Name`, `msdyn_appIcon167x167`, `msdyn_appIcon167x167_Name`, `msdyn_appIcon180x180`, `msdyn_appIcon180x180_Name`, `msdyn_appIconHdpi`, `msdyn_appIconHdpi_Name`, `msdyn_appIconMdpi`, `msdyn_appIconMdpi_Name`, `msdyn_appIconXdpi`, `msdyn_appIconXdpi_Name`, `msdyn_appIconXxhdpi`, `msdyn_appIconXxhdpi_Name`, `msdyn_appIconXxxhdpi`, `msdyn_appIconXxxhdpi_Name`, `msdyn_launchAppResources`, `msdyn_launchAppResources_Name`, `msdyn_mobileAppDefinitionAndroid`, `msdyn_mobileAppDefinitionAndroid_Name`, `msdyn_mobileAppDefinitionIOS`, `msdyn_mobileAppDefinitionIOS_Name`, `msdyn_proDev_customPackage`, `msdyn_proDev_customPackage_Name`, `msdyn_pushNotificationsAndroidJson`, `msdyn_pushNotificationsAndroidJson_Name`, `msdyn_pushNotificationsIosPlist`, `msdyn_pushNotificationsIosPlist_Name`, `msdyn_tenantSplashImage`, `msdyn_tenantSplashImage_Name`, `msdyn_tenantWelcomeImage`, `msdyn_tenantWelcomeImage_Name`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (27)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_mobileapp` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `canvasapp_msdyn_mobileapp_msdyn_primaryPublishedAppName` | [canvasapp](canvasapp.md) | `msdyn_primarypublishedappname` | `msdyn_primaryPublishedAppName` |
| `FileAttachment_msdyn_mobileapp_msdyn_appIcon1024x1024` | [fileattachment](fileattachment.md) | `msdyn_appicon1024x1024` | `msdyn_appicon1024x1024` |
| `FileAttachment_msdyn_mobileapp_msdyn_appIcon120x120` | [fileattachment](fileattachment.md) | `msdyn_appicon120x120` | `msdyn_appicon120x120` |
| `FileAttachment_msdyn_mobileapp_msdyn_appIcon152x152` | [fileattachment](fileattachment.md) | `msdyn_appicon152x152` | `msdyn_appicon152x152` |
| `FileAttachment_msdyn_mobileapp_msdyn_appIcon167x167` | [fileattachment](fileattachment.md) | `msdyn_appicon167x167` | `msdyn_appicon167x167` |
| `FileAttachment_msdyn_mobileapp_msdyn_appIcon180x180` | [fileattachment](fileattachment.md) | `msdyn_appicon180x180` | `msdyn_appicon180x180` |
| `FileAttachment_msdyn_mobileapp_msdyn_appIconHdpi` | [fileattachment](fileattachment.md) | `msdyn_appiconhdpi` | `msdyn_appiconhdpi` |
| `FileAttachment_msdyn_mobileapp_msdyn_appIconMdpi` | [fileattachment](fileattachment.md) | `msdyn_appiconmdpi` | `msdyn_appiconmdpi` |
| `FileAttachment_msdyn_mobileapp_msdyn_appIconXdpi` | [fileattachment](fileattachment.md) | `msdyn_appiconxdpi` | `msdyn_appiconxdpi` |
| `FileAttachment_msdyn_mobileapp_msdyn_appIconXxhdpi` | [fileattachment](fileattachment.md) | `msdyn_appiconxxhdpi` | `msdyn_appiconxxhdpi` |
| `FileAttachment_msdyn_mobileapp_msdyn_appIconXxxhdpi` | [fileattachment](fileattachment.md) | `msdyn_appiconxxxhdpi` | `msdyn_appiconxxxhdpi` |
| `FileAttachment_msdyn_mobileapp_msdyn_launchAppResources` | [fileattachment](fileattachment.md) | `msdyn_launchappresources` | `msdyn_launchappresources` |
| `FileAttachment_msdyn_mobileapp_msdyn_mobileAppDefinitionAndroid` | [fileattachment](fileattachment.md) | `msdyn_mobileappdefinitionandroid` | `msdyn_mobileappdefinitionandroid` |
| `FileAttachment_msdyn_mobileapp_msdyn_mobileAppDefinitionIOS` | [fileattachment](fileattachment.md) | `msdyn_mobileappdefinitionios` | `msdyn_mobileappdefinitionios` |
| `FileAttachment_msdyn_mobileapp_msdyn_proDev_customPackage` | [fileattachment](fileattachment.md) | `msdyn_prodev_custompackage` | `msdyn_prodev_custompackage` |
| `FileAttachment_msdyn_mobileapp_msdyn_pushNotificationsAndroidJson` | [fileattachment](fileattachment.md) | `msdyn_pushnotificationsandroidjson` | `msdyn_pushnotificationsandroidjson` |
| `FileAttachment_msdyn_mobileapp_msdyn_pushNotificationsIosPlist` | [fileattachment](fileattachment.md) | `msdyn_pushnotificationsiosplist` | `msdyn_pushnotificationsiosplist` |
| `FileAttachment_msdyn_mobileapp_msdyn_tenantSplashImage` | [fileattachment](fileattachment.md) | `msdyn_tenantsplashimage` | `msdyn_tenantsplashimage` |
| `FileAttachment_msdyn_mobileapp_msdyn_tenantWelcomeImage` | [fileattachment](fileattachment.md) | `msdyn_tenantwelcomeimage` | `msdyn_tenantwelcomeimage` |
| `lk_msdyn_mobileapp_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_mobileapp_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_mobileapp_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_mobileapp_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_mobileapp` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_mobileapp` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_mobileapp` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_mobileapp_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_mobileapp_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_mobileapp_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_mobileapp_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_mobileapp_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_mobileapp_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_mobileapp_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_mobileapp_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_mobileapp_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_mobileapp.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_mobileapp.md) on 2026-05-06.