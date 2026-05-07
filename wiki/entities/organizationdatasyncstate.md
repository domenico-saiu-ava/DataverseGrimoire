---
logical: "organizationdatasyncstate"
display: "OrganizationDataSyncState"
entitySetName: "organizationdatasyncstates"
primaryId: "organizationdatasyncstateid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
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

`continuefromlastdeltasync`, `currentfullsyncfetchxml`, `currentfullsyncstate`, `entityname`, `fullsynconly`, `fullsyncpagesdata`, `implicitlastdataversion`, `ImportSequenceNumber`, `lastdataversion`, `lastmetadataversion`, `lockexpiretimestamp`, `lockowner`, `minactiverowversion`, `name`, `nullstatedate`, `organizationdatasyncstateId`, `organizationdatasyncsubscriptionid`, `OverriddenCreatedOn`, `pagenumber`, `paginationcookie`, `pagingcookie`, `partitionid`, `partitionssyncstatedata`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `usepagingcookiemax`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

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

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `organizationdatasyncstate_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `organizationdatasyncstate_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `organizationdatasyncstate_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `organizationdatasyncstate_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `organizationdatasyncstate_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `organizationdatasyncstate_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `organizationdatasyncstate_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `organizationdatasyncstate_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [organizationdatasyncstate.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/organizationdatasyncstate.md) on 2026-05-06.