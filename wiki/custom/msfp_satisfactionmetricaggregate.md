---
logical: "msfp_satisfactionmetricaggregate"
display: "Aggregazione metrica di soddisfazione Customer voice"
entitySetName: "msfp_satisfactionmetricaggregates"
primaryId: "msfp_satisfactionmetricaggregateid"
primaryName: "msfp_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Aggregazione metrica di soddisfazione Customer voice

Archivia i valori aggregati della metrica di soddisfazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msfp_satisfactionmetricaggregate` |
| Display name | Aggregazione metrica di soddisfazione Customer voice |
| Display (plural) | Aggregazioni metrica di soddisfazione Customer Voice |
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

Writable: **18** · Read-only: **10**

### Writable

`importsequencenumber`, `msfp_absolutevalue`, `msfp_aggregationtype`, `msfp_aggregationunit`, `msfp_aggregationyear`, `msfp_name`, `msfp_negativecount`, `msfp_neutralcount`, `msfp_positivecount`, `msfp_responsecount`, `msfp_satisfactionmetricaggregateid`, `msfp_satisfactionmetricsurveymappingid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msfp_satisfactionmetricaggregate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msfp_satisfactionmetricaggregate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msfp_satisfactionmetricaggregate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msfp_satisfactionmetricaggregate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msfp_satisfactionmetricaggregate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msfp_satisfactionmetricaggregate` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msfp_satisfactionmetricaggregate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msfp_satisfactionmetricaggregate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msfp_satisfactionmetricaggregate_satisfactionmetricsurveymappingid_msfp_satisfactionmetricsurveymap` | [msfp_satisfactionmetricsurveymapping](msfp_satisfactionmetricsurveymapping.md) | `msfp_satisfactionmetricsurveymappingid` | `msfp_satisfactionmetricsurveymappingid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msfp_satisfactionmetricaggregate_SyncErrors` | [msfp_satisfactionmetricaggregate](msfp_satisfactionmetricaggregate.md) | `regardingobjectid` | `regardingobjectid_msfp_satisfactionmetricaggregate` |
| `msfp_satisfactionmetricaggregate_DuplicateMatchingRecord` | [msfp_satisfactionmetricaggregate](msfp_satisfactionmetricaggregate.md) | `duplicaterecordid` | `duplicaterecordid_msfp_satisfactionmetricaggregate` |
| `msfp_satisfactionmetricaggregate_DuplicateBaseRecord` | [msfp_satisfactionmetricaggregate](msfp_satisfactionmetricaggregate.md) | `baserecordid` | `baserecordid_msfp_satisfactionmetricaggregate` |
| `msfp_satisfactionmetricaggregate_AsyncOperations` | [msfp_satisfactionmetricaggregate](msfp_satisfactionmetricaggregate.md) | `regardingobjectid` | `regardingobjectid_msfp_satisfactionmetricaggregate` |
| `msfp_satisfactionmetricaggregate_MailboxTrackingFolders` | [msfp_satisfactionmetricaggregate](msfp_satisfactionmetricaggregate.md) | `regardingobjectid` | `regardingobjectid_msfp_satisfactionmetricaggregate` |
| `msfp_satisfactionmetricaggregate_UserEntityInstanceDatas` | [msfp_satisfactionmetricaggregate](msfp_satisfactionmetricaggregate.md) | `objectid` | `objectid_msfp_satisfactionmetricaggregate` |
| `msfp_satisfactionmetricaggregate_ProcessSession` | [msfp_satisfactionmetricaggregate](msfp_satisfactionmetricaggregate.md) | `regardingobjectid` | `regardingobjectid_msfp_satisfactionmetricaggregate` |
| `msfp_satisfactionmetricaggregate_BulkDeleteFailures` | [msfp_satisfactionmetricaggregate](msfp_satisfactionmetricaggregate.md) | `regardingobjectid` | `regardingobjectid_msfp_satisfactionmetricaggregate` |
| `msfp_satisfactionmetricaggregate_PrincipalObjectAttributeAccesses` | [msfp_satisfactionmetricaggregate](msfp_satisfactionmetricaggregate.md) | `objectid` | `objectid_msfp_satisfactionmetricaggregate` |


## Source

Generated from [msfp_satisfactionmetricaggregate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msfp_satisfactionmetricaggregate')) on 2026-05-07.