---
logical: "msdyn_outreachagentresult"
display: "Risultato dell'agente di outreach"
entitySetName: "msdyn_outreachagentresults"
primaryId: "msdyn_outreachagentresultid"
primaryName: "msdyn_leadid"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Risultato dell'agente di outreach

Entità per salvare la risposta email dell'agente di outreach

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_outreachagentresult` |
| Display name | Risultato dell'agente di outreach |
| Display (plural) | Risultati dell'agente di outreach |
| Schema name | `msdyn_outreachagentresult` |
| Entity set (Web API) | `msdyn_outreachagentresults` |
| Primary id attribute | `msdyn_outreachagentresultid` |
| Primary name attribute | `msdyn_leadid` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_outreachagentresults?$select=msdyn_leadid&$top=10
GET /api/data/v9.2/msdyn_outreachagentresults(<guid>)
POST /api/data/v9.2/msdyn_outreachagentresults
PATCH /api/data/v9.2/msdyn_outreachagentresults(<guid>)
DELETE /api/data/v9.2/msdyn_outreachagentresults(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_emailresponse`, `msdyn_leadid`, `msdyn_outreachagentresultid`, `msdyn_salesAgentRunId`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_outreachagentresult_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_outreachagentresult_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_outreachagentresult_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_outreachagentresult_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_outreachagentresult` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_outreachagentresult` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_outreachagentresult` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_outreachagentresult` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_outreachagentresult_SyncErrors` | [msdyn_outreachagentresult](msdyn_outreachagentresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_outreachagentresult` |
| `msdyn_outreachagentresult_DuplicateMatchingRecord` | [msdyn_outreachagentresult](msdyn_outreachagentresult.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_outreachagentresult` |
| `msdyn_outreachagentresult_DuplicateBaseRecord` | [msdyn_outreachagentresult](msdyn_outreachagentresult.md) | `baserecordid` | `baserecordid_msdyn_outreachagentresult` |
| `msdyn_outreachagentresult_AsyncOperations` | [msdyn_outreachagentresult](msdyn_outreachagentresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_outreachagentresult` |
| `msdyn_outreachagentresult_MailboxTrackingFolders` | [msdyn_outreachagentresult](msdyn_outreachagentresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_outreachagentresult` |
| `msdyn_outreachagentresult_UserEntityInstanceDatas` | [msdyn_outreachagentresult](msdyn_outreachagentresult.md) | `objectid` | `objectid_msdyn_outreachagentresult` |
| `msdyn_outreachagentresult_ProcessSession` | [msdyn_outreachagentresult](msdyn_outreachagentresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_outreachagentresult` |
| `msdyn_outreachagentresult_BulkDeleteFailures` | [msdyn_outreachagentresult](msdyn_outreachagentresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_outreachagentresult` |
| `msdyn_outreachagentresult_PrincipalObjectAttributeAccesses` | [msdyn_outreachagentresult](msdyn_outreachagentresult.md) | `objectid` | `objectid_msdyn_outreachagentresult` |


## Source

Generated from [msdyn_outreachagentresult (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_outreachagentresult')) on 2026-05-07.