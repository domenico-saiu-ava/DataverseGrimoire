---
logical: "msdyn_teamscollaboration"
display: "Microsoft Teams Collaboration entity"
entitySetName: "msdyn_teamscollaborations"
primaryId: "msdyn_teamscollaborationid"
primaryName: "msdyn_teamname"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Microsoft Teams Collaboration entity

Entity which stores collaboration data of Dynamics 365 with Microsoft Teams

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_teamscollaboration` |
| Display name | Microsoft Teams Collaboration entity |
| Display (plural) | Microsoft Teams Collaboration entities |
| Schema name | `msdyn_TeamsCollaboration` |
| Entity set (Web API) | `msdyn_teamscollaborations` |
| Primary id attribute | `msdyn_teamscollaborationid` |
| Primary name attribute | `msdyn_teamname` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_teamscollaborations?$select=msdyn_teamname&$top=10
GET /api/data/v9.2/msdyn_teamscollaborations(<guid>)
POST /api/data/v9.2/msdyn_teamscollaborations
PATCH /api/data/v9.2/msdyn_teamscollaborations(<guid>)
DELETE /api/data/v9.2/msdyn_teamscollaborations(<guid>)
```

## Attributes

Writable: **23** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_appid`, `msdyn_channelfolderrelativeurl`, `msdyn_channelid`, `msdyn_channelname`, `msdyn_channeltype`, `msdyn_contenturl`, `msdyn_groupid`, `msdyn_pipedentityid`, `msdyn_teamid`, `msdyn_teamname`, `msdyn_teamscollaborationid`, `msdyn_teamsiteurl`, `msdyn_tenantid`, `msdyn_weburl`, `overriddencreatedon`, `regardingobjectid`, `regardingobjecttypecode`, `regardingobjecttypename`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_teamscollaboration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_teamscollaboration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_teamscollaboration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_teamscollaboration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_teamscollaboration_SyncErrors` | [msdyn_teamscollaboration](msdyn_teamscollaboration.md) | `regardingobjectid` | `regardingobjectid_msdyn_teamscollaboration` |
| `msdyn_teamscollaboration_AsyncOperations` | [msdyn_teamscollaboration](msdyn_teamscollaboration.md) | `regardingobjectid` | `regardingobjectid_msdyn_teamscollaboration` |
| `msdyn_teamscollaboration_MailboxTrackingFolders` | [msdyn_teamscollaboration](msdyn_teamscollaboration.md) | `regardingobjectid` | `regardingobjectid_msdyn_teamscollaboration` |
| `msdyn_teamscollaboration_UserEntityInstanceDatas` | [msdyn_teamscollaboration](msdyn_teamscollaboration.md) | `objectid` | `objectid_msdyn_teamscollaboration` |
| `msdyn_teamscollaboration_ProcessSession` | [msdyn_teamscollaboration](msdyn_teamscollaboration.md) | `regardingobjectid` | `regardingobjectid_msdyn_teamscollaboration` |
| `msdyn_teamscollaboration_BulkDeleteFailures` | [msdyn_teamscollaboration](msdyn_teamscollaboration.md) | `regardingobjectid` | `regardingobjectid_msdyn_teamscollaboration` |
| `msdyn_teamscollaboration_PrincipalObjectAttributeAccesses` | [msdyn_teamscollaboration](msdyn_teamscollaboration.md) | `objectid` | `objectid_msdyn_teamscollaboration` |


## Source

Generated from [msdyn_teamscollaboration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_teamscollaboration')) on 2026-05-07.