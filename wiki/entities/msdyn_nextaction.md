---
logical: "msdyn_nextaction"
display: "Next Action"
entitySetName: "msdyn_nextactions"
primaryId: "msdyn_nextactionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Next Action

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_nextaction` |
| Display name | Next Action |
| Display (plural) | Next Actions |
| Schema name | `msdyn_nextaction` |
| Entity set (Web API) | `msdyn_nextactions` |
| Primary id attribute | `msdyn_nextactionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_nextactions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_nextactions(<guid>)
POST /api/data/v9.2/msdyn_nextactions
PATCH /api/data/v9.2/msdyn_nextactions(<guid>)
DELETE /api/data/v9.2/msdyn_nextactions(<guid>)
```

## Attributes

Writable: **15** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_actiondata`, `msdyn_actiontype`, `msdyn_isfullautonomous`, `msdyn_Name`, `msdyn_nextactionId`, `msdyn_regarding`, `msdyn_regardingIdType`, `msdyn_validfrom`, `msdyn_validto`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_nextaction_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_nextaction_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_nextaction_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_nextaction_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_nextaction_regarding_incident` | [incident](incident.md) | `msdyn_regarding` | `msdyn_regarding` |
| `organization_msdyn_nextaction` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_nextaction_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_nextaction_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_nextaction_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_nextaction_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_nextaction_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_nextaction_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_nextaction.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_nextaction.md) on 2026-05-06.