---
logical: "cai_orgunit"
display: "Unità organizzativa"
entitySetName: "cai_orgunits"
primaryId: "cai_orgunitid"
primaryName: "cai_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Unità organizzativa

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cai_orgunit` |
| Display name | Unità organizzativa |
| Display (plural) | Unità organizzative |
| Schema name | `cai_orgunit` |
| Entity set (Web API) | `cai_orgunits` |
| Primary id attribute | `cai_orgunitid` |
| Primary name attribute | `cai_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/cai_orgunits?$select=cai_name&$top=10
GET /api/data/v9.2/cai_orgunits(<guid>)
POST /api/data/v9.2/cai_orgunits
PATCH /api/data/v9.2/cai_orgunits(<guid>)
DELETE /api/data/v9.2/cai_orgunits(<guid>)
```

## Attributes

Writable: **30** · Read-only: **8**

### Writable

`cai_areacode`, `cai_areaname`, `cai_channel`, `cai_channelcode`, `cai_channelname`, `cai_code`, `cai_enrolled`, `cai_institutecode`, `cai_level`, `cai_macrochannelcode`, `cai_macrochannelname`, `cai_mail`, `cai_name`, `cai_orgunitid`, `cai_ownerid`, `cai_parentcode`, `cai_parentname`, `cai_parenttypecode`, `cai_regioncode`, `cai_regionname`, `cai_status`, `cai_typecode`, `cai_typename`, `cai_zone`, `importsequencenumber`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_systemuser_cai_orgunit_ownerid` | [systemuser](systemuser.md) | `cai_ownerid` | `cai_ownerid` |
| `lk_cai_orgunit_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_cai_orgunit_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_cai_orgunit_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_cai_orgunit_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_cai_orgunit` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (20)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_cai_orgunit_account_orgunitid` | [cai_orgunit](cai_orgunit.md) | `cai_orgunitid` | `cai_orgunitid` |
| `cai_systemuser_orgunitid_cai_orgunit` | [cai_orgunit](cai_orgunit.md) | `cai_orgunitid` | `cai_orgunitid` |
| `cai_orgunit_SyncErrors` | [cai_orgunit](cai_orgunit.md) | `regardingobjectid` | `regardingobjectid_cai_orgunit` |
| `cai_orgunit_DuplicateMatchingRecord` | [cai_orgunit](cai_orgunit.md) | `duplicaterecordid` | `duplicaterecordid_cai_orgunit` |
| `cai_orgunit_DuplicateBaseRecord` | [cai_orgunit](cai_orgunit.md) | `baserecordid` | `baserecordid_cai_orgunit` |
| `cai_orgunit_AsyncOperations` | [cai_orgunit](cai_orgunit.md) | `regardingobjectid` | `regardingobjectid_cai_orgunit` |
| `cai_orgunit_MailboxTrackingFolders` | [cai_orgunit](cai_orgunit.md) | `regardingobjectid` | `regardingobjectid_cai_orgunit` |
| `cai_orgunit_UserEntityInstanceDatas` | [cai_orgunit](cai_orgunit.md) | `objectid` | `objectid_cai_orgunit` |
| `cai_orgunit_ProcessSession` | [cai_orgunit](cai_orgunit.md) | `regardingobjectid` | `regardingobjectid_cai_orgunit` |
| `cai_orgunit_BulkDeleteFailures` | [cai_orgunit](cai_orgunit.md) | `regardingobjectid` | `regardingobjectid_cai_orgunit` |
| `cai_orgunit_PrincipalObjectAttributeAccesses` | [cai_orgunit](cai_orgunit.md) | `objectid` | `objectid_cai_orgunit` |
| `cai_appointment_orgunitid_cai_orgunit` | [cai_orgunit](cai_orgunit.md) | `cai_orgunitid` | `cai_orgunitid_Appointment` |
| `cai_orgunit_ActivityParties` | [cai_orgunit](cai_orgunit.md) | `partyid` | `partyid_cai_orgunit` |
| `cai_phonecall_orgunitid_cai_orgunit` | [cai_orgunit](cai_orgunit.md) | `cai_orgunitid` | `cai_orgunitid_PhoneCall` |
| `cai_cai_orgunit_contact_orgunitid` | [cai_orgunit](cai_orgunit.md) | `cai_orgunitid` | `cai_orgunitid` |
| `cai_genericcontact_orgunitid_cai_orgunit` | [cai_orgunit](cai_orgunit.md) | `cai_orgunitid` | `cai_orgunitid_cai_genericcontact` |
| `cai_email_orgunitid_cai_orgunit` | [cai_orgunit](cai_orgunit.md) | `cai_orgunitid` | `cai_orgunitid_Email` |
| `cai_wallet_orgunitid_cai_orgunit` | [cai_orgunit](cai_orgunit.md) | `cai_orgunitid` | `cai_orgunitid` |
| `cai_conflict_orgunitid_cai_orgunit` | [cai_orgunit](cai_orgunit.md) | `cai_orgunitid` | `cai_orgunitid` |
| `cai_appointment_calendarfilterorgunitid_cai_orgunit` | [cai_orgunit](cai_orgunit.md) | `cai_calendarfilterorgunitid` | `cai_calendarfilterorgunitid_Appointment` |


## Source

Generated from [cai_orgunit (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cai_orgunit')) on 2026-05-07.