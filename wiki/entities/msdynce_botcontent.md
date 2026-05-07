---
logical: "msdynce_botcontent"
display: "BotContent"
entitySetName: "msdynce_botcontents"
primaryId: "msdynce_botcontentid"
primaryName: "msdynce_autonumber"
tableType: "Standard"
ownership: "UserOwned"
---

# BotContent

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynce_botcontent` |
| Display name | BotContent |
| Display (plural) | BotContents |
| Schema name | `msdynce_botcontent` |
| Entity set (Web API) | `msdynce_botcontents` |
| Primary id attribute | `msdynce_botcontentid` |
| Primary name attribute | `msdynce_autonumber` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynce_botcontents?$select=msdynce_autonumber&$top=10
GET /api/data/v9.2/msdynce_botcontents(<guid>)
POST /api/data/v9.2/msdynce_botcontents
PATCH /api/data/v9.2/msdynce_botcontents(<guid>)
DELETE /api/data/v9.2/msdynce_botcontents(<guid>)
```

## Attributes

Writable: **12** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdynce_autonumber`, `msdynce_botcontentId`, `msdynce_botid`, `msdynce_state`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdynce_botcontent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdynce_botcontent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynce_botcontent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynce_botcontent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynce_botcontent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdynce_botcontent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdynce_botcontent` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdynce_botcontent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynce_botcontent_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynce_botcontent_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynce_botcontent_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynce_botcontent_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdynce_botcontent_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynce_botcontent_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdynce_botcontent.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdynce_botcontent.md) on 2026-05-06.