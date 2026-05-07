---
logical: "msdyn_opportunityrankermapping"
display: "Opportunity Ranker Mapping"
entitySetName: "msdyn_opportunityrankermappings"
primaryId: "msdyn_opportunityrankermappingid"
primaryName: "msdyn_recordid"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **23** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_bantdata`, `msdyn_conversationid`, `msdyn_detectedcompetitors`, `msdyn_emailcontent`, `msdyn_emailinsight`, `msdyn_emailinsightshistory`, `msdyn_emailparticipants`, `msdyn_generatedemailinsights`, `msdyn_mappedopportunityid`, `msdyn_mappedresponse`, `msdyn_messageid`, `msdyn_opportunitymappingtype`, `msdyn_opportunityrankermappingid`, `msdyn_recordid`, `msdyn_relevancescore`, `msdyn_sourcetype`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_opportunityrankermapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_opportunityrankermapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_opportunityrankermapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_opportunityrankermapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_opportunityrankermapping` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_opportunityrankermapping` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_opportunityrankermapping` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_opportunityrankermapping` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_opportunityrankermapping_SyncErrors` | [msdyn_opportunityrankermapping](msdyn_opportunityrankermapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunityrankermapping` |
| `msdyn_opportunityrankermapping_AsyncOperations` | [msdyn_opportunityrankermapping](msdyn_opportunityrankermapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunityrankermapping` |
| `msdyn_opportunityrankermapping_MailboxTrackingFolders` | [msdyn_opportunityrankermapping](msdyn_opportunityrankermapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunityrankermapping` |
| `msdyn_opportunityrankermapping_UserEntityInstanceDatas` | [msdyn_opportunityrankermapping](msdyn_opportunityrankermapping.md) | `objectid` | `objectid_msdyn_opportunityrankermapping` |
| `msdyn_opportunityrankermapping_ProcessSession` | [msdyn_opportunityrankermapping](msdyn_opportunityrankermapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunityrankermapping` |
| `msdyn_opportunityrankermapping_BulkDeleteFailures` | [msdyn_opportunityrankermapping](msdyn_opportunityrankermapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunityrankermapping` |
| `msdyn_opportunityrankermapping_PrincipalObjectAttributeAccesses` | [msdyn_opportunityrankermapping](msdyn_opportunityrankermapping.md) | `objectid` | `objectid_msdyn_opportunityrankermapping` |


## Source

Generated from [msdyn_opportunityrankermapping (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_opportunityrankermapping')) on 2026-05-07.