---
logical: "msdyn_workflowactionstatus"
display: "Workflow Action Status"
entitySetName: "msdyn_workflowactionstatuses"
primaryId: "msdyn_workflowactionstatusid"
primaryName: "msdyn_actionname"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Workflow Action Status

PA Workflows action processing status

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_workflowactionstatus` |
| Display name | Workflow Action Status |
| Display (plural) | Workflow Action Statuses |
| Schema name | `msdyn_workflowactionstatus` |
| Entity set (Web API) | `msdyn_workflowactionstatuses` |
| Primary id attribute | `msdyn_workflowactionstatusid` |
| Primary name attribute | `msdyn_actionname` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_workflowactionstatuses?$select=msdyn_actionname&$top=10
GET /api/data/v9.2/msdyn_workflowactionstatuses(<guid>)
POST /api/data/v9.2/msdyn_workflowactionstatuses
PATCH /api/data/v9.2/msdyn_workflowactionstatuses(<guid>)
DELETE /api/data/v9.2/msdyn_workflowactionstatuses(<guid>)
```

## Attributes

Writable: **15** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_actionerrors`, `msdyn_actionname`, `msdyn_actionresult`, `msdyn_actionstatus`, `msdyn_extendedpayload`, `msdyn_workflowactionstatusId`, `msdyn_workflowid`, `msdyn_workflowrunid`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_workflowactionstatus_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_workflowactionstatus_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_workflowactionstatus_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_workflowactionstatus_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_workflowactionstatus` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_workflowactionstatus_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_workflowactionstatus_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_workflowactionstatus_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_workflowactionstatus_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_workflowactionstatus_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_workflowactionstatus_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_workflowactionstatus.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_workflowactionstatus.md) on 2026-05-06.