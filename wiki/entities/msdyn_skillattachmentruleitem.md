---
logical: "msdyn_skillattachmentruleitem"
display: "Skill Attachment Rule"
entitySetName: "msdyn_skillattachmentruleitems"
primaryId: "msdyn_skillattachmentruleitemid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Skill Attachment Rule

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_skillattachmentruleitem` |
| Display name | Skill Attachment Rule |
| Display (plural) | Skill Attachment Rules |
| Schema name | `msdyn_skillattachmentruleitem` |
| Entity set (Web API) | `msdyn_skillattachmentruleitems` |
| Primary id attribute | `msdyn_skillattachmentruleitemid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_skillattachmentruleitems?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_skillattachmentruleitems(<guid>)
POST /api/data/v9.2/msdyn_skillattachmentruleitems
PATCH /api/data/v9.2/msdyn_skillattachmentruleitems(<guid>)
DELETE /api/data/v9.2/msdyn_skillattachmentruleitems(<guid>)
```

## Attributes

Writable: **15** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_condition`, `msdyn_description`, `msdyn_expression`, `msdyn_liveworkstream`, `msdyn_name`, `msdyn_rulejson`, `msdyn_skillattachmentruleitemId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_skillattachmentruleitem` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_skillattachmentruleitem_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_skillattachmentruleitem_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_skillattachmentruleitem_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_skillattachmentruleitem_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_liveworkstream_skillattachmentruleitem` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_liveworkstream` | `msdyn_liveworkstream` |
| `owner_msdyn_skillattachmentruleitem` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_skillattachmentruleitem` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_skillattachmentruleitem` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_skillattachmentruleitem_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_skillattachmentruleitem_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_skillattachmentruleitem_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_skillattachmentruleitem_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_skillattachmentruleitem_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_skillattachmentruleitem_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_skillattachmentruleitem_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_skillattachmentruleitem_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_skillattachmentruleitem_target` | _n/a_ | `msdyn_skillattachmentruleitemid` | _n/a_ |


## Source

Generated from [msdyn_skillattachmentruleitem.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_skillattachmentruleitem.md) on 2026-05-06.