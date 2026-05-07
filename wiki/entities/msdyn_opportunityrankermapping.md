---
logical: "msdyn_opportunityrankermapping"
display: "Opportunity Ranker Mapping"
entitySetName: "msdyn_opportunityrankermappings"
primaryId: "msdyn_opportunityrankermappingid"
primaryName: "msdyn_recordid"
tableType: "Standard"
ownership: "UserOwned"
---

# Opportunity Ranker Mapping

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_opportunityrankermapping` |
| Display name | Opportunity Ranker Mapping |
| Display (plural) | Opportunity Ranker Mappings |
| Schema name | `msdyn_OpportunityRankerMapping` |
| Entity set (Web API) | `msdyn_opportunityrankermappings` |
| Primary id attribute | `msdyn_opportunityrankermappingid` |
| Primary name attribute | `msdyn_recordid` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_opportunityrankermappings?$select=msdyn_recordid&$top=10
GET /api/data/v9.2/msdyn_opportunityrankermappings(<guid>)
POST /api/data/v9.2/msdyn_opportunityrankermappings
PATCH /api/data/v9.2/msdyn_opportunityrankermappings(<guid>)
DELETE /api/data/v9.2/msdyn_opportunityrankermappings(<guid>)
```

## Attributes

Writable: **22** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_conversationid`, `msdyn_detectedcompetitors`, `msdyn_emailcontent`, `msdyn_emailinsight`, `msdyn_emailparticipants`, `msdyn_generatedemailinsights`, `msdyn_mappedopportunityid`, `msdyn_mappedresponse`, `msdyn_messageid`, `msdyn_OpportunityMappingType`, `msdyn_OpportunityRankerMappingId`, `msdyn_recordid`, `msdyn_relevancescore`, `msdyn_SourceType`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_opportunityrankermapping` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_opportunityrankermapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_opportunityrankermapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_opportunityrankermapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_opportunityrankermapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_opportunityrankermapping` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_opportunityrankermapping` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_opportunityrankermapping` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_opportunityrankermapping_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_opportunityrankermapping_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_opportunityrankermapping_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_opportunityrankermapping_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_opportunityrankermapping_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_opportunityrankermapping_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_opportunityrankermapping.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_opportunityrankermapping.md) on 2026-05-06.