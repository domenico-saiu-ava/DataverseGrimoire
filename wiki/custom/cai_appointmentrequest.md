---
logical: "cai_appointmentrequest"
display: "Richiesta Appuntamento"
entitySetName: "cai_appointmentrequests"
primaryId: "cai_appointmentrequestid"
primaryName: "cai_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Richiesta Appuntamento

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cai_appointmentrequest` |
| Display name | Richiesta Appuntamento |
| Display (plural) | Richieste Appuntamento |
| Schema name | `cai_appointmentrequest` |
| Entity set (Web API) | `cai_appointmentrequests` |
| Primary id attribute | `cai_appointmentrequestid` |
| Primary name attribute | `cai_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/cai_appointmentrequests?$select=cai_name&$top=10
GET /api/data/v9.2/cai_appointmentrequests(<guid>)
POST /api/data/v9.2/cai_appointmentrequests
PATCH /api/data/v9.2/cai_appointmentrequests(<guid>)
DELETE /api/data/v9.2/cai_appointmentrequests(<guid>)
```

## Attributes

Writable: **23** · Read-only: **10**

### Writable

`cai_appointmentid`, `cai_appointmentrequestid`, `cai_argumentid`, `cai_code`, `cai_contactchannelid`, `cai_customerheader`, `cai_customerid`, `cai_enddate`, `cai_externalnotes`, `cai_institutecode`, `cai_lead`, `cai_managerid`, `cai_name`, `cai_ndgnotification`, `cai_sendemail`, `cai_startdate`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (15)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_appointmentrequest_lead_lead` | [lead](lead.md) | `cai_lead` | `cai_lead` |
| `cai_account_cai_appointmentrequest_932` | [account](account.md) | `cai_customerid` | `cai_customerid_account` |
| `cai_contact_cai_appointmentrequest_932` | [contact](contact.md) | `cai_customerid` | `cai_customerid_contact` |
| `cai_systemuser_cai_appointmentrequest_managerid` | [systemuser](systemuser.md) | `cai_managerid` | `cai_managerid` |
| `cai_appointment_cai_appointmentrequest_appointmentid` | [appointment](appointment.md) | `cai_appointmentid` | `cai_appointmentid` |
| `cai_cai_contactchannel_cai_appointmentrequest_contactchannelid` | [cai_contactchannel](cai_contactchannel.md) | `cai_contactchannelid` | `cai_contactchannelid` |
| `lk_cai_appointmentrequest_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_cai_appointmentrequest_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_cai_appointmentrequest_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_cai_appointmentrequest_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_cai_appointmentrequest` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_cai_appointmentrequest` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_cai_appointmentrequest` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_cai_appointmentrequest` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `cai_cai_argument_cai_appointmentrequest_argumentid` | [cai_argument](cai_argument.md) | `cai_argumentid` | `cai_argumentid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_appointmentrequest_SyncErrors` | [cai_appointmentrequest](cai_appointmentrequest.md) | `regardingobjectid` | `regardingobjectid_cai_appointmentrequest` |
| `cai_appointmentrequest_DuplicateMatchingRecord` | [cai_appointmentrequest](cai_appointmentrequest.md) | `duplicaterecordid` | `duplicaterecordid_cai_appointmentrequest` |
| `cai_appointmentrequest_DuplicateBaseRecord` | [cai_appointmentrequest](cai_appointmentrequest.md) | `baserecordid` | `baserecordid_cai_appointmentrequest` |
| `cai_appointmentrequest_AsyncOperations` | [cai_appointmentrequest](cai_appointmentrequest.md) | `regardingobjectid` | `regardingobjectid_cai_appointmentrequest` |
| `cai_appointmentrequest_MailboxTrackingFolders` | [cai_appointmentrequest](cai_appointmentrequest.md) | `regardingobjectid` | `regardingobjectid_cai_appointmentrequest` |
| `cai_appointmentrequest_UserEntityInstanceDatas` | [cai_appointmentrequest](cai_appointmentrequest.md) | `objectid` | `objectid_cai_appointmentrequest` |
| `cai_appointmentrequest_ProcessSession` | [cai_appointmentrequest](cai_appointmentrequest.md) | `regardingobjectid` | `regardingobjectid_cai_appointmentrequest` |
| `cai_appointmentrequest_BulkDeleteFailures` | [cai_appointmentrequest](cai_appointmentrequest.md) | `regardingobjectid` | `regardingobjectid_cai_appointmentrequest` |
| `cai_appointmentrequest_PrincipalObjectAttributeAccesses` | [cai_appointmentrequest](cai_appointmentrequest.md) | `objectid` | `objectid_cai_appointmentrequest` |


## Source

Generated from [cai_appointmentrequest (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cai_appointmentrequest')) on 2026-05-07.