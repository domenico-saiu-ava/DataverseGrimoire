---
logical: "organizationdatasyncfnostate"
display: "OrganizationDataSyncFnoState"
entitySetName: "organizationdatasyncfnostates"
primaryId: "organizationdatasyncfnostateid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
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

`continuefromlastdeltasync`, `currentfullsyncfetchxml`, `currentfullsyncstate`, `entityname`, `fullsynconly`, `fullsyncpagesdata`, `implicitlastdataversion`, `ImportSequenceNumber`, `lastdataversion`, `lastmetadataversion`, `lockexpiretimestamp`, `lockowner`, `minactiverowversion`, `name`, `nullstatedate`, `organizationdatasyncfnostateId`, `organizationdatasyncsubscriptionid`, `OverriddenCreatedOn`, `pagenumber`, `paginationcookie`, `pagingcookie`, `partitionid`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `usepagingcookiemax`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

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

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `organizationdatasyncfnostate_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `organizationdatasyncfnostate_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `organizationdatasyncfnostate_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `organizationdatasyncfnostate_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `organizationdatasyncfnostate_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `organizationdatasyncfnostate_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `organizationdatasyncfnostate_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `organizationdatasyncfnostate_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [organizationdatasyncfnostate.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/organizationdatasyncfnostate.md) on 2026-05-06.