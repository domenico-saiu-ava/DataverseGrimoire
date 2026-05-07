---
logical: "msdyn_timespent"
display: "Tempo dedicato nel processo aziendale"
entitySetName: "msdyn_timespents"
primaryId: "msdyn_timespentid"
primaryName: "msdyn_timespentname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Tempo dedicato nel processo aziendale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_timespent` |
| Display name | Tempo dedicato nel processo aziendale |
| Display (plural) | tempi impiegati |
| Schema name | `msdyn_timespent` |
| Entity set (Web API) | `msdyn_timespents` |
| Primary id attribute | `msdyn_timespentid` |
| Primary name attribute | `msdyn_timespentname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_timespents?$select=msdyn_timespentname&$top=10
GET /api/data/v9.2/msdyn_timespents(<guid>)
POST /api/data/v9.2/msdyn_timespents
PATCH /api/data/v9.2/msdyn_timespents(<guid>)
DELETE /api/data/v9.2/msdyn_timespents(<guid>)
```

## Attributes

Writable: **14** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_businessprocessflow`, `msdyn_leadlookup`, `msdyn_opplookup`, `msdyn_stage`, `msdyn_timespentid`, `msdyn_timespentindays`, `msdyn_timespentname`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_timespent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_timespent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_timespent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_timespent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_timespent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_timespent` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_timespent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_timespent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_lead_msdyn_timespent_leadlookup` | [lead](lead.md) | `msdyn_leadlookup` | `msdyn_leadlookup` |
| `msdyn_opportunity_msdyn_timespent_opplookup` | [opportunity](opportunity.md) | `msdyn_opplookup` | `msdyn_opplookup` |
| `msdyn_processstage_msdyn_timespent_stage` | [processstage](processstage.md) | `msdyn_stage` | `msdyn_stage` |
| `msdyn_workflow_msdyn_timespent_businessprocessflow` | [workflow](workflow.md) | `msdyn_businessprocessflow` | `msdyn_businessprocessflow` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_timespent_SyncErrors` | [msdyn_timespent](msdyn_timespent.md) | `regardingobjectid` | `regardingobjectid_msdyn_timespent` |
| `msdyn_timespent_DuplicateMatchingRecord` | [msdyn_timespent](msdyn_timespent.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_timespent` |
| `msdyn_timespent_DuplicateBaseRecord` | [msdyn_timespent](msdyn_timespent.md) | `baserecordid` | `baserecordid_msdyn_timespent` |
| `msdyn_timespent_AsyncOperations` | [msdyn_timespent](msdyn_timespent.md) | `regardingobjectid` | `regardingobjectid_msdyn_timespent` |
| `msdyn_timespent_MailboxTrackingFolders` | [msdyn_timespent](msdyn_timespent.md) | `regardingobjectid` | `regardingobjectid_msdyn_timespent` |
| `msdyn_timespent_UserEntityInstanceDatas` | [msdyn_timespent](msdyn_timespent.md) | `objectid` | `objectid_msdyn_timespent` |
| `msdyn_timespent_ProcessSession` | [msdyn_timespent](msdyn_timespent.md) | `regardingobjectid` | `regardingobjectid_msdyn_timespent` |
| `msdyn_timespent_BulkDeleteFailures` | [msdyn_timespent](msdyn_timespent.md) | `regardingobjectid` | `regardingobjectid_msdyn_timespent` |
| `msdyn_timespent_PrincipalObjectAttributeAccesses` | [msdyn_timespent](msdyn_timespent.md) | `objectid` | `objectid_msdyn_timespent` |


## Source

Generated from [msdyn_timespent (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_timespent')) on 2026-05-07.