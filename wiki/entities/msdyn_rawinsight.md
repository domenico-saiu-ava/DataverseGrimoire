---
logical: "msdyn_rawinsight"
display: "msdyn_rawinsight"
entitySetName: "msdyn_rawinsights"
primaryId: "msdyn_rawinsightid"
primaryName: "msdyn_name"
tableType: "Elastic"
ownership: "UserOwned"
---

# msdyn_rawinsight

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_rawinsight` |
| Display name | msdyn_rawinsight |
| Display (plural) | msdyn_rawinsights |
| Schema name | `msdyn_rawinsight` |
| Entity set (Web API) | `msdyn_rawinsights` |
| Primary id attribute | `msdyn_rawinsightid` |
| Primary name attribute | `msdyn_name` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_rawinsights?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_rawinsights(<guid>)
POST /api/data/v9.2/msdyn_rawinsights
PATCH /api/data/v9.2/msdyn_rawinsights(<guid>)
DELETE /api/data/v9.2/msdyn_rawinsights(<guid>)
```

## Attributes

Writable: **22** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_audienceaccess`, `msdyn_dataformatversion`, `msdyn_externalcrmorgid`, `msdyn_insightlocale`, `msdyn_insightsdata`, `msdyn_isInsightInOriginalLocale`, `msdyn_metadata`, `msdyn_Name`, `msdyn_rawinsightId`, `msdyn_rowsize`, `msdyn_sourceeventgroup`, `msdyn_sourceeventtype`, `msdyn_sourcegroupid`, `msdyn_sourceid`, `msdyn_sourcetimestamp`, `msdyn_targets`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PartitionId`, `TTLInSeconds`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_rawinsight` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_rawinsight_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_rawinsight_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_rawinsight_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_rawinsight_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_rawinsight` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_rawinsight` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_rawinsight` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |



## Source

Generated from [msdyn_rawinsight.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_rawinsight.md) on 2026-05-06.