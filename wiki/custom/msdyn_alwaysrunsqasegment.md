---
logical: "msdyn_alwaysrunsqasegment"
display: "Always Run SQA Segment"
entitySetName: "msdyn_alwaysrunsqasegments"
primaryId: "msdyn_alwaysrunsqasegmentid"
primaryName: "msdyn_alwaysrunsqasegmentname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Always Run SQA Segment

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_alwaysrunsqasegment` |
| Display name | Always Run SQA Segment |
| Display (plural) | Always Run SQA Segments |
| Schema name | `msdyn_alwaysrunsqasegment` |
| Entity set (Web API) | `msdyn_alwaysrunsqasegments` |
| Primary id attribute | `msdyn_alwaysrunsqasegmentid` |
| Primary name attribute | `msdyn_alwaysrunsqasegmentname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_alwaysrunsqasegments?$select=msdyn_alwaysrunsqasegmentname&$top=10
GET /api/data/v9.2/msdyn_alwaysrunsqasegments(<guid>)
POST /api/data/v9.2/msdyn_alwaysrunsqasegments
PATCH /api/data/v9.2/msdyn_alwaysrunsqasegments(<guid>)
DELETE /api/data/v9.2/msdyn_alwaysrunsqasegments(<guid>)
```

## Attributes

Writable: **15** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_alwaysrunsqasegmentid`, `msdyn_alwaysrunsqasegmentname`, `msdyn_alwaysrunsqasegmentownerid`, `msdyn_isassistivemode`, `msdyn_leadid`, `msdyn_leadidguid`, `msdyn_segmentid`, `msdyn_sequenceid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_alwaysrunsqasegment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_alwaysrunsqasegment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_alwaysrunsqasegment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_alwaysrunsqasegment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_alwaysrunsqasegment` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_alwaysrunsqasegment` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_alwaysrunsqasegment` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_alwaysrunsqasegment` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_alwaysrunsqasegment_SyncErrors` | [msdyn_alwaysrunsqasegment](msdyn_alwaysrunsqasegment.md) | `regardingobjectid` | `regardingobjectid_msdyn_alwaysrunsqasegment` |
| `msdyn_alwaysrunsqasegment_DuplicateMatchingRecord` | [msdyn_alwaysrunsqasegment](msdyn_alwaysrunsqasegment.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_alwaysrunsqasegment` |
| `msdyn_alwaysrunsqasegment_DuplicateBaseRecord` | [msdyn_alwaysrunsqasegment](msdyn_alwaysrunsqasegment.md) | `baserecordid` | `baserecordid_msdyn_alwaysrunsqasegment` |
| `msdyn_alwaysrunsqasegment_AsyncOperations` | [msdyn_alwaysrunsqasegment](msdyn_alwaysrunsqasegment.md) | `regardingobjectid` | `regardingobjectid_msdyn_alwaysrunsqasegment` |
| `msdyn_alwaysrunsqasegment_MailboxTrackingFolders` | [msdyn_alwaysrunsqasegment](msdyn_alwaysrunsqasegment.md) | `regardingobjectid` | `regardingobjectid_msdyn_alwaysrunsqasegment` |
| `msdyn_alwaysrunsqasegment_UserEntityInstanceDatas` | [msdyn_alwaysrunsqasegment](msdyn_alwaysrunsqasegment.md) | `objectid` | `objectid_msdyn_alwaysrunsqasegment` |
| `msdyn_alwaysrunsqasegment_ProcessSession` | [msdyn_alwaysrunsqasegment](msdyn_alwaysrunsqasegment.md) | `regardingobjectid` | `regardingobjectid_msdyn_alwaysrunsqasegment` |
| `msdyn_alwaysrunsqasegment_BulkDeleteFailures` | [msdyn_alwaysrunsqasegment](msdyn_alwaysrunsqasegment.md) | `regardingobjectid` | `regardingobjectid_msdyn_alwaysrunsqasegment` |
| `msdyn_alwaysrunsqasegment_PrincipalObjectAttributeAccesses` | [msdyn_alwaysrunsqasegment](msdyn_alwaysrunsqasegment.md) | `objectid` | `objectid_msdyn_alwaysrunsqasegment` |


## Source

Generated from [msdyn_alwaysrunsqasegment (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_alwaysrunsqasegment')) on 2026-05-07.