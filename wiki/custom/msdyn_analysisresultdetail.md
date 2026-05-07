---
logical: "msdyn_analysisresultdetail"
display: "Dettaglio sul risultato dell'analisi"
entitySetName: "msdyn_analysisresultdetails"
primaryId: "msdyn_analysisresultdetailid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Dettaglio sul risultato dell'analisi

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_analysisresultdetail` |
| Display name | Dettaglio sul risultato dell'analisi |
| Display (plural) | Dettagli sul risultato dell'analisi |
| Schema name | `msdyn_analysisresultdetail` |
| Entity set (Web API) | `msdyn_analysisresultdetails` |
| Primary id attribute | `msdyn_analysisresultdetailid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_analysisresultdetails?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_analysisresultdetails(<guid>)
POST /api/data/v9.2/msdyn_analysisresultdetails
PATCH /api/data/v9.2/msdyn_analysisresultdetails(<guid>)
DELETE /api/data/v9.2/msdyn_analysisresultdetails(<guid>)
```

## Attributes

Writable: **16** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_analysisresult`, `msdyn_analysisresultdetailid`, `msdyn_canopenentityrecord`, `msdyn_entityname`, `msdyn_message`, `msdyn_name`, `msdyn_resultentityid`, `msdyn_resultentitylogicalname`, `msdyn_resultentityprimarykey`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_analysisresultdetail_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_analysisresultdetail_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_analysisresultdetail_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_analysisresultdetail_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_analysisresultdetail` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_analysisresultdetail` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_analysisresultdetail` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_analysisresultdetail` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_analysisresult_msdyn_analysisresultdetail_AnalysisResult` | [msdyn_analysisresult](msdyn_analysisresult.md) | `msdyn_analysisresult` | `msdyn_AnalysisResult` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_analysisresultdetail_SyncErrors` | [msdyn_analysisresultdetail](msdyn_analysisresultdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysisresultdetail` |
| `msdyn_analysisresultdetail_DuplicateMatchingRecord` | [msdyn_analysisresultdetail](msdyn_analysisresultdetail.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_analysisresultdetail` |
| `msdyn_analysisresultdetail_DuplicateBaseRecord` | [msdyn_analysisresultdetail](msdyn_analysisresultdetail.md) | `baserecordid` | `baserecordid_msdyn_analysisresultdetail` |
| `msdyn_analysisresultdetail_AsyncOperations` | [msdyn_analysisresultdetail](msdyn_analysisresultdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysisresultdetail` |
| `msdyn_analysisresultdetail_MailboxTrackingFolders` | [msdyn_analysisresultdetail](msdyn_analysisresultdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysisresultdetail` |
| `msdyn_analysisresultdetail_UserEntityInstanceDatas` | [msdyn_analysisresultdetail](msdyn_analysisresultdetail.md) | `objectid` | `objectid_msdyn_analysisresultdetail` |
| `msdyn_analysisresultdetail_ProcessSession` | [msdyn_analysisresultdetail](msdyn_analysisresultdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysisresultdetail` |
| `msdyn_analysisresultdetail_BulkDeleteFailures` | [msdyn_analysisresultdetail](msdyn_analysisresultdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysisresultdetail` |
| `msdyn_analysisresultdetail_PrincipalObjectAttributeAccesses` | [msdyn_analysisresultdetail](msdyn_analysisresultdetail.md) | `objectid` | `objectid_msdyn_analysisresultdetail` |


## Source

Generated from [msdyn_analysisresultdetail (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_analysisresultdetail')) on 2026-05-07.