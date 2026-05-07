---
logical: "msdyn_skillattachmenttarget"
display: "Attach Skill"
entitySetName: "msdyn_skillattachmenttargets"
primaryId: "msdyn_skillattachmenttargetid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Attach Skill

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_skillattachmenttarget` |
| Display name | Attach Skill |
| Display (plural) | Attach Skills |
| Schema name | `msdyn_skillattachmenttarget` |
| Entity set (Web API) | `msdyn_skillattachmenttargets` |
| Primary id attribute | `msdyn_skillattachmenttargetid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_skillattachmenttargets?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_skillattachmenttargets(<guid>)
POST /api/data/v9.2/msdyn_skillattachmenttargets
PATCH /api/data/v9.2/msdyn_skillattachmenttargets(<guid>)
DELETE /api/data/v9.2/msdyn_skillattachmenttargets(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_characteristicid`, `msdyn_name`, `msdyn_ratingvalueid`, `msdyn_skillattachmentruleitemid`, `msdyn_skillattachmenttargetId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_skillattachmenttarget` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_skillattachmenttarget_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_skillattachmenttarget_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_skillattachmenttarget_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_skillattachmenttarget_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_characteristic_skillattachmenttarget` | [characteristic](characteristic.md) | `msdyn_characteristicid` | `msdyn_characteristicid` |
| `msdyn_ratingvalue_skillattachmenttarget` | [ratingvalue](ratingvalue.md) | `msdyn_ratingvalueid` | `msdyn_ratingvalueid` |
| `msdyn_skillattachmentruleitem_target` | [msdyn_skillattachmentruleitem](msdyn_skillattachmentruleitem.md) | `msdyn_skillattachmentruleitemid` | `msdyn_skillattachmentruleitemid` |
| `owner_msdyn_skillattachmenttarget` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_skillattachmenttarget` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_skillattachmenttarget` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_skillattachmenttarget_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_skillattachmenttarget_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_skillattachmenttarget_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_skillattachmenttarget_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_skillattachmenttarget_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_skillattachmenttarget_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_skillattachmenttarget_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_skillattachmenttarget_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_skillattachmenttarget.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_skillattachmenttarget.md) on 2026-05-06.