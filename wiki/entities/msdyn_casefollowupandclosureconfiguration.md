---
logical: "msdyn_casefollowupandclosureconfiguration"
display: "Case follow up and closure configuration"
entitySetName: "msdyn_casefollowupandclosureconfigurations"
primaryId: "msdyn_casefollowupandclosureconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Case follow up and closure configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_casefollowupandclosureconfiguration` |
| Display name | Case follow up and closure configuration |
| Display (plural) | Case follow up and closure configurations |
| Schema name | `msdyn_casefollowupandclosureconfiguration` |
| Entity set (Web API) | `msdyn_casefollowupandclosureconfigurations` |
| Primary id attribute | `msdyn_casefollowupandclosureconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_casefollowupandclosureconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_casefollowupandclosureconfigurations(<guid>)
POST /api/data/v9.2/msdyn_casefollowupandclosureconfigurations
PATCH /api/data/v9.2/msdyn_casefollowupandclosureconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_casefollowupandclosureconfigurations(<guid>)
```

## Attributes

Writable: **23** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_activationmode`, `msdyn_casefollowupandclosureconfigurationId`, `msdyn_caseresolutionattributes`, `msdyn_conditionname`, `msdyn_conditionXml`, `msdyn_followupemailattributes`, `msdyn_followupemailtemplates`, `msdyn_followuptrigger`, `msdyn_followupwaittimes`, `msdyn_incidententityname`, `msdyn_isdirectinvocationenabled`, `msdyn_isfullautonomous`, `msdyn_name`, `msdyn_numoffollowups`, `msdyn_preresolutionperiod`, `msdyn_ruleorder`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_casefollowupandclosureconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_casefollowupandclosureconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_casefollowupandclosureconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_casefollowupandclosureconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_casefollowupandclosureconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_autocaseclosureagentactivity_msdyn_casefollowupandclosureconfigurationid_configurationid` | _n/a_ | `msdyn_casefollowupandclosureconfigurationid` | _n/a_ |
| `msdyn_autocaseclosureagentmonitoring_msdyn_casefollowupandclosureconfiguration_configurationid` | _n/a_ | `msdyn_casefollowupandclosureconfigurationid` | _n/a_ |
| `msdyn_casefollowupandclosureconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_casefollowupandclosureconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_casefollowupandclosureconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_casefollowupandclosureconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_casefollowupandclosureconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_casefollowupandclosureconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_casefollowupandclosureconfiguration.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_casefollowupandclosureconfiguration.md) on 2026-05-06.