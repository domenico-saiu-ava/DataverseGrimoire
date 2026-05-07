---
logical: "msdyn_mobileapp"
display: "Mobile App"
entitySetName: "msdyn_mobileapps"
primaryId: "msdyn_mobileappid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **45** · Read-only: **34**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_actionbuttonhighlight`, `msdyn_adalclientid`, `msdyn_adalredirecturi`, `msdyn_androidappcenterapitoken`, `msdyn_androidappcenterapitokensaved`, `msdyn_appcenterappidaab`, `msdyn_appcenterappidapk`, `msdyn_appcenterappidipa`, `msdyn_azureblobstorageaccountname`, `msdyn_azureblobstoragecontainername`, `msdyn_branch`, `msdyn_builddetails`, `msdyn_bundleidentifier`, `msdyn_buttoncolor`, `msdyn_customdimensions`, `msdyn_displayname`, `msdyn_fillcolor`, `msdyn_headingtextcolor`, `msdyn_hyperlinkcolor`, `msdyn_iosappcenterapitoken`, `msdyn_iosappcenterapitokensaved`, `msdyn_iosenterprisesigningenabled`, `msdyn_isappsigningenabled`, `msdyn_keyvaulturi`, `msdyn_mobileappid`, `msdyn_orgname`, `msdyn_platformtype`, `msdyn_primarypublishedappname`, `msdyn_pushnotificationsenabled_android`, `msdyn_pushnotificationsenabled_ios`, `msdyn_recentbuild`, `msdyn_secondaryapps`, `msdyn_secondarypublishedappnames`, `msdyn_statusbarcontentcolormode`, `msdyn_storagetypeforupload`, `msdyn_uniquename`, `name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_appicon1024x1024`, `msdyn_appicon120x120`, `msdyn_appicon152x152`, `msdyn_appicon167x167`, `msdyn_appicon180x180`, `msdyn_appiconhdpi`, `msdyn_appiconmdpi`, `msdyn_appiconxdpi`, `msdyn_appiconxxhdpi`, `msdyn_appiconxxxhdpi`, `msdyn_launchappresources`, `msdyn_mobileappdefinitionandroid`, `msdyn_mobileappdefinitionios`, `msdyn_prodev_custompackage`, `msdyn_pushnotificationsandroidjson`, `msdyn_pushnotificationsiosplist`, `msdyn_tenantsplashimage`, `msdyn_tenantwelcomeimage`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (27)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_mobileapp_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_mobileapp_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_mobileapp_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_mobileapp_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_mobileapp` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_mobileapp` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_mobileapp` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_mobileapp` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_mobileapp_msdyn_appIcon120x120` | [fileattachment](fileattachment.md) | `msdyn_appicon120x120` | `msdyn_appicon120x120` |
| `FileAttachment_msdyn_mobileapp_msdyn_appIcon180x180` | [fileattachment](fileattachment.md) | `msdyn_appicon180x180` | `msdyn_appicon180x180` |
| `FileAttachment_msdyn_mobileapp_msdyn_appIcon152x152` | [fileattachment](fileattachment.md) | `msdyn_appicon152x152` | `msdyn_appicon152x152` |
| `FileAttachment_msdyn_mobileapp_msdyn_appIcon167x167` | [fileattachment](fileattachment.md) | `msdyn_appicon167x167` | `msdyn_appicon167x167` |
| `FileAttachment_msdyn_mobileapp_msdyn_appIcon1024x1024` | [fileattachment](fileattachment.md) | `msdyn_appicon1024x1024` | `msdyn_appicon1024x1024` |
| `FileAttachment_msdyn_mobileapp_msdyn_tenantSplashImage` | [fileattachment](fileattachment.md) | `msdyn_tenantsplashimage` | `msdyn_tenantsplashimage` |
| `FileAttachment_msdyn_mobileapp_msdyn_tenantWelcomeImage` | [fileattachment](fileattachment.md) | `msdyn_tenantwelcomeimage` | `msdyn_tenantwelcomeimage` |
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
| `canvasapp_msdyn_mobileapp_msdyn_primaryPublishedAppName` | [canvasapp](canvasapp.md) | `msdyn_primarypublishedappname` | `msdyn_primaryPublishedAppName` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_mobileapp_msdyn_powerappswrapbuild_msdyn_mobileappid` | [msdyn_mobileapp](msdyn_mobileapp.md) | `msdyn_mobileappid` | `msdyn_mobileapp_msdyn_powerappswrapbuild_msdyn_mobileappid` |
| `msdyn_mobileapp_SyncErrors` | [msdyn_mobileapp](msdyn_mobileapp.md) | `regardingobjectid` | `regardingobjectid_msdyn_mobileapp` |
| `msdyn_mobileapp_DuplicateMatchingRecord` | [msdyn_mobileapp](msdyn_mobileapp.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_mobileapp` |
| `msdyn_mobileapp_DuplicateBaseRecord` | [msdyn_mobileapp](msdyn_mobileapp.md) | `baserecordid` | `baserecordid_msdyn_mobileapp` |
| `msdyn_mobileapp_AsyncOperations` | [msdyn_mobileapp](msdyn_mobileapp.md) | `regardingobjectid` | `regardingobjectid_msdyn_mobileapp` |
| `msdyn_mobileapp_MailboxTrackingFolders` | [msdyn_mobileapp](msdyn_mobileapp.md) | `regardingobjectid` | `regardingobjectid_msdyn_mobileapp` |
| `msdyn_mobileapp_UserEntityInstanceDatas` | [msdyn_mobileapp](msdyn_mobileapp.md) | `objectid` | `objectid_msdyn_mobileapp` |
| `msdyn_mobileapp_ProcessSession` | [msdyn_mobileapp](msdyn_mobileapp.md) | `regardingobjectid` | `regardingobjectid_msdyn_mobileapp` |
| `msdyn_mobileapp_BulkDeleteFailures` | [msdyn_mobileapp](msdyn_mobileapp.md) | `regardingobjectid` | `regardingobjectid_msdyn_mobileapp` |
| `msdyn_mobileapp_PrincipalObjectAttributeAccesses` | [msdyn_mobileapp](msdyn_mobileapp.md) | `objectid` | `objectid_msdyn_mobileapp` |
| `msdyn_mobileapp_FileAttachments` | [msdyn_mobileapp](msdyn_mobileapp.md) | `objectid` | `objectid_msdyn_mobileapp` |


## Source

Generated from [msdyn_mobileapp (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_mobileapp')) on 2026-05-07.