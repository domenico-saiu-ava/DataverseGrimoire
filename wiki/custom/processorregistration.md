---
logical: "processorregistration"
display: "processor registration"
entitySetName: "processorregistrations"
primaryId: "processorregistrationid"
primaryName: "processortype"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# processor registration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `processorregistration` |
| Display name | processor registration |
| Display (plural) | processor registrations |
| Schema name | `processorregistration` |
| Entity set (Web API) | `processorregistrations` |
| Primary id attribute | `processorregistrationid` |
| Primary name attribute | `processortype` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/processorregistrations?$select=processortype&$top=10
GET /api/data/v9.2/processorregistrations(<guid>)
POST /api/data/v9.2/processorregistrations
PATCH /api/data/v9.2/processorregistrations(<guid>)
DELETE /api/data/v9.2/processorregistrations(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`importsequencenumber`, `overriddencreatedon`, `ownerid`, `processordefinition`, `processorregistrationid`, `processortype`, `signalname`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `traitcomponentkey`, `traitname`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_processorregistration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_processorregistration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_processorregistration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_processorregistration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_processorregistration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_processorregistration` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_processorregistration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_processorregistration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `processorregistration_signalregistration_signalname` | [signalregistration](signalregistration.md) | `signalname` | `signalname` |
| `processorregistration_traitregistration_traitname` | [traitregistration](traitregistration.md) | `traitname` | `traitname` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `processorregistration_SyncErrors` | [processorregistration](processorregistration.md) | `regardingobjectid` | `regardingobjectid_processorregistration` |
| `processorregistration_AsyncOperations` | [processorregistration](processorregistration.md) | `regardingobjectid` | `regardingobjectid_processorregistration` |
| `processorregistration_MailboxTrackingFolders` | [processorregistration](processorregistration.md) | `regardingobjectid` | `regardingobjectid_processorregistration` |
| `processorregistration_UserEntityInstanceDatas` | [processorregistration](processorregistration.md) | `objectid` | `objectid_processorregistration` |
| `processorregistration_ProcessSession` | [processorregistration](processorregistration.md) | `regardingobjectid` | `regardingobjectid_processorregistration` |
| `processorregistration_BulkDeleteFailures` | [processorregistration](processorregistration.md) | `regardingobjectid` | `regardingobjectid_processorregistration` |
| `processorregistration_PrincipalObjectAttributeAccesses` | [processorregistration](processorregistration.md) | `objectid` | `objectid_processorregistration` |


## Source

Generated from [processorregistration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='processorregistration')) on 2026-05-07.