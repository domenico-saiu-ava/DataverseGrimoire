---
logical: "msdyn_dmssyncrequest"
display: "DMS Sync Request"
entitySetName: "msdyn_dmssyncrequests"
primaryId: "msdyn_dmssyncrequestid"
primaryName: "msdyn_requestuniquename"
tableType: "Standard"
ownership: "UserOwned"
---

# DMS Sync Request

An entity to save DMS sync requests.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dmssyncrequest` |
| Display name | DMS Sync Request |
| Display (plural) | DMS Sync Request |
| Schema name | `msdyn_dmssyncrequest` |
| Entity set (Web API) | `msdyn_dmssyncrequests` |
| Primary id attribute | `msdyn_dmssyncrequestid` |
| Primary name attribute | `msdyn_requestuniquename` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dmssyncrequests?$select=msdyn_requestuniquename&$top=10
GET /api/data/v9.2/msdyn_dmssyncrequests(<guid>)
POST /api/data/v9.2/msdyn_dmssyncrequests
PATCH /api/data/v9.2/msdyn_dmssyncrequests(<guid>)
DELETE /api/data/v9.2/msdyn_dmssyncrequests(<guid>)
```

## Attributes

Writable: **18** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_AdditionalProperties`, `msdyn_CorrelationId`, `msdyn_dmssyncrequestId`, `msdyn_EntityMapping`, `msdyn_RequestType`, `msdyn_RequestUniqueName`, `msdyn_SyncParameters`, `msdyn_SyncScenario`, `msdyn_UserObjectId`, `msdyn_UserTenantId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_dmssyncrequest` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_dmssyncrequest_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dmssyncrequest_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dmssyncrequest_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dmssyncrequest_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_dmssyncrequest` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_dmssyncrequest` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_dmssyncrequest` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dmssyncrequest_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dmssyncrequest_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dmssyncrequest_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dmssyncrequest_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_dmssyncrequest_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dmssyncrequest_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_lookupfield_dmssyncrequest` | _n/a_ | `msdyn_lookupfield_dmssyncrequest` | _n/a_ |


## Source

Generated from [msdyn_dmssyncrequest.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_dmssyncrequest.md) on 2026-05-06.