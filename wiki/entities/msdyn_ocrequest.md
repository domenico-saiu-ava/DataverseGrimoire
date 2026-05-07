---
logical: "msdyn_ocrequest"
display: "Omnichannel Request"
entitySetName: "msdyn_ocrequests"
primaryId: "msdyn_ocrequestid"
primaryName: "msdyn_requestname"
tableType: "Standard"
ownership: "UserOwned"
---

# Omnichannel Request

Entity to store Requests across Omnichannel.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocrequest` |
| Display name | Omnichannel Request |
| Display (plural) | Omnichannel Requests |
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

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_LiveWorkItemId`, `msdyn_ocrequestId`, `msdyn_requestname`, `msdyn_RequestProperties`, `msdyn_RequestType`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_ocrequest` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_ocrequest_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocrequest_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocrequest_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocrequest_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_ocliveworkitem_msdyn_ocrequest_LiveWorkItemId` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_liveworkitemid` | `msdyn_LiveWorkItemId` |
| `owner_msdyn_ocrequest` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_ocrequest` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_ocrequest` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocrequest_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocrequest_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocrequest_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_ocrequest_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_ocrequest_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocrequest_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocrequest_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocrequest_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_ocrequest.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_ocrequest.md) on 2026-05-06.