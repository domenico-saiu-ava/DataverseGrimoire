---
logical: "msdyn_knowledgeconfiguration"
display: "Knowledge Configuration"
entitySetName: "msdyn_knowledgeconfigurations"
primaryId: "msdyn_knowledgeconfigurationid"
primaryName: "msdyn_settingname"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Knowledge Configuration

Represents the possible settings used in Knowledge management

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_knowledgeconfiguration` |
| Display name | Knowledge Configuration |
| Display (plural) | Knowledge Configurations |
| Schema name | `msdyn_knowledgeconfiguration` |
| Entity set (Web API) | `msdyn_knowledgeconfigurations` |
| Primary id attribute | `msdyn_knowledgeconfigurationid` |
| Primary name attribute | `msdyn_settingname` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_knowledgeconfigurations?$select=msdyn_settingname&$top=10
GET /api/data/v9.2/msdyn_knowledgeconfigurations(<guid>)
POST /api/data/v9.2/msdyn_knowledgeconfigurations
PATCH /api/data/v9.2/msdyn_knowledgeconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_knowledgeconfigurations(<guid>)
```

## Attributes

Writable: **11** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_datatype`, `msdyn_groupname`, `msdyn_knowledgeconfigurationId`, `msdyn_settingname`, `msdyn_settingvalue`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_knowledgeconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_knowledgeconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_knowledgeconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_knowledgeconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_knowledgeconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_knowledgeconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_knowledgeconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_knowledgeconfiguration_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_knowledgeconfiguration_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_knowledgeconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_knowledgeconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_knowledgeconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_knowledgeconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_knowledgeconfiguration.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_knowledgeconfiguration.md) on 2026-05-06.