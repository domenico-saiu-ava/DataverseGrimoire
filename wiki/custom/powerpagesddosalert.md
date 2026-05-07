---
logical: "powerpagesddosalert"
display: "PowerPagesDDOSAlert"
entitySetName: "powerpagesddosalerts"
primaryId: "powerpagesddosalertid"
primaryName: "portalid"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# PowerPagesDDOSAlert

Schema for DDOS Alerts on PowerPage Site

## Identity

| Property | Value |
| --- | --- |
| Logical name | `powerpagesddosalert` |
| Display name | PowerPagesDDOSAlert |
| Display (plural) | PowerPagesDDOSAlerts |
| Schema name | `PowerPagesDDOSAlert` |
| Entity set (Web API) | `powerpagesddosalerts` |
| Primary id attribute | `powerpagesddosalertid` |
| Primary name attribute | `portalid` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/powerpagesddosalerts?$select=portalid&$top=10
GET /api/data/v9.2/powerpagesddosalerts(<guid>)
POST /api/data/v9.2/powerpagesddosalerts
PATCH /api/data/v9.2/powerpagesddosalerts(<guid>)
DELETE /api/data/v9.2/powerpagesddosalerts(<guid>)
```

## Attributes

Writable: **20** · Read-only: **10**

### Writable

`additionaldata`, `attacktype`, `description`, `firstactivitytime`, `hostname`, `importsequencenumber`, `incidentid`, `lastactivitytime`, `overriddencreatedon`, `ownerid`, `portalid`, `powerpagesddosalertid`, `recordtype`, `severity`, `statecode`, `statuscode`, `timegenerated`, `timezoneruleversionnumber`, `title`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_powerpagesddosalert_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_powerpagesddosalert_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_powerpagesddosalert_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_powerpagesddosalert_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_powerpagesddosalert` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_powerpagesddosalert` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_powerpagesddosalert` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_powerpagesddosalert` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `powerpagesddosalert_SyncErrors` | [powerpagesddosalert](powerpagesddosalert.md) | `regardingobjectid` | `regardingobjectid_powerpagesddosalert` |
| `powerpagesddosalert_DuplicateMatchingRecord` | [powerpagesddosalert](powerpagesddosalert.md) | `duplicaterecordid` | `duplicaterecordid_powerpagesddosalert` |
| `powerpagesddosalert_DuplicateBaseRecord` | [powerpagesddosalert](powerpagesddosalert.md) | `baserecordid` | `baserecordid_powerpagesddosalert` |
| `powerpagesddosalert_AsyncOperations` | [powerpagesddosalert](powerpagesddosalert.md) | `regardingobjectid` | `regardingobjectid_powerpagesddosalert` |
| `powerpagesddosalert_MailboxTrackingFolders` | [powerpagesddosalert](powerpagesddosalert.md) | `regardingobjectid` | `regardingobjectid_powerpagesddosalert` |
| `powerpagesddosalert_UserEntityInstanceDatas` | [powerpagesddosalert](powerpagesddosalert.md) | `objectid` | `objectid_powerpagesddosalert` |
| `powerpagesddosalert_ProcessSession` | [powerpagesddosalert](powerpagesddosalert.md) | `regardingobjectid` | `regardingobjectid_powerpagesddosalert` |
| `powerpagesddosalert_BulkDeleteFailures` | [powerpagesddosalert](powerpagesddosalert.md) | `regardingobjectid` | `regardingobjectid_powerpagesddosalert` |
| `powerpagesddosalert_PrincipalObjectAttributeAccesses` | [powerpagesddosalert](powerpagesddosalert.md) | `objectid` | `objectid_powerpagesddosalert` |


## Source

Generated from [powerpagesddosalert (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='powerpagesddosalert')) on 2026-05-07.