---
logical: "msdyn_sessionparticipantextension"
display: "Session Participant Analytic"
entitySetName: "msdyn_sessionparticipantextensions"
primaryId: "msdyn_sessionparticipantextensionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Session Participant Analytic

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_sessionparticipantextension` |
| Display name | Session Participant Analytic |
| Display (plural) | Session Participant Analytics |
| Schema name | `msdyn_sessionparticipantextension` |
| Entity set (Web API) | `msdyn_sessionparticipantextensions` |
| Primary id attribute | `msdyn_sessionparticipantextensionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_sessionparticipantextensions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_sessionparticipantextensions(<guid>)
POST /api/data/v9.2/msdyn_sessionparticipantextensions
PATCH /api/data/v9.2/msdyn_sessionparticipantextensions(<guid>)
DELETE /api/data/v9.2/msdyn_sessionparticipantextensions(<guid>)
```

## Attributes

Writable: **11** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_lobbyendtime`, `msdyn_lobbystarttime`, `msdyn_name`, `msdyn_sessionparticipantextensionid`, `msdyn_sessionparticipantid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_sessionparticipantextension_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_sessionparticipantextension_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_sessionparticipantextension_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_sessionparticipantextension_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_sessionparticipantextension` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_sessionparticipantextension_sessionparticipantid_msdyn_sessionparticipant` | [msdyn_sessionparticipant](msdyn_sessionparticipant.md) | `msdyn_sessionparticipantid` | `msdyn_sessionparticipantid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_sessionparticipantextension_SyncErrors` | [msdyn_sessionparticipantextension](msdyn_sessionparticipantextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_sessionparticipantextension` |
| `msdyn_sessionparticipantextension_DuplicateMatchingRecord` | [msdyn_sessionparticipantextension](msdyn_sessionparticipantextension.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_sessionparticipantextension` |
| `msdyn_sessionparticipantextension_DuplicateBaseRecord` | [msdyn_sessionparticipantextension](msdyn_sessionparticipantextension.md) | `baserecordid` | `baserecordid_msdyn_sessionparticipantextension` |
| `msdyn_sessionparticipantextension_AsyncOperations` | [msdyn_sessionparticipantextension](msdyn_sessionparticipantextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_sessionparticipantextension` |
| `msdyn_sessionparticipantextension_MailboxTrackingFolders` | [msdyn_sessionparticipantextension](msdyn_sessionparticipantextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_sessionparticipantextension` |
| `msdyn_sessionparticipantextension_UserEntityInstanceDatas` | [msdyn_sessionparticipantextension](msdyn_sessionparticipantextension.md) | `objectid` | `objectid_msdyn_sessionparticipantextension` |
| `msdyn_sessionparticipantextension_ProcessSession` | [msdyn_sessionparticipantextension](msdyn_sessionparticipantextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_sessionparticipantextension` |
| `msdyn_sessionparticipantextension_BulkDeleteFailures` | [msdyn_sessionparticipantextension](msdyn_sessionparticipantextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_sessionparticipantextension` |
| `msdyn_sessionparticipantextension_PrincipalObjectAttributeAccesses` | [msdyn_sessionparticipantextension](msdyn_sessionparticipantextension.md) | `objectid` | `objectid_msdyn_sessionparticipantextension` |


## Source

Generated from [msdyn_sessionparticipantextension (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_sessionparticipantextension')) on 2026-05-07.