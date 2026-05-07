---
logical: "msdyn_actioncardstataggregation"
display: "Action Card Usage Aggregation"
entitySetName: "msdyn_actioncardstataggregations"
primaryId: "msdyn_actioncardstataggregationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Action Card Usage Aggregation

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_actioncardstataggregation` |
| Display name | Action Card Usage Aggregation |
| Display (plural) | Action Card Usage Aggregations |
| Schema name | `msdyn_actioncardstataggregation` |
| Entity set (Web API) | `msdyn_actioncardstataggregations` |
| Primary id attribute | `msdyn_actioncardstataggregationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_actioncardstataggregations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_actioncardstataggregations(<guid>)
POST /api/data/v9.2/msdyn_actioncardstataggregations
PATCH /api/data/v9.2/msdyn_actioncardstataggregations(<guid>)
DELETE /api/data/v9.2/msdyn_actioncardstataggregations(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_actioncardstataggregationid`, `msdyn_cardtypeid`, `msdyn_datapoint`, `msdyn_name`, `msdyn_usercount`, `msdyn_value`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_actioncardstataggregation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_actioncardstataggregation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_actioncardstataggregation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_actioncardstataggregation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_actioncardstataggregation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_actioncardstataggregation` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_actioncardstataggregation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_actioncardstataggregation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_cardtype_actioncardstataggregation_cardtypeid` | [cardtype](cardtype.md) | `msdyn_cardtypeid` | `msdyn_cardtypeid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_actioncardstataggregation_SyncErrors` | [msdyn_actioncardstataggregation](msdyn_actioncardstataggregation.md) | `regardingobjectid` | `regardingobjectid_msdyn_actioncardstataggregation` |
| `msdyn_actioncardstataggregation_DuplicateMatchingRecord` | [msdyn_actioncardstataggregation](msdyn_actioncardstataggregation.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_actioncardstataggregation` |
| `msdyn_actioncardstataggregation_DuplicateBaseRecord` | [msdyn_actioncardstataggregation](msdyn_actioncardstataggregation.md) | `baserecordid` | `baserecordid_msdyn_actioncardstataggregation` |
| `msdyn_actioncardstataggregation_AsyncOperations` | [msdyn_actioncardstataggregation](msdyn_actioncardstataggregation.md) | `regardingobjectid` | `regardingobjectid_msdyn_actioncardstataggregation` |
| `msdyn_actioncardstataggregation_MailboxTrackingFolders` | [msdyn_actioncardstataggregation](msdyn_actioncardstataggregation.md) | `regardingobjectid` | `regardingobjectid_msdyn_actioncardstataggregation` |
| `msdyn_actioncardstataggregation_UserEntityInstanceDatas` | [msdyn_actioncardstataggregation](msdyn_actioncardstataggregation.md) | `objectid` | `objectid_msdyn_actioncardstataggregation` |
| `msdyn_actioncardstataggregation_ProcessSession` | [msdyn_actioncardstataggregation](msdyn_actioncardstataggregation.md) | `regardingobjectid` | `regardingobjectid_msdyn_actioncardstataggregation` |
| `msdyn_actioncardstataggregation_BulkDeleteFailures` | [msdyn_actioncardstataggregation](msdyn_actioncardstataggregation.md) | `regardingobjectid` | `regardingobjectid_msdyn_actioncardstataggregation` |
| `msdyn_actioncardstataggregation_PrincipalObjectAttributeAccesses` | [msdyn_actioncardstataggregation](msdyn_actioncardstataggregation.md) | `objectid` | `objectid_msdyn_actioncardstataggregation` |


## Source

Generated from [msdyn_actioncardstataggregation (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_actioncardstataggregation')) on 2026-05-07.