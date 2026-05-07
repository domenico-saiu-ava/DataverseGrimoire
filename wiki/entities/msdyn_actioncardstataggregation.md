---
logical: "msdyn_actioncardstataggregation"
display: "Action Card Usage Aggregation"
entitySetName: "msdyn_actioncardstataggregations"
primaryId: "msdyn_actioncardstataggregationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
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

Writable: **14** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_actioncardstataggregationId`, `msdyn_cardtypeid`, `msdyn_datapoint`, `msdyn_name`, `msdyn_usercount`, `msdyn_value`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_actioncardstataggregation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_actioncardstataggregation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_actioncardstataggregation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_actioncardstataggregation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_actioncardstataggregation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_actioncardstataggregation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_actioncardstataggregation` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_actioncardstataggregation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_actioncardstataggregation_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_actioncardstataggregation_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_actioncardstataggregation_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_actioncardstataggregation_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_actioncardstataggregation_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_actioncardstataggregation_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_actioncardstataggregation_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_actioncardstataggregation_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_actioncardstataggregation.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_actioncardstataggregation.md) on 2026-05-06.