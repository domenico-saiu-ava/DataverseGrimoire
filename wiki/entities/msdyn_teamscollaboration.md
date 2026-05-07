---
logical: "msdyn_teamscollaboration"
display: "Microsoft Teams Collaboration entity"
entitySetName: "msdyn_teamscollaborations"
primaryId: "msdyn_teamscollaborationid"
primaryName: "msdyn_teamname"
tableType: "Standard"
ownership: "None"
---

# Microsoft Teams Collaboration entity

Entity which stores collaboration data of Dynamics 365 with Microsoft Teams

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_teamscollaboration` |
| Display name | Microsoft Teams Collaboration entity |
| Display (plural) | Microsoft Teams Collaboration entities |
| Schema name | `msdyn_TeamsCollaboration` |
| Entity set (Web API) | `msdyn_teamscollaborations` |
| Primary id attribute | `msdyn_teamscollaborationid` |
| Primary name attribute | `msdyn_teamname` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_teamscollaborations?$select=msdyn_teamname&$top=10
GET /api/data/v9.2/msdyn_teamscollaborations(<guid>)
POST /api/data/v9.2/msdyn_teamscollaborations
PATCH /api/data/v9.2/msdyn_teamscollaborations(<guid>)
DELETE /api/data/v9.2/msdyn_teamscollaborations(<guid>)
```

## Attributes

Writable: **23** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_AppId`, `msdyn_ChannelFolderRelativeUrl`, `msdyn_ChannelId`, `msdyn_ChannelName`, `msdyn_channelType`, `msdyn_ContentUrl`, `msdyn_GroupId`, `msdyn_pipedEntityId`, `msdyn_TeamId`, `msdyn_TeamName`, `msdyn_TeamsCollaborationId`, `msdyn_TeamSiteUrl`, `msdyn_TenantId`, `msdyn_WebUrl`, `OverriddenCreatedOn`, `RegardingObjectId`, `RegardingObjectTypeCode`, `RegardingObjectTypeName`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_teamscollaboration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_teamscollaboration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_teamscollaboration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_teamscollaboration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_teamscollaboration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_teamscollaboration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_teamscollaboration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_teamscollaboration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_teamscollaboration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_teamscollaboration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_teamscollaboration.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_teamscollaboration.md) on 2026-05-06.