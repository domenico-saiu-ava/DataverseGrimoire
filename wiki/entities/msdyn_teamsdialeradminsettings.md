---
logical: "msdyn_teamsdialeradminsettings"
display: "Teams Dialer Admin settings"
entitySetName: "msdyn_teamsdialeradminsettingset"
primaryId: "msdyn_teamsdialeradminsettingsid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
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

`ImportSequenceNumber`, `msdyn_addparticipantenabled`, `msdyn_answerexternalincomingcalls`, `msdyn_AppModules`, `msdyn_CICallPaneEntryPoints`, `msdyn_ignoreinternalincomingcalls`, `msdyn_LayoutSchema`, `msdyn_name`, `msdyn_RecordingSecurityRoles`, `msdyn_SecurityRoles`, `msdyn_SecurityRolesAllSelected`, `msdyn_teamsdialeradminsettingsId`, `msdyn_transfercallsenabled`, `msdyn_valuesjson`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_teamsdialeradminsettings_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_teamsdialeradminsettings_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_teamsdialeradminsettings_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_teamsdialeradminsettings_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_teamsdialeradminsettings` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_teamsdialeradminsettings_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_teamsdialeradminsettings_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_teamsdialeradminsettings_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_teamsdialeradminsettings_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_teamsdialeradminsettings_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_teamsdialeradminsettings_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_teamsdialeradminsettings_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_teamsdialeradminsettings_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_teamsdialeradminsettings.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_teamsdialeradminsettings.md) on 2026-05-06.