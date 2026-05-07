---
logical: "msdyn_teamsdialeradminsettings"
display: "Teams Dialer Admin settings"
entitySetName: "msdyn_teamsdialeradminsettingset"
primaryId: "msdyn_teamsdialeradminsettingsid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Teams Dialer Admin settings

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_teamsdialeradminsettings` |
| Display name | Teams Dialer Admin settings |
| Display (plural) | Teams Dialer Admin settings set |
| Schema name | `msdyn_teamsdialeradminsettings` |
| Entity set (Web API) | `msdyn_teamsdialeradminsettingset` |
| Primary id attribute | `msdyn_teamsdialeradminsettingsid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_teamsdialeradminsettingset?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_teamsdialeradminsettingset(<guid>)
POST /api/data/v9.2/msdyn_teamsdialeradminsettingset
PATCH /api/data/v9.2/msdyn_teamsdialeradminsettingset(<guid>)
DELETE /api/data/v9.2/msdyn_teamsdialeradminsettingset(<guid>)
```

## Attributes

Writable: **19** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_addparticipantenabled`, `msdyn_answerexternalincomingcalls`, `msdyn_appmodules`, `msdyn_cicallpaneentrypoints`, `msdyn_ignoreinternalincomingcalls`, `msdyn_layoutschema`, `msdyn_name`, `msdyn_recordingsecurityroles`, `msdyn_securityroles`, `msdyn_securityrolesallselected`, `msdyn_teamsdialeradminsettingsid`, `msdyn_transfercallsenabled`, `msdyn_valuesjson`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_teamsdialeradminsettings_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_teamsdialeradminsettings_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_teamsdialeradminsettings_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_teamsdialeradminsettings_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_teamsdialeradminsettings` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_teamsdialeradminsettings_SyncErrors` | [msdyn_teamsdialeradminsettings](msdyn_teamsdialeradminsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_teamsdialeradminsettings` |
| `msdyn_teamsdialeradminsettings_DuplicateMatchingRecord` | [msdyn_teamsdialeradminsettings](msdyn_teamsdialeradminsettings.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_teamsdialeradminsettings` |
| `msdyn_teamsdialeradminsettings_DuplicateBaseRecord` | [msdyn_teamsdialeradminsettings](msdyn_teamsdialeradminsettings.md) | `baserecordid` | `baserecordid_msdyn_teamsdialeradminsettings` |
| `msdyn_teamsdialeradminsettings_AsyncOperations` | [msdyn_teamsdialeradminsettings](msdyn_teamsdialeradminsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_teamsdialeradminsettings` |
| `msdyn_teamsdialeradminsettings_MailboxTrackingFolders` | [msdyn_teamsdialeradminsettings](msdyn_teamsdialeradminsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_teamsdialeradminsettings` |
| `msdyn_teamsdialeradminsettings_UserEntityInstanceDatas` | [msdyn_teamsdialeradminsettings](msdyn_teamsdialeradminsettings.md) | `objectid` | `objectid_msdyn_teamsdialeradminsettings` |
| `msdyn_teamsdialeradminsettings_ProcessSession` | [msdyn_teamsdialeradminsettings](msdyn_teamsdialeradminsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_teamsdialeradminsettings` |
| `msdyn_teamsdialeradminsettings_BulkDeleteFailures` | [msdyn_teamsdialeradminsettings](msdyn_teamsdialeradminsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_teamsdialeradminsettings` |
| `msdyn_teamsdialeradminsettings_PrincipalObjectAttributeAccesses` | [msdyn_teamsdialeradminsettings](msdyn_teamsdialeradminsettings.md) | `objectid` | `objectid_msdyn_teamsdialeradminsettings` |


## Source

Generated from [msdyn_teamsdialeradminsettings (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_teamsdialeradminsettings')) on 2026-05-07.