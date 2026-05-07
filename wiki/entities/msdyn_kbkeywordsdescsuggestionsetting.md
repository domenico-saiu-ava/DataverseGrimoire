---
logical: "msdyn_kbkeywordsdescsuggestionsetting"
display: "Keywords Description Suggestion Setting"
entitySetName: "msdyn_kbkeywordsdescsuggestionsettings"
primaryId: "msdyn_kbkeywordsdescsuggestionsettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Keywords Description Suggestion Setting

Keywords Description Suggestion settings entity

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_kbkeywordsdescsuggestionsetting` |
| Display name | Keywords Description Suggestion Setting |
| Display (plural) | Keywords Description Suggestion Settings |
| Schema name | `msdyn_kbkeywordsdescsuggestionsetting` |
| Entity set (Web API) | `msdyn_kbkeywordsdescsuggestionsettings` |
| Primary id attribute | `msdyn_kbkeywordsdescsuggestionsettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_kbkeywordsdescsuggestionsettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_kbkeywordsdescsuggestionsettings(<guid>)
POST /api/data/v9.2/msdyn_kbkeywordsdescsuggestionsettings
PATCH /api/data/v9.2/msdyn_kbkeywordsdescsuggestionsettings(<guid>)
DELETE /api/data/v9.2/msdyn_kbkeywordsdescsuggestionsettings(<guid>)
```

## Attributes

Writable: **13** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_IsEnabled`, `msdyn_IsOverridden`, `msdyn_KbContentMapping`, `msdyn_kbkeywordsdescsuggestionsettingId`, `msdyn_KbTitleMapping`, `msdyn_name`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_kbkeywordsdescsuggestionsetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_kbkeywordsdescsuggestionsetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_kbkeywordsdescsuggestionsetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_kbkeywordsdescsuggestionsetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_kbkeywordsdescsuggestionsetting` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_kbkeywordsdescsuggestionsetting_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_kbkeywordsdescsuggestionsetting_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_kbkeywordsdescsuggestionsetting_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_kbkeywordsdescsuggestionsetting_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_kbkeywordsdescsuggestionsetting_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_kbkeywordsdescsuggestionsetting_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_kbkeywordsdescsuggestionsetting.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_kbkeywordsdescsuggestionsetting.md) on 2026-05-06.