---
logical: "traitregistration"
display: "trait registration"
entitySetName: "traitregistrations"
primaryId: "traitregistrationid"
primaryName: "traitname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# trait registration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `traitregistration` |
| Display name | trait registration |
| Display (plural) | trait registrations |
| Schema name | `traitregistration` |
| Entity set (Web API) | `traitregistrations` |
| Primary id attribute | `traitregistrationid` |
| Primary name attribute | `traitname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/traitregistrations?$select=traitname&$top=10
GET /api/data/v9.2/traitregistrations(<guid>)
POST /api/data/v9.2/traitregistrations
PATCH /api/data/v9.2/traitregistrations(<guid>)
DELETE /api/data/v9.2/traitregistrations(<guid>)
```

## Attributes

Writable: **9** · Read-only: **10**

### Writable

`importsequencenumber`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `traitname`, `traitregistrationid`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_traitregistration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_traitregistration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_traitregistration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_traitregistration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_traitregistration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_traitregistration` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_traitregistration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_traitregistration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `traitregistration_SyncErrors` | [traitregistration](traitregistration.md) | `regardingobjectid` | `regardingobjectid_traitregistration` |
| `traitregistration_AsyncOperations` | [traitregistration](traitregistration.md) | `regardingobjectid` | `regardingobjectid_traitregistration` |
| `traitregistration_MailboxTrackingFolders` | [traitregistration](traitregistration.md) | `regardingobjectid` | `regardingobjectid_traitregistration` |
| `traitregistration_UserEntityInstanceDatas` | [traitregistration](traitregistration.md) | `objectid` | `objectid_traitregistration` |
| `traitregistration_ProcessSession` | [traitregistration](traitregistration.md) | `regardingobjectid` | `regardingobjectid_traitregistration` |
| `traitregistration_BulkDeleteFailures` | [traitregistration](traitregistration.md) | `regardingobjectid` | `regardingobjectid_traitregistration` |
| `traitregistration_PrincipalObjectAttributeAccesses` | [traitregistration](traitregistration.md) | `objectid` | `objectid_traitregistration` |
| `processorregistration_traitregistration_traitname` | [traitregistration](traitregistration.md) | `traitname` | `traitname` |


## Source

Generated from [traitregistration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='traitregistration')) on 2026-05-07.