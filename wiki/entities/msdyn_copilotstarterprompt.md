---
logical: "msdyn_copilotstarterprompt"
display: "Copilot Starter Prompt"
entitySetName: "msdyn_copilotstarterprompts"
primaryId: "msdyn_copilotstarterpromptid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Copilot Starter Prompt

List of starter prompts for Copilot skills

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_copilotstarterprompt` |
| Display name | Copilot Starter Prompt |
| Display (plural) | Copilot Starter Prompts |
| Schema name | `msdyn_copilotstarterprompt` |
| Entity set (Web API) | `msdyn_copilotstarterprompts` |
| Primary id attribute | `msdyn_copilotstarterpromptid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_copilotstarterprompts?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_copilotstarterprompts(<guid>)
POST /api/data/v9.2/msdyn_copilotstarterprompts
PATCH /api/data/v9.2/msdyn_copilotstarterprompts(<guid>)
DELETE /api/data/v9.2/msdyn_copilotstarterprompts(<guid>)
```

## Attributes

Writable: **16** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_copilotskill`, `msdyn_copilotstarterpromptId`, `msdyn_name`, `msdyn_section1prompt`, `msdyn_section1title`, `msdyn_section2prompt`, `msdyn_section2title`, `msdyn_section3prompt`, `msdyn_section3title`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_copilotstarterprompt_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_copilotstarterprompt_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_copilotstarterprompt_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_copilotstarterprompt_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_copilotskill_msdyn_copilotstarterprompt_copilotskill` | [msdyn_copilotskill](msdyn_copilotskill.md) | `msdyn_copilotskill` | `msdyn_copilotskill` |
| `organization_msdyn_copilotstarterprompt` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_copilotstarterprompt_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilotstarterprompt_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilotstarterprompt_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_copilotstarterprompt_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_copilotstarterprompt_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilotstarterprompt_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_copilotstarterprompt_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilotstarterprompt_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_copilotstarterprompt.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_copilotstarterprompt.md) on 2026-05-06.