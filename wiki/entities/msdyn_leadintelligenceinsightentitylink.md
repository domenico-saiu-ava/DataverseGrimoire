---
logical: "msdyn_leadintelligenceinsightentitylink"
display: "Lead Intelligence Insight Entity Link"
entitySetName: "msdyn_leadintelligenceinsightentitylinks"
primaryId: "msdyn_leadintelligenceinsightentitylinkid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Lead Intelligence Insight Entity Link

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_leadintelligenceinsightentitylink` |
| Display name | Lead Intelligence Insight Entity Link |
| Display (plural) | Lead Intelligence Insight Entity Links |
| Schema name | `msdyn_leadintelligenceinsightentitylink` |
| Entity set (Web API) | `msdyn_leadintelligenceinsightentitylinks` |
| Primary id attribute | `msdyn_leadintelligenceinsightentitylinkid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_leadintelligenceinsightentitylinks?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_leadintelligenceinsightentitylinks(<guid>)
POST /api/data/v9.2/msdyn_leadintelligenceinsightentitylinks
PATCH /api/data/v9.2/msdyn_leadintelligenceinsightentitylinks(<guid>)
DELETE /api/data/v9.2/msdyn_leadintelligenceinsightentitylinks(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_leadintelligenceinsightentitylinkId`, `msdyn_leadintelligenceinsightId`, `msdyn_Name`, `msdyn_regardingentityid`, `msdyn_regardingentitytype`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_leadintelligenceinsightentitylink` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_leadintelligenceinsightentitylink_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_leadintelligenceinsightentitylink_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_leadintelligenceinsightentitylink_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_leadintelligenceinsightentitylink_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_leadintelligenceinsightentitylink_leadintelligenceinsightId_msdyn_leadintelligenceinsight` | [msdyn_leadintelligenceinsight](msdyn_leadintelligenceinsight.md) | `msdyn_leadintelligenceinsightid` | `msdyn_leadintelligenceinsightId` |
| `owner_msdyn_leadintelligenceinsightentitylink` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_leadintelligenceinsightentitylink` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_leadintelligenceinsightentitylink` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_leadintelligenceinsightentitylink_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_leadintelligenceinsightentitylink_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_leadintelligenceinsightentitylink_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_leadintelligenceinsightentitylink_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_leadintelligenceinsightentitylink_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_leadintelligenceinsightentitylink_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_leadintelligenceinsightentitylink_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_leadintelligenceinsightentitylink_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_leadintelligenceinsightentitylink.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_leadintelligenceinsightentitylink.md) on 2026-05-06.