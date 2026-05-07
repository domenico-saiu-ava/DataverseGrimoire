---
logical: "msdyn_wemrequestbooking"
display: "Prenotazione richiesta WEM"
entitySetName: "msdyn_wemrequestbookings"
primaryId: "msdyn_wemrequestbookingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Prenotazione richiesta WEM

Tabella ponte tra la richiesta WEM e la prenotazione della risorsa prenotabile.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_wemrequestbooking` |
| Display name | Prenotazione richiesta WEM |
| Display (plural) | Prenotazioni richiesta WEM |
| Schema name | `msdyn_wemrequestbooking` |
| Entity set (Web API) | `msdyn_wemrequestbookings` |
| Primary id attribute | `msdyn_wemrequestbookingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_wemrequestbookings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_wemrequestbookings(<guid>)
POST /api/data/v9.2/msdyn_wemrequestbookings
PATCH /api/data/v9.2/msdyn_wemrequestbookings(<guid>)
DELETE /api/data/v9.2/msdyn_wemrequestbookings(<guid>)
```

## Attributes

Writable: **15** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_accepted`, `msdyn_agent`, `msdyn_booking`, `msdyn_groupid`, `msdyn_name`, `msdyn_origin`, `msdyn_wemrequest`, `msdyn_wemrequestbookingid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_wemrequestbooking_agent_bookableresource` | [bookableresource](bookableresource.md) | `msdyn_agent` | `msdyn_agent` |
| `msdyn_wemrequestbooking_booking_bookableresourc` | [bookableresourcebooking](bookableresourcebooking.md) | `msdyn_booking` | `msdyn_booking` |
| `msdyn_wemrequestbooking_wemrequest_msdyn_wemreq` | [msdyn_wemrequest](msdyn_wemrequest.md) | `msdyn_wemrequest` | `msdyn_wemrequest` |
| `lk_msdyn_wemrequestbooking_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_wemrequestbooking_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_wemrequestbooking_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_wemrequestbooking_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_wemrequestbooking` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_wemrequestbooking` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_wemrequestbooking` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_wemrequestbooking` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_wemrequestbooking_SyncErrors` | [msdyn_wemrequestbooking](msdyn_wemrequestbooking.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemrequestbooking` |
| `msdyn_wemrequestbooking_AsyncOperations` | [msdyn_wemrequestbooking](msdyn_wemrequestbooking.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemrequestbooking` |
| `msdyn_wemrequestbooking_MailboxTrackingFolders` | [msdyn_wemrequestbooking](msdyn_wemrequestbooking.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemrequestbooking` |
| `msdyn_wemrequestbooking_UserEntityInstanceDatas` | [msdyn_wemrequestbooking](msdyn_wemrequestbooking.md) | `objectid` | `objectid_msdyn_wemrequestbooking` |
| `msdyn_wemrequestbooking_ProcessSession` | [msdyn_wemrequestbooking](msdyn_wemrequestbooking.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemrequestbooking` |
| `msdyn_wemrequestbooking_BulkDeleteFailures` | [msdyn_wemrequestbooking](msdyn_wemrequestbooking.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemrequestbooking` |
| `msdyn_wemrequestbooking_PrincipalObjectAttributeAccesses` | [msdyn_wemrequestbooking](msdyn_wemrequestbooking.md) | `objectid` | `objectid_msdyn_wemrequestbooking` |


## Source

Generated from [msdyn_wemrequestbooking (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_wemrequestbooking')) on 2026-05-07.