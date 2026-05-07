---
logical: "msdyn_organizationprompt"
display: "Organization Prompt"
entitySetName: "msdyn_organizationprompts"
primaryId: "msdyn_organizationpromptid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Organization Prompt

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_organizationprompt` |
| Display name | Organization Prompt |
| Display (plural) | Organization Prompt |
| Schema name | `msdyn_organizationprompt` |
| Entity set (Web API) | `msdyn_organizationprompts` |
| Primary id attribute | `msdyn_organizationpromptid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_organizationprompts?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_organizationprompts(<guid>)
POST /api/data/v9.2/msdyn_organizationprompts
PATCH /api/data/v9.2/msdyn_organizationprompts(<guid>)
DELETE /api/data/v9.2/msdyn_organizationprompts(<guid>)
```

## Attributes

Writable: **19** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_clienteventdata`, `msdyn_entityname`, `msdyn_name`, `msdyn_organizationpromptfiltervalue`, `msdyn_organizationpromptId`, `msdyn_orgpromptfiltervalue`, `msdyn_prompt`, `msdyn_promptalias`, `msdyn_promptinstruction`, `msdyn_promptscope`, `msdyn_showinguide`, `msdyn_skill`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_organizationprompt_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_organizationprompt_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_organizationprompt_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_organizationprompt_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_organizationprompt_msdyn_skill_msdyn_copilotskill` | [msdyn_copilotskill](msdyn_copilotskill.md) | `msdyn_skill` | `msdyn_skill` |
| `organization_msdyn_organizationprompt` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_organizationprompt_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_organizationprompt_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_organizationprompt_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_organizationprompt_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_organizationprompt_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_organizationprompt_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_organizationprompt_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_organizationprompt_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_organizationprompt.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_organizationprompt.md) on 2026-05-06.