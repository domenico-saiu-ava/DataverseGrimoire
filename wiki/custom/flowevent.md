---
logical: "flowevent"
display: "Evento flusso"
entitySetName: "flowevents"
primaryId: "floweventid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Evento flusso

Entità per archiviare gli eventi che si verificano durante l'utilizzo di Power Automate.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `flowevent` |
| Display name | Evento flusso |
| Display (plural) | Eventi flusso |
| Schema name | `flowevent` |
| Entity set (Web API) | `flowevents` |
| Primary id attribute | `floweventid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/flowevents?$select=name&$top=10
GET /api/data/v9.2/flowevents(<guid>)
POST /api/data/v9.2/flowevents
PATCH /api/data/v9.2/flowevents(<guid>)
DELETE /api/data/v9.2/flowevents(<guid>)
```

## Attributes

Writable: **17** · Read-only: **11**

### Writable

`eventcode`, `eventcontent`, `eventduration`, `eventtype`, `expirydate`, `floweventid`, `importsequencenumber`, `level`, `name`, `overriddencreatedon`, `ownerid`, `parentobjectid`, `parentobjectlogicalname`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`completedon`, `createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `flowevent_workflow` | [workflow](workflow.md) | `parentobjectid` | `parentobjectid_workflow` |
| `lk_flowevent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_flowevent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_flowevent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_flowevent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_flowevent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_flowevent` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_flowevent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_flowevent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `flowevent_flowmachine` | [flowmachine](flowmachine.md) | `parentobjectid` | `parentobjectid_flowmachine` |
| `flowevent_flowmachinegroup` | [flowmachinegroup](flowmachinegroup.md) | `parentobjectid` | `parentobjectid_flowmachinegroup` |
| `flowevent_flowsession` | [flowsession](flowsession.md) | `parentobjectid` | `parentobjectid_flowsession` |
| `flowevent_workqueue` | [workqueue](workqueue.md) | `parentobjectid` | `parentobjectid_workqueue` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `flowevent_SyncErrors` | [flowevent](flowevent.md) | `regardingobjectid` | `regardingobjectid_flowevent` |
| `flowevent_DuplicateMatchingRecord` | [flowevent](flowevent.md) | `duplicaterecordid` | `duplicaterecordid_flowevent` |
| `flowevent_DuplicateBaseRecord` | [flowevent](flowevent.md) | `baserecordid` | `baserecordid_flowevent` |
| `flowevent_AsyncOperations` | [flowevent](flowevent.md) | `regardingobjectid` | `regardingobjectid_flowevent` |
| `flowevent_MailboxTrackingFolders` | [flowevent](flowevent.md) | `regardingobjectid` | `regardingobjectid_flowevent` |
| `flowevent_UserEntityInstanceDatas` | [flowevent](flowevent.md) | `objectid` | `objectid_flowevent` |
| `flowevent_ProcessSession` | [flowevent](flowevent.md) | `regardingobjectid` | `regardingobjectid_flowevent` |
| `flowevent_BulkDeleteFailures` | [flowevent](flowevent.md) | `regardingobjectid` | `regardingobjectid_flowevent` |
| `flowevent_PrincipalObjectAttributeAccesses` | [flowevent](flowevent.md) | `objectid` | `objectid_flowevent` |


## Source

Generated from [flowevent (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='flowevent')) on 2026-05-07.