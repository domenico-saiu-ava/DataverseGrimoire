---
logical: "msdyn_virtualtablecolumncandidate"
display: "Candidato colonna della tabella virtuale"
entitySetName: "msdyn_virtualtablecolumncandidates"
primaryId: "msdyn_virtualtablecolumncandidateid"
primaryName: "msdyn_externalname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Candidato colonna della tabella virtuale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_virtualtablecolumncandidate` |
| Display name | Candidato colonna della tabella virtuale |
| Display (plural) | Candidati colonna della tabella virtuale |
| Schema name | `msdyn_virtualtablecolumncandidate` |
| Entity set (Web API) | `msdyn_virtualtablecolumncandidates` |
| Primary id attribute | `msdyn_virtualtablecolumncandidateid` |
| Primary name attribute | `msdyn_externalname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_virtualtablecolumncandidates?$select=msdyn_externalname&$top=10
GET /api/data/v9.2/msdyn_virtualtablecolumncandidates(<guid>)
POST /api/data/v9.2/msdyn_virtualtablecolumncandidates
PATCH /api/data/v9.2/msdyn_virtualtablecolumncandidates(<guid>)
DELETE /api/data/v9.2/msdyn_virtualtablecolumncandidates(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_displayname`, `msdyn_externalname`, `msdyn_schemaname`, `msdyn_virtualtablecolumncandidateid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_virtualtablecolumncandidate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_virtualtablecolumncandidate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_virtualtablecolumncandidate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_virtualtablecolumncandidate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_virtualtablecolumncandidate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_virtualtablecolumncandidate` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_virtualtablecolumncandidate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_virtualtablecolumncandidate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_virtualtablecolumncandidate_SyncErrors` | [msdyn_virtualtablecolumncandidate](msdyn_virtualtablecolumncandidate.md) | `regardingobjectid` | `regardingobjectid_msdyn_virtualtablecolumncandidate` |
| `msdyn_virtualtablecolumncandidate_DuplicateMatchingRecord` | [msdyn_virtualtablecolumncandidate](msdyn_virtualtablecolumncandidate.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_virtualtablecolumncandidate` |
| `msdyn_virtualtablecolumncandidate_DuplicateBaseRecord` | [msdyn_virtualtablecolumncandidate](msdyn_virtualtablecolumncandidate.md) | `baserecordid` | `baserecordid_msdyn_virtualtablecolumncandidate` |
| `msdyn_virtualtablecolumncandidate_AsyncOperations` | [msdyn_virtualtablecolumncandidate](msdyn_virtualtablecolumncandidate.md) | `regardingobjectid` | `regardingobjectid_msdyn_virtualtablecolumncandidate` |
| `msdyn_virtualtablecolumncandidate_MailboxTrackingFolders` | [msdyn_virtualtablecolumncandidate](msdyn_virtualtablecolumncandidate.md) | `regardingobjectid` | `regardingobjectid_msdyn_virtualtablecolumncandidate` |
| `msdyn_virtualtablecolumncandidate_UserEntityInstanceDatas` | [msdyn_virtualtablecolumncandidate](msdyn_virtualtablecolumncandidate.md) | `objectid` | `objectid_msdyn_virtualtablecolumncandidate` |
| `msdyn_virtualtablecolumncandidate_ProcessSession` | [msdyn_virtualtablecolumncandidate](msdyn_virtualtablecolumncandidate.md) | `regardingobjectid` | `regardingobjectid_msdyn_virtualtablecolumncandidate` |
| `msdyn_virtualtablecolumncandidate_BulkDeleteFailures` | [msdyn_virtualtablecolumncandidate](msdyn_virtualtablecolumncandidate.md) | `regardingobjectid` | `regardingobjectid_msdyn_virtualtablecolumncandidate` |
| `msdyn_virtualtablecolumncandidate_PrincipalObjectAttributeAccesses` | [msdyn_virtualtablecolumncandidate](msdyn_virtualtablecolumncandidate.md) | `objectid` | `objectid_msdyn_virtualtablecolumncandidate` |


## Source

Generated from [msdyn_virtualtablecolumncandidate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_virtualtablecolumncandidate')) on 2026-05-07.