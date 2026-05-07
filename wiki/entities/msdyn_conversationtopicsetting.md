---
logical: "msdyn_conversationtopicsetting"
display: "Conversation Topic Setting"
entitySetName: "msdyn_conversationtopicsettings"
primaryId: "msdyn_conversationtopicsettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Conversation Topic Setting

Conversation Topic Setting Entity

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_conversationtopicsetting` |
| Display name | Conversation Topic Setting |
| Display (plural) | Conversation Topic Settings |
| Schema name | `msdyn_conversationtopicsetting` |
| Entity set (Web API) | `msdyn_conversationtopicsettings` |
| Primary id attribute | `msdyn_conversationtopicsettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_conversationtopicsettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_conversationtopicsettings(<guid>)
POST /api/data/v9.2/msdyn_conversationtopicsettings
PATCH /api/data/v9.2/msdyn_conversationtopicsettings(<guid>)
DELETE /api/data/v9.2/msdyn_conversationtopicsettings(<guid>)
```

## Attributes

Writable: **13** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_conversationtopicsettingId`, `msdyn_Enabled`, `msdyn_IgnoreList`, `msdyn_name`, `msdyn_TopicAutomationEnabled`, `msdyn_topictraininglanguage`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_conversationtopicsetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationtopicsetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationtopicsetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationtopicsetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_conversationtopicsetting` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationtopicsetting_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationtopicsetting_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationtopicsetting_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationtopicsetting_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_conversationtopicsetting_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationtopicsetting_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_conversationtopicsetting.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_conversationtopicsetting.md) on 2026-05-06.