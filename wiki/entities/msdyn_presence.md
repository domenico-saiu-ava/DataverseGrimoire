---
logical: "msdyn_presence"
display: "Presence"
entitySetName: "msdyn_presences"
primaryId: "msdyn_presenceid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Presence

Stores presence status information

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_presence` |
| Display name | Presence |
| Display (plural) | Presence |
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

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_basepresencestatus`, `msdyn_canuserset`, `msdyn_description`, `msdyn_name`, `msdyn_presenceId`, `msdyn_presencestatustext`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_presence_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_presence_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_presence_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_presence_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_presence` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_presence_msdyn_agentcapacityupdatehistory_presenceid` | _n/a_ | `msdyn_presenceid` | _n/a_ |
| `msdyn_msdyn_presence_msdyn_agentstatushistory_presenceid` | _n/a_ | `msdyn_presenceid` | _n/a_ |
| `msdyn_msdyn_presence_systemuser` | _n/a_ | `msdyn_defaultpresenceiduser` | _n/a_ |
| `msdyn_presence_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_presence_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_presence_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_presence_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_presence_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_presence_msdyn_agentstatus_currentpresenceid` | _n/a_ | `msdyn_currentpresenceid` | _n/a_ |
| `msdyn_presence_msdyn_omnichannelconfiguration_msdyn_dnd_presence_lookup` | _n/a_ | `msdyn_dnd_presence_lookup` | _n/a_ |
| `msdyn_presence_msdyn_omnichannelconfiguration_msdyn_inactive_presence_lookup` | _n/a_ | `msdyn_inactive_presence_lookup` | _n/a_ |
| `msdyn_presence_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_presence_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_presence_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_presence.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_presence.md) on 2026-05-06.