---
logical: "msdyn_scicustomemailhighlight"
display: "Custom Email Highlight"
entitySetName: "msdyn_scicustomemailhighlights"
primaryId: "msdyn_scicustomemailhighlightid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **16** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_contentproperties`, `msdyn_emailhighlighttarget`, `msdyn_link`, `msdyn_linkdescription`, `msdyn_name`, `msdyn_publisher`, `msdyn_scicustomemailhighlightid`, `msdyn_snippet`, `msdyn_usedinsights`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_scicustomemailhighlight_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_scicustomemailhighlight_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_scicustomemailhighlight_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_scicustomemailhighlight_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_scicustomemailhighlight` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_scicustomemailhighlight` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_scicustomemailhighlight` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_scicustomemailhighlight` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_scicustomemailhighlight_EmailHighli` | [msdyn_conversationaggregatedinsights](msdyn_conversationaggregatedinsights.md) | `msdyn_emailhighlighttarget` | `msdyn_emailhighlighttarget` |
| `msdyn_msdyn_scicustomemailhighlight_Publisher_m` | [msdyn_scicustompublisher](msdyn_scicustompublisher.md) | `msdyn_publisher` | `msdyn_publisher` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_scicustomemailhighlight_SyncErrors` | [msdyn_scicustomemailhighlight](msdyn_scicustomemailhighlight.md) | `regardingobjectid` | `regardingobjectid_msdyn_scicustomemailhighlight` |
| `msdyn_scicustomemailhighlight_DuplicateMatchingRecord` | [msdyn_scicustomemailhighlight](msdyn_scicustomemailhighlight.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_scicustomemailhighlight` |
| `msdyn_scicustomemailhighlight_DuplicateBaseRecord` | [msdyn_scicustomemailhighlight](msdyn_scicustomemailhighlight.md) | `baserecordid` | `baserecordid_msdyn_scicustomemailhighlight` |
| `msdyn_scicustomemailhighlight_AsyncOperations` | [msdyn_scicustomemailhighlight](msdyn_scicustomemailhighlight.md) | `regardingobjectid` | `regardingobjectid_msdyn_scicustomemailhighlight` |
| `msdyn_scicustomemailhighlight_MailboxTrackingFolders` | [msdyn_scicustomemailhighlight](msdyn_scicustomemailhighlight.md) | `regardingobjectid` | `regardingobjectid_msdyn_scicustomemailhighlight` |
| `msdyn_scicustomemailhighlight_UserEntityInstanceDatas` | [msdyn_scicustomemailhighlight](msdyn_scicustomemailhighlight.md) | `objectid` | `objectid_msdyn_scicustomemailhighlight` |
| `msdyn_scicustomemailhighlight_ProcessSession` | [msdyn_scicustomemailhighlight](msdyn_scicustomemailhighlight.md) | `regardingobjectid` | `regardingobjectid_msdyn_scicustomemailhighlight` |
| `msdyn_scicustomemailhighlight_BulkDeleteFailures` | [msdyn_scicustomemailhighlight](msdyn_scicustomemailhighlight.md) | `regardingobjectid` | `regardingobjectid_msdyn_scicustomemailhighlight` |
| `msdyn_scicustomemailhighlight_PrincipalObjectAttributeAccesses` | [msdyn_scicustomemailhighlight](msdyn_scicustomemailhighlight.md) | `objectid` | `objectid_msdyn_scicustomemailhighlight` |


## Source

Generated from [msdyn_scicustomemailhighlight (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_scicustomemailhighlight')) on 2026-05-07.