---
logical: "msdyn_wemrequest"
display: "Richiesta WEM"
entitySetName: "msdyn_wemrequests"
primaryId: "msdyn_wemrequestid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Richiesta WEM

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_wemrequest` |
| Display name | Richiesta WEM |
| Display (plural) | Richieste WEM |
| Schema name | `msdyn_wemrequest` |
| Entity set (Web API) | `msdyn_wemrequests` |
| Primary id attribute | `msdyn_wemrequestid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_wemrequests?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_wemrequests(<guid>)
POST /api/data/v9.2/msdyn_wemrequests
PATCH /api/data/v9.2/msdyn_wemrequests(<guid>)
DELETE /api/data/v9.2/msdyn_wemrequests(<guid>)
```

## Attributes

Writable: **36** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_agent`, `msdyn_agentnote`, `msdyn_booking`, `msdyn_endtime`, `msdyn_expireson`, `msdyn_isfullday`, `msdyn_ispublicswaprequest`, `msdyn_name`, `msdyn_preferredtime`, `msdyn_requeststatus`, `msdyn_requesttype`, `msdyn_reviewedby`, `msdyn_reviewedon`, `msdyn_reviewer`, `msdyn_reviewernote`, `msdyn_shiftdate`, `msdyn_shifthours`, `msdyn_shiftplan`, `msdyn_starttime`, `msdyn_swapforagent`, `msdyn_swapforbooking`, `msdyn_swapforendtime`, `msdyn_swapforshiftdate`, `msdyn_swapforshifthours`, `msdyn_swapforshiftplan`, `msdyn_swapforstarttime`, `msdyn_swapreviewedon`, `msdyn_timeofftype`, `msdyn_wemrequestid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (15)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_wemrequest_agent_bookableresource` | [bookableresource](bookableresource.md) | `msdyn_agent` | `msdyn_agent` |
| `msdyn_wemrequest_swapforagent_bookableresource` | [bookableresource](bookableresource.md) | `msdyn_swapforagent` | `msdyn_swapforagent` |
| `msdyn_wemrequest_reviewedby_systemuser` | [systemuser](systemuser.md) | `msdyn_reviewedby` | `msdyn_reviewedby` |
| `msdyn_wemrequest_reviewer_systemuser` | [systemuser](systemuser.md) | `msdyn_reviewer` | `msdyn_reviewer` |
| `msdyn_wemrequest_shiftplan_msdyn_shiftplan` | [msdyn_shiftplan](msdyn_shiftplan.md) | `msdyn_shiftplan` | `msdyn_shiftplan` |
| `msdyn_wemrequest_swapforshiftplan_msdyn_shiftpl` | [msdyn_shiftplan](msdyn_shiftplan.md) | `msdyn_swapforshiftplan` | `msdyn_swapforshiftplan` |
| `msdyn_wemrequest_timeofftype_msdyn_timeofftype` | [msdyn_timeofftype](msdyn_timeofftype.md) | `msdyn_timeofftype` | `msdyn_timeofftype` |
| `lk_msdyn_wemrequest_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_wemrequest_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_wemrequest_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_wemrequest_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_wemrequest` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_wemrequest` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_wemrequest` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_wemrequest` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_wemrequestbooking_wemrequest_msdyn_wemreq` | [msdyn_wemrequest](msdyn_wemrequest.md) | `msdyn_wemrequest` | `msdyn_wemrequest` |
| `msdyn_wemrequest_SyncErrors` | [msdyn_wemrequest](msdyn_wemrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemrequest` |
| `msdyn_wemrequest_Teams` | [msdyn_wemrequest](msdyn_wemrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemrequest` |
| `msdyn_wemrequest_AsyncOperations` | [msdyn_wemrequest](msdyn_wemrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemrequest` |
| `msdyn_wemrequest_MailboxTrackingFolders` | [msdyn_wemrequest](msdyn_wemrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemrequest` |
| `msdyn_wemrequest_UserEntityInstanceDatas` | [msdyn_wemrequest](msdyn_wemrequest.md) | `objectid` | `objectid_msdyn_wemrequest` |
| `msdyn_wemrequest_ProcessSession` | [msdyn_wemrequest](msdyn_wemrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemrequest` |
| `msdyn_wemrequest_BulkDeleteFailures` | [msdyn_wemrequest](msdyn_wemrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemrequest` |
| `msdyn_wemrequest_PrincipalObjectAttributeAccesses` | [msdyn_wemrequest](msdyn_wemrequest.md) | `objectid` | `objectid_msdyn_wemrequest` |


## Source

Generated from [msdyn_wemrequest (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_wemrequest')) on 2026-05-07.