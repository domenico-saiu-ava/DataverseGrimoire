---
logical: "msdyn_activityanalysisconfig"
display: "Relationship Analytics Config"
entitySetName: "msdyn_activityanalysisconfigs"
primaryId: "msdyn_activityanalysisconfigid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Relationship Analytics Config

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_activityanalysisconfig` |
| Display name | Relationship Analytics Config |
| Display (plural) | RelationshipAnalysisConfigs |
| Schema name | `msdyn_activityanalysisconfig` |
| Entity set (Web API) | `msdyn_activityanalysisconfigs` |
| Primary id attribute | `msdyn_activityanalysisconfigid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_activityanalysisconfigs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_activityanalysisconfigs(<guid>)
POST /api/data/v9.2/msdyn_activityanalysisconfigs
PATCH /api/data/v9.2/msdyn_activityanalysisconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_activityanalysisconfigs(<guid>)
```

## Attributes

Writable: **28** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_activityanalysisconfigId`, `msdyn_communicationfrequency`, `msdyn_currentstatus`, `msdyn_datasource`, `msdyn_emailweight`, `msdyn_exchangemarsstatus`, `msdyn_healthfeaturestatus`, `msdyn_ignoreexchangeoptincheck`, `msdyn_inmailweight`, `msdyn_isaprilpreviewenabled`, `msdyn_islinkedinenabled`, `msdyn_isorgsettingenable`, `msdyn_linkedinstatus`, `msdyn_meetingweight`, `msdyn_name`, `msdyn_oneclickactivityanalysisprovisioning`, `msdyn_orgtypesuffix`, `msdyn_otheractivites`, `msdyn_overflowentitylist`, `msdyn_phonecallweight`, `msdyn_taskweight`, `msdyn_timelineactivites`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_activityanalysisconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_activityanalysisconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_activityanalysisconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_activityanalysisconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_activityanalysisconfig` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_activityanalysisconfig_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_activityanalysisconfig_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_activityanalysisconfig_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_activityanalysisconfig_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_activityanalysisconfig_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_activityanalysisconfig_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_activityanalysisconfig.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_activityanalysisconfig.md) on 2026-05-06.