---
logical: "signalregistration"
display: "signal registration"
entitySetName: "signalregistrations"
primaryId: "signalregistrationid"
primaryName: "signalname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# signal registration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `signalregistration` |
| Display name | signal registration |
| Display (plural) | signal registrations |
| Schema name | `signalregistration` |
| Entity set (Web API) | `signalregistrations` |
| Primary id attribute | `signalregistrationid` |
| Primary name attribute | `signalname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/signalregistrations?$select=signalname&$top=10
GET /api/data/v9.2/signalregistrations(<guid>)
POST /api/data/v9.2/signalregistrations
PATCH /api/data/v9.2/signalregistrations(<guid>)
DELETE /api/data/v9.2/signalregistrations(<guid>)
```

## Attributes

Writable: **9** · Read-only: **10**

### Writable

`importsequencenumber`, `overriddencreatedon`, `ownerid`, `signalname`, `signalregistrationid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_signalregistration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_signalregistration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_signalregistration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_signalregistration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_signalregistration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_signalregistration` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_signalregistration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_signalregistration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `signalregistration_SyncErrors` | [signalregistration](signalregistration.md) | `regardingobjectid` | `regardingobjectid_signalregistration` |
| `signalregistration_AsyncOperations` | [signalregistration](signalregistration.md) | `regardingobjectid` | `regardingobjectid_signalregistration` |
| `signalregistration_MailboxTrackingFolders` | [signalregistration](signalregistration.md) | `regardingobjectid` | `regardingobjectid_signalregistration` |
| `signalregistration_UserEntityInstanceDatas` | [signalregistration](signalregistration.md) | `objectid` | `objectid_signalregistration` |
| `signalregistration_ProcessSession` | [signalregistration](signalregistration.md) | `regardingobjectid` | `regardingobjectid_signalregistration` |
| `signalregistration_BulkDeleteFailures` | [signalregistration](signalregistration.md) | `regardingobjectid` | `regardingobjectid_signalregistration` |
| `signalregistration_PrincipalObjectAttributeAccesses` | [signalregistration](signalregistration.md) | `objectid` | `objectid_signalregistration` |
| `processorregistration_signalregistration_signalname` | [signalregistration](signalregistration.md) | `signalname` | `signalname` |


## Source

Generated from [signalregistration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='signalregistration')) on 2026-05-07.