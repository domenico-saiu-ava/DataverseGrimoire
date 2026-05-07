---
logical: "cai_contactchannel"
display: "Canale di Contatto"
entitySetName: "cai_contactchannels"
primaryId: "cai_contactchannelid"
primaryName: "cai_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Canale di Contatto

Identifica i canali di contatto disponibili per esitare (Telefonata/distanza,In filiale, Presso cliente)

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cai_contactchannel` |
| Display name | Canale di Contatto |
| Display (plural) | Canali di Contatto |
| Schema name | `cai_contactchannel` |
| Entity set (Web API) | `cai_contactchannels` |
| Primary id attribute | `cai_contactchannelid` |
| Primary name attribute | `cai_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/cai_contactchannels?$select=cai_name&$top=10
GET /api/data/v9.2/cai_contactchannels(<guid>)
POST /api/data/v9.2/cai_contactchannels
PATCH /api/data/v9.2/cai_contactchannels(<guid>)
DELETE /api/data/v9.2/cai_contactchannels(<guid>)
```

## Attributes

Writable: **11** · Read-only: **8**

### Writable

`cai_contactchannelcode`, `cai_contactchannelid`, `cai_description`, `cai_name`, `cai_selectableonfree`, `importsequencenumber`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_cai_contactchannel_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_cai_contactchannel_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_cai_contactchannel_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_cai_contactchannel_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_cai_contactchannel` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (16)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_cai_contactchannel_cai_genericcontact_contactchannelid` | [cai_contactchannel](cai_contactchannel.md) | `cai_contactchannelid` | `cai_contactchannelid_cai_genericcontact` |
| `cai_leadoutcomeactivitycssession_appointmentinteractionchannelid_cai_contactchannel` | [cai_contactchannel](cai_contactchannel.md) | `cai_appointmentinteractionchannelid` | `cai_appointmentinteractionchannelid` |
| `cai_leadoutcomeactivitycssession_interactionchannelid_cai_contactchannel` | [cai_contactchannel](cai_contactchannel.md) | `cai_interactionchannelid` | `cai_interactionchannelid` |
| `cai_leadoutcomeactivitycssession_nextappointmentinteractionchannelid_cai_contactchannel` | [cai_contactchannel](cai_contactchannel.md) | `cai_nextappointmentinteractionchannelid` | `cai_nextappointmentinteractionchannelid` |
| `cai_cai_contactchannel_appointment_contactchannelid` | [cai_contactchannel](cai_contactchannel.md) | `cai_contactchannelid` | `cai_contactchannelid_Appointment` |
| `cai_contactchannel_SyncErrors` | [cai_contactchannel](cai_contactchannel.md) | `regardingobjectid` | `regardingobjectid_cai_contactchannel` |
| `cai_contactchannel_DuplicateMatchingRecord` | [cai_contactchannel](cai_contactchannel.md) | `duplicaterecordid` | `duplicaterecordid_cai_contactchannel` |
| `cai_contactchannel_DuplicateBaseRecord` | [cai_contactchannel](cai_contactchannel.md) | `baserecordid` | `baserecordid_cai_contactchannel` |
| `cai_contactchannel_AsyncOperations` | [cai_contactchannel](cai_contactchannel.md) | `regardingobjectid` | `regardingobjectid_cai_contactchannel` |
| `cai_contactchannel_MailboxTrackingFolders` | [cai_contactchannel](cai_contactchannel.md) | `regardingobjectid` | `regardingobjectid_cai_contactchannel` |
| `cai_contactchannel_UserEntityInstanceDatas` | [cai_contactchannel](cai_contactchannel.md) | `objectid` | `objectid_cai_contactchannel` |
| `cai_contactchannel_ProcessSession` | [cai_contactchannel](cai_contactchannel.md) | `regardingobjectid` | `regardingobjectid_cai_contactchannel` |
| `cai_contactchannel_BulkDeleteFailures` | [cai_contactchannel](cai_contactchannel.md) | `regardingobjectid` | `regardingobjectid_cai_contactchannel` |
| `cai_contactchannel_PrincipalObjectAttributeAccesses` | [cai_contactchannel](cai_contactchannel.md) | `objectid` | `objectid_cai_contactchannel` |
| `cai_cai_contactchannel_cai_appointmentrequest_contactchannelid` | [cai_contactchannel](cai_contactchannel.md) | `cai_contactchannelid` | `cai_contactchannelid` |
| `cai_phonecall_contactchanneid_cai_contactchannel` | [cai_contactchannel](cai_contactchannel.md) | `cai_contactchanneid` | `cai_contactchanneid_PhoneCall` |


## Source

Generated from [cai_contactchannel (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cai_contactchannel')) on 2026-05-07.