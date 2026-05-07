---
logical: "msdyn_unifiedroutingsetuptracker"
display: "Unified Routing Setup Tracker"
entitySetName: "msdyn_unifiedroutingsetuptrackers"
primaryId: "msdyn_unifiedroutingsetuptrackerid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Unified Routing Setup Tracker

Unified Routing Setup Trackers

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_unifiedroutingsetuptracker` |
| Display name | Unified Routing Setup Tracker |
| Display (plural) | Unified Routing Setup Trackers |
| Schema name | `msdyn_unifiedroutingsetuptracker` |
| Entity set (Web API) | `msdyn_unifiedroutingsetuptrackers` |
| Primary id attribute | `msdyn_unifiedroutingsetuptrackerid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_unifiedroutingsetuptrackers?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_unifiedroutingsetuptrackers(<guid>)
POST /api/data/v9.2/msdyn_unifiedroutingsetuptrackers
PATCH /api/data/v9.2/msdyn_unifiedroutingsetuptrackers(<guid>)
DELETE /api/data/v9.2/msdyn_unifiedroutingsetuptrackers(<guid>)
```

## Attributes

Writable: **18** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_enableunifiedrouting`, `msdyn_errorcode`, `msdyn_errormessage`, `msdyn_executionstatus`, `msdyn_issuccessnotificationdisplayed`, `msdyn_isTeachingBubbleDisplayed`, `msdyn_name`, `msdyn_servicerequestid`, `msdyn_skipProvisioning`, `msdyn_token`, `msdyn_transactionid`, `msdyn_unifiedroutingsetuptrackerId`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_unifiedroutingsetuptracker_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_unifiedroutingsetuptracker_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_unifiedroutingsetuptracker_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_unifiedroutingsetuptracker_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_unifiedroutingsetuptracker` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_unifiedroutingsetuptracker_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_unifiedroutingsetuptracker_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_unifiedroutingsetuptracker_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_unifiedroutingsetuptracker_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_unifiedroutingsetuptracker_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_unifiedroutingsetuptracker_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_unifiedroutingsetuptracker_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_unifiedroutingsetuptracker_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_unifiedroutingsetuptracker.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_unifiedroutingsetuptracker.md) on 2026-05-06.