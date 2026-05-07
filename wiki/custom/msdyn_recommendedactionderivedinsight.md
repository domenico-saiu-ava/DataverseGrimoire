---
logical: "msdyn_recommendedactionderivedinsight"
display: "Recommended Action Derived Insights"
entitySetName: "msdyn_recommendedactionderivedinsights"
primaryId: "msdyn_recommendedactionderivedinsightid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Recommended Action Derived Insights

Stores the derived insights for opportunity/lead/entity.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_recommendedactionderivedinsight` |
| Display name | Recommended Action Derived Insights |
| Display (plural) | Recommended Action Derived Insights |
| Schema name | `msdyn_recommendedactionderivedinsight` |
| Entity set (Web API) | `msdyn_recommendedactionderivedinsights` |
| Primary id attribute | `msdyn_recommendedactionderivedinsightid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_recommendedactionderivedinsights?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_recommendedactionderivedinsights(<guid>)
POST /api/data/v9.2/msdyn_recommendedactionderivedinsights
PATCH /api/data/v9.2/msdyn_recommendedactionderivedinsights(<guid>)
DELETE /api/data/v9.2/msdyn_recommendedactionderivedinsights(<guid>)
```

## Attributes

Writable: **14** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_conversationid`, `msdyn_derivedinsightsource`, `msdyn_derivedinsightvalue`, `msdyn_entitytype`, `msdyn_name`, `msdyn_recommendedactionderivedinsightid`, `msdyn_regardingobjectid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_recommendedactionderivedinsight_lead` | [lead](lead.md) | `msdyn_regardingobjectid` | `msdyn_regardingobjectid_lead` |
| `msdyn_recommendedactionderivedinsight_opportunity` | [opportunity](opportunity.md) | `msdyn_regardingobjectid` | `msdyn_regardingobjectid_opportunity` |
| `lk_msdyn_recommendedactionderivedinsight_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_recommendedactionderivedinsight_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_recommendedactionderivedinsight_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_recommendedactionderivedinsight_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_recommendedactionderivedinsight` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_recommendedactionderivedinsight` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_recommendedactionderivedinsight` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_recommendedactionderivedinsight` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_recommendedactionderivedinsight_DuplicateMatchingRecord` | [msdyn_recommendedactionderivedinsight](msdyn_recommendedactionderivedinsight.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_recommendedactionderivedinsight` |
| `msdyn_recommendedactionderivedinsight_DuplicateBaseRecord` | [msdyn_recommendedactionderivedinsight](msdyn_recommendedactionderivedinsight.md) | `baserecordid` | `baserecordid_msdyn_recommendedactionderivedinsight` |
| `msdyn_recommendedactionderivedinsight_SyncErrors` | [msdyn_recommendedactionderivedinsight](msdyn_recommendedactionderivedinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_recommendedactionderivedinsight` |
| `msdyn_recommendedactionderivedinsight_AsyncOperations` | [msdyn_recommendedactionderivedinsight](msdyn_recommendedactionderivedinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_recommendedactionderivedinsight` |
| `msdyn_recommendedactionderivedinsight_MailboxTrackingFolders` | [msdyn_recommendedactionderivedinsight](msdyn_recommendedactionderivedinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_recommendedactionderivedinsight` |
| `msdyn_recommendedactionderivedinsight_UserEntityInstanceDatas` | [msdyn_recommendedactionderivedinsight](msdyn_recommendedactionderivedinsight.md) | `objectid` | `objectid_msdyn_recommendedactionderivedinsight` |
| `msdyn_recommendedactionderivedinsight_ProcessSession` | [msdyn_recommendedactionderivedinsight](msdyn_recommendedactionderivedinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_recommendedactionderivedinsight` |
| `msdyn_recommendedactionderivedinsight_BulkDeleteFailures` | [msdyn_recommendedactionderivedinsight](msdyn_recommendedactionderivedinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_recommendedactionderivedinsight` |
| `msdyn_recommendedactionderivedinsight_PrincipalObjectAttributeAccesses` | [msdyn_recommendedactionderivedinsight](msdyn_recommendedactionderivedinsight.md) | `objectid` | `objectid_msdyn_recommendedactionderivedinsight` |


## Source

Generated from [msdyn_recommendedactionderivedinsight (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_recommendedactionderivedinsight')) on 2026-05-07.