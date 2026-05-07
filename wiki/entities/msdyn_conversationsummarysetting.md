---
logical: "msdyn_conversationsummarysetting"
display: "Conversation Summary Setting"
entitySetName: "msdyn_conversationsummarysettings"
primaryId: "msdyn_conversationsummarysettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Conversation Summary Setting

Conversation Summary Settings Entity

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_conversationsummarysetting` |
| Display name | Conversation Summary Setting |
| Display (plural) | Conversation Summary Settings |
| Schema name | `msdyn_conversationsummarysetting` |
| Entity set (Web API) | `msdyn_conversationsummarysettings` |
| Primary id attribute | `msdyn_conversationsummarysettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_conversationsummarysettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_conversationsummarysettings(<guid>)
POST /api/data/v9.2/msdyn_conversationsummarysettings
PATCH /api/data/v9.2/msdyn_conversationsummarysettings(<guid>)
DELETE /api/data/v9.2/msdyn_conversationsummarysettings(<guid>)
```

## Attributes

Writable: **16** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_allagentsenabled`, `msdyn_conversationends`, `msdyn_conversationsummarysettingId`, `msdyn_enabledforagents`, `msdyn_name`, `msdyn_previewlanguages`, `msdyn_showcreatecase`, `msdyn_systemagentlist`, `msdyn_whenagentjoins`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_conversationsummarysetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationsummarysetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationsummarysetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationsummarysetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_conversationsummarysetting` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationsummarysetting_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationsummarysetting_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationsummarysetting_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationsummarysetting_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_conversationsummarysetting_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationsummarysetting_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_conversationsummarysetting.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_conversationsummarysetting.md) on 2026-05-06.