---
logical: "msdyn_serviceoneprovisioningrequest"
display: "Richiesta di provisioning di Sales"
entitySetName: "msdyn_serviceoneprovisioningrequests"
primaryId: "msdyn_serviceoneprovisioningrequestid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Richiesta di provisioning di Sales

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_serviceoneprovisioningrequest` |
| Display name | Richiesta di provisioning di Sales |
| Display (plural) | Richieste di provisioning di Sales |
| Schema name | `msdyn_serviceoneprovisioningrequest` |
| Entity set (Web API) | `msdyn_serviceoneprovisioningrequests` |
| Primary id attribute | `msdyn_serviceoneprovisioningrequestid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_serviceoneprovisioningrequests?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_serviceoneprovisioningrequests(<guid>)
POST /api/data/v9.2/msdyn_serviceoneprovisioningrequests
PATCH /api/data/v9.2/msdyn_serviceoneprovisioningrequests(<guid>)
DELETE /api/data/v9.2/msdyn_serviceoneprovisioningrequests(<guid>)
```

## Attributes

Writable: **16** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_endtime`, `msdyn_name`, `msdyn_operationdefinition`, `msdyn_operationid`, `msdyn_result`, `msdyn_serviceoneprovisioningrequestid`, `msdyn_starttime`, `msdyn_state`, `msdyn_steps`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_serviceoneprovisioningrequest_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_serviceoneprovisioningrequest_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_serviceoneprovisioningrequest_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_serviceoneprovisioningrequest_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_serviceoneprovisioningrequest` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_serviceoneprovisioningrequest` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_serviceoneprovisioningrequest` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_serviceoneprovisioningrequest` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_serviceoneprovisioningrequest_SyncErrors` | [msdyn_serviceoneprovisioningrequest](msdyn_serviceoneprovisioningrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_serviceoneprovisioningrequest` |
| `msdyn_serviceoneprovisioningrequest_DuplicateMatchingRecord` | [msdyn_serviceoneprovisioningrequest](msdyn_serviceoneprovisioningrequest.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_serviceoneprovisioningrequest` |
| `msdyn_serviceoneprovisioningrequest_DuplicateBaseRecord` | [msdyn_serviceoneprovisioningrequest](msdyn_serviceoneprovisioningrequest.md) | `baserecordid` | `baserecordid_msdyn_serviceoneprovisioningrequest` |
| `msdyn_serviceoneprovisioningrequest_AsyncOperations` | [msdyn_serviceoneprovisioningrequest](msdyn_serviceoneprovisioningrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_serviceoneprovisioningrequest` |
| `msdyn_serviceoneprovisioningrequest_MailboxTrackingFolders` | [msdyn_serviceoneprovisioningrequest](msdyn_serviceoneprovisioningrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_serviceoneprovisioningrequest` |
| `msdyn_serviceoneprovisioningrequest_UserEntityInstanceDatas` | [msdyn_serviceoneprovisioningrequest](msdyn_serviceoneprovisioningrequest.md) | `objectid` | `objectid_msdyn_serviceoneprovisioningrequest` |
| `msdyn_serviceoneprovisioningrequest_ProcessSession` | [msdyn_serviceoneprovisioningrequest](msdyn_serviceoneprovisioningrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_serviceoneprovisioningrequest` |
| `msdyn_serviceoneprovisioningrequest_BulkDeleteFailures` | [msdyn_serviceoneprovisioningrequest](msdyn_serviceoneprovisioningrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_serviceoneprovisioningrequest` |
| `msdyn_serviceoneprovisioningrequest_PrincipalObjectAttributeAccesses` | [msdyn_serviceoneprovisioningrequest](msdyn_serviceoneprovisioningrequest.md) | `objectid` | `objectid_msdyn_serviceoneprovisioningrequest` |


## Source

Generated from [msdyn_serviceoneprovisioningrequest (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_serviceoneprovisioningrequest')) on 2026-05-07.