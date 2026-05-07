---
logical: "cai_sendingqueue"
display: "Coda di Invio"
entitySetName: "cai_sendingqueues"
primaryId: "cai_sendingqueueid"
primaryName: "cai_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Coda di Invio

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cai_sendingqueue` |
| Display name | Coda di Invio |
| Display (plural) | Coda di Invio |
| Schema name | `cai_sendingqueue` |
| Entity set (Web API) | `cai_sendingqueues` |
| Primary id attribute | `cai_sendingqueueid` |
| Primary name attribute | `cai_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/cai_sendingqueues?$select=cai_name&$top=10
GET /api/data/v9.2/cai_sendingqueues(<guid>)
POST /api/data/v9.2/cai_sendingqueues
PATCH /api/data/v9.2/cai_sendingqueues(<guid>)
DELETE /api/data/v9.2/cai_sendingqueues(<guid>)
```

## Attributes

Writable: **19** · Read-only: **10**

### Writable

`cai_action`, `cai_attemptsnumber`, `cai_customerid`, `cai_errormessage`, `cai_jsonpayload`, `cai_leadid`, `cai_message`, `cai_name`, `cai_nextretryondate`, `cai_processingenddate`, `cai_processingstartdate`, `cai_sendingqueueid`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_sendingqueue_leadid_lead` | [lead](lead.md) | `cai_leadid` | `cai_leadid` |
| `cai_account_cai_sendingqueue_846` | [account](account.md) | `cai_customerid` | `cai_customerid_account` |
| `cai_contact_cai_sendingqueue_846` | [contact](contact.md) | `cai_customerid` | `cai_customerid_contact` |
| `lk_cai_sendingqueue_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_cai_sendingqueue_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_cai_sendingqueue_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_cai_sendingqueue_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_cai_sendingqueue` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_cai_sendingqueue` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_cai_sendingqueue` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_cai_sendingqueue` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_sendingqueue_SyncErrors` | [cai_sendingqueue](cai_sendingqueue.md) | `regardingobjectid` | `regardingobjectid_cai_sendingqueue` |
| `cai_sendingqueue_AsyncOperations` | [cai_sendingqueue](cai_sendingqueue.md) | `regardingobjectid` | `regardingobjectid_cai_sendingqueue` |
| `cai_sendingqueue_MailboxTrackingFolders` | [cai_sendingqueue](cai_sendingqueue.md) | `regardingobjectid` | `regardingobjectid_cai_sendingqueue` |
| `cai_sendingqueue_UserEntityInstanceDatas` | [cai_sendingqueue](cai_sendingqueue.md) | `objectid` | `objectid_cai_sendingqueue` |
| `cai_sendingqueue_ProcessSession` | [cai_sendingqueue](cai_sendingqueue.md) | `regardingobjectid` | `regardingobjectid_cai_sendingqueue` |
| `cai_sendingqueue_BulkDeleteFailures` | [cai_sendingqueue](cai_sendingqueue.md) | `regardingobjectid` | `regardingobjectid_cai_sendingqueue` |
| `cai_sendingqueue_PrincipalObjectAttributeAccesses` | [cai_sendingqueue](cai_sendingqueue.md) | `objectid` | `objectid_cai_sendingqueue` |


## Source

Generated from [cai_sendingqueue (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cai_sendingqueue')) on 2026-05-07.