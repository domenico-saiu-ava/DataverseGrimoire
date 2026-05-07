---
logical: "msfp_satisfactionmetricaggregate"
display: "Customer Voice Satisfaction Metric Aggregate"
entitySetName: "msfp_satisfactionmetricaggregates"
primaryId: "msfp_satisfactionmetricaggregateid"
primaryName: "msfp_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Customer Voice Satisfaction Metric Aggregate

Stores aggregated values of satisfaction metric

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msfp_satisfactionmetricaggregate` |
| Display name | Customer Voice Satisfaction Metric Aggregate |
| Display (plural) | Customer Voice Satisfaction Metric Aggregates |
| Schema name | `msfp_satisfactionmetricaggregate` |
| Entity set (Web API) | `msfp_satisfactionmetricaggregates` |
| Primary id attribute | `msfp_satisfactionmetricaggregateid` |
| Primary name attribute | `msfp_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msfp_satisfactionmetricaggregates?$select=msfp_name&$top=10
GET /api/data/v9.2/msfp_satisfactionmetricaggregates(<guid>)
POST /api/data/v9.2/msfp_satisfactionmetricaggregates
PATCH /api/data/v9.2/msfp_satisfactionmetricaggregates(<guid>)
DELETE /api/data/v9.2/msfp_satisfactionmetricaggregates(<guid>)
```

## Attributes

Writable: **19** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msfp_absolutevalue`, `msfp_aggregationtype`, `msfp_aggregationunit`, `msfp_aggregationyear`, `msfp_name`, `msfp_negativecount`, `msfp_neutralcount`, `msfp_positivecount`, `msfp_responsecount`, `msfp_satisfactionmetricaggregateId`, `msfp_satisfactionmetricsurveymappingid`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msfp_satisfactionmetricaggregate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msfp_satisfactionmetricaggregate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msfp_satisfactionmetricaggregate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msfp_satisfactionmetricaggregate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msfp_satisfactionmetricaggregate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msfp_satisfactionmetricaggregate_satisfactionmetricsurveymappingid_msfp_satisfactionmetricsurveymap` | [msfp_satisfactionmetricsurveymapping](msfp_satisfactionmetricsurveymapping.md) | `msfp_satisfactionmetricsurveymappingid` | `msfp_satisfactionmetricsurveymappingid` |
| `owner_msfp_satisfactionmetricaggregate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msfp_satisfactionmetricaggregate` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msfp_satisfactionmetricaggregate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msfp_satisfactionmetricaggregate_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_satisfactionmetricaggregate_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_satisfactionmetricaggregate_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msfp_satisfactionmetricaggregate_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msfp_satisfactionmetricaggregate_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_satisfactionmetricaggregate_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msfp_satisfactionmetricaggregate_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_satisfactionmetricaggregate_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msfp_satisfactionmetricaggregate.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msfp_satisfactionmetricaggregate.md) on 2026-05-06.