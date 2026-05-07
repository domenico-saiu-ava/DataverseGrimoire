---
logical: "msdyn_flow_approvalrequest"
display: "Richiesta di approvazione"
entitySetName: "msdyn_flow_approvalrequests"
primaryId: "msdyn_flow_approvalrequestid"
primaryName: "msdyn_flow_approvalrequest_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Richiesta di approvazione

Singola richiesta di approvazione.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_flow_approvalrequest` |
| Display name | Richiesta di approvazione |
| Display (plural) | Richieste di approvazione |
| Schema name | `msdyn_flow_approvalrequest` |
| Entity set (Web API) | `msdyn_flow_approvalrequests` |
| Primary id attribute | `msdyn_flow_approvalrequestid` |
| Primary name attribute | `msdyn_flow_approvalrequest_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_flow_approvalrequests?$select=msdyn_flow_approvalrequest_name&$top=10
GET /api/data/v9.2/msdyn_flow_approvalrequests(<guid>)
POST /api/data/v9.2/msdyn_flow_approvalrequests
PATCH /api/data/v9.2/msdyn_flow_approvalrequests(<guid>)
DELETE /api/data/v9.2/msdyn_flow_approvalrequests(<guid>)
```

## Attributes

Writable: **28** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_flow_approvalrequest_allowreassignment`, `msdyn_flow_approvalrequest_approval`, `msdyn_flow_approvalrequest_approvalstagekey`, `msdyn_flow_approvalrequest_dueon`, `msdyn_flow_approvalrequest_expireson`, `msdyn_flow_approvalrequest_lastnotifiedon`, `msdyn_flow_approvalrequest_name`, `msdyn_flow_approvalrequest_notificationfrequency`, `msdyn_flow_approvalrequest_options`, `msdyn_flow_approvalrequest_partnermetadata`, `msdyn_flow_approvalrequest_reassignedfrom`, `msdyn_flow_approvalrequest_responseoptions`, `msdyn_flow_approvalrequest_responseoptionstype`, `msdyn_flow_approvalrequest_stage`, `msdyn_flow_approvalrequest_stepnumber`, `msdyn_flow_approvalrequestid`, `msdyn_flow_approvalrequestidx_approvalid`, `msdyn_flow_approvalrequestidx_owninguserid`, `msdyn_flow_approvalrequestidx_reassignedfromid`, `msdyn_flow_approvalrequestidx_stage`, `overriddencreatedon`, `ownerid`, `stagenumber`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_flow_approvalrequest_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_flow_approvalrequest_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_flow_approvalrequest_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_flow_approvalrequest_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_flow_approvalrequest` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_flow_approvalrequest` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_flow_approvalrequest` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_flow_approvalrequest` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_flow_approvalrelationship_approvalrequests` | [msdyn_flow_approval](msdyn_flow_approval.md) | `msdyn_flow_approvalrequest_approval` | `msdyn_flow_approvalrequest_approval` |
| `msdyn_flow_approvalrequestrelationship_reassignment` | [msdyn_flow_approvalrequest](msdyn_flow_approvalrequest.md) | `msdyn_flow_approvalrequest_reassignedfrom` | `msdyn_flow_approvalrequest_reassignedfrom` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_flow_approvalrequest_SyncErrors` | [msdyn_flow_approvalrequest](msdyn_flow_approvalrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_approvalrequest` |
| `msdyn_flow_approvalrequest_DuplicateMatchingRecord` | [msdyn_flow_approvalrequest](msdyn_flow_approvalrequest.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_flow_approvalrequest` |
| `msdyn_flow_approvalrequest_DuplicateBaseRecord` | [msdyn_flow_approvalrequest](msdyn_flow_approvalrequest.md) | `baserecordid` | `baserecordid_msdyn_flow_approvalrequest` |
| `msdyn_flow_approvalrequest_AsyncOperations` | [msdyn_flow_approvalrequest](msdyn_flow_approvalrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_approvalrequest` |
| `msdyn_flow_approvalrequest_MailboxTrackingFolders` | [msdyn_flow_approvalrequest](msdyn_flow_approvalrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_approvalrequest` |
| `msdyn_flow_approvalrequest_UserEntityInstanceDatas` | [msdyn_flow_approvalrequest](msdyn_flow_approvalrequest.md) | `objectid` | `objectid_msdyn_flow_approvalrequest` |
| `msdyn_flow_approvalrequest_ProcessSession` | [msdyn_flow_approvalrequest](msdyn_flow_approvalrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_approvalrequest` |
| `msdyn_flow_approvalrequest_BulkDeleteFailures` | [msdyn_flow_approvalrequest](msdyn_flow_approvalrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_approvalrequest` |
| `msdyn_flow_approvalrequest_PrincipalObjectAttributeAccesses` | [msdyn_flow_approvalrequest](msdyn_flow_approvalrequest.md) | `objectid` | `objectid_msdyn_flow_approvalrequest` |
| `msdyn_flow_approvalrequestrelationship_reassignment` | [msdyn_flow_approvalrequest](msdyn_flow_approvalrequest.md) | `msdyn_flow_approvalrequest_reassignedfrom` | `msdyn_flow_approvalrequest_reassignedfrom` |


## Source

Generated from [msdyn_flow_approvalrequest (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_flow_approvalrequest')) on 2026-05-07.