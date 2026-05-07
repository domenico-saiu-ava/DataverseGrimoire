---
logical: "msdyn_summarysynthesizerinput"
display: "Input sintetizzatore riepilogo"
entitySetName: "msdyn_summarysynthesizerinputs"
primaryId: "msdyn_summarysynthesizerinputid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Input sintetizzatore riepilogo

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_summarysynthesizerinput` |
| Display name | Input sintetizzatore riepilogo |
| Display (plural) | Input sintetizzatore riepilogo |
| Schema name | `msdyn_summarysynthesizerinput` |
| Entity set (Web API) | `msdyn_summarysynthesizerinputs` |
| Primary id attribute | `msdyn_summarysynthesizerinputid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_summarysynthesizerinputs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_summarysynthesizerinputs(<guid>)
POST /api/data/v9.2/msdyn_summarysynthesizerinputs
PATCH /api/data/v9.2/msdyn_summarysynthesizerinputs(<guid>)
DELETE /api/data/v9.2/msdyn_summarysynthesizerinputs(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_agentname`, `msdyn_componentresult`, `msdyn_name`, `msdyn_referenceobjectid`, `msdyn_summarysynthesizerinputid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_summarysynthesizerinput_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_summarysynthesizerinput_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_summarysynthesizerinput_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_summarysynthesizerinput_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_summarysynthesizerinput` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_summarysynthesizerinput` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_summarysynthesizerinput` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_summarysynthesizerinput` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_summarysynthesizerinput_referenceobjectid_lead` | [lead](lead.md) | `msdyn_referenceobjectid` | `msdyn_referenceobjectid` |
| `msdyn_summarysynthesizerinput_referenceobjectid_opportunity` | [opportunity](opportunity.md) | `msdyn_referenceobjectid` | `msdyn_referenceobjectid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_summarysynthesizerinput_SyncErrors` | [msdyn_summarysynthesizerinput](msdyn_summarysynthesizerinput.md) | `regardingobjectid` | `regardingobjectid_msdyn_summarysynthesizerinput` |
| `msdyn_summarysynthesizerinput_AsyncOperations` | [msdyn_summarysynthesizerinput](msdyn_summarysynthesizerinput.md) | `regardingobjectid` | `regardingobjectid_msdyn_summarysynthesizerinput` |
| `msdyn_summarysynthesizerinput_MailboxTrackingFolders` | [msdyn_summarysynthesizerinput](msdyn_summarysynthesizerinput.md) | `regardingobjectid` | `regardingobjectid_msdyn_summarysynthesizerinput` |
| `msdyn_summarysynthesizerinput_UserEntityInstanceDatas` | [msdyn_summarysynthesizerinput](msdyn_summarysynthesizerinput.md) | `objectid` | `objectid_msdyn_summarysynthesizerinput` |
| `msdyn_summarysynthesizerinput_ProcessSession` | [msdyn_summarysynthesizerinput](msdyn_summarysynthesizerinput.md) | `regardingobjectid` | `regardingobjectid_msdyn_summarysynthesizerinput` |
| `msdyn_summarysynthesizerinput_BulkDeleteFailures` | [msdyn_summarysynthesizerinput](msdyn_summarysynthesizerinput.md) | `regardingobjectid` | `regardingobjectid_msdyn_summarysynthesizerinput` |
| `msdyn_summarysynthesizerinput_PrincipalObjectAttributeAccesses` | [msdyn_summarysynthesizerinput](msdyn_summarysynthesizerinput.md) | `objectid` | `objectid_msdyn_summarysynthesizerinput` |
| `msdyn_summarysynthesizerinput_Annotations` | [msdyn_summarysynthesizerinput](msdyn_summarysynthesizerinput.md) | `objectid` | `objectid_msdyn_summarysynthesizerinput` |


## Source

Generated from [msdyn_summarysynthesizerinput (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_summarysynthesizerinput')) on 2026-05-07.