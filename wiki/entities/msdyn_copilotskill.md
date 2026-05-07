---
logical: "msdyn_copilotskill"
display: "Copilot Skill"
entitySetName: "msdyn_copilotskills"
primaryId: "msdyn_copilotskillid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Copilot Skill

Copilot Skill

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_copilotskill` |
| Display name | Copilot Skill |
| Display (plural) | Copilot Skill |
| Schema name | `msdyn_copilotskill` |
| Entity set (Web API) | `msdyn_copilotskills` |
| Primary id attribute | `msdyn_copilotskillid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_copilotskills?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_copilotskills(<guid>)
POST /api/data/v9.2/msdyn_copilotskills
PATCH /api/data/v9.2/msdyn_copilotskills(<guid>)
DELETE /api/data/v9.2/msdyn_copilotskills(<guid>)
```

## Attributes

Writable: **11** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_copilotskillId`, `msdyn_featureconfiguration`, `msdyn_name`, `msdyn_uniquename`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_copilotskill_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_copilotskill_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_copilotskill_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_copilotskill_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_copilotskill` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_copilotskill_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilotskill_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilotskill_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_copilotskill_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_copilotskill_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilotskill_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_copilotskill_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilotskill_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_msdyn_copilotskill_msdyn_copilotskillrole_copilotskillid` | _n/a_ | `msdyn_copilotskillid` | _n/a_ |
| `msdyn_msdyn_copilotskill_msdyn_copilotstarterprompt_copilotskill` | _n/a_ | `msdyn_copilotskill` | _n/a_ |
| `msdyn_organizationprompt_msdyn_skill_msdyn_copilotskill` | _n/a_ | `msdyn_skill` | _n/a_ |


## Source

Generated from [msdyn_copilotskill.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_copilotskill.md) on 2026-05-06.