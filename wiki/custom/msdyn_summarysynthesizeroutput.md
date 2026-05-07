---
logical: "msdyn_summarysynthesizeroutput"
display: "summarysynthesizeroutput (deprecato)"
entitySetName: "msdyn_summarysynthesizeroutputs"
primaryId: "msdyn_summarysynthesizeroutputid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# summarysynthesizeroutput (deprecato)

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_summarysynthesizeroutput` |
| Display name | summarysynthesizeroutput (deprecato) |
| Display (plural) | Oggetti summarysynthesizeroutput |
| Schema name | `msdyn_summarysynthesizeroutput` |
| Entity set (Web API) | `msdyn_summarysynthesizeroutputs` |
| Primary id attribute | `msdyn_summarysynthesizeroutputid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_summarysynthesizeroutputs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_summarysynthesizeroutputs(<guid>)
POST /api/data/v9.2/msdyn_summarysynthesizeroutputs
PATCH /api/data/v9.2/msdyn_summarysynthesizeroutputs(<guid>)
DELETE /api/data/v9.2/msdyn_summarysynthesizeroutputs(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_componentresult`, `msdyn_iscomplete`, `msdyn_name`, `msdyn_referenceobjectid`, `msdyn_summarysynthesizeroutputid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_summarysynthesizeroutput_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_summarysynthesizeroutput_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_summarysynthesizeroutput_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_summarysynthesizeroutput_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_summarysynthesizeroutput` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_summarysynthesizeroutput` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_summarysynthesizeroutput` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_summarysynthesizeroutput` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_summarysynthesizeroutput_ReferenceObjectId_lead` | [lead](lead.md) | `msdyn_referenceobjectid` | `msdyn_referenceobjectid` |
| `msdyn_summarysynthesizeroutput_ReferenceObjectId_opportunity` | [opportunity](opportunity.md) | `msdyn_referenceobjectid` | `msdyn_referenceobjectid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_summarysynthesizeroutput_SyncErrors` | [msdyn_summarysynthesizeroutput](msdyn_summarysynthesizeroutput.md) | `regardingobjectid` | `regardingobjectid_msdyn_summarysynthesizeroutput` |
| `msdyn_summarysynthesizeroutput_DuplicateMatchingRecord` | [msdyn_summarysynthesizeroutput](msdyn_summarysynthesizeroutput.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_summarysynthesizeroutput` |
| `msdyn_summarysynthesizeroutput_DuplicateBaseRecord` | [msdyn_summarysynthesizeroutput](msdyn_summarysynthesizeroutput.md) | `baserecordid` | `baserecordid_msdyn_summarysynthesizeroutput` |
| `msdyn_summarysynthesizeroutput_AsyncOperations` | [msdyn_summarysynthesizeroutput](msdyn_summarysynthesizeroutput.md) | `regardingobjectid` | `regardingobjectid_msdyn_summarysynthesizeroutput` |
| `msdyn_summarysynthesizeroutput_MailboxTrackingFolders` | [msdyn_summarysynthesizeroutput](msdyn_summarysynthesizeroutput.md) | `regardingobjectid` | `regardingobjectid_msdyn_summarysynthesizeroutput` |
| `msdyn_summarysynthesizeroutput_UserEntityInstanceDatas` | [msdyn_summarysynthesizeroutput](msdyn_summarysynthesizeroutput.md) | `objectid` | `objectid_msdyn_summarysynthesizeroutput` |
| `msdyn_summarysynthesizeroutput_ProcessSession` | [msdyn_summarysynthesizeroutput](msdyn_summarysynthesizeroutput.md) | `regardingobjectid` | `regardingobjectid_msdyn_summarysynthesizeroutput` |
| `msdyn_summarysynthesizeroutput_BulkDeleteFailures` | [msdyn_summarysynthesizeroutput](msdyn_summarysynthesizeroutput.md) | `regardingobjectid` | `regardingobjectid_msdyn_summarysynthesizeroutput` |
| `msdyn_summarysynthesizeroutput_PrincipalObjectAttributeAccesses` | [msdyn_summarysynthesizeroutput](msdyn_summarysynthesizeroutput.md) | `objectid` | `objectid_msdyn_summarysynthesizeroutput` |
| `msdyn_summarysynthesizeroutput_Annotations` | [msdyn_summarysynthesizeroutput](msdyn_summarysynthesizeroutput.md) | `objectid` | `objectid_msdyn_summarysynthesizeroutput` |


## Source

Generated from [msdyn_summarysynthesizeroutput (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_summarysynthesizeroutput')) on 2026-05-07.