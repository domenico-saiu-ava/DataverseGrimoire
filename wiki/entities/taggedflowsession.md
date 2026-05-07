---
logical: "taggedflowsession"
display: "Tagged Flow Session"
entitySetName: "taggedflowsessions"
primaryId: "taggedflowsessionid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Tagged Flow Session

## Identity

| Property | Value |
| --- | --- |
| Logical name | `taggedflowsession` |
| Display name | Tagged Flow Session |
| Display (plural) | Tagged Flow Sessions |
| Schema name | `taggedflowsession` |
| Entity set (Web API) | `taggedflowsessions` |
| Primary id attribute | `taggedflowsessionid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/taggedflowsessions?$select=name&$top=10
GET /api/data/v9.2/taggedflowsessions(<guid>)
POST /api/data/v9.2/taggedflowsessions
PATCH /api/data/v9.2/taggedflowsessions(<guid>)
DELETE /api/data/v9.2/taggedflowsessions(<guid>)
```

## Attributes

Writable: **13** · Read-only: **18**

### Writable

`FlowSession`, `ImportSequenceNumber`, `IsCustomizable`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `Tag`, `taggedflowsessionId`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_taggedflowsession` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_taggedflowsession_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_taggedflowsession_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_taggedflowsession_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_taggedflowsession_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_taggedflowsession` | [owner](owner.md) | `ownerid` | `ownerid` |
| `taggedflowsession_FlowSession_flowsession` | [flowsession](flowsession.md) | `flowsession` | `FlowSession` |
| `taggedflowsession_tag_tag` | [tag](tag.md) | `tag` | `tag` |
| `team_taggedflowsession` | [team](team.md) | `owningteam` | `owningteam` |
| `user_taggedflowsession` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `taggedflowsession_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `taggedflowsession_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `taggedflowsession_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `taggedflowsession_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `taggedflowsession_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `taggedflowsession_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [taggedflowsession.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/taggedflowsession.md) on 2026-05-06.