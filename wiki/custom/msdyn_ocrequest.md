---
logical: "msdyn_ocrequest"
display: "Richiesta Multicanale"
entitySetName: "msdyn_ocrequests"
primaryId: "msdyn_ocrequestid"
primaryName: "msdyn_requestname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Richiesta Multicanale

Entità per archiviare le richieste tramite Multicanale.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocrequest` |
| Display name | Richiesta Multicanale |
| Display (plural) | Richieste Multicanale |
| Schema name | `msdyn_ocrequest` |
| Entity set (Web API) | `msdyn_ocrequests` |
| Primary id attribute | `msdyn_ocrequestid` |
| Primary name attribute | `msdyn_requestname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocrequests?$select=msdyn_requestname&$top=10
GET /api/data/v9.2/msdyn_ocrequests(<guid>)
POST /api/data/v9.2/msdyn_ocrequests
PATCH /api/data/v9.2/msdyn_ocrequests(<guid>)
DELETE /api/data/v9.2/msdyn_ocrequests(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_liveworkitemid`, `msdyn_ocrequestid`, `msdyn_requestname`, `msdyn_requestproperties`, `msdyn_requesttype`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_ocrequest_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocrequest_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocrequest_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocrequest_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_ocrequest` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_ocrequest` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_ocrequest` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_ocrequest` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_ocliveworkitem_msdyn_ocrequest_LiveWorkItemId` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_liveworkitemid` | `msdyn_LiveWorkItemId` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocrequest_SyncErrors` | [msdyn_ocrequest](msdyn_ocrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocrequest` |
| `msdyn_ocrequest_DuplicateMatchingRecord` | [msdyn_ocrequest](msdyn_ocrequest.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_ocrequest` |
| `msdyn_ocrequest_DuplicateBaseRecord` | [msdyn_ocrequest](msdyn_ocrequest.md) | `baserecordid` | `baserecordid_msdyn_ocrequest` |
| `msdyn_ocrequest_AsyncOperations` | [msdyn_ocrequest](msdyn_ocrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocrequest` |
| `msdyn_ocrequest_MailboxTrackingFolders` | [msdyn_ocrequest](msdyn_ocrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocrequest` |
| `msdyn_ocrequest_UserEntityInstanceDatas` | [msdyn_ocrequest](msdyn_ocrequest.md) | `objectid` | `objectid_msdyn_ocrequest` |
| `msdyn_ocrequest_ProcessSession` | [msdyn_ocrequest](msdyn_ocrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocrequest` |
| `msdyn_ocrequest_BulkDeleteFailures` | [msdyn_ocrequest](msdyn_ocrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocrequest` |
| `msdyn_ocrequest_PrincipalObjectAttributeAccesses` | [msdyn_ocrequest](msdyn_ocrequest.md) | `objectid` | `objectid_msdyn_ocrequest` |


## Source

Generated from [msdyn_ocrequest (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ocrequest')) on 2026-05-07.