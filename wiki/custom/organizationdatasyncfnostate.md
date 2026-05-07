---
logical: "organizationdatasyncfnostate"
display: "OrganizationDataSyncFnoState"
entitySetName: "organizationdatasyncfnostates"
primaryId: "organizationdatasyncfnostateid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# OrganizationDataSyncFnoState

Information regarding data synchronization state

## Identity

| Property | Value |
| --- | --- |
| Logical name | `organizationdatasyncfnostate` |
| Display name | OrganizationDataSyncFnoState |
| Display (plural) | OrganizationDataSyncFnoStates |
| Schema name | `organizationdatasyncfnostate` |
| Entity set (Web API) | `organizationdatasyncfnostates` |
| Primary id attribute | `organizationdatasyncfnostateid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/organizationdatasyncfnostates?$select=name&$top=10
GET /api/data/v9.2/organizationdatasyncfnostates(<guid>)
POST /api/data/v9.2/organizationdatasyncfnostates
PATCH /api/data/v9.2/organizationdatasyncfnostates(<guid>)
DELETE /api/data/v9.2/organizationdatasyncfnostates(<guid>)
```

## Attributes

Writable: **27** · Read-only: **8**

### Writable

`continuefromlastdeltasync`, `currentfullsyncfetchxml`, `currentfullsyncstate`, `entityname`, `fullsynconly`, `fullsyncpagesdata`, `implicitlastdataversion`, `importsequencenumber`, `lastdataversion`, `lastmetadataversion`, `lockexpiretimestamp`, `lockowner`, `minactiverowversion`, `name`, `nullstatedate`, `organizationdatasyncfnostateid`, `organizationdatasyncsubscriptionid`, `overriddencreatedon`, `pagenumber`, `paginationcookie`, `pagingcookie`, `partitionid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `usepagingcookiemax`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_organizationdatasyncfnostate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_organizationdatasyncfnostate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_organizationdatasyncfnostate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_organizationdatasyncfnostate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_organizationdatasyncfnostate` | [organization](organization.md) | `organizationid` | `organizationid` |
| `organizationdatasyncsubscription_organizationdatasyncfnostate_organizationdatasyncsubscriptionid` | [organizationdatasyncsubscription](organizationdatasyncsubscription.md) | `organizationdatasyncsubscriptionid` | `organizationdatasyncsubscriptionid` |
| `organizationdatasyncsubscriptionfnotable_organizationdatasyncfnostate_entityname` | [organizationdatasyncsubscriptionfnotable](organizationdatasyncsubscriptionfnotable.md) | `entityname` | `entityname` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `organizationdatasyncfnostate_SyncErrors` | [organizationdatasyncfnostate](organizationdatasyncfnostate.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncfnostate` |
| `organizationdatasyncfnostate_DuplicateMatchingRecord` | [organizationdatasyncfnostate](organizationdatasyncfnostate.md) | `duplicaterecordid` | `duplicaterecordid_organizationdatasyncfnostate` |
| `organizationdatasyncfnostate_DuplicateBaseRecord` | [organizationdatasyncfnostate](organizationdatasyncfnostate.md) | `baserecordid` | `baserecordid_organizationdatasyncfnostate` |
| `organizationdatasyncfnostate_AsyncOperations` | [organizationdatasyncfnostate](organizationdatasyncfnostate.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncfnostate` |
| `organizationdatasyncfnostate_MailboxTrackingFolders` | [organizationdatasyncfnostate](organizationdatasyncfnostate.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncfnostate` |
| `organizationdatasyncfnostate_UserEntityInstanceDatas` | [organizationdatasyncfnostate](organizationdatasyncfnostate.md) | `objectid` | `objectid_organizationdatasyncfnostate` |
| `organizationdatasyncfnostate_ProcessSession` | [organizationdatasyncfnostate](organizationdatasyncfnostate.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncfnostate` |
| `organizationdatasyncfnostate_BulkDeleteFailures` | [organizationdatasyncfnostate](organizationdatasyncfnostate.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncfnostate` |
| `organizationdatasyncfnostate_PrincipalObjectAttributeAccesses` | [organizationdatasyncfnostate](organizationdatasyncfnostate.md) | `objectid` | `objectid_organizationdatasyncfnostate` |


## Source

Generated from [organizationdatasyncfnostate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='organizationdatasyncfnostate')) on 2026-05-07.