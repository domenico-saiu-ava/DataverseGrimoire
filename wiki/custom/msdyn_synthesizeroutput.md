---
logical: "msdyn_synthesizeroutput"
display: "Output sintetizzatore di riepilogo"
entitySetName: "msdyn_synthesizeroutputs"
primaryId: "msdyn_synthesizeroutputid"
primaryName: "msdyn_name"
tableType: "Elastic"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Output sintetizzatore di riepilogo

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_synthesizeroutput` |
| Display name | Output sintetizzatore di riepilogo |
| Display (plural) | Output sintetizzatore riepilogo |
| Schema name | `msdyn_synthesizeroutput` |
| Entity set (Web API) | `msdyn_synthesizeroutputs` |
| Primary id attribute | `msdyn_synthesizeroutputid` |
| Primary name attribute | `msdyn_name` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_synthesizeroutputs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_synthesizeroutputs(<guid>)
POST /api/data/v9.2/msdyn_synthesizeroutputs
PATCH /api/data/v9.2/msdyn_synthesizeroutputs(<guid>)
DELETE /api/data/v9.2/msdyn_synthesizeroutputs(<guid>)
```

## Attributes

Writable: **10** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_componentresult`, `msdyn_iscomplete`, `msdyn_name`, `msdyn_referenceobjectid`, `msdyn_synthesizeroutputid`, `overriddencreatedon`, `ownerid`, `partitionid`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_synthesizeroutput_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_synthesizeroutput_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_synthesizeroutput_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_synthesizeroutput_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_synthesizeroutput` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_synthesizeroutput` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_synthesizeroutput` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_synthesizeroutput` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_synthesizeroutput_ReferenceObjectId_lead` | [lead](lead.md) | `msdyn_referenceobjectid` | `msdyn_referenceobjectid` |
| `msdyn_synthesizeroutput_ReferenceObjectId_opportunity` | [opportunity](opportunity.md) | `msdyn_referenceobjectid` | `msdyn_referenceobjectid` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_synthesizeroutput_Annotations` | [msdyn_synthesizeroutput](msdyn_synthesizeroutput.md) | `objectid` | `objectid_msdyn_synthesizeroutput` |


## Source

Generated from [msdyn_synthesizeroutput (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_synthesizeroutput')) on 2026-05-07.