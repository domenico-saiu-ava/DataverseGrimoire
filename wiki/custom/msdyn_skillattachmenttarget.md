---
logical: "msdyn_skillattachmenttarget"
display: "Associa competenza"
entitySetName: "msdyn_skillattachmenttargets"
primaryId: "msdyn_skillattachmenttargetid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Associa competenza

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_skillattachmenttarget` |
| Display name | Associa competenza |
| Display (plural) | Associa competenze |
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

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_characteristicid`, `msdyn_name`, `msdyn_ratingvalueid`, `msdyn_skillattachmentruleitemid`, `msdyn_skillattachmenttargetid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_skillattachmenttarget_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_skillattachmenttarget_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_skillattachmenttarget_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_skillattachmenttarget_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_skillattachmenttarget` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_skillattachmenttarget` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_skillattachmenttarget` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_skillattachmenttarget` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_characteristic_skillattachmenttarget` | [characteristic](characteristic.md) | `msdyn_characteristicid` | `msdyn_characteristicid` |
| `msdyn_skillattachmentruleitem_target` | [msdyn_skillattachmentruleitem](msdyn_skillattachmentruleitem.md) | `msdyn_skillattachmentruleitemid` | `msdyn_skillattachmentruleitemid` |
| `msdyn_ratingvalue_skillattachmenttarget` | [ratingvalue](ratingvalue.md) | `msdyn_ratingvalueid` | `msdyn_ratingvalueid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_skillattachmenttarget_SyncErrors` | [msdyn_skillattachmenttarget](msdyn_skillattachmenttarget.md) | `regardingobjectid` | `regardingobjectid_msdyn_skillattachmenttarget` |
| `msdyn_skillattachmenttarget_DuplicateMatchingRecord` | [msdyn_skillattachmenttarget](msdyn_skillattachmenttarget.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_skillattachmenttarget` |
| `msdyn_skillattachmenttarget_DuplicateBaseRecord` | [msdyn_skillattachmenttarget](msdyn_skillattachmenttarget.md) | `baserecordid` | `baserecordid_msdyn_skillattachmenttarget` |
| `msdyn_skillattachmenttarget_AsyncOperations` | [msdyn_skillattachmenttarget](msdyn_skillattachmenttarget.md) | `regardingobjectid` | `regardingobjectid_msdyn_skillattachmenttarget` |
| `msdyn_skillattachmenttarget_MailboxTrackingFolders` | [msdyn_skillattachmenttarget](msdyn_skillattachmenttarget.md) | `regardingobjectid` | `regardingobjectid_msdyn_skillattachmenttarget` |
| `msdyn_skillattachmenttarget_UserEntityInstanceDatas` | [msdyn_skillattachmenttarget](msdyn_skillattachmenttarget.md) | `objectid` | `objectid_msdyn_skillattachmenttarget` |
| `msdyn_skillattachmenttarget_ProcessSession` | [msdyn_skillattachmenttarget](msdyn_skillattachmenttarget.md) | `regardingobjectid` | `regardingobjectid_msdyn_skillattachmenttarget` |
| `msdyn_skillattachmenttarget_BulkDeleteFailures` | [msdyn_skillattachmenttarget](msdyn_skillattachmenttarget.md) | `regardingobjectid` | `regardingobjectid_msdyn_skillattachmenttarget` |
| `msdyn_skillattachmenttarget_PrincipalObjectAttributeAccesses` | [msdyn_skillattachmenttarget](msdyn_skillattachmenttarget.md) | `objectid` | `objectid_msdyn_skillattachmenttarget` |


## Source

Generated from [msdyn_skillattachmenttarget (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_skillattachmenttarget')) on 2026-05-07.