---
logical: "attributeclusterconfig"
display: "Attribute Cluster Config"
entitySetName: "attributeclusterconfigs"
primaryId: "attributeclusterconfigid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Attribute Cluster Config

Holds Attribute Cluster configuration for entities

## Identity

| Property | Value |
| --- | --- |
| Logical name | `attributeclusterconfig` |
| Display name | Attribute Cluster Config |
| Display (plural) | Attribute Cluster Configs |
| Schema name | `AttributeClusterConfig` |
| Entity set (Web API) | `attributeclusterconfigs` |
| Primary id attribute | `attributeclusterconfigid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/attributeclusterconfigs?$select=name&$top=10
GET /api/data/v9.2/attributeclusterconfigs(<guid>)
POST /api/data/v9.2/attributeclusterconfigs
PATCH /api/data/v9.2/attributeclusterconfigs(<guid>)
DELETE /api/data/v9.2/attributeclusterconfigs(<guid>)
```

## Attributes

Writable: **11** · Read-only: **15**

### Writable

`AttributeClusterConfigId`, `ExtensionOfRecordId`, `ImportSequenceNumber`, `IsCustomizable`, `IsInheritedParentForCluster`, `OverriddenCreatedOn`, `SkipAutoReplicate`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `Name`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `attributeclusterconfig_extensionofrecordid_attribute` | [attribute](attribute.md) | `extensionofrecordid` | `Attribute` |
| `lk_attributeclusterconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_attributeclusterconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_attributeclusterconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_attributeclusterconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_attributeclusterconfig` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `attributeclusterconfig_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `attributeclusterconfig_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `attributeclusterconfig_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `attributeclusterconfig_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `attributeclusterconfig_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `attributeclusterconfig_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [attributeclusterconfig.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/attributeclusterconfig.md) on 2026-05-06.