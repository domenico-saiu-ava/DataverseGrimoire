---
logical: "msdyn_presence"
display: "Presenza"
entitySetName: "msdyn_presences"
primaryId: "msdyn_presenceid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Presenza

Archivia le informazioni sullo stato della presenza

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_presence` |
| Display name | Presenza |
| Display (plural) | Presenza |
| Schema name | `msdyn_presence` |
| Entity set (Web API) | `msdyn_presences` |
| Primary id attribute | `msdyn_presenceid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_presences?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_presences(<guid>)
POST /api/data/v9.2/msdyn_presences
PATCH /api/data/v9.2/msdyn_presences(<guid>)
DELETE /api/data/v9.2/msdyn_presences(<guid>)
```

## Attributes

Writable: **13** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_basepresencestatus`, `msdyn_canuserset`, `msdyn_description`, `msdyn_name`, `msdyn_presenceid`, `msdyn_presencestatustext`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_presence_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_presence_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_presence_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_presence_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_presence` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (17)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_presence_msdyn_omnichannelconfiguration_msdyn_inactive_presence_lookup` | [msdyn_presence](msdyn_presence.md) | `msdyn_inactive_presence_lookup` | `msdyn_inactive_presence_lookup` |
| `msdyn_presence_msdyn_omnichannelconfiguration_msdyn_dnd_presence_lookup` | [msdyn_presence](msdyn_presence.md) | `msdyn_dnd_presence_lookup` | `msdyn_dnd_presence_lookup` |
| `msdyn_msdyn_presence_msdyn_agentcapacityupdatehistory_presenceid` | [msdyn_presence](msdyn_presence.md) | `msdyn_presenceid` | `msdyn_presenceid` |
| `msdyn_presence_msdyn_agentstatus_nextpresenceid` | [msdyn_presence](msdyn_presence.md) | `msdyn_nextpresenceid` | `msdyn_nextpresenceid` |
| `msdyn_presence_msdyn_agentstatus_currentpresenceid` | [msdyn_presence](msdyn_presence.md) | `msdyn_currentpresenceid` | `msdyn_currentpresenceid` |
| `msdyn_presence_SyncErrors` | [msdyn_presence](msdyn_presence.md) | `regardingobjectid` | `regardingobjectid_msdyn_presence` |
| `msdyn_presence_DuplicateMatchingRecord` | [msdyn_presence](msdyn_presence.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_presence` |
| `msdyn_presence_DuplicateBaseRecord` | [msdyn_presence](msdyn_presence.md) | `baserecordid` | `baserecordid_msdyn_presence` |
| `msdyn_presence_AsyncOperations` | [msdyn_presence](msdyn_presence.md) | `regardingobjectid` | `regardingobjectid_msdyn_presence` |
| `msdyn_presence_MailboxTrackingFolders` | [msdyn_presence](msdyn_presence.md) | `regardingobjectid` | `regardingobjectid_msdyn_presence` |
| `msdyn_presence_UserEntityInstanceDatas` | [msdyn_presence](msdyn_presence.md) | `objectid` | `objectid_msdyn_presence` |
| `msdyn_presence_ProcessSession` | [msdyn_presence](msdyn_presence.md) | `regardingobjectid` | `regardingobjectid_msdyn_presence` |
| `msdyn_presence_BulkDeleteFailures` | [msdyn_presence](msdyn_presence.md) | `regardingobjectid` | `regardingobjectid_msdyn_presence` |
| `msdyn_presence_PrincipalObjectAttributeAccesses` | [msdyn_presence](msdyn_presence.md) | `objectid` | `objectid_msdyn_presence` |
| `msdyn_msdyn_presence_msdyn_oclocalizationdata_presenceid` | [msdyn_presence](msdyn_presence.md) | `msdyn_presenceid` | `msdyn_presenceid` |
| `msdyn_msdyn_presence_msdyn_agentstatushistory_presenceid` | [msdyn_presence](msdyn_presence.md) | `msdyn_presenceid` | `msdyn_presenceid` |
| `msdyn_msdyn_presence_systemuser` | [msdyn_presence](msdyn_presence.md) | `msdyn_defaultpresenceiduser` | `msdyn_DefaultPresenceIdUser` |


## Source

Generated from [msdyn_presence (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_presence')) on 2026-05-07.