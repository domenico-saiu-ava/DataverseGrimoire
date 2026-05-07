---
logical: "governanceconfiguration"
display: "Governance Configuration"
entitySetName: "governanceconfigurations"
primaryId: "governanceconfigurationid"
primaryName: "scope"
tableType: "Standard"
ownership: "UserOwned"
---

# Governance Configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `governanceconfiguration` |
| Display name | Governance Configuration |
| Display (plural) | Governance Configurations |
| Schema name | `GovernanceConfiguration` |
| Entity set (Web API) | `governanceconfigurations` |
| Primary id attribute | `governanceconfigurationid` |
| Primary name attribute | `scope` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/governanceconfigurations?$select=scope&$top=10
GET /api/data/v9.2/governanceconfigurations(<guid>)
POST /api/data/v9.2/governanceconfigurations
PATCH /api/data/v9.2/governanceconfigurations(<guid>)
DELETE /api/data/v9.2/governanceconfigurations(<guid>)
```

## Attributes

Writable: **16** · Read-only: **12**

### Writable

`ConfigurationType`, `ConfigurationValues`, `Enabled`, `GovernanceConfigurationId`, `ImportSequenceNumber`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `Scope`, `ScopeId`, `statecode`, `statuscode`, `TenantId`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`, `Version`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_governanceconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_governanceconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_governanceconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_governanceconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_governanceconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_governanceconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_governanceconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `user_governanceconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `governanceconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `governanceconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `governanceconfiguration_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `governanceconfiguration_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `governanceconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `governanceconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `governanceconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `governanceconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [governanceconfiguration.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/governanceconfiguration.md) on 2026-05-06.