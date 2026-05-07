---
logical: "emailaddressconfiguration"
display: "Email Address Configuration"
entitySetName: "emailaddressconfigurations"
primaryId: "emailaddressconfigurationid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Email Address Configuration

Entity which stores configuration metadata for Email Address type fields

## Identity

| Property | Value |
| --- | --- |
| Logical name | `emailaddressconfiguration` |
| Display name | Email Address Configuration |
| Display (plural) | Email Address Configurations |
| Schema name | `EmailAddressConfiguration` |
| Entity set (Web API) | `emailaddressconfigurations` |
| Primary id attribute | `emailaddressconfigurationid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/emailaddressconfigurations?$select=name&$top=10
GET /api/data/v9.2/emailaddressconfigurations(<guid>)
POST /api/data/v9.2/emailaddressconfigurations
PATCH /api/data/v9.2/emailaddressconfigurations(<guid>)
DELETE /api/data/v9.2/emailaddressconfigurations(<guid>)
```

## Attributes

Writable: **12** · Read-only: **14**

### Writable

`AttributeId`, `DoNotResolve`, `EmailAddressConfigurationId`, `EntityId`, `ImportSequenceNumber`, `IsCustomizable`, `Name`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `emailaddressconfiguration_attribute_AttributeId` | [attribute](attribute.md) | `attributeid` | `AttributeId_EmailAddressConfiguration` |
| `emailaddressconfiguration_entity_EntityId` | [entity](entity.md) | `entityid` | `EntityId_EmailAddressConfiguration` |
| `lk_emailaddressconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_emailaddressconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_emailaddressconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_emailaddressconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_emailaddressconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `emailaddressconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `emailaddressconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `emailaddressconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `emailaddressconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `emailaddressconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [emailaddressconfiguration.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/emailaddressconfiguration.md) on 2026-05-06.