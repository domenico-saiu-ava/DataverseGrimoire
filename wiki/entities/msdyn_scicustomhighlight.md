---
logical: "msdyn_scicustomhighlight"
display: "Custom Highlight"
entitySetName: "msdyn_scicustomhighlights"
primaryId: "msdyn_scicustomhighlightid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Custom Highlight

Highlight of relevant conversation section

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_scicustomhighlight` |
| Display name | Custom Highlight |
| Display (plural) | Custom Highlights |
| Schema name | `msdyn_SciCustomHighlight` |
| Entity set (Web API) | `msdyn_scicustomhighlights` |
| Primary id attribute | `msdyn_scicustomhighlightid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_scicustomhighlights?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_scicustomhighlights(<guid>)
POST /api/data/v9.2/msdyn_scicustomhighlights
PATCH /api/data/v9.2/msdyn_scicustomhighlights(<guid>)
DELETE /api/data/v9.2/msdyn_scicustomhighlights(<guid>)
```

## Attributes

Writable: **15** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_Body`, `msdyn_DurationInMS`, `msdyn_HighlightTarget`, `msdyn_Name`, `msdyn_OffsetInMS`, `msdyn_Publisher`, `msdyn_SciCustomHighlightId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_scicustomhighlight` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_scicustomhighlight_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_scicustomhighlight_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_scicustomhighlight_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_scicustomhighlight_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_scicustomhighlight_HighlightTarget_` | [msdyn_conversationaggregatedinsights](msdyn_conversationaggregatedinsights.md) | `msdyn_highlighttarget` | `msdyn_highlighttarget` |
| `msdyn_msdyn_scicustomhighlight_Publisher_msdyn_` | [msdyn_scicustompublisher](msdyn_scicustompublisher.md) | `msdyn_publisher` | `msdyn_publisher` |
| `owner_msdyn_scicustomhighlight` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_scicustomhighlight` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_scicustomhighlight` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_scicustomhighlight_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_scicustomhighlight_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_scicustomhighlight_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_scicustomhighlight_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_scicustomhighlight_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_scicustomhighlight_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_scicustomhighlight_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_scicustomhighlight_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_scicustomhighlight.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_scicustomhighlight.md) on 2026-05-06.