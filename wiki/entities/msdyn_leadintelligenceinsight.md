---
logical: "msdyn_leadintelligenceinsight"
display: "Lead Intelligence Insight"
entitySetName: "msdyn_leadintelligenceinsights"
primaryId: "msdyn_leadintelligenceinsightid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Lead Intelligence Insight

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_leadintelligenceinsight` |
| Display name | Lead Intelligence Insight |
| Display (plural) | Lead Intelligence Insights |
| Schema name | `msdyn_leadintelligenceinsight` |
| Entity set (Web API) | `msdyn_leadintelligenceinsights` |
| Primary id attribute | `msdyn_leadintelligenceinsightid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_leadintelligenceinsights?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_leadintelligenceinsights(<guid>)
POST /api/data/v9.2/msdyn_leadintelligenceinsights
PATCH /api/data/v9.2/msdyn_leadintelligenceinsights(<guid>)
DELETE /api/data/v9.2/msdyn_leadintelligenceinsights(<guid>)
```

## Attributes

Writable: **15** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_externalcrmorgid`, `msdyn_insightdata`, `msdyn_insighttype`, `msdyn_leadid`, `msdyn_leadintelligenceinsightId`, `msdyn_Name`, `msdyn_schemaversion`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_leadintelligenceinsight` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_leadintelligenceinsight_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_leadintelligenceinsight_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_leadintelligenceinsight_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_leadintelligenceinsight_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_leadintelligenceinsight` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_leadintelligenceinsight` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_leadintelligenceinsight` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_leadintelligenceinsight_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_leadintelligenceinsight_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_leadintelligenceinsight_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_leadintelligenceinsight_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_leadintelligenceinsight_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_leadintelligenceinsight_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_leadintelligenceinsight_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_leadintelligenceinsight_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_leadintelligenceinsightentitylink_leadintelligenceinsightId_msdyn_leadintelligenceinsight` | _n/a_ | `msdyn_leadintelligenceinsightid` | _n/a_ |


## Source

Generated from [msdyn_leadintelligenceinsight.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_leadintelligenceinsight.md) on 2026-05-06.