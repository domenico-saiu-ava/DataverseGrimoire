---
logical: "msdyn_suggestionssetting"
display: "Suggestions Setting"
entitySetName: "msdyn_suggestionssettings"
primaryId: "msdyn_suggestionssettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Suggestions Setting

Suggestions settings entity

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_suggestionssetting` |
| Display name | Suggestions Setting |
| Display (plural) | Suggestions Settings |
| Schema name | `msdyn_suggestionssetting` |
| Entity set (Web API) | `msdyn_suggestionssettings` |
| Primary id attribute | `msdyn_suggestionssettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_suggestionssettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_suggestionssettings(<guid>)
POST /api/data/v9.2/msdyn_suggestionssettings
PATCH /api/data/v9.2/msdyn_suggestionssettings(<guid>)
DELETE /api/data/v9.2/msdyn_suggestionssettings(<guid>)
```

## Attributes

Writable: **28** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_casecustommapping`, `msdyn_casecustommodelmapping`, `msdyn_CaseDetailMapping`, `msdyn_CaseDetailModelMapping`, `msdyn_CaseIsEnabled`, `msdyn_casepreprocessingrule`, `msdyn_casepreprocessingruleenabled`, `msdyn_CaseTitleMapping`, `msdyn_CaseTitleModelMapping`, `msdyn_KBContentMapping`, `msdyn_KBContentModelMapping`, `msdyn_kbcustommapping`, `msdyn_kbcustommodelmapping`, `msdyn_KBIsEnabled`, `msdyn_kbpreprocessingrule`, `msdyn_kbpreprocessingruleenabled`, `msdyn_KBTitleMapping`, `msdyn_KBTitleModelMapping`, `msdyn_name`, `msdyn_refreshonsaveevent`, `msdyn_suggestionssettingId`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_suggestionssetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_suggestionssetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_suggestionssetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_suggestionssetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_suggestionssetting` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_suggestionssetting_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_suggestionssetting_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_suggestionssetting_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_suggestionssetting_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_suggestionssetting_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_suggestionssetting_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_suggestionssetting.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_suggestionssetting.md) on 2026-05-06.