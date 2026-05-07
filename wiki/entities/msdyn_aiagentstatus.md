---
logical: "msdyn_aiagentstatus"
display: "AI Agent Status"
entitySetName: "msdyn_aiagentstatuses"
primaryId: "msdyn_aiagentstatusid"
primaryName: "msdyn_currentaistatus"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# AI Agent Status

Tracks the status of the AI agent for the given record

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aiagentstatus` |
| Display name | AI Agent Status |
| Display (plural) | AI Agent Statuses |
| Schema name | `msdyn_aiagentstatus` |
| Entity set (Web API) | `msdyn_aiagentstatuses` |
| Primary id attribute | `msdyn_aiagentstatusid` |
| Primary name attribute | `msdyn_currentaistatus` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aiagentstatuses?$select=msdyn_currentaistatus&$top=10
GET /api/data/v9.2/msdyn_aiagentstatuses(<guid>)
POST /api/data/v9.2/msdyn_aiagentstatuses
PATCH /api/data/v9.2/msdyn_aiagentstatuses(<guid>)
DELETE /api/data/v9.2/msdyn_aiagentstatuses(<guid>)
```

## Attributes

Writable: **10** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_aiagentstatusId`, `msdyn_currentaistatus`, `msdyn_escalatedon`, `msdyn_fallbackreason`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_aiagentstatus_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aiagentstatus_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aiagentstatus_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aiagentstatus_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_aiagentstatus` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aiagentstatus_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aiagentstatus_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aiagentstatus_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aiagentstatus_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_aiagentstatus_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aiagentstatus_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_incident_msdyn_aiagentstatus` | _n/a_ | `msdyn_aiagentstatus` | _n/a_ |


## Source

Generated from [msdyn_aiagentstatus.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_aiagentstatus.md) on 2026-05-06.