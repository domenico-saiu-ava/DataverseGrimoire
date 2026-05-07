---
logical: "canvasapp"
display: "Canvas App"
entitySetName: "canvasapps"
primaryId: "canvasappid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Canvas App

An application built through a canvas-based editing experience.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `canvasapp` |
| Display name | Canvas App |
| Display (plural) | Canvas Apps |
| Schema name | `CanvasApp` |
| Entity set (Web API) | `canvasapps` |
| Primary id attribute | `canvasappid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/canvasapps?$select=name&$top=10
GET /api/data/v9.2/canvasapps(<guid>)
POST /api/data/v9.2/canvasapps
PATCH /api/data/v9.2/canvasapps(<guid>)
DELETE /api/data/v9.2/canvasapps(<guid>)
```

## Attributes

Writable: **40** · Read-only: **27**

### Writable

`AADCreatedById`, `AADLastModifiedById`, `AADLastPublishedById`, `AdminControlBypassConsent`, `AppComponentDependencies`, `AppComponents`, `AppOpenUri`, `AppVersion`, `AuthorizationReferences`, `BackgroundColor`, `BypassConsent`, `CanConsumeAppPass`, `CanvasAppId`, `CanvasAppType`, `CdsDependencies`, `CommitMessage`, `ConnectionReferences`, `CreatedByClientVersion`, `CreatedTime`, `DatabaseReferences`, `Description`, `DisplayName`, `EmbeddedApp`, `GalleryItemId`, `IntroducedVersion`, `IsCdsUpgraded`, `IsCustomizable`, `IsFeaturedApp`, `IsHeroApp`, `IsHidden`, `LastModifiedTime`, `LastPublishTime`, `MinClientVersion`, `Name`, `OwnerId`, `OwnerIdType`, `Publisher`, `Status`, `Tags`, `UniqueCanvasAppId`

### Read-only

`Assets`, `Assets_Name`, `BackgroundImage`, `BackgroundImage_Name`, `CanvasAppRowId`, `ComponentState`, `Document`, `Document_Name`, `IsManaged`, `LargeIcon`, `LargeIcon_Name`, `MediumIcon`, `MediumIcon_Name`, `OverwriteTime`, `OwnerIdName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SmallIcon`, `SmallIcon_Name`, `SolutionId`, `SupportingSolutionId`, `TeamsIcon`, `TeamsIcon_Name`, `VersionNumber`, `WideIcon`, `WideIcon_Name`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `businessunit_canvasapp` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_CanvasApp_Assets` | [fileattachment](fileattachment.md) | `assets` | `assets` |
| `FileAttachment_CanvasApp_BackgroundImage` | [fileattachment](fileattachment.md) | `background_image` | `backgroundimage` |
| `FileAttachment_CanvasApp_Document` | [fileattachment](fileattachment.md) | `document` | `document` |
| `FileAttachment_CanvasApp_LargeIcon` | [fileattachment](fileattachment.md) | `large_icon` | `largeicon` |
| `FileAttachment_CanvasApp_MediumIcon` | [fileattachment](fileattachment.md) | `medium_icon` | `mediumicon` |
| `FileAttachment_CanvasApp_SmallIcon` | [fileattachment](fileattachment.md) | `small_icon` | `smallicon` |
| `FileAttachment_CanvasApp_TeamsIcon` | [fileattachment](fileattachment.md) | `teams_icon` | `teamsicon` |
| `FileAttachment_CanvasApp_WideIcon` | [fileattachment](fileattachment.md) | `wide_icon` | `wideicon` |
| `FK_CanvasApp_Solution` | [solution](solution.md) | `solutionid` | `FK_CanvasApp_Solution` |
| `owner_canvasapp` | [owner](owner.md) | `ownerid` | `ownerid` |

### One-to-Many (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `canvasapp_appaction_onclickeventformulacomponentlibraryid` | _n/a_ | `onclickeventformulacomponentlibraryid` | _n/a_ |
| `canvasapp_appaction_visibilityformulacomponentlibraryid` | _n/a_ | `visibilityformulacomponentlibraryid` | _n/a_ |
| `canvasapp_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `canvasapp_msdyn_mobileapp_msdyn_primaryPublishedAppName` | _n/a_ | `msdyn_primarypublishedappname` | _n/a_ |


## Source

Generated from [canvasapp.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/canvasapp.md) on 2026-05-06.