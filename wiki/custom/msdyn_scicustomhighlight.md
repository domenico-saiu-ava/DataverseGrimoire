---
logical: "msdyn_scicustomhighlight"
display: "Custom Highlight"
entitySetName: "msdyn_scicustomhighlights"
primaryId: "msdyn_scicustomhighlightid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **14** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_body`, `msdyn_durationinms`, `msdyn_highlighttarget`, `msdyn_name`, `msdyn_offsetinms`, `msdyn_publisher`, `msdyn_scicustomhighlightid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_scicustomhighlight_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_scicustomhighlight_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_scicustomhighlight_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_scicustomhighlight_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_scicustomhighlight` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_scicustomhighlight` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_scicustomhighlight` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_scicustomhighlight` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_scicustomhighlight_HighlightTarget_` | [msdyn_conversationaggregatedinsights](msdyn_conversationaggregatedinsights.md) | `msdyn_highlighttarget` | `msdyn_highlighttarget` |
| `msdyn_msdyn_scicustomhighlight_Publisher_msdyn_` | [msdyn_scicustompublisher](msdyn_scicustompublisher.md) | `msdyn_publisher` | `msdyn_publisher` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_scicustomhighlight_SyncErrors` | [msdyn_scicustomhighlight](msdyn_scicustomhighlight.md) | `regardingobjectid` | `regardingobjectid_msdyn_scicustomhighlight` |
| `msdyn_scicustomhighlight_DuplicateMatchingRecord` | [msdyn_scicustomhighlight](msdyn_scicustomhighlight.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_scicustomhighlight` |
| `msdyn_scicustomhighlight_DuplicateBaseRecord` | [msdyn_scicustomhighlight](msdyn_scicustomhighlight.md) | `baserecordid` | `baserecordid_msdyn_scicustomhighlight` |
| `msdyn_scicustomhighlight_AsyncOperations` | [msdyn_scicustomhighlight](msdyn_scicustomhighlight.md) | `regardingobjectid` | `regardingobjectid_msdyn_scicustomhighlight` |
| `msdyn_scicustomhighlight_MailboxTrackingFolders` | [msdyn_scicustomhighlight](msdyn_scicustomhighlight.md) | `regardingobjectid` | `regardingobjectid_msdyn_scicustomhighlight` |
| `msdyn_scicustomhighlight_UserEntityInstanceDatas` | [msdyn_scicustomhighlight](msdyn_scicustomhighlight.md) | `objectid` | `objectid_msdyn_scicustomhighlight` |
| `msdyn_scicustomhighlight_ProcessSession` | [msdyn_scicustomhighlight](msdyn_scicustomhighlight.md) | `regardingobjectid` | `regardingobjectid_msdyn_scicustomhighlight` |
| `msdyn_scicustomhighlight_BulkDeleteFailures` | [msdyn_scicustomhighlight](msdyn_scicustomhighlight.md) | `regardingobjectid` | `regardingobjectid_msdyn_scicustomhighlight` |
| `msdyn_scicustomhighlight_PrincipalObjectAttributeAccesses` | [msdyn_scicustomhighlight](msdyn_scicustomhighlight.md) | `objectid` | `objectid_msdyn_scicustomhighlight` |


## Source

Generated from [msdyn_scicustomhighlight (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_scicustomhighlight')) on 2026-05-07.