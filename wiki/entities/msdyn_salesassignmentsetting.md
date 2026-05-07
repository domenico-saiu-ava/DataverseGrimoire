---
logical: "msdyn_salesassignmentsetting"
display: "Sales Assignment Setting"
entitySetName: "msdyn_salesassignmentsettings"
primaryId: "msdyn_salesassignmentsettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Sales Assignment Setting

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salesassignmentsetting` |
| Display name | Sales Assignment Setting |
| Display (plural) | msdyn_salesassignmentsettings |
| Schema name | `msdyn_salesassignmentsetting` |
| Entity set (Web API) | `msdyn_salesassignmentsettings` |
| Primary id attribute | `msdyn_salesassignmentsettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salesassignmentsettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_salesassignmentsettings(<guid>)
POST /api/data/v9.2/msdyn_salesassignmentsettings
PATCH /api/data/v9.2/msdyn_salesassignmentsettings(<guid>)
DELETE /api/data/v9.2/msdyn_salesassignmentsettings(<guid>)
```

## Attributes

Writable: **17** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_customownerfield`, `msdyn_defaultcapacity`, `msdyn_enabledtime`, `msdyn_name`, `msdyn_opportunityroutingenabled`, `msdyn_reassignmentbatchcount`, `msdyn_reassignmentbatchsize`, `msdyn_roundrobinscope`, `msdyn_RuleInfoEnabled`, `msdyn_salesassignmentsettingId`, `msdyn_verboselogging`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_salesassignmentsetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salesassignmentsetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salesassignmentsetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salesassignmentsetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_salesassignmentsetting` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salesassignmentsetting_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesassignmentsetting_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesassignmentsetting_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesassignmentsetting_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_salesassignmentsetting_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesassignmentsetting_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_salesassignmentsetting.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_salesassignmentsetting.md) on 2026-05-06.