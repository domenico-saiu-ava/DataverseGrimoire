---
logical: "msdyn_actioncardregarding"
display: "Action Card Regarding"
entitySetName: "msdyn_actioncardregardings"
primaryId: "msdyn_actioncardregardingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Action Card Regarding

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_actioncardregarding` |
| Display name | Action Card Regarding |
| Display (plural) | Action Card Regardings |
| Schema name | `msdyn_actioncardregarding` |
| Entity set (Web API) | `msdyn_actioncardregardings` |
| Primary id attribute | `msdyn_actioncardregardingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_actioncardregardings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_actioncardregardings(<guid>)
POST /api/data/v9.2/msdyn_actioncardregardings
PATCH /api/data/v9.2/msdyn_actioncardregardings(<guid>)
DELETE /api/data/v9.2/msdyn_actioncardregardings(<guid>)
```

## Attributes

Writable: **10** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_actioncardid`, `msdyn_actioncardregardingid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_actioncardregarding_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_actioncardregarding_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_actioncardregarding_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_actioncardregarding_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_actioncardregarding` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_actioncardregarding` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_actioncardregarding` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_actioncardregarding` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_actioncardregarding_SyncErrors` | [msdyn_actioncardregarding](msdyn_actioncardregarding.md) | `regardingobjectid` | `regardingobjectid_msdyn_actioncardregarding` |
| `msdyn_actioncardregarding_DuplicateMatchingRecord` | [msdyn_actioncardregarding](msdyn_actioncardregarding.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_actioncardregarding` |
| `msdyn_actioncardregarding_DuplicateBaseRecord` | [msdyn_actioncardregarding](msdyn_actioncardregarding.md) | `baserecordid` | `baserecordid_msdyn_actioncardregarding` |
| `msdyn_actioncardregarding_AsyncOperations` | [msdyn_actioncardregarding](msdyn_actioncardregarding.md) | `regardingobjectid` | `regardingobjectid_msdyn_actioncardregarding` |
| `msdyn_actioncardregarding_MailboxTrackingFolders` | [msdyn_actioncardregarding](msdyn_actioncardregarding.md) | `regardingobjectid` | `regardingobjectid_msdyn_actioncardregarding` |
| `msdyn_actioncardregarding_UserEntityInstanceDatas` | [msdyn_actioncardregarding](msdyn_actioncardregarding.md) | `objectid` | `objectid_msdyn_actioncardregarding` |
| `msdyn_actioncardregarding_ProcessSession` | [msdyn_actioncardregarding](msdyn_actioncardregarding.md) | `regardingobjectid` | `regardingobjectid_msdyn_actioncardregarding` |
| `msdyn_actioncardregarding_BulkDeleteFailures` | [msdyn_actioncardregarding](msdyn_actioncardregarding.md) | `regardingobjectid` | `regardingobjectid_msdyn_actioncardregarding` |
| `msdyn_actioncardregarding_PrincipalObjectAttributeAccesses` | [msdyn_actioncardregarding](msdyn_actioncardregarding.md) | `objectid` | `objectid_msdyn_actioncardregarding` |


## Source

Generated from [msdyn_actioncardregarding (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_actioncardregarding')) on 2026-05-07.