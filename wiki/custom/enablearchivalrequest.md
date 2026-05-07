---
logical: "enablearchivalrequest"
display: "EnableArchivalRequest"
entitySetName: "enablearchivalrequests"
primaryId: "enablearchivalrequestid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# EnableArchivalRequest

For internal use only.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `enablearchivalrequest` |
| Display name | EnableArchivalRequest |
| Display (plural) | EnableArchivalRequests |
| Schema name | `enablearchivalrequest` |
| Entity set (Web API) | `enablearchivalrequests` |
| Primary id attribute | `enablearchivalrequestid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/enablearchivalrequests?$select=name&$top=10
GET /api/data/v9.2/enablearchivalrequests(<guid>)
POST /api/data/v9.2/enablearchivalrequests
PATCH /api/data/v9.2/enablearchivalrequests(<guid>)
DELETE /api/data/v9.2/enablearchivalrequests(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`enablearchivalrequestid`, `importsequencenumber`, `iscascadedentity`, `isenabledforarchival`, `name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_enablearchivalrequest_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_enablearchivalrequest_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_enablearchivalrequest_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_enablearchivalrequest_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_enablearchivalrequest` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_enablearchivalrequest` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_enablearchivalrequest` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_enablearchivalrequest` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `enablearchivalrequest_SyncErrors` | [enablearchivalrequest](enablearchivalrequest.md) | `regardingobjectid` | `regardingobjectid_enablearchivalrequest` |
| `enablearchivalrequest_DuplicateMatchingRecord` | [enablearchivalrequest](enablearchivalrequest.md) | `duplicaterecordid` | `duplicaterecordid_enablearchivalrequest` |
| `enablearchivalrequest_DuplicateBaseRecord` | [enablearchivalrequest](enablearchivalrequest.md) | `baserecordid` | `baserecordid_enablearchivalrequest` |
| `enablearchivalrequest_AsyncOperations` | [enablearchivalrequest](enablearchivalrequest.md) | `regardingobjectid` | `regardingobjectid_enablearchivalrequest` |
| `enablearchivalrequest_MailboxTrackingFolders` | [enablearchivalrequest](enablearchivalrequest.md) | `regardingobjectid` | `regardingobjectid_enablearchivalrequest` |
| `enablearchivalrequest_UserEntityInstanceDatas` | [enablearchivalrequest](enablearchivalrequest.md) | `objectid` | `objectid_enablearchivalrequest` |
| `enablearchivalrequest_ProcessSession` | [enablearchivalrequest](enablearchivalrequest.md) | `regardingobjectid` | `regardingobjectid_enablearchivalrequest` |
| `enablearchivalrequest_BulkDeleteFailures` | [enablearchivalrequest](enablearchivalrequest.md) | `regardingobjectid` | `regardingobjectid_enablearchivalrequest` |
| `enablearchivalrequest_PrincipalObjectAttributeAccesses` | [enablearchivalrequest](enablearchivalrequest.md) | `objectid` | `objectid_enablearchivalrequest` |


## Source

Generated from [enablearchivalrequest (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='enablearchivalrequest')) on 2026-05-07.