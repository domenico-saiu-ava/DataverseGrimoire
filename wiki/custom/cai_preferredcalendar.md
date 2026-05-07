---
logical: "cai_preferredcalendar"
display: "Agenda preferita"
entitySetName: "cai_preferredcalendars"
primaryId: "cai_preferredcalendarid"
primaryName: "cai_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Agenda preferita

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cai_preferredcalendar` |
| Display name | Agenda preferita |
| Display (plural) | Agende preferite |
| Schema name | `cai_preferredcalendar` |
| Entity set (Web API) | `cai_preferredcalendars` |
| Primary id attribute | `cai_preferredcalendarid` |
| Primary name attribute | `cai_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/cai_preferredcalendars?$select=cai_name&$top=10
GET /api/data/v9.2/cai_preferredcalendars(<guid>)
POST /api/data/v9.2/cai_preferredcalendars
PATCH /api/data/v9.2/cai_preferredcalendars(<guid>)
DELETE /api/data/v9.2/cai_preferredcalendars(<guid>)
```

## Attributes

Writable: **12** · Read-only: **8**

### Writable

`cai_code`, `cai_colleagueid`, `cai_name`, `cai_othercalendarpreferred`, `cai_preferredcalendarid`, `cai_systemuserid`, `importsequencenumber`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_systemuser_cai_preferredcalendar_systemuserid` | [systemuser](systemuser.md) | `cai_systemuserid` | `cai_systemuserid` |
| `cai_systemuser_cai_preferredcalendar_colleagueid` | [systemuser](systemuser.md) | `cai_colleagueid` | `cai_colleagueid` |
| `lk_cai_preferredcalendar_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_cai_preferredcalendar_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_cai_preferredcalendar_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_cai_preferredcalendar_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_cai_preferredcalendar` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_preferredcalendar_SyncErrors` | [cai_preferredcalendar](cai_preferredcalendar.md) | `regardingobjectid` | `regardingobjectid_cai_preferredcalendar` |
| `cai_preferredcalendar_DuplicateMatchingRecord` | [cai_preferredcalendar](cai_preferredcalendar.md) | `duplicaterecordid` | `duplicaterecordid_cai_preferredcalendar` |
| `cai_preferredcalendar_DuplicateBaseRecord` | [cai_preferredcalendar](cai_preferredcalendar.md) | `baserecordid` | `baserecordid_cai_preferredcalendar` |
| `cai_preferredcalendar_AsyncOperations` | [cai_preferredcalendar](cai_preferredcalendar.md) | `regardingobjectid` | `regardingobjectid_cai_preferredcalendar` |
| `cai_preferredcalendar_MailboxTrackingFolders` | [cai_preferredcalendar](cai_preferredcalendar.md) | `regardingobjectid` | `regardingobjectid_cai_preferredcalendar` |
| `cai_preferredcalendar_UserEntityInstanceDatas` | [cai_preferredcalendar](cai_preferredcalendar.md) | `objectid` | `objectid_cai_preferredcalendar` |
| `cai_preferredcalendar_ProcessSession` | [cai_preferredcalendar](cai_preferredcalendar.md) | `regardingobjectid` | `regardingobjectid_cai_preferredcalendar` |
| `cai_preferredcalendar_BulkDeleteFailures` | [cai_preferredcalendar](cai_preferredcalendar.md) | `regardingobjectid` | `regardingobjectid_cai_preferredcalendar` |
| `cai_preferredcalendar_PrincipalObjectAttributeAccesses` | [cai_preferredcalendar](cai_preferredcalendar.md) | `objectid` | `objectid_cai_preferredcalendar` |


## Source

Generated from [cai_preferredcalendar (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cai_preferredcalendar')) on 2026-05-07.