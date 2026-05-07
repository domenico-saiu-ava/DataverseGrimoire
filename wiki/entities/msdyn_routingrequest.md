---
logical: "msdyn_routingrequest"
display: "RoutingRequest"
entitySetName: "msdyn_routingrequests"
primaryId: "msdyn_routingrequestid"
primaryName: "msdyn_entitylogicalname"
tableType: "Standard"
ownership: "UserOwned"
---

# RoutingRequest

Routing request definition entity

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

Writable: **16** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_entitylogicalname`, `msdyn_entityrecordid`, `msdyn_entitysetname`, `msdyn_queueid`, `msdyn_queueitemid`, `msdyn_relationshipnamewithliveworkitem`, `msdyn_routingrequestId`, `msdyn_routingrequesttitle`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_routingrequest` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_routingrequest_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_routingrequest_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_routingrequest_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_routingrequest_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_routingrequest` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_routingrequest` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_routingrequest` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_routingrequest_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_routingrequest_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_routingrequest_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_routingrequest_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_routingrequest_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_routingrequest_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_routingrequest_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_routingrequest_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_routingrequest.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_routingrequest.md) on 2026-05-06.