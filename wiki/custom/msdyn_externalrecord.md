---
logical: "msdyn_externalrecord"
display: "External Record"
entitySetName: "msdyn_externalrecords"
primaryId: "msdyn_externalrecordid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# External Record

External Record - Copilot for Sales

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_externalrecord` |
| Display name | External Record |
| Display (plural) | External Records |
| Schema name | `msdyn_externalrecord` |
| Entity set (Web API) | `msdyn_externalrecords` |
| Primary id attribute | `msdyn_externalrecordid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_externalrecords?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_externalrecords(<guid>)
POST /api/data/v9.2/msdyn_externalrecords
PATCH /api/data/v9.2/msdyn_externalrecords(<guid>)
DELETE /api/data/v9.2/msdyn_externalrecords(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_crmrecordid`, `msdyn_crmrecordtype`, `msdyn_externalcrm`, `msdyn_externalrecordid`, `msdyn_name`, `msdyn_referencerecord`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_externalrecord_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_externalrecord_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_externalrecord_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_externalrecord_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_externalrecord` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_externalrecord` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_externalrecord` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_externalrecord` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_appointment_msdyn_externalrecord` | [appointment](appointment.md) | `msdyn_referencerecord` | `msdyn_referencerecord` |
| `msdyn_msdyn_externalcrm_msdyn_externalrecord` | [msdyn_externalcrm](msdyn_externalcrm.md) | `msdyn_externalcrm` | `msdyn_externalcrm` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_externalrecord_SyncErrors` | [msdyn_externalrecord](msdyn_externalrecord.md) | `regardingobjectid` | `regardingobjectid_msdyn_externalrecord` |
| `msdyn_externalrecord_DuplicateMatchingRecord` | [msdyn_externalrecord](msdyn_externalrecord.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_externalrecord` |
| `msdyn_externalrecord_DuplicateBaseRecord` | [msdyn_externalrecord](msdyn_externalrecord.md) | `baserecordid` | `baserecordid_msdyn_externalrecord` |
| `msdyn_externalrecord_AsyncOperations` | [msdyn_externalrecord](msdyn_externalrecord.md) | `regardingobjectid` | `regardingobjectid_msdyn_externalrecord` |
| `msdyn_externalrecord_MailboxTrackingFolders` | [msdyn_externalrecord](msdyn_externalrecord.md) | `regardingobjectid` | `regardingobjectid_msdyn_externalrecord` |
| `msdyn_externalrecord_UserEntityInstanceDatas` | [msdyn_externalrecord](msdyn_externalrecord.md) | `objectid` | `objectid_msdyn_externalrecord` |
| `msdyn_externalrecord_ProcessSession` | [msdyn_externalrecord](msdyn_externalrecord.md) | `regardingobjectid` | `regardingobjectid_msdyn_externalrecord` |
| `msdyn_externalrecord_BulkDeleteFailures` | [msdyn_externalrecord](msdyn_externalrecord.md) | `regardingobjectid` | `regardingobjectid_msdyn_externalrecord` |
| `msdyn_externalrecord_PrincipalObjectAttributeAccesses` | [msdyn_externalrecord](msdyn_externalrecord.md) | `objectid` | `objectid_msdyn_externalrecord` |


## Source

Generated from [msdyn_externalrecord (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_externalrecord')) on 2026-05-07.