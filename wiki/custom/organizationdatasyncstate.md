---
logical: "organizationdatasyncstate"
display: "OrganizationDataSyncState"
entitySetName: "organizationdatasyncstates"
primaryId: "organizationdatasyncstateid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# OrganizationDataSyncState

Information regarding data synchronization state

## Identity

| Property | Value |
| --- | --- |
| Logical name | `organizationdatasyncstate` |
| Display name | OrganizationDataSyncState |
| Display (plural) | OrganizationDataSyncStates |
| Schema name | `organizationdatasyncstate` |
| Entity set (Web API) | `organizationdatasyncstates` |
| Primary id attribute | `organizationdatasyncstateid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/organizationdatasyncstates?$select=name&$top=10
GET /api/data/v9.2/organizationdatasyncstates(<guid>)
POST /api/data/v9.2/organizationdatasyncstates
PATCH /api/data/v9.2/organizationdatasyncstates(<guid>)
DELETE /api/data/v9.2/organizationdatasyncstates(<guid>)
```

## Attributes

Writable: **28** · Read-only: **8**

### Writable

`continuefromlastdeltasync`, `currentfullsyncfetchxml`, `currentfullsyncstate`, `entityname`, `fullsynconly`, `fullsyncpagesdata`, `implicitlastdataversion`, `importsequencenumber`, `lastdataversion`, `lastmetadataversion`, `lockexpiretimestamp`, `lockowner`, `minactiverowversion`, `name`, `nullstatedate`, `organizationdatasyncstateid`, `organizationdatasyncsubscriptionid`, `overriddencreatedon`, `pagenumber`, `paginationcookie`, `pagingcookie`, `partitionid`, `partitionssyncstatedata`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `usepagingcookiemax`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_organizationdatasyncstate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_organizationdatasyncstate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_organizationdatasyncstate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_organizationdatasyncstate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_organizationdatasyncstate` | [organization](organization.md) | `organizationid` | `organizationid` |
| `organizationdatasyncsubscription_organizationdatasyncstate_organizationdatasyncsubscriptionid` | [organizationdatasyncsubscription](organizationdatasyncsubscription.md) | `organizationdatasyncsubscriptionid` | `organizationdatasyncsubscriptionid` |
| `organizationdatasyncsubscriptionentity_organizationdatasyncstate_entityname` | [organizationdatasyncsubscriptionentity](organizationdatasyncsubscriptionentity.md) | `entityname` | `entityname` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `organizationdatasyncstate_SyncErrors` | [organizationdatasyncstate](organizationdatasyncstate.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncstate` |
| `organizationdatasyncstate_DuplicateMatchingRecord` | [organizationdatasyncstate](organizationdatasyncstate.md) | `duplicaterecordid` | `duplicaterecordid_organizationdatasyncstate` |
| `organizationdatasyncstate_DuplicateBaseRecord` | [organizationdatasyncstate](organizationdatasyncstate.md) | `baserecordid` | `baserecordid_organizationdatasyncstate` |
| `organizationdatasyncstate_AsyncOperations` | [organizationdatasyncstate](organizationdatasyncstate.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncstate` |
| `organizationdatasyncstate_MailboxTrackingFolders` | [organizationdatasyncstate](organizationdatasyncstate.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncstate` |
| `organizationdatasyncstate_UserEntityInstanceDatas` | [organizationdatasyncstate](organizationdatasyncstate.md) | `objectid` | `objectid_organizationdatasyncstate` |
| `organizationdatasyncstate_ProcessSession` | [organizationdatasyncstate](organizationdatasyncstate.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncstate` |
| `organizationdatasyncstate_BulkDeleteFailures` | [organizationdatasyncstate](organizationdatasyncstate.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncstate` |
| `organizationdatasyncstate_PrincipalObjectAttributeAccesses` | [organizationdatasyncstate](organizationdatasyncstate.md) | `objectid` | `objectid_organizationdatasyncstate` |


## Source

Generated from [organizationdatasyncstate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='organizationdatasyncstate')) on 2026-05-07.