---
logical: "msdyn_leadintelligenceinsightentitylink"
display: "Lead Intelligence Insight Entity Link"
entitySetName: "msdyn_leadintelligenceinsightentitylinks"
primaryId: "msdyn_leadintelligenceinsightentitylinkid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_leadintelligenceinsightentitylinkid`, `msdyn_leadintelligenceinsightid`, `msdyn_name`, `msdyn_regardingentityid`, `msdyn_regardingentitytype`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_leadintelligenceinsightentitylink_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_leadintelligenceinsightentitylink_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_leadintelligenceinsightentitylink_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_leadintelligenceinsightentitylink_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_leadintelligenceinsightentitylink` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_leadintelligenceinsightentitylink` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_leadintelligenceinsightentitylink` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_leadintelligenceinsightentitylink` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_leadintelligenceinsightentitylink_leadintelligenceinsightId_msdyn_leadintelligenceinsight` | [msdyn_leadintelligenceinsight](msdyn_leadintelligenceinsight.md) | `msdyn_leadintelligenceinsightid` | `msdyn_leadintelligenceinsightId` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_leadintelligenceinsightentitylink_SyncErrors` | [msdyn_leadintelligenceinsightentitylink](msdyn_leadintelligenceinsightentitylink.md) | `regardingobjectid` | `regardingobjectid_msdyn_leadintelligenceinsightentitylink` |
| `msdyn_leadintelligenceinsightentitylink_DuplicateMatchingRecord` | [msdyn_leadintelligenceinsightentitylink](msdyn_leadintelligenceinsightentitylink.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_leadintelligenceinsightentitylink` |
| `msdyn_leadintelligenceinsightentitylink_DuplicateBaseRecord` | [msdyn_leadintelligenceinsightentitylink](msdyn_leadintelligenceinsightentitylink.md) | `baserecordid` | `baserecordid_msdyn_leadintelligenceinsightentitylink` |
| `msdyn_leadintelligenceinsightentitylink_AsyncOperations` | [msdyn_leadintelligenceinsightentitylink](msdyn_leadintelligenceinsightentitylink.md) | `regardingobjectid` | `regardingobjectid_msdyn_leadintelligenceinsightentitylink` |
| `msdyn_leadintelligenceinsightentitylink_MailboxTrackingFolders` | [msdyn_leadintelligenceinsightentitylink](msdyn_leadintelligenceinsightentitylink.md) | `regardingobjectid` | `regardingobjectid_msdyn_leadintelligenceinsightentitylink` |
| `msdyn_leadintelligenceinsightentitylink_UserEntityInstanceDatas` | [msdyn_leadintelligenceinsightentitylink](msdyn_leadintelligenceinsightentitylink.md) | `objectid` | `objectid_msdyn_leadintelligenceinsightentitylink` |
| `msdyn_leadintelligenceinsightentitylink_ProcessSession` | [msdyn_leadintelligenceinsightentitylink](msdyn_leadintelligenceinsightentitylink.md) | `regardingobjectid` | `regardingobjectid_msdyn_leadintelligenceinsightentitylink` |
| `msdyn_leadintelligenceinsightentitylink_BulkDeleteFailures` | [msdyn_leadintelligenceinsightentitylink](msdyn_leadintelligenceinsightentitylink.md) | `regardingobjectid` | `regardingobjectid_msdyn_leadintelligenceinsightentitylink` |
| `msdyn_leadintelligenceinsightentitylink_PrincipalObjectAttributeAccesses` | [msdyn_leadintelligenceinsightentitylink](msdyn_leadintelligenceinsightentitylink.md) | `objectid` | `objectid_msdyn_leadintelligenceinsightentitylink` |


## Source

Generated from [msdyn_leadintelligenceinsightentitylink (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_leadintelligenceinsightentitylink')) on 2026-05-07.