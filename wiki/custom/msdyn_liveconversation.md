---
logical: "msdyn_liveconversation"
display: "Conversazione in corso (deprecata)"
entitySetName: "msdyn_liveconversations"
primaryId: "msdyn_liveconversationid"
primaryName: "msdyn_subject"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Conversazione in corso (deprecata)

Tiene traccia delle interazioni tra gli agenti e il cliente

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_liveconversation` |
| Display name | Conversazione in corso (deprecata) |
| Display (plural) | Conversazioni in corso (deprecata) |
| Schema name | `msdyn_liveconversation` |
| Entity set (Web API) | `msdyn_liveconversations` |
| Primary id attribute | `msdyn_liveconversationid` |
| Primary name attribute | `msdyn_subject` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_liveconversations?$select=msdyn_subject&$top=10
GET /api/data/v9.2/msdyn_liveconversations(<guid>)
POST /api/data/v9.2/msdyn_liveconversations
PATCH /api/data/v9.2/msdyn_liveconversations(<guid>)
DELETE /api/data/v9.2/msdyn_liveconversations(<guid>)
```

## Attributes

Writable: **30** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_activeagentassignedon`, `msdyn_activeagentid`, `msdyn_cdsqueueid`, `msdyn_channel`, `msdyn_closedon`, `msdyn_createdon`, `msdyn_customer`, `msdyn_customersentimentlabel`, `msdyn_escalationcount`, `msdyn_initiatedon`, `msdyn_liveconversationid`, `msdyn_liveworkstreamid`, `msdyn_modifiedon`, `msdyn_oclastsessionid`, `msdyn_queueid`, `msdyn_startedon`, `msdyn_statecode`, `msdyn_statuscode`, `msdyn_statusupdatedon`, `msdyn_subject`, `msdyn_title`, `msdyn_transfercount`, `msdyn_workstreamworkdistributionmode`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_liveconversation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_liveconversation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_liveconversation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_liveconversation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_liveconversation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_liveconversation` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_liveconversation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_liveconversation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_account_msdyn_liveconversation_Customer` | [account](account.md) | `msdyn_customer` | `msdyn_customer_msdyn_liveconversation_account` |
| `msdyn_contact_msdyn_liveconversation_Customer` | [contact](contact.md) | `msdyn_customer` | `msdyn_customer_msdyn_liveconversation_contact` |
| `msdyn_msdyn_liveworkstream_msdyn_liveconversation` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_liveworkstreamid` | `msdyn_liveworkstreamid` |
| `msdyn_msdyn_omnichannelqueue_msdyn_liveconversation` | [msdyn_omnichannelqueue](msdyn_omnichannelqueue.md) | `msdyn_queueid` | `msdyn_queueid` |
| `msdyn_queue_msdyn_liveconversation` | [queue](queue.md) | `msdyn_cdsqueueid` | `msdyn_cdsqueueid` |
| `msdyn_systemuser_msdyn_liveconversation` | [systemuser](systemuser.md) | `msdyn_activeagentid` | `msdyn_activeagentid` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_liveconversation_SyncErrors` | [msdyn_liveconversation](msdyn_liveconversation.md) | `regardingobjectid` | `regardingobjectid_msdyn_liveconversation` |
| `msdyn_liveconversation_AsyncOperations` | [msdyn_liveconversation](msdyn_liveconversation.md) | `regardingobjectid` | `regardingobjectid_msdyn_liveconversation` |
| `msdyn_liveconversation_MailboxTrackingFolders` | [msdyn_liveconversation](msdyn_liveconversation.md) | `regardingobjectid` | `regardingobjectid_msdyn_liveconversation` |
| `msdyn_liveconversation_UserEntityInstanceDatas` | [msdyn_liveconversation](msdyn_liveconversation.md) | `objectid` | `objectid_msdyn_liveconversation` |
| `msdyn_liveconversation_ProcessSession` | [msdyn_liveconversation](msdyn_liveconversation.md) | `regardingobjectid` | `regardingobjectid_msdyn_liveconversation` |
| `msdyn_liveconversation_BulkDeleteFailures` | [msdyn_liveconversation](msdyn_liveconversation.md) | `regardingobjectid` | `regardingobjectid_msdyn_liveconversation` |
| `msdyn_liveconversation_PrincipalObjectAttributeAccesses` | [msdyn_liveconversation](msdyn_liveconversation.md) | `objectid` | `objectid_msdyn_liveconversation` |
| `msdyn_liveconversation_connections1` | [msdyn_liveconversation](msdyn_liveconversation.md) | `record1id` | `record1id_msdyn_liveconversation` |
| `msdyn_liveconversation_connections2` | [msdyn_liveconversation](msdyn_liveconversation.md) | `record2id` | `record2id_msdyn_liveconversation` |
| `msdyn_liveconversation_QueueItems` | [msdyn_liveconversation](msdyn_liveconversation.md) | `objectid` | `objectid_msdyn_liveconversation` |
| `msdyn_liveconversation_Annotations` | [msdyn_liveconversation](msdyn_liveconversation.md) | `objectid` | `objectid_msdyn_liveconversation` |
| `msdyn_liveconversation_Feedback` | [msdyn_liveconversation](msdyn_liveconversation.md) | `regardingobjectid` | `regardingobjectid_msdyn_liveconversation` |


## Source

Generated from [msdyn_liveconversation (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_liveconversation')) on 2026-05-07.