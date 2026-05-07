---
logical: "msdyn_synthesizeroutput"
display: "Summary Synthesizer Output"
entitySetName: "msdyn_synthesizeroutputs"
primaryId: "msdyn_synthesizeroutputid"
primaryName: "msdyn_name"
tableType: "Elastic"
ownership: "UserOwned"
---

# Summary Synthesizer Output

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_synthesizeroutput` |
| Display name | Summary Synthesizer Output |
| Display (plural) | Summary Synthesizer Outputs |
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

Writable: **12** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_componentresult`, `msdyn_IsComplete`, `msdyn_Name`, `msdyn_referenceobjectId`, `msdyn_referenceobjectidIdType`, `msdyn_synthesizeroutputId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PartitionId`, `TTLInSeconds`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_synthesizeroutput` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_synthesizeroutput_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_synthesizeroutput_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_synthesizeroutput_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_synthesizeroutput_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_synthesizeroutput_ReferenceObjectId_lead` | [lead](lead.md) | `msdyn_referenceobjectid` | `msdyn_referenceobjectid` |
| `msdyn_synthesizeroutput_ReferenceObjectId_opportunity` | [opportunity](opportunity.md) | `msdyn_referenceobjectid` | `msdyn_referenceobjectid` |
| `owner_msdyn_synthesizeroutput` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_synthesizeroutput` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_synthesizeroutput` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_synthesizeroutput_Annotations` | _n/a_ | `objectid` | _n/a_ |


## Source

Generated from [msdyn_synthesizeroutput.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_synthesizeroutput.md) on 2026-05-06.