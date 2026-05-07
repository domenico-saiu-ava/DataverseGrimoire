---
logical: "msdyn_knowledgeharvestjobrecord"
display: "Record processo di raccolta Knowledge Base"
entitySetName: "msdyn_knowledgeharvestjobrecords"
primaryId: "msdyn_knowledgeharvestjobrecordid"
primaryName: "msdyn_entityids"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Record processo di raccolta Knowledge Base

Record dell'entità di registrazione utilizzato per attivare il processo di raccolta degli articoli della Knowledge Base

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_knowledgeharvestjobrecord` |
| Display name | Record processo di raccolta Knowledge Base |
| Display (plural) | Record dei processi di raccolta della Knowledge Base |
| Schema name | `msdyn_knowledgeharvestjobrecord` |
| Entity set (Web API) | `msdyn_knowledgeharvestjobrecords` |
| Primary id attribute | `msdyn_knowledgeharvestjobrecordid` |
| Primary name attribute | `msdyn_entityids` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_knowledgeharvestjobrecords?$select=msdyn_entityids&$top=10
GET /api/data/v9.2/msdyn_knowledgeharvestjobrecords(<guid>)
POST /api/data/v9.2/msdyn_knowledgeharvestjobrecords
PATCH /api/data/v9.2/msdyn_knowledgeharvestjobrecords(<guid>)
DELETE /api/data/v9.2/msdyn_knowledgeharvestjobrecords(<guid>)
```

## Attributes

Writable: **14** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_additionalinformation`, `msdyn_entityids`, `msdyn_entityname`, `msdyn_harvesttype`, `msdyn_historicalharvestbatchid`, `msdyn_historicalharvestrunid`, `msdyn_knowledgeharvestjobrecordid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_knowledgeharvestjobrecord_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_knowledgeharvestjobrecord_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_knowledgeharvestjobrecord_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_knowledgeharvestjobrecord_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_knowledgeharvestjobrecord` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_knowledgeharvestjobrecord` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_knowledgeharvestjobrecord` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_knowledgeharvestjobrecord` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_knowledgeharvestjobrecord_SyncErrors` | [msdyn_knowledgeharvestjobrecord](msdyn_knowledgeharvestjobrecord.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgeharvestjobrecord` |
| `msdyn_knowledgeharvestjobrecord_AsyncOperations` | [msdyn_knowledgeharvestjobrecord](msdyn_knowledgeharvestjobrecord.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgeharvestjobrecord` |
| `msdyn_knowledgeharvestjobrecord_MailboxTrackingFolders` | [msdyn_knowledgeharvestjobrecord](msdyn_knowledgeharvestjobrecord.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgeharvestjobrecord` |
| `msdyn_knowledgeharvestjobrecord_UserEntityInstanceDatas` | [msdyn_knowledgeharvestjobrecord](msdyn_knowledgeharvestjobrecord.md) | `objectid` | `objectid_msdyn_knowledgeharvestjobrecord` |
| `msdyn_knowledgeharvestjobrecord_ProcessSession` | [msdyn_knowledgeharvestjobrecord](msdyn_knowledgeharvestjobrecord.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgeharvestjobrecord` |
| `msdyn_knowledgeharvestjobrecord_BulkDeleteFailures` | [msdyn_knowledgeharvestjobrecord](msdyn_knowledgeharvestjobrecord.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgeharvestjobrecord` |
| `msdyn_knowledgeharvestjobrecord_PrincipalObjectAttributeAccesses` | [msdyn_knowledgeharvestjobrecord](msdyn_knowledgeharvestjobrecord.md) | `objectid` | `objectid_msdyn_knowledgeharvestjobrecord` |


## Source

Generated from [msdyn_knowledgeharvestjobrecord (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_knowledgeharvestjobrecord')) on 2026-05-07.