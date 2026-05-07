---
logical: "msdyn_scicustomemailhighlight"
display: "Custom Email Highlight"
entitySetName: "msdyn_scicustomemailhighlights"
primaryId: "msdyn_scicustomemailhighlightid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Custom Email Highlight

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_scicustomemailhighlight` |
| Display name | Custom Email Highlight |
| Display (plural) | Custom Email Highlights |
| Schema name | `msdyn_SciCustomEmailHighlight` |
| Entity set (Web API) | `msdyn_scicustomemailhighlights` |
| Primary id attribute | `msdyn_scicustomemailhighlightid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_scicustomemailhighlights?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_scicustomemailhighlights(<guid>)
POST /api/data/v9.2/msdyn_scicustomemailhighlights
PATCH /api/data/v9.2/msdyn_scicustomemailhighlights(<guid>)
DELETE /api/data/v9.2/msdyn_scicustomemailhighlights(<guid>)
```

## Attributes

Writable: **17** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_ContentProperties`, `msdyn_EmailHighlightTarget`, `msdyn_Link`, `msdyn_LinkDescription`, `msdyn_Name`, `msdyn_Publisher`, `msdyn_SciCustomEmailHighlightId`, `msdyn_Snippet`, `msdyn_UsedInsights`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_scicustomemailhighlight` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_scicustomemailhighlight_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_scicustomemailhighlight_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_scicustomemailhighlight_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_scicustomemailhighlight_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_scicustomemailhighlight_EmailHighli` | [msdyn_conversationaggregatedinsights](msdyn_conversationaggregatedinsights.md) | `msdyn_emailhighlighttarget` | `msdyn_emailhighlighttarget` |
| `msdyn_msdyn_scicustomemailhighlight_Publisher_m` | [msdyn_scicustompublisher](msdyn_scicustompublisher.md) | `msdyn_publisher` | `msdyn_publisher` |
| `owner_msdyn_scicustomemailhighlight` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_scicustomemailhighlight` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_scicustomemailhighlight` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_scicustomemailhighlight_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_scicustomemailhighlight_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_scicustomemailhighlight_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_scicustomemailhighlight_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_scicustomemailhighlight_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_scicustomemailhighlight_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_scicustomemailhighlight_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_scicustomemailhighlight_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_scicustomemailhighlight.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_scicustomemailhighlight.md) on 2026-05-06.