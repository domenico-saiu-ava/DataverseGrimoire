---
logical: "cai_conflict"
display: "Conflitto"
entitySetName: "cai_conflicts"
primaryId: "cai_conflictid"
primaryName: "cai_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Conflitto

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cai_conflict` |
| Display name | Conflitto |
| Display (plural) | Conflitti |
| Schema name | `cai_conflict` |
| Entity set (Web API) | `cai_conflicts` |
| Primary id attribute | `cai_conflictid` |
| Primary name attribute | `cai_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/cai_conflicts?$select=cai_name&$top=10
GET /api/data/v9.2/cai_conflicts(<guid>)
POST /api/data/v9.2/cai_conflicts
PATCH /api/data/v9.2/cai_conflicts(<guid>)
DELETE /api/data/v9.2/cai_conflicts(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`cai_appointmentid`, `cai_conflictenddate`, `cai_conflictid`, `cai_name`, `cai_orgunitid`, `cai_participantid`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_conflict_participantid_systemuser` | [systemuser](systemuser.md) | `cai_participantid` | `cai_participantid` |
| `cai_conflict_orgunitid_cai_orgunit` | [cai_orgunit](cai_orgunit.md) | `cai_orgunitid` | `cai_orgunitid` |
| `cai_conflict_appointmentid_appointment` | [appointment](appointment.md) | `cai_appointmentid` | `cai_appointmentid` |
| `lk_cai_conflict_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_cai_conflict_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_cai_conflict_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_cai_conflict_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_cai_conflict` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_cai_conflict` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_cai_conflict` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_cai_conflict` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_conflict_SyncErrors` | [cai_conflict](cai_conflict.md) | `regardingobjectid` | `regardingobjectid_cai_conflict` |
| `cai_conflict_DuplicateMatchingRecord` | [cai_conflict](cai_conflict.md) | `duplicaterecordid` | `duplicaterecordid_cai_conflict` |
| `cai_conflict_DuplicateBaseRecord` | [cai_conflict](cai_conflict.md) | `baserecordid` | `baserecordid_cai_conflict` |
| `cai_conflict_AsyncOperations` | [cai_conflict](cai_conflict.md) | `regardingobjectid` | `regardingobjectid_cai_conflict` |
| `cai_conflict_MailboxTrackingFolders` | [cai_conflict](cai_conflict.md) | `regardingobjectid` | `regardingobjectid_cai_conflict` |
| `cai_conflict_UserEntityInstanceDatas` | [cai_conflict](cai_conflict.md) | `objectid` | `objectid_cai_conflict` |
| `cai_conflict_ProcessSession` | [cai_conflict](cai_conflict.md) | `regardingobjectid` | `regardingobjectid_cai_conflict` |
| `cai_conflict_BulkDeleteFailures` | [cai_conflict](cai_conflict.md) | `regardingobjectid` | `regardingobjectid_cai_conflict` |
| `cai_conflict_PrincipalObjectAttributeAccesses` | [cai_conflict](cai_conflict.md) | `objectid` | `objectid_cai_conflict` |


## Source

Generated from [cai_conflict (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cai_conflict')) on 2026-05-07.