---
logical: "msdyn_routingrequest"
display: "RoutingRequest"
entitySetName: "msdyn_routingrequests"
primaryId: "msdyn_routingrequestid"
primaryName: "msdyn_entitylogicalname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# RoutingRequest

Entità definizione richiesta di gestione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_routingrequest` |
| Display name | RoutingRequest |
| Display (plural) | RoutingRequests |
| Schema name | `msdyn_routingrequest` |
| Entity set (Web API) | `msdyn_routingrequests` |
| Primary id attribute | `msdyn_routingrequestid` |
| Primary name attribute | `msdyn_entitylogicalname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_routingrequests?$select=msdyn_entitylogicalname&$top=10
GET /api/data/v9.2/msdyn_routingrequests(<guid>)
POST /api/data/v9.2/msdyn_routingrequests
PATCH /api/data/v9.2/msdyn_routingrequests(<guid>)
DELETE /api/data/v9.2/msdyn_routingrequests(<guid>)
```

## Attributes

Writable: **15** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_entitylogicalname`, `msdyn_entityrecordid`, `msdyn_entitysetname`, `msdyn_queueid`, `msdyn_queueitemid`, `msdyn_relationshipnamewithliveworkitem`, `msdyn_routingrequestid`, `msdyn_routingrequesttitle`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_routingrequest_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_routingrequest_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_routingrequest_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_routingrequest_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_routingrequest` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_routingrequest` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_routingrequest` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_routingrequest` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_routingrequest_SyncErrors` | [msdyn_routingrequest](msdyn_routingrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_routingrequest` |
| `msdyn_routingrequest_DuplicateMatchingRecord` | [msdyn_routingrequest](msdyn_routingrequest.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_routingrequest` |
| `msdyn_routingrequest_DuplicateBaseRecord` | [msdyn_routingrequest](msdyn_routingrequest.md) | `baserecordid` | `baserecordid_msdyn_routingrequest` |
| `msdyn_routingrequest_AsyncOperations` | [msdyn_routingrequest](msdyn_routingrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_routingrequest` |
| `msdyn_routingrequest_MailboxTrackingFolders` | [msdyn_routingrequest](msdyn_routingrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_routingrequest` |
| `msdyn_routingrequest_UserEntityInstanceDatas` | [msdyn_routingrequest](msdyn_routingrequest.md) | `objectid` | `objectid_msdyn_routingrequest` |
| `msdyn_routingrequest_ProcessSession` | [msdyn_routingrequest](msdyn_routingrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_routingrequest` |
| `msdyn_routingrequest_BulkDeleteFailures` | [msdyn_routingrequest](msdyn_routingrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_routingrequest` |
| `msdyn_routingrequest_PrincipalObjectAttributeAccesses` | [msdyn_routingrequest](msdyn_routingrequest.md) | `objectid` | `objectid_msdyn_routingrequest` |


## Source

Generated from [msdyn_routingrequest (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_routingrequest')) on 2026-05-07.